import { Metadata } from 'next'
import OpportunitiesHub from '@/app/opportunities/OpportunitiesHub'

export const metadata: Metadata = {
  title: "Global Opportunities Hub – Mosun Owo-Odusi",
  description: "Explore global jobs, scholarships, grants, and leadership programs curated for professionals in project management, consulting, development, and education.",
}

export default function OpportunitiesPage() {
  return <OpportunitiesHub />
}