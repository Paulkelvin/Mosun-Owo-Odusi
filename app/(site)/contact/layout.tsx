import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Mosun Owo-Odusi | Project Management Consultant',
  description: 'Get in touch with Mosun Owo-Odusi for project management consulting, education turnaround strategies, and real estate advisory. Available worldwide.',
  keywords: ['Contact Mosun Owo-Odusi', 'Hire Project Manager', 'Education Consultant Nigeria', 'PMP Consultant'],
  openGraph: {
    title: 'Contact Mosun Owo-Odusi | Project Management Consultant',
    description: 'Get in touch with Mosun Owo-Odusi for project management consulting and education strategies.',
    url: 'https://mosunowoodusi.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Mosun Owo-Odusi | Project Management Consultant',
    description: 'Get in touch with Mosun Owo-Odusi for project management consulting and education strategies.',
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