'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Floating accent shape component for subtle micro-animations
function FloatingShape({ className, delay = 0, duration = 6 }: { className: string; delay?: number; duration?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.15, 0.3, 0.15],
        y: [0, -12, 0],
        scale: [1, 1.06, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export default function Hero() {
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
        {/* Lighter, warmer overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 30, 60, 0.45) 0%, rgba(30, 58, 95, 0.38) 50%, rgba(20, 45, 75, 0.42) 100%)',
          }}
        />
      </div>

      {/* Subtle floating accent shapes */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <FloatingShape
          className="absolute top-[15%] right-[10%] w-32 h-32 rounded-full border border-white/10 bg-white/5 blur-sm"
          delay={0}
          duration={7}
        />
        <FloatingShape
          className="absolute bottom-[20%] left-[8%] w-24 h-24 rounded-full border border-white/8 bg-white/4 blur-sm"
          delay={1.5}
          duration={8}
        />
        <FloatingShape
          className="absolute top-[40%] left-[20%] w-16 h-16 rounded-full border border-white/6 bg-white/3"
          delay={3}
          duration={6}
        />
        {/* Horizontal accent line */}
        <motion.div
          className="absolute top-[50%] left-0 h-px w-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.06) 70%, transparent 100%)',
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 2, delay: 1 }}
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
          {/* Subtle label chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">Public Sector Reform Leader</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
          >
            Delivering Large-Scale Reform.{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
            >
              Building Institutions That Last.
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base lg:text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Senior programme leader with three decades across government reform, human capital development, and institutional transformation. Open for board advisory and multilateral mandates.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-lg border border-white/25 text-white text-sm font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
              >
                About Me
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade removed - clean edge */}
    </section>
  )
}
