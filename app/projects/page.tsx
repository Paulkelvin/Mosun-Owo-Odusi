'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink, Users, DollarSign, Calendar, MapPin, Award, TrendingUp, Briefcase, ChevronDown, ChevronUp, Image as ImageIcon, Presentation, X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react'
import HighlightText from '@/components/HighlightText'
import Image from 'next/image'
import DotPattern from '@/components/DotPattern'
import ScrollControls from '@/components/ScrollControls'

// Enhanced project data structure with milestones
const projects = [
  {
    id: 1,
    year: 2024,
    title: "OGSTEP: Ogun State Economic Transformation Project",
    category: "Project Coordinator",
    status: "Ongoing",
    budget: "World Bank Funded",
    beneficiaries: "Ogun State",
    duration: "2020-2025",
    location: "Ogun State, Nigeria",
    image: "/images/ogun_state_logo.png",
    description: "Coordinating a comprehensive World Bank-assisted economic transformation program overseeing 3 Project Managers, 15+ Specialist Consultants, and 60+ team members across Business Enabling Environment, Agricultural Value Chain, Skills Development, and Public Sector Reforms.",
    impact: "This World Bank-assisted project has directly benefitted over 72,000 Ogun State residents, supporting 33,075 farmers, training 39,000+ beneficiaries, issuing 15,000+ Certificates of Occupancy, and enabling offtake of 283,000+ metric tonnes of agricultural produce.",
    tags: ["World Bank", "Economic Transformation", "Project Coordinator", "Public Sector Reform", "Agricultural Development", "Skills Development"],
    milestones: [
      {
        id: "overall_leadership",
        title: "Large-Scale Human Capital & Livelihood Impact",
        period: "2020 – 2025",
        description: "Provided overall coordination and leadership for OGSTEP, overseeing project interventions that directly benefitted over 72,000 Ogun State residents across agriculture, skills development, and institutional reforms.",
        achievements: [
          "Oversaw project interventions benefitting over 72,000 Ogun State residents - https://punchng.com/ogun-empowers-over-72000-residents-with-agric-skills/",
          "Coordinated skills development programmes that trained over 39,000 beneficiaries",
          "Led implementation of agricultural interventions supporting 33,075 farmers - https://punchng.com/ogun-empowers-over-72000-residents-with-agric-skills/#:~:text=has%20directly%20supported-,33%2C075,-farmers%20statewide%2C%20including",
          "Provided strategic leadership ensuring compliance with World Bank fiduciary, environmental, and social standards"
        ],
        metrics: {
          "Total Beneficiaries": "72,000+",
          "Skills Trainees": "39,000+",
          "Farmers Supported": "33,075",
          "Project Timeline": "2020 – 2025"
        },
        images: [
	        "/images/OGSTEP_outreach.JPG",
	        "/images/OGSTEP_Mosun_Owo-Odusi.JPG",
	        "/images/OGSTEP_Agric2.JPG"
        ]
      },
      {
        id: "establishment",
        title: "Agricultural Productivity & Value Chain Support",
        period: "2020 – 2025",
        description: "Led implementation of comprehensive agricultural interventions supporting 33,075 farmers across crop production, aquaculture, and poultry, with mechanisation covering over 9,000 hectares.",
        achievements: [
          "Supported 27,547 crop farmers, 4,256 aquaculture farmers, and 1,272 poultry farmers",
          "Facilitated access to critical agricultural inputs including fertilisers, agrochemicals, fish feed, and poultry feed",
          "Coordinated mechanisation support covering over 9,000 hectares of farmland",
          "Enabled structured offtake of over 283,000 metric tonnes of agricultural produce - https://guardian.ng/news/ogun-empowers-over-72000-residents-through-ogstep-projects/#:~:text=while%20the%20project%20enabled%20agribusiness%20firms%20to%20offtake%20283%2C582%20tons%20of%20produce%2C%20improving%20market%20access%20and%20value%20chain%20efficiency"
        ],
        metrics: {
          "Total Farmers": "33,075",
          "Crop Farmers": "27,547",
          "Aquaculture Farmers": "4,256",
          "Hectares Mechanised": "9,000+",
          "Produce Offtake": "283,000 MT"
        },
        images: [
          "/images/Agric_OGSFAFA.JPG",
          "/images/Agric_OGSFAFA2.JPG",
          "/images/OGSTEP_Agric.JPG",
          "/images/OGSTEP_Agric (1).JPG"
        ]
      },
      {
        id: "implementation",
        title: "Skills Development & Education Infrastructure",
        period: "2020 – 2025",
        description: "Supervised the rehabilitation and equipping of educational facilities while coordinating capacity-building programmes for teachers and technical instructors across Ogun State.",
        achievements: [
          "Supervised rehabilitation and equipping of 8 technical colleges - https://punchng.com/ogun-upgrades-eight-technical-colleges-to-boost-vocational-training/",
          "Led upgrade of laboratories in 22 flagship secondary schools and establishment of 3 Job Centres",
          "Coordinated capacity-building for 1,400 STEM teachers, 100 Quality Assurance Officers, and 120 Technical Instructors",
          "Coordinated skills development programmes training over 39,000 beneficiaries in employable and entrepreneurial skills"
        ],
        metrics: {
          "Technical Colleges": "8 Upgraded",
          "Secondary Schools": "22 Enhanced",
          "STEM Teachers Trained": "1,400",
          "Skills Beneficiaries": "39,000+"
        },
        images: [
	        "/images/OGSTEP_skills.JPG",
	        "/images/OGSTEP_skills1.jpeg",
	        "/images/OGSTEP_skills2.jpeg",
	        "/images/OGSTEP_skills3.jpeg"
        ]
      },
      {
        id: "sustainability",
        title: "Land Administration & Business Enabling Environment Reforms",
        period: "2020 – 2025",
        description: "Provided leadership for comprehensive reforms that facilitated the issuance of over 15,000 Certificates of Occupancy and deployment of cutting-edge GIS/CORS infrastructure and high-tech survey equipment transforming geospatial capacity statewide.",
        achievements: [
          "Led reforms facilitating issuance of over 15,000 Certificates of Occupancy - https://progressivenews.ng/65000-beneficiaries-uplifted-by-oguns-economic-transformation-project-in-five-years/#:~:text=Over%2015%2C000%20Certificates%20of%20Occupancy%20have%20been%20issued%20to%20enhance%20business%20confidence.",
          "Oversaw deployment of high-tech survey equipment and GIS/CORS (Continuously Operating Reference Stations) infrastructure spanning entire state - https://punchng.com/ogun-empowers-over-72000-residents-with-agric-skills/#:~:text=Owo%2DOdusi%20said%20that%20the%20project,the%20entire%20state%2C%20transforming%20geospatial%20capacity.",
          "Coordinated implementation of modern geospatial technology unlocking land value for citizens and government, creating wealth through improved land administration",
          "Supervised rehabilitation of zonal planning offices with GIS-based land management systems",
          "Led public service reform initiatives strengthening procurement systems and monitoring frameworks",
          "Oversaw rehabilitation of State Bureau of Statistics to improve data-driven decision-making"
        ],
        metrics: {
          "Certificates Issued": "15,000+",
          "Land Tenure Security": "Strengthened",
          "GIS/CORS Systems": "Statewide",
          "Institutional Reforms": "Implemented"
        },
        images: [
          "/images/OGSTEP_CORS.webp",
          "/images/OGSTEP_CORS2.webp",
          "/images/OGSTEP_CORS_indoor_unit.webp",
          "/images/OGSTEP_CORS_indoor_unit2.webp",
          "/images/OGSTEP_CORS_Training_by_sivan_design.webp",
          "/images/OGSTEP_surveying_equipment_training_by_Sivan_Design.webp"
        ]
      }
    ]
  },
  {
    id: 2,
    year: 2023,
    title: "Amville Consults",
    category: "Educational Consulting & Advisory",
    status: "Ongoing",
    budget: "Multi-client",
    beneficiaries: "Schools, Students, Educators",
    duration: "2011-Present",
    location: "Lagos, Nigeria",
    image: "/images/amVille_SCHOOL_logo.png",
    description: "Delivering expert consulting, training, and project management services to educational institutions and organizations, with a focus on capacity building, scholarships, and transformative impact.",
    impact: "Enabled institutional transformation, facilitated scholarships for students in underserved communities, and empowered educators through targeted capacity-building interventions.",
    tags: ["Consulting", "Capacity Building", "Scholarship Facilitation", "Training", "Institutional Development"],
    milestones: [
      {
        id: "scholarship_facilitation",
        title: "Scholarship Facilitation Program",
        period: "2015-2018",
        description: "Facilitated scholarship processes for students in Igbo communities, supporting access to quality education and promoting educational equity.",
        achievements: [
          "Helped students secure scholarships",
          "Worked with local communities to identify beneficiaries",
          "Promoted educational equity and access",
          "Supported families through the scholarship application process"
        ],
        metrics: {
          "Students Supported": "Multiple",
          "Communities Reached": "Igbo Region",
          "Program Duration": "3+ Years"
        },
        images: []
      },
      {
        id: "training_capacity",
        title: "Training & Capacity Building",
        period: "2011-Present",
        description: "Designed and delivered training programs for teachers, school leaders, and educational organizations to enhance institutional effectiveness.",
        achievements: [
          "Conducted workshops and seminars for educators",
          "Built capacity in educational leadership",
          "Enhanced institutional effectiveness across multiple schools",
          "Provided ongoing professional development support"
        ],
        metrics: {
          "Workshops Conducted": "Multiple",
          "Educators Trained": "Hundreds",
          "Institutions Served": "Multiple"
        },
        images: []
      },
      {
        id: "media_interviews",
        title: "Thought Leadership & Media Engagement",
        period: "2012-Present",
        description: "Featured in interviews and media, sharing expertise and insights on education, entrepreneurship, and institutional development.",
        achievements: [
          "Participated in educational forums and interviews",
          "Shared thought leadership on school management",
          "Highlighted consulting impact and best practices",
          "Contributed to public discourse on education reform"
        ],
        metrics: {
          "Media Appearances": "Multiple",
          "Topics Covered": "Education & Entrepreneurship"
        },
        images: []
      }
    ]
  },
  {
    id: 3,
    year: 2023,
    title: "Amville Educational Innovation & Consulting",
    category: "Educational Leadership",
    status: "Ongoing",
    budget: "Multi-client",
    beneficiaries: "Students & Educators",
    duration: "2011-Present",
    location: "Lagos, Nigeria",
    image: "/images/amVille_SCHOOL_logo.png",
    description: "Leading comprehensive educational consulting and program development through Amville School and Amville Consults, delivering innovative learning solutions, institutional audits, and transformative educational experiences across multiple educational institutions.",
    impact: "Transformed educational experiences for thousands of students while strengthening institutional capacity through innovative literacy programs, e-learning initiatives, staff development, and comprehensive school audits.",
    tags: ["Educational Consulting", "E-Learning", "Literacy Programs", "Institutional Development", "Staff Training"],
    milestones: [
      {
        id: "literacy_innovation",
        title: "Book Lovers Literacy Program",
        period: "2013-Present",
        description: "Developed and implemented innovative literacy program integrating reading, writing, art and technology to enhance critical reading and writing skills.",
        achievements: [
          "Created comprehensive literacy curriculum",
          "Integrated technology with traditional learning",
          "Developed web-based review publication platform",
          "Established age-appropriate learning categories"
        ],
        metrics: {
          "Age Categories": "4",
          "Skills Developed": "Multiple",
          "Technology Integration": "Advanced",
          "Student Engagement": "High"
        },
        images: [
	        
        ]
      },
      {
        id: "elearning_blended",
        title: "E-Learning & Blended Learning",
        period: "2014-Present",
        description: "Pioneered comprehensive e-learning and blended learning initiatives, revolutionizing educational delivery methods.",
        achievements: [
          "Developed blended learning frameworks",
          "Implemented digital learning platforms",
          "Created innovative teaching methodologies",
          "Enhanced educational accessibility"
        ],
        metrics: {
          "Learning Platforms": "Multiple",
          "Teaching Methods": "Innovative",
          "Student Reach": "Extensive",
          "Learning Outcomes": "Enhanced"
        },
        images: [
	        
        ]
      },
      {
        id: "institutional_development",
        title: "Institutional Audits & Development",
        period: "2012-Present",
        description: "Conducted comprehensive institutional audits and transformation programs for prestigious educational institutions.",
        achievements: [
          "Methodist Girls High School turnaround audit",
          "Igbobi College staff audit and development",
          "Chrisland College IGCSE training program",
          "Multi-institutional capacity building"
        ],
        metrics: {
          "Institutions Served": "Multiple",
          "Staff Trained": "Hundreds",
          "Audit Areas": "Comprehensive",
          "Improvement Rate": "Significant"
        },
        images: [
	        
        ]
      },
      {
        id: "community_impact",
        title: "Community Engagement & Social Impact",
        period: "2011-Present",
        description: "Leading community-focused initiatives including charity programs and inter-school competitions that build character and social responsibility.",
        achievements: [
          "Annual 'Amville Goes Red' charity initiative",
          "Inter-school spelling bee competitions",
          "Community outreach programs",
          "Character development through service"
        ],
        metrics: {
          "Charity Beneficiaries": "Multiple Homes",
          "Annual Events": "Consistent",
          "Community Partners": "Diverse",
          "Student Participation": "100%"
        },
        images: [
	        
        ]
      }
    ]
  }
]

