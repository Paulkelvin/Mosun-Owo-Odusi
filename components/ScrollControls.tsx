"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown, ArrowDownRight } from "lucide-react"

interface ScrollControlsProps {
  showNextSection?: boolean
  nextSectionId?: string
  sections?: string[]
}

const ScrollControls = ({ showNextSection = false, nextSectionId, sections }: ScrollControlsProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down')

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      // Only show when user has scrolled a bit and page is reasonably tall
      setIsVisible(scrollY > 200 && docHeight > 500)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    if (typeof window === "undefined") return
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToBottom = () => {
    if (typeof window === "undefined") return
    const docHeight = document.documentElement.scrollHeight
    window.scrollTo({ top: docHeight, behavior: "smooth" })
  }

  const scrollToNextSection = () => {
    if (!nextSectionId || typeof window === "undefined") return
    const el = document.getElementById(nextSectionId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const scrollToSectionId = (id: string) => {
    if (typeof window === "undefined") return
    const el = document.getElementById(id)
    if (!el) return
    const headerOffset = 80
    const elementPosition = el.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - headerOffset
    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
  }

  useEffect(() => {
    if (typeof window === "undefined" || !sections || sections.length === 0) return

    const handleSectionScroll = () => {
      const headerOffset = 120
      const distances: { index: number; distance: number }[] = []

      sections.forEach((id, index) => {
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        const distance = Math.abs(rect.top - headerOffset)
        distances.push({ index, distance })
      })

      if (!distances.length) return

      let closest = distances[0]
      for (const entry of distances) {
        if (entry.distance < closest.distance) {
          closest = entry
        }
      }

      setActiveSectionIndex(prev => (prev !== closest.index ? closest.index : prev))

      // At the very top, default direction is "down"; at the very bottom, "up".
      if (closest.index === 0 && scrollDirection !== 'down') {
        setScrollDirection('down')
      } else if (closest.index === sections.length - 1 && scrollDirection !== 'up') {
        setScrollDirection('up')
      }
    }

    handleSectionScroll()
    window.addEventListener("scroll", handleSectionScroll)
    return () => window.removeEventListener("scroll", handleSectionScroll)
  }, [sections, scrollDirection])

  const handleDynamicMiddleClick = () => {
    if (!sections || sections.length === 0) return
    const lastIndex = sections.length - 1

    if (scrollDirection === 'down') {
      // Move down until we hit the last section, then flip direction
      if (activeSectionIndex < lastIndex) {
        const nextIndex = activeSectionIndex + 1
        scrollToSectionId(sections[nextIndex])
        setActiveSectionIndex(nextIndex)
        if (nextIndex === lastIndex) {
          setScrollDirection('up')
        }
      } else if (activeSectionIndex === lastIndex && lastIndex > 0) {
        const prevIndex = lastIndex - 1
        scrollToSectionId(sections[prevIndex])
        setActiveSectionIndex(prevIndex)
        setScrollDirection('up')
      }
    } else {
      // scrollDirection === 'up'
      // Move up until we reach the top, then flip direction
      if (activeSectionIndex > 0) {
        const prevIndex = activeSectionIndex - 1
        scrollToSectionId(sections[prevIndex])
        setActiveSectionIndex(prevIndex)
        if (prevIndex === 0 && sections.length > 1) {
          setScrollDirection('down')
        }
      } else if (activeSectionIndex === 0 && lastIndex > 0) {
        const nextIndex = 1
        scrollToSectionId(sections[nextIndex])
        setActiveSectionIndex(nextIndex)
        setScrollDirection('down')
      }
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed right-4 bottom-6 z-40 flex flex-col items-center gap-1 text-slate-200 sm:right-6 sm:bottom-8"
        >
          <div className="rounded-2xl bg-slate-900/65 border border-slate-700/80 backdrop-blur-md px-1.5 py-1 flex flex-col items-center gap-1.5">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 hover:bg-slate-700/90 text-slate-100 transition-colors text-xs"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-4 w-4" />
            </button>

            {sections && sections.length > 0 ? (
              <button
                type="button"
                onClick={handleDynamicMiddleClick}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/60 hover:bg-slate-700/80 text-slate-100 transition-colors text-[11px]"
                aria-label={scrollDirection === 'up' ? "Scroll to previous section" : "Scroll to next section"}
              >
                {scrollDirection === 'up' ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
            ) : (
              showNextSection && nextSectionId && (
                <button
                  type="button"
                  onClick={scrollToNextSection}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/60 hover:bg-slate-700/80 text-slate-100 transition-colors text-[11px]"
                  aria-label="Scroll to next section"
                >
                  <ArrowDownRight className="h-4 w-4" />
                </button>
              )
            )}

            <button
              type="button"
              onClick={scrollToBottom}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 hover:bg-slate-700/90 text-slate-100 transition-colors text-xs"
              aria-label="Scroll to bottom"
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollControls
