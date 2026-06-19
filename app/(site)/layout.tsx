import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ToastProvider from '@/components/ToastProvider'
import { siteSettingsQuery, sanityFetch } from '@/sanity/queries'

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await sanityFetch<any>(siteSettingsQuery).catch(() => null)

  return (
    <>
      <ToastProvider />
      <div className="min-w-0 overflow-x-hidden">
        <Header nav={settings?.nav} />
        <main className="min-h-screen max-w-full">{children}</main>
        <Footer links={settings?.footerLinks} />
      </div>
    </>
  )
}
