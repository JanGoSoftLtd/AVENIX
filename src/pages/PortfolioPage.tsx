import { Seo } from '@/components/layout/Seo'
import { PageHero, Section, SectionHeading } from '@/components/ui/Section'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { FeaturedProduct } from '@/components/sections/Blocks'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'

export default function PortfolioPage() {
  return (
    <>
      <Seo title="Portfolio" path="/portfolio" description="AVENIX portfolio: our featured proprietary product ProManager and the categories of software we build." />
      <PageHero eyebrow="Portfolio" title="Verified work, honestly presented." text="We only publish projects and results we can stand behind. Our portfolio will grow as we complete and are cleared to share engagements." />
      <Section tone="white">
        <SectionHeading eyebrow="Featured" title="Our first proprietary product." />
        <FeaturedProduct />
      </Section>
      <Section>
        <SectionHeading eyebrow="Projects" title="Selected projects." text="Project details, screenshots and links are added here as each one is verified and approved for publication." />
        <ProjectsGrid />
      </Section>
      <CtaBanner />
    </>
  )
}
