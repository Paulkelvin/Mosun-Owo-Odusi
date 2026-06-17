import { defineType, defineField } from 'sanity'

import { PROJECT_FILTER_OPTIONS } from './galleryImage'

export const videoHighlight = defineType({
  name: 'videoHighlight',
  title: 'Video Highlight',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'order', title: 'Sort order', type: 'number' }),
    defineField({
      name: 'kind',
      type: 'string',
      options: { list: [
        { title: 'Google Drive (embed)', value: 'iframe' },
        { title: 'Uploaded video file', value: 'mp4' },
      ] },
      initialValue: 'iframe',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'driveUrl',
      title: 'Google Drive embed URL',
      type: 'url',
      hidden: ({ parent }) => parent?.kind !== 'iframe',
    }),
    defineField({
      name: 'videoFile',
      title: 'Video file',
      type: 'file',
      options: { accept: 'video/*' },
      hidden: ({ parent }) => parent?.kind !== 'mp4',
    }),
    defineField({
      name: 'project',
      type: 'string',
      options: { list: PROJECT_FILTER_OPTIONS },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'series', type: 'string' }),
  ],
  orderings: [{ title: 'Sort order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'series' } },
})
