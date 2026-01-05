/**
 * The Muse API Integration
 * Fetches professional job opportunities (tech, marketing, creative, PM roles)
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

interface MuseJob {
  id: number;
  name: string;
  company: {
    name: string;
  };
  locations: Array<{
    name: string;
  }>;
  categories: Array<{
    name: string;
  }>;
  contents: string;
  refs: {
    landing_page: string;
  };
  publication_date: string;
}

interface MuseResponse {
  results: MuseJob[];
  page_count: number;
  total: number;
}

/**
 * Categorize job from categories and title
 */
function categorizeJob(categories: Array<{ name: string }>, title: string): string {
  const categoryNames = categories.map(c => c.name.toLowerCase()).join(' ');
  const titleLower = title.toLowerCase();

  if (categoryNames.includes('project management') || titleLower.includes('project manager')) {
    return 'Project Management';
  }
  if (categoryNames.includes('consulting') || titleLower.includes('consultant')) {
    return 'Development';
  }
  if (categoryNames.includes('leadership') || titleLower.includes('director') || titleLower.includes('head of')) {
    return 'Leadership';
  }
  if (categoryNames.includes('education') || titleLower.includes('education')) {
    return 'Education';
  }
  if (categoryNames.includes('business') || titleLower.includes('manager')) {
    return 'Project Management';
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
 * Fetch opportunities from The Muse API
 */
export async function fetchTheMuseJobs(): Promise<TransformedOpportunity[]> {
  try {
    console.log('🌐 Fetching from The Muse API...');
    
    // Fetch jobs - focusing on relevant categories
    const categories = ['Project Management', 'Business Development', 'Consulting', 'Data Science'];
    const allJobs: MuseJob[] = [];
    
    for (const category of categories) {
      try {
        const url = `https://www.themuse.com/api/public/jobs?category=${encodeURIComponent(category)}&page=0&descending=true`;
        
        const response = await fetch(url, {
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'MosunOwoOdusi-Website/1.0'
          }
        });

        if (!response.ok) {
          console.log(`⚠️  The Muse API (${category}) returned ${response.status}`);
          continue;
        }

        const data: MuseResponse = await response.json();
        
        if (data.results && Array.isArray(data.results)) {
          allJobs.push(...data.results.slice(0, 25)); // Take up to 25 from each category
        }

        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
        
      } catch (error) {
        console.log(`⚠️  The Muse (${category}) failed:`, error instanceof Error ? error.message : 'Unknown error');
      }
    }

    console.log(`✅ Fetched ${allJobs.length} jobs from The Muse`);

    // Transform to our schema
    const transformed = allJobs.map((job): TransformedOpportunity => ({
      title: job.name,
      organization: job.company?.name || 'Unknown Organization',
      category: categorizeJob(job.categories || [], job.name),
      location: job.locations?.[0]?.name || 'Remote',
      deadline: null,
      link: job.refs?.landing_page || `https://www.themuse.com/jobs/${job.id}`,
      description: cleanDescription(job.contents),
      source: 'TheMuse'
    }));

    return transformed;
    
  } catch (error) {
    console.error('❌ Error fetching from The Muse:', error);
    return [];
  }
}
