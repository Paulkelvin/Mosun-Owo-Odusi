/**
 * Findwork API Integration
 * Fetches tech and remote developer job opportunities
 * No API key required - completely free
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

interface FindworkJob {
  id: number;
  role_title: string;
  company_name: string;
  location: string;
  remote: boolean;
  text: string;
  url: string;
  date_posted: string;
  employment_type: string;
  keywords: string[];
}

interface FindworkResponse {
  results: FindworkJob[];
  count: number;
}

/**
 * Categorize job from title and keywords
 */
function categorizeJob(title: string, keywords: string[]): string {
  const titleLower = title.toLowerCase();
  const keywordStr = keywords.join(' ').toLowerCase();

  if (titleLower.includes('project manager') || titleLower.includes('program manager') || keywordStr.includes('project')) {
    return 'Project Management';
  }
  if (titleLower.includes('consultant') || keywordStr.includes('consulting')) {
    return 'Development';
  }
  if (titleLower.includes('director') || titleLower.includes('head of') || titleLower.includes('lead')) {
    return 'Leadership';
  }
  if (titleLower.includes('manager') || keywordStr.includes('management')) {
    return 'Project Management';
  }
  
  return 'Global Opportunities';
}

/**
 * Clean description text
 */
function cleanDescription(text: string): string {
  if (!text) return 'No description available.';
  
  // Remove excessive whitespace
  text = text.replace(/\s+/g, ' ').trim();
  
  // Remove leading/trailing punctuation
  text = text.replace(/^[:\-\s]+|[:\-\s]+$/g, '');
  
  // Truncate
  if (text.length > 250) {
    text = text.substring(0, 247) + '...';
  }
  
  return text || 'No description available.';
}

/**
 * Fetch opportunities from Findwork API
 */
export async function fetchFindworkJobs(): Promise<TransformedOpportunity[]> {
  try {
    console.log('🌐 Fetching from Findwork API...');
    
    // Search for relevant roles
    const keywords = ['project manager', 'program manager', 'consultant', 'director'];
    const allJobs: FindworkJob[] = [];
    
    for (const keyword of keywords) {
      try {
        const url = `https://findwork.dev/api/jobs/?search=${encodeURIComponent(keyword)}&sort_by=date`;
        
        const response = await fetch(url, {
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'MosunOwoOdusi-Website/1.0'
          }
        });

        if (!response.ok) {
          console.log(`⚠️  Findwork API (${keyword}) returned ${response.status}`);
          continue;
        }

        const data: FindworkResponse = await response.json();
        
        if (data.results && Array.isArray(data.results)) {
          allJobs.push(...data.results.slice(0, 10)); // Take 10 from each search
        }

        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
        
      } catch (error) {
        console.log(`⚠️  Findwork (${keyword}) failed:`, error instanceof Error ? error.message : 'Unknown error');
      }
    }

    console.log(`✅ Fetched ${allJobs.length} jobs from Findwork`);

    // Remove duplicates by URL
    const uniqueJobs = Array.from(
      new Map(allJobs.map(job => [job.url, job])).values()
    );

    console.log(`✅ After deduplication: ${uniqueJobs.length} unique jobs`);

    // Transform to our schema
    const transformed = uniqueJobs.map((job): TransformedOpportunity => ({
      title: job.role_title,
      organization: job.company_name,
      category: categorizeJob(job.role_title, job.keywords || []),
      location: job.remote ? 'Remote' : (job.location || 'Unknown'),
      deadline: null,
      link: job.url,
      description: cleanDescription(job.text),
      source: 'Findwork'
    }));

    return transformed;
    
  } catch (error) {
    console.error('❌ Error fetching from Findwork:', error);
    return [];
  }
}
