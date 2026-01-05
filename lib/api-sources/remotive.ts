/**
 * Remotive API Integration
 * Fetches remote job opportunities from Remotive (https://remotive.com)
 * No API key required. Please respect their usage guidelines and provide attribution.
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

interface RemotiveJob {
  id: number;
  url: string;
  title: string;
  company_name: string;
  category: string;
  job_type: string;
  candidate_required_location: string;
  publication_date: string;
  description: string;
}

interface RemotiveResponse {
  job_count: number;
  jobs: RemotiveJob[];
}

/**
 * Map Remotive categories/job types into our category system
 */
function categorizeRemotiveJob(category: string, title: string, jobType: string): string {
  const cat = (category || '').toLowerCase();
  const t = (title || '').toLowerCase();
  const jt = (jobType || '').toLowerCase();

  if (cat.includes('project') || t.includes('project manager') || t.includes('program manager')) {
    return 'Project Management';
  }
  if (cat.includes('consult') || t.includes('consultant')) {
    return 'Development';
  }
  if (t.includes('director') || t.includes('head of') || t.includes('vp') || t.includes('chief') || jt.includes('lead')) {
    return 'Leadership';
  }
  if (cat.includes('education') || t.includes('teacher') || t.includes('education')) {
    return 'Education';
  }

  return 'Global Opportunities';
}

/**
 * Clean HTML description
 */
function cleanDescription(html?: string): string {
  if (!html) return 'No description available.';

  let text = html.replace(/<[^>]*>/g, ' ');

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

  text = text.replace(/\s+/g, ' ').trim();
  text = text.replace(/^[:\-\s]+|[:\-\s]+$/g, '');

  if (text.length > 250) {
    text = text.substring(0, 247) + '...';
  }

  return text || 'No description available.';
}

/**
 * Fetch opportunities from Remotive API
 */
export async function fetchRemotiveJobs(): Promise<TransformedOpportunity[]> {
  try {
    console.log('🌐 Fetching from Remotive API...');

    const response = await fetch('https://remotive.com/api/remote-jobs', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'MosunOwoOdusi-Website/1.0'
      }
    });

    if (!response.ok) {
      console.log(`⚠️  Remotive API returned ${response.status}`);
      return [];
    }

    const data: RemotiveResponse = await response.json();
    const jobs = data.jobs || [];

    // Filter for management / leadership / consulting style roles
    const filtered = jobs.filter((job) => {
      const title = job.title?.toLowerCase() || '';
      const category = job.category?.toLowerCase() || '';

      return (
        title.includes('project') ||
        title.includes('manager') ||
        title.includes('consultant') ||
        title.includes('director') ||
        title.includes('lead') ||
        title.includes('coordinator') ||
        category.includes('management') ||
        category.includes('business') ||
        category.includes('project') ||
        category.includes('education')
      );
    });

    console.log(`✅ Fetched ${filtered.length} relevant jobs from Remotive (from ${jobs.length} total)`);

    // Transform to our schema, limit to 80 to avoid overload
    const transformed: TransformedOpportunity[] = filtered.slice(0, 80).map((job) => ({
      title: job.title,
      organization: job.company_name,
      category: categorizeRemotiveJob(job.category, job.title, job.job_type),
      location: job.candidate_required_location || 'Remote',
      deadline: null,
      link: job.url,
      description: cleanDescription(job.description),
      source: 'Remotive'
    }));

    return transformed;
  } catch (error) {
    console.error('❌ Error fetching from Remotive:', error);
    return [];
  }
}
