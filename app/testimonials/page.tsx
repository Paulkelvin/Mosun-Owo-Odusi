import type { Metadata } from 'next'
import HighlightText from '@/components/HighlightText'

export const metadata: Metadata = {
  title: 'Testimonials - Mosun Owo-Odusi',
  description: 'Professional testimonials and recommendations from colleagues, clients, and partners.',
}

export default function Testimonials() {
  return (
    <div className="min-h-screen pt-20 section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            <HighlightText highlightColor="gold"><span className="gradient-text">Testimonials</span></HighlightText>
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            Professional recommendations and client feedback
          </p>
          <div className="bg-white rounded-2xl shadow-medium p-8">
            <p className="text-slate-600 leading-relaxed text-center">
              A comprehensive collection of testimonials from colleagues, clients, and partners 
              will be featured here, showcasing the impact and quality of professional work 
              and collaborative relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}