import { Metadata } from 'next'
import ServicesPage from './ServicesPage'

export const metadata: Metadata = {
  title: 'Professional Services – Mosun Owo-Odusi',
  description: 'Strategic consulting in project management, education reform, and real estate advisory. 20+ years leading World Bank projects and transformational initiatives.',
  keywords: ['project management', 'education consulting', 'real estate advisory', 'consulting', 'strategic leadership', 'world bank projects', 'economic transformation'],
  openGraph: {
    title: 'Professional Services – Mosun Owo-Odusi',
    description: 'Strategic consulting in project management, education reform, and real estate advisory.',
    url: 'https://mosunowoodusi.com/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Services',
    description: 'Strategic consulting in project management, education reform, and real estate advisory.',
  },
  alternates: {
    canonical: '/services',
  },
}

export default function Services() {
  return <ServicesPage />
}
