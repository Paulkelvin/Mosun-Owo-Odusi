import { defineType, defineField } from 'sanity'

export const testimonialsPage = defineType({
  name: 'testimonialsPage',
  title: 'Testimonials Page',
  type: 'document',
  description: 'Header + CTA copy. Testimonials themselves are "Testimonial" documents.',
  fields: [
    defineField({ name: 'heroBadge', type: 'string' }),
    defineField({ name: 'heroHeading', type: 'string' }),
    defineField({ name: 'heroSubheading', type: 'text', rows: 3 }),
    defineField({ name: 'ctaHeading', type: 'string' }),
    defineField({ name: 'ctaText', type: 'text', rows: 2 }),
    defineField({ name: 'ctaButton', type: 'ctaLink' }),
  ],
  preview: { prepare: () => ({ title: 'Testimonials Page' }) },
})
