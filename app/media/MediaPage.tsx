'use client'

import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'

type MediaClip = {
  id: string
  title: string
  date: string
  outlet: string
  description: string
  src: string
  thumbnailUrl?: string // For future use if real thumbnails are uploaded
}

const mediaClips: MediaClip[] = [
  {
    id: 'mosun-fish-harvest-ijebu',
    title: 'Speech at the Launch of Fish Harvest',
    outlet: 'Ogun State Government Event',
    date: '2023',
    description: 'Public address to farmers and stakeholders at the Ijebu launch.',
    src: 'https://drive.google.com/file/d/1wEswzM9QHRxg4VFNLAasEADnXA5cJG8R/preview',
  },
  {
    id: 'mosun-video-highlight-2',
    title: 'OGSTEP Impact Overview',
    outlet: 'Project Briefing',
    date: '2023',
    description: 'High-level briefing on the transformational impact of the $205M OGSTEP portfolio.',
    src: 'https://drive.google.com/file/d/1cHiu1R03JwsCWPQa-nWFRDPtD8kf9Irt/preview',
  },
  {
    id: 'mosun-award-ogstep',
    title: 'Acceptance Speech: Excellence in Public Service',
    outlet: 'State Recognition Awards',
    date: '2023',
    description: 'Receiving state honours on behalf of the OGSTEP execution team.',
    src: 'https://drive.google.com/file/d/1LldvxNnzTPhSm8hNFmN7vGwvdg98xJ45/preview',
  },
  {
    id: 'mosun-pc-interview',
    title: 'Leadership in Action: Project Coordinator Interview',
    outlet: 'Internal Communications',
    date: '2022',
    description: 'Deep dive into the operational strategy and team coordination required for state-level reform.',
    src: 'https://drive.google.com/file/d/1CSaJFb2_hy-2sFYLB8U1bowPxeyAmp_B/preview',
  },
  {
    id: 'mosun-interview-journalist-1',
    title: 'Media Press Briefing (Part 1)',
    outlet: 'Journalist Interview',
    date: '2023',
    description: 'Discussing the sustainable outcomes of agricultural interventions.',
    src: 'https://drive.google.com/file/d/1MeifnduMzvgMBdhwZE9kntXKUqkDfq-B/preview',
  },
  {
    id: 'mosun-interview-journalist-2',
    title: 'Media Press Briefing (Part 2)',
    outlet: 'Journalist Interview',
    date: '2023',
    description: 'Addressing public queries on institutional reform and capacity building.',
    src: 'https://drive.google.com/file/d/1ixQo30q24xNnRzOCR7o8x0IgiboPw6nM/preview',
  },
  {
    id: 'mosun-matter-resolution',
    title: 'Public Matter Resolution & Conflict Management',
    outlet: 'Stakeholder Engagement Session',
    date: '2023',
    description: 'Navigating complex community stakeholder interests with composure and strategic foresight.',
    src: 'https://drive.google.com/file/d/1Qs6fQAiH44-FLLpMjZhIzL7N9A68f_u2/preview',
  },
]

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container-custom max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
            <PlayCircle className="text-primary-700" size={20} />
            <span className="text-primary-700 font-semibold">Media & Speaking</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Leadership in <span className="gradient-text">Action</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Speeches, interviews, and public addresses on state-level reform, project coordination, and human capital development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {mediaClips.map((clip, index) => (
            <motion.div
              key={clip.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-soft border border-slate-100 flex flex-col"
            >
              <div className="relative aspect-video bg-slate-100">
                <iframe
                  src={clip.src}
                  title={clip.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; fullscreen"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                    {clip.outlet}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {clip.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {clip.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {clip.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
