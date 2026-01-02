'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock, Globe, Send, MessageSquare, User, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { toast } from 'sonner'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative h-96 lg:h-[500px] overflow-hidden mt-16 lg:mt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
	        src="/images/mosun_owo-odusi_portrait.png"
            alt="Mosun Owo-Odusi - Contact"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for readability */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(29, 44, 76, 0.7)' }}
          />
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
              Let&apos;s <span className="text-gold-300">Connect</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-8">
              Ready to discuss your next project? Let&apos;s create meaningful impact together.
            </p>
            
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/mosun-owo-odusi-mba-pmp-736a1419" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gold-300 transition-colors p-3 rounded-full hover:bg-white/10"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="message" className="section-padding bg-gradient-to-br from-white via-primary-50/20 to-gold-50/10">
        <div className="w-full">
          {/* Contact Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-32 max-w-none mx-auto px-4 sm:px-6 lg:px-6">
            
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-large p-3 sm:p-4 lg:p-10 relative overflow-hidden self-start"
            >
              {/* Subtle color accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/30 to-gold-100/30 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gold-100/20 to-primary-100/20 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                      Send a Message
                    </h2>
                  </div>
                  <p className="text-slate-600">
                    Share your project details and I&apos;ll get back to you within 24 hours.
                  </p>
                </div></div>

              <form
          className="space-y-6"
          onSubmit={async (e) => {
            e.preventDefault()
            if (isSubmitting) return
            setIsSubmitting(true)
            const form = e.currentTarget as HTMLFormElement
            const formData = new FormData(form)
            const body = {
              name: formData.get('name'),
              email: formData.get('email'),
              subject: formData.get('subject'),
              message: formData.get('message'),
            }
            try {
              const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
              })
              const data = await res.json().catch(() => null)
              if (res.ok && data?.ok) {
                form.reset()
                toast.success('Message sent successfully', {
                  description: "Thank you for reaching out. I'll get back to you within 24 hours.",
                })
              } else {
                const errorMessage = data?.error || 'Something went wrong while sending your message.'
                toast.error('Unable to send message', {
                  description: errorMessage,
                })
              }
            } catch (err) {
              toast.error('Network error', {
                description: 'Please check your connection and try again.',
              })
            } finally {
              setIsSubmitting(false)
            }
          }}
        >
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-500 w-5 h-5" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gradient-to-r from-slate-50/50 to-primary-50/20 hover:from-primary-50/30 hover:to-gold-50/20"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gradient-to-r from-slate-50/50 to-primary-50/20 hover:from-primary-50/30 hover:to-gold-50/20"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gradient-to-r from-slate-50/50 to-primary-50/20 hover:from-primary-50/30 hover:to-gold-50/20"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="project-management">Project Management Consulting</option>
                    <option value="education-consulting">Education Consulting</option>
                    <option value="real-estate">Real Estate Advisory</option>
                    <option value="collaboration">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-primary-500 w-5 h-5" />
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gradient-to-r from-slate-50/50 to-primary-50/20 hover:from-primary-50/30 hover:to-gold-50/20 resize-none"
                      placeholder="Tell me about your project, goals, and how I can help..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-700 to-primary-600 text-white py-4 px-6 rounded-xl font-semibold shadow-medium hover:shadow-large transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>

            {/* Right Column - Contact Info & Availability */}
            <div className="space-y-8">
              
              {/* Contact Information Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-primary-700 to-primary-600 rounded-3xl p-3 sm:p-4 lg:p-10 text-white"
              >
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-gold-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/mosun-owo-odusi-mba-pmp-736a1419" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary-100 hover:text-white transition-colors"
                      >
                        Connect with me on LinkedIn
                      </a>
                      <p className="text-sm text-primary-200 mt-1">Professional networking</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-gold-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-primary-100">Global Remote</p>
                      <p className="text-sm text-primary-200 mt-1">Available worldwide</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Availability Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-3xl shadow-large p-3 sm:p-4 lg:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-gold-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Availability</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="font-medium text-slate-900">Response Time</p>
                      <p className="text-sm text-slate-600">Within 24 hours on business days</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="font-medium text-slate-900">Time Zone</p>
                      <p className="text-sm text-slate-600">Flexible scheduling across time zones</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Services Overview */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-gold-50 to-amber-50 rounded-3xl p-4 sm:p-6 lg:p-8 border border-gold-200/50"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Areas of Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/80 rounded-xl">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                    </div>
                    <p className="text-sm font-medium text-slate-900">Project Management</p>
                  </div>
                  <div className="text-center p-4 bg-white/80 rounded-xl">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-emerald-600 rounded-sm"></div>
                    </div>
                    <p className="text-sm font-medium text-slate-900">Education Consulting</p>
                  </div>
                  <div className="text-center p-4 bg-white/80 rounded-xl">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-amber-600 rounded-sm"></div>
                    </div>
                    <p className="text-sm font-medium text-slate-900">Real Estate Advisory</p>
                  </div>
                  
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}