'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink, Users, DollarSign, Calendar, MapPin, Award, TrendingUp, Briefcase, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react'
import HighlightText from '@/components/HighlightText'
import Image from 'next/image'

// Enhanced project data structure with milestones
const projects = [
  {
    id: 1,
    year: 2024,
    title: "OGSTEP: Ogun State Economic Transformation Project",
    category: "Project Coordination",
    status: "Ongoing",
    budget: "World Bank Funded",
    beneficiaries: "Ogun State",
    duration: "2019-2025",
    location: "Ogun State, Nigeria",
    image: "/images/ogun_state_logo.png",
    description: "Leading the coordination of the comprehensive Ogun State Economic Transformation Project, overseeing 4 Project Managers, 15+ Specialist Consultants, and 50+ team members across four critical initiatives: Creating a Business Enabling Environment, Improving Agricultural Value Chain, Skills Development, and Public Sector Reforms.",
    impact: "Under her capable leadership, this multifaceted program has flourished, fostering collaboration, strategic insight, and innovation while driving significant progress that empowers stakeholders across sectors and contributes to the state's socio-economic growth.",
    tags: ["World Bank", "Economic Transformation", "Project Coordination", "Public Sector Reform", "Agricultural Development", "Skills Development"],
    milestones: [
      {
        id: "overall_leadership",
        title: "Project Coordination & Strategic Leadership",
        period: "2019 – Present",
        description: "Provides overall coordination and leadership for OGSTEP, ensuring alignment with World Bank and government priorities while overseeing programs benefiting 65,000+ residents.",
        achievements: [
          "Directing project implementation across all supported components",
          "Ensuring alignment with World Bank and Ogun State Government development priorities",
          "Facilitating collaboration among government agencies and development partners",
          "Overseeing programs that have benefited more than 65,000 residents"
        ],
        metrics: {
          "Beneficiaries": "65,000+",
          "Implementation Unit": "1 Coordinated (SPIU)",
          "Project Timeline": "2019 – 2025",
          "Coverage": "Statewide Reach"
        },
        images: [
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
        ]
      },
      {
        id: "establishment",
        title: "Project Establishment & Institutional Framework",
        period: "2019 – 2020",
        description: "Supported institutional structure formation and early project planning for effective OGSTEP multi-sector component rollout.",
        achievements: [
          "Guided establishment of the State Project Implementation Unit",
          "Coordinated stakeholder consultations during project design",
          "Ensured readiness for World Bank–assisted implementation"
        ],
        metrics: {
          "Multi-sector Engagement": "Across state agencies",
          "Stakeholder Consultations": "Completed",
          "Institutional Framework": "Operational"
        },
        images: [
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
        ]
      },
      {
        id: "implementation",
        title: "Implementation & Community Impact",
        period: "2021 – 2023",
        description: "Supervised implementation of project activities that delivered measurable social and economic benefits across Ogun State.",
        achievements: [
          "Oversaw interventions improving livelihoods of 65,000+ residents",
          "Strengthened institutional capacity and service delivery mechanisms",
          "Advanced inclusive growth through targeted development programs"
        ],
        metrics: {
          "Residents Benefited": "65,000+",
          "Growth Initiatives": "Inclusive programs implemented",
          "Institutional Capacity": "Improved"
        },
        images: [
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
        ]
      },
      {
        id: "sustainability",
        title: "Sustainability & Development Integration",
        period: "2023 – 2024",
        description: "Focused on embedding successful interventions into long-term policy frameworks for continuity beyond project lifecycle.",
        achievements: [
          "Supported sustainability and institutional ownership strategies",
          "Facilitated alignment with the state's economic development agenda",
          "Continued collaboration with the World Bank and state partners for impact evaluation"
        ],
        metrics: {
          "Sustainability Plans": "Under implementation",
          "Development Integration": "Into state frameworks",
          "Evaluation": "Ongoing reporting"
        },
        images: [
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
        ]
      }
    ]
  },
  {
    id: 2,
    year: 2023,
    title: "Amville Educational Innovation & Consulting",
    category: "Educational Leadership",
    status: "Ongoing",
    budget: "Multi-client",
    beneficiaries: "Students & Educators",
    duration: "2011-Present",
    location: "Nigeria",
    image: "/api/placeholder/600/400",
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
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
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
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
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
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
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
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
        ]
      }
    ]
  }
]

