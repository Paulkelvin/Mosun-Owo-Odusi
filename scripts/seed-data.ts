/* eslint-disable */
/**
 * All initial site content, lifted from the (previously hardcoded) pages.
 * Consumed by scripts/seed.ts. Icons are stored as string names that map to
 * lucide-react components on the frontend (see sanity/icons.ts).
 */

// ── Projects ────────────────────────────────────────────────────────────────
export const projectsData = [
  {
    key: 'ogstep',
    year: 2024,
    title: 'OGSTEP: Ogun State Economic Transformation Project',
    category: 'Project Coordinator',
    status: 'Ongoing',
    budget: 'World Bank Funded',
    beneficiaries: 'Ogun State',
    duration: '2020-2025',
    location: 'Ogun State, Nigeria',
    image: '/images/ogun_state_logo.png',
    description:
      'Coordinating a comprehensive World Bank-assisted economic transformation program overseeing 3 Project Managers, 15+ Specialist Consultants, and 60+ team members across Business Enabling Environment, Agricultural Value Chain, Skills Development, and Public Sector Reforms.',
    impact:
      'This World Bank-assisted project has directly benefitted over 72,000 Ogun State residents, supporting 33,075 farmers, training 39,000+ beneficiaries, issuing 15,000+ Certificates of Occupancy, and enabling offtake of 283,000+ metric tonnes of agricultural produce.',
    tags: ['World Bank', 'Economic Transformation', 'Project Coordinator', 'Public Sector Reform', 'Agricultural Development', 'Skills Development'],
    milestones: [
      {
        id: 'overall_leadership',
        title: 'Large-Scale Human Capital & Livelihood Impact',
        period: '2020 – 2025',
        description:
          'Provided overall coordination and leadership for OGSTEP, overseeing project interventions that directly benefitted over 72,000 Ogun State residents across agriculture, skills development, and institutional reforms.',
        achievements: [
          'Oversaw project interventions benefitting over 72,000 Ogun State residents - https://punchng.com/ogun-empowers-over-72000-residents-with-agric-skills/',
          'Coordinated skills development programmes that trained over 39,000 beneficiaries',
          'Led implementation of agricultural interventions supporting 33,075 farmers - https://punchng.com/ogun-empowers-over-72000-residents-with-agric-skills/#:~:text=has%20directly%20supported-,33%2C075,-farmers%20statewide%2C%20including',
          'Provided strategic leadership ensuring compliance with World Bank fiduciary, environmental, and social standards',
        ],
        metrics: { 'Total Beneficiaries': '72,000+', 'Skills Trainees': '39,000+', 'Farmers Supported': '33,075', 'Project Timeline': '2020 – 2025' },
        images: ['/images/OGSTEP_outreach.JPG', '/images/OGSTEP_Mosun_Owo-Odusi.JPG', '/images/OGSTEP_Agric2.JPG'],
      },
      {
        id: 'establishment',
        title: 'Agricultural Productivity & Value Chain Support',
        period: '2020 – 2025',
        description:
          'Led implementation of comprehensive agricultural interventions supporting 33,075 farmers across crop production, aquaculture, and poultry, with mechanisation covering over 9,000 hectares.',
        achievements: [
          'Supported 27,547 crop farmers, 4,256 aquaculture farmers, and 1,272 poultry farmers',
          'Facilitated access to critical agricultural inputs including fertilisers, agrochemicals, fish feed, and poultry feed',
          'Coordinated mechanisation support covering over 9,000 hectares of farmland',
          'Enabled structured offtake of over 283,000 metric tonnes of agricultural produce - https://guardian.ng/news/ogun-empowers-over-72000-residents-through-ogstep-projects/#:~:text=while%20the%20project%20enabled%20agribusiness%20firms%20to%20offtake%20283%2C582%20tons%20of%20produce%2C%20improving%20market%20access%20and%20value%20chain%20efficiency',
        ],
        metrics: { 'Total Farmers': '33,075', 'Crop Farmers': '27,547', 'Aquaculture Farmers': '4,256', 'Hectares Mechanised': '9,000+', 'Produce Offtake': '283,000 MT' },
        images: ['/images/Agric_OGSFAFA.JPG', '/images/Agric_OGSFAFA2.JPG', '/images/OGSTEP_Agric.JPG', '/images/OGSTEP_Agric (1).JPG'],
      },
      {
        id: 'implementation',
        title: 'Skills Development & Education Infrastructure',
        period: '2020 – 2025',
        description:
          'Supervised the rehabilitation and equipping of educational facilities while coordinating capacity-building programmes for teachers and technical instructors across Ogun State.',
        achievements: [
          'Supervised rehabilitation and equipping of 8 technical colleges - https://punchng.com/ogun-upgrades-eight-technical-colleges-to-boost-vocational-training/',
          'Led upgrade of laboratories in 22 flagship secondary schools and establishment of 3 Job Centres',
          'Coordinated capacity-building for 1,400 STEM teachers, 100 Quality Assurance Officers, and 120 Technical Instructors',
          'Coordinated skills development programmes training over 39,000 beneficiaries in employable and entrepreneurial skills',
        ],
        metrics: { 'Technical Colleges': '8 Upgraded', 'Secondary Schools': '22 Enhanced', 'STEM Teachers Trained': '1,400', 'Skills Beneficiaries': '39,000+' },
        images: ['/images/OGSTEP_skills.JPG', '/images/OGSTEP_skills1.jpeg', '/images/OGSTEP_skills2.jpeg', '/images/OGSTEP_skills3.jpeg'],
      },
      {
        id: 'sustainability',
        title: 'Land Administration & Business Enabling Environment Reforms',
        period: '2020 – 2025',
        description:
          'Provided leadership for comprehensive reforms that facilitated the issuance of over 15,000 Certificates of Occupancy and deployment of cutting-edge GIS/CORS infrastructure and high-tech survey equipment transforming geospatial capacity statewide.',
        achievements: [
          'Led reforms facilitating issuance of over 15,000 Certificates of Occupancy - https://progressivenews.ng/65000-beneficiaries-uplifted-by-oguns-economic-transformation-project-in-five-years/#:~:text=Over%2015%2C000%20Certificates%20of%20Occupancy%20have%20been%20issued%20to%20enhance%20business%20confidence.',
          'Oversaw deployment of high-tech survey equipment and GIS/CORS (Continuously Operating Reference Stations) infrastructure spanning entire state - https://punchng.com/ogun-empowers-over-72000-residents-with-agric-skills/#:~:text=Owo%2DOdusi%20said%20that%20the%20project,the%20entire%20state%2C%20transforming%20geospatial%20capacity.',
          'Coordinated implementation of modern geospatial technology unlocking land value for citizens and government, creating wealth through improved land administration',
          'Supervised rehabilitation of zonal planning offices with GIS-based land management systems',
          'Led public service reform initiatives strengthening procurement systems and monitoring frameworks',
          'Oversaw rehabilitation of State Bureau of Statistics to improve data-driven decision-making',
        ],
        metrics: { 'Certificates Issued': '15,000+', 'Land Tenure Security': 'Strengthened', 'GIS/CORS Systems': 'Statewide', 'Institutional Reforms': 'Implemented' },
        images: ['/images/OGSTEP_CORS.webp', '/images/OGSTEP_CORS2.webp', '/images/OGSTEP_CORS_indoor_unit.webp', '/images/OGSTEP_CORS_indoor_unit2.webp', '/images/OGSTEP_CORS_Training_by_sivan_design.webp', '/images/OGSTEP_surveying_equipment_training_by_Sivan_Design.webp'],
      },
    ],
  },
  {
    key: 'consults',
    year: 2018,
    title: 'Amville Consults',
    category: 'Educational Consulting & Advisory',
    status: 'Ongoing',
    budget: 'Multi-client',
    beneficiaries: 'Schools, Students, Educators',
    duration: '2018-Present',
    location: 'Lagos, Nigeria',
    image: '/images/amVille_CONSULT_logo.png',
    description:
      'A contemporary education solutions provider with an edge in delivering comprehensive school administrative frameworks and consulting services. Specializing in CSR projects, student leadership development, staff training, school re-engineering, and supplies. Successfully managed the Egbin Scholarship Program for two consecutive years (2018-2019), instituted by Egbin Power Plc in 2016 for staff and host community members.',
    impact:
      'Transformed educational institutions through strategic consulting, enabled access to quality education via scholarship facilitation, enhanced educator capacity through professional development programs, and delivered impactful CSR initiatives benefiting students and communities.',
    tags: ['Consulting', 'CSR Projects', 'Scholarship Management', 'Staff Training', 'School Re-engineering'],
    milestones: [
      {
        id: 'egbin_scholarship',
        title: 'Egbin Scholarship Program Management',
        period: '2018-2019',
        description:
          'Successfully managed the Egbin Scholarship Program for two consecutive years on behalf of Egbin Power Plc. The program was instituted in 2016 to award scholarships to staff and host community members, promoting educational access and corporate social responsibility.',
        achievements: [
          'Managed scholarship program for two consecutive years (2018-2019)',
          'Facilitated scholarship awards for Egbin Power Plc staff and host community members',
          'Ensured transparent selection and distribution processes',
          'Strengthened corporate-community relations through educational support',
        ],
        metrics: { 'Program Duration': '2 Years', Client: 'Egbin Power Plc', Beneficiaries: 'Staff & Community' },
        images: [],
      },
      {
        id: 'staff_training',
        title: 'Staff Training & Professional Development',
        period: '2018-Present',
        description:
          'Delivering targeted staff training programs to enhance teaching quality, leadership capacity, and institutional effectiveness across educational institutions.',
        achievements: [
          'Designed and delivered customized staff training programs',
          'Enhanced teaching methodologies and classroom management skills',
          'Built capacity in educational leadership and administration',
          'Strengthened institutional performance through professional development',
        ],
        metrics: { 'Training Programs': 'Multiple', 'Educators Trained': 'Hundreds', 'Institutions Served': 'Multiple' },
        images: [],
      },
      {
        id: 'school_reengineering',
        title: 'School Re-engineering & CSR Projects',
        period: '2018-Present',
        description:
          'Leading comprehensive school re-engineering initiatives and CSR projects that transform educational institutions through strategic interventions, student leadership camps, and supply of essential educational resources.',
        achievements: [
          'Executed school re-engineering projects for institutional transformation',
          'Organized and facilitated student leadership development camps',
          'Delivered CSR projects supporting educational advancement',
          'Provided essential supplies and resources to schools',
        ],
        metrics: { 'CSR Projects': 'Multiple', 'Leadership Camps': 'Multiple', 'Schools Transformed': 'Multiple' },
        images: [],
      },
    ],
  },
  {
    key: 'school',
    year: 2011,
    title: 'Amville School',
    category: 'Educational Leadership & Innovation',
    status: 'Ongoing',
    budget: 'Multi-client',
    beneficiaries: 'Students & Educators',
    duration: '2011-Present',
    location: 'Lagos, Nigeria',
    image: '/images/amVille_SCHOOL_logo.png',
    description:
      'Leading comprehensive educational consulting and program development through Amville School and Amville Consults, delivering innovative learning solutions, institutional audits, and transformative educational experiences across multiple educational institutions.',
    impact:
      'Transformed educational experiences for thousands of students while strengthening institutional capacity through innovative literacy programs, e-learning initiatives, staff development, and comprehensive school audits.',
    tags: ['Educational Consulting', 'E-Learning', 'Literacy Programs', 'Institutional Development', 'Staff Training'],
    milestones: [
      {
        id: 'literacy_innovation',
        title: 'Book Lovers Literacy Program',
        period: '2013-Present',
        description: 'Developed and implemented innovative literacy program integrating reading, writing, art and technology to enhance critical reading and writing skills.',
        achievements: ['Created comprehensive literacy curriculum', 'Integrated technology with traditional learning', 'Developed web-based review publication platform', 'Established age-appropriate learning categories'],
        metrics: { 'Age Categories': '4', 'Skills Developed': 'Multiple', 'Technology Integration': 'Advanced', 'Student Engagement': 'High' },
        images: [],
      },
      {
        id: 'elearning_blended',
        title: 'E-Learning & Blended Learning',
        period: '2014-Present',
        description: 'Pioneered comprehensive e-learning and blended learning initiatives, revolutionizing educational delivery methods.',
        achievements: ['Developed blended learning frameworks', 'Implemented digital learning platforms', 'Created innovative teaching methodologies', 'Enhanced educational accessibility'],
        metrics: { 'Learning Platforms': 'Multiple', 'Teaching Methods': 'Innovative', 'Student Reach': 'Extensive', 'Learning Outcomes': 'Enhanced' },
        images: [],
      },
      {
        id: 'institutional_development',
        title: 'Institutional Audits & Development',
        period: '2012-Present',
        description: 'Conducted comprehensive institutional audits and transformation programs for prestigious educational institutions.',
        achievements: ['Methodist Girls High School turnaround audit', 'Igbobi College staff audit and development', 'Chrisland College IGCSE training program', 'Multi-institutional capacity building'],
        metrics: { 'Institutions Served': 'Multiple', 'Staff Trained': 'Hundreds', 'Audit Areas': 'Comprehensive', 'Improvement Rate': 'Significant' },
        images: [],
      },
      {
        id: 'community_impact',
        title: 'Community Engagement & Social Impact',
        period: '2011-Present',
        description: "Leading community-focused initiatives including charity programs and inter-school competitions that build character and social responsibility.",
        achievements: ["Annual 'Amville Goes Red' charity initiative", 'Inter-school spelling bee competitions', 'Community outreach programs', 'Character development through service'],
        metrics: { 'Charity Beneficiaries': 'Multiple Homes', 'Annual Events': 'Consistent', 'Community Partners': 'Diverse', 'Student Participation': '100%' },
        images: [],
      },
    ],
  },
]

