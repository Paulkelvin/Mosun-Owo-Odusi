'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
// DotPattern intentionally not used here anymore to keep the hero clean

export default function Hero() {

  const scrollToExpertise = () => {
    const element = document.getElementById('expertise')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden" style={{ height: 'calc(100vh - 64px)', minHeight: 'calc(100vh - 64px)' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
	      src="/images/mosun_owo-odusi_portrait.png"
          alt="Mosun Owo-Odusi - Professional Portrait"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(29, 44, 76, 0.55)' }}
        />
      </div>

      {/* Centered content */}
  <div className="relative z-10 flex items-center justify-center px-6 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
	      className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-3"
          >
	    <span className="inline-block">Leading Change, Improving Lives</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
              className="text-lg lg:text-xl text-slate-200 mb-4"
          >
            Project Management | Education Consultancy | Real Estate Advisory
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary group text-white shadow-xl"
              >
                <span className="relative z-10 flex items-center">
                  Explore Achievements
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
    </section>
  )
}