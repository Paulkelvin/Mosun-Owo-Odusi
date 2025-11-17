import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Opportunity from '@/models/Opportunity';

// Demo opportunities data
const demoOpportunities = [
  {
    title: "Senior Project Manager - International Development",
    source: "UNDP",
    url: "https://jobs.undp.org/example1",
    category: "Project Management",
    deadline: "2025-01-15",
    location: "Geneva, Switzerland",
    type: "job",
    postedDate: "2024-11-10",
    description: "Lead cross-functional teams in implementing sustainable development projects across emerging markets. Requires 5+ years project management experience and PMP certification."
  },
  {
    title: "Fulbright Global Leadership Fellowship",
    source: "Fulbright Commission",
    url: "https://fulbright.org/example2",
    category: "Leadership Development",
    deadline: "2025-02-01",
    location: "United States",
    type: "fellowship",
    postedDate: "2024-11-05",
    description: "12-month leadership development program for emerging leaders from developing countries. Includes mentorship, networking, and policy training."
  },
  {
    title: "Education Innovation Grant",
    source: "Gates Foundation",
    url: "https://gatesfoundation.org/example3",
    category: "Education",
    deadline: "2025-01-31",
    location: "Global",
    type: "grant",
    postedDate: "2024-11-08",
    description: "Up to $500K funding for innovative educational programs in underserved communities. Focus on technology integration and learning outcomes."
  },
  {
    title: "World Bank Consultant - Economic Policy",
    source: "World Bank",
    url: "https://worldbank.org/example4",
    category: "Consulting",
    deadline: "2024-12-20",
    location: "Washington DC, USA",
    type: "job",
    postedDate: "2024-11-12",
    description: "Provide technical assistance on economic policy reforms in Sub-Saharan Africa. Remote work with travel requirements."
  },
  {
    title: "Oxford Scholarship for African Leaders",
    source: "Oxford University",
    url: "https://oxford.ac.uk/example5",
    category: "Education",
    deadline: "2025-03-15",
    location: "Oxford, UK",
    type: "scholarship",
    postedDate: "2024-11-01",
    description: "Full scholarship for MBA program focused on leadership in development sector. Includes living stipend and networking opportunities."
  },
  {
    title: "Project Coordination Specialist",
    source: "UNICEF",
    url: "https://unicef.org/example6",
    category: "Project Management",
    deadline: "2025-01-10",
    location: "Lagos, Nigeria",
    type: "job",
    postedDate: "2024-11-15",
    description: "Coordinate education and child protection programs across West Africa. Excellent opportunity for impact-driven professionals."
  },
  {
    title: "Digital Leadership Training Program",
    source: "MIT",
    url: "https://mit.edu/example7",
    category: "Technology",
    deadline: "2024-12-30",
    location: "Boston, USA",
    type: "training",
    postedDate: "2024-11-07",
    description: "6-week intensive program on digital transformation leadership. Includes AI, blockchain, and digital strategy components."
  },
  {
    title: "Women in Leadership Fellowship",
    source: "UN Women",
    url: "https://unwomen.org/example8",
    category: "Leadership Development",
    deadline: "2025-02-28",
    location: "New York, USA",
    type: "fellowship",
    postedDate: "2024-11-03",
    description: "Supporting women leaders in advancing gender equality and sustainable development goals through policy and advocacy."
  }
];

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    
    // Clear existing demo data
    await Opportunity.deleteMany({ source: { $in: ["UNDP", "Fulbright Commission", "Gates Foundation", "World Bank", "Oxford University", "UNICEF", "MIT", "UN Women"] } });
    
    // Insert demo opportunities
    const result = await Opportunity.insertMany(demoOpportunities);
    
    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${result.length} demo opportunities`,
      data: result
    });
    
  } catch (error) {
    console.error('Error seeding demo data:', error);
    return NextResponse.json(
      { error: 'Failed to seed demo data' },
      { status: 500 }
    );
  }
}