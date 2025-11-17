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
          {/* Heading block with accent bar to match section styles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="w-10 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 mx-auto mb-3"
            />
            <h2 id="orgs-heading" className="text-2xl lg:text-3xl font-semibold text-slate-900">
              Organizations I&apos;ve Worked With
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
