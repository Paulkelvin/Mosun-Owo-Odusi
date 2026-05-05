'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Camera, Film, Mic, PlayCircle } from 'lucide-react'
import MediaArchive from '@/components/MediaArchive'

type MediaClip = {
  id: string
  title: string
  date: string
  outlet: string
  description: string
  src: string
  category: 'speech' | 'interview' | 'coverage'
}

const mediaClips: MediaClip[] = [
  {
    id: 'mosun-fish-harvest-ijebu',
    title: 'Opening Address: Agricultural Value Chain Programme Launch',
    outlet: 'Ogun State Government Event',
    date: '[Event date] · Ijebu, Ogun State',
    description: 'Keynote at the official OGSTEP fish harvest launch, marking a key milestone in the agricultural value chain component of the programme.',
    src: 'https://drive.google.com/file/d/1wEswzM9QHRxg4VFNLAasEADnXA5cJG8R/preview',
    category: 'speech',
  },
  {
    id: 'mosun-award-ogstep',
    title: 'Formal Recognition: Award Accepted on Behalf of OGSTEP',
    outlet: 'Awarding body being confirmed',
    date: '[Award name] · [Date]',
    description: 'State-level acknowledgement of OGSTEP\'s contribution to reform and development outcomes, received on behalf of the programme coordination team.',
    src: 'https://drive.google.com/file/d/1LldvxNnzTPhSm8hNFmN7vGwvdg98xJ45/preview',
    category: 'speech',
  },
  {
    id: 'mosun-pc-interview',
    title: 'On Leading OGSTEP: A Programme Coordinator\'s Perspective',
    outlet: 'Programme interview',
    date: 'Date being confirmed',
    description: 'In-depth interview on the strategy, challenges, and measurable results of coordinating a $205M+ World Bank reform programme across four sectors.',
    src: 'https://drive.google.com/file/d/1CSaJFb2_hy-2sFYLB8U1bowPxeyAmp_B/preview',
    category: 'interview',
  },
  {
    id: 'mosun-interview-journalist-1',
    title: 'Public Accountability and Programme Delivery: Press Interview',
    outlet: 'Press interview',
    date: 'Date being confirmed',
    description: 'Media engagement addressing OGSTEP\'s progress and outcomes for public and institutional stakeholders.',
    src: 'https://drive.google.com/file/d/1MeifnduMzvgMBdhwZE9kntXKUqkDfq-B/preview',
    category: 'interview',
  },
  {
    id: 'mosun-interview-journalist-2',
    title: 'Institutional Reform in Practice: Press Interview',
    outlet: 'Press interview',
    date: 'Date being confirmed',
    description: 'Second media engagement on OGSTEP\'s approach to capacity building, institutional reform, and sustainable programme delivery.',
    src: 'https://drive.google.com/file/d/1ixQo30q24xNnRzOCR7o8x0IgiboPw6nM/preview',
    category: 'interview',
  },
  {
    id: 'mosun-matter-resolution',
    title: 'Stakeholder Dialogue: Navigating Community and Institutional Interests',
    outlet: 'Stakeholder Engagement',
    date: '[Context] · [Date]',
    description: 'On-record engagement addressing programme implementation concerns, demonstrating transparent governance and principled stakeholder management.',
    src: 'https://drive.google.com/file/d/1Qs6fQAiH44-FLLpMjZhIzL7N9A68f_u2/preview',
    category: 'interview',
  },
  {
    id: 'mosun-video-highlight-2',
    title: 'OGSTEP: Programme Overview and Field Impact',
    outlet: 'OGSTEP Programme',
    date: '[Year] · Ogun State',
    description: 'Documentary footage capturing the breadth of OGSTEP\'s reach across agriculture, skills development, land administration, and public sector reform.',
    src: 'https://drive.google.com/file/d/1cHiu1R03JwsCWPQa-nWFRDPtD8kf9Irt/preview',
    category: 'coverage',
  },
]

const categories = [
  {
    key: 'speech' as const,
    label: 'Speeches & Public Addresses',
    icon: Mic,
    description: 'Keynote addresses and formal speeches delivered at government events and state ceremonies.',
  },
  {
    key: 'interview' as const,
    label: 'Media Interviews',
    icon: PlayCircle,
    description: 'Press engagements, broadcaster interviews, and stakeholder dialogues on programme delivery and institutional reform.',
  },
  {
    key: 'coverage' as const,
    label: 'Programme Coverage',
    icon: Film,
    description: 'Documentary footage and field coverage of OGSTEP interventions and outcomes.',
  },
]

function displayMediaDate(date: string) {
  if (date.includes('[Event date]')) return 'Date being confirmed | Ijebu, Ogun State'
  if (date.includes('[Award name]')) return 'Award name and date being confirmed'
  if (date.includes('[Context]')) return 'Context and date being confirmed'
  if (date.includes('[Year]')) return 'Year being confirmed | Ogun State'
  return date
}

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <section className="relative overflow-hidden bg-slate-950 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr] lg:items-end"
          >
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100">
                <PlayCircle className="h-4 w-4 text-gold-300" />
                Media &amp; Speaking
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Public voice, field presence, and documented delivery.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Speeches, interviews, awards, field footage, and visual evidence from OGSTEP and education-sector leadership.
              </p>
              <a
                href="#media-archive"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gold-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-gold-300"
              >
                Explore media archive
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { value: '7', label: 'Featured public clips', icon: Film },
                { value: '3', label: 'Speaking and media categories', icon: Mic },
                { value: '1', label: 'Visual archive for due diligence', icon: Camera },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                    <Icon className="mb-4 h-5 w-5 text-gold-300" />
                    <p className="text-3xl font-extrabold text-white">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-custom max-w-6xl pt-14">

        {/* Grouped Sections */}
        {categories.map((cat, catIndex) => {
          const clips = mediaClips.filter(c => c.category === cat.key)
          if (clips.length === 0) return null
          const CatIcon = cat.icon
          return (
            <motion.section
              key={cat.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="mb-16"
            >
              {/* Section header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <CatIcon className="text-primary-700" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{cat.label}</h2>
              </div>
              <p className="text-sm text-slate-500 mb-8 pl-[52px]">{cat.description}</p>

              <div className="grid lg:grid-cols-2 gap-8">
                {clips.map((clip, index) => (
                  <motion.div
                    key={clip.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-soft border border-slate-100 flex flex-col"
                  >
                    <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                      <iframe
                        src={clip.src}
                        title={clip.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full border-0"
                        referrerPolicy="no-referrer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                      <div
                        aria-hidden="true"
                        className="absolute right-0 top-0 z-10 h-16 w-20 bg-transparent"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full truncate max-w-[60%]">
                          {clip.outlet}
                        </span>
                        <span className="text-xs font-medium text-slate-400 text-right">
                          {displayMediaDate(clip.date)}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        {clip.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {clip.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )
        })}
      </div>
      <MediaArchive />
    </div>
  )
}
