"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Quote, Star, ChevronDown, ChevronUp } from 'lucide-react'
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
      "It is my privilege to talk about Mosun Owo-Odusi, the remarkable Project Coordinator of the Ogun State Economic Transformation Project. Under her capable leadership, this multifaceted program, comprising four critical projects—Creating a Business Enabling Environment, Improving the Agricultural Value Chain, Skills Development, and Public Sector Reforms—has flourished. She oversees 4 Project Managers, more than 15 Specialist Consultants, and over 50 other Team Members. Under her leadership, she fosters collaboration, strategic insight, and innovation. Her deep commitment to achieving measurable results has driven significant progress, empowering stakeholders across sectors and contributing to the state's socio-economic growth.\n\nMosun stands out for her exceptional leadership qualities, guiding the team through complex challenges with confidence, vision, and resilience. She has demonstrated an unparalleled ability to align project objectives with overarching goals of the program, ensuring that every team member contributes meaningfully to the program's success. Her strategic acumen and unwavering dedication have not only steered the program to achieve its milestones but have also laid a foundation for sustainable development in the state.\n\nHer approach to leadership is collaborative and inclusive, fostering a work environment where every team member feels valued and empowered to bring their best ideas to the table. This has resulted in innovative solutions to the state's challenges in agriculture, public sector efficiency, and skills development. She is also deeply committed to improving the ease of doing business in Ogun State, directly contributing to increased investment opportunities and economic growth. Her contributions to Ogun State through the Ogun State Economic Transformation Project will leave a lasting impact for years to come.\n\nIn addition to her professional excellence, Mosun is an inspiring leader who invests in the personal and professional growth of her team. Her mentoring has significantly enhanced the capacity of project managers, consultants and team members, leading to improved project outcomes and a stronger, more resilient workforce.\n\nI am glad to have worked under her leadership and without hesitation, I strongly recommend Mosun for any recognition or assignment that values transformative leadership, strategic vision, and a commitment to socio-economic development.",
    highlights: ['collaboration', 'strategic', 'innovation'],
    name: 'Unyime Eyo',
    role: 'CHARTERED MANAGEMENT CONSULTANT',
    project: 'OGSTEP TEAM MEMBER',
    imageSrc: '/images/Unyime Eyo.jpeg',
  },
  {
    quote:
      'Mosun Owo-Odusi is an excellent administrator and team lead. She poses an innate ability to effectively navigate teams based on the peculiar strengths of the members that make up the team while helping them to overcome their weaknesses. When it comes to project management, she executes with precision, excellence and professionalism.',
    highlights: ['administrator', 'precision', 'professionalism'],
    name: 'Toyosi Babatunde',
    role: 'GLOBAL PARENTING COACH & AUTHOR',
    project: 'PROFESSIONAL COLLEAGUE',
    imageSrc: '/images/Toyosi_Babatunde.jpeg',
  },
]

export default function TestimonialPreview() {
  const [expandedMap, setExpandedMap] = useState<Record<number, boolean>>({})

  const toggleExpanded = (index: number) => {
    setExpandedMap((prev) => ({ ...prev, [index]: !prev[index] }))
  }

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
          {testimonials.map((t, i) => {
            const isExpanded = !!expandedMap[i]
            const isLong = t.quote.length > 250

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-slate-100 flex flex-col"
              >
                <div className="flex-1">
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                    <Quote className="w-16 h-16 text-primary-600" />
                  </div>

                  {/* Star rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <div className="relative mb-3">
                    <blockquote className={`relative z-10 text-base lg:text-lg text-slate-700 leading-relaxed ${
                      isExpanded ? 'whitespace-pre-line max-h-64 overflow-y-auto pr-3' : 'line-clamp-6'
                      }`}>
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    {!isExpanded && isLong && (
                      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
                    )}
                  </div>

                  {isLong && (
                    <button
                      type="button"
                      onClick={() => toggleExpanded(i)}
                      className="mb-6 flex items-center gap-1 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors z-20 relative"
                    >
                      {isExpanded ? (
                        <>See less <ChevronUp className="w-4 h-4" /></>
                      ) : (
                        <>See more <ChevronDown className="w-4 h-4" /></>
                      )}
                    </button>
                  )}
                </div>

                {/* Attribution */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex-shrink-0 ring-2 ring-primary-100">
                    <Image
                      src={t.imageSrc || '/images/mosun_owo-odusi_portrait.png'}
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
            )
          })}
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