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
  title: 'Mosun Owo-Odusi | Project Manager & Education Consultant',
  description: 'Mosun is a strategic leader specializing in project management, education consultancy, and real estate advisory with extensive experience in World Bank initiatives and development projects.',
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
    url: 'https://mosun-owo-odusi.netlify.app',
    title: 'Mosun Owo-Odusi | Project Manager & Education Consultant',
    description: 'Mosun is a strategic leader specializing in project management, education consultancy, and real estate advisory with extensive World Bank experience.',
    siteName: 'Mosun Owo-Odusi Professional Website',
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
    title: 'Mosun Owo-Odusi | Project Manager & Education Consultant',
    description: 'Mosun is a strategic leader specializing in project management, education consultancy, and real estate advisory with extensive World Bank experience.',
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