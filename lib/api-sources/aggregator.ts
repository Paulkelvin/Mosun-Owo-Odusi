/**
 * Multi-Source Opportunity Aggregator
 * Combines opportunities from all API sources and deduplicates
 */

import { fetchAdzunaJobs } from './adzuna';
import { fetchRemoteOKJobs } from './remoteok';
import { fetchArbeitnowJobs } from './arbeitnow';
import { fetchReliefWebJobs } from './reliefweb';
import { fetchTheMuseJobs } from './themuse';
import { fetchFindworkJobs } from './findwork';
import { fetchGitHubJobs } from './githubjobs';
import { fetchRemotiveJobs } from './remotive';

export interface OpportunityData {
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
 * Fetch opportunities from all configured sources in parallel
 */
export async function fetchAllOpportunities(): Promise<OpportunityData[]> {
  console.log('\n🚀 Starting multi-source opportunity fetch...\n');
  
  // Fetch from all sources in parallel
  const results = await Promise.allSettled([
    fetchAdzunaJobs(),
    fetchRemoteOKJobs(),
    fetchArbeitnowJobs(),
    fetchReliefWebJobs(),
    fetchTheMuseJobs(),
    fetchFindworkJobs(),
    fetchGitHubJobs(),
    fetchRemotiveJobs()
  ]);

  const allOpportunities: OpportunityData[] = [];
  const sources = ['Adzuna', 'RemoteOK', 'Arbeitnow', 'ReliefWeb', 'TheMuse', 'Findwork', 'GitHubJobs', 'Remotive'];

  // Collect results from each source
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      const opportunities = result.value;
      allOpportunities.push(...opportunities);
      console.log(`✅ ${sources[index]}: ${opportunities.length} opportunities`);
    } else {
      console.log(`❌ ${sources[index]}: Failed - ${result.reason}`);
    }
  });

  console.log(`\n📊 Total opportunities fetched: ${allOpportunities.length}`);

  // Deduplicate by title + organization
  const uniqueOpportunities = deduplicateOpportunities(allOpportunities);
  console.log(`📊 After deduplication: ${uniqueOpportunities.length} opportunities\n`);

  return uniqueOpportunities;
}

/**
 * Remove duplicate opportunities based on title and organization
 */
function deduplicateOpportunities(opportunities: OpportunityData[]): OpportunityData[] {
  const seen = new Set<string>();
  const unique: OpportunityData[] = [];

  for (const opp of opportunities) {
    // Create a normalized key from title and organization, with safe fallbacks
    const safeTitle = (opp.title || '').toLowerCase();
    const safeOrg = (opp.organization || '').toLowerCase();
    const baseKey = `${safeTitle}-${safeOrg}`
      .replace(/\s+/g, '')
      .replace(/[^\w-]/g, '');

    // If title/organization are missing or extremely short, fall back to using the link
    const key = baseKey && baseKey.length > 3
      ? baseKey
      : (opp.link || '').toLowerCase().replace(/[^\w-]/g, '');
    
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(opp);
    }
    // Silently skip duplicates (no console spam)
  }

  return unique;
}

/**
 * Get statistics about fetched opportunities by source
 */
export function getSourceStatistics(opportunities: OpportunityData[]): Record<string, number> {
  const stats: Record<string, number> = {};
  
  for (const opp of opportunities) {
    stats[opp.source] = (stats[opp.source] || 0) + 1;
  }
  
  return stats;
}
