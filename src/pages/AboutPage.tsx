import { Seo } from '@/components/layout/Seo'
import { PageHero, Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { FeatureGrid, WhySection } from '@/components/sections/Blocks'
import { mission, vision, values } from '@/data/misc'

const approach = [
  ['Start with the problem', 'Every engagement begins with understanding the outcome you need, before any technology is chosen.'],
  ['Build in small steps', 'We deliver iteratively so you can see, test and steer the product as it takes shape.'],
  ['Own quality', 'Testing, security and maintainability are part of the work, never an afterthought.'],
  ['Stay accountable', 'Clear communication and honest estimates, from kick-off to support.'],
]

export default function AboutPage() {
  return (
    <>
      <Seo title="About Us" path="/about" description="Learn about AVENIX: our mission, vision, values and approach to engineering intelligent software and AI solutions." />
      <PageHero eyebrow="About AVENIX" title="A technology company built on engineering excellence." text="AVENIX designs and builds intelligent software, AI-driven solutions and digital products that help businesses work smarter and grow further." />

      <Section tone="white">
        <div className="grid gap-6 md:grid-cols-2">
          {[mission, vision].map((m) => (
            <Reveal key={m.title}>
              <div className="h-full rounded-xl border border-line bg-surface p-8">
                <m.icon className="h-7 w-7 text-violet" aria-hidden="true" />
                <h2 className="mt-4 text-2xl font-bold">{m.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Core values" title="What guides our work." />
        <FeatureGrid items={values} />
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Our approach" title="Practical, transparent and iterative." />
        <div className="grid gap-5 sm:grid-cols-2">
          {approach.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-line bg-surface p-6">
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading tone="dark" eyebrow="Technology philosophy" title="Modern tools, chosen with discipline." />
        <div className="grid gap-8 text-white/75 md:grid-cols-3">
          <p>We favour proven, well-supported technology over trends. The right tool is the one that makes your product reliable and easy to evolve.</p>
          <p>We apply AI where it creates measurable value, with attention to accuracy, privacy and cost, and we are honest where it is not the answer.</p>
          <p>We design for the long term: clear architecture, automated testing and documentation so your software remains an asset, not a liability.</p>
        </div>
      </Section>

      <WhySection />
      <CtaBanner />
    </>
  )
}
