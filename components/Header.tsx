'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { 
    name: 'Services', 
    href: '#',
    dropdown: [
      { name: 'Consulting', href: '/services' },
      { name: 'Career Opportunities', href: '/opportunities' },
    ]
  },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-medium'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              href="/" 
              className="text-xl lg:text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              Mosun Owo-Odusi
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-slate-700 hover:text-primary-700 font-medium transition-colors duration-300 group"
                    >
                      {link.name}
                      <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-700 to-gold-500 group-hover:w-full transition-all duration-300" />
                    </button>
                    
                    <AnimatePresence>
                      {openDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-large border border-gray-100 py-2 z-50"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-3 text-slate-700 hover:text-primary-700 hover:bg-primary-50 transition-colors duration-200 font-medium"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="relative text-slate-700 hover:text-primary-700 font-medium transition-colors duration-300 group"
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault()
                        scrollToSection(link.href)
                      }
                    }}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-700 to-gold-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-primary-700 focus-ring rounded-md"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-slate-700 hover:text-primary-700 hover:bg-primary-50 rounded-md transition-colors duration-200 font-medium"
                        >
                          {link.name}
                          <ChevronDown 
                            size={16} 
                            className={`transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 space-y-1 overflow-hidden"
                            >
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-4 py-2 text-slate-600 hover:text-primary-700 hover:bg-primary-50 rounded-md transition-colors duration-200"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault()
                            scrollToSection(link.href)
                          } else {
                            setIsOpen(false)
                          }
                        }}
                        className="block px-4 py-3 text-slate-700 hover:text-primary-700 hover:bg-primary-50 rounded-md transition-colors duration-200 font-medium"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}