import InsightsPage from './InsightsPage'
import { insightsListQuery, insightsPageQuery, sanityFetch } from '@/sanity/queries'

export const metadata = {
  title: 'Insights | Mosun Owo-Odusi',
  description: 'Thought leadership and reflections on public sector reform, skills development, and institutional transformation from over 30 years of experience.',
}

export const revalidate = 60

const ptToParagraphs = (blocks: any[]) =>
  (blocks || [])
    .filter((b) => b._type === 'block')
    .map((b) => (b.children || []).map((c: any) => c.text).join(''))
    .filter(Boolean)

export default async function Page() {
  const [list, header] = await Promise.all([
    sanityFetch<any[]>(insightsListQuery).catch(() => []),
    sanityFetch<any>(insightsPageQuery).catch(() => null),
  ])

  const articles = (list || []).map((a) => ({
    id: a.slug || a._id,
    title: a.title,
    subtitle: a.subtitle || '',
    readTime: a.readTime || '',
    date: a.date || '',
    tag: a.tag || '',
    body: ptToParagraphs(a.body),
  }))

  return (
    <InsightsPage
      articles={articles.length ? articles : undefined}
      heroBadge={header?.heroBadge}
      heroHeading={header?.heroHeading}
      heroSubheading={header?.heroSubheading}
    />
  )
}
