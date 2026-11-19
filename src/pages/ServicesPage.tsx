import { Check } from 'lucide-react'
import { Seo } from '@/components/layout/Seo'
import { PageHero, Section, Container } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { ProcessSteps } from '@/components/sections/Blocks'
import { SectionHeading } from '@/components/ui/Section'
import { services } from '@/data/services'

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-violet-dark">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet" aria-hidden="true" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Seo title="Services" path="/services" description="Custom software, AI solutions, business automation, web and mobile apps, SaaS, ERP systems and API integration from AVENIX." />
      <PageHero eyebrow="Services" title="From Ideas to Intelligent Digital Solutions." text="Eight core services covering the full journey from strategy to production software." />

      <nav aria-label="Services" className="sticky top-16 z-30 border-b border-line bg-white/95 backdrop-blur lg:top-[72px]">
        <Container>
          <ul className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
            {services.map((s) => (
              <li key={s.id} className="shrink-0">
                <a href={`#${s.id}`} className="block whitespace-nowrap rounded-full border border-line px-3.5 py-1.5 text-sm font-medium text-navy hover:border-violet hover:text-violet-dark">{s.title}</a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {services.map((s, i) => (
        <Section key={s.id} id={s.id} tone={i % 2 ? 'light' : 'white'} className="scroll-mt-28">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet/10 text-violet-dark"><s.icon className="h-6 w-6" aria-hidden="true" /></span>
                <h2 className="mt-5 text-3xl font-bold">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-muted">{s.description}</p>
                <div className="mt-6"><Button to={`/contact?service=${s.id}`} arrow>Discuss this service</Button></div>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <List title="Problems we solve" items={s.problems} />
                <List title="Key capabilities" items={s.capabilities} />
                <List title="Benefits" items={s.benefits} />
              </div>
            </div>
          </Reveal>
        </Section>
      ))}

      <Section tone="white">
        <SectionHeading eyebrow="Process" title="How every project runs." />
        <ProcessSteps />
      </Section>
      <CtaBanner />
    </>
  )
}
