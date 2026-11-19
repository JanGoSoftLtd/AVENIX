import { Seo } from '@/components/layout/Seo'
import { PageHero, Section, SectionHeading } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { ComingSoonCard } from '@/components/sections/Blocks'
import { ProManagerMockup } from '@/components/sections/ProManagerMockup'
import { proManager } from '@/data/products'

export default function ProductsPage() {
  return (
    <>
      <Seo title="Products" path="/products" description="ProManager by AVENIX: an integrated shop management and POS platform for sales, inventory, customers, expenses and analytics." />
      <PageHero eyebrow="Products" title="Our Ideas. Our Products. Real Business Impact." text="Software we design, build and own, created to solve everyday business problems." />

      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="inline-block rounded-full bg-violet/10 px-3 py-1 text-xs font-semibold text-violet-dark">AVENIX Product</span>
            <h2 className="mt-4 text-4xl font-bold">{proManager.name}</h2>
            <p className="mt-2 font-display text-xl font-medium text-violet-dark">{proManager.tagline}</p>
            <p className="mt-4 leading-relaxed text-muted">{proManager.description}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact?service=erp" arrow>Ask about ProManager</Button>
            </div>
          </div>
          <Reveal><ProManagerMockup /></Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="ProManager capabilities" title="Everything a shop needs to run smoothly." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {proManager.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-xl border border-line bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet/10 text-violet-dark"><f.icon className="h-5 w-5" aria-hidden="true" /></span>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="What's next" title="More products are on the way." />
        <ComingSoonCard />
      </Section>
      <CtaBanner />
    </>
  )
}
