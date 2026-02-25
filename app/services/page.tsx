import { Metadata } from 'next'
import ServicesPage from './ServicesPage'

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
  alternates: {
    canonical: '/services',
  },
}

export default function Services() {
  return <ServicesPage />
}
