'use client'

import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Star, Quote, Linkedin, Mail, Building2, Users, GraduationCap, TrendingUp, Play, Pause } from 'lucide-react'
import HighlightText from '@/components/HighlightText'
import Image from 'next/image'
import { useState, useRef } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Unyime Eyo",
    title: "Competitive Strategy Consultant",
    company: "ChMC - Professional LinkedIn Recommendation",
    image: "/api/placeholder/80/80",
    content: "Mosun is a very committed and focused person and team player. When she took over the OGSTEP coordination, the partnership and collaboration between team members improved significantly, and the implementation of the project moved faster. I enjoyed working under her leadership.",
    rating: 5,
    category: "Project Management",
    type: "video",
    videoUrl: "/videos/testimonial-sarah-williams.mp4",
    videoPoster: "/images/testimonials/sarah-williams-poster.jpg",
    videoDuration: "1:45",
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
          </div>
          <span className="text-xs text-slate-500 font-medium">{testimonial.videoDuration}</span>
        </div>

        {/* Video Container */}
        <div className="relative mb-6 rounded-2xl overflow-hidden bg-slate-100">
          <div className="aspect-[16/9] lg:aspect-[2/1] relative">
            {!isLoaded && (
              <div 
                className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center cursor-pointer"
                onClick={() => setIsLoaded(true)}
              >
                <div className="text-center">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/90 rounded-full flex items-center justify-center mb-3 lg:mb-4 mx-auto shadow-lg">
                    <Play className="w-4 h-4 lg:w-6 lg:h-6 text-primary-600 ml-1" />
                  </div>
                  <p className="text-slate-600 font-medium text-sm lg:text-base">Click to load video</p>
                  <p className="text-xs lg:text-sm text-slate-500">Lightweight loading for better performance</p>
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
                    className="w-12 h-12 lg:w-16 lg:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 lg:w-6 lg:h-6 text-primary-600" />
                    ) : (
                      <Play className="w-4 h-4 lg:w-6 lg:h-6 text-primary-600 ml-1" />
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Testimonial Content - Removed for video testimonials */}
        {/* Video testimonials focus on visual content */}

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
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary-900 py-20 lg:py-28">
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
              Discover what colleagues, clients, and partners say about working together to create meaningful impact across projects and industries.
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
              // Render video testimonial component for video type
              if (testimonial.type === 'video') {
                return <VideoTestimonial key={testimonial.id} testimonial={testimonial} index={index} />
              }

              // Regular testimonial card
              
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