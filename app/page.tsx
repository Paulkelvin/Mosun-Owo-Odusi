import Hero from '@/components/Hero'
import ExpertiseTabs from '@/components/ExpertiseTabs'
import FeaturedWork from '@/components/FeaturedWork'
import FeaturedProject from '@/components/FeaturedProject'
import TestimonialPreview from '@/components/TestimonialPreview'
import Organizations from '@/components/Organizations'
import OGSTEPImpactSection from '@/components/OGSTEPImpactSection'
import { Icon } from '@/sanity/icons'
import { urlFor } from '@/sanity/image'
import { homePageQuery, sanityFetch } from '@/sanity/queries'

const projectLabel: Record<string, string> = { ogstep: 'OGSTEP', consults: 'Amville Consults', school: 'Amville School' }

const imgUrl = (img: any, w = 1000) => (img ? urlFor(img).width(w).url() : undefined)
const toPlainText = (blocks: any[]) =>
  (blocks || []).map((b) => (b.children || []).map((c: any) => c.text).join('')).join('\n\n')
const numOrStr = (v: any) => {
  const n = Number(v)
  return v !== '' && v != null && !isNaN(n) ? n : v
}

export const revalidate = 60

export default async function Home() {
  const data = await sanityFetch<any>(homePageQuery).catch(() => null)

  const hero = data?.hero
  const orgLogos = (data?.organizationLogos || []).map((l: any) => ({ src: imgUrl(l.image, 300) || '', alt: l.alt }))
  const expertiseAreas = (data?.expertiseAreas || []).map((a: any) => ({
    id: a.key,
    title: a.title,
    icon: <Icon name={a.icon} className="w-6 h-6" />,
    description: a.description,
    details: a.details || [],
  }))
  const marquee = (data?.marqueeImages || [])
    .filter((m: any) => m?.image)
    .map((m: any) => ({ src: imgUrl(m.image, 900) || '', alt: m.alt || '', project: m.project, projectName: projectLabel[m.project] || '' }))
  const metrics = (data?.headlineMetrics || []).map((m: any) => ({
    title: m.label,
    value: numOrStr(m.value),
    prefix: m.prefix,
    suffix: m.suffix,
    caption: m.caption,
    icon: m.icon,
  }))
  const featuredTestimonials = (data?.featuredTestimonials || []).map((t: any) => ({
    quote: toPlainText(t.content),
    highlights: t.highlights || [],
    name: t.name,
    role: t.title || '',
    project: t.company || '',
    imageSrc: t.portrait ? imgUrl(t.portrait, 200) : undefined,
  }))

  return (
    <div className="relative mt-16 lg:mt-20">
      <Hero
        headline={hero?.headline}
        subheadline={hero?.subheadline}
        ctaLabel={hero?.ctaLabel}
        ctaHref={hero?.ctaHref}
        backgroundImage={imgUrl(hero?.backgroundImage, 1600)}
      />
      <Organizations heading={data?.organizationsHeading} logos={orgLogos.length ? orgLogos : undefined} />
      <ExpertiseTabs heading={data?.expertiseHeading} intro={data?.expertiseIntro} areas={expertiseAreas.length ? expertiseAreas : undefined} />
      <FeaturedWork heading={data?.featuredWorkHeading} images={marquee.length ? marquee : undefined} />
      <FeaturedProject />
      <OGSTEPImpactSection
        heading={data?.impactHeading}
        intro={data?.impactIntro}
        metrics={metrics.length ? metrics : undefined}
        divisions={data?.divisionCoverage}
      />
      <TestimonialPreview
        heading={data?.testimonialsHeading}
        intro={data?.testimonialsIntro}
        testimonials={featuredTestimonials.length ? featuredTestimonials : undefined}
      />
    </div>
  )
}
