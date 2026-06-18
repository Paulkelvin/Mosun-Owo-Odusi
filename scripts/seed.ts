/**
 * Seeds the Sanity dataset with all site content + uploads every referenced
 * local image/video/PDF as a Sanity asset.
 *
 * Run:  npx tsx scripts/seed.ts
 * Requires SANITY_API_WRITE_TOKEN (Editor role) in .env.local.
 *
 * Idempotent: documents use deterministic _ids and createOrReplace, and each
 * file is uploaded only once per run (cached by path). Re-running refreshes
 * the content but will create fresh asset copies on each run.
 */
import path from 'node:path'
import fs from 'node:fs'

import { config as loadEnv } from 'dotenv'
import { createClient } from 'next-sanity'

loadEnv({ path: path.resolve(process.cwd(), '.env.local') })

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local')
  process.exit(1)
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false })

const PUBLIC_DIR = path.resolve(process.cwd(), 'public')

// ── helpers ──────────────────────────────────────────────────────────────
let keyCounter = 0
const nk = () => `k${(keyCounter++).toString(36)}`

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 90)

const assetCache = new Map<string, string>()
let uploaded = 0
let missing = 0

async function uploadAsset(src: string | undefined, kind: 'image' | 'file'): Promise<string | null> {
  if (!src || src.startsWith('/api/placeholder')) return null
  if (assetCache.has(src)) return assetCache.get(src)!
  const filePath = path.join(PUBLIC_DIR, src.replace(/^\//, ''))
  if (!fs.existsSync(filePath)) {
    console.warn(`  ! missing file, skipping: ${src}`)
    missing++
    return null
  }
  const asset = await client.assets.upload(kind, fs.createReadStream(filePath), {
    filename: path.basename(filePath),
  })
  assetCache.set(src, asset._id)
  uploaded++
  if (uploaded % 20 === 0) console.log(`  ...uploaded ${uploaded} assets`)
  return asset._id
}

async function imageRef(src?: string, alt?: string, caption?: string) {
  const id = await uploadAsset(src, 'image')
  if (!id) return undefined
  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: id },
    ...(alt ? { alt } : {}),
    ...(caption ? { caption } : {}),
  }
}

async function fileRef(src?: string) {
  const id = await uploadAsset(src, 'file')
  if (!id) return undefined
  return { _type: 'file', asset: { _type: 'reference', _ref: id } }
}

const ptFromParagraphs = (paragraphs: string[]) =>
  paragraphs
    .map((t) => t.trim())
    .filter(Boolean)
    .map((text) => ({
      _type: 'block',
      _key: nk(),
      style: 'normal',
      markDefs: [],
      children: [{ _type: 'span', _key: nk(), text, marks: [] }],
    }))

const ptFromText = (text: string) => ptFromParagraphs(text.split(/\n\n+/))

function splitAchievement(s: string) {
  const m = s.match(/(https?:\/\/\S+)/)
  if (m) {
    const url = m[1]
    const text = s.replace(url, '').replace(/[\s–-]+$/, '').trim()
    return { _type: 'achievement', _key: nk(), text, sourceUrl: url }
  }
  return { _type: 'achievement', _key: nk(), text: s }
}

const metricsToArray = (metrics: Record<string, string>) =>
  Object.entries(metrics).map(([label, value]) => ({ _type: 'keyValue', _key: nk(), label, value }))

const ref = (id: string) => ({ _type: 'reference', _ref: id, _key: nk() })

const docs: any[] = []
async function put(doc: any) {
  docs.push(doc)
}

// ── DATA ───────────────────────────────────────────────────────────────────
import {
  projectsData,
  testimonialsData,
  insightsData,
  galleryImagesData,
  beforeAfterPairsData,
  videoHighlightsData,
  careerPositionsData,
  educationData,
  certificationsData,
  membershipsData,
  expertiseAreasData,
  headlineMetricsData,
  divisionCoverageData,
  organizationLogosData,
  servicesData,
  venturesData,
  serviceStatsData,
  careerPageServicesData,
  mediaTabDescriptions,
} from './seed-data'

