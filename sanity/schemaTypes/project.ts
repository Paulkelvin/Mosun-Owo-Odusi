import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'order', title: 'Sort order', type: 'number' }),
    defineField({ name: 'year', type: 'number' }),
    defineField({ name: 'category', type: 'string' }),
    defineField({ name: 'status', type: 'string' }),
    defineField({ name: 'budget', type: 'string' }),
    defineField({ name: 'beneficiaries', type: 'string' }),
    defineField({ name: 'duration', type: 'string' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({
      name: 'logo',
      title: 'Logo / lead image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string' }],
    }),
    defineField({ name: 'description', type: 'text', rows: 4 }),
    defineField({ name: 'impact', type: 'text', rows: 4 }),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'milestones', type: 'array', of: [{ type: 'milestone' }] }),
    defineField({ name: 'featured', title: 'Featured on home', type: 'boolean', initialValue: false }),
  ],
  orderings: [{ title: 'Sort order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'category', media: 'logo' } },
})
