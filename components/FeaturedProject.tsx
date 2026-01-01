'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, Building2, Users, GraduationCap, Sprout } from 'lucide-react'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HighlightText from './HighlightText'
import DotPattern from './DotPattern'

export default function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])
  // Ensure the image is fully scaled (1) as soon as the section heading appears,
  // then allow a subtle growth beyond 1 later in the scroll for depth
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 1.08])

  // Enhanced surround glow that becomes more visible as the section scrolls into view (solid color)
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.08])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 0.38, 0.56, 0.78])

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-primary-50/30 overflow-hidden lg:py-16 relative">
      <DotPattern position="center-right" color="primary" size="sm" rows={5} cols={5} opacity={0.25} />
      
      <div className="container-custom max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 lg:mb-10"
        >
          {/* Main Heading with Split Font Weight/Color and animated underline */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl mb-6 lg:mb-4 relative inline-block"
          >
            <span className="font-bold text-slate-900">Featured</span>{' '}
            <span className="font-semibold text-slate-600">Project</span>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-transparent rounded-full origin-left"
            />
          </motion.h2>
          
          {/* Sub-heading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl font-light text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Showcasing transformative initiatives that create lasting impact and measurable change
          </motion.p>
        </motion.div>

  <div ref={ref} className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center max-w-full">
          
          {/* Project Image with Parallax */}
          <motion.div 
	        style={{ y }}
            className="relative overflow-hidden rounded-2xl"
          >
            {/* Surround Gradient Glow */}
            <motion.div
              aria-hidden
              style={{ scale: glowScale, opacity: glowOpacity }}
              className="pointer-events-none absolute -inset-4 rounded-3xl bg-primary-600/80 blur-2xl z-0"
            />

            <motion.div 
              style={{ scale }}
              className="relative h-96 lg:h-96 rounded-2xl shadow-large overflow-hidden group z-10 ring-2 ring-primary-600/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured Project Image */}
              <Image
	        src="/images/OGSTEP_Agric (1).JPG"
	        alt="OGSTEP agricultural field engagement with farmers"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Dark overlay to increase contrast and avoid washed-out appearance */}
	      <div
	        aria-hidden
	        className="pointer-events-none absolute inset-0 bg-slate-900/35"
	      />
            </motion.div>
            
            {/* Floating Stats - Gold background cards matching testimonial accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute bottom-4 left-4 rounded-xl shadow-lg p-4 z-20"
              style={{ backgroundColor: '#F0C419' }}
            >
              <div className="text-2xl font-bold text-slate-900">$250M</div>
              <div className="text-sm text-slate-900/90">Value Managed</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute top-4 right-4 rounded-xl shadow-lg p-4 z-20"
              style={{ backgroundColor: '#F0C419' }}
            >
              <div className="text-2xl font-bold text-slate-900">72K+</div>
              <div className="text-sm text-slate-900/90">Lives Benefited</div>
            </motion.div>
          </motion.div>

          {/* Project Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-4"
          >
            <div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 mt-4 lg:mt-0"
              >
                <a 
                  href="https://ogstep.org.ng/about-ogstep" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-700 transition-colors"
                  title="Learn more about OGSTEP"
                >
                  OGSTEP: World Bank Economic Transformation Initiative
                </a>
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-slate-600 leading-relaxed lg:leading-normal mb-6 lg:mb-4"
              >
                Directing the OGSTEP project, a <span className="font-bold text-2xl text-primary-700 inline-block mx-1">$250M</span>{' '}
                <a 
                  href="https://projects.worldbank.org/en/projects-operations/projects-list?countrycode_exact=NG&title=Nigeria&countryshortname_exact=Nigeria&status_exact=Active&os=0&strdate=01-01-2020&enddate=12-22-2021#:~:text=Ogun%20State%20Economic%20Transformation%20Project" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-primary-600 hover:text-primary-700 underline decoration-2 underline-offset-2"
                  title="View World Bank project details"
                >
                  World Bank
                </a>-funded initiative designed to drive Ogun State&apos;s industrial renaissance. As Project Coordinator, lead a cross-functional delivery team across agriculture, technology, and vocational education, achieving an 85% project success rate state-wide with{' '}
                <a 
                  href="https://punchng.com/ogun-empowers-over-72000-residents-with-agric-skills/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-primary-600 hover:text-primary-700 underline decoration-2 underline-offset-2"
                  title="Click to verify from official source"
                >
                  72,000+ beneficiaries
                </a>.
              </motion.p>
            </div>

            {/* Key Achievements */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4 lg:space-y-3"
            >
              <h4 className="font-semibold text-slate-900 mb-3">Key Achievements:</h4>
              {[
                {
                  icon: <Building2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />,
                  text: 'Institutional Reform: Digitized land administration via OLARMS, successfully issuing 15,000+ Certificates of Occupancy to unlock private sector investment and improve the Ease of Doing Business.'
                },
                {
                  icon: <Users className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />,
                  text: 'Strategic Partnerships: Harmonized policy objectives between the World Bank, Federal Ministries, and private off-takers to ensure sustainable economic growth.'
                },
                {
                  icon: <GraduationCap className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />,
                  text: 'Modern Education: Revitalized 8 Government Technical Colleges and equipped 34 institutions with smart-learning labs and vocational STEM infrastructure under the Skills Development Fund.'
                },
                {
                  icon: <Sprout className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />,
                  text: 'Agricultural Innovation: Launched OGFIMS, a first-of-its-kind digital registry, integrating 160,000 farmers into a modern, commercialized value chain.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  {item.icon}
                  <span className="text-slate-700">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-4 lg:pt-2"
            >
              <Link href="/projects?presentation=ogstep">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center rounded-lg bg-primary-600 px-5 py-3 text-white shadow-lg transition-colors hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                >
                  See Story
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}