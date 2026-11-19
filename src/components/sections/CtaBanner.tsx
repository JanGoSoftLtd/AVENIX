import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Section'

interface Props {
  title?: string
  text?: string
}

export function CtaBanner({
  title = 'Have a Challenge? Let’s Engineer the Solution.',
  text = 'Tell us what you are trying to achieve. We will help you find the right technology and the right path to get there.',
}: Props) {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-indigo-deep px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-16 -bottom-24 h-64 w-64 rounded-full bg-violet/30 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold !text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-white/75 sm:text-lg">{text}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/contact" variant="light" arrow>Let&apos;s Discuss Your Project</Button>
              <Button to="/services" variant="outlineLight">Explore Our Services</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
