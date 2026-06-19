import ProjectsView from '@/components/ProjectsView'
import { urlFor } from '@/sanity/image'
import { projectsQuery, sanityFetch } from '@/sanity/queries'

export const revalidate = 60

const imgUrl = (img: any, w = 1200) => (img ? urlFor(img).width(w).url() : undefined)

export default async function Page() {
  const docs = await sanityFetch<any[]>(projectsQuery).catch(() => [])

  const projects = (docs || []).map((p, idx) => ({
    id: idx + 1,
    year: p.year,
    title: p.title,
    category: p.category,
    status: p.status,
    budget: p.budget,
    beneficiaries: p.beneficiaries,
    duration: p.duration,
    location: p.location,
    image: (p.logo ? imgUrl(p.logo, 400) : undefined) || '/images/amVille_CONSULT_logo.png',
    description: p.description,
    impact: p.impact,
    tags: p.tags || [],
    milestones: (p.milestones || []).map((m: any) => ({
      id: m.key || m._key,
      title: m.title,
      period: m.period,
      description: m.description,
      achievements: (m.achievements || []).map((a: any) => (a.sourceUrl ? `${a.text} - ${a.sourceUrl}` : a.text)),
      metrics: Object.fromEntries((m.metrics || []).map((kv: any) => [kv.label, kv.value])),
      images: (m.images || []).map((img: any) => imgUrl(img, 1200)).filter(Boolean),
    })),
  }))

  return <ProjectsView projects={projects.length ? projects : undefined} />
}
