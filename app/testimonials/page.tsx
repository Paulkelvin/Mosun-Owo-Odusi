'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Linkedin, Building2, Users, GraduationCap, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Unyime Eyo",
    title: "Competitive Strategy Consultant",
    company: "ChMC - Professional LinkedIn Recommendation",
    image: "/api/placeholder/80/80",
    content: "Under her capable leadership, this multifaceted program has flourished. She fosters collaboration, strategic insight, and innovation, driving significant progress that empowers stakeholders across sectors.",
    rating: 5,
    category: "Project Management",
    social: {
      linkedin: "https://www.linkedin.com/in/unyimeabasieyo"
    }
  },
  {
    id: 2,
    name: "Toyosi Babatunde",
    title: "Global Parenting Coach & Author",
    company: "Professional LinkedIn Recommendation",
    image: "/api/placeholder/80/80",
    content: "Mosun Owo-Odusi is an excellent administrator and team lead. She poses an innate ability to effectively navigate teams based on the peculiar strengths of the members that make up the team while helping them to overcome their weaknesses. When it comes to project management, she executes with precision, excellence and professionalism. She is a leader per excellence and has my unreserved recommendation.",
    rating: 5,
    category: "Leadership & Strategy",
    social: {
      linkedin: "https://www.linkedin.com/in/toyosi-babatunde-91031637"
    }
  },
  {
    id: 4,
    name: "Kehinde Victoria Omojola",
    title: "Development Consultant",
    company: "Professional Recommendation",
    image: "/api/placeholder/80/80",
    content: "I have known Mosun Owo Odusi for over two decades, and during that time she has consistently demonstrated exceptional professionalism, resilience, and leadership. We first became colleagues at Grange School Lagos in 2000, and our friendship began when we were jointly tasked with training our colleagues on the British Curriculum. At the time, the school was transitioning from a mixed Nigerian-British model to a fully British-based curriculum. This required significant self-development on our part-researching the curriculum structure, understanding its pedagogical expectations, and then delivering effective training to our peers. Mosun approached this challenge with characteristic diligence, intellectual curiosity, and professionalism, setting the tone for the many impactful collaborations we would go on to share.\n\nIn 2002, I had the privilege of taking over her class when she was appointed Deputy Head, a role she stepped into with confidence and competence. Our professional relationship continued to grow, and I later worked with her to train her teachers and managed a short-term consultancy at Amville School, where her openness to innovation and commitment to school improvement made the work both meaningful and productive. She also joined me on several Sycamore Edge School Improvement Projects, contributing her insight, discipline, and deep understanding of educational systems.\n\nMosun is diligent, highly focused, and results-driven. She brings clarity and purpose to every assignment, and she has a remarkable ability to remain steady and solution-oriented even in challenging situations. Her resilience is one of her greatest strengths-she consistently rises to meet complex demands with calm confidence and strategic thinking.\n\nHer dedication has been evident in the many projects she went on to lead at Ogun State, where her leadership, project management skills, and commitment to educational development made a significant impact. Mosun is the kind of professional who elevates every team she joins and strengthens every system she touches.\n\nI wholeheartedly recommend Mosun Owo Odusi for any leadership, educational development, or project management role. She brings experience, integrity, and an unwavering commitment to excellence-qualities that make her an asset in any environment.",
    rating: 5,
    category: "Education Consulting",
    social: {
      linkedin: "https://www.linkedin.com/in/kehinde-victoria-omojola-3a65b516/"
    }
  },
  {
    id: 3,
    name: "Adebola Ogundimu",
    title: "Chief Investment Officer",
    company: "Global Real Estate Partners",
    image: "/api/placeholder/80/80",
    content: "Mosun's market analysis and investment recommendations consistently outperformed expectations. Her identification of undervalued markets generated 25%+ returns for our institutional clients across emerging economies.",
    rating: 5,
    category: "Real Estate Advisory",
    social: {
      linkedin: "#"
    }
  }
]

const categoryIcons = {
  "Project Management": Building2,
  "Education Consulting": GraduationCap,
  "Real Estate Advisory": TrendingUp,
  "Leadership & Strategy": Users
}

const categoryColors = {
  "Project Management": "text-blue-600 bg-blue-100",
  "Education Consulting": "text-emerald-600 bg-emerald-100",
  "Real Estate Advisory": "text-amber-600 bg-amber-100",
  "Leadership & Strategy": "text-violet-600 bg-violet-100"
}

export default function Testimonials() {
  const [expandedMap, setExpandedMap] = useState<Record<number, boolean>>({})

  const toggleExpanded = (id: number) => {
    setExpandedMap((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const contentPreviewLength = 620

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary-900 py-20 lg:py-28 mt-16 lg:mt-20">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top right accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-800 rounded-full -translate-y-48 translate-x-48 opacity-50"></div>
          {/* Bottom left accent */}
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-800 rounded-full translate-y-40 -translate-x-40 opacity-30"></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 font-medium mb-6 border border-white/20"
            >
              <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
              <span>Trusted by Industry Leaders</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Client Testimonials
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed"
            >
              Discover what colleagues, clients, and partners say about working together.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-gradient-to-br from-white via-primary-50/20 to-gold-50/10">
        <div className="w-full px-4 sm:px-6 lg:px-6">

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => {
              const isExpanded = !!expandedMap[testimonial.id]
              const isLong = testimonial.content.length > contentPreviewLength
              const visibleContent =
                isLong && !isExpanded
                  ? `${testimonial.content.slice(0, contentPreviewLength).trim()}...`
                  : testimonial.content
              
              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-large p-8 lg:p-10 relative overflow-hidden min-h-[620px] h-full flex flex-col"
                >
                  {/* Subtle background accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50/30 to-gold-50/30 rounded-full -translate-y-16 translate-x-16"></div>
                  
                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <Quote className="w-8 h-8 text-primary-200" />
                      <div className="inline-flex items-center gap-2">
                        {(() => {
                          const Icon = categoryIcons[testimonial.category as keyof typeof categoryIcons]
                          return Icon ? (
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[testimonial.category as keyof typeof categoryColors]}`}>
                              <Icon className="w-3.5 h-3.5" />
                              {testimonial.category}
                            </span>
                          ) : null
                        })()}
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="mb-6 h-[260px]">
                      <blockquote className={`text-slate-700 leading-relaxed text-lg whitespace-pre-line h-full ${isExpanded ? 'overflow-y-auto pr-2' : 'overflow-hidden'}`}>
                        &ldquo;{visibleContent}&rdquo;
                      </blockquote>
                    </div>

                    {isLong && (
                      <button
                        type="button"
                        onClick={() => toggleExpanded(testimonial.id)}
                        className="mb-6 self-start text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
                      >
                        {isExpanded ? 'See less' : 'See more'}
                      </button>
                    )}

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                      ))}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-gold-100 rounded-2xl flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-gold-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 text-lg">{testimonial.name}</h3>
                        <p className="text-slate-600 font-medium">{testimonial.title}</p>
                      </div>

                      {/* Social Icons */}
                      <div className="flex items-center gap-2">
                        {testimonial.social.linkedin && (
                          <a 
                            href={testimonial.social.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 bg-slate-100 hover:bg-primary-100 rounded-xl flex items-center justify-center transition-colors duration-200"
                          >
                            <Linkedin className="w-5 h-5 text-slate-600 hover:text-primary-600" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-primary-700 to-primary-600 rounded-3xl p-8 lg:p-12 text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Create Impact Together?
              </h2>
              <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                Join these satisfied clients and let&apos;s work together to achieve your strategic goals.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}