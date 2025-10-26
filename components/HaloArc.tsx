'use client'

import { motion } from 'framer-motion'

interface HaloArcProps {
  variant?: 'hero' | 'about' | 'projects' | 'career' | 'testimonials' | 'expertise'
  className?: string
  children: React.ReactNode
}

const HaloArc = ({ variant = 'hero', className = '', children }: HaloArcProps) => {
  // Define different arc styles for different sections
  const arcVariants = {
    hero: {
      path: "M15 50 Q100 10 185 50",
      gradientId: "haloGradientHero",
      colors: [
        { offset: "0%", color: "#3B82F6", opacity: 0.7 },
        { offset: "50%", color: "#F59E0B", opacity: 0.9 },
        { offset: "100%", color: "#6366F1", opacity: 0.7 }
      ],
      strokeWidth: "2.5",
      viewBox: "0 0 200 60"
    },
    about: {
      path: "M25 45 Q100 15 175 40",
      gradientId: "haloGradientAbout",
      colors: [
        { offset: "0%", color: "#10B981", opacity: 0.6 },
        { offset: "100%", color: "#3B82F6", opacity: 0.8 }
      ],
      strokeWidth: "2",
      viewBox: "0 0 200 60"
    },
    projects: {
      path: "M30 40 L100 20 L170 40",
      gradientId: "haloGradientProjects",
      colors: [
        { offset: "0%", color: "#6366F1", opacity: 0.6 },
        { offset: "50%", color: "#8B5CF6", opacity: 0.8 },
        { offset: "100%", color: "#A855F7", opacity: 0.6 }
      ],
      strokeWidth: "2",
      viewBox: "0 0 200 60"
    },
    career: {
      path: "M40 45 Q100 25 160 45",
      gradientId: "haloGradientCareer",
      colors: [
        { offset: "0%", color: "#64748B", opacity: 0.7 },
        { offset: "100%", color: "#1E293B", opacity: 0.8 }
      ],
      strokeWidth: "1.5",
      viewBox: "0 0 200 60"
    },
    testimonials: {
      path: "M20 25 Q100 45 180 25",
      gradientId: "haloGradientTestimonials",
      colors: [
        { offset: "0%", color: "#F59E0B", opacity: 0.6 },
        { offset: "50%", color: "#EF4444", opacity: 0.7 },
        { offset: "100%", color: "#F59E0B", opacity: 0.6 }
      ],
      strokeWidth: "2",
      viewBox: "0 0 200 60"
    },
    expertise: {
      path: "M20 45 Q100 5 180 45",
      gradientId: "haloGradientExpertise",
      colors: [
        { offset: "0%", color: "#3B82F6", opacity: 0.6 },
        { offset: "50%", color: "#F59E0B", opacity: 0.8 },
        { offset: "100%", color: "#6366F1", opacity: 0.6 }
      ],
      strokeWidth: "2",
      viewBox: "0 0 200 60"
    }
  }

  const currentVariant = arcVariants[variant]

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Halo Arc */}
      <motion.div
        initial={{ opacity: 0, rotate: -2 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        whileHover={{ rotate: 1, x: 2 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="absolute -inset-x-8 -inset-y-4 pointer-events-none"
      >
        <svg
          className="w-full h-full opacity-15"
          viewBox={currentVariant.viewBox}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={currentVariant.gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              {currentVariant.colors.map((color, index) => (
                <stop
                  key={index}
                  offset={color.offset}
                  stopColor={color.color}
                  stopOpacity={color.opacity}
                />
              ))}
            </linearGradient>
            <filter id={`glow${variant.charAt(0).toUpperCase() + variant.slice(1)}`}>
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path
            d={currentVariant.path}
            stroke={`url(#${currentVariant.gradientId})`}
            strokeWidth={currentVariant.strokeWidth}
            fill="none"
            filter={`url(#glow${variant.charAt(0).toUpperCase() + variant.slice(1)})`}
          />
        </svg>
      </motion.div>
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

export default HaloArc