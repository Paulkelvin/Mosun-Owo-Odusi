import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'brandName', title: 'Brand name', type: 'string' }),
    defineField({ name: 'nav', title: 'Header navigation', type: 'array', of: [{ type: 'navLink' }] }),
    defineField({ name: 'footerLinks', title: 'Footer links', type: 'array', of: [{ type: 'navLink' }] }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'contactEmail', title: 'Contact email', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'object',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'text', rows: 2 },
        {
          name: 'ogImage',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string' }],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
