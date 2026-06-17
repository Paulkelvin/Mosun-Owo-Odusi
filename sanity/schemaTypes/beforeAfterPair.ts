import { defineType, defineField } from 'sanity'

const imageWithAlt = {
  type: 'image' as const,
  options: { hotspot: true },
  fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
}

export const beforeAfterPair = defineType({
  name: 'beforeAfterPair',
  title: 'Before / After Pair',
  type: 'document',
  fields: [
    defineField({ name: 'label', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'context', type: 'text', rows: 2 }),
    defineField({ name: 'order', title: 'Sort order', type: 'number' }),
    defineField({ name: 'before', ...imageWithAlt, validation: (Rule) => Rule.required() }),
    defineField({ name: 'after', ...imageWithAlt, validation: (Rule) => Rule.required() }),
  ],
  orderings: [{ title: 'Sort order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'label', media: 'before' } },
})
