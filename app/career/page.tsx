import type { Metadata } from 'next'
import HighlightText from '@/components/HighlightText'

export const metadata: Metadata = {
  title: 'Career & Consulting - Mosun Owo-Odusi',
  description: 'Professional consulting services and career expertise in project management, education reform, and strategic leadership.',
}

export default function Career() {
  return (
    <div className="min-h-screen section-padding pt-16 lg:pt-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            <HighlightText highlightColor="gray">Career</HighlightText> & <span className="gradient-text">Consulting</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            Professional services and consulting expertise
          </p>
          <div className="bg-white rounded-2xl shadow-medium p-8 text-left">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Services Offered</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Project Management Consulting</h3>
                <p className="text-slate-600">Strategic project planning and execution</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Education Consulting</h3>
                <p className="text-slate-600">Policy reform and institutional development</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Real Estate Advisory</h3>
                <p className="text-slate-600">Market analysis and investment strategies</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Leadership Development</h3>
                <p className="text-slate-600">Team building and organizational transformation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}