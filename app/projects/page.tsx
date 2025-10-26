import type { Metadata } from 'next'
import HighlightText from '@/components/HighlightText'

export const metadata: Metadata = {
  title: 'Projects - Mosun Owo-Odusi',
  description: 'Explore Mosun Owo-Odusi\'s portfolio of transformative projects in education, development, and community impact.',
}

export default function Projects() {
  return (
    <div className="min-h-screen pt-20 section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            <span className="gradient-text">Projects</span> <HighlightText highlightColor="purple">Portfolio</HighlightText>
          </h1>
          <p className="text-xl text-slate-600">
            Transformative initiatives creating lasting impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-medium p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">World Bank Initiative</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Detailed case study of the featured World Bank-supported project showcasing 
              strategic leadership and measurable community impact.
            </p>
            <div className="text-sm text-primary-600 font-medium">Coming Soon</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-medium p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Education Reform</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Policy development and implementation projects that transformed 
              educational outcomes across multiple institutions.
            </p>
            <div className="text-sm text-primary-600 font-medium">Coming Soon</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-medium p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Strategic Consulting</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Real estate advisory and strategic consulting projects demonstrating 
              data-driven insights and sustainable investment strategies.
            </p>
            <div className="text-sm text-primary-600 font-medium">Coming Soon</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-medium p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Leadership Impact</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Cross-functional team leadership and organizational transformation 
              projects showcasing collaborative excellence.
            </p>
            <div className="text-sm text-primary-600 font-medium">Coming Soon</div>
          </div>
        </div>
      </div>
    </div>
  )
}