async function build() {
  console.log('Uploading assets + building documents...')

  // ── Gallery images (collection) ──
  const galleryIdBySrc = new Map<string, string>()
  for (let i = 0; i < galleryImagesData.length; i++) {
    const g = galleryImagesData[i]
    const img = await imageRef(g.src, g.alt, g.caption)
    if (!img) continue
    const id = `gallery.${slugify(g.src)}`
    galleryIdBySrc.set(g.src, id)
    await put({
      _id: id,
      _type: 'galleryImage',
      image: { _type: 'image', asset: img.asset },
      alt: g.alt,
      caption: g.caption,
      category: g.category,
      project: g.project,
      order: i,
    })
  }

  // ── Video highlights (collection) ──
  for (let i = 0; i < videoHighlightsData.length; i++) {
    const v = videoHighlightsData[i]
    const isFile = v.kind === 'mp4'
    await put({
      _id: `video.${v.id}`,
      _type: 'videoHighlight',
      title: v.title,
      kind: v.kind,
      order: i,
      project: v.project,
      series: v.series,
      ...(isFile ? { videoFile: await fileRef(v.src) } : { driveUrl: v.src }),
    })
  }

  // ── Before / after pairs (collection) ──
  for (let i = 0; i < beforeAfterPairsData.length; i++) {
    const b = beforeAfterPairsData[i]
    await put({
      _id: `beforeAfter.${i}`,
      _type: 'beforeAfterPair',
      label: b.label,
      context: b.context,
      order: i,
      before: await imageRef(b.before, `${b.label} — before`),
      after: await imageRef(b.after, `${b.label} — after`),
    })
  }

  // ── Projects (collection) ──
  const projectIds: Record<string, string> = {}
  for (let i = 0; i < projectsData.length; i++) {
    const p = projectsData[i]
    const id = `project.${slugify(p.title).slice(0, 40)}`
    projectIds[p.key] = id
    const milestones = []
    for (const m of p.milestones) {
      const images = []
      for (const src of m.images || []) {
        const img = await imageRef(src)
        if (img) images.push({ ...img, _key: nk() })
      }
      milestones.push({
        _type: 'milestone',
        _key: nk(),
        key: m.id,
        title: m.title,
        period: m.period,
        description: m.description,
        achievements: (m.achievements || []).map(splitAchievement),
        metrics: metricsToArray(m.metrics || {}),
        images,
      })
    }
    await put({
      _id: id,
      _type: 'project',
      title: p.title,
      slug: { _type: 'slug', current: slugify(p.title) },
      order: i,
      year: p.year,
      category: p.category,
      status: p.status,
      budget: p.budget,
      beneficiaries: p.beneficiaries,
      duration: p.duration,
      location: p.location,
      logo: await imageRef(p.image, p.title),
      description: p.description,
      impact: p.impact,
      tags: p.tags,
      milestones,
      featured: i === 0,
    })
  }

  // ── Testimonials (collection) ──
  const testimonialIds: Record<string, string> = {}
  for (let i = 0; i < testimonialsData.length; i++) {
    const t = testimonialsData[i]
    const id = `testimonial.${slugify(t.name)}`
    testimonialIds[t.name] = id
    await put({
      _id: id,
      _type: 'testimonial',
      name: t.name,
      order: i,
      title: t.title,
      company: t.company,
      category: t.category,
      rating: t.rating ?? 5,
      linkedin: t.linkedin && t.linkedin !== '#' ? t.linkedin : undefined,
      portrait: await imageRef(t.imageSrc, t.name),
      content: ptFromText(t.content),
      highlights: t.highlights,
      featuredOnHome: !!t.featuredOnHome,
    })
  }

  // ── Insights (collection) ──
  for (let i = 0; i < insightsData.length; i++) {
    const a = insightsData[i]
    await put({
      _id: `insight.${a.id}`,
      _type: 'insight',
      title: a.title,
      slug: { _type: 'slug', current: a.id },
      order: i,
      subtitle: a.subtitle,
      readTime: a.readTime,
      date: a.date,
      tag: a.tag,
      body: ptFromParagraphs(a.body),
    })
  }

  // ── Singletons ──
  const navItems = ['Home', 'About', 'Projects', 'Services', 'Media', 'Insights', 'Testimonials', 'Contact']
  await put({
    _id: 'siteSettings',
    _type: 'siteSettings',
    brandName: 'Mosun Owo-Odusi',
    nav: navItems.map((name) => ({ _type: 'navLink', _key: nk(), name, href: name === 'Home' ? '/' : `/${name.toLowerCase()}` })),
    footerLinks: navItems
      .filter((n) => n !== 'Home')
      .map((name) => ({ _type: 'navLink', _key: nk(), name, href: `/${name.toLowerCase()}` })),
    linkedinUrl: 'https://www.linkedin.com/in/mosun-owo-odusi-mba-pmp-736a1419',
    contactEmail: 'mowoodusi@gmail.com',
    location: 'Global Remote',
  })

  const orgLogos = []
  for (const l of organizationLogosData) {
    const img = await imageRef(l.src, l.alt)
    orgLogos.push({ _type: 'logo', _key: nk(), alt: l.alt, image: img })
  }

  await put({
    _id: 'homePage',
    _type: 'homePage',
    hero: {
      headline: '$250M of Public Sector Reform. Delivered.',
      subheadline:
        'Senior programme leader. 30 years across government reform, human capital, and institutional transformation. Trusted across boardrooms, DFIs, and state-level reform.',
      ctaLabel: 'Explore Achievements',
      ctaHref: '/projects',
      backgroundImage: await imageRef('/images/mosun_owo-odusi_portrait.png', 'Mosun Owo-Odusi'),
    },
    organizationsHeading: "Organizations I've Worked With",
    organizationLogos: orgLogos,
    expertiseHeading: 'Areas of Expertise',
    expertiseIntro: 'Three pillars of strategic leadership built over three decades.',
    expertiseAreas: expertiseAreasData.map((e) => ({
      _type: 'expertiseArea',
      _key: nk(),
      key: e.key,
      title: e.title,
      icon: e.icon,
      description: e.description,
      details: e.details,
    })),
    featuredWorkHeading: 'Featured Work',
    featuredWorkIntro: 'A visual story of the work, sourced from the media archive.',
    marqueeImages: galleryImagesData
      .slice(0, 12)
      .map((g) => galleryIdBySrc.get(g.src))
      .filter(Boolean)
      .map((id) => ref(id as string)),
    featuredProject: {
      heading: 'Featured Project',
      subheading: 'A flagship World Bank-assisted economic transformation programme.',
      project: { _type: 'reference', _ref: projectIds['ogstep'] },
      image: await imageRef('/images/OGSTEP_Mosun_Owo-Odusi.JPG', 'OGSTEP'),
    },
    impactHeading: 'Measurable Reach. Strategic Delivery. Documented Results.',
    impactIntro:
      'A high-level OGSTEP snapshot from the official infographics showing beneficiary reach, skills, jobs, agriculture outcomes, and statewide implementation coverage.',
    headlineMetrics: headlineMetricsData.map((m) => ({
      _type: 'statItem',
      _key: nk(),
      label: m.title,
      value: String(m.value),
      prefix: m.prefix,
      suffix: m.suffix,
      caption: m.caption,
      icon: m.icon,
    })),
    divisionCoverage: divisionCoverageData.map((d) => ({ _type: 'divisionItem', _key: nk(), name: d.name, sites: d.sites })),
    impactPdfs: [
      { _type: 'pdfResource', _key: nk(), title: 'OGSTEP Impact At A Glance', file: await fileRef('/docs/ogstep-impact-at-a-glance.pdf') },
      { _type: 'pdfResource', _key: nk(), title: 'Project Intervention Sites By Division', file: await fileRef('/docs/ogstep-intervention-sites-by-division.pdf') },
    ],
    testimonialsHeading: 'Trusted by Leaders',
    testimonialsIntro: 'What colleagues and partners say about working together',
    featuredTestimonials: testimonialsData
      .filter((t) => t.featuredOnHome)
      .map((t) => ({ _type: 'reference', _ref: testimonialIds[t.name], _key: nk() })),
  })

  await put({
    _id: 'aboutPage',
    _type: 'aboutPage',
    heroHeading: 'About Mosun',
    heroImage: await imageRef('/images/mosun_owo-odusi_portrait.png', 'Mosun Owo-Odusi'),
    bioHeading: 'Mosunmola Owo-Odusi',
    bio: ptFromText(
      'Mosunmola is a seasoned leader with over 30 years of strategic management experience, blending entrepreneurial drive with large-scale project execution expertise. As a Co-Founder and Director in education, hygiene, and real estate ventures, she has demonstrated a strong ability to build impactful businesses. Her leadership of the World Bank-backed Ogun State Economic Transformation Project showcased her capacity to manage complex, multisectoral initiatives, achieving notable performance-based disbursements and social impact. A PMP-certified professional with advanced degrees, awards, and professional affiliations, Mosunmola excels at managing multidisciplinary teams and delivering measurable results. Her operational excellence and business acumen position her to drive sustainable growth and innovation across diverse ventures.\n\nThree decades of building private and public institutions have taught me what it takes to move from policy to measurable results. I am now available for board advisory appointments, executive roles such as Chief Operating Officer or Chief Programme Officer within private companies and multinational or multi-campus organisations (including educational institutions), programme leadership mandates with multilaterals and DFIs, and state-level reform engagements.'
    ),
    portrait: await imageRef('/images/Mosun Owo-Odusi.jpg', 'Professional portrait of Mosun Owo-Odusi speaking at an event'),
    careerHeading: 'Career Milestones & Achievements',
    careerPositions: careerPositionsData.map((c) => ({
      _type: 'careerPosition',
      _key: nk(),
      title: c.title,
      organization: c.organization,
      period: c.period,
      location: c.location,
      positionType: c.type,
      highlights: c.highlights,
      skills: c.skills,
      icon: c.icon,
    })),
    educationHeading: 'Education',
    education: await Promise.all(
      educationData.map(async (e) => ({
        _type: 'credential',
        _key: nk(),
        title: e.degree,
        issuer: e.school,
        year: e.period,
        logo: await imageRef(e.logo, e.school),
        skills: e.skills || [],
      }))
    ),
    certificationsHeading: 'Licenses & Certifications',
    certifications: await Promise.all(
      certificationsData.map(async (c) => ({
        _type: 'credential',
        _key: nk(),
        title: c.title,
        issuer: c.issuer,
        year: c.year,
        logo: await imageRef(c.logo, c.issuer),
        skills: c.skills || [],
      }))
    ),
    membershipsHeading: 'Professional Memberships',
    memberships: await Promise.all(
      membershipsData.map(async (m) => ({
        _type: 'credential',
        _key: nk(),
        title: m.title,
        issuer: m.issuer,
        year: m.date,
        logo: await imageRef(m.logo, m.issuer),
        skills: m.skills || [],
      }))
    ),
  })

  await put({
    _id: 'servicesPage',
    _type: 'servicesPage',
    heroBadge: 'Advisory & Programme Leadership',
    heroHeading: 'Senior counsel for reform, delivery, and institutional scale.',
    heroSubheading:
      'Mandates shaped for boards, DFIs, state governments, and education institutions that need disciplined execution and trusted stakeholder leadership.',
    heroCtaLabel: 'Discuss a mandate',
    heroCtaHref: '/contact#message',
    heroStats: [
      { _type: 'heroStat', _key: nk(), label: '$250M+ portfolio led', icon: 'landmark' },
      { _type: 'heroStat', _key: nk(), label: '30+ years of leadership', icon: 'award' },
      { _type: 'heroStat', _key: nk(), label: '4 PMs, 15+ consultants, 50+ team members', icon: 'network' },
    ],
    services: servicesData.map((s) => ({
      _type: 'serviceCard',
      _key: nk(),
      icon: s.icon,
      title: s.title,
      summary: s.desc,
      body: s.body,
      points: s.services,
      colorFrom: s.color,
      actionLabel: s.action,
      actionLink: s.link,
    })),
    venturesHeading: 'Ventures',
    venturesIntro: 'Three personal business lines, distinct from advisory mandates, built and sustained over the course of my career.',
    ventures: venturesData.map((v) => ({
      _type: 'venture',
      _key: nk(),
      name: v.name,
      established: v.established,
      description: v.description,
      icon: v.icon,
    })),
    statsHeading: 'Scale, Impact, and Documented Results',
    stats: serviceStatsData.map((s) => ({
      _type: 'statItem',
      _key: nk(),
      label: s.label,
      value: String(s.value),
      prefix: s.prefix,
      suffix: s.suffix,
      icon: s.icon,
    })),
    ctaHeading: 'Ready to Get Started?',
    ctaText: "Let's discuss how I can support your organisation through programme leadership, institutional reform, or board advisory.",
    ctaButton: { _type: 'ctaLink', label: 'Get in Touch', href: '/contact#message' },
  })

  await put({
    _id: 'insightsPage',
    _type: 'insightsPage',
    heroBadge: 'Insights',
    heroHeading: 'Field notes from reform, delivery, and institutional leadership.',
    heroSubheading:
      'Practical reflections drawn from public-sector reform, skills systems, education leadership, and a $250M+ World Bank portfolio.',
    heroBadges: [
      { _type: 'heroBadge', _key: nk(), label: 'Programme leadership', icon: 'landmark' },
      { _type: 'heroBadge', _key: nk(), label: 'Board-level perspective', icon: 'penLine' },
    ],
  })

  await put({
    _id: 'testimonialsPage',
    _type: 'testimonialsPage',
    heroBadge: 'Trusted by Industry Leaders',
    heroHeading: 'Client Testimonials',
    heroSubheading: 'Discover what colleagues, clients, and partners say about working together.',
    ctaHeading: 'Ready to Create Impact Together?',
    ctaText: "Join these satisfied clients and let's work together to achieve your strategic goals.",
    ctaButton: { _type: 'ctaLink', label: 'Start Your Project', href: '/contact' },
  })

  await put({
    _id: 'contactPage',
    _type: 'contactPage',
    heroHeading: "Let's Connect",
    heroSubheading: 'Reach out to discuss programme leadership, advisory mandates, or partnership opportunities.',
    formHeading: 'Send a Message',
    getInTouchHeading: 'Get in Touch',
    linkedinUrl: 'https://www.linkedin.com/in/mosun-owo-odusi-mba-pmp-736a1419',
    linkedinLabel: 'Connect with me on LinkedIn',
    locationLabel: 'Global Remote',
    locationNote: 'Available worldwide',
    responseTime: 'Within 24 hours on business days',
    timeZone: 'Flexible scheduling across time zones',
    areasOfExpertiseHeading: 'Areas of Expertise',
    areasOfExpertise: ['Project Management', 'Education Consulting', 'Real Estate Advisory'],
  })

  await put({
    _id: 'careerPage',
    _type: 'careerPage',
    heroHeading: 'Career & Consulting',
    heroSubheading: 'Professional services and consulting expertise',
    servicesHeading: 'Services Offered',
    services: careerPageServicesData.map((s) => ({ _type: 'careerService', _key: nk(), title: s.title, description: s.description })),
  })

  await put({
    _id: 'mediaPage',
    _type: 'mediaPage',
    heroHeading: 'Media Archive',
    heroSubheading: mediaTabDescriptions.all,
    tabDescriptions: {
      all: mediaTabDescriptions.all,
      ogstep: mediaTabDescriptions.ogstep,
      consults: mediaTabDescriptions.consults,
      school: mediaTabDescriptions.school,
    },
  })
}

async function main() {
  await build()
  console.log(`\nCommitting ${docs.length} documents (${uploaded} assets uploaded, ${missing} files missing)...`)
  // Commit in chunks to stay within transaction limits.
  const chunkSize = 50
  for (let i = 0; i < docs.length; i += chunkSize) {
    const tx = client.transaction()
    for (const d of docs.slice(i, i + chunkSize)) tx.createOrReplace(d)
    await tx.commit()
    console.log(`  committed ${Math.min(i + chunkSize, docs.length)}/${docs.length}`)
  }
  console.log('\n✅ Seed complete.')
}

main().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
