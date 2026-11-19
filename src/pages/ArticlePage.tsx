import { Link, useParams } from 'react-router-dom'
import { Seo } from '@/components/layout/Seo'
import { Section, Container } from '@/components/ui/Section'
import { articles } from '@/data/articles'
import NotFoundPage from './NotFoundPage'

export default function ArticlePage() {
  const { slug } = useParams()
  const a = articles.find((x) => x.slug === slug)
  if (!a) return <NotFoundPage />
  return (
    <>
      <Seo title={a.title} path={`/insights/${a.slug}`} description={a.excerpt} />
      <Section tone="white" className="!pt-32 sm:!pt-40">
        <Container className="max-w-3xl !px-0">
          <Link to="/insights" className="text-sm font-semibold text-violet-dark">← All insights</Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-violet-dark">{a.category}</p>
          <h1 className="mt-2 text-4xl font-bold">{a.title}</h1>
          <p className="mt-3 text-sm text-muted">{new Date(a.date).toLocaleDateString('en-GB', { dateStyle: 'long' })} · {a.author}</p>
          <div className="mt-8 space-y-5 leading-relaxed text-navy/90">
            {a.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Container>
      </Section>
    </>
  )
}
