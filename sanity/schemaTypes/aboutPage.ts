import { defineType, defineField } from 'sanity'

const imageWithAlt = {
  type: 'image' as const,
  options: { hotspot: true },
  fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
}

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeading', type: 'string' }),
    defineField({ name: 'heroImage', ...imageWithAlt }),

    defineField({ name: 'bioHeading', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio (rich text)', type: 'blockContent' }),
    defineField({ name: 'portrait', ...imageWithAlt }),

    defineField({ name: 'careerHeading', type: 'string' }),
    defineField({ name: 'careerPositions', type: 'array', of: [{ type: 'careerPosition' }] }),

    defineField({ name: 'educationHeading', type: 'string' }),
    defineField({ name: 'education', type: 'array', of: [{ type: 'credential' }] }),

    defineField({ name: 'certificationsHeading', type: 'string' }),
    defineField({ name: 'certifications', type: 'array', of: [{ type: 'credential' }] }),

    defineField({ name: 'membershipsHeading', type: 'string' }),
    defineField({ name: 'memberships', type: 'array', of: [{ type: 'credential' }] }),
  ],
  preview: { prepare: () => ({ title: 'About Page' }) },
})
