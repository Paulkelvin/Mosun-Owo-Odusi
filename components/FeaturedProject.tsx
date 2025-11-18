'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, Building2, Users, GraduationCap, Sprout } from 'lucide-react'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HighlightText from './HighlightText'

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
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8])

  // Enhanced surround glow that becomes more visible as the section scrolls into view (solid color)
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.08])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 0.38, 0.56, 0.78])

  return (
    <section className="section-padding bg-gray-50 overflow-hidden lg:py-16">
      <div className="container-custom max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 lg:mb-10"
        >
          {/* Partial Bar Accent */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-10 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 mx-auto mb-3"
          />
          
          {/* Main Heading with Split Font Weight/Color */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl mb-6 lg:mb-4"
          >
            <span className="font-bold text-slate-900">Featured</span>{' '}
            <span className="font-semibold text-slate-600">Project</span>
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
            style={{ y, opacity }}
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
                src="/images/featured-project.png"
                alt="Featured Project - Transformative Community Initiative"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
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
              <div className="text-2xl font-bold text-slate-900">65K+</div>
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
                className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4"
              >
                OGSTEP: World Bank Economic Transformation Initiative
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-slate-600 leading-relaxed lg:leading-normal mb-6 lg:mb-4"
              >
                Spearheading a $250M World Bank-financed project focused on boosting private sector participation, enhancing agri-food value chains, and upgrading skills across Ogun State. As Project Coordinator, I led the multi-sectoral strategy and execution that drove these statewide reforms.
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
                  text: 'Governance & Business Reform: Streamlining land administration processes (e.g., 15,000+ C of Os issued) and advancing digital governance.'
                },
                {
                  icon: <Users className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />,
                  text: 'Multi-Sectoral Coordination: Successfully aligning the objectives of the World Bank, State Ministries, and numerous private sector stakeholders.'
                },
                {
                  icon: <GraduationCap className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />,
                  text: 'Human Capital Development: Overseeing the rehabilitation of 8 Technical Colleges and skills training for 17,000+ beneficiaries.'
                },
                {
                  icon: <Sprout className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />,
                  text: 'Agri-food Value Chain: Implementing digital management systems (OGFIMS) that digitized 160,000 farmers and value chain actors.'
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