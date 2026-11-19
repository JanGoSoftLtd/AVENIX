import { Link } from 'react-router-dom'
import { ArrowRight, Check, Clock } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { ProManagerMockup } from './ProManagerMockup'
import { services } from '@/data/services'
import { industries } from '@/data/industries'
import { process, whyUs, insightTopics, projectCategories, type Item } from '@/data/misc'
import { proManager } from '@/data/products'
import { articles } from '@/data/articles'

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {list.map((s, i) => (
        <Reveal key={s.id} delay={(i % 4) * 0.06}>
          <Link
            to={`/services#${s.id}`}
            className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-lavender hover:shadow-lg hover:shadow-violet/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet/10 text-violet-dark transition-colors group-hover:bg-violet group-hover:text-white">
              <s.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold leading-snug">{s.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-violet-dark">
              Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}

export function FeatureGrid({ items, dark }: { items: Item[]; dark?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 0.06}>
          <div className={`h-full rounded-xl p-6 ${dark ? 'border border-white/10 bg-white/5' : 'border border-line bg-white'}`}>
            <it.icon className={`h-6 w-6 ${dark ? 'text-lavender' : 'text-violet'}`} aria-hidden="true" />
            <h3 className={`mt-4 text-lg font-semibold ${dark ? '!text-white' : ''}`}>{it.title}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-white/70' : 'text-muted'}`}>{it.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function WhySection() {
  return (
    <Section tone="white">
      <SectionHeading eyebrow="Why Choose AVENIX" title="Engineering you can build a business on." text="Technology is only valuable when it works reliably and solves a real problem. That is the standard we hold ourselves to." />
      <FeatureGrid items={whyUs} />
    </Section>
  )
}

export function IndustriesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {industries.map((ind, i) => (
        <Reveal key={ind.title} delay={(i % 3) * 0.06}>
          <div className="flex h-full gap-4 rounded-xl border border-line bg-white p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-deep text-white">
              <ind.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold">{ind.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{ind.text}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function ProcessSteps() {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {process.map((p, i) => (
        <Reveal key={p.step} delay={(i % 3) * 0.06}>
          <li className="h-full list-none rounded-xl border border-line bg-white p-6">
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl font-bold text-lavender">{p.step}</span>
              <p.icon className="h-5 w-5 text-violet" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  )
}

export function ProductShowcase() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div>
        <span className="inline-block rounded-full bg-violet/10 px-3 py-1 text-xs font-semibold text-violet-dark">AVENIX Product</span>
        <h3 className="mt-4 text-3xl font-bold sm:text-4xl">{proManager.name}</h3>
        <p className="mt-2 font-display text-lg font-medium text-violet-dark">{proManager.tagline}</p>
        <p className="mt-4 leading-relaxed text-muted">{proManager.description}</p>
        <ul className="mt-6 space-y-3">
          {proManager.features.map((f) => (
            <li key={f.title} className="flex gap-3 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet" aria-hidden="true" />
              <span><strong className="font-semibold">{f.title}</strong> — {f.text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8"><Button to="/products" arrow>Explore ProManager</Button></div>
      </div>
      <Reveal><ProManagerMockup /></Reveal>
    </div>
  )
}

export function ComingSoonCard() {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-dashed border-lavender bg-white p-6">
      <Clock className="mt-0.5 h-6 w-6 shrink-0 text-violet" aria-hidden="true" />
      <div>
        <h3 className="font-semibold">More AVENIX products are coming</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">We are building additional digital products. Details will be published here when they are ready to share.</p>
      </div>
    </div>
  )
}

export function PortfolioGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <div className="rounded-xl border border-violet/40 bg-white p-6 lg:col-span-2">
        <span className="rounded-full bg-violet px-3 py-1 text-xs font-semibold text-white">Featured proprietary product</span>
        <h3 className="mt-4 text-2xl font-bold">ProManager</h3>
        <p className="mt-1 text-sm font-medium text-violet-dark">Business Management Systems · SaaS Platforms · Web Applications</p>
        <p className="mt-3 leading-relaxed text-muted">{proManager.description} It is the first product built and owned by AVENIX.</p>
        <div className="mt-5"><Button to="/products" variant="secondary" arrow>View product</Button></div>
      </div>
      <div className="rounded-xl border border-line bg-white p-6">
        <h3 className="font-semibold">Categories we work in</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {projectCategories.map((c) => <li key={c} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-lavender" aria-hidden="true" />{c}</li>)}
        </ul>
      </div>
    </div>
  )
}

export function InsightsPreview() {
  if (articles.length) {
    return (
      <div className="grid gap-5 md:grid-cols-3">
        {articles.slice(0, 3).map((a) => (
          <Link key={a.slug} to={`/insights/${a.slug}`} className="rounded-xl border border-line bg-white p-6 hover:border-lavender">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-dark">{a.category}</p>
            <h3 className="mt-2 text-lg font-semibold">{a.title}</h3>
            <p className="mt-2 text-sm text-muted">{a.excerpt}</p>
          </Link>
        ))}
      </div>
    )
  }
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {insightTopics.map((t) => (
          <div key={t.title} className="rounded-xl border border-line bg-white p-5">
            <h3 className="font-semibold">{t.title}</h3>
            <p className="mt-1 text-sm text-muted">{t.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm text-muted">Our first articles are in preparation. <Link to="/insights" className="font-semibold text-violet-dark underline-offset-4 hover:underline">See what we will cover</Link>.</p>
    </div>
  )
}
