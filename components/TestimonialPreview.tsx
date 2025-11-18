"use client"

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import Image from 'next/image'

type Testimonial = {
  quote: string
  highlights: string[]
  name: string
  role: string
  project: string
  imageSrc?: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Under her capable leadership, this multifaceted program has flourished. She fosters collaboration, strategic insight, and innovation, driving significant progress that empowers stakeholders across sectors.',
    highlights: ['collaboration', 'strategic', 'innovation'],
    name: 'Unyime Eyo',
    role: 'CHARTERED MANAGEMENT CONSULTANT',
    project: 'OGSTEP TEAM MEMBER',
  },
  {
    quote:
      'Mosun Owo-Odusi is an excellent administrator and team lead. She poses an innate ability to effectively navigate teams based on the peculiar strengths of the members that make up the team while helping them to overcome their weaknesses. When it comes to project management, she executes with precision, excellence and professionalism.',
    highlights: ['administrator', 'precision', 'professionalism'],
    name: 'Toyosi Babatunde',
    role: 'GLOBAL PARENTING COACH & AUTHOR',
    project: 'PROFESSIONAL RECOMMENDATION',
  },
  {
    quote:
      'Her strategic thinking and people-first leadership deliver measurable outcomes and sustainable change.',
    highlights: ['strategic', 'leadership', 'measurable'],
    name: 'Partner',
    role: 'PARTNER',
    project: 'EDUCATION INITIATIVE',
  },
  {
    quote:
      'Brings structure, empathy, and momentum—teams perform at their best under her guidance.',
    highlights: ['structure', 'empathy', 'momentum'],
    name: 'Director',
    role: 'DIRECTOR',
    project: 'PROGRAM DELIVERY',
  },
]

export default function TestimonialPreview() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Trusted by <span className="text-primary-600">Leaders</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What colleagues and partners say about working together
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-slate-100"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-primary-600" />
              </div>

              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="relative z-10 text-base lg:text-lg text-slate-700 leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex-shrink-0 ring-2 ring-primary-100">
                  <Image
                    src="/images/mosun-portrait.png"
                    alt={`${t.name} profile`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-900 text-sm truncate">{t.name}</div>
                  <div className="text-xs text-slate-600 truncate">{t.role}</div>
                  <div className="text-xs text-primary-600 truncate">{t.project}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            View All Testimonials
          </a>
        </motion.div>
      </div>
    </section>
  )
}