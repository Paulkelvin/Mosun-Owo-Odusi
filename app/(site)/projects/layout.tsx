import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects & Impact – Mosun Owo-Odusi',
  description: 'World Bank OGSTEP coordination, 72,000+ beneficiaries impacted, education transformation, and real estate development projects.',
  openGraph: {
    title: 'Projects & Impact – Mosun Owo-Odusi',
    description: 'Explore transformative projects: World Bank OGSTEP, education reform, and strategic development initiatives.',
    url: 'https://mosunowoodusi.com/projects',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects & Impact',
    description: 'World Bank OGSTEP, education reform, and strategic development initiatives.',
  },
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
