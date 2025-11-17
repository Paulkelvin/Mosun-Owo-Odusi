import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Opportunity from '@/models/Opportunity';
import FetchLog from '@/models/FetchLog';
import { fetchReliefWebOpportunities, TransformedOpportunity } from '@/lib/reliefweb';

const CACHE_DURATION_HOURS = 24; // Refresh data every 24 hours

/**
 * Check if data should be refreshed based on last fetch time
 */
async function shouldRefreshData(): Promise<boolean> {
  try {
    const log = await FetchLog.findOne({ source: 'ReliefWeb' });
    
    if (!log) return true; // No fetch log, need to fetch
    
    const hoursSinceLastFetch = (Date.now() - log.lastFetchedAt.getTime()) / (1000 * 60 * 60);
    
    return hoursSinceLastFetch >= CACHE_DURATION_HOURS;
  } catch (error) {
    console.error('Error checking fetch log:', error);
    return false; // Don't refresh on error
  }
}

/**
 * Refresh opportunities data from ReliefWeb API
 */
async function refreshOpportunitiesData(): Promise<{ added: number; updated: number; errors: number }> {
  console.log('🔄 Starting opportunities refresh...');
  
  let added = 0;
  let updated = 0;
  let errors = 0;

  try {
    // Fetch from ReliefWeb
    const opportunities = await fetchReliefWebOpportunities(100);
    
    // Process each opportunity
    for (const opp of opportunities) {
      try {
        // Check for existing opportunity (duplicate prevention)
        const existing = await Opportunity.findOne({
          title: opp.title,
          organization: opp.organization,
          deadline: opp.deadline
        });

        if (existing) {
          // Update existing opportunity
          await Opportunity.updateOne(
            { _id: existing._id },
            {
              ...opp,
              updatedAt: new Date()
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

    // Update fetch log
    await FetchLog.findOneAndUpdate(
      { source: 'ReliefWeb' },
      {
        source: 'ReliefWeb',
        lastFetchedAt: new Date(),
        itemsFetched: opportunities.length,
        status: errors > opportunities.length / 2 ? 'partial' : 'success',
        errorMessage: errors > 0 ? `${errors} items failed to save` : null
      },
      { upsert: true }
    );

    console.log(`✅ Refresh complete: ${added} added, ${updated} updated, ${errors} errors`);
    
    return { added, updated, errors };
    
  } catch (error) {
    console.error('❌ Fatal error during refresh:', error);
    
    // Log the failure
    await FetchLog.findOneAndUpdate(
      { source: 'ReliefWeb' },
      {
        source: 'ReliefWeb',
        lastFetchedAt: new Date(),
        itemsFetched: 0,
        status: 'failed',
        errorMessage: error instanceof Error ? error.message : 'Unknown error'
      },
      { upsert: true }
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
    await connectToDatabase();

    // Extract query parameters
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    const location = searchParams.get('location') || '';
    const sortBy = searchParams.get('sortBy') || 'createdAt'; // createdAt or deadline
    const sortOrder = searchParams.get('sortOrder') || 'desc'; // asc or desc

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
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch opportunities',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const search = searchParams.get('search') || '';
    const type = searchParams.get('type') || '';
    const category = searchParams.get('category') || '';
    const region = searchParams.get('region') || '';
    
    const skip = (page - 1) * limit;
    
    // Build filter object
    let filter: any = {};
    
    // Search filter
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Type filter
    if (type) {
      filter.type = type;
    }
    
    // Category filter
    if (category) {
      filter.category = { $regex: category, $options: 'i' };
    }
    
    // Region filter
    if (region) {
      filter.location = { $regex: region, $options: 'i' };
    }
    
    // Get opportunities with pagination
    const opportunities = await Opportunity.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
    // Get total count for pagination
    const total = await Opportunity.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);
    
    // Get filter options for frontend
    const types = await Opportunity.distinct('type');
    const categories = await Opportunity.distinct('category');
    const regions = await Opportunity.distinct('location');
    
    return NextResponse.json({
      success: true,
      data: {
        opportunities,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems: total,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        },
        filters: {
          types: types.filter(Boolean),
          categories: categories.filter(Boolean), 
          regions: regions.filter(Boolean)
        }
      }
    });
    
  } catch (error) {
    console.error('Error fetching opportunities:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}