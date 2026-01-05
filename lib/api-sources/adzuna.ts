/**
 * Adzuna API Integration
 * Fetches global job opportunities from Adzuna job board
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

interface AdzunaJob {
  id: string;
  title: string;
  company: { display_name: string };
  location: { display_name: string };
  description: string;
  created: string;
  redirect_url: string;
  category: { label: string };
}

interface AdzunaResponse {
  results: AdzunaJob[];
  count: number;
}

/**
 * Categorize job based on title and category
 */
function categorizeOpportunity(title: string, categoryLabel?: string): string {
  const titleLower = title.toLowerCase();
  const category = categoryLabel?.toLowerCase() || '';

  if (titleLower.includes('project manager') || titleLower.includes('program manager')) {
    return 'Project Management';
  }
  if (titleLower.includes('consult') || titleLower.includes('advisor')) {
    return 'Development';
  }
  if (titleLower.includes('director') || titleLower.includes('head of') || titleLower.includes('chief')) {
    return 'Leadership';
  }
  if (titleLower.includes('educat') || titleLower.includes('teach') || titleLower.includes('trainer')) {
    return 'Education';
  }
  if (category.includes('education')) return 'Education';
  if (category.includes('management')) return 'Project Management';
  
  return 'Global Opportunities';
}

/**
 * Clean and truncate description
 */
function cleanDescription(html: string): string {
  if (!html) return 'No description available.';
  
  // Remove HTML tags
  let text = html.replace(/<[^>]*>/g, ' ');
  
  // Decode common HTML entities
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
  
  // Remove leading/trailing punctuation artifacts
  text = text.replace(/^[:\-\s]+|[:\-\s]+$/g, '');
  
  // Truncate to 250 characters
  if (text.length > 250) {
    text = text.substring(0, 247) + '...';
  }
  
  return text || 'No description available.';
}

/**
 * Fetch opportunities from Adzuna API
 */
export async function fetchAdzunaJobs(): Promise<TransformedOpportunity[]> {
  const appId = process.env.ADZUNA_APP_ID;
  const appKey = process.env.ADZUNA_APP_KEY;

  if (!appId || !appKey) {
    console.log('⚠️  Adzuna credentials not configured, skipping...');
    return [];
  }

  try {
    console.log('🌐 Fetching from Adzuna API...');
    
    // Keywords focused on project management, consulting, and leadership
    const keywords = [
      'project manager',
      'program manager',
      'consultant',
      'business analyst',
      'development'
    ];
    
    const allJobs: AdzunaJob[] = [];
    
    // Fetch from multiple countries for global coverage
    const countries = ['us', 'gb', 'ca', 'au', 'ng']; // US, UK, Canada, Australia, Nigeria
    
    for (const country of countries) {
      for (const keyword of keywords) {
        try {
          const url = `https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=${appId}&app_key=${appKey}&what=${encodeURIComponent(keyword)}&results_per_page=40&content-type=application/json`;
          
          const response = await fetch(url, {
            headers: { 'Accept': 'application/json' }
          });

          if (!response.ok) {
            console.log(`⚠️  Adzuna ${country}/${keyword}: ${response.status}`);
            continue;
          }

          const data: AdzunaResponse = await response.json();
          
          if (data.results && Array.isArray(data.results)) {
            allJobs.push(...data.results);
          }

          // Rate limiting - wait 500ms between requests to avoid hitting limits
          await new Promise(resolve => setTimeout(resolve, 500));
          
        } catch (error) {
          console.log(`⚠️  Adzuna ${country}/${keyword} failed:`, error instanceof Error ? error.message : 'Unknown error');
        }
      }
    }

    console.log(`✅ Fetched ${allJobs.length} jobs from Adzuna`);

    // Transform to our schema
    const transformed = allJobs.map((job): TransformedOpportunity => ({
      title: job.title,
      organization: job.company?.display_name || 'Unknown Organization',
      category: categorizeOpportunity(job.title, job.category?.label),
      location: job.location?.display_name || 'Remote',
      deadline: null, // Adzuna doesn't provide application deadlines
      link: job.redirect_url,
      description: cleanDescription(job.description),
      source: 'Adzuna'
    }));

    return transformed;
    
  } catch (error) {
    console.error('❌ Error fetching from Adzuna:', error);
    return [];
  }
}
