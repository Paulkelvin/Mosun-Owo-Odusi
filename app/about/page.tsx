'use client'

import { motion } from 'framer-motion'
import type { Metadata } from 'next'
import Image from 'next/image'
import HighlightText from '@/components/HighlightText'
import { Calendar, MapPin, Building2, Trophy, CheckCircle, GraduationCap, Users, Target } from 'lucide-react'
import ScrollControls from '@/components/ScrollControls'

export default function About() {
  const careerMilestones = [
    {
      id: 1,
      period: 'May 2022 - Present',
      duration: '3 yrs 7 mos',
      title: 'State Project Coordinator',
      organization: 'Ogun State Economic Transformation Project (World Bank Sponsored)',
      location: 'Abeokuta, Ogun State, Nigeria',
      type: 'Full-time',
      highlights: [
	'Led a multi-sectoral team of 18 consultants and specialists to deliver OGSTEP’s Project Development Objectives and Disbursement Linked Results (DLRs).',
        'Coordinated annual budgeting and financial management for an over $205M World Bank portfolio, ensuring fiduciary compliance and timely external audits.',
        'Facilitated high-level policy dialogues and six Implementation Support Missions (ISMs) with the World Bank Task Team, driving sector reforms and capacity building across implementing agencies.',
        'Oversaw sectoral reform implementation across education, skills development and economic transformation, tracking results against the Project Appraisal Document (PAD).',
        'Implemented robust stakeholder management and communication strategies, aligning ministries, agencies and the Project Home Ministry.'
      ],
      skills: ['Organizational Leadership', 'Program Development', 'Project Coordination'],
      side: 'left'
    },
    {
      id: 2,
      period: 'Nov 2021 - May 2022',
      duration: '7 mos',
      title: 'Acting Project Coordinator',
      organization: 'Ogun State Economic Transformation Project (World Bank Sponsored)',
      location: 'Abeokuta, Ogun State, Nigeria',
      type: 'Full-time',
      highlights: [
        'Implemented effective stakeholder management strategies',
        'Applied hybrid Adaptive and Agile Project management methods',
        'Led team through first year Independent Verification Assessment (IVA)',
        'Facilitated and organized the second Technical Mission'
      ],
      skills: ['Organizational Leadership', 'Project Coordination'],
      side: 'right'
    },
    {
      id: 3,
      period: 'May 2021 - Sep 2022',
      duration: '1 yr 5 mos',
      title: 'Project Manager (Skills Development)',
      organization: 'Ogun State Economic Transformation Project (World Bank Sponsored)',
      location: 'Abeokuta, Ogun State, Nigeria',
      type: 'Full-time',
      highlights: [
        'Coordinated monitoring and evaluation of technical reforms in education, skills development and human capital, in line with the Project Appraisal Document (PAD).',
        'Managed the critical results-based financing link between sector performance and achievement of Disbursement Linked Results (DLRs), enabling release of funding tranches.',
        'Facilitated targeted capacity-building workshops for civil servants and stakeholders on new education policies, data systems and institutional strengthening.',
        'Worked with the State Ministry of Education and implementing agencies to promote evidence-based decision-making and data-driven policy dialogue.'
      ],
      skills: ['Organizational Leadership', 'Program Development', 'Project Coordination', 'Management Consulting'],
      side: 'left'
    },
    {
      id: 4,
      period: 'Aug 2020 - Apr 2021',
      duration: '9 mos',
      title: 'Skills Development Specialist Consultant',
      organization: 'Ogun State Economic Transformation Project (World Bank Sponsored)',
      location: 'Abeokuta, Ogun State, Nigeria',
      type: 'Contract',
      highlights: [
        'Developed implementation plan for PMI-PSI approach using interactive digital technology',
        'Facilitated development of STEM subject standardized packages',
        'Recommended improvements for quality and relevance of STEM content',
        'Built capacity of STEM educators in the state'
      ],
      skills: ['Educational Leadership', 'Project Management', 'Consulting', 'Educational Technology'],
      side: 'right'
    },
    {
      id: 5,
      period: 'Jun 2006 - Present',
      duration: '19 yrs 6 mos',
      title: 'Principal Consultant',
      organization: 'Amville Consults',
      location: 'Lagos, Lagos State, Nigeria',
      type: 'Full-time · Hybrid',
      highlights: [
        'Assist educational institutions with turnaround through institutional reviews',
        'Coordinate training workshops for teachers and school leaders',
        'Facilitated re-engineering of educational institutions for optimal growth',
        'Oversee scholarship award processes for indigent students'
      ],
      skills: ['Curriculum Development', 'Educational Leadership', 'Consulting', 'Business Development'],
      side: 'left'
    },
    {
      id: 6,
      period: 'Sep 2006 - Dec 2020',
      duration: '14 yrs 4 mos',
      title: 'Founder/Executive Director',
      organization: 'Amville School',
      location: 'Lagos, Lagos State, Nigeria',
      type: 'Full-time',
      highlights: [
        'Co-founded the school with other visionaries',
        'Grew the school from 5 students to 190 students',
        'Managed annual turnover of ₦300M',
        'Introduced ICT Virtual Learning Environment (VLE)'
      ],
      skills: ['Entrepreneurship', 'Organizational Development', 'Educational Leadership', 'Technology Integration'],
      side: 'right'
    },
    {
      id: 7,
      period: 'Sep 2013 - Dec 2014',
      duration: '1 yr 4 mos',
      title: 'Director of Studies',
      organization: 'Lekki British School',
      location: 'Lagos, Lagos State, Nigeria',
      type: 'Full-time',
      highlights: [
        'Consultancy services for school management revamping',
        'Provided audit of organizational processes',
        'Recruited and trained new administrators',
        'Implemented ICT Virtual Learning Environment (VLE)'
      ],
      skills: ['Organizational Leadership', 'Educational Leadership', 'Technology Integration'],
      side: 'left'
    },
    {
      id: 8,
      period: 'Aug 2003 - Aug 2006',
      duration: '3 yrs 1 mo',
      title: 'Principal',
      organization: 'Corona Secondary School',
      location: 'Agbara, Ogun State, Nigeria',
      type: 'Full-time',
      highlights: [
        'Introduced and implemented one of the first e-learning secondary schools in Nigeria, integrating ICT into teaching and learning.',
        'Led a team of over 50 staff and 500 students, driving continuous capacity development and performance improvement.',
        'Supported the development of a campus expansion and rehabilitation blueprint and oversaw phased implementation.',
        'Led rebranding and stakeholder engagement initiatives that improved academic outcomes, college acceptance rates and new enrolments.'
      ],
      skills: ['Organizational Leadership', 'Educational Leadership', 'Educational Technology'],
      side: 'right'
    },
    {
      id: 9,
      period: 'Jul 2015 - Present',
      duration: '9 yrs 6 mos',
      title: 'Lead Realtor / Founder',
      organization: 'Divilux Realty Limited',
      location: 'Ilupeju, Lagos, Nigeria',
      type: 'Founder / Lead Realtor',
      highlights: [
        'Provide market analysis, coordinate property showings and facilitate closing processes across residential and commercial real estate.',
        'Support developers in conceptualising projects, optimising space utilisation and positioning assets for investment.',
        'Oversee property sales, management, janitorial and facility management services for a diverse client base.'
      ],
      skills: ['Real Estate Advisory', 'Client Relationship Management', 'Property Management'],
      side: 'left'
    },
    {
      id: 10,
      period: 'Sep 2002 - Aug 2003',
      duration: '1 yr',
      title: 'Deputy Head Teacher (Secondary) & Design and Technology Teacher',
      organization: 'Grange School',
      location: 'Ikeja, Lagos State, Nigeria',
      type: 'Full-time',
      highlights: [
        'Designed and introduced Design and Technology subjects into the curriculum.',
        'Monitored lesson delivery, mentored teachers and contributed to recruitment processes.',
        'Facilitated student leadership and capacity-building programmes for staff and learners.'
      ],
      skills: ['Educational Leadership', 'Curriculum Design', 'Teacher Development'],
      side: 'right'
    }
  ]

  const getIconForPosition = (title: string) => {
    if (title.includes('Coordinator') || title.includes('Manager')) {
      return <Target className="w-6 h-6 text-primary-600" />
    } else if (title.includes('Director') || title.includes('Principal') || title.includes('Founder')) {
      return <Building2 className="w-6 h-6 text-gold-600" />
    } else if (title.includes('Consultant')) {
      return <Users className="w-6 h-6 text-emerald-600" />
    }
    return <CheckCircle className="w-6 h-6 text-purple-600" />
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section id="about-hero" className="relative overflow-hidden mt-16 lg:mt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/mosun_owo-odusi_portrait.png"
            alt="Mosun Owo-Odusi - Professional Portrait"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/65" />
        </div>

        <div className="relative section-padding border-b-2 border-slate-200">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  <HighlightText highlightColor="emerald">About</HighlightText> <span className="gradient-text">Mosun</span>
                </h1>
                <p className="text-xl text-slate-100 mb-12 leading-relaxed">
                  A dedicated professional with over 20 years of experience in education, project management, and organizational leadership across Nigeria
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Overview Section */}
      <section id="about-intro" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container-custom max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] items-center"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                <span className="block mb-1 text-sm font-semibold tracking-[0.18em] uppercase text-primary-500">Profile Summary</span>
                <span>
                  <HighlightText highlightColor="emerald">
                    Mosunmola Owo-Odusi
                  </HighlightText>
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Mosunmola is a seasoned leader with over 30 years of strategic management experience, blending entrepreneurial drive with large-scale project execution expertise. As a Co-Founder and Director in education, hygiene, and real estate ventures, she has demonstrated a strong ability to build impactful businesses. Her leadership of the World Bank-backed Ogun State Economic Transformation Project showcased her capacity to manage complex, multisectoral initiatives, achieving notable performance-based disbursements and social impact. A PMP-certified professional with advanced degrees, awards, and professional affiliations, Mosunmola excels at managing multidisciplinary teams and delivering measurable results. Her operational excellence and business acumen position her to drive sustainable growth and innovation across diverse ventures.
              </p>
            </div>

            <div className="relative">
              <div className="relative max-w-sm mx-auto rounded-3xl overflow-hidden shadow-[0_22px_70px_rgba(15,23,42,0.85)] border border-slate-800 bg-slate-900">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/Mosun Owo-Odusi.jpg"
                    alt="Professional portrait of Mosun Owo-Odusi speaking at an event"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>
                <div className="absolute left-4 bottom-4 right-4 flex flex-col gap-1">
                  <span className="inline-flex items-center rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-100 border border-slate-700/70 w-fit">
                    Leadership & Outreach
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Timeline */}
      <section id="career-timeline" className="py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"> {/* Expanded container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Career <span className="text-primary-600">Milestones & Achievements</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A progressive career journey demonstrating continuous growth and expanding impact in education and development sectors
            </p>
          </motion.div>

          <div className="max-w-none mx-auto"> {/* Removed max-width constraint */}
            <div className="relative">
              {/* Central Timeline Line - Hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-emerald-200 to-gold-200 transform -translate-x-1/2"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8 md:space-y-12">
                {careerMilestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, x: milestone.side === 'left' ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      milestone.side === 'left' 
                        ? 'md:flex-row flex-col' 
                        : 'md:flex-row-reverse flex-col'
                    }`}
                  >
                    {/* Card */}
                    <div className={`w-full md:w-7/12 lg:w-6/12 ${milestone.side === 'left' ? 'md:pr-8 lg:pr-10' : 'md:pl-8 lg:pl-10'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-large p-6 lg:p-8 border border-slate-100 hover:shadow-xl transition-all duration-300"
                      >
                        {/* Header */}
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                              {milestone.period}
                            </span>
                            <span className="text-xs text-slate-400">• {milestone.duration}</span>
                          </div>
                          <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                          <h4 className="text-lg lg:text-xl font-semibold text-primary-600 mb-2 leading-tight">{milestone.organization}</h4>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-500">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 flex-shrink-0" />
                              <span className="text-xs sm:text-sm">{milestone.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4 flex-shrink-0" />
                              <span className="text-xs sm:text-sm">{milestone.type}</span>
                            </div>
                          </div>
                        </div>

                        {/* Key Highlights */}
                        <div className="mb-4">
                          <h5 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">Key Highlights:</h5>
                          <ul className="space-y-2">
                            {milestone.highlights.slice(0, 3).map((highlight, idx) => (
                              <li key={idx} className="text-sm lg:text-base text-slate-600 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0"></div>
                                <span className="leading-relaxed">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {milestone.skills.slice(0, 3).map((skill, idx) => (
                            <span key={idx} className="text-xs bg-slate-50 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Central Node - Only visible on desktop */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 bg-white rounded-full shadow-lg border-4 border-slate-100 flex items-center justify-center"
                      >
                        {getIconForPosition(milestone.title)}
                      </motion.div>
                    </div>

                    {/* Mobile Icon - Only visible on mobile */}
                    <div className="md:hidden flex justify-center mb-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="w-12 h-12 bg-white rounded-full shadow-lg border-4 border-slate-100 flex items-center justify-center"
                      >
                        {getIconForPosition(milestone.title)}
                      </motion.div>
                    </div>

                    {/* Empty space on the other side - Only on desktop */}
                    <div className="hidden md:block md:w-5/12 lg:w-6/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="about-education" className="section-padding bg-gradient-to-br from-slate-50 via-primary-50/30 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Education & <HighlightText highlightColor="emerald"><span className="text-emerald-600">Certifications</span></HighlightText>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A foundation of continuous learning spanning decades of academic excellence and professional development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="sticky top-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Education</h3>
                </div>
                
                <div className="space-y-8">
                  {/* Current Education */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative bg-white rounded-2xl shadow-medium p-6 border-l-4 border-emerald-500"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/logos/rome_business_school_logo.png"
                            alt="Rome Business School"
                            width={60}
                            height={60}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-lg">Master of Business Administration (MBA)</h4>
                          <p className="text-emerald-600 font-semibold">Rome Business School, Italy</p>
                          <p className="text-slate-600 text-sm">Business Administration and Management</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span>2024 – 2025</span>
                      <span>•</span>
                      <span>Completed 2025</span>
                    </div>
                  </motion.div>

                  {/* Past Education */}
                  {[
                    {
                      degree: "M.Ed. Adult Education Management",
                      school: "University of Lagos, Akoka",
                      field: "Adult Education Management",
                      period: "2018 – 2019",
                      grade: "Distinction",
                      skills: ["Adult Education"],
                      logo: "/images/logos/unilag_logo.png"
                    },
                    {
                      degree: "Post Graduate Diploma in Education (PGDE)",
                      school: "University of Lagos",
                      field: "Education Management",
                      period: "1998",
                      grade: null,
                      skills: null,
                      logo: "/images/logos/unilag_logo.png"
                    },
                    {
                      degree: "B.Sc. Food Science and Technology",
                      school: "Obafemi Awolowo University, Ile-Ife",
                      field: "Food Science and Technology",
                      period: "1984 – 1990",
                      grade: null,
                      skills: null,
                      logo: "/images/logos/obafemi_awolowo_university_logo.png"
                    },
                    {
                      degree: "West African School Leaving Certificate",
                      school: "St. Louis Grammar School, Ibadan",
                      field: "Secondary Education",
                      period: "1984",
                      grade: null,
                      skills: null,
                      logo: null
                    }
                  ].map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-medium transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        {edu.logo ? (
                          <div className="flex-shrink-0">
                            <Image
                              src={edu.logo}
                              alt={edu.school}
                              width={50}
                              height={50}
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                          <p className="text-primary-600 font-semibold">{edu.school}</p>
                          <p className="text-slate-600 text-sm mb-3">{edu.field}</p>
                          <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                            <span>{edu.period}</span>
                            {edu.grade && (
                              <>
                                <span>•</span>
                                <span className="font-medium text-emerald-600">{edu.grade}</span>
                              </>
                            )}
                          </div>
                          {edu.skills && (
                            <div className="flex flex-wrap gap-2">
                              {edu.skills.map((skill, idx) => (
                                <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Professional Development */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-amber-50 to-gold-50 rounded-2xl shadow-soft p-6"
                  >
                    <h4 className="font-bold text-slate-900 mb-4">Professional Development</h4>
                    <div className="space-y-3">
                      {[
                        {
                          title: "Business Development Services Professional Certificate",
                          school: "Enterprise Development Centre, Pan-Atlantic University",
                          year: "2020",
                          logo: "/images/logos/lagos_business_school_logo.png"
                        },
                        {
                          title: "Certificate of Accreditation – Management Trainer", 
                          school: "Centre for Management Development, Lagos",
                          year: "2017",
                          logo: null
                        },
                        {
                          title: "Certificate in Entrepreneurship Management (CEM)",
                          school: "Enterprise Development Centre, Pan-Atlantic University",
                          year: "2009",
                          logo: "/images/logos/lagos_business_school_logo.png"
                        },
                        {
                          title: "Certificate in Course-based Assessment (Food Science)",
                          school: "Cambridge International Examinations (CIE)",
                          year: "2003",
                          logo: null
                        },
                        {
                          title: "Diploma, Data Processing",
                          school: "Microchips Computer Ltd",
                          year: "1992",
                          logo: null
                        }
                      ].map((cert, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          {cert.logo && (
                            <Image
                              src={cert.logo}
                              alt={cert.school}
                              width={40}
                              height={40}
                              className="object-contain flex-shrink-0"
                            />
                          )}
                          {!cert.logo && (
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                          )}
                          <div>
                            <p className="font-medium text-slate-900 text-sm">{cert.title}</p>
                            <p className="text-slate-600 text-xs">{cert.school} • {cert.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Certifications & Licenses Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-600 to-amber-500 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Licenses & Certifications</h3>
              </div>

              <div className="space-y-6">
                {/* Featured Certification - PMP */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-large p-6 text-white overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <Image
                        src="/images/logos/project_management_institute_logo.png"
                        alt="Project Management Institute"
                        width={60}
                        height={60}
                        className="object-contain bg-white rounded-lg p-2 flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div>
                          <h4 className="font-bold text-lg">Project Management Professional (PMP)®</h4>
                          <p className="text-primary-100">Project Management Institute</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-primary-200 text-sm mb-4">Issued Feb 2025 • Expires Feb 2028</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-white/20 rounded-lg text-xs">Project Management</span>
                    </div>
                  </div>
                </motion.div>

                {/* Other Certifications */}
                {[ 
                  {
                    title: "Associate Member",
                    issuer: "Women in Management, Business and Public Service (WIMBIZ)",
                    date: "Professional membership",
                    skills: ["Women in Leadership", "Mentoring"],
                    color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
                    logo: null
                  },
                  {
                    title: "Member",
                    issuer: "Project Management Institute (PMI)",
                    date: "Professional membership",
                    skills: ["Project Management", "Program Development"],
                    color: "bg-gradient-to-br from-blue-500 to-blue-600",
                    logo: "/images/logos/project_management_institute_logo.png"
                  },
                  {
                    title: "Member",
                    issuer: "Institute of Strategic Management Nigeria (Chartered)",
                    date: "Professional membership",
                    skills: ["Strategic Management", "Consulting", "MSN"],
                    color: "bg-gradient-to-br from-violet-500 to-violet-600",
                    logo: null
                  },
                  {
                    title: "Life Member, Enterprise Development Centre",
                    issuer: "Enterprise Development Centre, Pan-Atlantic University",
                    date: "Professional membership",
                    skills: ["Entrepreneurship", "EDC", "NNEW", "APEN", "GYLC Educator"],
                    color: "bg-gradient-to-br from-amber-500 to-gold-500",
                    logo: "/images/logos/lagos_business_school_logo.png"
                  }
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${cert.color} rounded-2xl shadow-medium p-6 text-white relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-2">
                        {cert.logo && (
                          <Image
                            src={cert.logo}
                            alt={cert.issuer}
                            width={50}
                            height={50}
                            className="object-contain bg-white rounded-lg p-2 flex-shrink-0"
                          />
                        )}
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-2">{cert.title}</h4>
                          <p className="text-white/90 mb-2">{cert.issuer}</p>
                          <p className="text-white/70 text-sm mb-4">{cert.date}</p>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, idx) => (
                              <span key={idx} className="px-2 py-1 bg-white/20 rounded-lg text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ScrollControls sections={["about-hero", "about-intro", "career-timeline", "about-education"]} />
    </div>
  )
}