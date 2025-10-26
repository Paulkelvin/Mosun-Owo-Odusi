'use client'

import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Star, Quote, Linkedin, Twitter, Mail, Building2, Users, GraduationCap, TrendingUp, Play, Pause } from 'lucide-react'
import HighlightText from '@/components/HighlightText'
import Image from 'next/image'
import { useState, useRef } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Williams",
    title: "Director of Strategic Initiatives",
    company: "World Bank Group",
    image: "/api/placeholder/80/80",
    content: "Mosun's leadership on the OGSTEP initiative was exceptional. Her ability to coordinate across multiple countries while maintaining focus on measurable outcomes resulted in a 40% efficiency improvement that impacted over 25,000 beneficiaries.",
    rating: 5,
    category: "Project Management",
    type: "video",
    videoUrl: "/videos/testimonial-sarah-williams.mp4",
    videoPoster: "/images/testimonials/sarah-williams-poster.jpg",
    videoDuration: "1:45",
    social: {
      linkedin: "#",
      email: "sarah.williams@worldbank.org"
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Senior Education Consultant",
    company: "UNESCO",
    image: "/api/placeholder/80/80",
    content: "Working with Mosun on education policy reform was transformative. Her strategic insights helped us develop frameworks that were adopted by 12 countries, improving learning outcomes for over 2 million students.",
    rating: 5,
    category: "Education Consulting",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    title: "Chief Investment Officer",
    company: "Global Real Estate Partners",
    image: "/api/placeholder/80/80",
    content: "Mosun's market analysis and investment recommendations consistently outperformed expectations. Her identification of undervalued markets generated 25%+ returns for our institutional clients across emerging economies.",
    rating: 5,
    category: "Real Estate Advisory",
    social: {
      linkedin: "#",
      email: "elena@grep.com"
    }
  },
  {
    id: 4,
    name: "James Thompson",
    title: "CEO",
    company: "Development Dynamics Inc.",
    image: "/api/placeholder/80/80",
    content: "Mosun's leadership transformation program revolutionized our organizational culture. Under her guidance, we achieved a 60% productivity increase and 90% employee retention rate within 18 months.",
    rating: 5,
    category: "Leadership & Strategy",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "james@devdynamics.com"
    }
  },
  {
    id: 5,
    name: "Dr. Amara Okafor",
    title: "Regional Program Manager",
    company: "African Development Bank",
    image: "/api/placeholder/80/80",
    content: "Mosun's expertise in cross-cultural project management was invaluable. She successfully managed a $15M multi-country initiative, delivering results ahead of schedule and under budget.",
    rating: 5,
    category: "Project Management",
    social: {
      linkedin: "#",
      email: "a.okafor@afdb.org"
    }
  },
  {
    id: 6,
    name: "Lisa Park",
    title: "Partner",
    company: "Strategic Education Solutions",
    image: "/api/placeholder/80/80",
    content: "Mosun's capacity building programs transformed our approach to educational development. Her frameworks are now standard practice across our organization and have improved project success rates by 45%.",
    rating: 5,
    category: "Education Consulting",
    social: {
      linkedin: "#",
      twitter: "#"
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

// Video Testimonial Component
function VideoTestimonial({ testimonial, index }: { testimonial: any, index: number }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const categoryStyle = categoryColors[testimonial.category as keyof typeof categoryColors]
  const IconComponent = categoryIcons[testimonial.category as keyof typeof categoryIcons]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="bg-white rounded-3xl shadow-large p-8 lg:p-10 relative overflow-hidden lg:col-span-2"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50/30 to-gold-50/30 rounded-full -translate-y-16 translate-x-16"></div>
      
      <div className="relative z-10">
        {/* Featured Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-gradient-to-r from-gold-500 to-amber-500 text-white rounded-full text-xs font-bold">
              FEATURED VIDEO
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${categoryStyle}`}>
              <div className="flex items-center gap-1">
                <IconComponent className="w-3 h-3" />
                {testimonial.category}
              </div>
            </div>
          </div>
          <span className="text-xs text-slate-500 font-medium">{testimonial.videoDuration}</span>
        </div>

        {/* Video Container */}
        <div className="relative mb-6 rounded-2xl overflow-hidden bg-slate-100">
          <div className="aspect-video relative">
            {!isLoaded && (
              <div 
                className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center cursor-pointer"
                onClick={() => setIsLoaded(true)}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <Play className="w-6 h-6 text-primary-600 ml-1" />
                  </div>
                  <p className="text-slate-600 font-medium">Click to load video</p>
                  <p className="text-sm text-slate-500">Lightweight loading for better performance</p>
                </div>
              </div>
            )}
            
            {isLoaded && (
              <>
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster={testimonial.videoPoster}
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={testimonial.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={handlePlayPause}
                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-primary-600" />
                    ) : (
                      <Play className="w-6 h-6 text-primary-600 ml-1" />
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Testimonial Content */}
        <blockquote className="text-slate-700 leading-relaxed mb-6 text-lg">
          <Quote className="w-6 h-6 text-primary-200 mb-2" />
          &ldquo;{testimonial.content}&rdquo;
        </blockquote>

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
              {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-slate-900 text-lg">{testimonial.name}</h3>
            <p className="text-slate-600 font-medium">{testimonial.title}</p>
            <p className="text-primary-600 text-sm font-medium">{testimonial.company}</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {testimonial.social.linkedin && (
              <a 
                href={testimonial.social.linkedin}
                className="w-10 h-10 bg-slate-100 hover:bg-primary-100 rounded-xl flex items-center justify-center transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 text-slate-600 hover:text-primary-600" />
              </a>
            )}
            {testimonial.social.twitter && (
              <a 
                href={testimonial.social.twitter}
                className="w-10 h-10 bg-slate-100 hover:bg-primary-100 rounded-xl flex items-center justify-center transition-colors duration-200"
              >
                <Twitter className="w-5 h-5 text-slate-600 hover:text-primary-600" />
              </a>
            )}
            {testimonial.social.email && (
              <a 
                href={`mailto:${testimonial.social.email}`}
                className="w-10 h-10 bg-slate-100 hover:bg-primary-100 rounded-xl flex items-center justify-center transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-slate-600 hover:text-primary-600" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Banner */}
      <section className="relative h-96 lg:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/testimonial-banner.png"
            alt="Client Testimonials - Mosun Owo-Odusi"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Optional overlay if needed for text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Client <HighlightText highlightColor="gold"><span className="text-gold-300">Testimonials</span></HighlightText>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Discover what colleagues, clients, and partners say about working together to create meaningful impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-gradient-to-br from-white via-primary-50/20 to-gold-50/10">
        <div className="container-custom">

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => {
              // Render video testimonial component for video type
              if (testimonial.type === 'video') {
                return <VideoTestimonial key={testimonial.id} testimonial={testimonial} index={index} />
              }

              // Regular testimonial card
              const IconComponent = categoryIcons[testimonial.category as keyof typeof categoryIcons]
              const categoryStyle = categoryColors[testimonial.category as keyof typeof categoryColors]
              
              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-large p-8 lg:p-10 relative overflow-hidden"
                >
                  {/* Subtle background accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50/30 to-gold-50/30 rounded-full -translate-y-16 translate-x-16"></div>
                  
                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <Quote className="w-8 h-8 text-primary-200" />
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${categoryStyle}`}>
                        <div className="flex items-center gap-1">
                          <IconComponent className="w-3 h-3" />
                          {testimonial.category}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-slate-700 leading-relaxed mb-6 text-lg">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>

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
                        <p className="text-primary-600 text-sm font-medium">{testimonial.company}</p>
                      </div>

                      {/* Social Icons */}
                      <div className="flex items-center gap-2">
                        {testimonial.social.linkedin && (
                          <a 
                            href={testimonial.social.linkedin}
                            className="w-10 h-10 bg-slate-100 hover:bg-primary-100 rounded-xl flex items-center justify-center transition-colors duration-200"
                          >
                            <Linkedin className="w-5 h-5 text-slate-600 hover:text-primary-600" />
                          </a>
                        )}
                        {testimonial.social.twitter && (
                          <a 
                            href={testimonial.social.twitter}
                            className="w-10 h-10 bg-slate-100 hover:bg-primary-100 rounded-xl flex items-center justify-center transition-colors duration-200"
                          >
                            <Twitter className="w-5 h-5 text-slate-600 hover:text-primary-600" />
                          </a>
                        )}
                        {testimonial.social.email && (
                          <a 
                            href={`mailto:${testimonial.social.email}`}
                            className="w-10 h-10 bg-slate-100 hover:bg-primary-100 rounded-xl flex items-center justify-center transition-colors duration-200"
                          >
                            <Mail className="w-5 h-5 text-slate-600 hover:text-primary-600" />
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