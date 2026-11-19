import { BrainCircuit, Workflow, Code2, Layers } from 'lucide-react'
import { Seo } from '@/components/layout/Seo'
import { Section, SectionHeading, Container } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { ContactDetails } from '@/components/sections/ContactDetails'
import { ContactForm } from '@/components/sections/ContactForm'
import { ServicesGrid, WhySection, IndustriesGrid, ProcessSteps, ProductShowcase, ComingSoonCard, FeaturedProduct, InsightsPreview } from '@/components/sections/Blocks'
import { expertise } from '@/data/misc'
import { TAGLINE } from '@/lib/site'

const heroCards = [
  { icon: BrainCircuit, title: 'Artificial Intelligence', text: 'Practical AI for real business problems' },
  { icon: Workflow, title: 'Business Automation', text: 'Workflows that run themselves' },
  { icon: Code2, title: 'Software Engineering', text: 'Reliable, scalable, maintainable' },
  { icon: Layers, title: 'SaaS & Products', text: 'From idea to live product' },
]

export default function HomePage() {
  return (
    <>
      <Seo
        title={TAGLINE}
        path="/"
        description="AVENIX builds intelligent software, AI-driven solutions, business automation and SaaS products that help businesses work smarter, move faster and grow further."
      />

      <section className="relative overflow-hidden bg-indigo-deep pb-20 pt-32 text-white sm:pb-28 sm:pt-40">
        <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-violet/30 blur-3xl" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <Reveal direction="left">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-lavender">
              <span className="h-1.5 w-1.5 rounded-full bg-lavender" aria-hidden="true" />
              Software · AI · Automation · SaaS
            </p>
            <h1 className="text-4xl font-bold leading-[1.08] !text-white sm:text-6xl lg:text-7xl">
              Engineering <span className="text-lavender">Tomorrow,</span> Today.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              We build intelligent software, powerful digital products, and AI-driven solutions that help businesses work smarter, move faster, and grow further.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/services" variant="primary" arrow>Explore Our Services</Button>
              <Button to="/contact" variant="outlineLight">Let&apos;s Discuss Your Project</Button>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2" aria-hidden="false">
            {heroCards.map((c, i) => (
              <Reveal key={c.title} direction="right" delay={0.15 + i * 0.1}>
                <div className="h-full rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10">
                  <c.icon className="h-6 w-6 text-lavender" aria-hidden="true" />
                  <h2 className="mt-3 text-base font-semibold !text-white">{c.title}</h2>
                  <p className="mt-1 text-sm text-white/65">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Section tone="white" id="about">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <SectionHeading eyebrow="About AVENIX" title="We Turn Technology Into Business Possibilities." />
            <p className="-mt-6 leading-relaxed text-muted sm:-mt-9">
              AVENIX is a software engineering and AI company. We combine deep technical craft with a practical understanding of how businesses operate, so what we build is not just impressive, but genuinely useful.
            </p>
            <div className="mt-6"><Button to="/about" variant="secondary" arrow>About Us</Button></div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-violet-dark">Core expertise</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {expertise.map((e) => (
                <li key={e} className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium">{e}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Services" title="From Ideas to Intelligent Digital Solutions." text="End-to-end engineering across software, AI, automation and digital products." />
        <ServicesGrid />
        <div className="mt-10"><Button to="/services" arrow>View all services</Button></div>
      </Section>

      <WhySection />

      <Section>
        <SectionHeading eyebrow="Products" title="Our Ideas. Our Products. Real Business Impact." />
        <ProductShowcase />
        <div className="mt-12"><ComingSoonCard /></div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Industries" title="Technology that fits your industry." text="We adapt our solutions to the realities of the sector you operate in." />
        <IndustriesGrid />
      </Section>

      <Section>
        <SectionHeading eyebrow="How we work" title="A clear process, from first idea to ongoing support." />
        <ProcessSteps />
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Portfolio" title="Built by AVENIX." text="We publish only verified work. Here is where we are today." />
        <FeaturedProduct />
        <div className="mt-8"><ProjectsGrid /></div>
        <div className="mt-8"><Button to="/portfolio" variant="secondary" arrow>View portfolio</Button></div>
      </Section>

      <ReviewsSection />

      <CtaBanner />

      <Section tone="white">
        <SectionHeading eyebrow="Insights" title="Ideas on software, AI and automation." />
        <InsightsPreview />
      </Section>

      <Section id="contact">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <div>
            <SectionHeading eyebrow="Contact" title="Let's talk about your project." text="Share a few details and we will come back with practical next steps. No obligation." />
            <ContactDetails />
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
