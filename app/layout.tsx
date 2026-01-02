import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ToastProvider from '@/components/ToastProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Mosun Owo-Odusi | Leadership, Project Management & Advisory',
  description: 'Portfolio of Mosun Owo-Odusi, showcasing 20+ years of leading high-impact projects across public and private sectors, including her role as former Project Coordinator of the Ogun State Economic Transformation Project (OGSTEP).',
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
    url: 'https://mosun-owo-odusi.vercel.app',
    title: 'Mosun Owo-Odusi | Leadership, Project Management & Advisory',
    description: 'Explore the work of Mosun Owo-Odusi, a leader on high-impact public and private sector projects, and former Project Coordinator of the Ogun State Economic Transformation Project (OGSTEP).',
    siteName: 'Mosun Owo-Odusi',
    images: [
      {
	        url: '/images/mosun_owo-odusi_portrait.png',
        width: 1200,
        height: 630,
        alt: 'Mosun Owo-Odusi - Professional Portrait',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mosun Owo-Odusi | Leadership, Project Management & Advisory',
    description: 'Mosun Owo-Odusi leads high-impact projects across public and private sectors and previously coordinated the Ogun State Economic Transformation Project (OGSTEP).',
    images: ['/images/mosun_owo-odusi_portrait.png'],
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
        <ToastProvider />
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