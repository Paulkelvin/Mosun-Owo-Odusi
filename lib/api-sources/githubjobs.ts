/**
 * GitHub Jobs API Integration
 * Fetches developer and tech job opportunities
 * No API key required - API is archived but still functional
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

interface GitHubJob {
  id: string;
  type: string;
  url: string;
  created_at: string;
  company: string;
  company_url: string;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string;
}

/**
 * Categorize job from title
 */
function categorizeJob(title: string): string {
  const titleLower = title.toLowerCase();

  if (titleLower.includes('project manager') || titleLower.includes('program manager')) {
    return 'Project Management';
  }
  if (titleLower.includes('consultant')) {
    return 'Development';
  }
  if (titleLower.includes('director') || titleLower.includes('head of') || titleLower.includes('lead engineer')) {
    return 'Leadership';
  }
  if (titleLower.includes('manager')) {
    return 'Project Management';
  }
  
  return 'Global Opportunities';
}

/**
 * Clean description HTML
 */
function cleanDescription(html: string): string {
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
  
  // Truncate
  if (text.length > 250) {
    text = text.substring(0, 247) + '...';
  }
  
  return text || 'No description available.';
}

/**
 * Fetch opportunities from GitHub Jobs API
 */
export async function fetchGitHubJobs(): Promise<TransformedOpportunity[]> {
  try {
    console.log('🌐 Fetching from GitHub Jobs API...');
    
    // Search for relevant roles
    const searches = ['project manager', 'program manager', 'technical manager'];
    const allJobs: GitHubJob[] = [];
    
    for (const search of searches) {
      try {
        const url = `https://jobs.github.com/positions.json?description=${encodeURIComponent(search)}&location=remote`;
        
        const response = await fetch(url, {
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'MosunOwoOdusi-Website/1.0'
          }
        });

        if (!response.ok) {
          console.log(`⚠️  GitHub Jobs API (${search}) returned ${response.status}`);
          continue;
        }

        const data: GitHubJob[] = await response.json();
        
        if (Array.isArray(data)) {
          allJobs.push(...data.slice(0, 15));
        }

        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
        
      } catch (error) {
        console.log(`⚠️  GitHub Jobs (${search}) failed:`, error instanceof Error ? error.message : 'Unknown error');
      }
    }

    console.log(`✅ Fetched ${allJobs.length} jobs from GitHub Jobs`);

    // Remove duplicates by ID
    const uniqueJobs = Array.from(
      new Map(allJobs.map(job => [job.id, job])).values()
    );

    console.log(`✅ After deduplication: ${uniqueJobs.length} unique jobs`);

    // Transform to our schema
    const transformed = uniqueJobs.map((job): TransformedOpportunity => ({
      title: job.title,
      organization: job.company,
      category: categorizeJob(job.title),
      location: job.location || 'Remote',
      deadline: null,
      link: job.url,
      description: cleanDescription(job.description),
      source: 'GitHubJobs'
    }));

    return transformed;
    
  } catch (error) {
    console.error('❌ Error fetching from GitHub Jobs:', error);
    return [];
  }
}
