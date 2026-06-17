import type { SchemaTypeDefinition } from 'sanity'

import { blockContent } from './blockContent'
import { objectTypes } from './objects'

// Singletons
import { siteSettings } from './siteSettings'
import { homePage } from './homePage'
import { aboutPage } from './aboutPage'
import { servicesPage } from './servicesPage'
import { insightsPage } from './insightsPage'
import { testimonialsPage } from './testimonialsPage'
import { contactPage } from './contactPage'
import { careerPage } from './careerPage'
import { mediaPage } from './mediaPage'

// Collections
import { project } from './project'
import { testimonial } from './testimonial'
import { insight } from './insight'
import { galleryImage } from './galleryImage'
import { videoHighlight } from './videoHighlight'
import { beforeAfterPair } from './beforeAfterPair'

export const schemaTypes: SchemaTypeDefinition[] = [
  // shared
  blockContent,
  ...objectTypes,
  // singletons
  siteSettings,
  homePage,
  aboutPage,
  servicesPage,
  insightsPage,
  testimonialsPage,
  contactPage,
  careerPage,
  mediaPage,
  // collections
  project,
  testimonial,
  insight,
  galleryImage,
  videoHighlight,
  beforeAfterPair,
]
