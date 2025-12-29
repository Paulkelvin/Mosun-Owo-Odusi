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
  // Small helper to perform the full refresh logic and return stats
  const performRefresh = async () => {
    // Step 1: Clean up expired jobs BEFORE fetching new ones
    const cleanupStats = await cleanupExpiredJobs();

    let added = 0;
    let updated = 0;
    let errors = 0;

    // Fetch from all sources
    const opportunities = await fetchAllOpportunities();

    if (opportunities.length === 0) {
      return {
        fetched: 0,
        added: 0,
        updated: 0,
        errors: 0,
        cleanup: {
          checked: cleanupStats.totalChecked,
          deletedByAge: cleanupStats.deletedByAge,
          deletedByDeadline: cleanupStats.deletedByDeadline,
          totalDeleted: cleanupStats.totalDeleted
        }
      };
    }

    // Process each opportunity
    for (const opp of opportunities) {
      try {
        const existing = await Opportunity.findOne({
          title: opp.title,
          organization: opp.organization
        });

        if (existing) {
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
          await Opportunity.create(opp);
          added++;
        }
      } catch (error: any) {
        if (error.code === 11000) {
          console.log(`⚠️ Duplicate skipped: ${opp.title}`);
        } else {
          console.error(`❌ Error saving opportunity: ${opp.title}`, error);
          errors++;
        }
      }
    }

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

    return {
      fetched: opportunities.length,
      added,
      updated,
      errors,
      totalInDB,
      sources: sourceStats,
      cleanup: {
        checked: cleanupStats.totalChecked,
        deletedByAge: cleanupStats.deletedByAge,
        deletedByDeadline: cleanupStats.deletedByDeadline,
        totalDeleted: cleanupStats.totalDeleted
      }
    };
  };

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

    // Run the refresh but don't block the response if it takes too long.
    const REFRESH_TIMEOUT_MS = 25000; // 25s
    const refreshPromise = performRefresh();

    const race = await Promise.race([
      refreshPromise.then((r) => ({ finished: true, result: r })),
      new Promise((resolve) => setTimeout(() => resolve({ finished: false }), REFRESH_TIMEOUT_MS))
    ]);

    // If performRefresh didn't finish within timeout, let it continue in background
    if ((race as any).finished === false) {
      // Don't await — keep running in background and return quickly
      refreshPromise
        .then((r) => console.log('Background refresh finished', r))
        .catch((err) => console.error('Background refresh error:', err));

      return NextResponse.json(
        { success: true, message: 'Refresh started and is running in background' },
        { status: 202 }
      );
    }

    const finalResult = (race as any).result;

    return NextResponse.json({
      success: true,
      message: 'Opportunities refreshed successfully from all sources',
      stats: finalResult,
    });

  } catch (error) {
    console.error('❌ Error in refresh endpoint:', error);

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
