import TestimonialsView from '@/components/TestimonialsView'
import { testimonialsListQuery, testimonialsPageQuery, sanityFetch } from '@/sanity/queries'

export const revalidate = 60

const toPlainText = (blocks: any[]) =>
  (blocks || []).map((b) => (b.children || []).map((c: any) => c.text).join('')).join('\n\n')

export default async function Page() {
  const [list, header] = await Promise.all([
    sanityFetch<any[]>(testimonialsListQuery).catch(() => []),
    sanityFetch<any>(testimonialsPageQuery).catch(() => null),
  ])

  const testimonials = (list || []).map((t) => ({
    id: t._id,
    name: t.name,
    title: t.title || '',
    company: t.company || '',
    content: toPlainText(t.content),
    rating: t.rating ?? 5,
    category: t.category || '',
    social: { linkedin: t.linkedin || '' },
  }))

  return (
    <TestimonialsView
      testimonials={testimonials.length ? testimonials : undefined}
      heroBadge={header?.heroBadge}
      heroHeading={header?.heroHeading}
      heroSubheading={header?.heroSubheading}
      ctaHeading={header?.ctaHeading}
      ctaText={header?.ctaText}
      ctaButtonLabel={header?.ctaButton?.label}
      ctaButtonHref={header?.ctaButton?.href}
    />
  )
}
