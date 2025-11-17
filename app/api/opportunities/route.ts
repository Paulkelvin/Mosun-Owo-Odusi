import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Opportunity from '@/models/Opportunity';
import FetchLog from '@/models/FetchLog';
import { fetchAllOpportunities, getSourceStatistics } from '@/lib/api-sources/aggregator';
import { cleanupExpiredJobs } from '@/lib/cleanup/expiredJobs';

const CACHE_DURATION_HOURS = 24; // Refresh data every 24 hours

/**
 * Check if data should be refreshed based on last fetch time
 */
async function shouldRefreshData(): Promise<boolean> {
  try {
    const log = await FetchLog.findOne().sort({ lastFetchedAt: -1 });
    
    if (!log) return true; // No fetch log, need to fetch
    
    const hoursSinceLastFetch = (Date.now() - log.lastFetchedAt.getTime()) / (1000 * 60 * 60);
    
    return hoursSinceLastFetch >= CACHE_DURATION_HOURS;
  } catch (error) {
    console.error('Error checking fetch log:', error);
    return false; // Don't refresh on error
  }
}

/**
 * Refresh opportunities data from all API sources
 */
async function refreshOpportunitiesData(): Promise<{ added: number; updated: number; errors: number }> {
  console.log('🔄 Starting multi-source opportunities refresh...');
  
  // Step 1: Clean up expired jobs BEFORE fetching new ones
  await cleanupExpiredJobs();
  
  let added = 0;
  let updated = 0;
  let errors = 0;

  try {
    // Fetch from all sources
    const opportunities = await fetchAllOpportunities();
    
    if (opportunities.length === 0) {
      console.log('⚠️ No opportunities fetched from any source');
      return { added: 0, updated: 0, errors: 0 };
    }

    // Process each opportunity
    for (const opp of opportunities) {
      try {
        // Check for existing opportunity (duplicate prevention)
        const existing = await Opportunity.findOne({
          title: opp.title,
          organization: opp.organization
        });

        if (existing) {
          // Update existing opportunity
          await Opportunity.updateOne(
            { _id: existing._id },
            {
              $set: {
                ...opp,
                updatedAt: new Date()
              }
            }
          );
          updated++;
        } else {
          // Create new opportunity
          await Opportunity.create(opp);
          added++;
        }
      } catch (error: any) {
        // Skip duplicate key errors (might occur due to race conditions)
        if (error.code === 11000) {
          console.log(`⚠️ Duplicate skipped: ${opp.title}`);
        } else {
          console.error(`❌ Error saving opportunity: ${opp.title}`, error);
          errors++;
        }
      }
    }

    // Get source statistics
    const sourceStats = getSourceStatistics(opportunities);

    // Update fetch log (upsert to avoid duplicate key errors)
    await FetchLog.findOneAndUpdate(
      { source: 'multi-source' },
      {
        source: 'multi-source',
        lastFetchedAt: new Date(),
        itemsFetched: opportunities.length,
        status: errors > opportunities.length / 2 ? 'partial' : 'success',
        errorMessage: errors > 0 ? `${errors} items failed to save` : null,
        metadata: {
          added,
          updated,
          sources: sourceStats
        }
      },
      { upsert: true, new: true }
    );

    console.log(`✅ Refresh complete: ${added} added, ${updated} updated, ${errors} errors`);
    console.log(`📊 Source breakdown:`, sourceStats);
    
    return { added, updated, errors };
    
  } catch (error) {
    console.error('❌ Fatal error during refresh:', error);
    
    // Log the failure (upsert to avoid duplicate key errors)
    await FetchLog.findOneAndUpdate(
      { source: 'multi-source' },
      {
        source: 'multi-source',
        lastFetchedAt: new Date(),
        itemsFetched: 0,
        status: 'failed',
        errorMessage: error instanceof Error ? error.message : 'Unknown error'
      },
      { upsert: true, new: true }
    );
    
    throw error;
  }
}

/**
 * GET /api/opportunities
 * Fetch paginated and filtered opportunities
 */
export async function GET(request: NextRequest) {
  try {
    // Connect to database
    await connectToDatabase();
    console.log('✅ Database connected');

    // Extract query parameters
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    const location = searchParams.get('location') || '';
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';

    console.log('📊 Query params:', { page, limit, search, category, location });

    // Background refresh check (non-blocking)
    shouldRefreshData().then(async (needsRefresh) => {
      if (needsRefresh) {
        console.log('🔄 Background refresh triggered');
        try {
          await refreshOpportunitiesData();
        } catch (error) {
          console.error('❌ Background refresh failed:', error);
        }
      }
    }).catch(err => console.error('Error checking refresh:', err));

    // Build filter query
    const filter: any = {};

    // Search in title, organization, description
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { organization: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    // Filter by category
    if (category) {
      filter.category = category;
    }

    // Filter by location
    if (location) {
      filter.location = { $regex: location, $options: 'i' };
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Get total count for pagination
    const totalItems = await Opportunity.countDocuments(filter);
    const totalPages = Math.ceil(totalItems / limit);

    console.log('📊 Database stats:', { totalItems, totalPages, filter });

    // If database is empty, trigger immediate refresh
    if (totalItems === 0) {
      console.log('📭 Database empty, triggering immediate refresh...');
      try {
        await refreshOpportunitiesData();
        // Retry the query after refresh
        const retryTotal = await Opportunity.countDocuments(filter);
        console.log(`✅ Refresh complete, now have ${retryTotal} opportunities`);
      } catch (refreshError) {
        console.error('❌ Failed to refresh data:', refreshError);
        // Continue anyway to show empty state
      }
    }

    // Build sort object
    const sort: any = {};
    sort[sortBy] = sortOrder === 'asc' ? 1 : -1;

    // Fetch opportunities with pagination
    const opportunities = await Opportunity.find(filter)
      .sort(sort)
      .limit(limit)
      .skip(skip)
      .lean() // Better performance
      .exec();

    // Get unique filter options for frontend
    const [categories, locations] = await Promise.all([
      Opportunity.distinct('category'),
      Opportunity.distinct('location')
    ]);

    // Return response
    return NextResponse.json({
      success: true,
      data: {
        opportunities,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
          limit
        },
        filters: {
          categories: categories.sort(),
          locations: locations.sort()
        }
      }
    });

  } catch (error) {
    console.error('❌ Error in GET /api/opportunities:', error);
    console.error('Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace'
    });
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch opportunities',
        message: error instanceof Error ? error.message : 'Unknown error',
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.stack : String(error)) : undefined
      },
      { status: 500 }
    );
  }
}
