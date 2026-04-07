'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  Eye,
  GraduationCap,
  Hammer,
  Heart,
  MapPinned,
  Monitor,
  TrendingUp,
  Users,
  Wheat,
  X,
} from 'lucide-react'
import AnimatedCounter from '@/components/AnimatedCounter'

// ─── Data ──────────────────────────────────────────────────────────────────

const heroPillars = [
  {
    category: 'People Reached',
    value: 975,
    suffix: 'K+',
    label: 'Total Beneficiaries',
    sub: '325K Primary + 650K Secondary',
    Icon: Users,
    glowColor: 'rgba(251,191,36,0.22)',
    border: 'border-amber-400/25',
    iconBg: 'bg-amber-400/15',
    iconColor: 'text-amber-300',
    numColor: 'text-amber-300',
    barColor: 'bg-amber-400',
  },
  {
    category: 'Human Capital',
    value: 39806,
    suffix: '',
    label: 'Skills Upgraded',
    sub: '13,675 employment opportunities created',
    Icon: GraduationCap,
    glowColor: 'rgba(52,211,153,0.20)',
    border: 'border-emerald-400/25',
    iconBg: 'bg-emerald-400/15',
    iconColor: 'text-emerald-300',
    numColor: 'text-emerald-300',
    barColor: 'bg-emerald-400',
  },
  {
    category: 'Territorial Footprint',
    value: 71,
    suffix: '+',
    label: 'Project Sites',
    sub: '20 LGAs · 3 Senatorial Districts · All 4 Divisions',
    Icon: MapPinned,
    glowColor: 'rgba(96,165,250,0.20)',
    border: 'border-sky-400/25',
    iconBg: 'bg-sky-400/15',
    iconColor: 'text-sky-300',
    numColor: 'text-sky-300',
    barColor: 'bg-sky-400',
  },
]

const supportingStats = [
  { label: 'Jobs Created', value: 13675, suffix: '', Icon: Briefcase, color: 'text-lime-300', border: 'border-lime-400/20' },
  { label: 'Farmers Supported', value: 42793, suffix: '', Icon: Wheat, color: 'text-orange-300', border: 'border-orange-400/20' },
  { label: 'Farm Equipment Delivered', value: 156, suffix: '', Icon: Hammer, color: 'text-rose-300', border: 'border-rose-400/20' },
  { label: 'Trainees with Income Rise', value: 12964, suffix: '', Icon: TrendingUp, color: 'text-violet-300', border: 'border-violet-400/20' },
]

const divisions = [
  { name: 'Egba', sites: 20, pct: 28.2, barColor: 'bg-amber-400', textColor: 'text-amber-300', glow: 'rgba(251,191,36,0.55)', detail: '3 Tech Colleges · 6 Agro-Processing · 6 Science Labs' },
  { name: 'Ijebu', sites: 17, pct: 23.9, barColor: 'bg-emerald-400', textColor: 'text-emerald-300', glow: 'rgba(52,211,153,0.55)', detail: '2 Tech Colleges · 5 Agro-Processing · 7 Science Labs' },
  { name: 'Yewa', sites: 16, pct: 22.5, barColor: 'bg-sky-400', textColor: 'text-sky-300', glow: 'rgba(96,165,250,0.55)', detail: '2 Tech Colleges · 5 Agro-Processing · 6 Science Labs' },
  { name: 'Remo', sites: 12, pct: 16.9, barColor: 'bg-violet-400', textColor: 'text-violet-300', glow: 'rgba(167,139,250,0.55)', detail: '1 Tech College · 2 Agro-Processing · 6 Science Labs' },
]

const siteTypes = [
  { label: 'Technical Colleges', count: 8, Icon: Building2 },
  { label: 'Agro-Processing Centers', count: 22, Icon: Wheat },
  { label: 'Science Labs', count: 21, Icon: Monitor },
  { label: 'E-Planning Offices', count: 7, Icon: Monitor },
  { label: 'Sexual Assault Referral Centers', count: 4, Icon: Heart },
  { label: 'Work Hubs', count: 3, Icon: Hammer },
  { label: 'Women Dev. Centers', count: 2, Icon: Users },
  { label: 'Education Resource Centers', count: 4, Icon: BookOpen },
]

const achievements = [
  '58% → 69% STEM Performance (WAEC)',
  '13.08% Technical College enrolment increase',
  '5 Digital Platforms deployed',
  '6 CORS Stations for spatial reference',
  '5+6 NTC Curriculum + NOS Standards',
  '1,600+ Jobs on rehabilitation sites',
]

