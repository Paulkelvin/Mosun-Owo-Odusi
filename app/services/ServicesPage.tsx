'use client'

import { motion } from 'framer-motion'
import { Target, Shield, Home, CheckCircle, ArrowRight, Briefcase, Award, Users, TrendingUp, Lock, FileCheck, Calendar, Phone, Mail, User, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function ServicesPage() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', consultationType: '', date: '', time: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Payment integration coming soon! Your consultation request has been received.')
    setShowModal(false)
  }

  const scrollToSection = (href: string) => {
    if (href === '#consultation-modal') {
      setShowModal(true)
      return
    }
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-50">
      {/* Hero */}
      <section className="section-padding pt-32 lg:pt-40">
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
              From strategic project management to real estate advisory and premium event security, I provide end-to-end solutions that deliver measurable impact.
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
                link: '/contact' 
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
                action: 'Book a Consultation', 
                link: '#consultation-modal' 
              },
              { 
                icon: Shield, 
                title: 'Security Services', 
                desc: 'Reliable, trained, and professional security personnel for events, corporate functions, and private engagements.', 
                color: 'from-red-600 to-red-400', 
                action: 'View Security Packages', 
                link: '#security-packages' 
              },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} className="card-modern group hover:shadow-large transition-all duration-500">
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
                  <button onClick={() => scrollToSection(service.link)} className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:gap-3 transition-all duration-300">
                    {service.action} <ArrowRight size={18} />
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section id="security-packages" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Event Security & <span className="text-primary-400">Professional Bouncers</span></h2>
            <p className="text-lg text-slate-300">Empowering events with trained, disciplined, and well-presented security personnel who ensure safety, order, and a seamless experience for guests.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { name: 'Standard Security Team', features: ['2–3 bouncers', 'Basic crowd control', 'Event perimeter monitoring', 'Uniformed personnel'], recommended: false },
              { name: 'Premium Security Unit', features: ['4–6 elite bouncers', 'VVIP escort & access control', 'Queue management', 'Uniformed or event-theme-aligned dressing'], recommended: true },
              { name: 'Executive Event Protection', features: ['6+ bouncers', 'Full-event coverage', 'Guest-flow management', 'High-profile guest/VIP escort', 'Rapid-response support'], recommended: false }
            ].map((pkg, index) => (
              <motion.div key={pkg.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 ${pkg.recommended ? 'border-primary-400 shadow-large' : 'border-white/20'} hover:border-primary-400 transition-all duration-300`}>
                {pkg.recommended && <div className="absolute -top-4 left-1/2 -translate-x-1/2"><span className="px-4 py-1 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-bold rounded-full">RECOMMENDED</span></div>}
                <h3 className="text-2xl font-bold mb-6 mt-2">{pkg.name}</h3>
                <ul className="space-y-4 mb-8">{pkg.features.map((f) => (<li key={f} className="flex items-start gap-3"><CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={18} /><span className="text-slate-200">{f}</span></li>))}</ul>
                <div className="mb-6"><p className="text-sm text-slate-400 mb-2">Pricing</p><p className="text-2xl font-bold text-primary-400">Contact for Quote</p></div>
                <Link href="/contact" className="block w-full text-center px-6 py-3 bg-white/10 hover:bg-white/20 border-2 border-white/30 rounded-lg font-semibold transition-all duration-300">Request This Package</Link>
              </motion.div>
            ))}
          </div>

          {/* Bouncer Gallery */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-8">Our Professional Team</h3>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex-shrink-0 snap-center w-64 h-80 bg-white/10 rounded-2xl border-2 border-white/20 flex items-center justify-center">
                  <p className="text-slate-400">Security Personnel {i}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Proven Track Record <span className="gradient-text">Across Industries and Regions</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: 15, suffix: '+', label: 'Years Experience', icon: Award },
              { value: 50, suffix: '+', label: 'Projects Delivered', icon: Target },
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
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">Get in Touch <ArrowRight size={20} /></Link>
              <Link href="/opportunities" className="btn-secondary inline-flex items-center gap-2">View Job Opportunities <ArrowRight size={20} /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white z-10">
              <h3 className="text-2xl font-bold text-slate-900">Book a Consultation</h3>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><X size={24} /></button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2"><User className="inline mr-2" size={16} />Full Name</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="John Doe" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2"><Mail className="inline mr-2" size={16} />Email Address</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2"><Phone className="inline mr-2" size={16} />Phone Number</label>
                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="+234 XXX XXX XXXX" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2"><Home className="inline mr-2" size={16} />Consultation Type</label>
                <select required value={formData.consultationType} onChange={(e) => setFormData({...formData, consultationType: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="">Select consultation type</option>
                  <option value="property-verification">Property Verification</option>
                  <option value="investment-advisory">Investment Advisory</option>
                  <option value="site-inspection">Site Inspection</option>
                  <option value="documentation">Documentation Guidance</option>
                  <option value="risk-assessment">Risk Assessment</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2"><Calendar className="inline mr-2" size={16} />Preferred Date</label>
                  <input type="date" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Time</label>
                  <input type="time" required value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2"><Lock size={20} />Proceed to Secure Payment</button>
                <p className="text-sm text-slate-500 text-center mt-4">Payment integration coming soon. Your information is secure.</p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}
