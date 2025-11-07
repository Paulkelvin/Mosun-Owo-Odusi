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
    title: "OGSTEP: Economic Transformation Initiative",
    category: "Project Management",
    status: "Ongoing",
    budget: "$250M",
    beneficiaries: "65,000+",
    duration: "2019-2024",
    location: "Multi-state, Nigeria",
    image: "/api/placeholder/600/400",
    description: "Led strategic coordination of World Bank-supported economic transformation program, implementing innovative land administration solutions and digital governance systems across multiple Nigerian states.",
    impact: "Transformed lives of over 65,000 beneficiaries through integrated approach to land rights, agricultural productivity, and skills development.",
    tags: ["World Bank", "Digital Transformation", "Land Administration", "Capacity Building"],
    milestones: [
      {
        id: "phase1",
        title: "Project Initiation & Planning",
        period: "Q1-Q2 2019",
        description: "Comprehensive stakeholder mapping and project framework development across participating states.",
        achievements: [
          "Stakeholder engagement across 6 states",
          "Baseline assessment completion",
          "Technical team establishment",
          "Community sensitization programs"
        ],
        metrics: {
          "States Engaged": "6",
          "Stakeholders Mapped": "500+",
          "Communities Reached": "150",
          "Technical Experts": "25"
        },
        images: [
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
        ]
      },
      {
        id: "phase2",
        title: "Digital Infrastructure Development",
        period: "Q3 2019 - Q4 2020",
        description: "Implementation of cutting-edge digital land administration systems and governance platforms.",
        achievements: [
          "Land information system deployment",
          "Digital certificate generation platform",
          "Mobile application development",
          "Data migration and validation"
        ],
        metrics: {
          "Systems Deployed": "8",
          "Records Digitized": "75,000",
          "Mobile Users": "12,000",
          "Accuracy Rate": "99.5%"
        },
        images: [
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
        ]
      },
      {
        id: "phase3",
        title: "Capacity Building & Training",
        period: "Q1 2021 - Q2 2023",
        description: "Comprehensive skills development and institutional capacity building across all participating states.",
        achievements: [
          "Technical college rehabilitation",
          "Youth skills training programs",
          "Farmer digital literacy initiatives",
          "Government staff capacity building"
        ],
        metrics: {
          "Youth Trained": "25,000+",
          "Farmers Digitized": "160,000",
          "Colleges Rehabilitated": "8",
          "Staff Trained": "2,500"
        },
        images: [
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
        ]
      },
      {
        id: "phase4",
        title: "Impact Scaling & Sustainability",
        period: "Q3 2023 - Q4 2024",
        description: "Focus on scaling successful interventions and ensuring long-term sustainability of project outcomes.",
        achievements: [
          "Certificate issuance acceleration",
          "Private sector engagement",
          "Policy framework development",
          "Impact measurement and evaluation"
        ],
        metrics: {
          "Certificates Issued": "15,000+",
          "Private Partners": "50+",
          "Policies Updated": "12",
          "Impact Score": "8.5/10"
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
    title: "Education Policy Reform Initiative",
    category: "Education Consulting",
    status: "Completed",
    budget: "$50M",
    beneficiaries: "2.1M+",
    duration: "2022-2023",
    location: "West Africa",
    image: "/api/placeholder/600/400",
    description: "Spearheaded comprehensive education reform initiative working with UNESCO and regional governments to modernize curricula and improve learning outcomes.",
    impact: "Revolutionized educational frameworks leading to 40% improvement in learning outcomes across participating countries.",
    tags: ["UNESCO", "Policy Reform", "Curriculum Development", "Teacher Training"],
    milestones: [
      {
        id: "research",
        title: "Research & Assessment",
        period: "Q1-Q2 2022",
        description: "Comprehensive analysis of existing education systems and identification of reform opportunities.",
        achievements: [
          "12-country education system analysis",
          "Best practices identification",
          "Stakeholder consultation",
          "Reform framework development"
        ],
        metrics: {
          "Countries Analyzed": "12",
          "Stakeholders Consulted": "1,500",
          "Policies Reviewed": "240",
          "Best Practices": "85"
        },
        images: [
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
        ]
      },
      {
        id: "implementation",
        title: "Curriculum Implementation",
        period: "Q3 2022 - Q2 2023",
        description: "Rollout of modernized curricula and teacher training programs across participating countries.",
        achievements: [
          "Curriculum modernization",
          "Teacher training deployment",
          "Digital learning integration",
          "Assessment system updates"
        ],
        metrics: {
          "Teachers Trained": "45,000",
          "Students Reached": "2.1M",
          "Schools Digitized": "3,200",
          "Improvement Rate": "40%"
        },
        images: [
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
        ]
      }
    ]
  },
  {
    id: 3,
    year: 2022,
    title: "Real Estate Investment Strategy",
    category: "Real Estate Advisory",
    status: "Completed",
    budget: "$100M",
    beneficiaries: "15,000+",
    duration: "2021-2022",
    location: "Lagos, Nigeria",
    image: "/api/placeholder/600/400",
    description: "Provided strategic advisory for large-scale sustainable housing development, balancing community needs with investor requirements and environmental considerations.",
    impact: "Created sustainable housing solutions for 15,000+ residents while generating positive returns for investors and 3,500 construction jobs.",
    tags: ["Sustainable Development", "Investment Strategy", "Community Planning", "Green Building"],
    milestones: [
      {
        id: "planning",
        title: "Strategic Planning & Analysis",
        period: "Q1-Q2 2021",
        description: "Market analysis, feasibility studies, and sustainable development planning.",
        achievements: [
          "Market analysis completion",
          "Investment modeling",
          "Environmental assessment",
          "Community engagement"
        ],
        metrics: {
          "Market Coverage": "100%",
          "ROI Projection": "35%",
          "Green Score": "A+",
          "Community Support": "95%"
        },
        images: [
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
        ]
      },
      {
        id: "development",
        title: "Development & Construction",
        period: "Q3 2021 - Q4 2022",
        description: "Implementation of sustainable housing development with green building standards.",
        achievements: [
          "Sustainable construction",
          "Job creation",
          "Green certification",
          "Community integration"
        ],
        metrics: {
          "Units Completed": "5,000",
          "Jobs Created": "3,500",
          "Green Certifications": "100%",
          "Residents Housed": "15,000+"
        },
        images: [
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
        ]
      }
    ]
  },
  {
    id: 4,
    year: 2021,
    title: "Leadership Development Program",
    category: "Leadership & Strategy",
    status: "Completed",
    budget: "$25M",
    beneficiaries: "10,000+",
    duration: "2020-2021",
    location: "Sub-Saharan Africa",
    image: "/api/placeholder/600/400",
    description: "Designed and implemented comprehensive leadership development program for emerging leaders across public and private sectors in Sub-Saharan Africa.",
    impact: "Empowered 2,500 leaders who went on to launch 50+ impactful programs, creating ripple effects reaching 10,000+ beneficiaries.",
    tags: ["Leadership Development", "Mentorship", "Capacity Building", "Cross-sector Collaboration"],
    milestones: [
      {
        id: "design",
        title: "Program Design & Setup",
        period: "Q1-Q2 2020",
        description: "Comprehensive leadership curriculum design and program framework establishment.",
        achievements: [
          "Curriculum development",
          "Mentor network setup",
          "Platform deployment",
          "Pilot program launch"
        ],
        metrics: {
          "Modules Created": "24",
          "Mentors Recruited": "150",
          "Pilot Participants": "100",
          "Success Rate": "98%"
        },
        images: [
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
        ]
      },
      {
        id: "implementation",
        title: "Full Program Implementation",
        period: "Q3 2020 - Q4 2021",
        description: "Large-scale rollout of leadership development program across Sub-Saharan Africa.",
        achievements: [
          "Leadership training delivery",
          "Mentorship program",
          "Impact measurement",
          "Network expansion"
        ],
        metrics: {
          "Leaders Trained": "2,500",
          "Organizations": "500",
          "Programs Launched": "50",
          "Beneficiaries": "10,000+"
        },
        images: [
          "/api/placeholder/400/300",
          "/api/placeholder/400/300",
          "/api/placeholder/400/300"
        ]
      }
    ]
  },
  {
    id: 5,
    year: 2020,
    title: "COVID-19 Response Coordination",
    category: "Crisis Management",
    status: "Completed",
    budget: "$75M",
    beneficiaries: "500,000+",
    duration: "2020",
    location: "Multi-country",
    image: "/api/placeholder/600/400",
    description: "Coordinated rapid response initiatives during COVID-19 pandemic, ensuring efficient resource allocation and community support across multiple countries.",
    impact: "Saved countless lives through coordinated response efforts and established resilient healthcare systems for future crisis preparedness.",
    tags: ["Crisis Management", "Healthcare Systems", "Supply Chain", "Digital Health"],
    milestones: [
      {
        id: "response",
        title: "Rapid Response Setup",
        period: "Q1-Q2 2020",
        description: "Emergency coordination framework and resource mobilization.",
        achievements: [
          "Emergency response setup",
          "Supply chain establishment",
          "Healthcare support",
          "Communication strategy"
        ],
        metrics: {
          "Response Time": "72 hrs",
          "Facilities Setup": "1,200",
          "Supplies Mobilized": "2M+",
          "Lives Saved": "500K+"
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

  const getCategoryColor = (category: string) => {
    const colors = {
      "Project Management": "bg-primary-100 text-primary-700 border-primary-200",
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
      <section className="section-padding bg-gradient-to-br from-white via-primary-50/20 to-gold-50/10">
        <div className="container-custom">
          {/* Section Header with Navigation */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Career <HighlightText highlightColor="blue">Timeline</HighlightText>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Explore the journey of impactful projects and strategic initiatives
            </p>
            
            {/* Top Navigation Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              {/* Year Navigation - Horizontal on Mobile */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
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
              
              {/* Controls */}
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

          {/* Project Details */}
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                {/* Project Header */}
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(currentProject.category)}`}>
                          {currentProject.category}
                        </span>
                        <span className="text-2xl font-bold text-primary-600">{currentProject.year}</span>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                        {currentProject.title}
                      </h3>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {currentProject.description}
                      </p>
                    </div>
                    
                    <div className="lg:w-80">
                      <div className="relative h-48 lg:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-gold-100">
                        <Image
                          src={currentProject.image}
                          alt={currentProject.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                      { label: "Budget", value: currentProject.budget, icon: DollarSign },
                      { label: "Beneficiaries", value: currentProject.beneficiaries, icon: Users },
                      { label: "Duration", value: currentProject.duration, icon: Calendar },
                      { label: "Location", value: currentProject.location, icon: MapPin }
                    ].map((metric, index) => (
                      <div key={metric.label} className="text-center p-4 bg-slate-50 rounded-xl">
                        <metric.icon className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-slate-900">{metric.value}</div>
                        <div className="text-sm text-slate-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Project Milestones */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-slate-900 mb-6">Project Milestones</h4>
                    <div className="space-y-4">
                      {currentProject.milestones.map((milestone, index) => (
                        <div key={milestone.id} className="border border-slate-200 rounded-xl overflow-hidden">
                          <button
                            onClick={() => handleMilestoneClick(milestone.id)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-4 mb-2">
                                <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                                  {milestone.period}
                                </span>
                                <span className="text-xs text-slate-500">Phase {index + 1}</span>
                              </div>
                              <h5 className="text-lg font-semibold text-slate-900 mb-1">{milestone.title}</h5>
                              <p className="text-sm text-slate-600">{milestone.description}</p>
                            </div>
                            {selectedMilestone === milestone.id ? (
                              <ChevronUp className="w-5 h-5 text-slate-400 ml-4" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-slate-400 ml-4" />
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
                                <div className="p-6">
                                  {/* Milestone Images */}
                                  {currentMilestone.images.length > 0 && (
                                    <div className="mb-6">
                                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                        {currentMilestone.images.map((imageUrl, imgIndex) => (
                                          <div key={imgIndex} className="relative h-24 rounded-lg overflow-hidden bg-slate-100">
                                            <Image
                                              src={imageUrl}
                                              alt={`${currentMilestone.title} - Image ${imgIndex + 1}`}
                                              fill
                                              className="object-cover hover:scale-105 transition-transform cursor-pointer"
                                              onClick={() => setCurrentImageIndex(imgIndex)}
                                            />
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  
                                  {/* Milestone Achievements */}
                                  <div className="grid lg:grid-cols-2 gap-6 mb-6">
                                    <div>
                                      <h6 className="font-semibold text-slate-900 mb-3">Key Achievements</h6>
                                      <div className="space-y-2">
                                        {currentMilestone.achievements.map((achievement, achieveIndex) => (
                                          <div key={achieveIndex} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-slate-700 text-sm">{achievement}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                    
                                    <div>
                                      <h6 className="font-semibold text-slate-900 mb-3">Impact Metrics</h6>
                                      <div className="grid grid-cols-2 gap-3">
                                        {Object.entries(currentMilestone.metrics).map(([key, value]) => (
                                          <div key={key} className="bg-gradient-to-br from-primary-50 to-gold-50 p-3 rounded-lg border border-primary-100">
                                            <div className="text-lg font-bold text-primary-700">{value}</div>
                                            <div className="text-xs text-slate-600">{key}</div>
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
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 mb-8">
                    <h4 className="text-lg font-bold text-white mb-3">Project Impact</h4>
                    <p className="text-primary-100">{currentProject.impact}</p>
                  </div>

                  {/* Tags and CTA */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex flex-wrap gap-2">
                      {currentProject.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white rounded-xl font-medium transition-colors">
                      <span>View Case Study</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
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