'use client'

import { motion } from 'framer-motion'
import { Target, Shield, Home, CheckCircle, ArrowRight, Briefcase } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Target,
    title: 'Project Management',
    description: 'Strategic project planning, execution, and delivery with a focus on achieving organizational goals and maximizing efficiency.',
    features: [
      'Agile & Waterfall Methodologies',
      'Stakeholder Management',
      'Risk Assessment & Mitigation',
      'Resource Optimization',
      'Project Portfolio Management',
      'Change Management',
    ],
    color: 'from-blue-600 to-blue-400',
  },
  {
    icon: Shield,
    title: 'Security Services',
    description: 'Comprehensive security consulting to protect assets, mitigate risks, and ensure business continuity through robust security frameworks.',
    features: [
      'Security Risk Assessment',
      'Physical Security Planning',
      'Crisis Management',
      'Security Policy Development',
      'Vendor Security Management',
      'Compliance & Audit Support',
    ],
    color: 'from-red-600 to-red-400',
  },
  {
    icon: Home,
    title: 'Real Estate Advisory',
    description: 'Expert real estate consulting for strategic property investments, development projects, and portfolio management.',
    features: [
      'Property Investment Analysis',
      'Market Research & Feasibility Studies',
      'Development Project Management',
      'Portfolio Optimization',
      'Lease Negotiation',
      'Property Valuation',
    ],
    color: 'from-green-600 to-green-400',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-50">
      {/* Hero Section */}
      <section className="section-padding pt-32 lg:pt-40">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6"
            >
              <Briefcase className="text-primary-700" size={20} />
              <span className="text-primary-700 font-semibold">Professional Services</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Strategic <span className="gradient-text">Consulting Services</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Leveraging 15+ years of strategic leadership experience to deliver exceptional results 
              in project management, security consulting, and real estate advisory.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card-modern group hover:shadow-large transition-all duration-500"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>

          {/* Why Choose Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 card-modern bg-gradient-to-br from-primary-50 to-gold-50 border-2 border-primary-100"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Work With Me?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A proven track record of delivering results across multiple sectors and geographies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                <p className="text-slate-700 font-medium">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <p className="text-slate-700 font-medium">Projects Delivered</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <p className="text-slate-700 font-medium">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help you achieve your organizational goals through 
              strategic consulting and expert project management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/opportunities"
                className="btn-secondary inline-flex items-center gap-2"
              >
                View Career Opportunities
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
