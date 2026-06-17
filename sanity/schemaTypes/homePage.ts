import { defineType, defineField } from 'sanity'

const imageWithAlt = {
  type: 'image' as const,
  options: { hotspot: true },
  fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
}

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'orgs', title: 'Organizations' },
    { name: 'expertise', title: 'Expertise' },
    { name: 'featured', title: 'Featured work & project' },
    { name: 'impact', title: 'OGSTEP impact' },
    { name: 'testimonials', title: 'Testimonials' },
  ],
  fields: [
    // Hero
    defineField({
      name: 'hero',
      type: 'object',
      group: 'hero',
      fields: [
        { name: 'headline', type: 'string' },
        { name: 'subheadline', type: 'text', rows: 3 },
        { name: 'ctaLabel', type: 'string' },
        { name: 'ctaHref', type: 'string' },
        { name: 'backgroundImage', ...imageWithAlt },
      ],
    }),
    // Organizations
    defineField({ name: 'organizationsHeading', type: 'string', group: 'orgs' }),
    defineField({ name: 'organizationLogos', type: 'array', of: [{ type: 'logo' }], group: 'orgs' }),
    // Expertise
    defineField({ name: 'expertiseHeading', type: 'string', group: 'expertise' }),
    defineField({ name: 'expertiseIntro', type: 'text', rows: 2, group: 'expertise' }),
    defineField({ name: 'expertiseAreas', type: 'array', of: [{ type: 'expertiseArea' }], group: 'expertise' }),
    // Featured work (marquee) + featured project
    defineField({ name: 'featuredWorkHeading', type: 'string', group: 'featured' }),
    defineField({ name: 'featuredWorkIntro', type: 'text', rows: 2, group: 'featured' }),
    defineField({
      name: 'marqueeImages',
      title: 'Marquee images',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'galleryImage' }] }],
      group: 'featured',
    }),
    defineField({
      name: 'featuredProject',
      type: 'object',
      group: 'featured',
      fields: [
        { name: 'heading', type: 'string' },
        { name: 'subheading', type: 'text', rows: 2 },
        { name: 'project', type: 'reference', to: [{ type: 'project' }] },
        { name: 'image', ...imageWithAlt },
      ],
    }),
    // OGSTEP impact section
    defineField({ name: 'impactHeading', type: 'string', group: 'impact' }),
    defineField({ name: 'impactIntro', type: 'text', rows: 2, group: 'impact' }),
    defineField({ name: 'headlineMetrics', type: 'array', of: [{ type: 'statItem' }], group: 'impact' }),
    defineField({ name: 'divisionCoverage', type: 'array', of: [{ type: 'divisionItem' }], group: 'impact' }),
    defineField({ name: 'impactPdfs', title: 'Impact PDFs', type: 'array', of: [{ type: 'pdfResource' }], group: 'impact' }),
    // Testimonials preview
    defineField({ name: 'testimonialsHeading', type: 'string', group: 'testimonials' }),
    defineField({ name: 'testimonialsIntro', type: 'text', rows: 2, group: 'testimonials' }),
    defineField({
      name: 'featuredTestimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
      group: 'testimonials',
    }),
  ],
  preview: { prepare: () => ({ title: 'Home Page' }) },
})
