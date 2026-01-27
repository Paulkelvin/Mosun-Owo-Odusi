'use client'

import { motion } from 'framer-motion'
import { Target, Home, CheckCircle, ArrowRight, Briefcase, Award, Users } from 'lucide-react'
import Link from 'next/link'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-50">
      {/* Hero */}
      <section className="section-padding mt-16 lg:mt-20">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
              <Briefcase className="text-primary-700" size={20} />
              <span className="text-primary-700 font-semibold">Professional Services</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Consulting Services <span className="gradient-text">Tailored to Your Needs</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              From strategic project management to real estate advisory, I provide end-to-end solutions that deliver measurable impact.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                icon: Target, 
                title: 'Project Management', 
                desc: 'End-to-end project delivery across diverse industries, ensuring results through structure, clarity, and strategic execution.',
                services: [
                  'Strategic Project Planning',
                  'Project Execution & Delivery',
                  'Stakeholder Management',
                  'Risk Assessment & Mitigation',
                  'Budget & Resource Management'
                ],
                color: 'from-blue-600 to-blue-400', 
                action: 'Contact Me', 
                link: '/contact#message' 
              },
              {
                icon: Briefcase,
                title: 'Entrepreneurship & Innovation',
                desc: 'Support to design, launch, and scale impactful ventures — from idea clarity to execution and systems that sustain growth.',
                services: [
                  'Clarifying vision, value proposition, and positioning',
                  'Structuring business models and revenue streams',
                  'Translating ideas into lean, testable pilots',
                  'Designing simple operating structures and roles',
                  'Mentoring founders on execution discipline'
                ],
                color: 'from-purple-600 to-indigo-400',
                action: 'Consult me',
                link: '/contact#message'
              },
              { 
                icon: Home, 
                title: 'Real Estate Advisory', 
                desc: 'Professional guidance on property acquisition, verification, investment decisions, and documentation — with seamless online payment for consultations.',
                services: [
                  'Property Verification',
                  'Investment Advisory',
                  'Site Inspection Support',
                  'Documentation Guidance',
                  'Risk Assessment'
                ],
                color: 'from-green-600 to-green-400', 
                action: 'Consult me', 
                link: '/contact#message' 
              },
              {
                icon: Users,
                title: 'Business Development',
                desc: 'Practical support to strengthen your pipeline, deepen relationships, and convert interest into repeat business.',
                services: [
                  'Mapping and prioritising ideal client segments',
                  'Designing outreach and follow-up routines that fit your context',
                  'Improving proposals and presentations for decision-makers',
                  'Creating simple dashboards to track leads and conversions',
                  'Aligning team roles to support sustainable growth'
                ],
                color: 'from-amber-600 to-orange-400',
                action: 'Contact Me',
                link: '/contact#message'
              }
              // Security Services card commented out - see full section below
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="card-modern group hover:shadow-large transition-all duration-500 border border-slate-100/80 bg-gradient-to-b from-white via-slate-50 to-slate-100/40"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                  {service.services && (
                    <ul className="space-y-2 mb-6">
                      {service.services.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link href={service.link} className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:gap-3 transition-all duration-300">
                    {service.action} <ArrowRight size={18} />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Security Services - Commented out (code preserved in git history)
      To restore: See commit history for full security packages section
      including Standard/Premium/Executive teams and bouncer gallery */}

      {/* Why Work With Me */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Proven Track Record <span className="gradient-text">Across Industries and Regions</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: 20, suffix: '+', label: 'Years Experience', icon: Award },
              { value: 10, suffix: '+', label: 'Projects Delivered', icon: Target },
              { value: 100, suffix: '%', label: 'Client Satisfaction', icon: Users }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="text-center card-modern hover:shadow-large transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4"><Icon className="text-white" size={32} /></div>
                  <div className="text-5xl font-bold gradient-text mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2.5} />
                  </div>
                  <p className="text-slate-700 font-medium text-lg">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-gold-50">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-slate-600 mb-8">Let&apos;s discuss how I can help you achieve your organizational goals through strategic consulting and expert project management.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#message" className="btn-primary inline-flex items-center gap-2">Get in Touch <ArrowRight size={20} /></Link>
              <Link href="/opportunities" className="btn-secondary inline-flex items-center gap-2">View Job Opportunities <ArrowRight size={20} /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
