import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Mosun Owo-Odusi | Strategic Project Manager & World Bank Consultant',
  description: 'Learn about Mosun Owo-Odusi’s 30-year career driving World Bank projects (OGSTEP), educational turnaround strategies, and real estate advisory.',
  keywords: ['Mosun Owo-Odusi', 'World Bank Consultant', 'PMP Project Manager', 'Education Leader Nigeria', 'Project Coordinator'],
  openGraph: {
    title: 'About Mosun Owo-Odusi | Strategic Project Manager',
    description: 'Learn about Mosun Owo-Odusi’s 30-year career driving World Bank projects.',
    url: 'https://mosunowoodusi.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Mosun Owo-Odusi | Strategic Project Manager',
    description: 'Learn about Mosun Owo-Odusi’s 30-year career driving World Bank projects.',
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
