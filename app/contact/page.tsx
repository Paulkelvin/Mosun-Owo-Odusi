import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Mosun Owo-Odusi',
  description: 'Get in touch with Mosun Owo-Odusi for project management, education consulting, and strategic leadership opportunities.',
}

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            Let's discuss how we can work together to create transformative impact
          </p>
          <div className="bg-white rounded-2xl shadow-medium p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
            <div className="space-y-4 text-left">
              <p className="text-slate-600">
                <strong>Professional Inquiries:</strong> Available for project management consulting, 
                education policy development, and strategic leadership initiatives.
              </p>
              <p className="text-slate-600">
                <strong>Collaboration Opportunities:</strong> Open to partnerships in development 
                projects, institutional capacity building, and transformative community initiatives.
              </p>
              <div className="mt-8 p-4 bg-primary-50 rounded-lg">
                <p className="text-primary-700 font-medium">
                  Contact form and professional contact details will be integrated here to facilitate 
                  direct communication for consulting and collaboration opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}