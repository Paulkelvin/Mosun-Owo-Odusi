import { groq } from 'next-sanity'

import { client } from './client'

export const sanityFetch = <T>(query: string, params: Record<string, unknown> = {}) =>
  client.fetch<T>(query, params, { next: { revalidate: 60 } })

// ── Site settings ────────────────────────────────────────────────────────────
export const siteSettingsQuery = groq`*[_id == "siteSettings"][0]{
  brandName, nav, footerLinks, linkedinUrl, contactEmail, location
}`

// ── Home ──────────────────────────────────────────────────────────────────────
export const homePageQuery = groq`*[_id == "homePage"][0]{
  hero, organizationsHeading, organizationLogos,
  expertiseHeading, expertiseIntro, expertiseAreas,
  featuredWorkHeading, featuredWorkIntro,
  marqueeImages[]->{ _id, image, alt, project },
  featuredProject{ heading, subheading, image, project->{ title, slug } },
  impactHeading, impactIntro, headlineMetrics, divisionCoverage, impactPdfs,
  testimonialsHeading, testimonialsIntro,
  featuredTestimonials[]->{ _id, name, title, project, content, highlights, portrait, company }
}`

// ── About ───────────────────────────────────────────────────────────────────
export const aboutPageQuery = groq`*[_id == "aboutPage"][0]`

// ── Services ──────────────────────────────────────────────────────────────────
export const servicesPageQuery = groq`*[_id == "servicesPage"][0]`

// ── Insights ───────────────────────────────────────────────────────────────────
export const insightsPageQuery = groq`*[_id == "insightsPage"][0]`
export const insightsListQuery = groq`*[_type == "insight"] | order(order asc){
  _id, title, "slug": slug.current, subtitle, readTime, date, tag, body
}`

// ── Testimonials ───────────────────────────────────────────────────────────────
export const testimonialsPageQuery = groq`*[_id == "testimonialsPage"][0]`
export const testimonialsListQuery = groq`*[_type == "testimonial"] | order(order asc){
  _id, name, title, company, category, rating, linkedin, portrait, content, highlights, featuredOnHome
}`

// ── Contact / Career ─────────────────────────────────────────────────────────
export const contactPageQuery = groq`*[_id == "contactPage"][0]`
export const careerPageQuery = groq`*[_id == "careerPage"][0]`

// ── Projects ───────────────────────────────────────────────────────────────────
export const projectsQuery = groq`*[_type == "project"] | order(order asc){
  _id, title, "slug": slug.current, year, category, status, budget, beneficiaries,
  duration, location, logo, description, impact, tags, featured, milestones
}`

// ── Media ───────────────────────────────────────────────────────────────────────
export const mediaPageQuery = groq`*[_id == "mediaPage"][0]`
export const galleryImagesQuery = groq`*[_type == "galleryImage"] | order(order asc){
  _id, image, alt, caption, category, project
}`
export const videoHighlightsQuery = groq`*[_type == "videoHighlight"] | order(order asc){
  _id, title, kind, driveUrl, "videoUrl": videoFile.asset->url, project, series
}`
export const beforeAfterPairsQuery = groq`*[_type == "beforeAfterPair"] | order(order asc){
  _id, label, context, before, after
}`
