"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown, ArrowDownRight } from "lucide-react"

interface ScrollControlsProps {
  showNextSection?: boolean
  nextSectionId?: string
}

const ScrollControls = ({ showNextSection = false, nextSectionId }: ScrollControlsProps) => {
  const [isVisible, setIsVisible] = useState(false)

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
          <div className="rounded-2xl bg-slate-900/65 border border-slate-700/80 shadow-[0_18px_45px_rgba(15,23,42,0.7)] backdrop-blur-md px-1.5 py-1 flex flex-col items-center gap-1.5">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 hover:bg-slate-700/90 text-slate-100 transition-colors text-xs"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-4 w-4" />
            </button>

            {showNextSection && nextSectionId && (
              <button
                type="button"
                onClick={scrollToNextSection}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/60 hover:bg-slate-700/80 text-slate-100 transition-colors text-[11px]"
                aria-label="Scroll to next section"
              >
                <ArrowDownRight className="h-4 w-4" />
              </button>
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