// ── Media: image file lists (mirrors components/MediaArchive.tsx) ────────────
const amvilleSchoolImageFiles = [
  '32191531_1010647379101058_8761177463532290048_n.jpg', '32207341_1010647345767728_532342968497995776_n.jpg', '492395805_3131546687011106_3819763382899474398_n.jpg', '492513519_3133084366857338_7106916571808794356_n.jpg', '492665641_3133084323524009_1421421123952328601_n.jpg', '493274069_3129988460500262_7435562253635418984_n.jpg', '493464755_3126501487515626_2666500780543568394_n.jpg', '494042548_3131367793695662_3861622649842334219_n.jpg', '494065573_3131546703677771_3882267901815472522_n.jpg', '494149103_3133082936857481_4677482530327605050_n.jpg', '494151786_3131546507011124_7424147878127108594_n.jpg', '494153182_3133084186857356_5563635929799904145_n.jpg', '494198837_3133734243459017_2743691675309893103_n.jpg', '494203869_3133084356857339_5694652705001493492_n.jpg', '494351832_3135118066653968_2498478728279829794_n.jpg', '494486803_3133082943524147_5868692918113333919_n.jpg', '494718595_3133734376792337_7672212559214372656_n.jpg', '494718626_3133084363524005_3056439979516402545_n.jpg', '494757206_3133734223459019_5649304177932934833_n.jpg', '494927901_3133082890190819_8683606523473826316_n.jpg', '495345181_3142609959238112_1021782434635614634_n.jpg', '495467024_3142876449211463_3207262548734877107_n.jpg', '495560006_3143204062512035_8647700429587335525_n.jpg', '495605240_3142876469211461_3819089734391182584_n.jpg', '495929228_3143204072512034_4082905641541503189_n.jpg', '496004702_3143204112512030_8916848118325411841_n.jpg', '496039857_3142871889211919_2016862950273819946_n.jpg', '496093308_3146150692217372_855948467040405015_n.jpg', '496094370_3146150728884035_5640144519273671681_n.jpg', '496302717_3142871955878579_7436781047252273618_n.jpg', '496431027_3142872209211887_8381447793832270055_n.jpg', '496768458_3142872139211894_8981526268468525852_n.jpg', '496846026_3143204475845327_181464409054056447_n.jpg', '496861406_3146150808884027_6318276303912791107_n.jpg', '497733032_3150207031811738_816517799275278899_n.jpg', '497786046_3146150718884036_7528200555851012017_n.jpg', '497922003_3150207035145071_9167000127100969446_n (1).jpg', '497922003_3150207035145071_9167000127100969446_n.jpg', '498637218_3149477605218014_2378160504742126547_n.jpg', '501309677_3160904207408687_3437259377520491577_n.jpg', '506629156_3182339745265133_6156151194386877499_n.jpg', '88316779_1544154315750359_6180190968071847936_n.jpg', 'Amville School Children @ the Little Saints Orphanage.jpg', 'Teachers day.jpg',
]
const fieldImageFiles = ['IMG_0807.jpg', 'IMG_0808.jpg', 'IMG_0815.jpg', 'IMG_0816.jpg', 'IMG_0817.jpg', 'IMG_0818.jpg', 'IMG_0819.jpg', 'IMG_0820.jpg', 'IMG_0821.jpg', 'IMG_0822.jpg', 'IMG_0823.jpg', 'IMG_0824.jpg', 'IMG_0827.jpg', 'IMG_0828.jpg', 'IMG_0829.jpg', 'IMG_0830.jpg', 'IMG_0831.jpg', 'IMG_0833.jpg', 'IMG_0834.jpg', 'IMG_0835.jpg', 'IMG_0836.jpg', 'IMG_0837.jpg']
const consultImageFiles = ['09cb198b-093a-4ba4-b305-3a207acadac7.JPG', '348e8c2b-ac52-4da6-a9f4-443e96904519.JPG', '4df97697-2737-4a5d-b94a-f787c4b0a95d.JPG', '8f8f2a42-c972-4edc-9059-60e977b56dc9.JPG', '940d84d9-2c69-4eea-813a-b8a3535c9427.JPG', 'a872e439-a81b-4278-b440-d838586c96e3.JPG', 'b29b85aa-3f83-4920-b2a6-a1a26f8c6a95.JPG', 'c8c45d4b-c691-40ec-ab3e-6e9096ec3ae2.JPG', 'cafe7245-01e4-4457-89c0-45bc110d3ca6.JPG', 'dc97410a-cb60-4730-af7c-70bb963be437.JPG', 'f50119ae-fcf2-42f8-aac6-7fba05f225bf.JPG', 'f82400ed-90fc-4e4c-94b6-cc996c58d63e.JPG']
const ogstepEventImageFiles = ['0956e04b-e60d-49b9-b72d-2a254bb10722.JPG', '1315abb9-97f0-46a7-9322-33e88663a8f0.JPG', '1792e7e0-5eab-4189-b006-1df3b1fb232d.JPG', '25015216-2676-47e6-b0ff-2845bf40028e.JPG', '27e278a4-e262-41b0-afd5-8f2be6a12370.JPG', '29e6fbc7-9881-4dc8-a4f2-9370b3c7cef4.JPG', '2aec393f-16ac-4e65-8217-65515825ef25.JPG', '30717265-29c2-4157-a5c0-ae59e91e17f0.JPG', '3601da8c-a1a7-44d9-b620-e74c2f80108c.JPG', '3bc989a3-7e9f-44c8-af50-1d41cf9d34d9.JPG', '3ce4de8d-ec9f-4f56-99ed-75b2713d51a2.JPG', '3dbd7d0b-bdf9-4136-b89e-ddb23f02b177.JPG', '44e3417e-d5df-48b6-8fe7-6baed45e18e7.JPG', '47a14ef0-4c51-429a-95ba-4aca5144bb8a.JPG', '57c9b7ca-a195-4254-b002-8f725f84e584.JPG', '59a44d27-fdb7-42fe-b17f-fe3605db0db9.JPG', '5de9192a-73ef-4bc4-9287-528185bc5782.JPG', '66d8a7df-6a1d-4382-88ce-bf1ad077a6a5.JPG', '6706457d-b70a-4b2c-a2c6-2076331de8a9.JPG', '7532b935-a3ba-4d3c-8022-bc8a22b95497.JPG', '7d60aa60-dd95-41fd-9b28-f8295819de47.JPG', '7da375b9-fe7e-4d48-923b-00fca648dc3b.JPG', '88e38234-b5e5-4eb8-888a-24c017d1abf8.JPG', '8e2d6fdb-0e93-43c9-b449-7367dbc220d8.JPG', '8e9c0a33-3565-4248-a0b5-1cf2e38a6b9e.JPG', '93a7fde9-6639-40ea-a2cc-d38eb54ba557.JPG', '9fa2038e-f805-4a2a-b926-424fca82798f.JPG', 'a2440e34-1728-4f46-990b-d56bdfba321d.JPG', 'a6e51757-0606-430a-bb8c-a869e32e6589.JPG', 'a87bc1d0-b535-4f26-a459-43e73d4a332e.JPG', 'afa9f1a1-cf0b-498d-8972-94a5ad5aa454.JPG', 'b85bd20b-859e-42d2-afc5-37e69b8e561e.JPG', 'bbdcba44-13bb-481c-9213-6fd8edf18d64.JPG', 'beb78329-438c-4d78-877d-05fa43a7d1bf.JPG', 'c0620db6-8de3-4f39-8244-7f9cc8253593.JPG', 'c5b1aefc-a5d4-4e30-a4a4-c309f8e6950c.JPG', 'c7ee7e11-981e-42ec-8398-8abb652ef541.JPG', 'daaffcac-7865-454d-86be-9c42e24b3ee6.JPG', 'e9995bf3-a51e-42ca-ab94-27d269f6cd53.JPG', 'f668723e-ad12-454f-a5f6-130bd1d27e91.JPG', 'f68797fd-9f25-4cff-82e0-7329891902f1.JPG', 'f7c1355f-567c-40f0-a6e8-206209291b31.JPG', 'ffa0d57f-9613-4abe-9943-988b8dad5a03.JPG']

export const galleryImagesData: { src: string; alt: string; category: string; project: 'ogstep' | 'consults' | 'school'; caption?: string }[] = [
  { src: '/images/OGSTEP_outreach.JPG', alt: 'OGSTEP outreach session with community members', category: 'Leadership & Outreach', project: 'ogstep' },
  { src: '/images/OGSTEP_Mosun_Owo-Odusi.JPG', alt: 'Mosun Owo-Odusi speaking during OGSTEP session', category: 'Leadership & Outreach', project: 'ogstep' },
  { src: '/images/Mosun Owo-Odusi.jpg', alt: 'Professional portrait of Mosun Owo-Odusi', category: 'Leadership & Outreach', project: 'ogstep' },
  { src: '/images/Mosun Owo-Odusi.png', alt: 'Alternate portrait of Mosun Owo-Odusi', category: 'Leadership & Outreach', project: 'ogstep' },
  { src: '/images/Mosun Owo-Odusi-OGSTEP_project_coordinator.jpg', alt: 'Mosun Owo-Odusi as OGSTEP Project Coordinator', category: 'Leadership & Outreach', project: 'ogstep' },
  { src: '/images/OGSTEP_Agric2.JPG', alt: 'OGSTEP field engagement with farmers', category: 'Leadership & Outreach', project: 'ogstep' },
  ...ogstepEventImageFiles.map((fileName, index) => ({ src: `/images/ogstep-events/${fileName}`, alt: `OGSTEP programme highlight ${index + 1}`, category: 'OGSTEP Programme Highlights', project: 'ogstep' as const })),
  { src: '/images/Agric_OGSFAFA.JPG', alt: 'Farmers participating in OGSTEP agricultural programme', category: 'Agriculture & Value Chains', project: 'ogstep' },
  { src: '/images/Agric_OGSFAFA2.JPG', alt: 'OGSTEP-supported agricultural activities in Ogun State', category: 'Agriculture & Value Chains', project: 'ogstep' },
  { src: '/images/OGSTEP_Agric.JPG', alt: 'OGSTEP agricultural training and demonstration', category: 'Agriculture & Value Chains', project: 'ogstep' },
  { src: '/images/OGSTEP_Agric (1).JPG', alt: 'Featured OGSTEP agricultural field visit', category: 'Agriculture & Value Chains', project: 'ogstep' },
  { src: '/images/OGSTEP_skills.JPG', alt: 'Skills development session under OGSTEP', category: 'Skills & Education', project: 'ogstep' },
  { src: '/images/OGSTEP_skills1.jpeg', alt: 'Participants at OGSTEP skills training', category: 'Skills & Education', project: 'ogstep' },
  { src: '/images/OGSTEP_skills2.jpeg', alt: 'Hands-on technical training session', category: 'Skills & Education', project: 'ogstep' },
  { src: '/images/OGSTEP_skills3.jpeg', alt: 'Group photo from OGSTEP skills programme', category: 'Skills & Education', project: 'ogstep' },
  { src: '/images/Government_Technical_College_Before_Rehabilitation.png', alt: 'Government Technical College buildings before rehabilitation under OGSTEP', category: 'Before & After: Technical Colleges', project: 'ogstep' },
  { src: '/images/Government_Technical_College_After_Rehabilitation.png', alt: 'Government Technical College buildings after rehabilitation under OGSTEP', category: 'Before & After: Technical Colleges', project: 'ogstep' },
  { src: '/images/Before1.png', alt: 'Project site condition before intervention 1', category: 'Before & After: Project Sites', project: 'ogstep' },
  { src: '/images/After1.png', alt: 'Project site condition after intervention 1', category: 'Before & After: Project Sites', project: 'ogstep' },
  { src: '/images/Before2.png', alt: 'Project site condition before intervention 2', category: 'Before & After: Project Sites', project: 'ogstep' },
  { src: '/images/After2.png', alt: 'Project site condition after intervention 2', category: 'Before & After: Project Sites', project: 'ogstep' },
  { src: '/images/Before3.png', alt: 'Project site condition before intervention 3', category: 'Before & After: Project Sites', project: 'ogstep' },
  { src: '/images/After3.png', alt: 'Project site condition after intervention 3', category: 'Before & After: Project Sites', project: 'ogstep' },
  { src: '/images/Before4.png', alt: 'Project site condition before intervention 4', category: 'Before & After: Project Sites', project: 'ogstep' },
  { src: '/images/After4.png', alt: 'Project site condition after intervention 4', category: 'Before & After: Project Sites', project: 'ogstep' },
  { src: '/images/OGSTEP_CORS.webp', alt: 'OGSTEP CORS geospatial infrastructure mast', category: 'Land Administration & GIS', project: 'ogstep' },
  { src: '/images/OGSTEP_CORS2.webp', alt: 'CORS station equipment installed outdoors', category: 'Land Administration & GIS', project: 'ogstep' },
  { src: '/images/OGSTEP_CORS_indoor_unit.webp', alt: 'Indoor CORS control unit rack', category: 'Land Administration & GIS', project: 'ogstep' },
  { src: '/images/OGSTEP_CORS_indoor_unit2.webp', alt: 'Detail view of CORS indoor equipment', category: 'Land Administration & GIS', project: 'ogstep' },
  { src: '/images/OGSTEP_CORS_Training_by_sivan_design.webp', alt: 'Training on geospatial systems by technical partners', category: 'Land Administration & GIS', project: 'ogstep' },
  { src: '/images/OGSTEP_surveying_equipment_training_by_Sivan_Design.webp', alt: 'Surveying equipment demonstration during OGSTEP training', category: 'Land Administration & GIS', project: 'ogstep' },
  ...fieldImageFiles.map((fileName, index) => ({ src: `/images/gallery/${fileName}`, alt: `OGSTEP field highlight ${index + 1}`, category: 'Field Highlights', project: 'ogstep' as const })),
  ...consultImageFiles.map((fileName, index) => ({ src: `/images/amville-consults/${fileName}`, alt: `Amville Consults highlight ${index + 1}`, category: index === 4 ? 'Student Leadership' : index === 5 ? 'School Re-engineering' : index === 8 ? 'Scholarships & Awards' : 'Consulting & Training', project: 'consults' as const })),
  ...amvilleSchoolImageFiles.map((fileName, index) => ({ src: `/images/amville-school/${fileName}`, alt: `Amville School highlight ${index + 1}`, category: 'Amville School Highlights', project: 'school' as const })),
]