export default function Projects() {
  const [selectedYear, setSelectedYear] = useState(2024)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [selectedMilestone, setSelectedMilestone] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [milestoneImageIndex, setMilestoneImageIndex] = useState<{[key: string]: number}>({})

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
      "Project Coordination": "bg-primary-100 text-primary-700 border-primary-200",
      "Educational Leadership": "bg-blue-100 text-blue-700 border-blue-200",
      "Education Consulting": "bg-purple-100 text-purple-700 border-purple-200",
      "Real Estate Advisory": "bg-green-100 text-green-700 border-green-200",
      "Leadership & Strategy": "bg-gold-100 text-gold-700 border-gold-200",
      "Crisis Management": "bg-red-100 text-red-700 border-red-200"
    }
    return colors[category as keyof typeof colors] || "bg-slate-100 text-slate-700 border-slate-200"
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 container-custom py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Transformative <HighlightText highlightColor="gold"><span className="text-gold-300">Projects</span></HighlightText>
              </h1>
              <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                15+ years of strategic leadership delivering measurable impact across sectors, 
                transforming communities and driving sustainable development.
              </p>
              
              {/* Hero Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
                {[
                  { icon: DollarSign, label: "Total Project Value", value: "$500M+" },
                  { icon: Users, label: "Lives Impacted", value: "2.5M+" },
                  { icon: Award, label: "Projects Completed", value: "50+" },
                  { icon: MapPin, label: "Countries", value: "15+" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-400/20 rounded-xl mb-3">
                      <stat.icon className="w-6 h-6 text-gold-300" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-primary-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-full">
          {/* Section Header with Navigation */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Career <HighlightText highlightColor="blue">Timeline</HighlightText>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-8">
              Explore the journey of impactful projects and strategic initiatives
            </p>
            
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
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                title={isAutoPlay ? "Pause auto-play" : "Start auto-play"}
              >
                {isAutoPlay ? (
                  <Pause className="w-5 h-5 text-primary-600" />
                ) : (
                  <Play className="w-5 h-5 text-primary-600" />
                )}
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                title="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Mobile Navigation - Horizontal */}
            <div className="lg:hidden flex flex-col items-center gap-4 mb-8">
              {/* Year Navigation - Horizontal on Mobile */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => handleYearClick(year)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                      selectedYear === year
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-white text-slate-600 hover:bg-primary-50 border border-slate-200'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
              
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
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                  title={isAutoPlay ? "Pause auto-play" : "Start auto-play"}
                >
                  {isAutoPlay ? (
                    <Pause className="w-5 h-5 text-primary-600" />
                  ) : (
                    <Play className="w-5 h-5 text-primary-600" />
                  )}
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  title="Next project"
                >
                  <ChevronRight className="w-5 h-5" />
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
                  <h3 className="text-lg font-semibold text-slate-900">Timeline</h3>
                </div>

                {/* Year Navigation */}
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-gold-200"></div>
                  <div className="space-y-6">
                    {years.map((year, index) => (
                      <motion.button
                        key={year}
                        onClick={() => handleYearClick(year)}
                        className={`relative flex items-center text-left transition-all duration-300 ${
                          selectedYear === year
                            ? 'text-primary-700'
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold mr-4 transition-all duration-300 ${
                          selectedYear === year
                            ? 'bg-primary-600 border-primary-600 text-white shadow-lg'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-primary-300'
                        }`}>
                          {year.toString().slice(-2)}
                        </div>
                        <div className={`text-2xl font-bold transition-all duration-300 ${
                          selectedYear === year ? 'text-primary-700' : 'text-slate-400'
                        }`}>
                          {year}
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
                          <span className="text-2xl font-bold text-slate-900">{currentProject.year}</span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                          {currentProject.title}
                        </h3>
                        <p className="text-lg text-slate-700 leading-relaxed">
                          {currentProject.description}
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
                      {[
                        { label: "Budget", value: currentProject.budget, icon: DollarSign },
                        { label: "Beneficiaries", value: currentProject.beneficiaries, icon: Users },
                        { label: "Duration", value: currentProject.duration, icon: Calendar },
                        { label: "Location", value: currentProject.location, icon: MapPin }
                      ].map((metric, index) => (
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
                          <div key={milestone.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
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
                                  transition={{ duration: 0.3 }}
                                  className="border-t border-slate-200"
                                >
                                  <div className="p-4 bg-slate-50">
                                    {/* Milestone Images Carousel */}
                                    {currentMilestone.images.length > 0 && (
                                      <div className="mb-4">
                                        <div className="relative">
                                          <div className="flex items-center">
                                            {/* Main Image Display */}
                                            <motion.div 
                                              className="relative w-full lg:max-w-lg h-48 rounded-lg overflow-hidden bg-slate-200 border border-slate-300 cursor-grab active:cursor-grabbing"
                                              drag="x"
                                              dragElastic={0.2}
                                              dragConstraints={{ left: 0, right: 0 }}
                                              onDragEnd={(_e, info) => {
                                                const swipeConfidence = (offset: number, velocity: number) => Math.abs(offset) * velocity
                                                const swipe = swipeConfidence(info.offset.x, info.velocity.x)
                                                if (info.offset.x < -50 || swipe < -4000) {
                                                  handleMilestoneImageNext(currentMilestone.id, currentMilestone.images.length)
                                                } else if (info.offset.x > 50 || swipe > 4000) {
                                                  handleMilestoneImagePrev(currentMilestone.id, currentMilestone.images.length)
                                                }
                                              }}
                                            >
                                              <Image
                                                src={currentMilestone.images[milestoneImageIndex[currentMilestone.id] || 0]}
                                                alt={`${currentMilestone.title} - Image ${(milestoneImageIndex[currentMilestone.id] || 0) + 1}`}
                                                fill
                                                className="object-cover"
                                              />
                                              
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
                                            
                                            {/* Partial Next Image Preview */}
                                            {currentMilestone.images.length > 1 && (
                                              <div className="relative w-16 h-48 ml-2 rounded-lg overflow-hidden bg-slate-200 border border-slate-300 opacity-60">
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
                                              <span className="text-slate-800 text-sm">{achievement}</span>
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
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impact Statement */}
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 mb-8 border border-primary-500">
                      <h4 className="text-lg font-bold text-white mb-3">Project Impact</h4>
                      <p className="text-primary-50">{currentProject.impact}</p>
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
                        className="flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white rounded-xl font-medium transition-colors border border-gold-400"
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

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom text-center">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white rounded-xl font-semibold transition-colors">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-semibold transition-colors">
                Download Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}