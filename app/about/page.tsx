'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Metadata } from 'next'
import Image from 'next/image'
import HighlightText from '@/components/HighlightText'
import { Calendar, MapPin, Building2, Trophy, CheckCircle, GraduationCap, Users, Target } from 'lucide-react'
import ScrollControls from '@/components/ScrollControls'
import { toast } from 'sonner'

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

  const [clientAbout, setClientAbout] = useState('')
  const [isSubmittingAbout, setIsSubmittingAbout] = useState(false)

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

  const handleAboutSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmittingAbout) return

    if (!clientAbout.trim()) {
      toast.error('Please enter your About text before sending.')
      return
    }

    try {
      setIsSubmittingAbout(true)
      const response = await fetch('/api/client-about', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          about: clientAbout.trim(),
        }),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok || !data?.ok) {
        const errorMessage = data?.error || 'Unable to send your About text. Please try again.'
        toast.error(errorMessage)
        return
      }

      toast.success('Thank you! Your About text has been sent.')
      setClientAbout('')
    } catch (error) {
      console.error('Error sending About text', error)
      toast.error('Something went wrong while sending your About text.')
    } finally {
      setIsSubmittingAbout(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden mt-16 lg:mt-20">
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

      {/* Client About Input Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-large border border-slate-100 p-6 sm:p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Share Your <span className="text-primary-600">About</span>
            </h2>
            <p className="text-slate-600 mb-6 text-sm sm:text-base">
              In your own words, describe who you are, the work you do, and the kind of impact you want visitors to understand when they read your About section. Write as if you were speaking directly to your ideal audience.
            </p>

            <form onSubmit={handleAboutSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="clientAbout" className="block text-sm font-medium text-slate-800">
                  Your About text
                </label>
                <textarea
                  id="clientAbout"
                  value={clientAbout}
                  onChange={(e) => setClientAbout(e.target.value)}
                  rows={6}
                  placeholder="For example: I am passionate about economic transformation, education, or human development because... Share what drives your work, what you care deeply about, the people you most want to serve, and any personal story or moment that captures why this work matters to you."
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm sm:text-base text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-primary-500 placeholder:text-slate-400 resize-vertical min-h-[160px]"
                />
                <p className="text-xs text-slate-500">
                  Feel free to write in your natural voice. We&apos;ll refine wording and structure later into a polished About section draft.
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmittingAbout}
                  className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-5 sm:px-6 py-2.5 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-primary-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmittingAbout ? 'Sending...' : 'Send About Text'}
                </button>
              </div>
            </form>
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
      <section className="section-padding bg-gradient-to-br from-slate-50 via-primary-50/30 to-white">
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
                          <h4 className="font-bold text-slate-900 text-lg">Master of Business Administration - MBA</h4>
                          <p className="text-emerald-600 font-semibold">Rome Business School Nigeria</p>
                          <p className="text-slate-600 text-sm">Business Administration and Management, General</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span>Oct 2024 – Oct 2025</span>
                      <span>•</span>
                      <span>Grade: MBA</span>
                    </div>
                  </motion.div>

                  {/* Past Education */}
                  {[
                    {
                      degree: "M.ed Adult Education Management",
                      school: "University of Lagos",
                      field: "Adult education and Life Long Learning",
                      period: "2018 – 2019",
                      grade: "Distinction",
                      skills: ["Adult Education"],
                      logo: "/images/logos/unilag_logo.png"
                    },
                    {
                      degree: "Master of Business Administration - MBA",
                      school: "Obafemi Awolowo University",
                      field: "Business Administration and Management, General", 
                      period: "1996 – 1998",
                      grade: null,
                      skills: null,
                      logo: "/images/logos/obafemi_awolowo_university_logo.png"
                    },
                    {
                      degree: "Post Graduate Diploma",
                      school: "University of Lagos",
                      field: "Education",
                      period: "1998",
                      grade: null,
                      skills: null,
                      logo: "/images/logos/unilag_logo.png"
                    },
                    {
                      degree: "B.Sc",
                      school: "Obafemi Awolowo University",
                      field: "Food Science and Technology",
                      period: "1984 – 1991",
                      grade: null,
                      skills: null,
                      logo: "/images/logos/obafemi_awolowo_university_logo.png"
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
                        <div className="flex-shrink-0">
                          <Image
                            src={edu.logo}
                            alt={edu.school}
                            width={50}
                            height={50}
                            className="object-contain"
                          />
                        </div>
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
                          title: "Business Development Services Professional",
                          school: "Enterprise Development Center, Pan-Atlantic University",
                          year: "2020",
                          logo: "/images/logos/lagos_business_school_logo.png"
                        },
                        {
                          title: "Certificate of Accreditation, Management Trainer", 
                          school: "Centre for Management Development",
                          year: "2017",
                          logo: null
                        },
                        {
                          title: "Certificate in Entrepreneurship Management (CEM)",
                          school: "Lagos Business School, Pan-Atlantic University",
                          year: "2009",
                          logo: "/images/logos/lagos_business_school_logo.png"
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
                    title: "Introduction to Cybersecurity",
                    issuer: "Cisco",
                    date: "Issued Sep 2024",
                    skills: ["Cybersecurity", "Penetration Testing"],
                    color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
                    logo: "/images/logos/cisco_logo.png"
                  },
                  {
                    title: "Member",
                    issuer: "Project Management Institute",
                    date: "Issued Jan 2024",
                    skills: ["Program Development", "Project Coordination"],
                    color: "bg-gradient-to-br from-blue-500 to-blue-600",
                    logo: "/images/logos/project_management_institute_logo.png"
                  },
                  {
                    title: "Member",
                    issuer: "Institute of Strategic Management Consultants (Chartered)",
                    date: "Issued Jan 2024",
                    skills: ["Business Strategy", "Consulting"],
                    color: "bg-gradient-to-br from-violet-500 to-violet-600",
                    logo: null
                  },
                  {
                    title: "Life member Enterprise Development Centre",
                    issuer: "Lagos Business School, Pan-Atlantic University",
                    date: "Issued Oct 2021",
                    skills: ["Business Strategy", "Entrepreneurship"],
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
      <ScrollControls showNextSection nextSectionId="career-timeline" />
    </div>
  )
}