export const beforeAfterPairsData = [
  { label: 'Government Technical College Rehabilitation', context: 'One of eight Government Technical Colleges upgraded under OGSTEP to modern, skills-focused learning environments.', before: '/images/Government_Technical_College_Before_Rehabilitation.png', after: '/images/Government_Technical_College_After_Rehabilitation.png' },
  { label: 'Project Site Transformation 1', context: 'Illustrative transformation of learning and community environments before and after OGSTEP and related interventions.', before: '/images/Before1.png', after: '/images/After1.png' },
  { label: 'Project Site Transformation 2', context: 'Improved infrastructure and usability following targeted investment and rehabilitation.', before: '/images/Before2.png', after: '/images/After2.png' },
  { label: 'Project Site Transformation 3', context: 'Upgraded facilities supporting safer, more effective learning and workspaces.', before: '/images/Before3.png', after: '/images/After3.png' },
  { label: 'Project Site Transformation 4', context: 'Visible upgrade from informal settings to more structured, well-equipped environments.', before: '/images/Before4.png', after: '/images/After4.png' },
]

export const videoHighlightsData = [
  { id: 'ogstep-coordinator-perspective', title: "On Leading OGSTEP: A Programme Coordinator's Perspective", src: 'https://drive.google.com/file/d/1CSaJFb2_hy-2sFYLB8U1bowPxeyAmp_B/preview', kind: 'iframe', project: 'ogstep', series: 'OGSTEP Project' },
  { id: 'ogstep-documentary-achievements', title: 'OGSTEP Documentary: Achievements Overview', src: 'https://drive.google.com/file/d/1EwkTDB1JdZlX7mNIeR2w-bazeYMMAJ3W/preview', kind: 'iframe', project: 'ogstep', series: 'General Highlights' },
  { id: 'amville-school-video-1', title: 'Amville School Video Highlight 1', src: '/images/amville-school/AQNzwG2CsMq3htCToofp3Br6ramI6LAbgKpWRyG0kCKczhfSUMGN2J4Wteu9XniZt3pqxNMf-MXVP-_BsQhMi6uC.mp4', kind: 'mp4', project: 'school', series: 'Amville School Highlights' },
  { id: 'amville-school-video-2', title: 'Amville School Video Highlight 2', src: '/images/amville-school/AQOfeAmIX2zzNCYS7t1NjWWSH7B3g1E1XwLAAsd70arW4mEim3veHoCnUO_akGz6htUXj10WYWcKQLZRIuVyMuM.mp4', kind: 'mp4', project: 'school', series: 'Amville School Highlights' },
  { id: 'bee-sango', title: 'BEE Sango', src: 'https://drive.google.com/file/d/1KboTbHPEiWTpKNoEn_z-stQUY5gf2VvF/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 1' },
  { id: 'cassava-processing-center-ipokia', title: 'Cassava Processing Center Ipokia', src: 'https://drive.google.com/file/d/1Dz-20puxaCohKK_mjes6EaYNp2t3SJf_/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 1' },
  { id: 'ijebu-ode-zonal-planning-office-rehabilitation', title: 'Ijebu Ode Zonal Planning Office Rehabilitation', src: 'https://drive.google.com/file/d/1dY5_TOxX13U_iRkg-QL5iwY4fg3CVG8x/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 1' },
  { id: 'ota-aquaculture-intervention', title: 'Ota Aquaculture Intervention', src: 'https://drive.google.com/file/d/11HppPWfY1u8pua8nhDiShRNNKuPkaui0/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 1' },
  { id: 'remo-high-school-rehabilitation', title: 'Remo High School Rehabilitation', src: 'https://drive.google.com/file/d/1zSubLFaNkZguQ-e8DMS4cjOpCYU_W-El/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 1' },
  { id: 'agriculture-mechanization-intervention', title: 'Agriculture Mechanization Intervention', src: 'https://drive.google.com/file/d/1JcU_W2NbczX_EuhKR3d37z7FaAItsYjj/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 1' },
  { id: 'yewa-egbado-college-rehabilitation', title: 'Yewa Egbado College Rehabilitation', src: 'https://drive.google.com/file/d/1mvnSraO-8X7ZRCfuOUISrsYaGaOIB00L/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 1' },
  { id: 'ministry-of-education-research-and-statistics-rehabilitation', title: 'Ministry of Education Research and Statistics Rehabilitation', src: 'https://drive.google.com/file/d/1JKKpe76s303DzItk4gEwObQ0iA0Tc48T/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 2' },
  { id: 'owowo-farm-settlement-agricultural-intervention', title: 'Owowo Farm Settlement Agricultural Intervention', src: 'https://drive.google.com/file/d/1QHB4p7QtA0mM5sQi9tBvrY_hK2ttIABz/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 2' },
  { id: 'nawairuddeen-grammar-school-rehabilitation', title: 'Nawairuddeen Grammar School Rehabilitation', src: 'https://drive.google.com/file/d/19k_eCiQ0AjsHleiegOy6VMAiWjBCnxnE/preview', kind: 'iframe', project: 'ogstep', series: 'Documentary Series 3' },
]

