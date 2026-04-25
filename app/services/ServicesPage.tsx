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
                title: 'Development Programme Leadership', 
                desc: 'Coordination and delivery of multisectoral, donor-funded, and state-level reform programmes.',
                services: [
                  'Stakeholder management across ministries, multilaterals, and private sector',
                  'Results-based financing and Disbursement-Linked Results (DLRs)',
                  'Institutional reform and capacity building',
                  'Large-scale project planning and execution'
                ],
                color: 'from-blue-600 to-blue-400', 
                action: 'Contact Me', 
                link: '/contact#message' 
              },
              {
                icon: Users,
                title: 'Institutional & Education Reform Advisory',
                desc: 'School and institutional turnaround, curriculum development, and skills alignment to economic outcomes.',
                services: [
                  'School and institutional turnaround strategies',
                  'Curriculum and skills development',
                  'Advisory to education entrepreneurs and public institutions',
                  'Teacher capacity building and mentoring'
                ],
                color: 'from-purple-600 to-indigo-400',
                action: 'Consult me',
                link: '/contact#message'
              }
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


          {/* Ventures Section */}
          <div className="mt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Ventures</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                My personal business lines and long-standing enterprises, demonstrating a track record of building and sustaining value.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="bg-white p-6 rounded-2xl shadow-soft border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4"><Briefcase size={24} /></div>
                <h3 className="text-xl font-bold mb-2">Amville Consults</h3>
                <p className="text-sm text-slate-600">Educational consulting, training, and strategic advisory for schools and educational institutions.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="bg-white p-6 rounded-2xl shadow-soft border border-slate-100">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4"><Award size={24} /></div>
                <h3 className="text-xl font-bold mb-2">Amville School</h3>
                <p className="text-sm text-slate-600">Founder and Alumni capacity. A premier educational institution focused on excellence and holistic child development.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="bg-white p-6 rounded-2xl shadow-soft border border-slate-100">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4"><Home size={24} /></div>
                <h3 className="text-xl font-bold mb-2">Divilux Realty</h3>
                <p className="text-sm text-slate-600">Professional guidance on property acquisition, verification, investment decisions, and documentation.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Scale, Impact, <span className="gradient-text">and Documented Results</span></h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {[
              { value: 205, prefix: '$', suffix: 'M+', label: 'World Bank Portfolio', icon: Briefcase },
              { value: 72, suffix: 'K+', label: 'Direct Beneficiaries', icon: Users },
              { value: 160, suffix: 'K+', label: 'Farmers Registered', icon: Target },
              { value: 15, suffix: 'K+', label: 'Certificates of Occupancy', icon: Home },
              { value: 30, suffix: '+', label: 'Years of Leadership', icon: Award }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="text-center card-modern hover:shadow-large transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4"><Icon className="text-white" size={32} /></div>
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} duration={2.5} />
                  </div>
                  <p className="text-slate-700 font-medium text-sm lg:text-base">{stat.label}</p>
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
            <p className="text-lg text-slate-600 mb-8">Let&apos;s discuss how I can support your organisation through programme leadership, institutional reform, or board advisory.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#message" className="btn-primary inline-flex items-center gap-2">Get in Touch <ArrowRight size={20} /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
