'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {

  const scrollToExpertise = () => {
    const element = document.getElementById('expertise')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/mosun-portrait.png"
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

      {/* Excellence tag in top-right corner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-5 right-5 z-20"
      >
        <div
          className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-3 py-1.5 text-xs font-bold shadow-lg"
          style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)' }}
        >
          EXCELLENCE
        </div>
      </motion.div>

      {/* Centered content */}
  <div className="relative z-10 flex items-center justify-center px-6 min-h-[90vh] lg:min-h-screen">
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Driving Impact Through Strategic Leadership
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg lg:text-xl text-slate-200 mb-8"
          >
            Project Manager | Education Consultant | Real Estate Advisor
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              onClick={scrollToExpertise}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative btn-primary group overflow-hidden text-white"
              style={{ clipPath: 'polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-700 transform -skew-x-2" />
              <span className="relative z-10 flex items-center">
                Explore Achievements
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-slate-200/70 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-slate-200/80 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}