export const mediaTabDescriptions = {
  all: 'Visual highlights across OGSTEP, Amville Consults, and Amville School.',
  ogstep: 'A visual story of agricultural transformation, skills development, and geospatial reforms across the OGSTEP portfolio.',
  consults: 'Educational consulting, CSR projects, and capacity-building initiatives through Amville Consults.',
  school: 'Educational programmes and community moments from Amville School.',
}

// ── About: career, education, certs, memberships ─────────────────────────────
export const careerPositionsData = [
  { title: 'State Project Coordinator', organization: 'Ogun State Economic Transformation Project (World Bank Sponsored)', period: 'May 2022 - Present', location: 'Abeokuta, Ogun State, Nigeria', type: 'Full-time', icon: 'target', highlights: ["Led a multi-sectoral team of 18 consultants and specialists to deliver OGSTEP’s Project Development Objectives and Disbursement Linked Results (DLRs).", 'Coordinated annual budgeting and financial management for an over $250M World Bank portfolio, ensuring fiduciary compliance and timely external audits.', 'Facilitated high-level policy dialogues and six Implementation Support Missions (ISMs) with the World Bank Task Team, driving sector reforms and capacity building across implementing agencies.', 'Oversaw sectoral reform implementation across education, skills development and economic transformation, tracking results against the Project Appraisal Document (PAD).', 'Implemented robust stakeholder management and communication strategies, aligning ministries, agencies and the Project Home Ministry.'], skills: ['Organizational Leadership', 'Program Development', 'Project Coordination'] },
  { title: 'Acting Project Coordinator', organization: 'Ogun State Economic Transformation Project (World Bank Sponsored)', period: 'Nov 2021 - May 2022', location: 'Abeokuta, Ogun State, Nigeria', type: 'Full-time', icon: 'target', highlights: ['Implemented effective stakeholder management strategies', 'Applied hybrid Adaptive and Agile Project management methods', 'Led team through first year Independent Verification Assessment (IVA)', 'Facilitated and organized the second Technical Mission'], skills: ['Organizational Leadership', 'Project Coordination'] },
  { title: 'Project Manager (Skills Development)', organization: 'Ogun State Economic Transformation Project (World Bank Sponsored)', period: 'May 2021 - Sep 2022', location: 'Abeokuta, Ogun State, Nigeria', type: 'Full-time', icon: 'target', highlights: ['Coordinated monitoring and evaluation of technical reforms in education, skills development and human capital, in line with the Project Appraisal Document (PAD).', 'Managed the critical results-based financing link between sector performance and achievement of Disbursement Linked Results (DLRs), enabling release of funding tranches.', 'Facilitated targeted capacity-building workshops for civil servants and stakeholders on new education policies, data systems and institutional strengthening.', 'Worked with the State Ministry of Education and implementing agencies to promote evidence-based decision-making and data-driven policy dialogue.'], skills: ['Organizational Leadership', 'Program Development', 'Project Coordination', 'Management Consulting'] },
  { title: 'Skills Development Specialist Consultant', organization: 'Ogun State Economic Transformation Project (World Bank Sponsored)', period: 'Aug 2020 - Apr 2021', location: 'Abeokuta, Ogun State, Nigeria', type: 'Contract', icon: 'users', highlights: ['Developed implementation plan for PMI-PSI approach using interactive digital technology', 'Facilitated development of STEM subject standardized packages', 'Recommended improvements for quality and relevance of STEM content', 'Built capacity of STEM educators in the state'], skills: ['Educational Leadership', 'Project Management', 'Consulting', 'Educational Technology'] },
  { title: 'Principal Consultant', organization: 'Amville Consults', period: 'Jun 2006 - Present', location: 'Lagos, Lagos State, Nigeria', type: 'Full-time · Hybrid', icon: 'users', highlights: ['Assist educational institutions with turnaround through institutional reviews', 'Coordinate training workshops for teachers and school leaders', 'Facilitated re-engineering of educational institutions for optimal growth', 'Oversee scholarship award processes for indigent students'], skills: ['Curriculum Development', 'Educational Leadership', 'Consulting', 'Business Development'] },
  { title: 'Founder/Executive Director', organization: 'Amville School', period: 'Sep 2006 - Dec 2020', location: 'Lagos, Lagos State, Nigeria', type: 'Full-time', icon: 'building', highlights: ['Co-founded the school with other visionaries', 'Grew the school from 5 students to 190 students', 'Managed annual turnover of ₦300M', 'Introduced ICT Virtual Learning Environment (VLE)'], skills: ['Entrepreneurship', 'Organizational Development', 'Educational Leadership', 'Technology Integration'] },
  { title: 'Director of Studies', organization: 'Lekki British School', period: 'Sep 2013 - Dec 2014', location: 'Lagos, Lagos State, Nigeria', type: 'Full-time', icon: 'building', highlights: ['Consultancy services for school management revamping', 'Provided audit of organizational processes', 'Recruited and trained new administrators', 'Implemented ICT Virtual Learning Environment (VLE)'], skills: ['Organizational Leadership', 'Educational Leadership', 'Technology Integration'] },
  { title: 'Principal', organization: 'Corona Secondary School', period: 'Aug 2003 - Aug 2006', location: 'Agbara, Ogun State, Nigeria', type: 'Full-time', icon: 'building', highlights: ['Introduced and implemented one of the first e-learning secondary schools in Nigeria, integrating ICT into teaching and learning.', 'Led a team of over 50 staff and 500 students, driving continuous capacity development and performance improvement.', 'Supported the development of a campus expansion and rehabilitation blueprint and oversaw phased implementation.', 'Led rebranding and stakeholder engagement initiatives that improved academic outcomes, college acceptance rates and new enrolments.'], skills: ['Organizational Leadership', 'Educational Leadership', 'Educational Technology'] },
  { title: 'Lead Realtor / Founder', organization: 'Divilux Realty Limited', period: 'Jul 2015 - Present', location: 'Ilupeju, Lagos, Nigeria', type: 'Founder / Lead Realtor', icon: 'building', highlights: ['Provide market analysis, coordinate property showings and facilitate closing processes across residential and commercial real estate.', 'Support developers in conceptualising projects, optimising space utilisation and positioning assets for investment.', 'Oversee property sales, management, janitorial and facility management services for a diverse client base.'], skills: ['Real Estate Advisory', 'Client Relationship Management', 'Property Management'] },
  { title: 'Deputy Head Teacher (Secondary) & Design and Technology Teacher', organization: 'Grange School', period: 'Sep 2002 - Aug 2003', location: 'Ikeja, Lagos State, Nigeria', type: 'Full-time', icon: 'graduationCap', highlights: ['Designed and introduced Design and Technology subjects into the curriculum.', 'Monitored lesson delivery, mentored teachers and contributed to recruitment processes.', 'Facilitated student leadership and capacity-building programmes for staff and learners.'], skills: ['Educational Leadership', 'Curriculum Design', 'Teacher Development'] },
]

