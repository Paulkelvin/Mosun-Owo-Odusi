'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Eye,
  GraduationCap,
  Award,
  MapPinned,
  Sparkles,
  Users,
  Wheat,
  X,
  PlayCircle,
} from 'lucide-react'
import AnimatedCounter from '@/components/AnimatedCounter'

const headlineMetrics = [
  {
    title: 'World Bank Portfolio',
    value: 205,
    suffix: 'M+',
    prefix: '$',
    caption: 'Portfolio managed across OGSTEP reform components',
    icon: Briefcase,
    tone: 'from-primary-600 to-primary-700',
  },
  {
    title: 'Direct Beneficiaries',
    value: 72000,
    suffix: '+',
    prefix: '',
    caption: 'Reached across Ogun State interventions',
    icon: Users,
    tone: 'from-gold-500 to-gold-600',
  },
  {
    title: 'Certificates of Occupancy',
    value: 15000,
    suffix: '+',
    prefix: '',
    caption: 'Issued under her land reform leadership',
    icon: Award,
    tone: 'from-emerald-500 to-emerald-600',
  },
  {
    title: 'Farmers Registered',
    value: 160000,
    suffix: '',
    prefix: '',
    caption: 'Captured under OGFIMS for agricultural reform',
    icon: Wheat,
    tone: 'from-sky-600 to-sky-700',
  },
  {
    title: 'Leadership Span',
    value: 30,
    suffix: '+',
    prefix: '',
    caption: 'Years across education, enterprise, and development',
    icon: GraduationCap,
    tone: 'from-amber-500 to-amber-600',
  },
  {
    title: 'OGSTEP Team Led',
    value: '4 | 15+ | 50+',
    suffix: '',
    prefix: '',
    caption: 'Project Managers, consultants, and team members',
    icon: MapPinned,
    tone: 'from-slate-600 to-slate-700',
  },
]

const divisionCoverage = [
  { name: 'Egba', sites: 20 },
  { name: 'Ijebu', sites: 17 },
  { name: 'Yewa', sites: 16 },
  { name: 'Remo', sites: 12 },
]

const pdfOptions = {
  impact: {
    title: 'OGSTEP Impact At A Glance',
    path: '/docs/ogstep-impact-at-a-glance.pdf',
  },
  sites: {
    title: 'Project Intervention Sites By Division',
    path: '/docs/ogstep-intervention-sites-by-division.pdf',
  },
}

export default function OGSTEPImpactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activePdfKey, setActivePdfKey] = useState<'impact' | 'sites'>('impact')

  const activePdf = useMemo(() => pdfOptions[activePdfKey], [activePdfKey])

  useEffect(() => {
    if (!isModalOpen) return

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsModalOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onEsc)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onEsc)
    }
  }, [isModalOpen])

  return (
    <>
      <section className="relative section-padding overflow-hidden bg-gradient-to-br from-slate-950 via-primary-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-gold-400/20 blur-3xl" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
            <Sparkles className="h-4 w-4 text-gold-300" />
            OGSTEP Impact At A Glance
          </div>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr,0.85fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Measurable Reach. Strategic Delivery. Documented Results.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                A high-level OGSTEP snapshot from the official infographics showing beneficiary
                reach, skills, jobs, agriculture outcomes, and statewide implementation coverage.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <div className="flex items-center gap-3 text-slate-100">
                <BarChart3 className="h-5 w-5 text-gold-300" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200/90">
                  Signature Highlight
                </p>
              </div>
              <p className="mt-4 text-4xl font-black text-white sm:text-5xl">
                <AnimatedCounter end={1600} suffix="+" className="tabular-nums" />
              </p>
              <p className="mt-2 text-sm text-slate-200">Jobs reported on rehabilitation sites across the OGSTEP footprint.</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {headlineMetrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.article
                key={metric.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group rounded-2xl border border-white/15 bg-white/10 p-5 shadow-large backdrop-blur-md"
              >
                <div className={`inline-flex rounded-xl bg-gradient-to-r p-3 ${metric.tone}`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-slate-300">
                  {metric.title}
                </p>
                <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                  {typeof metric.value === 'number' ? (
                    <AnimatedCounter
                      end={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      className="tabular-nums"
                    />
                  ) : (
                    <span className="tabular-nums">{metric.value}</span>
                  )}
                </p>
                <p className="mt-2 text-sm text-slate-200">{metric.caption}</p>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 rounded-2xl border border-white/15 bg-slate-900/55 p-4"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Division Footprint (71+ Total Sites)
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {divisionCoverage.map((division) => (
              <div
                key={division.name}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-slate-300">{division.name}</p>
                <p className="mt-1 text-2xl font-extrabold text-white">
                  <AnimatedCounter end={division.sites} className="tabular-nums" />
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <button
            type="button"
            onClick={() => {
              setActivePdfKey('impact')
              setIsModalOpen(true)
            }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold-400 px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300"
          >
            Quick Preview
            <Eye className="h-4 w-4" />
          </button>

          <a
            href="/docs/ogstep-impact-at-a-glance.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            See Full Impact Report
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href="/docs/ogstep-intervention-sites-by-division.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
          >
            View Intervention Sites Breakdown
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href="/media#media-archive"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500/20"
          >
            Watch Documentary Series
            <PlayCircle className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <p className="container-custom mt-3 text-xs text-slate-300/90">
        Source: OGSTEP official infographics (2020-2025) and intervention-site distribution by division.
      </p>
      </section>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="OGSTEP infographic preview"
        >
          <div className="w-full max-w-4xl rounded-2xl border border-white/20 bg-slate-900 shadow-large">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-4">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActivePdfKey('impact')}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                    activePdfKey === 'impact'
                      ? 'bg-gold-400 text-slate-900'
                      : 'bg-white/10 text-slate-200 hover:bg-white/20'
                  }`}
                >
                  Impact Snapshot
                </button>
                <button
                  type="button"
                  onClick={() => setActivePdfKey('sites')}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                    activePdfKey === 'sites'
                      ? 'bg-gold-400 text-slate-900'
                      : 'bg-white/10 text-slate-200 hover:bg-white/20'
                  }`}
                >
                  Site Distribution
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-2 text-slate-200 transition-colors hover:bg-white/10"
                aria-label="Close preview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4">
              <p className="mb-3 text-sm font-semibold text-slate-100">{activePdf.title}</p>
              <iframe
                title={`${activePdf.title} preview`}
                src={`${activePdf.path}#view=FitH`}
                className="h-[52vh] w-full rounded-xl border border-white/15 bg-white"
              />

              <div className="mt-4 flex justify-end">
                <a
                  href={activePdf.path}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                >
                  Open Full PDF
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
