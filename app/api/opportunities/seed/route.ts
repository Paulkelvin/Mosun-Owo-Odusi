import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Opportunity from '@/models/Opportunity';

// Demo opportunities data - Expanded diverse dataset
const demoOpportunities = [
  // Jobs - Project Management
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
    title: "Program Manager - Education Initiatives",
    source: "Save the Children",
    url: "https://savethechildren.org/jobs/pm1",
    category: "Program Management",
    deadline: "2025-01-20",
    location: "Nairobi, Kenya",
    type: "job",
    postedDate: "2024-11-12",
    description: "Oversee education programs across East Africa. Manage budgets, coordinate with local partners, and ensure program quality and impact measurement."
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
    title: "Development Project Manager",
    source: "Oxfam",
    url: "https://oxfam.org/careers/dpm1",
    category: "Development",
    deadline: "2025-02-05",
    location: "Kampala, Uganda",
    type: "job",
    postedDate: "2024-11-08",
    description: "Lead poverty reduction and livelihood programs. Experience in rural development and community engagement required."
  },
  {
    title: "Infrastructure Project Manager",
    source: "World Bank",
    url: "https://worldbank.org/jobs/ipm1",
    category: "Infrastructure",
    deadline: "2025-01-25",
    location: "Accra, Ghana",
    type: "job",
    postedDate: "2024-11-11",
    description: "Manage large-scale infrastructure projects in transportation and energy sectors. Strong technical and financial management skills required."
  },

  // Consulting Roles
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
    title: "Strategy Consultant - Development Finance",
    source: "IFC",
    url: "https://ifc.org/consulting/sc1",
    category: "Strategy",
    deadline: "2025-01-30",
    location: "London, UK",
    type: "job",
    postedDate: "2024-11-09",
    description: "Support private sector development initiatives across emerging markets. Experience in financial analysis and market assessment required."
  },
  {
    title: "Management Consultant - Public Sector",
    source: "McKinsey & Company",
    url: "https://mckinsey.com/careers/mc1",
    category: "Management",
    deadline: "2025-02-15",
    location: "Dubai, UAE",
    type: "job",
    postedDate: "2024-11-07",
    description: "Lead public sector transformation projects across MENA region. Focus on digital government and service delivery improvements."
  },
  {
    title: "Education Policy Consultant",
    source: "UNESCO",
    url: "https://unesco.org/jobs/epc1",
    category: "Education Policy",
    deadline: "2025-01-18",
    location: "Paris, France",
    type: "job",
    postedDate: "2024-11-13",
    description: "Develop education policy frameworks for developing countries. PhD in education or related field preferred."
  },

  // Fellowships
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
    title: "Women in Leadership Fellowship",
    source: "UN Women",
    url: "https://unwomen.org/example8",
    category: "Leadership Development",
    deadline: "2025-02-28",
    location: "New York, USA",
    type: "fellowship",
    postedDate: "2024-11-03",
    description: "Supporting women leaders in advancing gender equality and sustainable development goals through policy and advocacy."
  },
  {
    title: "Global Health Leadership Fellowship",
    source: "WHO",
    url: "https://who.int/fellowships/ghl1",
    category: "Health Leadership",
    deadline: "2025-03-10",
    location: "Geneva, Switzerland",
    type: "fellowship",
    postedDate: "2024-11-06",
    description: "Year-long fellowship focusing on global health policy and emergency response. Travel to multiple countries included."
  },
  {
    title: "Climate Action Fellowship",
    source: "UNFCCC",
    url: "https://unfccc.int/fellowships/caf1",
    category: "Climate Change",
    deadline: "2025-02-20",
    location: "Bonn, Germany",
    type: "fellowship",
    postedDate: "2024-11-04",
    description: "Support climate policy development and implementation. Focus on adaptation and mitigation strategies for developing countries."
  },

  // Scholarships
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
    title: "Cambridge Development Studies Scholarship",
    source: "Cambridge University",
    url: "https://cambridge.ac.uk/scholarships/dev1",
    category: "Development Studies",
    deadline: "2025-03-01",
    location: "Cambridge, UK",
    type: "scholarship",
    postedDate: "2024-11-02",
    description: "Full funding for MPhil in Development Studies. Priority for candidates from developing countries with leadership potential."
  },
  {
    title: "LSE Public Policy Scholarship",
    source: "London School of Economics",
    url: "https://lse.ac.uk/scholarships/pp1",
    category: "Public Policy",
    deadline: "2025-02-10",
    location: "London, UK",
    type: "scholarship",
    postedDate: "2024-11-05",
    description: "Merit-based scholarship for MSc Public Policy and Administration. Focus on emerging economy policy challenges."
  },
  {
    title: "Harvard Kennedy School Scholarship",
    source: "Harvard University",
    url: "https://hks.harvard.edu/scholarships/hks1",
    category: "Public Administration",
    deadline: "2025-02-25",
    location: "Boston, USA",
    type: "scholarship",
    postedDate: "2024-11-03",
    description: "Need-based and merit scholarships for Mid-Career MPA program. Strong preference for public service experience."
  },

  // Grants
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
    title: "Women's Economic Empowerment Grant",
    source: "Ford Foundation",
    url: "https://fordfoundation.org/grants/wee1",
    category: "Women's Empowerment",
    deadline: "2025-02-14",
    location: "Africa",
    type: "grant",
    postedDate: "2024-11-07",
    description: "Funding up to $250K for projects promoting women's economic participation. Focus on financial inclusion and entrepreneurship."
  },
  {
    title: "Climate Resilience Grant",
    source: "Green Climate Fund",
    url: "https://greenclimate.fund/grants/cr1",
    category: "Climate Change",
    deadline: "2025-03-30",
    location: "Small Island States",
    type: "grant",
    postedDate: "2024-11-09",
    description: "Large-scale funding for climate adaptation projects. Preference for community-based approaches and innovative technologies."
  },
  {
    title: "Digital Innovation Grant",
    source: "Rockefeller Foundation",
    url: "https://rockefellerfoundation.org/grants/di1",
    category: "Technology",
    deadline: "2025-02-05",
    location: "Global South",
    type: "grant",
    postedDate: "2024-11-11",
    description: "Support for digital solutions addressing social challenges. Focus on scalable and sustainable impact models."
  },

  // Training Programs
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
    title: "Project Management Certification",
    source: "PMI",
    url: "https://pmi.org/training/pmc1",
    category: "Project Management",
    deadline: "2025-01-12",
    location: "Online",
    type: "training",
    postedDate: "2024-11-10",
    description: "Comprehensive PMP certification program with focus on agile methodologies and cross-cultural team management."
  },
  {
    title: "Leadership in Crisis Management",
    source: "INSEAD",
    url: "https://insead.edu/programs/lcm1",
    category: "Crisis Management",
    deadline: "2025-01-28",
    location: "Singapore",
    type: "training",
    postedDate: "2024-11-08",
    description: "Executive education program on leading through uncertainty. Case studies from humanitarian and corporate crises."
  },
  {
    title: "Financial Management for NGOs",
    source: "ACCA",
    url: "https://accaglobal.com/training/ngo1",
    category: "Financial Management",
    deadline: "2025-02-18",
    location: "London, UK",
    type: "training",
    postedDate: "2024-11-12",
    description: "Specialized training in nonprofit financial management, donor compliance, and impact measurement."
  },

  // Additional Regional Opportunities
  {
    title: "African Union Development Specialist",
    source: "African Union",
    url: "https://au.int/jobs/ads1",
    category: "Development",
    deadline: "2025-01-22",
    location: "Addis Ababa, Ethiopia",
    type: "job",
    postedDate: "2024-11-13",
    description: "Support continental development initiatives and regional integration programs. Strong knowledge of African development challenges required."
  },
  {
    title: "ECOWAS Program Officer",
    source: "ECOWAS",
    url: "https://ecowas.int/careers/po1",
    category: "Regional Development",
    deadline: "2025-02-08",
    location: "Abuja, Nigeria",
    type: "job",
    postedDate: "2024-11-14",
    description: "Coordinate regional economic integration programs. Focus on trade facilitation and cross-border collaboration."
  },
  {
    title: "Commonwealth Leadership Fellowship",
    source: "Commonwealth Secretariat",
    url: "https://commonwealth.int/fellowships/clf1",
    category: "Leadership",
    deadline: "2025-03-05",
    location: "London, UK",
    type: "fellowship",
    postedDate: "2024-11-06",
    description: "Six-month fellowship for emerging leaders from Commonwealth countries. Focus on governance and public policy."
  },
  {
    title: "USAID Development Professional",
    source: "USAID",
    url: "https://usaid.gov/careers/dp1",
    category: "Development",
    deadline: "2025-01-16",
    location: "Multiple locations",
    type: "job",
    postedDate: "2024-11-09",
    description: "Lead development programs in health, education, and economic growth. International experience and language skills preferred."
  }
];

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    
    // Clear existing demo data
    await Opportunity.deleteMany({ 
      source: { 
        $in: [
          "UNDP", "Fulbright Commission", "Gates Foundation", "World Bank", "Oxford University", 
          "UNICEF", "MIT", "UN Women", "Save the Children", "Oxfam", "IFC", "McKinsey & Company", 
          "UNESCO", "WHO", "UNFCCC", "Cambridge University", "London School of Economics", 
          "Harvard University", "Ford Foundation", "Green Climate Fund", "Rockefeller Foundation", 
          "PMI", "INSEAD", "ACCA", "African Union", "ECOWAS", "Commonwealth Secretariat", "USAID"
        ] 
      } 
    });
    
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