export const educationData = [
  { degree: 'Master of Business Administration (MBA)', school: 'Rome Business School, Italy', period: '2024 – 2025', logo: '/images/logos/rome_business_school_logo.png', skills: ['Business Administration', 'Management'] },
  { degree: 'M.Ed. Adult Education Management', school: 'University of Lagos, Akoka', period: '2018 – 2019 · Distinction', logo: '/images/logos/unilag_logo.png', skills: ['Adult Education'] },
  { degree: 'Post Graduate Diploma in Education (PGDE)', school: 'University of Lagos', period: '1998', logo: '/images/logos/unilag_logo.png', skills: [] },
  { degree: 'B.Sc. Food Science and Technology', school: 'Obafemi Awolowo University, Ile-Ife', period: '1984 – 1990', logo: '/images/logos/obafemi_awolowo_university_logo.png', skills: [] },
  { degree: 'West African School Leaving Certificate', school: 'St. Louis Grammar School, Ibadan', period: '1984', logo: undefined as string | undefined, skills: [] },
]

export const certificationsData = [
  { title: 'Project Management Professional (PMP)®', issuer: 'Project Management Institute', year: 'Issued Feb 2025 • Expires Feb 2028', logo: '/images/logos/project_management_institute_logo.png', skills: ['Project Management'] },
  { title: 'Business Development Services Professional Certificate', issuer: 'Enterprise Development Centre, Pan-Atlantic University', year: '2020', logo: '/images/logos/lagos_business_school_logo.png', skills: [] },
  { title: 'Certificate of Accreditation – Management Trainer', issuer: 'Centre for Management Development, Lagos', year: '2017', logo: undefined as string | undefined, skills: [] },
  { title: 'Certificate in Entrepreneurship Management (CEM)', issuer: 'Enterprise Development Centre, Pan-Atlantic University', year: '2009', logo: '/images/logos/lagos_business_school_logo.png', skills: [] },
  { title: 'Certificate in Course-based Assessment (Food Science)', issuer: 'Cambridge International Examinations (CIE)', year: '2003', logo: undefined as string | undefined, skills: [] },
  { title: 'Diploma, Data Processing', issuer: 'Microchips Computer Ltd', year: '1992', logo: undefined as string | undefined, skills: [] },
]

export const membershipsData = [
  { title: 'Associate Member', issuer: 'Women in Management, Business and Public Service (WIMBIZ)', date: 'Professional membership', logo: undefined as string | undefined, skills: ['Women in Leadership', 'Mentoring'] },
  { title: 'Member', issuer: 'Project Management Institute (PMI)', date: 'Professional membership', logo: '/images/logos/project_management_institute_logo.png', skills: ['Project Management', 'Program Development'] },
  { title: 'Member', issuer: 'Institute of Strategic Management Nigeria (Chartered)', date: 'Professional membership', logo: undefined as string | undefined, skills: ['Strategic Management', 'Consulting', 'MSN'] },
  { title: 'Life Member, Enterprise Development Centre', issuer: 'Enterprise Development Centre, Pan-Atlantic University', date: 'Professional membership', logo: '/images/logos/lagos_business_school_logo.png', skills: ['Entrepreneurship', 'EDC', 'NNEW', 'APEN', 'GYLC Educator'] },
]

// ── Home: expertise, impact metrics, organizations ───────────────────────────
export const expertiseAreasData = [
  { key: 'project-management', title: 'Project Management', icon: 'barChart', description: 'Specializing in coordination, strategic planning, and delivering measurable outcomes that drive organizational success.', details: ['Cross-functional team leadership with precision and accountability', 'Strategic project planning and execution frameworks', 'Risk management and quality assurance protocols', 'Stakeholder engagement and communication strategies'] },
  { key: 'education-consulting', title: 'Educational Consulting & Entrepreneurship', icon: 'graduationCap', description: 'Driving educational transformation and entrepreneurial ventures through policy reform, capacity building, school leadership, and innovative business models.', details: ['Educational policy development and implementation', 'Institutional capacity building and training programs', 'Entrepreneurial school leadership and management', 'Learning outcome assessment and improvement strategies', 'Stakeholder engagement in educational transformation', 'Business model innovation in education'] },
  { key: 'real-estate', title: 'Real Estate Advisory', icon: 'building', description: 'Providing data-driven insights for market intelligence and sustainable investment strategies.', details: ['Market analysis and investment opportunity identification', 'Risk assessment and portfolio optimization', 'Sustainable development and ESG considerations', 'Client advisory for strategic real estate decisions'] },
]

export const headlineMetricsData = [
  { title: 'World Bank Portfolio', value: 250, suffix: 'M+', prefix: '$', caption: 'Portfolio managed across OGSTEP reform components', icon: 'briefcase' },
  { title: 'Direct Beneficiaries', value: 72000, suffix: '+', prefix: '', caption: 'Reached across Ogun State interventions', icon: 'users' },
  { title: 'Certificates of Occupancy', value: 15000, suffix: '+', prefix: '', caption: 'Issued under her land reform leadership', icon: 'award' },
  { title: 'Farmers Registered', value: 160000, suffix: '', prefix: '', caption: 'Captured under OGFIMS for agricultural reform', icon: 'wheat' },
  { title: 'Leadership Span', value: 30, suffix: '+', prefix: '', caption: 'Years across education, enterprise, and development', icon: 'graduationCap' },
  { title: 'OGSTEP Team Led', value: '4 | 15+ | 50+', suffix: '', prefix: '', caption: 'Project Managers, consultants, and team members', icon: 'mapPin' },
]

export const divisionCoverageData = [
  { name: 'Egba', sites: 20 },
  { name: 'Ijebu', sites: 17 },
  { name: 'Yewa', sites: 16 },
  { name: 'Remo', sites: 12 },
]

export const organizationLogosData = [
  { src: '/images/World-Bank-Logo.jpg', alt: 'World Bank' },
  { src: '/images/ogun_state_logo.png', alt: 'Ogun State' },
  { src: '/images/grange-secondary-school.png', alt: 'Grange School' },
  { src: '/images/corona.png', alt: 'Corona Secondary School' },
  { src: '/images/Lekki_British_School_logo.png', alt: 'Lekki British School' },
  { src: '/images/amVille_SCHOOL_logo.png', alt: 'Amville' },
]

// ── Services page ────────────────────────────────────────────────────────────
export const servicesData = [
  {
    icon: 'target',
    title: 'Development Programme Leadership',
    desc: 'End-to-end leadership of large-scale, donor-funded and government reform programmes, from design through delivery to results verification.',
    body: "I have spent the past several years leading OGSTEP, a $250M+ World Bank programme spanning agricultural value chains, skills development, land administration, and public sector reform. My role covered coordinating four project managers, 15+ specialist consultants, and over 50 team members, while managing direct relationships with the World Bank Task Team, the Governor's office, and implementing ministries. I am experienced in results-based financing frameworks, Disbursement Linked Results (DLRs), Implementation Support Missions, and the full fiduciary and reporting cycle of multilateral-funded programmes.",
    services: ['Multisectoral programme coordination across government, agriculture, skills, and land administration', 'Stakeholder management across ministries, World Bank Task Teams, development partners, and community groups', 'Results-based financing and DLR tracking, verification, and reporting', 'Annual budgeting, financial management, and fiduciary compliance for large portfolios', 'Facilitation of Implementation Support Missions and Independent Verification Assessments', 'Institutional capacity building for civil servants and implementing agencies'],
    color: 'from-blue-600 to-blue-400',
    action: 'Get in Touch',
    link: '/contact#message',
  },
  {
    icon: 'users',
    title: 'Institutional & Education Reform Advisory',
    desc: 'Strategic advisory for school turnaround, institutional re-engineering, and skills systems alignment to economic outcomes.',
    body: 'With over 30 years spanning secondary school leadership, curriculum development, and vocational skills reform, I bring operational depth that most advisors in this space lack. My career includes serving as Principal of Corona Secondary School, Deputy Head Teacher at Grange School, and Director of Studies at Lekki British School, alongside co-founding Amville School and growing it from 5 to 190 students. Through OGSTEP, I led the revitalisation of eight Government Technical Colleges and oversaw curriculum and assessment reform at the state level.',
    services: ['School turnaround and institutional review across governance, curriculum, staffing, and culture', 'Curriculum reform and alignment to skills demand and economic priorities', 'Systems strengthening for state education ministries and agencies', 'Advisory to education entrepreneurs on institutional structure, operations, and growth', 'Teacher and school leader capacity development', 'Integration of technology into learning environments'],
    color: 'from-purple-600 to-indigo-400',
    action: 'Get in Touch',
    link: '/contact#message',
  },
]