type GalleryImage = {
  src: string
  alt: string
  category: string
  caption?: string
}

const galleryImages: GalleryImage[] = [
  // OGSTEP leadership & outreach
  {
    src: '/images/OGSTEP_outreach.JPG',
    alt: 'OGSTEP outreach session with community members',
    category: 'Leadership & Outreach',
  },
  {
    src: '/images/OGSTEP_Mosun_Owo-Odusi.JPG',
    alt: 'Mosun Owo-Odusi speaking during OGSTEP session',
    category: 'Leadership & Outreach',
  },
  {
    src: '/images/Mosun Owo-Odusi.jpg',
    alt: 'Professional portrait of Mosun Owo-Odusi',
    category: 'Leadership & Outreach',
  },
  {
    src: '/images/Mosun Owo-Odusi.png',
    alt: 'Alternate portrait of Mosun Owo-Odusi',
    category: 'Leadership & Outreach',
  },
  {
    src: '/images/Mosun Owo-Odusi-OGSTEP_project_coordinator.jpg',
    alt: 'Mosun Owo-Odusi as OGSTEP Project Coordinator',
    category: 'Leadership & Outreach',
  },
  {
    src: '/images/OGSTEP_Agric2.JPG',
    alt: 'OGSTEP field engagement with farmers',
    category: 'Leadership & Outreach',
  },
  // Agric value chain
  {
    src: '/images/Agric_OGSFAFA.JPG',
    alt: 'Farmers participating in OGSTEP agricultural programme',
    category: 'Agriculture & Value Chains',
  },
  {
    src: '/images/Agric_OGSFAFA2.JPG',
    alt: 'OGSTEP-supported agricultural activities in Ogun State',
    category: 'Agriculture & Value Chains',
  },
  {
    src: '/images/OGSTEP_Agric.JPG',
    alt: 'OGSTEP agricultural training and demonstration',
    category: 'Agriculture & Value Chains',
  },
  {
    src: '/images/OGSTEP_Agric (1).JPG',
    alt: 'Featured OGSTEP agricultural field visit',
    category: 'Agriculture & Value Chains',
  },
  // Skills & education
  {
    src: '/images/OGSTEP_skills.JPG',
    alt: 'Skills development session under OGSTEP',
    category: 'Skills & Education',
  },
  {
    src: '/images/OGSTEP_skills1.jpeg',
    alt: 'Participants at OGSTEP skills training',
    category: 'Skills & Education',
  },
  {
    src: '/images/OGSTEP_skills2.jpeg',
    alt: 'Hands-on technical training session',
    category: 'Skills & Education',
  },
  {
    src: '/images/OGSTEP_skills3.jpeg',
    alt: 'Group photo from OGSTEP skills programme',
    category: 'Skills & Education',
  },
  // Technical colleges before/after rehabilitation
  {
    src: '/images/Government_Technical_College_Before_Rehabilitation.png',
    alt: 'Government Technical College buildings before rehabilitation under OGSTEP',
    category: 'Before & After: Technical Colleges',
  },
  {
    src: '/images/Government_Technical_College_After_Rehabilitation.png',
    alt: 'Government Technical College buildings after rehabilitation under OGSTEP',
    category: 'Before & After: Technical Colleges',
  },
  {
    src: '/images/Before1.png',
    alt: 'Project site condition before intervention (1)',
    category: 'Before & After: Project Sites',
  },
  {
    src: '/images/After1.png',
    alt: 'Project site condition after intervention (1)',
    category: 'Before & After: Project Sites',
  },
  {
    src: '/images/Before2.png',
    alt: 'Project site condition before intervention (2)',
    category: 'Before & After: Project Sites',
  },
  {
    src: '/images/After2.png',
    alt: 'Project site condition after intervention (2)',
    category: 'Before & After: Project Sites',
  },
  {
    src: '/images/Before3.png',
    alt: 'Project site condition before intervention (3)',
    category: 'Before & After: Project Sites',
  },
  {
    src: '/images/After3.png',
    alt: 'Project site condition after intervention (3)',
    category: 'Before & After: Project Sites',
  },
  {
    src: '/images/Before4.png',
    alt: 'Project site condition before intervention (4)',
    category: 'Before & After: Project Sites',
  },
  {
    src: '/images/After4.png',
    alt: 'Project site condition after intervention (4)',
    category: 'Before & After: Project Sites',
  },
  // Land administration & CORS infrastructure
  {
    src: '/images/OGSTEP_CORS.webp',
    alt: 'OGSTEP CORS geospatial infrastructure mast',
    category: 'Land Administration & GIS',
  },
  {
    src: '/images/OGSTEP_CORS2.webp',
    alt: 'CORS station equipment installed outdoors',
    category: 'Land Administration & GIS',
  },
  {
    src: '/images/OGSTEP_CORS_indoor_unit.webp',
    alt: 'Indoor CORS control unit rack',
    category: 'Land Administration & GIS',
  },
  {
    src: '/images/OGSTEP_CORS_indoor_unit2.webp',
    alt: 'Detail view of CORS indoor equipment',
    category: 'Land Administration & GIS',
  },
  {
    src: '/images/OGSTEP_CORS_Training_by_sivan_design.webp',
    alt: 'Training on geospatial systems by technical partners',
    category: 'Land Administration & GIS',
  },
  {
    src: '/images/OGSTEP_surveying_equipment_training_by_Sivan_Design.webp',
    alt: 'Surveying equipment demonstration during OGSTEP training',
    category: 'Land Administration & GIS',
  },
  // Additional gallery images (compressed set)
  { src: '/images/gallery/IMG_0807.jpg', alt: 'Project field photo 1', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0808.jpg', alt: 'Project field photo 2', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0815.jpg', alt: 'Project field photo 3', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0816.jpg', alt: 'Project field photo 4', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0817.jpg', alt: 'Project field photo 5', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0818.jpg', alt: 'Project field photo 6', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0819.jpg', alt: 'Project field photo 7', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0820.jpg', alt: 'Project field photo 8', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0821.jpg', alt: 'Project field photo 9', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0822.jpg', alt: 'Project field photo 10', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0823.jpg', alt: 'Project field photo 11', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0824.jpg', alt: 'Project field photo 12', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0827.jpg', alt: 'Project field photo 13', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0828.jpg', alt: 'Project field photo 14', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0829.jpg', alt: 'Project field photo 15', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0830.jpg', alt: 'Project field photo 16', category: 'Field Highlights' },
  {
    src: '/images/gallery/IMG_0831.jpg',
    alt: 'Physical monitoring of the rehabilitation of Government Technical College Ijebu-Ode by the Project Coordinator, accompanied by the Chief Economic Adviser and Honourable Commissioner for Finance who also serves as OGSTEP Project Steering Committee Chair, Mr Dapo Okubadejo, alongside other members of the State Executive Council.',
    category: 'Field Highlights',
    caption:
      'Physical monitoring of Government Technical College Ijebu-Ode rehabilitation with OGSTEP leadership and State Executive Council.',
  },
  { src: '/images/gallery/IMG_0833.jpg', alt: 'Project field photo 18', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0834.jpg', alt: 'Project field photo 19', category: 'Field Highlights' },
  { src: '/images/gallery/IMG_0835.jpg', alt: 'Project field photo 20', category: 'Field Highlights' },
  {
    src: '/images/gallery/IMG_0836.jpg',
    alt: 'Group field photo during the physical monitoring of the rehabilitation of Government Technical College Ijebu-Ode by the Project Coordinator, joined by the Chief Economic Adviser and Honourable Commissioner for Finance, OGSTEP Project Steering Committee Chair Mr Dapo Okubadejo, and other members of the State Executive Council at the same site visit.',
    category: 'Field Highlights',
    caption:
      'Physical monitoring of Government Technical College Ijebu-Ode rehabilitation with OGSTEP leadership and State Executive Council.',
  },
  { src: '/images/gallery/IMG_0837.jpg', alt: 'Project field photo 22', category: 'Field Highlights' },
]

// Before/after images that should appear only in the dedicated strip,
// not duplicated in the masonry grid, but still be part of the zoom set
const beforeAfterGallerySrcs = new Set<string>([
  '/images/Government_Technical_College_Before_Rehabilitation.png',
  '/images/Government_Technical_College_After_Rehabilitation.png',
  '/images/Before1.png',
  '/images/After1.png',
  '/images/Before2.png',
  '/images/After2.png',
  '/images/Before3.png',
  '/images/After3.png',
  '/images/Before4.png',
  '/images/After4.png',
])

type VideoHighlight = {
  id: string
  title: string
  src: string
}

const videoHighlights: VideoHighlight[] = [
  {
    id: 'mosun-fish-harvest-ijebu',
    title: 'Mosun Owo-Odusi – Speech at launch of fish harvest (Ijebu)',
    src: 'https://drive.google.com/file/d/1wEswzM9QHRxg4VFNLAasEADnXA5cJG8R/preview',
  },
  {
    id: 'mosun-video-highlight-2',
    title: 'Mosun Owo-Odusi – OGSTEP video highlight',
    src: 'https://drive.google.com/file/d/1cHiu1R03JwsCWPQa-nWFRDPtD8kf9Irt/preview',
  },
  {
    id: 'mosun-award-ogstep',
    title: 'Mosun Owo-Odusi receiving an award on behalf of OGSTEP',
    src: 'https://drive.google.com/file/d/1LldvxNnzTPhSm8hNFmN7vGwvdg98xJ45/preview',
  },
  {
    id: 'mosun-pc-interview',
    title: 'Mosun Owo-Odusi – Project Coordinator interview',
    src: 'https://drive.google.com/file/d/1CSaJFb2_hy-2sFYLB8U1bowPxeyAmp_B/preview',
  },
  {
    id: 'mosun-interview-journalist-1',
    title: 'Mosun Owo-Odusi interview session with a journalist',
    src: 'https://drive.google.com/file/d/1MeifnduMzvgMBdhwZE9kntXKUqkDfq-B/preview',
  },
  {
    id: 'mosun-interview-journalist-2',
    title: 'Mosun Owo-Odusi interview session with a journalist (2)',
    src: 'https://drive.google.com/file/d/1ixQo30q24xNnRzOCR7o8x0IgiboPw6nM/preview',
  },
  {
    id: 'mosun-matter-resolution',
    title: 'Mosun Owo-Odusi interview session on matter resolution',
    src: 'https://drive.google.com/file/d/1Qs6fQAiH44-FLLpMjZhIzL7N9A68f_u2/preview',
  },
]

export default function Projects() {
  const [selectedYear, setSelectedYear] = useState(2024)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [selectedMilestone, setSelectedMilestone] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [milestoneImageIndex, setMilestoneImageIndex] = useState<{[key: string]: number}>({})
  const [galleryMode, setGalleryMode] = useState<'preview' | 'expanded' | 'full'>('preview')
  
  // Presentation mode states
  const [isPresentationMode, setIsPresentationMode] = useState(false)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [presentationImageIndex, setPresentationImageIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1)

  // Check URL for presentation parameter
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      if (params.get('presentation') === 'ogstep') {
        setSelectedYear(2024)
        setCurrentProjectIndex(0)
        setIsPresentationMode(true)
        setCurrentSlideIndex(0)
        // Clean up URL
        window.history.replaceState({}, '', '/projects')
      }
    }
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
      setSelectedYear(projects[(currentProjectIndex + 1) % projects.length].year)
      setSelectedMilestone(null) // Reset milestone when auto-playing
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isAutoPlay, currentProjectIndex])

  const currentProject = projects.find(p => p.year === selectedYear) || projects[0]
  const years = projects.map(p => p.year).sort((a, b) => b - a)
  const currentMilestone = selectedMilestone 
    ? currentProject.milestones.find(m => m.id === selectedMilestone)
    : null

  const beforeAfterPairs = [
    {
      label: 'Government Technical College Rehabilitation',
      context: 'One of eight Government Technical Colleges upgraded under OGSTEP to modern, skills-focused learning environments.',
      before: '/images/Government_Technical_College_Before_Rehabilitation.png',
      after: '/images/Government_Technical_College_After_Rehabilitation.png',
    },
    {
      label: 'Project Site Transformation 1',
      context: 'Illustrative transformation of learning and community environments before and after OGSTEP and related interventions.',
      before: '/images/Before1.png',
      after: '/images/After1.png',
    },
    {
      label: 'Project Site Transformation 2',
      context: 'Improved infrastructure and usability following targeted investment and rehabilitation.',
      before: '/images/Before2.png',
      after: '/images/After2.png',
    },
    {
      label: 'Project Site Transformation 3',
      context: 'Upgraded facilities supporting safer, more effective learning and workspaces.',
      before: '/images/Before3.png',
      after: '/images/After3.png',
    },
    {
      label: 'Project Site Transformation 4',
      context: 'Visible upgrade from informal settings to more structured, well-equipped environments.',
      before: '/images/Before4.png',
      after: '/images/After4.png',
    },
  ] as const

  const [isImageZoomOpen, setIsImageZoomOpen] = useState(false)
  const [zoomImageIndex, setZoomImageIndex] = useState<number | null>(null)
  const [zoomLevel, setZoomLevel] = useState(1)

  // Pan offsets for zoomed image in lightbox
  const zoomPanX = useMotionValue(0)
  const zoomPanY = useMotionValue(0)

  const openZoomForImage = (img: GalleryImage) => {
    const index = galleryImages.findIndex(
      (g) => g.src === img.src && g.alt === img.alt && g.category === img.category
    )
    if (index !== -1) {
      setZoomImageIndex(index)
      setZoomLevel(1)
      zoomPanX.set(0)
      zoomPanY.set(0)
      setIsImageZoomOpen(true)
    }
  }

  const closeZoom = () => {
    setIsImageZoomOpen(false)
    setZoomImageIndex(null)
    setZoomLevel(1)
    zoomPanX.set(0)
    zoomPanY.set(0)
  }

  const goToZoomImage = (direction: 1 | -1) => {
    if (zoomImageIndex === null) return
    const total = galleryImages.length
    const nextIndex = (zoomImageIndex + direction + total) % total
    setZoomImageIndex(nextIndex)
    setZoomLevel(1)
    zoomPanX.set(0)
    zoomPanY.set(0)
  }

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.3, 2.5))
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.3, 1))
  }

  const handleZoomReset = () => {
    setZoomLevel(1)
    zoomPanX.set(0)
    zoomPanY.set(0)
  }

  // Helper: open zoom viewer from a specific image src (used by before/after strip)
  const openZoomForSrc = (src: string) => {
    const img = galleryImages.find((g) => g.src === src)
    if (img) {
      openZoomForImage(img)
    }
  }

  const nonBeforeAfterImages = galleryImages.filter(
    (img) => !beforeAfterGallerySrcs.has(img.src)
  )

  const visibleGalleryImages =
    galleryMode === 'preview'
      ? nonBeforeAfterImages.slice(0, 6)
      : galleryMode === 'expanded'
        ? nonBeforeAfterImages.slice(0, 12)
        : nonBeforeAfterImages

  // Presentation mode auto-advance
  useEffect(() => {
    if (!isPresentationMode) return
    
    const currentSlide = currentProject.milestones[currentSlideIndex]
    if (!currentSlide) return
    
    // Slower reading time for comfortable viewing (12 seconds)
    const readingTime = 12000 // 12 seconds per slide
    
    const timer = setTimeout(() => {
      if (currentSlideIndex < currentProject.milestones.length - 1) {
        setSlideDirection(1)
        setCurrentSlideIndex(prev => prev + 1)
        setPresentationImageIndex(0) // Reset image index for new slide
      } else {
        // End of presentation
        setIsPresentationMode(false)
        setCurrentSlideIndex(0)
        setPresentationImageIndex(0)
      }
    }, readingTime)
    
    return () => clearTimeout(timer)
  }, [isPresentationMode, currentSlideIndex, currentProject.milestones])

  // Auto-advance images within presentation slides
  useEffect(() => {
    if (!isPresentationMode) return
    
    const currentSlide = currentProject.milestones[currentSlideIndex]
    if (!currentSlide || currentSlide.images.length <= 1) return
    
    const imageTimer = setInterval(() => {
      setPresentationImageIndex(prev => (prev + 1) % currentSlide.images.length)
    }, 4000) // Change image every 4 seconds (slower)
    
    return () => clearInterval(imageTimer)
  }, [isPresentationMode, currentSlideIndex, currentProject.milestones])

  const handleYearClick = (year: number) => {
    setSelectedYear(year)
    setCurrentProjectIndex(projects.findIndex(p => p.year === year))
    setSelectedMilestone(null)
    setCurrentImageIndex(0)
  }

  const handlePrevious = () => {
    const newIndex = currentProjectIndex > 0 ? currentProjectIndex - 1 : projects.length - 1
    setCurrentProjectIndex(newIndex)
    setSelectedYear(projects[newIndex].year)
    setSelectedMilestone(null)
    setCurrentImageIndex(0)
  }

  const handleNext = () => {
    const newIndex = currentProjectIndex < projects.length - 1 ? currentProjectIndex + 1 : 0
    setCurrentProjectIndex(newIndex)
    setSelectedYear(projects[newIndex].year)
    setSelectedMilestone(null)
    setCurrentImageIndex(0)
  }

  const handleMilestoneClick = (milestoneId: string) => {
    setSelectedMilestone(selectedMilestone === milestoneId ? null : milestoneId)
    setCurrentImageIndex(0)
  }

  const handleMilestoneImageNext = (milestoneId: string, totalImages: number) => {
    setMilestoneImageIndex(prev => ({
      ...prev,
      [milestoneId]: ((prev[milestoneId] || 0) + 1) % totalImages
    }))
  }

  const handleMilestoneImagePrev = (milestoneId: string, totalImages: number) => {
    setMilestoneImageIndex(prev => ({
      ...prev,
      [milestoneId]: ((prev[milestoneId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Project Coordinator": "bg-primary-100 text-primary-700 border-primary-200",
      "Project Coordination": "bg-primary-100 text-primary-700 border-primary-200",
      "Educational Leadership": "bg-blue-100 text-blue-700 border-blue-200",
      "Education Consulting": "bg-purple-100 text-purple-700 border-purple-200",
      "Real Estate Advisory": "bg-green-100 text-green-700 border-green-200",
      "Leadership & Strategy": "bg-gold-100 text-gold-700 border-gold-200",
      "Crisis Management": "bg-red-100 text-red-700 border-red-200"
    }
    return colors[category as keyof typeof colors] || "bg-slate-100 text-slate-700 border-slate-200"
  }

  // Helper function to parse achievements and extract links
  const parseAchievement = (achievement: string) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g
    const parts = achievement.split(urlPattern)
    
    return parts.map((part, index) => {
      if (part.match(urlPattern)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium ml-1"
            onClick={(e) => e.stopPropagation()}
            title="Click to verify from official source"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="text-xs underline">Verified Source</span>
          </a>
        )
      }
      return part
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="projects-hero" className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden mt-16 lg:mt-20">
        <DotPattern position="top-right" color="gold" size="md" rows={4} cols={4} opacity={0.5} />
        <DotPattern position="bottom-left" color="blue" size="sm" rows={5} cols={5} opacity={0.4} />
        
        {/* Background Pattern & Stripes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          {/* Subtle diagonal stripes on right half */}
          <div
            className="absolute inset-y-0 right-0 w-1/2"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.12) 8%, transparent 8%, transparent 50%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.12) 58%, transparent 58%, transparent 100%)",
              backgroundSize: '28px 28px',
            }}
          />
        </div>

        <div className="relative z-10 container-custom py-16 lg:py-24 flex items-center min-h-[400px] lg:min-h-[500px]">
          <div className="max-w-4xl mx-auto text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                My <span className="text-gold-300">Work</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section id="projects-timeline" className="relative section-padding bg-slate-50 overflow-hidden">
        {/* Decorative diagonal stripes in background */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 opacity-10 rotate-3"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(15,23,42,0.12) 8%, transparent 8%, transparent 50%, rgba(15,23,42,0.12) 50%, rgba(15,23,42,0.12) 58%, transparent 58%, transparent 100%)",
            backgroundSize: '26px 26px',
          }}
        />
        <div className="container-custom max-w-full relative z-10">
          {/* Section Header with Navigation */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              <span className="whitespace-nowrap">Leadership</span> <HighlightText highlightColor="blue">Impact</HighlightText>
            </h2>
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-xl text-slate-700">
                <span className="hidden lg:inline">From pioneering educational innovation since 2011 to leading transformative economic development projects, explore 15+ years of strategic leadership creating lasting impact.</span>
                <span className="lg:hidden">Explore 15+ years of strategic leadership and transformative impact.</span>
              </p>
            </div>
            
            {/* Desktop Controls - Moved to top */}
            <div className="hidden lg:flex items-center justify-center gap-2 mb-8">
              <button
                onClick={handlePrevious}
                className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                title="Previous project"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button
                onClick={() => {
                  setIsPresentationMode(true)
                  setCurrentSlideIndex(0)
                }}
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                title="Start presentation mode"
              >
                <Presentation className="w-5 h-5" />
                <span className="hidden sm:inline">Present</span>
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                title="Next project"
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>
            
            {/* Mobile Navigation - Controls Only */}
            <div className="lg:hidden flex flex-col items-center gap-4 mb-8">
              {/* Mobile Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevious}
                  className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                  title="Previous project"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                </button>
                <button
                  onClick={() => {
                    setIsPresentationMode(true)
                    setCurrentSlideIndex(0)
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  title="Start presentation mode"
                >
                  <Presentation className="w-5 h-5" />
                  <span>Present</span>
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                  title="Next project"
                >
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="grid lg:grid-cols-5 gap-4 lg:gap-6">
            
            {/* Left Panel - Years Timeline (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-32">
                {/* Timeline Header */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Project Timeline</h3>
                </div>

                {/* Year Navigation */}
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-gold-200"></div>
                  <div className="space-y-6">
                    {projects.map((project, index) => (
                      <motion.button
                        key={project.id}
                        onClick={() => handleYearClick(project.year)}
                        className={`relative flex items-start text-left transition-all duration-300 ${
                          selectedYear === project.year
                            ? 'text-primary-700'
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold mr-4 transition-all duration-300 flex-shrink-0 ${
                          selectedYear === project.year
                            ? 'bg-primary-600 border-primary-600 text-white shadow-lg'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-primary-300'
                        }`}>
                          {project.year.toString().slice(-2)}
                        </div>
                        <div className="min-w-0">
                          <div className={`text-lg font-bold transition-all duration-300 mb-1 ${
                            selectedYear === project.year ? 'text-primary-700' : 'text-slate-600'
                          }`}>
                            {project.duration}
                          </div>
                          <div className="text-sm text-slate-500 leading-tight">
                            {project.title}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Project Details */}
            <div className="lg:col-span-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200"
                >
                  {/* Project Header */}
                  <div className="p-4 lg:p-6 bg-white">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(currentProject.category)}`}>
                            {currentProject.category}
                          </span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                          {currentProject.title}
                        </h3>
                        
                        {/* Story Context Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-50 border border-gold-200 rounded-full text-sm font-medium text-gold-700 mb-4">
                          <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                          {currentProject.id === 1 ? "Current Leadership Role" : "Foundational Innovation Journey"}
                        </div>
                        
                        <p className="text-lg text-slate-700 leading-relaxed">
                          {currentProject.id === 1 ? (
                            <>
                              <span className="hidden lg:inline">{currentProject.description}</span>
                              <span className="lg:hidden">Coordinating World Bank-assisted economic transformation program with 3 Project Managers, 15+ Consultants, 60+ team members across multiple critical initiatives.</span>
                            </>
                          ) : (
                            <span className="block">{currentProject.description}</span>
                          )}
                        </p>
                      </div>
                      
                      <div className="lg:w-80">
                        <div className="relative h-48 lg:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-gold-100 flex items-center justify-center p-6">
                          <Image
                            src={currentProject.image}
                            alt={currentProject.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
                      {(currentProject.id === 2
                        ? [
                            { label: "Beneficiaries", value: currentProject.beneficiaries, icon: Users },
                            { label: "Duration", value: currentProject.duration, icon: Calendar },
                            { label: "Location", value: currentProject.location, icon: MapPin },
                          ]
                        : [
                            { label: "Budget", value: currentProject.budget, icon: DollarSign },
                            { label: "Beneficiaries", value: currentProject.beneficiaries, icon: Users },
                            { label: "Duration", value: currentProject.duration, icon: Calendar },
                            { label: "Location", value: currentProject.location, icon: MapPin },
                          ]
                      ).map((metric, index) => (
                        <div key={metric.label} className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <metric.icon className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                          <div className="text-sm font-bold text-slate-900">{metric.value}</div>
                          <div className="text-xs text-slate-700">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Project Milestones */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-slate-900 mb-6">Project Milestones</h4>
                      <div className="space-y-4">
                        {currentProject.milestones.map((milestone, index) => (
                          <motion.div
                            key={milestone.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-150px" }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="border border-slate-200 rounded-xl overflow-hidden bg-white"
                          >
                            <button
                              onClick={() => handleMilestoneClick(milestone.id)}
                              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors bg-white"
                            >
                              <div className="flex-1">
                                <div className="flex items-center gap-4 mb-2">
                                  <span className="text-sm font-medium text-primary-700 bg-primary-100 px-3 py-1 rounded-full border border-primary-200">
                                    {milestone.period}
                                  </span>
                                </div>
                                <h5 className="text-lg font-semibold text-slate-900 mb-1">{milestone.title}</h5>
                                <p className="text-sm text-slate-700">{milestone.description}</p>
                              </div>
                              {selectedMilestone === milestone.id ? (
                                <ChevronUp className="w-5 h-5 text-slate-600 ml-4" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-slate-600 ml-4" />
                              )}
                            </button>
                            
                            <AnimatePresence>
                              {selectedMilestone === milestone.id && currentMilestone && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.5, ease: "easeInOut" }}
                                  className="border-t border-slate-200"
                                >
                                  <div className="p-4 bg-slate-50">
                                    {/* Milestone Images Carousel */}
                                    {currentMilestone.images.length > 0 && (
                                      <div className="mb-4">
                                        <div className="relative">
                                          <div className="flex lg:flex-row items-center lg:items-stretch gap-2">
                                            {/* Main Image Display */}
                                            <motion.div 
	                                          className="relative w-full lg:w-full h-72 lg:h-56 rounded-lg overflow-hidden bg-slate-200 border border-slate-300 cursor-grab active:cursor-grabbing"
                                              drag="x"
                                              dragElastic={0.2}
                                              dragConstraints={{ left: 0, right: 0 }}
                                              onDragEnd={(_e, info) => {
                                                const threshold = 50
                                                if (info.offset.x < -threshold) {
                                                  handleMilestoneImageNext(currentMilestone.id, currentMilestone.images.length)
                                                } else if (info.offset.x > threshold) {
                                                  handleMilestoneImagePrev(currentMilestone.id, currentMilestone.images.length)
                                                }
                                              }}
                                            >
                                              <AnimatePresence mode="wait" initial={false}>
                                                <motion.div
                                                  key={milestoneImageIndex[currentMilestone.id] || 0}
                                                  initial={{ opacity: 0, x: 40 }}
                                                  animate={{ opacity: 1, x: 0 }}
                                                  exit={{ opacity: 0, x: -40 }}
                                                  transition={{ duration: 0.35, ease: "easeInOut" }}
                                                  className="absolute inset-0"
                                                >
                                                  <Image
                                                    src={currentMilestone.images[milestoneImageIndex[currentMilestone.id] || 0]}
                                                    alt={`${currentMilestone.title} - Image ${(milestoneImageIndex[currentMilestone.id] || 0) + 1}`}
                                                    fill
                                                    className="object-cover"
                                                  />
                                                </motion.div>
                                              </AnimatePresence>
                                              
                                              {/* Navigation Buttons */}
                                              {currentMilestone.images.length > 1 && (
                                                <>
                                                  <button
                                                    onClick={() => handleMilestoneImagePrev(currentMilestone.id, currentMilestone.images.length)}
                                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                                                  >
                                                    <ChevronLeft className="w-4 h-4" />
                                                  </button>
                                                  <button
                                                    onClick={() => handleMilestoneImageNext(currentMilestone.id, currentMilestone.images.length)}
                                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                                                  >
                                                    <ChevronRight className="w-4 h-4" />
                                                  </button>
                                                </>
                                              )}
                                              
                                              {/* Image Counter */}
                                              {currentMilestone.images.length > 1 && (
                                                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                                                  {(milestoneImageIndex[currentMilestone.id] || 0) + 1} / {currentMilestone.images.length}
                                                </div>
                                              )}
                                            </motion.div>
                                            
                                            {/* Partial Next Image Preview - horizontal on mobile, vertical on desktop */}
                                            {currentMilestone.images.length > 1 && (
	                                          <div className="relative w-20 lg:w-full h-72 lg:h-56 rounded-lg overflow-hidden bg-slate-200 border border-slate-300 opacity-60">
                                                <Image
                                                  src={currentMilestone.images[((milestoneImageIndex[currentMilestone.id] || 0) + 1) % currentMilestone.images.length]}
                                                  alt="Next image preview"
                                                  fill
                                                  className="object-cover"
                                                />
                                              </div>
                                            )}
                                          </div>
                                          
                                          {/* Dot Indicators */}
                                          {currentMilestone.images.length > 1 && (
                                            <div className="flex justify-center mt-3 space-x-2">
                                              {currentMilestone.images.map((_, imgIndex) => (
                                                <button
                                                  key={imgIndex}
                                                  onClick={() => setMilestoneImageIndex(prev => ({
                                                    ...prev,
                                                    [currentMilestone.id]: imgIndex
                                                  }))}
                                                  className={`w-2 h-2 rounded-full transition-all ${
                                                    (milestoneImageIndex[currentMilestone.id] || 0) === imgIndex
                                                      ? 'bg-primary-600'
                                                      : 'bg-slate-300 hover:bg-slate-400'
                                                  }`}
                                                />
                                              ))}
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    )}
                                    
                                    {/* Milestone Achievements */}
                                    <div className="grid lg:grid-cols-2 gap-4 mb-4">
                                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                                        <h6 className="font-semibold text-slate-900 mb-3">Key Achievements</h6>
                                        <div className="space-y-2">
                                          {currentMilestone.achievements.map((achievement, achieveIndex) => (
                                            <div key={achieveIndex} className="flex items-start gap-3">
                                              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-slate-800 text-sm">{parseAchievement(achievement)}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      
                                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                                        <h6 className="font-semibold text-slate-900 mb-3">Impact Metrics</h6>
                                        <div className="grid grid-cols-2 gap-3">
                                          {Object.entries(currentMilestone.metrics).map(([key, value]) => (
                                            <div key={key} className="bg-gradient-to-br from-primary-50 to-gold-50 p-3 rounded-lg border border-primary-200">
                                              <div className="text-lg font-bold text-primary-800">{value}</div>
                                              <div className="text-xs text-slate-700">{key}</div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Impact Statement */}
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 mb-8 border border-primary-500">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-3">
                            {currentProject.id === 1 ? "Leadership Impact" : "Innovation Legacy"}
                          </h4>
                          <p className="text-primary-50 leading-relaxed">{currentProject.impact}</p>
                          {currentProject.id === 2 && (
                            <div className="mt-3 text-primary-100 text-sm">
                              <em>Building the foundation for excellence in education since 2011</em>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Tags and CTA */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex flex-wrap gap-2">
                        {currentProject.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-slate-200 text-slate-800 rounded-full text-sm border border-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href="https://www.linkedin.com/in/mosun-owo-odusi-mba-pmp-736a1419/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500 hover:bg-gold-600 text-white rounded-xl font-medium transition-colors border border-gold-400 w-fit"
                      >
                        <span>View LinkedIn Profile</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery Section */}
      <section id="projects-gallery" className="section-padding bg-slate-950 relative overflow-hidden">
        <DotPattern position="top-left" color="gold" size="sm" rows={4} cols={5} opacity={0.4} />
        <DotPattern position="bottom-right" color="blue" size="sm" rows={5} cols={4} opacity={0.35} />

        {/* Soft radial glow */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-32 right-0 w-80 h-80 bg-primary-500/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-32 left-0 w-80 h-80 bg-gold-500/20 blur-3xl rounded-full" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 lg:mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Project Gallery
            </h2>
            <p className="text-slate-200/80 max-w-2xl mx-auto text-lg">
              A visual story of agricultural transformation, skills development, and geospatial reforms across the OGSTEP portfolio.
            </p>
          </motion.div>

          {/* Before & After highlight row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 mb-8 rounded-2xl border border-slate-800/70 bg-slate-900/80 px-4 py-6 sm:px-6 sm:py-7 shadow-[0_18px_45px_rgba(15,23,42,0.85)] -mx-2 sm:mx-0"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-50 mb-1">
                  Before &amp; After: Infrastructure Transformation
                </h3>
                <p className="text-sm text-slate-300 max-w-3xl">
                  See how OGSTEP investments transformed Government Technical Colleges and key project sites from under-resourced spaces into modern, skills-ready environments.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 border border-emerald-400/40 text-emerald-200">
                  8 Technical Colleges Upgraded
                </span>
                <span className="inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 border border-sky-400/40 text-sky-200">
                  Learning Environments Modernised
                </span>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 select-none">
              {beforeAfterPairs.map((pair) => (
                <div
                  key={pair.label}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-[0_14px_36px_rgba(15,23,42,0.9)]"
                >
                  <div className="grid grid-cols-2 gap-px bg-slate-900/60">
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                      <Image
                        src={pair.before}
                        alt={`${pair.label} - before`}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] pointer-events-none select-none"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 220px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <div className="absolute left-2 top-2 rounded-full bg-red-500/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm">
                        Before
                      </div>
                      <button
                        type="button"
                        onClick={() => openZoomForSrc(pair.before)}
                        className="absolute inset-0"
                        aria-label={`${pair.label} before - view larger`}
                      >
                        <span className="sr-only">View before image</span>
                      </button>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                      <Image
                        src={pair.after}
                        alt={`${pair.label} - after`}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] pointer-events-none select-none"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 220px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <div className="absolute left-2 top-2 rounded-full bg-emerald-500/95 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm">
                        After
                      </div>
                      <button
                        type="button"
                        onClick={() => openZoomForSrc(pair.after)}
                        className="absolute inset-0"
                        aria-label={`${pair.label} after - view larger`}
                      >
                        <span className="sr-only">View after image</span>
                      </button>
                    </div>
                  </div>
                  <div className="px-3.5 py-3 border-t border-slate-800/80 bg-slate-950/80">
                    <p className="text-xs font-semibold text-slate-100 mb-1 line-clamp-2">
                      {pair.label}
                    </p>
                    <p className="text-[11px] text-slate-400 leading-snug line-clamp-3">
                      {pair.context}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Video Highlights */}
          {videoHighlights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="mb-10 rounded-2xl border border-slate-800/70 bg-slate-900/80 px-4 py-6 sm:px-6 sm:py-7 shadow-[0_18px_45px_rgba(15,23,42,0.85)] -mx-2 sm:mx-0"
            >
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-50 mb-1">
                    Video Highlights
                  </h3>
                  <p className="text-sm text-slate-300 max-w-3xl">
                    Short clips capturing speeches, interviews and recognition moments from Mosun Owo-Odusi&apos;s leadership on OGSTEP.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {videoHighlights.map((video) => (
                  <div
                    key={video.id}
                    className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-[0_16px_40px_rgba(15,23,42,0.9)]"
                  >
                    <div className="relative w-full aspect-video bg-slate-900">
                      <iframe
                        src={video.src}
                        title={video.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                      {/* Overlay small area to intercept clicks on the Drive pop-out icon */}
                      <div className="pointer-events-none absolute inset-0">
                        <div className="pointer-events-auto absolute top-0 right-0 h-8 w-10" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="px-3.5 py-3 border-t border-slate-800/80 bg-slate-950/90">
                      <p className="text-xs sm:text-sm font-semibold text-slate-50 leading-snug">
                        {video.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Masonry-style animated gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance] -mx-2 sm:mx-0">{/* masonry container */}
            {visibleGalleryImages.map((img, index) => (
              <motion.button
                key={img.src + index}
                type="button"
                onClick={() => openZoomForImage(img)}
                className="mb-4 block w-full text-left break-inside-avoid rounded-2xl overflow-hidden relative group shadow-[0_18px_45px_rgba(15,23,42,0.6)] border border-slate-800/60 bg-slate-900/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 select-none"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                whileHover={{ y: -6 }}
              >
                <div className="relative w-full overflow-hidden">
                  <div className="relative w-full h-64">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                    {/* Mobile/hover affordance: subtle "View" pill */}
                    <div
                      className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-slate-950/85 px-2.5 py-1 text-[10px] font-medium text-slate-50 shadow-sm opacity-90 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-1 sm:group-hover:translate-y-0 transition-all duration-200"
                    >
                      <ImageIcon className="h-3 w-3" />
                      <span>View photo</span>
                    </div>
                  </div>

                  {/* Label overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1">
                    <span className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-900/80 text-slate-100 border border-slate-700/80 w-fit">
                      {img.category}
                    </span>
                    <p className="text-sm text-slate-100/95 leading-snug text-left">
                      {img.caption ?? img.alt}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Gallery toggle */}
          <div className="mt-8 flex flex-col items-center gap-2">
            <p className="text-xs text-slate-400">
              Showing {visibleGalleryImages.length} of {galleryImages.length} photos
            </p>
            <button
              type="button"
              onClick={() => {
                setGalleryMode(prev => {
                  if (prev === 'preview') return 'expanded'
                  if (prev === 'expanded') return 'full'
                  return 'preview'
                })
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm hover:bg-slate-800/80 transition-colors"
           >
              {galleryMode === 'preview' && (
                <>
                  <span>See more photos</span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
              {galleryMode === 'expanded' && (
                <>
                  <span>View full gallery</span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
              {galleryMode === 'full' && (
                <>
                  <span>Show fewer photos</span>
                  <ChevronUp className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Image Zoom Lightbox */}
      <AnimatePresence>
        {isImageZoomOpen && zoomImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeZoom}
          >
            <motion.div
              className="relative max-w-5xl w-full mx-4 bg-slate-950/95 border border-slate-700/80 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.8)] overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800/80 bg-slate-900/80">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-semibold">
                    {(zoomImageIndex + 1).toString().padStart(2, "0")}
                  </span>
                  <p className="text-sm sm:text-base font-medium text-slate-100 truncate">
                    {galleryImages[zoomImageIndex].category}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleZoomReset}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-slate-200 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                    aria-label="Reset zoom"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-slate-200 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-slate-200 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={closeZoom}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-slate-300 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ml-1.5"
                    aria-label="Close image viewer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="relative flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => goToZoomImage(-1)}
                  className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 hover:bg-slate-800 border border-slate-700/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <div className="relative flex-1 w-full">
                  <motion.div
                    className="relative w-full max-h-[70vh] sm:max-h-[65vh] flex items-center justify-center overflow-hidden rounded-xl bg-slate-900/80 border border-slate-800/80"
                    drag="x"
                    dragListener={zoomLevel === 1}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_e, info) => {
                      if (zoomLevel !== 1) return
                      const threshold = 50
                      if (info.offset.x < -threshold) {
                        goToZoomImage(1)
                      } else if (info.offset.x > threshold) {
                        goToZoomImage(-1)
                      }
                    }}
                  >
                    <motion.div
                      className="relative w-full h-[55vh] sm:h-[60vh] md:h-[65vh] flex items-center justify-center cursor-grab active:cursor-grabbing"
                      style={{
                        scale: zoomLevel,
                        x: zoomPanX,
                        y: zoomPanY,
                      }}
                      drag={zoomLevel > 1}
                      dragMomentum={false}
                      dragElastic={0.18}
                      dragConstraints={{ left: -220, right: 220, top: -220, bottom: 220 }}
                    >
                      <Image
                        src={galleryImages[zoomImageIndex].src}
                        alt={galleryImages[zoomImageIndex].alt}
                        fill
                        sizes="(min-width: 1024px) 800px, 100vw"
                        className="object-contain select-none pointer-events-none"
                        priority
                      />
                    </motion.div>
                  </motion.div>
                </div>

                <button
                  type="button"
                  onClick={() => goToZoomImage(1)}
                  className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 hover:bg-slate-800 border border-slate-700/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="px-4 sm:px-6 pb-4 sm:pb-5 border-t border-slate-800/80 bg-slate-900/80">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="text-xs sm:text-sm text-slate-200/90 max-w-2xl">
                    {galleryImages[zoomImageIndex].caption ?? galleryImages[zoomImageIndex].alt}
                  </p>
                  <div className="flex items-center gap-2 justify-between sm:justify-end">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <span>
                        Image {zoomImageIndex + 1} of {galleryImages.length}
                      </span>
                      <span className="mx-1 text-slate-600">•</span>
                      <span>{Math.round(zoomLevel * 100)}% zoom</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:hidden">
                      <button
                        type="button"
                        onClick={() => goToZoomImage(-1)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 hover:bg-slate-800 border border-slate-700/80"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-3 w-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => goToZoomImage(1)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 hover:bg-slate-800 border border-slate-700/80"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action Section */}
      <section id="projects-cta" className="relative section-padding bg-gradient-to-r from-primary-600 to-primary-700 overflow-hidden">
        {/* Soft diagonal stripes behind CTA */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(15,23,42,0.18) 6%, transparent 6%, transparent 50%, rgba(15,23,42,0.18) 50%, rgba(15,23,42,0.18) 56%, transparent 56%, transparent 100%)",
            backgroundSize: '32px 32px',
          }}
        />
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your <HighlightText highlightColor="gold"><span className="text-gold-300">Next Project?</span></HighlightText>
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to create meaningful impact and drive transformational change in your organization.
            </p>
            <div className="flex flex-col items-center justify-center">
              <a
                href="/contact#message"
                className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white rounded-xl font-semibold transition-colors w-full sm:w-auto text-center"
              >
                Schedule a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Presentation Mode Modal */}
      <AnimatePresence>
        {isPresentationMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => {
              setIsPresentationMode(false)
              setCurrentSlideIndex(0)
            }}
          >
            <button
              onClick={() => {
                setIsPresentationMode(false)
                setCurrentSlideIndex(0)
              }}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              title="Close presentation"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="relative max-w-6xl w-full max-h-[90vh] lg:max-h-none">
              {/* Stacked background cards for slanted deck effect */}
              <div className="pointer-events-none absolute inset-0 translate-y-6 scale-[0.96] -rotate-3 rounded-2xl bg-slate-900/80 border border-slate-800/80 shadow-[0_40px_80px_rgba(15,23,42,0.7)]" />
              <div className="pointer-events-none absolute inset-0 translate-y-3 scale-[0.98] rotate-2 rounded-2xl bg-slate-900/90 border border-slate-700/80" />

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentSlideIndex}
                  initial={{
                    opacity: 0,
                    x: slideDirection === 1 ? 140 : -140,
                    rotateZ: slideDirection === 1 ? 6 : -6,
                    scale: 0.96
                  }}
                  animate={{ opacity: 1, x: 0, rotateZ: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    x: slideDirection === 1 ? -140 : 140,
                    rotateZ: slideDirection === 1 ? -6 : 6,
                    scale: 0.96
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_e, info) => {
                    const threshold = 60

                    if (info.offset.x < -threshold && currentSlideIndex < currentProject.milestones.length - 1) {
                      setSlideDirection(1)
                      setCurrentSlideIndex(prev => prev + 1)
                      setPresentationImageIndex(0)
                    } else if (info.offset.x > threshold && currentSlideIndex > 0) {
                      setSlideDirection(-1)
                      setCurrentSlideIndex(prev => prev - 1)
                      setPresentationImageIndex(0)
                    }
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing border border-slate-700/80"
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                >
              {currentProject.milestones[currentSlideIndex] && (
                <div className="flex flex-col lg:flex-row gap-0 h-full">
                  {/* Images Section - Horizontal grid on desktop, carousel on mobile */}
                  <div className="lg:w-1/2 relative bg-slate-800 overflow-hidden flex-shrink-0">
                    {/* Desktop: Show all 3 images in a grid */}
                    <div className="hidden lg:grid lg:grid-cols-3 gap-2 p-4 h-full">
                      {currentProject.milestones[currentSlideIndex].images.map((image, idx) => (
                        <div key={idx} className="relative rounded-lg overflow-hidden">
                          <Image
                            src={image}
                            alt={`${currentProject.milestones[currentSlideIndex].title} - Image ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    
                    {/* Mobile: Carousel with auto-sliding */}
                    <div className="lg:hidden h-48 relative">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${currentSlideIndex}-${presentationImageIndex}`}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={currentProject.milestones[currentSlideIndex].images[presentationImageIndex]}
                            alt={`${currentProject.milestones[currentSlideIndex].title} - Image ${presentationImageIndex + 1}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                          
                          {/* Image indicator dots */}
                          {currentProject.milestones[currentSlideIndex].images.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                              {currentProject.milestones[currentSlideIndex].images.map((_, dotIdx) => (
                                <div
                                  key={dotIdx}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    dotIdx === presentationImageIndex ? 'bg-white w-8' : 'bg-white/50'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center overflow-y-auto max-h-[calc(90vh-12rem)] lg:overflow-visible lg:max-h-none">
                    {/* Progress Indicator */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 mb-4"
                    >
                      {currentProject.milestones.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                            index === currentSlideIndex ? 'bg-primary-500' : 'bg-slate-700'
                          }`}
                        />
                      ))}
                    </motion.div>

                    {/* Period Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="inline-flex items-center gap-2 px-2 py-1 bg-primary-500/20 border border-primary-500/30 rounded-full text-xs font-medium text-primary-300 mb-3 w-fit"
                    >
                      <Calendar className="w-3 h-3" />
                      {currentProject.milestones[currentSlideIndex].period}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight"
                    >
                      {currentProject.milestones[currentSlideIndex].title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-sm text-slate-300 mb-4 leading-relaxed"
                    >
                      <span className="font-semibold text-primary-300">Mosun Owo-Odusi</span>{' '}
                      {currentProject.milestones[currentSlideIndex].description.toLowerCase().startsWith('provides') || 
                       currentProject.milestones[currentSlideIndex].description.toLowerCase().startsWith('led') ||
                       currentProject.milestones[currentSlideIndex].description.toLowerCase().startsWith('supervised') ||
                       currentProject.milestones[currentSlideIndex].description.toLowerCase().startsWith('coordinated') ? 
                        currentProject.milestones[currentSlideIndex].description.charAt(0).toLowerCase() + currentProject.milestones[currentSlideIndex].description.slice(1) : 
                        'led ' + currentProject.milestones[currentSlideIndex].description.charAt(0).toLowerCase() + currentProject.milestones[currentSlideIndex].description.slice(1)}
                    </motion.p>

                    {/* Key Metrics (show only 2 most important) */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="grid grid-cols-2 gap-3 mb-4"
                    >
                      {Object.entries(currentProject.milestones[currentSlideIndex].metrics).slice(0, 2).map(([key, value]) => (
                        <div
                          key={key}
                          className="bg-slate-800/50 rounded-lg p-3 border border-slate-700"
                        >
                          <div className="text-xl font-bold text-primary-400 mb-1">{value}</div>
                          <div className="text-xs text-slate-400">{key}</div>
                        </div>
                      ))}
                    </motion.div>

                    {/* Navigation Hint */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2 bg-slate-800/70 px-3 py-2 rounded-lg">
                        <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                        <span className="text-slate-300 font-medium">
                          {currentSlideIndex + 1} / {currentProject.milestones.length}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            if (currentSlideIndex > 0) {
                              setSlideDirection(-1)
                              setCurrentSlideIndex(prev => prev - 1)
                              setPresentationImageIndex(0)
                            }
                          }}
                          disabled={currentSlideIndex === 0}
                          className="bg-slate-700/80 hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          ← Previous
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            if (currentSlideIndex < currentProject.milestones.length - 1) {
                              setSlideDirection(1)
                              setCurrentSlideIndex(prev => prev + 1)
                              setPresentationImageIndex(0)
                            }
                          }}
                          disabled={currentSlideIndex === currentProject.milestones.length - 1}
                          className="bg-primary-500/80 hover:bg-primary-500 disabled:opacity-30 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          Next →
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        </motion.div>
        )}
      </AnimatePresence>
      <ScrollControls sections={["projects-hero", "projects-timeline", "projects-gallery", "projects-cta"]} />
    </div>
  )
}