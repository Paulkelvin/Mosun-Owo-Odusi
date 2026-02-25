import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact – Mosun Owo-Odusi',
  description: 'Connect with Mosun Owo-Odusi for strategic consulting in project management, education, and economic transformation.',
  openGraph: {
    title: 'Contact Mosun Owo-Odusi',
    description: 'Connect for strategic consulting in project management and economic transformation.',
    url: 'https://mosunowoodusi.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Mosun Owo-Odusi',
    description: 'Connect for strategic consulting in project management and economic transformation.',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}