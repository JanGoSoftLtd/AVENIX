import { Seo } from '@/components/layout/Seo'
import { PageHero, Section } from '@/components/ui/Section'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { IndustriesGrid } from '@/components/sections/Blocks'

export default function IndustriesPage() {
  return (
    <>
      <Seo title="Industries" path="/industries" description="AVENIX builds software for retail, healthcare, agriculture, manufacturing, education, finance, logistics, professional services and startups." />
      <PageHero eyebrow="Industries" title="Technology that fits your industry." text="Every sector has its own workflows and constraints. We design solutions around yours." />
      <Section tone="white"><IndustriesGrid /></Section>
      <CtaBanner />
    </>
  )
}
