import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About – Mosun Owo-Odusi',
  description: '15+ years leading World Bank projects, education reform, and strategic transformations across public and private sectors.',
  openGraph: {
    title: 'About Mosun Owo-Odusi',
    description: '15+ years leading World Bank projects, education reform, and strategic transformations.',
    url: 'https://mosunowoodusi.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Mosun Owo-Odusi',
    description: '15+ years leading World Bank projects, education reform, and strategic transformations.',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
