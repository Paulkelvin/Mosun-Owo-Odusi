/**
 * Cleanup System for Expired Opportunities
 * 
 * Strategy A + D:
 * - Delete jobs 30 days after posting (for jobs without deadlines)
 * - Delete jobs 7 days after deadline (for jobs with deadlines)
 */

import { connectToDatabase } from '@/lib/mongodb';
import Opportunity from '@/models/Opportunity';

interface CleanupStats {
  totalChecked: number;
  deletedByAge: number;
  deletedByDeadline: number;
  totalDeleted: number;
}

/**
 * Check if a deadline string has passed
 */
function isDeadlinePassed(deadline: string | null): boolean {
  if (!deadline) return false;
  
  try {
    const deadlineDate = new Date(deadline);
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    // Return true if deadline was more than 7 days ago
    return deadlineDate < sevenDaysAgo;
  } catch (error) {
    return false;
  }
}

/**
 * Check if a job is older than 30 days
 */
function isOlderThan30Days(createdAt: Date): boolean {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  return createdAt < thirtyDaysAgo;
}

/**
 * Clean up expired opportunities
 */
export async function cleanupExpiredJobs(): Promise<CleanupStats> {
  await connectToDatabase();

  const stats: CleanupStats = {
    totalChecked: 0,
    deletedByAge: 0,
    deletedByDeadline: 0,
    totalDeleted: 0
  };

  try {
    // Fetch all opportunities
    const allOpportunities = await Opportunity.find({});
    stats.totalChecked = allOpportunities.length;

    console.log(`\n🧹 Cleanup: Checking ${stats.totalChecked} opportunities...`);

    // Check each opportunity
    for (const opportunity of allOpportunities) {
      let shouldDelete = false;
      let reason = '';

      // Check deadline expiration (7 days after deadline)
      if (opportunity.deadline && isDeadlinePassed(opportunity.deadline)) {
        shouldDelete = true;
        reason = 'deadline expired';
        stats.deletedByDeadline++;
      }
      // Check age expiration (30 days old, no deadline)
      else if (!opportunity.deadline && isOlderThan30Days(opportunity.createdAt)) {
        shouldDelete = true;
        reason = '30+ days old';
        stats.deletedByAge++;
      }

      // Delete if expired
      if (shouldDelete) {
        await Opportunity.deleteOne({ _id: opportunity._id });
        console.log(`   ❌ Deleted: "${opportunity.title}" (${reason})`);
      }
    }

    stats.totalDeleted = stats.deletedByAge + stats.deletedByDeadline;

    console.log(`\n📊 Cleanup Summary:`);
    console.log(`   Total checked: ${stats.totalChecked}`);
    console.log(`   Deleted by age (30+ days): ${stats.deletedByAge}`);
    console.log(`   Deleted by deadline (7+ days past): ${stats.deletedByDeadline}`);
    console.log(`   Total deleted: ${stats.totalDeleted}`);
    console.log(`   Remaining: ${stats.totalChecked - stats.totalDeleted}\n`);

    return stats;
  } catch (error) {
    console.error('❌ Cleanup error:', error);
    throw error;
  }
}

/**
 * Calculate days until expiration for a job
 */
export function getDaysUntilExpiration(
  createdAt: Date,
  deadline: string | null
): number | null {
  const now = new Date();

  // If has deadline, calculate days until deadline + 7
  if (deadline) {
    try {
      const deadlineDate = new Date(deadline);
      const expirationDate = new Date(deadlineDate.getTime() + 7 * 24 * 60 * 60 * 1000);
      const diffTime = expirationDate.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    } catch (error) {
      return null;
    }
  }

  // Otherwise, calculate days until 30 days from creation
  const expirationDate = new Date(createdAt.getTime() + 30 * 24 * 60 * 60 * 1000);
  const diffTime = expirationDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
