'use client'

import { motion } from 'framer-motion'
import type { Metadata } from 'next'
import HighlightText from '@/components/HighlightText'
import { Calendar, MapPin, Building2, Trophy, CheckCircle, GraduationCap, Users, Target } from 'lucide-react'

export default function About() {
  const careerMilestones = [
    {
      id: 1,
      period: 'May 2022 - Present',
      duration: '3 yrs 7 mos',
      title: 'Project Coordinator',
      organization: 'Ogun State Economic Transformation Project (World Bank Sponsored)',
      location: 'Abeokuta, Ogun State, Nigeria',
      type: 'Full-time',
      highlights: [
        'Oversee day-to-day implementation and monitoring of $250M World Bank project',
        'Budget, scheduling and resource management',
        'Quality assurance for all reports to government and World Bank',
        'Stakeholder management (Internal and External)',
        'Gender-sensitive and environmentally friendly interventions'
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
      period: 'May 2021 - May 2022',
      duration: '1 yr 1 mo',
      title: 'Project Manager - Skills Development Sector',
      organization: 'Ogun State Economic Transformation Project (World Bank Sponsored)',
      location: 'Nigeria',
      type: 'Full-time',
      highlights: [
        'Oversees all three sub-components with a $90M USD portfolio',
        'Led sector to achieve 75% of first-year implementation deliverables',
        'Facilitated stakeholder engagement with ministries & agencies',
        'Prepared and managed budget, tracked work plan activities'
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
      organization: 'Corona Schools',
      location: 'Lagos, Lagos State, Nigeria',
      type: 'Full-time',
      highlights: [
        'Introduced and implemented the first e-learning school in Nigeria',
        'Continuous training for up to 150 staff',
        'Introduced first blended programme in the school',
        'Oversaw daily operations (500 student capacity)'
      ],
      skills: ['Organizational Leadership', 'Educational Leadership', 'Educational Technology'],
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
    <div className="min-h-screen pt-32"> {/* Increased top padding */}
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                <HighlightText highlightColor="emerald">About</HighlightText> <span className="gradient-text">Mosun</span>
              </h1>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                A dedicated professional with over 20 years of experience in education, project management, and organizational leadership across Nigeria
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-white">
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

      {/* Coming Soon Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                More <span className="text-emerald-600">Coming Soon</span>
              </h2>
              <p className="text-lg text-slate-600">
                Additional sections to provide a comprehensive view of Mosun&apos;s professional journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-medium p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-8 h-8 text-emerald-600" />
                  <h3 className="text-xl font-bold text-slate-900">Educational Background</h3>
                </div>
                <ul className="space-y-2 text-slate-600">
                  <li>• Academic qualifications and certifications</li>
                  <li>• Professional development courses</li>
                  <li>• Research and publications</li>
                  <li>• Awards and recognitions</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-medium p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="w-8 h-8 text-gold-600" />
                  <h3 className="text-xl font-bold text-slate-900">Personal Mission</h3>
                </div>
                <ul className="space-y-2 text-slate-600">
                  <li>• Core values and philosophy</li>
                  <li>• Leadership approach</li>
                  <li>• Vision for education transformation</li>
                  <li>• Community impact initiatives</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}