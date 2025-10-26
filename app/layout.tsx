import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Mosun Owo-Odusi | Project Manager & Education Consultant',
  description: 'Driving Impact Through Strategic Leadership and Collaboration - Project Manager, Education Consultant, and Real Estate Advisor',
  keywords: ['project management', 'education consulting', 'real estate advisory', 'leadership', 'strategy', 'world bank', 'development projects'],
  authors: [{ name: 'Mosun Owo-Odusi' }],
  creator: 'Mosun Owo-Odusi',
  publisher: 'Mosun Owo-Odusi',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Mosun Owo-Odusi | Project Manager & Education Consultant',
    description: 'Driving Impact Through Strategic Leadership and Collaboration',
    siteName: 'Mosun Owo-Odusi Professional Website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mosun Owo-Odusi | Project Manager & Education Consultant',
    description: 'Driving Impact Through Strategic Leadership and Collaboration',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#1a365d',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <div className="min-w-0 overflow-x-hidden">
          <Header />
          <main className="min-h-screen max-w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}