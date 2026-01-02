"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

const logos = [
  { src: '/images/amVille_SCHOOL_logo.png', alt: 'Amville School' },
  { src: '/images/ogun_state_logo.png', alt: 'Ogun State' },
  { src: '/images/World-Bank-Logo.jpg', alt: 'World Bank' },
  { src: '/images/Lekki_British_School_logo.png', alt: 'Lekki British School' },
]

export default function Organizations() {
  return (
    <section aria-labelledby="orgs-heading" className="w-full bg-white">
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="orgs-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 relative inline-block">
              Organizations I&apos;ve Worked With
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 bg-gradient-to-r from-primary-500 via-blue-500 to-transparent rounded-full origin-center"
              />
            </h2>
          </motion.div>
          
          {/* Logo strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {logos.map((logo, idx) => (
              <motion.div
                key={logo.src}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="transition duration-300 hover:opacity-100 opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={40}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
