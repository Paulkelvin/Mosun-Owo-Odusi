/**
 * ReliefWeb API Integration Service
 * Fetches real humanitarian and development job opportunities
 * API Documentation: https://api.reliefweb.int/v1/jobs
 */

interface ReliefWebJob {
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

/**
 * Map ReliefWeb themes to our category system
 */
function mapThemeToCategory(themes?: Array<{ name: string }>): string {
  if (!themes || themes.length === 0) return 'Global Opportunities';

  const themeName = themes[0].name.toLowerCase();

  // Category mapping logic
  if (themeName.includes('management') || themeName.includes('coordination')) {
    return 'Project Management';
  }
  if (themeName.includes('education') || themeName.includes('training')) {
    return 'Education';
  }
  if (themeName.includes('leadership') || themeName.includes('director')) {
    return 'Leadership';
  }
  if (themeName.includes('environment') || themeName.includes('climate')) {
    return 'Sustainability';
  }
  if (themeName.includes('development') || themeName.includes('humanitarian')) {
    return 'Development';
  }

  return 'Global Opportunities';
}

/**
 * Format deadline date to YYYY-MM-DD or return null
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
 * Clean and truncate description
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
    .replace(/&quot;/g, '"');
  
  // Remove extra whitespace
  text = text.replace(/\s+/g, ' ').trim();
  
  // Truncate to 500 characters
  if (text.length > 500) {
    text = text.substring(0, 497) + '...';
  }
  
  return text || 'No description available.';
}

/**
 * Validate opportunity data before saving
 */
function validateOpportunity(opp: TransformedOpportunity): boolean {
  return !!(
    opp.title &&
    opp.organization &&
    opp.link &&
    opp.location &&
    opp.category &&
    opp.description
  );
}

/**
 * Fetch opportunities from ReliefWeb API
 */
export async function fetchReliefWebOpportunities(limit: number = 100): Promise<TransformedOpportunity[]> {
  try {
    const url = new URL('https://api.reliefweb.int/v1/jobs');
    
    // Query parameters
    url.searchParams.append('appname', 'mosun-website');
    url.searchParams.append('limit', limit.toString());
    url.searchParams.append('preset', 'latest');
    url.searchParams.append('slim', '0');
    
    // Filter for relevant job types
    const filterQuery = {
      operator: 'OR',
      conditions: [
        { field: 'theme.name', value: 'Management' },
        { field: 'theme.name', value: 'Coordination' },
        { field: 'theme.name', value: 'Education' },
        { field: 'theme.name', value: 'Training' },
        { field: 'theme.name', value: 'Project Management' }
      ]
    };

    // Add filter as query parameter
    url.searchParams.append('filter', JSON.stringify(filterQuery));

    console.log('🌐 Fetching from ReliefWeb API...');
    
    const response = await fetch(url.toString(), {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`ReliefWeb API error: ${response.status} ${response.statusText}`);
    }

    const data: ReliefWebResponse = await response.json();
    
    console.log(`✅ Fetched ${data.data.length} opportunities from ReliefWeb`);

    // Transform and validate opportunities
    const opportunities: TransformedOpportunity[] = data.data
      .map((job): TransformedOpportunity => {
        const fields = job.fields;
        
        return {
          title: fields.title,
          organization: fields.source?.[0]?.name || 'ReliefWeb Organization',
          category: mapThemeToCategory(fields.theme),
          location: fields.country?.map(c => c.name).join(', ') || 'Global',
          deadline: formatDeadline(fields.date?.closing),
          link: fields.url,
          description: cleanDescription(fields.body),
          source: 'ReliefWeb'
        };
      })
      .filter(validateOpportunity); // Remove invalid entries

    console.log(`✅ Validated ${opportunities.length} opportunities`);
    
    return opportunities;
    
  } catch (error) {
    console.error('❌ Error fetching from ReliefWeb:', error);
    throw error;
  }
}

/**
 * Check if opportunity already exists in database
 * Used for duplicate prevention
 */
export function createUniqueKey(opp: TransformedOpportunity): string {
  return `${opp.title}|${opp.organization}|${opp.deadline || 'no-deadline'}`;
}
