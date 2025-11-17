import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Opportunity from '@/models/Opportunity';
import FetchLog from '@/models/FetchLog';
import { fetchAllOpportunities, getSourceStatistics } from '@/lib/api-sources/aggregator';
import { cleanupExpiredJobs } from '@/lib/cleanup/expiredJobs';

/**
 * POST /api/opportunities/refresh
 * Manually trigger data refresh from all API sources
 * Protected by simple API key
 */
export async function POST(request: NextRequest) {
  try {
    // Simple authentication check
    const authHeader = request.headers.get('authorization');
    const apiKey = process.env.REFRESH_API_KEY || 'mosun-refresh-2024';
    
    if (authHeader !== `Bearer ${apiKey}`) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectToDatabase();

    console.log('🔄 Manual refresh triggered from all sources');

    // Step 1: Clean up expired jobs BEFORE fetching new ones
    const cleanupStats = await cleanupExpiredJobs();

    let added = 0;
    let updated = 0;
    let errors = 0;

    // Fetch from all sources
    const opportunities = await fetchAllOpportunities();
    
    if (opportunities.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'No opportunities fetched from any source',
        stats: {
          total: 0,
          added: 0,
          updated: 0,
          errors: 0
        }
      });
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
        // Skip duplicate key errors
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
    const totalInDB = await Opportunity.countDocuments();

    // Update fetch log (upsert to avoid duplicate key errors)
    await FetchLog.findOneAndUpdate(
      { source: 'multi-source-manual' },
      {
        source: 'multi-source-manual',
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

    console.log(`✅ Manual refresh complete: ${added} added, ${updated} updated, ${errors} errors`);
    console.log(`📊 Source breakdown:`, sourceStats);
    console.log(`📊 Total opportunities in database: ${totalInDB}`);

    return NextResponse.json({
      success: true,
      message: 'Opportunities refreshed successfully from all sources',
      stats: {
        fetched: opportunities.length,
        added,
        updated,
        errors,
        totalInDB,
        sources: sourceStats
      },
      cleanup: {
        checked: cleanupStats.totalChecked,
        deletedByAge: cleanupStats.deletedByAge,
        deletedByDeadline: cleanupStats.deletedByDeadline,
        totalDeleted: cleanupStats.totalDeleted
      }
    });

  } catch (error) {
    console.error('❌ Error in refresh endpoint:', error);
    
    // Log the failure (upsert to avoid duplicate key errors)
    try {
      await FetchLog.findOneAndUpdate(
        { source: 'multi-source-manual' },
        {
          source: 'multi-source-manual',
          lastFetchedAt: new Date(),
          itemsFetched: 0,
          status: 'failed',
          errorMessage: error instanceof Error ? error.message : 'Unknown error'
        },
        { upsert: true, new: true }
      );
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to refresh opportunities',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
