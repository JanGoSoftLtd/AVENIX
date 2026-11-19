import { Seo } from '@/components/layout/Seo'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" path="/404" description="The page you are looking for could not be found." noindex />
      <Section tone="white" className="!pt-36 text-center sm:!pt-44">
        <p className="font-display text-6xl font-bold text-lavender">404</p>
        <h1 className="mt-4 text-3xl font-bold">This page could not be found.</h1>
        <p className="mt-3 text-muted">The link may be broken or the page may have moved.</p>
        <div className="mt-8"><Button to="/" arrow>Back to home</Button></div>
      </Section>
    </>
  )
}
