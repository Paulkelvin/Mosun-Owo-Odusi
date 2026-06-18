/**
 * Embedded Sanity Studio, served at /studio.
 * The Studio itself is rendered in a client boundary (./Studio) so the config
 * (which uses React context) is never evaluated during server page-data collection.
 */
import Studio from './Studio'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <Studio />
}
