import type { StructureResolver } from 'sanity/structure'

// Singletons: one editable document each (not a list you can add to).
const singletons: { id: string; title: string }[] = [
  { id: 'siteSettings', title: 'Site Settings' },
  { id: 'homePage', title: 'Home Page' },
  { id: 'aboutPage', title: 'About Page' },
  { id: 'servicesPage', title: 'Services Page' },
  { id: 'insightsPage', title: 'Insights Page' },
  { id: 'testimonialsPage', title: 'Testimonials Page' },
  { id: 'contactPage', title: 'Contact Page' },
  { id: 'careerPage', title: 'Career Page' },
  { id: 'mediaPage', title: 'Media Page' },
]

const singletonIds = new Set(singletons.map((s) => s.id))
const explicitCollections = [
  'project',
  'testimonial',
  'insight',
  'galleryImage',
  'videoHighlight',
  'beforeAfterPair',
]

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      ...singletons.map((s) =>
        S.listItem()
          .title(s.title)
          .id(s.id)
          .child(S.document().schemaType(s.id).documentId(s.id))
      ),
      S.divider(),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('insight').title('Insights / Articles'),
      S.divider(),
      S.documentTypeListItem('galleryImage').title('Gallery Images'),
      S.documentTypeListItem('videoHighlight').title('Video Highlights'),
      S.documentTypeListItem('beforeAfterPair').title('Before / After Pairs'),
      // Anything else not explicitly listed above or registered as a singleton
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId() as string
        return !explicitCollections.includes(id) && !singletonIds.has(id)
      }),
    ])
