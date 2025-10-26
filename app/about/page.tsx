import type { Metadata } from 'next'
import HighlightText from '@/components/HighlightText'

export const metadata: Metadata = {
  title: 'About - Mosun Owo-Odusi',
  description: 'Learn more about Mosun Owo-Odusi\'s background, experience, and professional journey as a Project Manager and Education Consultant.',
}

export default function About() {
  return (
    <div className="min-h-screen pt-20 section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            <HighlightText highlightColor="emerald">About</HighlightText> <span className="gradient-text">Mosun</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            Detailed biography and professional journey coming soon
          </p>
          <div className="bg-white rounded-2xl shadow-medium p-8 text-left">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Professional Background</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              This page will feature a comprehensive overview of Mosun&apos;s professional journey, 
              educational background, key achievements, and the experiences that have shaped her 
              approach to project management and education consulting.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Coming Soon:</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• Detailed professional biography</li>
              <li>• Educational background and certifications</li>
              <li>• Career milestones and achievements</li>
              <li>• Personal mission and values</li>
              <li>• Leadership philosophy and approach</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}