'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { usePathname } from 'next/navigation'

export default function SmoothScroll() {
  const pathname = usePathname()
  
  useEffect(() => {
    // Disable smooth scroll on projects page to prevent hanging
    if (pathname === '/projects') {
      return
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [pathname])

  return null
}
