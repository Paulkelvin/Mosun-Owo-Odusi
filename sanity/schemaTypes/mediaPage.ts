import { defineType, defineField } from 'sanity'

export const mediaPage = defineType({
  name: 'mediaPage',
  title: 'Media Page',
  type: 'document',
  description: 'Header + tab descriptions. Images/videos are their own documents.',
  fields: [
    defineField({ name: 'heroHeading', type: 'string' }),
    defineField({ name: 'heroSubheading', type: 'text', rows: 2 }),
    defineField({
      name: 'tabDescriptions',
      title: 'Tab descriptions',
      type: 'object',
      fields: [
        { name: 'all', title: 'All', type: 'text', rows: 2 },
        { name: 'ogstep', title: 'OGSTEP', type: 'text', rows: 2 },
        { name: 'consults', title: 'Amville Consults', type: 'text', rows: 2 },
        { name: 'school', title: 'Amville School', type: 'text', rows: 2 },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Media Page' }) },
})