export const venturesData = [
  { name: 'Amville Consults', established: 'Est. 2006', description: 'Educational consulting, training, and advisory for schools and educational institutions. Works with institutions on turnaround, curriculum design, and leadership development.', icon: 'briefcase' },
  { name: 'Amville School', established: 'Est. 2006', description: 'Co-founded and built from 5 to 190 students over 14 years. ICT-integrated learning environment. Founder and alumni capacity retained.', icon: 'award' },
  { name: 'Divilux Realty', established: 'Est. 2015', description: 'Professional guidance on property acquisition, verification, investment decisions, and facility management across residential and commercial real estate.', icon: 'home' },
]

export const serviceStatsData = [
  { value: 250, prefix: '$', suffix: 'M+', label: 'World Bank Portfolio', icon: 'briefcase' },
  { value: 72, prefix: '', suffix: 'K+', label: 'Direct Beneficiaries', icon: 'users' },
  { value: 160, prefix: '', suffix: 'K+', label: 'Farmers Registered', icon: 'target' },
  { value: 15, prefix: '', suffix: 'K+', label: 'Certificates of Occupancy', icon: 'home' },
  { value: 30, prefix: '', suffix: '+', label: 'Years of Leadership', icon: 'award' },
]

export const careerPageServicesData = [
  { title: 'Project Management Consulting', description: 'Strategic project planning and execution' },
  { title: 'Education Consulting', description: 'Policy reform and institutional development' },
  { title: 'Real Estate Advisory', description: 'Market analysis and investment strategies' },
  { title: 'Leadership Development', description: 'Team building and organizational transformation' },
]

// ── Testimonials (merged: home preview + testimonials page) ──────────────────
export const testimonialsData = [
  {
    name: 'Unyime Eyo',
    title: 'Competitive Strategy Consultant',
    company: 'ChMC - Professional LinkedIn Recommendation',
    category: 'Project Management',
    rating: 5,
    linkedin: 'https://www.linkedin.com/in/unyimeabasieyo',
    imageSrc: '/images/Unyime Eyo.jpeg',
    highlights: ['collaboration', 'strategic', 'innovation'],
    featuredOnHome: true,
    content:
      "It is my privilege to talk about Mosun Owo-Odusi, the remarkable Project Coordinator of the Ogun State Economic Transformation Project. Under her capable leadership, this multifaceted program, comprising four critical projects—Creating a Business Enabling Environment, Improving the Agricultural Value Chain, Skills Development, and Public Sector Reforms—has flourished. She oversees 4 Project Managers, more than 15 Specialist Consultants, and over 50 other Team Members. Under her leadership, she fosters collaboration, strategic insight, and innovation. Her deep commitment to achieving measurable results has driven significant progress, empowering stakeholders across sectors and contributing to the state's socio-economic growth.\n\nMosun stands out for her exceptional leadership qualities, guiding the team through complex challenges with confidence, vision, and resilience. She has demonstrated an unparalleled ability to align project objectives with overarching goals of the program, ensuring that every team member contributes meaningfully to the program's success. Her strategic acumen and unwavering dedication have not only steered the program to achieve its milestones but have also laid a foundation for sustainable development in the state.\n\nHer approach to leadership is collaborative and inclusive, fostering a work environment where every team member feels valued and empowered to bring their best ideas to the table. This has resulted in innovative solutions to the state's challenges in agriculture, public sector efficiency, and skills development. She is also deeply committed to improving the ease of doing business in Ogun State, directly contributing to increased investment opportunities and economic growth. Her contributions to Ogun State through the Ogun State Economic Transformation Project will leave a lasting impact for years to come.\n\nIn addition to her professional excellence, Mosun is an inspiring leader who invests in the personal and professional growth of her team. Her mentoring has significantly enhanced the capacity of project managers, consultants and team members, leading to improved project outcomes and a stronger, more resilient workforce.\n\nI am glad to have worked under her leadership and without hesitation, I strongly recommend Mosun for any recognition or assignment that values transformative leadership, strategic vision, and a commitment to socio-economic development.",
  },
  {
    name: 'Toyosi Babatunde',
    title: 'Global Parenting Coach & Author',
    company: 'Professional LinkedIn Recommendation',
    category: 'Leadership & Strategy',
    rating: 5,
    linkedin: 'https://www.linkedin.com/in/toyosi-babatunde-91031637',
    imageSrc: '/images/Toyosi_Babatunde.jpeg',
    highlights: ['administrator', 'precision', 'professionalism'],
    featuredOnHome: true,
    content:
      'Mosun Owo-Odusi is an excellent administrator and team lead. She poses an innate ability to effectively navigate teams based on the peculiar strengths of the members that make up the team while helping them to overcome their weaknesses. When it comes to project management, she executes with precision, excellence and professionalism. She is a leader per excellence and has my unreserved recommendation.',
  },
  {
    name: 'Kehinde Victoria Omojola',
    title: 'Development Consultant',
    company: 'Professional Recommendation',
    category: 'Education Consulting',
    rating: 5,
    linkedin: 'https://www.linkedin.com/in/kehinde-victoria-omojola-3a65b516/',
    imageSrc: undefined as string | undefined,
    highlights: [],
    featuredOnHome: false,
    content:
      'I have known Mosun Owo Odusi for over two decades, and during that time she has consistently demonstrated exceptional professionalism, resilience, and leadership. We first became colleagues at Grange School Lagos in 2000, and our friendship began when we were jointly tasked with training our colleagues on the British Curriculum. At the time, the school was transitioning from a mixed Nigerian-British model to a fully British-based curriculum. This required significant self-development on our part-researching the curriculum structure, understanding its pedagogical expectations, and then delivering effective training to our peers. Mosun approached this challenge with characteristic diligence, intellectual curiosity, and professionalism, setting the tone for the many impactful collaborations we would go on to share.\n\nIn 2002, I had the privilege of taking over her class when she was appointed Deputy Head, a role she stepped into with confidence and competence. Our professional relationship continued to grow, and I later worked with her to train her teachers and managed a short-term consultancy at Amville School, where her openness to innovation and commitment to school improvement made the work both meaningful and productive. She also joined me on several Sycamore Edge School Improvement Projects, contributing her insight, discipline, and deep understanding of educational systems.\n\nMosun is diligent, highly focused, and results-driven. She brings clarity and purpose to every assignment, and she has a remarkable ability to remain steady and solution-oriented even in challenging situations. Her resilience is one of her greatest strengths-she consistently rises to meet complex demands with calm confidence and strategic thinking.\n\nHer dedication has been evident in the many projects she went on to lead at Ogun State, where her leadership, project management skills, and commitment to educational development made a significant impact. Mosun is the kind of professional who elevates every team she joins and strengthens every system she touches.\n\nI wholeheartedly recommend Mosun Owo Odusi for any leadership, educational development, or project management role. She brings experience, integrity, and an unwavering commitment to excellence-qualities that make her an asset in any environment.',
  },
  {
    name: 'Adebola Ogundimu',
    title: 'Chief Investment Officer',
    company: 'Global Real Estate Partners',
    category: 'Real Estate Advisory',
    rating: 5,
    linkedin: undefined as string | undefined,
    imageSrc: undefined as string | undefined,
    highlights: [],
    featuredOnHome: false,
    content:
      "Mosun's market analysis and investment recommendations consistently outperformed expectations. Her identification of undervalued markets generated 25%+ returns for our institutional clients across emerging economies.",
  },
]

