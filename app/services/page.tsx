import { Metadata } from 'next'
import ServicesPage from './ServicesPage'
import { servicesPageQuery, sanityFetch } from '@/sanity/queries'

export const metadata: Metadata = {
  title: 'Professional Services – Mosun Owo-Odusi',
  description: 'Project management and education consulting services. 15+ years leading World Bank projects and transformational initiatives.',
  keywords: ['project management', 'education consulting', 'real estate advisory', 'consulting', 'world bank projects', 'OGSTEP', 'PMP'],
  openGraph: {
    title: 'Professional Services – Mosun Owo-Odusi',
    description: 'Project management and education consulting services. 15+ years leading World Bank projects.',
    url: 'https://mosunowoodusi.com/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Services',
    description: 'Project management and education consulting services.',
  },
  alternates: { canonical: '/services' },
}

export const revalidate = 60

export default async function Services() {
  const doc = await sanityFetch<any>(servicesPageQuery).catch(() => null)

  const data = doc
    ? {
        heroBadge: doc.heroBadge,
        heroHeading: doc.heroHeading,
        heroSubheading: doc.heroSubheading,
        heroCtaLabel: doc.heroCtaLabel,
        heroCtaHref: doc.heroCtaHref,
        heroStats: doc.heroStats,
        services: (doc.services || []).map((s: any) => ({
          icon: s.icon,
          title: s.title,
          desc: s.summary,
          body: s.body,
          services: s.points,
          color: s.colorFrom,
          action: s.actionLabel,
          link: s.actionLink,
        })),
        venturesHeading: doc.venturesHeading,
        venturesIntro: doc.venturesIntro,
        ventures: doc.ventures,
        statsHeading: doc.statsHeading,
        stats: doc.stats,
        ctaHeading: doc.ctaHeading,
        ctaText: doc.ctaText,
        ctaButton: doc.ctaButton,
      }
    : undefined

  return <ServicesPage data={data} />
}
