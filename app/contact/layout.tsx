import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Mosun Owo-Odusi',
  description: 'Get in touch with Mosun Owo-Odusi for project management, education consulting, and strategic leadership opportunities.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}