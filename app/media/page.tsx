import { Metadata } from 'next'
import MediaPage from './MediaPage'

export const metadata: Metadata = {
  title: 'Media & Speaking | Mosun Owo-Odusi',
  description: 'Watch public sector reform speeches, interviews, and media appearances by Mosun Owo-Odusi.',
  openGraph: {
    title: 'Media & Speaking | Mosun Owo-Odusi',
    description: 'Watch public sector reform speeches, interviews, and media appearances.',
    url: 'https://mosunowoodusi.com/media',
  },
  alternates: {
    canonical: '/media',
  },
}

export default function Media() {
  return <MediaPage />
}