const pdfOptions = {
  impact: { title: 'OGSTEP Impact At A Glance', path: '/docs/ogstep-impact-at-a-glance.pdf' },
  sites: { title: 'Project Intervention Sites By Division', path: '/docs/ogstep-intervention-sites-by-division.pdf' },
}

// ─── Sub-component: animated division bar ─────────────────────────────────

interface Division {
  name: string; sites: number; pct: number;
  barColor: string; textColor: string; glow: string; detail: string;
}

function DivisionBar({ d, delay }: { d: Division; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <div ref={ref} className="group">
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <div>
          <span className={`text-sm font-bold ${d.textColor}`}>{d.name}</span>
          <span className="ml-2 hidden text-xs text-slate-500 transition-colors group-hover:text-slate-400 lg:inline">
            {d.detail}
          </span>
        </div>
        <div className="flex shrink-0 items-baseline gap-1.5">
          <span className="text-xs tabular-nums text-slate-500">{d.pct}%</span>
          <span className={`text-lg font-black tabular-nums ${d.textColor}`}>{d.sites}</span>
          <span className="text-xs text-slate-500">sites</span>
        </div>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-white/[0.07]">
        <motion.div
          className={`h-full rounded-full ${d.barColor}`}
          style={{ boxShadow: `0 0 14px 3px ${d.glow}` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${d.pct}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────

export default function OGSTEPImpactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activePdfKey, setActivePdfKey] = useState<'impact' | 'sites'>('impact')
  const activePdf = useMemo(() => pdfOptions[activePdfKey], [activePdfKey])

  useEffect(() => {
    if (!isModalOpen) return
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsModalOpen(false) }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onEsc)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onEsc) }
  }, [isModalOpen])

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: '#040c18' }}>

        {/* Atmospheric background glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[130px]" />
          <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-amber-500/10 blur-[110px]" />
          <div className="absolute bottom-0 left-1/2 h-72 w-[500px] -translate-x-1/2 rounded-full bg-sky-600/[0.08] blur-[110px]" />
          <div
            className="absolute inset-0 opacity-[0.032]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
              backgroundSize: '44px 44px',
            }}
          />
        </div>

        {/* ── Programme header ─────────────────────────────────── */}
        <div className="relative border-b border-white/[0.06]">
          <div className="container-custom py-12 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            >
              <div className="max-w-xl">
                <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                    World Bank Supported · Ogun State, Nigeria
                  </span>
                </div>
                <h2 className="text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
                  OGSTEP
                </h2>
                <p className="mt-1 text-xl font-semibold tracking-[0.1em] text-slate-300 sm:text-2xl">
                  IMPACT AT A GLANCE
                </p>
                <p className="mt-3 text-sm text-slate-500">
                  Ogun State Economic Transformation Project &nbsp;·&nbsp; Five-Year Implementation 2020 – 2025
                </p>
              </div>

              {/* Programme headline card */}
              <div
                className="shrink-0 rounded-2xl border border-amber-400/20 p-6 lg:p-7"
                style={{ background: 'rgba(251,191,36,0.07)', boxShadow: 'inset 0 0 60px rgba(251,191,36,0.08)' }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/70">Combined Reach</p>
                <p className="mt-2 text-6xl font-black tabular-nums leading-none text-amber-300 lg:text-7xl">
                  <AnimatedCounter end={975} suffix="K+" />
                </p>
                <p className="mt-2 text-sm text-slate-200">Total programme beneficiaries</p>
                <p className="mt-0.5 text-xs text-slate-500">325K Primary · 650K Secondary</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Hero pillars ─────────────────────────────────────── */}
        <div className="relative border-b border-white/[0.06]">
          <div className="container-custom py-8 lg:py-10">
            <div className="grid gap-4 md:grid-cols-3">
              {heroPillars.map((p, i) => (
                <motion.div
                  key={p.category}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, delay: i * 0.1 }}
                  className={`relative overflow-hidden rounded-2xl border ${p.border} p-6`}
                  style={{ background: 'rgba(255,255,255,0.03)', boxShadow: `inset 0 0 70px ${p.glowColor}` }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{p.category}</p>
                  <div className={`mt-3 inline-flex items-center justify-center rounded-xl ${p.iconBg} p-3`}>
                    <p.Icon className={`h-5 w-5 ${p.iconColor}`} />
                  </div>
                  <p className={`mt-4 text-5xl font-black tabular-nums leading-none ${p.numColor} sm:text-6xl`}>
                    <AnimatedCounter end={p.value} suffix={p.suffix} />
                  </p>
                  <p className="mt-2 text-base font-bold text-white">{p.label}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{p.sub}</p>
                  <div className={`absolute bottom-0 left-0 right-0 h-[3px] ${p.barColor} opacity-60`} />
                </motion.div>
              ))}
            </div>

            {/* Supporting 4-stat grid */}
            <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {supportingStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                  className={`rounded-xl border ${s.border} p-4`}
                  style={{ background: 'rgba(255,255,255,0.025)' }}
                >
                  <s.Icon className={`mb-2 h-4 w-4 ${s.color}`} />
                  <p className={`text-2xl font-extrabold tabular-nums leading-none ${s.color}`}>
                    <AnimatedCounter end={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1.5 text-xs leading-snug text-slate-400">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Division breakdown ───────────────────────────────── */}
        <div className="relative border-b border-white/[0.06]">
          <div className="container-custom py-8 lg:py-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Coverage</p>
                  <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">Division Footprint</h3>
                </div>
                <div
                  className="rounded-xl border border-white/10 px-4 py-2 text-right"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <p className="text-xs text-slate-500">All 4 Administrative Divisions (RIYE)</p>
                  <p className="text-sm font-bold text-white">71+ sites · 20 LGAs · 3 Senatorial Districts</p>
                </div>
              </div>
              <div className="space-y-5">
                {divisions.map((d, i) => (
                  <DivisionBar key={d.name} d={d} delay={0.1 + i * 0.12} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Site type chips ──────────────────────────────────── */}
        <div className="relative border-b border-white/[0.06]">
          <div className="container-custom py-8 lg:py-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Sites Breakdown (71+ Total)
              </p>
              <div className="flex flex-wrap gap-2">
                {siteTypes.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className="flex items-center gap-2.5 rounded-full border border-white/[0.09] px-4 py-2.5"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    <s.Icon className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                    <span className="text-sm font-bold text-white">{s.count}</span>
                    <span className="text-xs text-slate-400">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Achievement strip ────────────────────────────────── */}
        <div className="relative border-b border-white/[0.06]" style={{ background: 'rgba(255,255,255,0.015)' }}>
          <div className="container-custom py-5 lg:py-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="flex flex-wrap gap-x-6 gap-y-2.5"
            >
              {achievements.map((a) => (
                <div key={a} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                  {a}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── CTA row ─────────────────────────────────────────── */}
        <div className="relative">
          <div className="container-custom py-8 lg:py-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-600">
                Source: OGSTEP official infographics · Ogun State (2020 – 2025)
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => { setActivePdfKey('impact'); setIsModalOpen(true) }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-amber-300 active:scale-95"
                >
                  <Eye className="h-4 w-4" />
                  Quick Preview
                </button>
                <a
                  href="/docs/ogstep-impact-at-a-glance.pdf"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-slate-100 active:scale-95"
                >
                  Full Impact Report <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="/docs/ogstep-intervention-sites-by-division.pdf"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 active:scale-95"
                >
                  Intervention Sites <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PDF Modal ──────────────────────────────────────────────── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          role="dialog" aria-modal="true" aria-label="OGSTEP infographic preview"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.22 }}
            className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15"
            style={{ background: '#0a1628' }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-4">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActivePdfKey('impact')}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                    activePdfKey === 'impact' ? 'bg-amber-400 text-slate-900' : 'bg-white/10 text-slate-200 hover:bg-white/20'
                  }`}
                >
                  Impact Snapshot
                </button>
                <button
                  type="button"
                  onClick={() => setActivePdfKey('sites')}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                    activePdfKey === 'sites' ? 'bg-amber-400 text-slate-900' : 'bg-white/10 text-slate-200 hover:bg-white/20'
                  }`}
                >
                  Site Distribution
                </button>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-2 text-slate-200 transition-colors hover:bg-white/10"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <p className="mb-3 text-sm font-semibold text-slate-100">{activePdf.title}</p>
              <iframe
                title={`${activePdf.title} preview`}
                src={`${activePdf.path}#view=FitH`}
                className="h-[56vh] w-full rounded-xl border border-white/10 bg-white"
              />
              <div className="mt-3 flex justify-end">
                <a
                  href={activePdf.path}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                >
                  Open Full PDF <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
