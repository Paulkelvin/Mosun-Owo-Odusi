import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'order', title: 'Sort order', type: 'number' }),
    defineField({ name: 'title', title: 'Role / title', type: 'string' }),
    defineField({ name: 'company', type: 'string' }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: ['Project Management', 'Education Consulting', 'Real Estate Advisory', 'Leadership & Strategy'],
      },
    }),
    defineField({ name: 'rating', type: 'number', initialValue: 5, validation: (Rule) => Rule.min(1).max(5) }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({
      name: 'portrait',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string' }],
    }),
    defineField({ name: 'content', title: 'Quote', type: 'blockContent' }),
    defineField({
      name: 'highlights',
      title: 'Highlight words (home preview)',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({ name: 'featuredOnHome', title: 'Featured on home', type: 'boolean', initialValue: false }),
  ],
  orderings: [{ title: 'Sort order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'title', media: 'portrait' } },
})
