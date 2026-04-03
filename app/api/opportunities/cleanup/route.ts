import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Opportunity from '@/models/Opportunity';
import FetchLog from '@/models/FetchLog';

/**
 * DELETE /api/opportunities/cleanup
 * Delete all opportunities and fetch logs (use with caution!)
 * Protected by API key
 */
export async function DELETE(request: NextRequest) {
  try {
    // Simple authentication check
    const authHeader = request.headers.get('authorization');
    const xApiKey = request.headers.get('x-api-key');
    const apiKey = process.env.REFRESH_API_KEY || 'mosun-refresh-2024';

    const bearerToken = authHeader?.startsWith('Bearer ')
      ? authHeader.slice('Bearer '.length)
      : null;
    const isAuthorized = bearerToken === apiKey || xApiKey === apiKey;
    
    if (!isAuthorized) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectToDatabase();

    console.log('🗑️  Cleaning up database...');

    // Delete all opportunities
    const opportunitiesDeleted = await Opportunity.deleteMany({});
    console.log(`✅ Deleted ${opportunitiesDeleted.deletedCount} opportunities`);

    // Delete all fetch logs
    const logsDeleted = await FetchLog.deleteMany({});
    console.log(`✅ Deleted ${logsDeleted.deletedCount} fetch logs`);

    return NextResponse.json({
      success: true,
      message: 'Database cleaned successfully',
      deleted: {
        opportunities: opportunitiesDeleted.deletedCount,
        logs: logsDeleted.deletedCount
      }
    });

  } catch (error) {
    console.error('❌ Error in cleanup endpoint:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to cleanup database',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
