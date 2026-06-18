'use client'

/**
 * Client boundary for the embedded Studio. Importing sanity.config (which
 * pulls in the full Studio + React context) must happen client-side, not
 * during server page-data collection.
 */
import { NextStudio } from 'next-sanity/studio'

import config from '../../../sanity.config'

export default function Studio() {
  return <NextStudio config={config} />
}
