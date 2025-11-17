/**
 * Arbeitnow API Integration
 * Fetches job opportunities from Arbeitnow - European and global job board
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

interface ArbeitnowJob {
  slug: string;
  company_name: string;
  title: string;
  description: string;
  remote: boolean;
  url: string;
  tags: string[];
  job_types: string[];
  location: string;
  created_at: number;
}

interface ArbeitnowResponse {
  data: ArbeitnowJob[];
}

/**
 * Categorize job from title and tags
 */
function categorizeJob(title: string, tags: string[]): string {
  const titleLower = title.toLowerCase();
  const tagStr = tags.join(' ').toLowerCase();

  if (titleLower.includes('project manager') || titleLower.includes('program manager') || tagStr.includes('project')) {
    return 'Project Management';
  }
  if (titleLower.includes('consult') || tagStr.includes('consulting')) {
    return 'Development';
  }
  if (titleLower.includes('director') || titleLower.includes('senior') || titleLower.includes('lead') || titleLower.includes('head of')) {
    return 'Leadership';
  }
  if (titleLower.includes('manager') || tagStr.includes('management')) {
    return 'Project Management';
  }
  if (titleLower.includes('educat') || tagStr.includes('education')) {
    return 'Education';
  }
  
  return 'Global Opportunities';
}

/**
 * Clean description text
 */
function cleanDescription(text: string): string {
  if (!text) return 'No description available.';
  
  // Remove HTML tags
  text = text.replace(/<[^>]*>/g, ' ');
  
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
 * Check if text is in English (basic detection)
 */
function isEnglish(text: string): boolean {
  if (!text) return false;
  
  // Common German words that indicate non-English content
  const germanIndicators = [
    'und', 'oder', 'für', 'bei', 'mit', 'von', 'zu', 'der', 'die', 'das',
    'wir', 'dich', 'deine', 'unsere', 'aufgaben', 'über', 'können',
    'möchten', 'arbeiten', 'suchen', 'werden', 'bist', 'hast'
  ];
  
  const lowerText = text.toLowerCase();
  
  // If more than 2 German indicators are found, it's likely German
  const germanCount = germanIndicators.filter(word => 
    lowerText.includes(` ${word} `) || lowerText.startsWith(`${word} `)
  ).length;
  
  return germanCount < 2;
}

/**
 * Fetch opportunities from Arbeitnow API
 */
export async function fetchArbeitnowJobs(): Promise<TransformedOpportunity[]> {
  try {
    console.log('🌐 Fetching from Arbeitnow API...');
    
    const response = await fetch('https://www.arbeitnow.com/api/job-board-api', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'MosunOwoOdusi-Website/1.0'
      }
    });

    if (!response.ok) {
      console.log(`⚠️  Arbeitnow API returned ${response.status}`);
      return [];
    }

    const apiData: ArbeitnowResponse = await response.json();
    const jobs = apiData.data || [];
    
    // Filter for relevant roles AND English language
    const relevantJobs = jobs.filter((job) => {
      const title = job.title?.toLowerCase() || '';
      const tags = job.tags?.map(t => t.toLowerCase()) || [];
      const description = job.description || '';
      
      // Must be relevant role
      const isRelevant = (
        title.includes('project') ||
        title.includes('manager') ||
        title.includes('consultant') ||
        title.includes('program') ||
        title.includes('director') ||
        title.includes('lead') ||
        title.includes('coordinator') ||
        tags.some(tag => ['management', 'project', 'consulting', 'leadership', 'program'].includes(tag))
      );
      
      // Must be in English
      const isEnglishJob = isEnglish(title) && isEnglish(description);
      
      return isRelevant && isEnglishJob;
    });

    console.log(`✅ Fetched ${relevantJobs.length} English jobs from Arbeitnow (filtered from ${jobs.length} total)`);

    // Transform to our schema (limit to 30 most recent)
    const transformed = relevantJobs.slice(0, 30).map((job): TransformedOpportunity => ({
      title: job.title,
      organization: job.company_name,
      category: categorizeJob(job.title, job.tags || []),
      location: job.location || (job.remote ? 'Remote' : 'Unknown'),
      deadline: null,
      link: job.url,
      description: cleanDescription(job.description),
      source: 'Arbeitnow'
    }));

    return transformed;
    
  } catch (error) {
    console.error('❌ Error fetching from Arbeitnow:', error);
    return [];
  }
}
