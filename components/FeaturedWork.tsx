'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import GoogleDriveVideo from './GoogleDriveVideo'

type MarqueeImage = {
  src: string
  alt: string
  project: 'ogstep' | 'consults' | 'school'
  projectName: string
}

const marqueeImages: MarqueeImage[] = [
  { src: '/images/OGSTEP_Agric.JPG', alt: 'OGSTEP agricultural training session', project: 'ogstep', projectName: 'OGSTEP' },
  { src: '/images/amville-consults/c8c45d4b-c691-40ec-ab3e-6e9096ec3ae2.JPG', alt: 'Amville Consults workshop with educators', project: 'consults', projectName: 'Amville Consults' },
  { src: '/images/amville-school/Teachers day.jpg', alt: 'Amville School community celebration', project: 'school', projectName: 'Amville School' },
  { src: '/images/OGSTEP_skills1.jpeg', alt: 'OGSTEP skills development training', project: 'ogstep', projectName: 'OGSTEP' },
  { src: '/images/amville-consults/a872e439-a81b-4278-b440-d838586c96e3.JPG', alt: 'Amville Consults school transformation project', project: 'consults', projectName: 'Amville Consults' },
  { src: '/images/ogstep-events/0956e04b-e60d-49b9-b72d-2a254bb10722.JPG', alt: 'OGSTEP programme event', project: 'ogstep', projectName: 'OGSTEP' },
  { src: '/images/amville-school/506629156_3182339745265133_6156151194386877499_n.jpg', alt: 'Amville School highlight', project: 'school', projectName: 'Amville School' },
  { src: '/images/OGSTEP_outreach.JPG', alt: 'OGSTEP community outreach session', project: 'ogstep', projectName: 'OGSTEP' },
  { src: '/images/amville-consults/940d84d9-2c69-4eea-813a-b8a3535c9427.JPG', alt: 'Amville Consults student leadership programme', project: 'consults', projectName: 'Amville Consults' },
  { src: '/images/ogstep-events/30717265-29c2-4157-a5c0-ae59e91e17f0.JPG', alt: 'OGSTEP programme field activity', project: 'ogstep', projectName: 'OGSTEP' },
  { src: '/images/amville-school/88316779_1544154315750359_6180190968071847936_n.jpg', alt: 'Amville School community moment', project: 'school', projectName: 'Amville School' },
  { src: '/images/OGSTEP_Agric2.JPG', alt: 'OGSTEP field engagement with farmers', project: 'ogstep', projectName: 'OGSTEP' },
]

const badgeColors: Record<MarqueeImage['project'], string> = {
  ogstep: 'bg-primary-600',
  consults: 'bg-gold-600',
  school: 'bg-emerald-600',
}

const ogstepCoordinatorVideoSrc = 'https://drive.google.com/file/d/1CSaJFb2_hy-2sFYLB8U1bowPxeyAmp_B/preview'

export default function FeaturedWork() {
  const [paused, setPaused] = useState(false)
  const marqueeLoop = [...marqueeImages, ...marqueeImages]

  return (
    <section className="section-padding bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Featured Work
          </h2>
          <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto">
            Visual highlights from over 30 years of transformative leadership across education, agriculture, and institutional development
          </p>
        </motion.div>

        {/* Leadership Speaking Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 lg:p-5 shadow-soft"
        >
          <div className="mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="mb-2 inline-flex items-center rounded-full bg-primary-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                OGSTEP
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-slate-900">On Leading OGSTEP: A Programme Coordinator&apos;s Perspective</h3>
              <p className="text-sm text-slate-500 mt-1">OGSTEP Programme | Project Leadership</p>
            </div>
            <Link href="/media" className="inline-block text-xs font-medium px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors shrink-0">
              View All Media & Speaking
            </Link>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-950 shadow-inner ring-1 ring-slate-200/80 sm:aspect-[16/10] lg:aspect-video">
            <GoogleDriveVideo
              src={ogstepCoordinatorVideoSrc}
              title="On Leading OGSTEP: A Programme Coordinator's Perspective"
            />
          </div>
        </motion.div>

        {/* Infinite image marquee — sourced from the media archive gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onPointerDown={() => setPaused(true)}
            onPointerUp={() => setPaused(false)}
            onPointerCancel={() => setPaused(false)}
          >
            <div
              className="marquee-track flex w-max gap-4"
              style={{ animationPlayState: paused ? 'paused' : 'running' }}
            >
              {marqueeLoop.map((img, index) => (
                <Link
                  key={`${img.src}-${index}`}
                  href={`/media?tab=${img.project}#media-archive`}
                  aria-label={`${img.projectName} — view in media archive`}
                  className="group/card relative block w-56 sm:w-64 shrink-0 overflow-hidden rounded-2xl shadow-lg"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 224px, 256px"
                      className="object-cover object-center transition-transform duration-500 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className={`absolute bottom-3 left-3 inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold text-white ${badgeColors[img.project]}`}>
                      {img.projectName}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-white to-transparent" />
          </div>
          <p className="mt-3 text-center text-xs text-slate-400">
            Hover or hold to pause · tap an image to open it in the media archive
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/media#media-archive"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <span>View Media Archive</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
