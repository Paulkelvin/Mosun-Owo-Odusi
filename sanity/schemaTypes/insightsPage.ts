import { defineType, defineField } from 'sanity'

export const insightsPage = defineType({
  name: 'insightsPage',
  title: 'Insights Page',
  type: 'document',
  description: 'Header copy for the Insights page. Articles themselves are "Insight" documents.',
  fields: [
    defineField({ name: 'heroBadge', type: 'string' }),
    defineField({ name: 'heroHeading', type: 'string' }),
    defineField({ name: 'heroSubheading', type: 'text', rows: 3 }),
    defineField({
      name: 'heroBadges',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string' },
            { name: 'icon', type: 'string', options: { list: ['landmark', 'penLine', 'bookOpen'] } },
          ],
          preview: { select: { title: 'label' } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Insights Page' }) },
})
