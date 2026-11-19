import { Link } from 'react-router-dom'
import { Seo } from '@/components/layout/Seo'
import { PageHero, Section, SectionHeading } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { articles } from '@/data/articles'
import { insightTopics } from '@/data/misc'

export default function InsightsPage() {
  return (
    <>
      <Seo title="Insights" path="/insights" description="Insights from AVENIX on artificial intelligence, software engineering, business automation, SaaS, digital transformation and technology trends." />
      <PageHero eyebrow="Insights" title="Ideas on software, AI and automation." text="Practical perspectives on building and using technology well." />

      <Section tone="white">
        {articles.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link key={a.slug} to={`/insights/${a.slug}`} className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-lavender">
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-dark">{a.category}</p>
                <h2 className="mt-2 text-xl font-semibold">{a.title}</h2>
                <p className="mt-2 text-sm text-muted">{a.excerpt}</p>
                <p className="mt-4 text-xs text-muted">{new Date(a.date).toLocaleDateString('en-GB', { dateStyle: 'medium' })} · {a.author}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-lavender bg-surface p-8 text-center">
            <h2 className="text-2xl font-bold">Our first articles are in preparation.</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">We would rather publish a few useful pieces than many empty ones. In the meantime, here is what we will write about.</p>
            <div className="mt-6"><Button to="/contact" variant="secondary">Suggest a topic</Button></div>
          </div>
        )}
      </Section>

      <Section>
        <SectionHeading eyebrow="Topics" title="What we will cover." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {insightTopics.map((t) => (
            <div key={t.title} className="rounded-xl border border-line bg-white p-6">
              <h3 className="font-semibold">{t.title}</h3>
              <p className="mt-1 text-sm text-muted">{t.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  )
}
