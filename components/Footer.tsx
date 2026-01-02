'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const footerLinks = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Consulting', href: '/services' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-6 lg:gap-8"
          >
            {footerLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-gold-400 font-medium transition-colors duration-300 hover:underline"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center md:text-right"
          >
            <p className="text-white/70 text-sm">
              &copy; {new Date().getFullYear()} Mosun Owo-Odusi. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}