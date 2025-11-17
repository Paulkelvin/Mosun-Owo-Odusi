import { Metadata } from 'next'
import ServicesPage from './ServicesPage'

export const metadata: Metadata = {
  title: 'Professional Services – Mosun Owo-Odusi',
  description: 'Comprehensive consulting services in project management, security services, and real estate advisory with over 15 years of strategic leadership experience.',
  keywords: ['project management', 'security services', 'real estate advisory', 'consulting', 'strategic leadership', 'project consulting'],
}

export default function Services() {
  return <ServicesPage />
}
