import { Metadata } from 'next'
import MediaPage from './MediaPage'
import { urlFor } from '@/sanity/image'
import {
  galleryImagesQuery,
  videoHighlightsQuery,
  beforeAfterPairsQuery,
  mediaPageQuery,
  sanityFetch,
} from '@/sanity/queries'

export const metadata: Metadata = {
  title: 'Media & Speaking | Mosun Owo-Odusi',
  description: 'Watch public sector reform speeches, interviews, and media appearances by Mosun Owo-Odusi.',
  openGraph: {
    title: 'Media & Speaking | Mosun Owo-Odusi',
    description: 'Watch public sector reform speeches, interviews, and media appearances.',
    url: 'https://mosunowoodusi.com/media',
  },
  alternates: { canonical: '/media' },
}

export const revalidate = 60

const imgUrl = (img: any, w = 1400) => (img ? urlFor(img).width(w).url() : '')

export default async function Media() {
  const [gallery, videos, beforeAfter, page] = await Promise.all([
    sanityFetch<any[]>(galleryImagesQuery).catch(() => []),
    sanityFetch<any[]>(videoHighlightsQuery).catch(() => []),
    sanityFetch<any[]>(beforeAfterPairsQuery).catch(() => []),
    sanityFetch<any>(mediaPageQuery).catch(() => null),
  ])

  const galleryImages = (gallery || [])
    .filter((g) => g.image)
    .map((g) => ({ src: imgUrl(g.image), alt: g.alt || '', category: g.category || '', project: g.project, caption: g.caption }))

  const videoHighlights = (videos || []).map((v) => ({
    id: v._id,
    title: v.title,
    src: v.kind === 'mp4' ? v.videoUrl : v.driveUrl,
    kind: v.kind,
    project: v.project,
    series: v.series,
  }))

  const beforeAfterPairs = (beforeAfter || [])
    .filter((b) => b.before && b.after)
    .map((b) => ({ label: b.label, context: b.context || '', before: imgUrl(b.before), after: imgUrl(b.after) }))

  const media = {
    galleryImages: galleryImages.length ? galleryImages : undefined,
    videoHighlights: videoHighlights.length ? videoHighlights : undefined,
    beforeAfterPairs: beforeAfterPairs.length ? beforeAfterPairs : undefined,
    descriptions: page?.tabDescriptions || undefined,
  }

  return <MediaPage media={media} />
}
