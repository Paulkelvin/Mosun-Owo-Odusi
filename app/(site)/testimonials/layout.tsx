import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials & Reviews | Mosun Owo-Odusi',
  description: 'Read recommendations and reviews from industry leaders, colleagues, and clients about working with Mosun Owo-Odusi on strategic management and development projects.',
  keywords: ['Mosun Owo-Odusi reviews', 'PMP Consultant reviews', 'leadership recommendations', 'client testimonials'],
  openGraph: {
    title: 'Testimonials & Reviews | Mosun Owo-Odusi',
    description: 'Read recommendations from industry leaders about working with Mosun Owo-Odusi.',
    url: 'https://mosunowoodusi.com/testimonials',
  },
  alternates: {
    canonical: '/testimonials',
  },
}

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const testimonialsSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mosun Owo-Odusi Professional Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "4"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Unyime Eyo" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Mosun stands out for her exceptional leadership qualities, guiding the team through complex challenges."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Toyosi Babatunde" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Mosun Owo-Odusi is an excellent administrator and team lead. Executed with precision, excellence and professionalism."
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialsSchema) }}
      />
      {children}
    </>
  )
}
