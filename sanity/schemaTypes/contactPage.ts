import { defineType, defineField } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeading', type: 'string' }),
    defineField({ name: 'heroSubheading', type: 'text', rows: 2 }),
    defineField({ name: 'formHeading', type: 'string' }),

    defineField({ name: 'getInTouchHeading', type: 'string' }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'linkedinLabel', type: 'string' }),
    defineField({ name: 'locationLabel', type: 'string' }),
    defineField({ name: 'locationNote', type: 'string' }),

    defineField({ name: 'responseTime', type: 'string' }),
    defineField({ name: 'timeZone', type: 'string' }),

    defineField({ name: 'areasOfExpertiseHeading', type: 'string' }),
    defineField({ name: 'areasOfExpertise', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: { prepare: () => ({ title: 'Contact Page' }) },
})