// ── Insights / articles ──────────────────────────────────────────────────────
export const insightsData = [
  {
    id: 'lessons-250m-reform',
    title: 'Lessons from Delivering $250M of Public Sector Reform in a Nigerian State',
    subtitle: 'What I learned coordinating OGSTEP across four sectors, three tiers of government, and seventy-plus intervention sites.',
    readTime: '6 min read',
    date: 'April 2026',
    tag: 'Programme Leadership',
    body: [
      'When I took on the role of State Project Coordinator for the Ogun State Economic Transformation Project in 2021, I inherited a programme that was ambitious by any standard. OGSTEP was a $250M+ World Bank investment spanning four components: creating a business-enabling environment, improving agricultural value chains, skills development, and public sector reform. The remit was statewide. The expectation was transformation. The timeline was tight.',
      'Over the next four years, the programme reached more than 72,000 direct beneficiaries, issued over 15,000 Certificates of Occupancy, registered 160,000 farmers on the Ogun Geographic Farmers Information Management System (OGFIMS), launched the Ogun Land Administration and Revenue Management System (OLARMS), and rehabilitated eight Government Technical Colleges. These are the numbers. What follows are the lessons behind them.',
      'The first lesson is deceptively simple: align everyone to the same results framework from day one. OGSTEP operated on a results-based financing model with Disbursement Linked Results (DLRs). Every naira of World Bank funding was tied to verified, independently assessed outcomes. That structure forced discipline across the entire coordination chain, from the Governor\'s office to the implementing ministries, from my project managers to the field officers. When everyone knows that payment depends on documented results, meetings get shorter and deliverables get sharper.',
      'The second lesson is that stakeholder management across tiers of government is not a support function. It is the work. OGSTEP required simultaneous coordination with the World Bank Task Team in Washington, the Federal Ministry of Finance, the Governor\'s office, four line ministries, local government councils, traditional institutions, and community groups across 71+ intervention sites in four divisions. Any one of those relationships, if mismanaged, could stall a component for months. Investing time in alignment, transparency, and shared credit was not optional. It was a delivery strategy.',
      'The third lesson concerns procurement and fiduciary management. A $250M portfolio generates enormous procurement volume. Our team managed World Bank procurement guidelines, state financial regulations, and independent audit requirements simultaneously. The lesson here is that fiduciary rigour is not bureaucracy. It is the mechanism through which a programme earns continued trust, continued funding, and continued independence from political interference. We treated every procurement cycle as a credibility exercise.',
      'The fourth lesson is about institutional capacity and sustainability. It is tempting, in a large programme, to bring in consultants and contractors who deliver fast and leave. We chose a different path in several components. In the Government Technical Colleges, for instance, we did not just rehabilitate infrastructure. We worked with the Ministry of Education to retrain teachers, update curricula, and align skills training to economic demand in each division. The building is the visible result. The institutional shift is the one that lasts.',
      'The fifth lesson is that data systems are reform, not just tools. OGFIMS did not simply register 160,000 farmers. It gave the state, for the first time, a verified, georeferenced database of its agricultural base. OLARMS did not just digitise land records. It created a transparent, auditable system for land titling that reduced corruption and processing time. Both systems changed the relationship between government and citizen. That is reform.',
      'The sixth lesson is personal. Leading a programme of this scale requires a particular kind of resilience. There were Implementation Support Missions where the pressure was intense. There were community engagements where expectations exceeded resources. There were moments where the political calendar and the project calendar pulled in opposite directions. What I learned is that composure under institutional pressure is not a personality trait. It is a skill, and it can be practised.',
      'OGSTEP is now concluding. The infrastructure is visible. The systems are operational. The data is public. What I carry forward is a conviction that large-scale public sector reform in Nigeria is not only possible but repeatable, provided the programme architecture is right, the results framework is binding, and the leadership is accountable.',
      'I am now considering where to apply these lessons next: board advisory, multilateral programme leadership, or state-level reform mandates where the commitment to outcomes is genuine and the institutional will is present.',
    ],
  },
  {
    id: 'skills-development-ogstep',
    title: "What Works and What Doesn't in State-Level Skills Development",
    subtitle: "Reflections from OGSTEP's skills component, covering 39,000+ trainees, 8 rehabilitated technical colleges, and the gap between training and employment.",
    readTime: '5 min read',
    date: 'April 2026',
    tag: 'Skills & Education',
    body: [
      'Skills development is one of the most popular words in Nigerian development policy. Every state has a programme. Every governor has an initiative. Yet the outcomes are stubbornly uneven. Some programmes produce graduates who are employed within months. Others produce certificates that lead nowhere. After leading the skills component of OGSTEP for four years, I have views on what separates the two.',
      'The OGSTEP skills component trained over 39,000 participants across multiple sectors and rehabilitated eight Government Technical Colleges in Ogun State. Those are strong numbers. But the numbers alone do not tell you whether the training was worth the investment. The real question is: did the trainees find work, start businesses, or acquire capabilities that changed their economic trajectory? In some cases, yes. In others, the answer is more complicated.',
      'The first thing that works is aligning training content to actual economic demand in the local division. Ogun State has distinct economic profiles across its four divisions: Egba, Ijebu, Remo, and Yewa. Agricultural processing dominates some areas. Light manufacturing and trading dominate others. When we tailored curricula to local value chains, the placement rates improved measurably. When we ran generic "entrepreneurship" training without sector specificity, the outcomes were weaker.',
      'The second thing that works is combining infrastructure with institutional reform. Rehabilitating a Government Technical College is necessary but not sufficient. If the teachers are still using 1990s curricula, if the equipment sits unused because no one was trained on maintenance, if the school leadership has no accountability to outcomes, the building is just a building. Our approach was to pair physical rehabilitation with teacher retraining, curriculum updates, and management strengthening. It is slower and more expensive. It is also the only thing that produces lasting change.',
      'The third thing that works is embedding skills programmes within a broader results framework. Because OGSTEP was tied to DLRs, every training cohort had to be documented, verified, and independently assessed. That discipline forced the skills team to track not just enrolment but completion, not just completion but placement. Many state skills programmes operate without that feedback loop. They report inputs (number of people trained) rather than outcomes (number of people employed or earning more). The distinction matters enormously.',
      'Now for what does not work. The first is treating skills development as a standalone intervention. Training people without connecting them to markets, finance, or employers is an exercise in frustration for the trainees and a waste of public money. OGSTEP\'s skills component was most effective when it was integrated with the agricultural value chain component (connecting farmers to processing and markets) or the business-enabling environment component (connecting SMEs to registration, credit, and compliance systems). Siloed skills programmes consistently underperform.',
      'The second thing that does not work is political scheduling. Skills programmes need 12 to 18 months of curriculum development, trainer preparation, and institutional setup before the first cohort begins. Political cycles do not respect that timeline. The pressure to "launch" something visible before an election or budget review often compresses preparation to the point where quality suffers. I have seen this repeatedly, and the only defence is a strong programme coordinator who can push back with data.',
      'The third thing that does not work is ignoring the gender dynamics of skills access. In several divisions, female participation in technical training was significantly lower than male participation, not because of lack of interest but because of childcare responsibilities, transport constraints, and cultural expectations. We had to design specific interventions (flexible schedules, stipends, community sensitisation) to close that gap. Any skills programme that does not explicitly address gender access will reproduce the existing inequality.',
      'The rehabilitated Government Technical Colleges in Ogun State now have updated facilities, retrained staff, and revised curricula. Whether they sustain those gains depends on state government commitment to funding, staffing, and accountability after OGSTEP. That is the honest conclusion. Programme-funded reform creates a window. Institutional ownership determines whether the window stays open.',
      'These are lessons I intend to carry into my next engagement, whether that is advising a state government, supporting a DFI-funded programme, or serving on a board where skills and human capital investment are on the agenda.',
    ],
  },
]
