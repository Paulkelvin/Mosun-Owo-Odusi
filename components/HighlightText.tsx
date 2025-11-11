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
      {/* Highlight Strip with Simple Animation */}
      <motion.span
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: delay,
          ease: "easeOut" 
        }}
        className={`absolute inset-0 ${colorVariants[highlightColor]} rounded-lg -z-10 origin-left`}
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
        className="absolute inset-0 bg-black/5 rounded-lg blur-sm -z-20 transform translate-y-1"
      />
      
      {/* Text Content */}
      <span className="relative z-10 px-3 py-1">
        {children}
      </span>
    </span>
  )
}

export default HighlightText