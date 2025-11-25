'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import CountUp from 'react-countup'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({ 
  end, 
  suffix = '', 
  prefix = '', 
  duration = 2.5,
  className = ''
}: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <span ref={ref} className={className}>
      {hasAnimated ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          separator=","
          prefix={prefix}
          suffix={suffix}
          useEasing={true}
          easingFn={(t, b, c, d) => {
            // easeOutExpo
            return c * (-Math.pow(2, -10 * t / d) + 1) + b
          }}
        />
      ) : (
        <span>{prefix}{end}{suffix}</span>
      )}
    </span>
  )
}
