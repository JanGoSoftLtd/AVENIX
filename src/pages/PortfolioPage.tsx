import { Seo } from '@/components/layout/Seo'
import { PageHero, Section, SectionHeading } from '@/components/ui/Section'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PortfolioGrid } from '@/components/sections/Blocks'
import { projectCategories } from '@/data/misc'

export default function PortfolioPage() {
  return (
    <>
      <Seo title="Portfolio" path="/portfolio" description="AVENIX portfolio: our featured proprietary product ProManager and the categories of software we build." />
      <PageHero eyebrow="Portfolio" title="Verified work, honestly presented." text="We only publish projects and results we can stand behind. Our portfolio will grow as we complete and are cleared to share engagements." />
      <Section tone="white">
        <SectionHeading eyebrow="Featured" title="Our first proprietary product." />
        <PortfolioGrid />
      </Section>
      <Section>
        <SectionHeading eyebrow="Categories" title="Where our work will appear." text="Case studies will be added under these categories once they are verified and approved for publication." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectCategories.map((c) => (
            <div key={c} className="rounded-xl border border-dashed border-lavender bg-white p-6">
              <h3 className="font-semibold">{c}</h3>
              <p className="mt-1 text-sm text-muted">Case studies coming soon.</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  )
}
