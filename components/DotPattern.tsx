"use client"

import { motion } from 'framer-motion'

interface DotPatternProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center-left' | 'center-right'
  color?: 'primary' | 'gold' | 'blue' | 'slate'
  size?: 'sm' | 'md' | 'lg'
  rows?: number
  cols?: number
  opacity?: number
}

const colorMap = {
  primary: 'bg-primary-400',
  gold: 'bg-gold-400',
  blue: 'bg-blue-400',
  slate: 'bg-slate-300'
}

const sizeMap = {
  sm: 'w-1 h-1',
  md: 'w-1.5 h-1.5',
  lg: 'w-2 h-2'
}

const positionMap = {
  'top-left': 'top-4 left-4 lg:top-8 lg:left-8',
  'top-right': 'top-4 right-4 lg:top-8 lg:right-8',
  'bottom-left': 'bottom-4 left-4 lg:bottom-8 lg:left-8',
  'bottom-right': 'bottom-4 right-4 lg:bottom-8 lg:right-8',
  'center-left': 'top-1/2 -translate-y-1/2 left-4 lg:left-8',
  'center-right': 'top-1/2 -translate-y-1/2 right-4 lg:right-8'
}

export default function DotPattern({
  position = 'top-right',
  color = 'primary',
  size = 'sm',
  rows = 5,
  cols = 5,
  opacity = 0.3
}: DotPatternProps) {
  const dots = []
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dots.push({ row, col, id: `${row}-${col}` })
    }
  }

  return (
    <div className={`absolute ${positionMap[position]} pointer-events-none z-10`}>
      <div className="grid gap-2 lg:gap-3">
        {Array.from({ length: rows }).map((_, rowIdx) => (
          <div key={rowIdx} className="flex gap-2 lg:gap-3">
            {Array.from({ length: cols }).map((_, colIdx) => (
              <motion.div
                key={`${rowIdx}-${colIdx}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: (rowIdx * cols + colIdx) * 0.03,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2 + (rowIdx * cols + colIdx) * 0.05
                }}
                className={`${sizeMap[size]} ${colorMap[color]} rounded-full`}
                style={{ opacity }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
