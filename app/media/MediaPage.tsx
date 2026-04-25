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
    title: 'Opening Address: Agricultural Value Chain Programme Launch',
    outlet: 'Ogun State Government Event',
    date: '[Event date] · Ijebu, Ogun State',
    description: 'Keynote at the official OGSTEP fish harvest launch, marking a key milestone in the agricultural value chain component of the programme.',
    src: 'https://drive.google.com/file/d/1wEswzM9QHRxg4VFNLAasEADnXA5cJG8R/preview',
  },
  {
    id: 'mosun-video-highlight-2',
    title: 'OGSTEP: Programme Overview and Field Impact',
    outlet: 'OGSTEP Programme',
    date: '[Year] · Ogun State',
    description: 'Documentary footage capturing the breadth of OGSTEP\'s reach across agriculture, skills development, land administration, and public sector reform.',
    src: 'https://drive.google.com/file/d/1cHiu1R03JwsCWPQa-nWFRDPtD8kf9Irt/preview',
  },
  {
    id: 'mosun-award-ogstep',
    title: 'Formal Recognition: Award Accepted on Behalf of OGSTEP',
    outlet: '[Awarding body]',
    date: '[Award name] · [Date]',
    description: 'State-level acknowledgement of OGSTEP\'s contribution to reform and development outcomes, received on behalf of the programme coordination team.',
    src: 'https://drive.google.com/file/d/1LldvxNnzTPhSm8hNFmN7vGwvdg98xJ45/preview',
  },
  {
    id: 'mosun-pc-interview',
    title: 'On Leading OGSTEP: A Programme Coordinator\'s Perspective',
    outlet: '[Interviewer or context]',
    date: '[Date]',
    description: 'In-depth interview on the strategy, challenges, and measurable results of coordinating a $205M+ World Bank reform programme across four sectors.',
    src: 'https://drive.google.com/file/d/1CSaJFb2_hy-2sFYLB8U1bowPxeyAmp_B/preview',
  },
  {
    id: 'mosun-interview-journalist-1',
    title: 'Public Accountability and Programme Delivery: Press Interview',
    outlet: '[Outlet name]',
    date: '[Date]',
    description: 'Media engagement addressing OGSTEP\'s progress and outcomes for public and institutional stakeholders.',
    src: 'https://drive.google.com/file/d/1MeifnduMzvgMBdhwZE9kntXKUqkDfq-B/preview',
  },
  {
    id: 'mosun-interview-journalist-2',
    title: 'Institutional Reform in Practice: Press Interview',
    outlet: '[Outlet name]',
    date: '[Date]',
    description: 'Second media engagement on OGSTEP\'s approach to capacity building, institutional reform, and sustainable programme delivery.',
    src: 'https://drive.google.com/file/d/1ixQo30q24xNnRzOCR7o8x0IgiboPw6nM/preview',
  },
  {
    id: 'mosun-matter-resolution',
    title: 'Stakeholder Dialogue: Navigating Community and Institutional Interests',
    outlet: 'Stakeholder Engagement',
    date: '[Context] · [Date]',
    description: 'On-record engagement addressing programme implementation concerns, demonstrating transparent governance and principled stakeholder management.',
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
