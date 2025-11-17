import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Opportunity from '@/models/Opportunity';
import FetchLog from '@/models/FetchLog';
import { fetchReliefWebOpportunities } from '@/lib/reliefweb';

/**
 * POST /api/opportunities/refresh
 * Manually trigger data refresh from ReliefWeb API
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

    console.log('🔄 Manual refresh triggered');

    let added = 0;
    let updated = 0;
    let errors = 0;

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
        // Skip duplicate key errors
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

    console.log(`✅ Manual refresh complete: ${added} added, ${updated} updated, ${errors} errors`);

    return NextResponse.json({
      success: true,
      message: 'Opportunities refreshed successfully',
      stats: {
        total: opportunities.length,
        added,
        updated,
        errors
      }
    });

  } catch (error) {
    console.error('❌ Error in refresh endpoint:', error);
    
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
