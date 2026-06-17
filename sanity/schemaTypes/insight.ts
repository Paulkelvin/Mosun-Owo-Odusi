import { defineType, defineField } from 'sanity'

export const insight = defineType({
  name: 'insight',
  title: 'Insight / Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'order', title: 'Sort order', type: 'number' }),
    defineField({ name: 'subtitle', type: 'text', rows: 2 }),
    defineField({ name: 'readTime', type: 'string' }),
    defineField({ name: 'date', title: 'Date label', type: 'string' }),
    defineField({ name: 'tag', type: 'string' }),
    defineField({ name: 'body', title: 'Article body', type: 'blockContent' }),
  ],
  orderings: [{ title: 'Sort order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'tag' } },
})
