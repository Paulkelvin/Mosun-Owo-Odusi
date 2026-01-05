/**
 * RemoteOK API Integration
 * Fetches remote job opportunities from RemoteOK.com
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

interface RemoteOKJob {
  id: string;
  slug: string;
  position: string;
  company: string;
  location: string;
  tags: string[];
  description: string;
  date: string;
  url: string;
}

/**
 * Categorize job from tags and position
 */
function categorizeFromTags(tags: string[], position: string): string {
  const tagStr = tags.join(' ').toLowerCase();
  const posLower = position.toLowerCase();

  if (posLower.includes('project manager') || posLower.includes('program manager') || tagStr.includes('project')) {
    return 'Project Management';
  }
  if (posLower.includes('consult') || tagStr.includes('consulting')) {
    return 'Development';
  }
  if (posLower.includes('director') || posLower.includes('head of') || posLower.includes('lead') || posLower.includes('chief')) {
    return 'Leadership';
  }
  if (posLower.includes('manager') || tagStr.includes('management')) {
    return 'Project Management';
  }
  if (posLower.includes('educat') || tagStr.includes('education')) {
    return 'Education';
  }
  
  return 'Global Opportunities';
}

/**
 * Clean description text
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
 * Fetch opportunities from RemoteOK API
 */
export async function fetchRemoteOKJobs(): Promise<TransformedOpportunity[]> {
  try {
    console.log('🌐 Fetching from RemoteOK API...');
    
    const response = await fetch('https://remoteok.com/api', {
      headers: {
        'User-Agent': 'MosunOwoOdusi-Website/1.0',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      console.log(`⚠️  RemoteOK API returned ${response.status}`);
      return [];
    }

    const data = await response.json();
    
    // First item is metadata, skip it
    const jobs: RemoteOKJob[] = Array.isArray(data) ? data.slice(1) : [];
    
    // Filter for relevant roles (management, consulting, project roles)
    const relevantJobs = jobs.filter((job) => {
      const position = job.position?.toLowerCase() || '';
      const tags = job.tags?.map(t => t.toLowerCase()) || [];
      
      return (
        position.includes('project') ||
        position.includes('manager') ||
        position.includes('consultant') ||
        position.includes('program') ||
        position.includes('director') ||
        position.includes('lead') ||
        position.includes('coordinator') ||
        tags.includes('management') ||
        tags.includes('project') ||
        tags.includes('consulting') ||
        tags.includes('leadership')
      );
    });

    console.log(`✅ Fetched ${relevantJobs.length} relevant jobs from RemoteOK (filtered from ${jobs.length})`);

    // Transform to our schema (limit to 100 most recent)
    const transformed = relevantJobs.slice(0, 100).map((job): TransformedOpportunity => ({
      title: job.position,
      organization: job.company,
      category: categorizeFromTags(job.tags || [], job.position),
      location: job.location || 'Remote',
      deadline: null,
      link: job.url || `https://remoteok.com/remote-jobs/${job.slug}`,
      description: cleanDescription(job.description),
      source: 'RemoteOK'
    }));

    return transformed;
    
  } catch (error) {
    console.error('❌ Error fetching from RemoteOK:', error);
    return [];
  }
}
