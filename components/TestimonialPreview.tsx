"use client"

import { motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

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
      'A visionary leader who brings clarity, coordination, and compassion to every project.',
    highlights: ['clarity', 'coordination', 'compassion'],
    name: 'Colleague',
    role: 'COLLEAGUE',
    project: 'DEVELOPMENT PROJECT',
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
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [autoKey, setAutoKey] = useState(0) // bump to reset autoplay after interactions

  // Autoplay timer ref
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const prefersReducedMotion = useRef(false)

  // Listen for prefers-reduced-motion changes
  useEffect(() => {
    if (typeof window === 'undefined') return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      prefersReducedMotion.current = media.matches
    }
    update()
    if (media.addEventListener) {
      media.addEventListener('change', update)
      return () => media.removeEventListener('change', update)
    } else {
      // Safari fallback
      // @ts-ignore deprecated
      media.addListener(update)
      return () => {
        // @ts-ignore deprecated
        media.removeListener(update)
      }
    }
  }, [])

  // Autoplay effect
  useEffect(() => {
    // Clear any existing interval
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }

    if (!prefersReducedMotion.current && !isHovered) {
      autoplayRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % testimonials.length)
      }, 6500)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
        autoplayRef.current = null
      }
    }
  }, [isHovered, autoKey])

  const resetAutoplay = () => setAutoKey((k) => k + 1)

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  // Swipe detection thresholds
  const swipeConfidence = (offset: number, velocity: number) => Math.abs(offset) * velocity
  const swipePowerThreshold = 4000

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-primary-50/30 to-slate-100 relative overflow-hidden">
      {/* Background graphics retained for section break */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bgShape1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748B" stopOpacity="0.08"/>
              <stop offset="100%" stopColor="#475569" stopOpacity="0.04"/>
            </linearGradient>
            <linearGradient id="bgShape2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.06"/>
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.03"/>
            </linearGradient>
          </defs>
          <polygon points="0,200 300,150 450,350 200,450 50,300" fill="url(#bgShape1)" opacity="0.6"/>
          <polygon points="800,100 1200,80 1150,300 900,400 700,250" fill="url(#bgShape2)" opacity="0.5"/>
        </svg>
      </div>

      <div className="container-custom relative">
        <div className="max-w-6xl mx-auto">
          {/* Carousel Shell */}
          <div className="relative">
            {/* Slides viewport */}
            <div
              className="overflow-hidden rounded-2xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="flex"
                animate={{ x: `-${index * 100}%` }}
                transition={{ type: 'tween', duration: 0.6, ease: 'easeInOut' }}
                drag="x"
                dragElastic={0.2}
                onDragEnd={(_e, info) => {
                  const swipe = swipeConfidence(info.offset.x, info.velocity.x)
                  if (info.offset.x < -50 || swipe < -swipePowerThreshold) {
                    next()
                    resetAutoplay()
                  } else if (info.offset.x > 50 || swipe > swipePowerThreshold) {
                    prev()
                    resetAutoplay()
                  }
                }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="min-w-full py-12 lg:py-16 px-4 lg:px-8">
                    <div className="relative max-w-5xl mx-auto text-center lg:text-left">
                      {/* Background Quote Icon - Large, Gold */}
                      <div className="absolute -top-2 left-4 lg:left-12 opacity-25 pointer-events-none">
                        <Quote className="w-28 h-28 lg:w-36 lg:h-36" style={{ color: '#F0C419' }} />
                      </div>

                      {/* Quote */}
                      <blockquote className="relative z-10 text-2xl lg:text-4xl font-medium text-slate-800 italic leading-relaxed mb-10 pt-12 lg:pt-16">
                        {t.quote.split(/(clarity|coordination|compassion|strategic|leadership|measurable|structure|empathy|momentum)/gi).map((part, idx) => (
                          t.highlights.map(h => h.toLowerCase()).includes(part.toLowerCase()) ? (
                            <em key={idx} className="text-primary-700 font-semibold not-italic">{part}</em>
                          ) : (
                            <span key={idx}>{part}</span>
                          )
                        ))}
                      </blockquote>

                      {/* Attribution with Photo */}
                      <div className="flex flex-col lg:flex-row items-center lg:items-center lg:gap-6 gap-4">
                        {/* Circular Profile Image - using hero image for all slides */}
                        <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full shadow-lg ring-2 ring-white/60 overflow-hidden bg-slate-200 flex-shrink-0">
                          <Image
                            src="/images/mosun-portrait.png"
                            alt={`${t.name} profile`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 64px, 80px"
                            priority={false}
                          />
                        </div>

                        {/* Attribution Text with explicit spacing */}
                        <div className="flex flex-col items-center lg:items-start ml-3 lg:ml-4">
                          <cite className="not-italic text-slate-700 text-sm lg:text-base">
                            — <span className="font-semibold" style={{ color: '#F0C419' }}>{t.role}</span>, <span className="text-slate-500">{t.project}</span>
                          </cite>
                          <div className="mt-2 w-20 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Arrows */}
            <button
              aria-label="Previous testimonial"
              onClick={() => { prev(); resetAutoplay() }}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur px-3 py-3 shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => { next(); resetAutoplay() }}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur px-3 py-3 shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>

            {/* Pagination Dots */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => { setIndex(i); resetAutoplay() }}
                  className="h-2.5 w-2.5 rounded-full transition-transform"
                  style={{
                    backgroundColor: i === index ? '#F0C419' : 'rgba(100,116,139,0.35)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}