import { defineType, defineField } from 'sanity'

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroBadge', type: 'string' }),
    defineField({ name: 'heroHeading', type: 'string' }),
    defineField({ name: 'heroSubheading', type: 'text', rows: 3 }),
    defineField({ name: 'heroCtaLabel', type: 'string' }),
    defineField({ name: 'heroCtaHref', type: 'string' }),
    defineField({
      name: 'heroStats',
      title: 'Hero stat chips',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'heroStat',
          fields: [
            { name: 'label', type: 'string' },
            {
              name: 'icon',
              type: 'string',
              options: { list: ['landmark', 'award', 'network', 'briefcase', 'users', 'target'] },
            },
          ],
          preview: { select: { title: 'label' } },
        },
      ],
    }),

    defineField({ name: 'services', type: 'array', of: [{ type: 'serviceCard' }] }),

    defineField({ name: 'venturesHeading', type: 'string' }),
    defineField({ name: 'venturesIntro', type: 'text', rows: 2 }),
    defineField({ name: 'ventures', type: 'array', of: [{ type: 'venture' }] }),

    defineField({ name: 'statsHeading', type: 'string' }),
    defineField({ name: 'stats', type: 'array', of: [{ type: 'statItem' }] }),

    defineField({ name: 'ctaHeading', type: 'string' }),
    defineField({ name: 'ctaText', type: 'text', rows: 2 }),
    defineField({ name: 'ctaButton', type: 'ctaLink' }),
  ],
  preview: { prepare: () => ({ title: 'Services Page' }) },
})
