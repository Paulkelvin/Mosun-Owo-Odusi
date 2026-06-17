import { defineType, defineField } from 'sanity'

export const PROJECT_FILTER_OPTIONS = [
  { title: 'OGSTEP', value: 'ogstep' },
  { title: 'Amville Consults', value: 'consults' },
  { title: 'Amville School', value: 'school' },
]

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
    defineField({ name: 'caption', type: 'string' }),
    defineField({ name: 'category', type: 'string' }),
    defineField({
      name: 'project',
      type: 'string',
      options: { list: PROJECT_FILTER_OPTIONS },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'order', title: 'Sort order', type: 'number' }),
  ],
  orderings: [{ title: 'Sort order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'alt', subtitle: 'category', media: 'image' } },
})
