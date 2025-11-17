import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Opportunity from '@/models/Opportunity';

// External API configurations
const APIS = {
  opportunityGlobal: {
    url: 'https://api.opportunityglobal.org/v1/opportunities',
    headers: {
      'Content-Type': 'application/json',
    }
  },
  reliefWeb: {
    url: 'https://api.reliefweb.int/v1/jobs',
    headers: {
      'Content-Type': 'application/json',
    }
  },
  adzuna: {
    url: 'https://api.adzuna.com/v1/api/jobs/search/1',
    headers: {
      'Content-Type': 'application/json',
    }
  }
};

interface OpportunityData {
  title: string;
  source: string;
  url: string;
  category: string;
  deadline?: string;
  location: string;
  type: string;
  postedDate?: string;
  description: string;
}

// Normalize data from different APIs into our schema
function normalizeOpportunityGlobal(data: any): OpportunityData[] {
  if (!data.opportunities) return [];
  
  return data.opportunities.map((item: any) => ({
    title: item.title || 'Untitled Opportunity',
    source: 'Opportunity Global',
    url: item.link || item.url || '#',
    category: item.category || 'General',
    deadline: item.deadline || item.application_deadline,
    location: item.location || item.country || 'Global',
    type: item.type || 'opportunity',
    postedDate: item.posted_date || item.created_at,
    description: item.description || item.summary || '',
  }));
}

function normalizeReliefWeb(data: any): OpportunityData[] {
  if (!data.data) return [];
  
  return data.data.map((item: any) => ({
    title: item.fields?.title || 'Untitled Job',
    source: 'ReliefWeb',
    url: item.fields?.url || '#',
    category: item.fields?.theme?.[0]?.name || 'Humanitarian',
    deadline: item.fields?.date?.closing,
    location: item.fields?.country?.[0]?.name || 'Global',
    type: 'job',
    postedDate: item.fields?.date?.created,
    description: item.fields?.body || '',
  }));
}

function normalizeAdzuna(data: any): OpportunityData[] {
  if (!data.results) return [];
  
  return data.results
    .filter((item: any) => {
      const title = item.title?.toLowerCase() || '';
      const description = item.description?.toLowerCase() || '';
      return title.includes('project') || title.includes('consulting') || 
             title.includes('management') || title.includes('leadership') ||
             description.includes('project') || description.includes('consulting');
    })
    .map((item: any) => ({
      title: item.title || 'Untitled Job',
      source: 'Adzuna',
      url: item.redirect_url || '#',
      category: item.category?.tag || 'General',
      deadline: '',
      location: item.location?.display_name || 'Global',
      type: 'job',
      postedDate: item.created,
      description: item.description || '',
    }));
}

async function fetchFromAPI(apiConfig: any, params?: any): Promise<any> {
  try {
    let url = apiConfig.url;
    if (params) {
      const searchParams = new URLSearchParams(params);
      url += `?${searchParams.toString()}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers: apiConfig.headers,
    });
    
    if (!response.ok) {
      console.warn(`API request failed: ${response.status} ${response.statusText}`);
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching from API:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    
    let allOpportunities: OpportunityData[] = [];
    let added = 0;
    let updated = 0;

    // Fetch from Opportunity Global
    try {
      const ogData = await fetchFromAPI(APIS.opportunityGlobal);
      if (ogData) {
        const normalized = normalizeOpportunityGlobal(ogData);
        allOpportunities.push(...normalized);
      }
    } catch (error) {
      console.error('Error fetching from Opportunity Global:', error);
    }

    // Fetch from ReliefWeb
    try {
      const rwData = await fetchFromAPI(APIS.reliefWeb, {
        appname: 'mosun-opportunities',
        limit: 50,
        'filter[field]': 'theme.name',
        'filter[value]': 'Management'
      });
      if (rwData) {
        const normalized = normalizeReliefWeb(rwData);
        allOpportunities.push(...normalized);
      }
    } catch (error) {
      console.error('Error fetching from ReliefWeb:', error);
    }

    // Fetch from Adzuna (Note: Requires API key in production)
    try {
      // For demo purposes, we'll create some sample data
      const sampleAdzunaData = {
        results: [
          {
            title: "Senior Project Manager - International Development",
            redirect_url: "https://example.com/job1",
            category: { tag: "Management" },
            location: { display_name: "London, UK" },
            created: new Date().toISOString(),
            description: "Leading project management role in international development sector..."
          },
          {
            title: "Strategy Consultant - Global Markets",
            redirect_url: "https://example.com/job2", 
            category: { tag: "Consulting" },
            location: { display_name: "New York, USA" },
            created: new Date().toISOString(),
            description: "Strategic consulting position focusing on emerging markets..."
          }
        ]
      };
      const normalized = normalizeAdzuna(sampleAdzunaData);
      allOpportunities.push(...normalized);
    } catch (error) {
      console.error('Error processing Adzuna data:', error);
    }

    // Process and save opportunities
    for (const opportunityData of allOpportunities) {
      try {
        // Check for existing opportunity (avoid duplicates)
        const existing = await Opportunity.findOne({
          title: opportunityData.title,
          url: opportunityData.url
        });

        if (existing) {
          // Update existing
          await Opportunity.updateOne(
            { _id: existing._id },
            opportunityData
          );
          updated++;
        } else {
          // Create new
          await Opportunity.create(opportunityData);
          added++;
        }
      } catch (error) {
        console.error('Error saving opportunity:', error);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Successfully processed opportunities`,
      stats: {
        total: allOpportunities.length,
        added,
        updated
      }
    });

  } catch (error) {
    console.error('Error in fetch opportunities API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}