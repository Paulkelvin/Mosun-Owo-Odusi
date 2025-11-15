import Hero from '@/components/Hero'
import ExpertiseTabs from '@/components/ExpertiseTabs'
import FeaturedProject from '@/components/FeaturedProject'
import TestimonialPreview from '@/components/TestimonialPreview'
import Organizations from '@/components/Organizations'

export default function Home() {
  return (
    <div className="relative mt-16 lg:mt-20">
      <Hero />
      <Organizations />
      <ExpertiseTabs />
      <FeaturedProject />
      <TestimonialPreview />
    </div>
  )
}