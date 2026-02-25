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
  metadataBase: new URL('https://mosunowoodusi.com'),
  title: 'Mosun Owo-Odusi | World Bank Project Coordinator & Strategic Advisor',
  description: 'Strategic advisor with 20+ years leading World Bank-funded transformations. 72,000+ lives impacted across project management and public sector reform.',
  keywords: ['project management', 'education consulting', 'real estate advisory', 'leadership', 'strategy', 'world bank', 'development projects', 'economic transformation', 'strategic advisor'],
  authors: [{ name: 'Mosun Owo-Odusi' }],
  creator: 'Mosun Owo-Odusi',
  publisher: 'Mosun Owo-Odusi',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mosunowoodusi.com',
    title: 'Mosun Owo-Odusi | World Bank Project Coordinator & Strategic Advisor',
    description: 'Strategic advisor with 20+ years leading World Bank-funded transformations. 72,000+ lives impacted across project management and public sector reform.',
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
    title: 'Mosun Owo-Odusi | World Bank Project Coordinator & Strategic Advisor',
    description: 'Strategic advisor with 20+ years leading World Bank-funded transformations. 72,000+ lives impacted.',
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mosun Owo-Odusi",
    "jobTitle": "Project Coordinator & Strategic Advisor",
    "description": "Strategic advisor specializing in World Bank-funded economic transformations, project management, education consultancy, and real estate advisory",
    "url": "https://mosunowoodusi.com",
    "image": "https://mosunowoodusi.com/images/mosun_owo-odusi_portrait.png",
    "sameAs": [
      "https://www.linkedin.com/in/mosun-owo-odusi-mba-pmp-736a1419"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Lagos"
    },
    "hasCredential": ["MBA", "PMP"],
    "knowsAbout": [
      "Project Management",
      "Economic Transformation",
      "Education Consultancy",
      "Real Estate Advisory",
      "World Bank Projects",
      "Strategic Leadership"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "Nigeria"
    }
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mosun Owo-Odusi",
    "url": "https://mosunowoodusi.com",
    "logo": "https://mosunowoodusi.com/images/mosun_owo-odusi_portrait.png",
    "description": "Strategic consulting in project management, education reform, and real estate advisory",
    "founder": {
      "@type": "Person",
      "name": "Mosun Owo-Odusi"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "Nigeria"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria"
    },
    "sameAs": [
      "https://www.linkedin.com/in/mosun-owo-odusi-mba-pmp-736a1419"
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mosunowoodusi.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://mosunowoodusi.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": "https://mosunowoodusi.com/services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Projects",
        "item": "https://mosunowoodusi.com/projects"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://mosunowoodusi.com/contact"
      }
    ]
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
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