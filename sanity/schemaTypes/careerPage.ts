import { defineType, defineField } from 'sanity'

export const careerPage = defineType({
  name: 'careerPage',
  title: 'Career Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeading', type: 'string' }),
    defineField({ name: 'heroSubheading', type: 'text', rows: 2 }),
    defineField({ name: 'servicesHeading', type: 'string' }),
    defineField({
      name: 'services',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'careerService',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'string' },
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Career Page' }) },
})
