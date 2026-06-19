import AboutView from '@/components/AboutView'
import { urlFor } from '@/sanity/image'
import { aboutPageQuery, sanityFetch } from '@/sanity/queries'

export const revalidate = 60

const imgUrl = (img: any, w = 1200) => (img ? urlFor(img).width(w).url() : undefined)

export default async function Page() {
  const doc = await sanityFetch<any>(aboutPageQuery).catch(() => null)

  const data = doc
    ? {
        heroHeading: doc.heroHeading,
        heroImageUrl: imgUrl(doc.heroImage, 1600),
        portraitUrl: imgUrl(doc.portrait, 800),
        careerPositions: doc.careerPositions,
      }
    : undefined

  return <AboutView data={data} />
}
