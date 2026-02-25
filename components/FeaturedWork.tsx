'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type FeaturedImage = {
  src: string
  alt: string
  project: 'ogstep' | 'consults' | 'school'
  projectName: string
  caption?: string
  filterLink: string
}

const featuredImages: FeaturedImage[] = [
  {
    src: '/images/OGSTEP_Agric.JPG',
    alt: 'OGSTEP agricultural transformation - farmers in training session',
    project: 'ogstep',
    projectName: 'OGSTEP',
    caption: '72,000+ Lives Transformed',
    filterLink: '/projects#projects-gallery'
  },
  {
    src: '/images/amville-consults/c8c45d4b-c691-40ec-ab3e-6e9096ec3ae2.JPG',
    alt: 'Amville Consults workshop with educators',
    project: 'consults',
    projectName: 'Amville Consults',
    caption: 'Educational Excellence',
    filterLink: '/projects#projects-gallery'
  },
  {
    src: '/images/amville-consults/940d84d9-2c69-4eea-813a-b8a3535c9427.JPG',
    alt: 'Amville Consults student leadership camp',
    project: 'consults',
    projectName: 'Amville Consults',
    caption: 'Student Leadership',
    filterLink: '/projects#projects-gallery'
  },
  {
    src: '/images/OGSTEP_skills1.jpeg',
    alt: 'OGSTEP skills development training session',
    project: 'ogstep',
    projectName: 'OGSTEP',
    caption: 'Skills Development',
    filterLink: '/projects#projects-gallery'
  },
  {
    src: '/images/amville-consults/a872e439-a81b-4278-b440-d838586c96e3.JPG',
    alt: 'Amville Consults school transformation project',
    project: 'consults',
    projectName: 'Amville Consults',
    caption: 'School Transformation',
    filterLink: '/projects#projects-gallery'
  }
]

export default function FeaturedWork() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured Work
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Visual highlights from 15+ years of transformative leadership across education, agriculture, and institutional development
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4 mb-10">
          {/* Large Hero - OGSTEP Impact (Top Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-4 lg:col-span-3 row-span-2 lg:row-span-2"
          >
            <Link 
              href={featuredImages[0].filterLink}
              className="group relative block h-full min-h-[280px] lg:min-h-[400px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <Image
                src={featuredImages[0].src}
                alt={featuredImages[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full mb-3">
                  {featuredImages[0].projectName}
                </span>
                <p className="text-white text-lg lg:text-2xl font-bold mb-2">
                  {featuredImages[0].caption}
                </p>
                <div className="flex items-center gap-2 text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span>View Project Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Medium - Amville Consults Workshop (Top Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-4 lg:col-span-3 row-span-1"
          >
            <Link
              href={featuredImages[1].filterLink}
              className="group relative block h-full min-h-[180px] lg:min-h-[195px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:rotate-1 hover:-translate-y-1"
            >
              <Image
                src={featuredImages[1].src}
                alt={featuredImages[1].alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <span className="inline-block px-2.5 py-1 bg-gold-600 text-white text-xs font-semibold rounded-full mb-2">
                  {featuredImages[1].projectName}
                </span>
                <p className="text-white text-base lg:text-lg font-bold">
                  {featuredImages[1].caption}
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Small - Student Leadership (Right Side) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="col-span-2 lg:col-span-2 row-span-1"
          >
            <Link
              href={featuredImages[2].filterLink}
              className="group relative block h-full min-h-[180px] lg:min-h-[195px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-rotate-1 hover:-translate-y-1"
            >
              <Image
                src={featuredImages[2].src}
                alt={featuredImages[2].alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                <span className="inline-block px-2 py-0.5 bg-gold-600 text-white text-[10px] font-semibold rounded-full mb-1.5">
                  {featuredImages[2].projectName}
                </span>
                <p className="text-white text-sm lg:text-base font-bold line-clamp-2">
                  {featuredImages[2].caption}
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Small - OGSTEP Skills (Bottom Middle) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-2 lg:col-span-1 row-span-1"
          >
            <Link
              href={featuredImages[3].filterLink}
              className="group relative block h-full min-h-[180px] lg:min-h-[195px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:translate-y-1"
            >
              <Image
                src={featuredImages[3].src}
                alt={featuredImages[3].alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                <span className="inline-block px-2 py-0.5 bg-primary-600 text-white text-[10px] font-semibold rounded-full mb-1.5">
                  {featuredImages[3].projectName}
                </span>
                <p className="text-white text-sm lg:text-base font-bold line-clamp-2">
                  {featuredImages[3].caption}
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Wide - School Re-engineering (Bottom) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            viewport={{ once: true }}
            className="col-span-4 lg:col-span-3 row-span-1"
          >
            <Link
              href={featuredImages[4].filterLink}
              className="group relative block h-full min-h-[180px] lg:min-h-[195px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <Image
                src={featuredImages[4].src}
                alt={featuredImages[4].alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <span className="inline-block px-2.5 py-1 bg-gold-600 text-white text-xs font-semibold rounded-full mb-2">
                  {featuredImages[4].projectName}
                </span>
                <p className="text-white text-base lg:text-lg font-bold">
                  {featuredImages[4].caption}
                </p>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/projects#projects-gallery"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
