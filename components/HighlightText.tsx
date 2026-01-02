'use client'

import { motion } from 'framer-motion'

interface HighlightTextProps {
  children: React.ReactNode
  className?: string
  highlightColor?: 'blue' | 'gold' | 'emerald' | 'purple' | 'gray'
  delay?: number
}

const HighlightText = ({ 
  children, 
  className = '', 
  highlightColor = 'gold',
  delay = 0 
}: HighlightTextProps) => {
  const colorVariants = {
    blue: 'bg-gradient-to-r from-blue-200/25 via-blue-300/30 to-blue-200/25',
    gold: 'bg-gradient-to-r from-gold-200/25 via-gold-300/30 to-gold-200/25',
    emerald: 'bg-gradient-to-r from-emerald-200/25 via-emerald-300/30 to-emerald-200/25',
    purple: 'bg-gradient-to-r from-violet-200/25 via-violet-300/30 to-violet-200/25',
    gray: 'bg-gradient-to-r from-slate-200/25 via-slate-300/30 to-slate-200/25'
  }

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Highlight underline with simple animation */}
      <motion.span
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: delay,
          ease: "easeOut" 
        }}
        className={`absolute left-1/2 bottom-1 h-2 w-3/4 -translate-x-1/2 ${colorVariants[highlightColor]} rounded-full -z-10 origin-center`}
      />
      
      {/* Optional soft shadow for depth */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: delay + 0.1,
          ease: "easeOut" 
        }}
        className="absolute left-1/2 bottom-0 h-3 w-4/5 -translate-x-1/2 bg-black/5 rounded-full blur-md -z-20"
      />
      
      {/* Text Content */}
      <span className="relative z-10 px-3 py-1">
        {children}
      </span>
    </span>
  )
}

export default HighlightText