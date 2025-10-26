'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, GraduationCap, Building2, Globe, CalendarDays } from 'lucide-react'
import Link from 'next/link'
import HighlightText from './HighlightText'

interface ExpertiseArea {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  details: string[]
}

const expertiseAreas: ExpertiseArea[] = [
  {
    id: 'project-management',
    title: 'Project Management',
    icon: <BarChart3 className="w-6 h-6" />,
    description: 'Specializing in coordination, strategic planning, and delivering measurable outcomes that drive organizational success.',
    details: [
      'Cross-functional team leadership with precision and accountability',
      'Strategic project planning and execution frameworks', 
      'Risk management and quality assurance protocols',
      'Stakeholder engagement and communication strategies'
    ]
  },
  {
    id: 'education-consulting',
    title: 'Education Consulting',
    icon: <GraduationCap className="w-6 h-6" />,
    description: 'Creating transformative impact through policy reform, capacity building, and learning innovation.',
    details: [
      'Educational policy development and implementation',
      'Institutional capacity building and training programs',
      'Learning outcome assessment and improvement strategies',
      'Stakeholder engagement in educational transformation'
    ]
  },
  {
    id: 'real-estate',
    title: 'Real Estate Advisory',
    icon: <Building2 className="w-6 h-6" />,
    description: 'Providing data-driven insights for market intelligence and sustainable investment strategies.',
    details: [
      'Market analysis and investment opportunity identification',
      'Risk assessment and portfolio optimization',
      'Sustainable development and ESG considerations',
      'Client advisory for strategic real estate decisions'
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership & Strategy',
    icon: <Globe className="w-6 h-6" />,
    description: 'Guiding diverse teams through collaborative leadership and strategic vision.',
    details: [
      'Organizational change management and transformation',
      'Strategic visioning and roadmap development',
      'Team empowerment and collaborative frameworks',
      'Scalable impact measurement optimization'
    ]
  }
]

export default function ExpertiseTabs() {
  const [activeTab, setActiveTab] = useState(expertiseAreas[0].id)
  
  // Get mobile-available tabs (first 3)
  const mobileAreas = expertiseAreas.slice(0, 3)
  const activeArea = expertiseAreas.find(area => area.id === activeTab)

  // Handle tab switching with mobile constraint
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <section id="expertise" className="section-padding bg-gradient-to-br from-white via-primary-50/20 to-gold-50/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Core Areas of <HighlightText highlightColor="blue"><span className="gradient-text">Expertise</span></HighlightText>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Delivering excellence across multiple domains with strategic insight and proven methodologies
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Tab Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {expertiseAreas.map((area, index) => (
              <motion.button
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleTabClick(area.id)}
                className={`p-6 rounded-xl text-left transition-all duration-300 group ${
                  activeTab === area.id
                    ? 'bg-gradient-to-br from-primary-700 to-primary-600 text-white shadow-colored scale-105'
                    : 'bg-white hover:bg-primary-50 text-slate-700 shadow-soft hover:shadow-medium hover:-translate-y-1'
                }`}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`mb-4 transition-colors flex justify-center ${
                  activeTab === area.id ? 'text-gold-300' : 'text-primary-600 group-hover:text-primary-700'
                }`}>
                  <div className="w-6 h-6 flex items-center justify-center">
                    {area.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center">{area.title}</h3>
                <div className={`w-12 h-1 rounded-full transition-colors ${
                  activeTab === area.id ? 'bg-gold-400' : 'bg-primary-200 group-hover:bg-primary-400'
                }`} />
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile Tab Buttons - Horizontal Layout (exclude Leadership) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:hidden flex gap-1 mb-8 overflow-x-auto scrollbar-hide"
          >
            {expertiseAreas.slice(0, 3).map((area, index) => {
              // Create mobile-specific smaller icons
              const mobileIcon = area.id === 'project-management' ? <BarChart3 className="w-4 h-4" /> :
                                area.id === 'education-consulting' ? <GraduationCap className="w-4 h-4" /> :
                                <Building2 className="w-4 h-4" />
              
              return (
              <motion.button
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleTabClick(area.id)}
                className={`flex-1 min-w-0 px-3 py-3 rounded-lg text-center transition-all duration-300 ${
                  activeTab === area.id
                    ? 'bg-primary-700 text-white shadow-md'
                    : 'bg-white text-slate-700 shadow-sm border border-gray-200'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`mb-1 flex justify-center ${
                  activeTab === area.id ? 'text-gold-300' : 'text-primary-600'
                }`}>
                  <div className="w-4 h-4 flex items-center justify-center">
                    {mobileIcon}
                  </div>
                </div>
                <div className="text-xs font-medium leading-tight">
                  {area.title}
                </div>
                <div className={`w-4 h-0.5 rounded-full mx-auto mt-1 transition-colors ${
                  activeTab === area.id ? 'bg-gold-400' : 'bg-primary-200'
                }`} />
              </motion.button>
            )})}
          </motion.div>

        </div>
        
        {/* Tab Content - Enhanced Design - Extended width */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`relative rounded-none sm:rounded-3xl shadow-large overflow-hidden mb-16 mx-0 sm:mx-4 lg:mx-8 ${
            activeArea?.id === 'project-management' ? 'bg-blue-500' :
            activeArea?.id === 'education-consulting' ? 'bg-emerald-500' :
            activeArea?.id === 'real-estate' ? 'bg-amber-500' :
            activeArea?.id === 'leadership' ? 'bg-violet-500' :
            'bg-white'
          }`}
        >
            <AnimatePresence mode="wait">
              {activeArea && (
                <motion.div
                  key={activeArea.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >


                  <div className="relative p-0 py-8 lg:p-12">
                    {/* Header Section */}
                    <div className="flex items-center gap-6 mb-8 px-4 sm:px-6 lg:px-12">
                      {/* Icon Circle with Contrasting Background */}
                      <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg bg-white/20 backdrop-blur-sm border border-white/30">
                        <div className="text-white w-6 h-6 flex items-center justify-center">
                          {activeArea.icon}
                        </div>
                        <div className={`absolute inset-0 rounded-2xl blur-lg opacity-25 ${
                          activeArea.id === 'project-management' ? 'bg-blue-400' :
                          activeArea.id === 'education-consulting' ? 'bg-emerald-400' :
                          activeArea.id === 'real-estate' ? 'bg-amber-400' :
                          'bg-violet-400'
                        }`} />
                      </div>
                      
                      <div className="flex-1">
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="text-2xl lg:text-3xl font-bold text-white mb-2"
                        >
                          {activeArea.title}
                        </motion.h3>
                        {/* Curly Underline - animated draw effect in gold with gentle looping wave */}
                        <motion.svg
                          viewBox="0 0 120 12"
                          className="mt-1 w-28 h-3"
                        >
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{
                              pathLength: 1,
                              d: [
                                'M2 6 C 15 2, 30 10, 45 6 S 75 2, 90 6 S 110 10, 118 6',
                                'M2 6 C 15 3, 30 9, 45 6 S 75 3, 90 6 S 110 9, 118 6',
                                'M2 6 C 15 4, 30 8, 45 6 S 75 4, 90 6 S 110 8, 118 6',
                                'M2 6 C 15 2, 30 10, 45 6 S 75 2, 90 6 S 110 10, 118 6'
                              ]
                            }}
                            transition={{
                              pathLength: { duration: 0.8, delay: 0.25, ease: 'easeInOut' },
                              d: { duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
                            }}
                            fill="none"
                            stroke="#F0C419"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </motion.svg>
                      </div>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid lg:grid-cols-5 gap-4 lg:gap-8 px-4 sm:px-6 lg:px-12">
                      
                      {/* Left Column - Description (streamlined) */}
                      <div className="lg:col-span-3 space-y-6">
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="text-lg text-white leading-relaxed opacity-95"
                        >
                          {activeArea.description}
                        </motion.p>
                        {/* Core Methodologies removed to streamline content */}
                      </div>

                      {/* Right Column - Metrics & Impact */}
                      <div className="lg:col-span-2 space-y-6">
                        
                        {/* Impact Metrics */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="p-6 rounded-2xl border bg-white border-slate-200/50"
                        >
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 opacity-90">
                            Impact Metrics
                          </h4>
                          
                          <div className="space-y-4">
                            {/* Dynamic metrics based on expertise area */}
                            {activeArea.id === 'project-management' && (
                              <>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-slate-600">Project Success Rate</span>
                                  <span className="text-xl font-bold text-blue-600">95%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-slate-600">Teams Led</span>
                                  <span className="text-xl font-bold text-blue-600">25+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-slate-600">Budget Managed</span>
                                  <span className="text-xl font-bold text-blue-600">$50M+</span>
                                </div>
                              </>
                            )}
                            
                            {activeArea.id === 'education-consulting' && (
                              <>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-slate-600">Institutions Served</span>
                                  <span className="text-xl font-bold text-emerald-600">40+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-slate-600">Learners Impacted</span>
                                  <span className="text-xl font-bold text-emerald-600">50K+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-slate-600">Policy Reforms</span>
                                  <span className="text-xl font-bold text-emerald-600">15+</span>
                                </div>
                              </>
                            )}
                            
                            {activeArea.id === 'real-estate' && (
                              <>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-slate-600">Portfolio Value</span>
                                  <span className="text-xl font-bold text-amber-600">$200M+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-slate-600">Markets Analyzed</span>
                                  <span className="text-xl font-bold text-amber-600">30+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-slate-600">ROI Average</span>
                                  <span className="text-xl font-bold text-amber-600">18%</span>
                                </div>
                              </>
                            )}
                            
                            {activeArea.id === 'leadership' && (
                              <>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-slate-600">Organizations</span>
                                  <span className="text-xl font-bold text-violet-600">12+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-slate-600">Team Members</span>
                                  <span className="text-xl font-bold text-violet-600">200+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-slate-600">Transformations</span>
                                  <span className="text-xl font-bold text-violet-600">8+</span>
                                </div>
                              </>
                            )}
                          </div>
                        </motion.div>

                        {/* Notable Achievement */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          className="relative p-6 rounded-2xl border overflow-hidden bg-white border-slate-200/30"
                        >
                          {/* Subtle decorative element */}
                          <div className={`absolute top-0 right-0 w-20 h-20 opacity-5 ${
                            activeArea.id === 'project-management' ? 'bg-blue-500' :
                            activeArea.id === 'education-consulting' ? 'bg-emerald-500' :
                            activeArea.id === 'real-estate' ? 'bg-amber-500' :
                            'bg-violet-500'
                          } rounded-full -translate-y-10 translate-x-10`} />
                          
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${
                                  activeArea.id === 'project-management' ? 'bg-blue-500' :
                                  activeArea.id === 'education-consulting' ? 'bg-emerald-500' :
                                  activeArea.id === 'real-estate' ? 'bg-amber-500' :
                                  'bg-violet-500'
                                }`} />
                                <div className={`w-1 h-1 rounded-full opacity-60 ${
                                  activeArea.id === 'project-management' ? 'bg-blue-500' :
                                  activeArea.id === 'education-consulting' ? 'bg-emerald-500' :
                                  activeArea.id === 'real-estate' ? 'bg-amber-500' :
                                  'bg-violet-500'
                                }`} />
                              </div>
                              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider opacity-90">
                                Notable Achievement
                              </h4>
                              <div className={`flex-1 h-px ${
                                activeArea.id === 'project-management' ? 'bg-gradient-to-r from-blue-200/30 to-transparent' :
                                activeArea.id === 'education-consulting' ? 'bg-gradient-to-r from-emerald-200/30 to-transparent' :
                                activeArea.id === 'real-estate' ? 'bg-gradient-to-r from-amber-200/30 to-transparent' :
                                'bg-gradient-to-r from-violet-200/30 to-transparent'
                              }`} />
                            </div>
                            
                            <div className={`w-8 h-0.5 rounded-full mb-4 ${
                              activeArea.id === 'project-management' ? 'bg-blue-500' :
                              activeArea.id === 'education-consulting' ? 'bg-emerald-500' :
                              activeArea.id === 'real-estate' ? 'bg-amber-500' :
                              'bg-violet-500'
                            }`} />
                            
                            <p className="text-sm text-slate-700 leading-relaxed font-medium">
                              {activeArea.id === 'project-management' 
                                ? "Led a $15M World Bank initiative achieving 40% efficiency gains and impacting 25,000+ beneficiaries across 5 countries."
                                : activeArea.id === 'education-consulting'
                                ? "Developed national education framework adopted by 12 countries, improving learning outcomes for 2M+ students."
                                : activeArea.id === 'real-estate'
                                ? "Identified undervalued markets generating 25%+ returns for institutional investors in emerging economies."
                                : "Orchestrated organizational transformation resulting in 60% productivity increase and 90% employee retention."
                              }
                            </p>
                          </div>
                        </motion.div>

                        {/* CTA: Schedule a Call */}
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.7 }}
                        >
                          {/* Accent Banner (CTA Primer) - Premium gradient-bordered callout */}
                          <div className="relative mt-5 mb-5">
                            <div className="rounded-xl p-[2px] bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                              <div className="rounded-[10px] bg-white/90 backdrop-blur-sm px-5 py-4">
                                <div className="flex items-center gap-3">
                                  <span className="inline-block h-6 w-1.5 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 shadow-[0_0_0_2px_rgba(255,255,255,0.6)_inset]" />
                                  <span className="font-semibold text-primary-800 text-lg lg:text-xl">                            <span className="relative z-10">Let&apos;s discuss your project goals.</span></span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Link
                            href="/contact"
                            className="inline-flex items-center rounded-lg bg-primary-600 px-5 py-3 text-white shadow-md transition-colors hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                            aria-label="Schedule a Call"
                          >
                            Schedule a Call
                            <CalendarDays className="ml-2 h-5 w-5" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent opacity-50" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}