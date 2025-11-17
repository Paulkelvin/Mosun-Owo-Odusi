/**
 * ReliefWeb API Integration (Optional)
 * Fetches humanitarian and development job opportunities
 * Requires approved appname from ReliefWeb
 * Request appname: https://docs.google.com/forms/d/e/1FAIpQLScR5EE_SBhweLLg_2xMCnXNbT6md4zxqIB00OL0yZWyrqX_Nw/viewform
 */

export interface TransformedOpportunity {
  title: string;
  organization: string;
  category: string;
  location: string;
  deadline: string | null;
  link: string;
  description: string;
  source: string;
}

interface ReliefWebJob {
  id: string;
  fields: {
    title: string;
    date: {
      created: string;
      closing?: string;
    };
    source: Array<{
      name: string;
    }>;
    theme?: Array<{
      name: string;
    }>;
    country?: Array<{
      name: string;
    }>;
    body?: string;
    url: string;
  };
}

interface ReliefWebResponse {
  data: ReliefWebJob[];
  totalCount: number;
}

/**
 * Map ReliefWeb themes to our category system
 */
function categorizeReliefWebJob(themes?: Array<{ name: string }>): string {
  if (!themes || themes.length === 0) return 'Development';

  const themeName = themes[0].name.toLowerCase();

  if (themeName.includes('management') || themeName.includes('coordination')) {
    return 'Project Management';
  }
  if (themeName.includes('education') || themeName.includes('training')) {
    return 'Education';
  }
  if (themeName.includes('leadership') || themeName.includes('director') || themeName.includes('policy')) {
    return 'Leadership';
  }
  if (themeName.includes('environment') || themeName.includes('climate')) {
    return 'Sustainability';
  }

  return 'Development';
}

/**
 * Format deadline date
 */
function formatDeadline(deadline?: string): string | null {
  if (!deadline) return null;
  
  try {
    const date = new Date(deadline);
    if (isNaN(date.getTime())) return null;
    
    return date.toISOString().split('T')[0];
  } catch {
    return null;
  }
}

/**
 * Clean description
 */
function cleanDescription(html?: string): string {
  if (!html) return 'No description available.';
  
  // Remove HTML tags
  let text = html.replace(/<[^>]*>/g, ' ');
  
  // Decode HTML entities
  text = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&hellip;/g, '...')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–');
  
  // Remove multiple spaces and trim
  text = text.replace(/\s+/g, ' ').trim();
  
  // Remove leading/trailing punctuation
  text = text.replace(/^[:\-\s]+|[:\-\s]+$/g, '');
  
  if (text.length > 250) {
    text = text.substring(0, 247) + '...';
  }
  
  return text || 'No description available.';
}

/**
 * Fetch opportunities from ReliefWeb API (optional if appname configured)
 */
export async function fetchReliefWebJobs(): Promise<TransformedOpportunity[]> {
  const appname = process.env.RELIEFWEB_APPNAME;

  if (!appname) {
    console.log('⚠️  ReliefWeb appname not configured, skipping...');
    console.log('ℹ️  Request an appname at: https://docs.google.com/forms/d/e/1FAIpQLScR5EE_SBhweLLg_2xMCnXNbT6md4zxqIB00OL0yZWyrqX_Nw/viewform');
    return [];
  }

  try {
    console.log('🌐 Fetching from ReliefWeb API...');
    
    const url = `https://api.reliefweb.int/v1/jobs?appname=${appname}&limit=100&preset=latest`;
    
    const response = await fetch(url, {
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.log(`⚠️  ReliefWeb API returned ${response.status}: ${response.statusText}`);
      return [];
    }

    const data: ReliefWebResponse = await response.json();
    const jobs = data.data || [];

    console.log(`✅ Fetched ${jobs.length} jobs from ReliefWeb`);

    // Transform to our schema
    const transformed = jobs.map((item): TransformedOpportunity => {
      const job = item.fields;
      
      return {
        title: job.title || 'Untitled',
        organization: job.source?.[0]?.name || 'Unknown Organization',
        category: categorizeReliefWebJob(job.theme),
        location: job.country?.[0]?.name || 'Global',
        deadline: formatDeadline(job.date?.closing),
        link: job.url || `https://reliefweb.int/job/${item.id}`,
        description: cleanDescription(job.body),
        source: 'ReliefWeb'
      };
    });

    return transformed;

  } catch (error) {
    console.error('❌ Error fetching from ReliefWeb:', error);
    return [];
  }
}
