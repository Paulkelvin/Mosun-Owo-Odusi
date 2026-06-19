import type { Metadata } from 'next'
import HighlightText from '@/components/HighlightText'
import { careerPageQuery, sanityFetch } from '@/sanity/queries'

export const metadata: Metadata = {
  title: 'Career & Consulting - Mosun Owo-Odusi',
  description: 'Professional consulting services and career expertise in project management, education reform, and strategic leadership.',
}

export const revalidate = 60

const defaultServices = [
  { title: 'Project Management Consulting', description: 'Strategic project planning and execution' },
  { title: 'Education Consulting', description: 'Policy reform and institutional development' },
  { title: 'Real Estate Advisory', description: 'Market analysis and investment strategies' },
  { title: 'Leadership Development', description: 'Team building and organizational transformation' },
]

export default async function Career() {
  const data = await sanityFetch<any>(careerPageQuery).catch(() => null)
  const services = data?.services?.length ? data.services : defaultServices

  return (
    <div className="min-h-screen section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {data?.heroHeading ? (
              data.heroHeading
            ) : (
              <>
                <HighlightText highlightColor="gray">Career</HighlightText> & <span className="gradient-text">Consulting</span>
              </>
            )}
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            {data?.heroSubheading ?? 'Professional services and consulting expertise'}
          </p>
          <div className="bg-white rounded-2xl shadow-medium p-8 text-left">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{data?.servicesHeading ?? 'Services Offered'}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s: any) => (
                <div key={s.title}>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-600">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
