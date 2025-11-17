import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Opportunity from '@/models/Opportunity';

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