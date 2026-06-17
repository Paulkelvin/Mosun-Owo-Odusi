import { defineType, defineField } from 'sanity'

/**
 * Allowed icon names. These map to lucide-react components on the frontend
 * via sanity/icons.ts. Add new names here + in that map.
 */
export const ICON_OPTIONS: { title: string; value: string }[] = [
  { title: 'Bar chart', value: 'barChart' },
  { title: 'Graduation cap', value: 'graduationCap' },
  { title: 'Building', value: 'building' },
  { title: 'Globe', value: 'globe' },
  { title: 'Calendar', value: 'calendar' },
  { title: 'Briefcase', value: 'briefcase' },
  { title: 'Users', value: 'users' },
  { title: 'Award', value: 'award' },
  { title: 'Wheat', value: 'wheat' },
  { title: 'Map pin', value: 'mapPin' },
  { title: 'Target', value: 'target' },
  { title: 'Home', value: 'home' },
  { title: 'Trending up', value: 'trendingUp' },
  { title: 'Sprout', value: 'sprout' },
  { title: 'Landmark', value: 'landmark' },
  { title: 'Network', value: 'network' },
  { title: 'Pen line', value: 'penLine' },
  { title: 'Book open', value: 'bookOpen' },
]

const iconField = defineField({
  name: 'icon',
  title: 'Icon',
  type: 'string',
  options: { list: ICON_OPTIONS },
})

export const ctaLink = defineType({
  name: 'ctaLink',
  title: 'Button / link',
  type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string' }),
    defineField({ name: 'href', type: 'string' }),
  ],
})

export const keyValue = defineType({
  name: 'keyValue',
  title: 'Metric',
  type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string' }),
    defineField({ name: 'value', type: 'string' }),
  ],
  preview: { select: { title: 'label', subtitle: 'value' } },
})

export const achievement = defineType({
  name: 'achievement',
  title: 'Achievement',
  type: 'object',
  fields: [
    defineField({ name: 'text', type: 'text', rows: 2 }),
    defineField({
      name: 'sourceUrl',
      title: 'Verified source URL',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
  ],
  preview: { select: { title: 'text' } },
})

const imageWithAlt = {
  type: 'image' as const,
  options: { hotspot: true },
  fields: [
    { name: 'alt', type: 'string', title: 'Alt text' },
    { name: 'caption', type: 'string', title: 'Caption' },
  ],
}

export const milestone = defineType({
  name: 'milestone',
  title: 'Milestone',
  type: 'object',
  fields: [
    defineField({ name: 'key', title: 'Key (slug)', type: 'string' }),
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'period', type: 'string' }),
    defineField({ name: 'description', type: 'text', rows: 3 }),
    defineField({ name: 'achievements', type: 'array', of: [{ type: 'achievement' }] }),
    defineField({ name: 'metrics', type: 'array', of: [{ type: 'keyValue' }] }),
    defineField({ name: 'images', type: 'array', of: [imageWithAlt] }),
  ],
  preview: { select: { title: 'title', subtitle: 'period' } },
})

export const statItem = defineType({
  name: 'statItem',
  title: 'Stat',
  type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string' }),
    defineField({ name: 'value', type: 'string', description: 'Number or text, e.g. 72000 or "4 | 15+ | 50+"' }),
    defineField({ name: 'prefix', type: 'string' }),
    defineField({ name: 'suffix', type: 'string' }),
    defineField({ name: 'caption', type: 'string' }),
    iconField,
  ],
  preview: { select: { title: 'label', subtitle: 'value' } },
})

export const careerPosition = defineType({
  name: 'careerPosition',
  title: 'Career position',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'organization', type: 'string' }),
    defineField({ name: 'period', type: 'string' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'positionType', title: 'Type', type: 'string' }),
    defineField({ name: 'description', type: 'text', rows: 3 }),
    defineField({ name: 'highlights', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'skills', type: 'array', of: [{ type: 'string' }] }),
    iconField,
  ],
  preview: { select: { title: 'title', subtitle: 'organization' } },
})

export const credential = defineType({
  name: 'credential',
  title: 'Credential',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'issuer', type: 'string' }),
    defineField({ name: 'year', type: 'string' }),
    defineField({ name: 'logo', ...imageWithAlt }),
    defineField({ name: 'skills', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: { select: { title: 'title', subtitle: 'issuer' } },
})

export const navLink = defineType({
  name: 'navLink',
  title: 'Nav link',
  type: 'object',
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'href', type: 'string' }),
  ],
  preview: { select: { title: 'name', subtitle: 'href' } },
})

export const logo = defineType({
  name: 'logo',
  title: 'Logo',
  type: 'object',
  fields: [
    defineField({ name: 'image', ...imageWithAlt }),
    defineField({ name: 'alt', type: 'string' }),
  ],
  preview: { select: { title: 'alt', media: 'image' } },
})

export const expertiseArea = defineType({
  name: 'expertiseArea',
  title: 'Expertise area',
  type: 'object',
  fields: [
    defineField({ name: 'key', title: 'Key (slug)', type: 'string' }),
    defineField({ name: 'title', type: 'string' }),
    iconField,
    defineField({ name: 'description', type: 'text', rows: 2 }),
    defineField({ name: 'details', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: { select: { title: 'title' } },
})

export const serviceCard = defineType({
  name: 'serviceCard',
  title: 'Service',
  type: 'object',
  fields: [
    iconField,
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'summary', title: 'Short description', type: 'text', rows: 2 }),
    defineField({ name: 'body', type: 'text', rows: 5 }),
    defineField({ name: 'points', title: 'Bullet points', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'colorFrom', title: 'Gradient (tailwind classes)', type: 'string' }),
    defineField({ name: 'actionLabel', type: 'string' }),
    defineField({ name: 'actionLink', type: 'string' }),
  ],
  preview: { select: { title: 'title' } },
})

export const venture = defineType({
  name: 'venture',
  title: 'Venture',
  type: 'object',
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'established', type: 'string' }),
    defineField({ name: 'description', type: 'text', rows: 3 }),
    iconField,
  ],
  preview: { select: { title: 'name', subtitle: 'established' } },
})

export const divisionItem = defineType({
  name: 'divisionItem',
  title: 'Division coverage',
  type: 'object',
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'sites', type: 'number' }),
  ],
  preview: { select: { title: 'name', subtitle: 'sites' } },
})

export const pdfResource = defineType({
  name: 'pdfResource',
  title: 'PDF resource',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'file', type: 'file', options: { accept: '.pdf' } }),
  ],
  preview: { select: { title: 'title' } },
})

export const objectTypes = [
  ctaLink,
  keyValue,
  achievement,
  milestone,
  statItem,
  careerPosition,
  credential,
  navLink,
  logo,
  expertiseArea,
  serviceCard,
  venture,
  divisionItem,
  pdfResource,
]
