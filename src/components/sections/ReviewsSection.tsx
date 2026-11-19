import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { Button } from '@/components/ui/Button'
import { reviews, devPlaceholderReviews } from '@/data/reviews'

// Placeholders are only ever shown in local development, never in a production build.
const list = reviews.length ? reviews : import.meta.env.DEV ? devPlaceholderReviews : []

export function ReviewsSection() {
  const track = useRef<HTMLDivElement>(null)
  const [edge, setEdge] = useState({ start: true, end: true })

  const update = useCallback(() => {
    const el = track.current
    if (!el) return
    setEdge({ start: el.scrollLeft <= 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 })
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  const go = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const step = (card?.offsetWidth ?? el.clientWidth) + 20
    el.scrollBy({ left: dir * step, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }

  return (
    <Section tone="white" id="reviews">
      <div className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Reviews" title="What Our Customers Say" text="Feedback from the businesses we build for." />
        {list.length > 1 && (
          <div className="mb-10 flex gap-2 sm:mb-14" role="group" aria-label="Review navigation">
            <button type="button" onClick={() => go(-1)} disabled={edge.start} aria-label="Previous reviews" className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy transition-colors hover:border-violet hover:text-violet-dark disabled:cursor-not-allowed disabled:opacity-40">
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => go(1)} disabled={edge.end} aria-label="Next reviews" className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy transition-colors hover:border-violet hover:text-violet-dark disabled:cursor-not-allowed disabled:opacity-40">
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {list.length === 0 ? (
        <Reveal>
          <div className="flex flex-col items-center rounded-2xl border border-dashed border-lavender bg-surface px-6 py-12 text-center">
            <MessageSquareQuote className="h-9 w-9 text-violet" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold">Customer reviews will appear here.</h3>
            <p className="mt-2 max-w-md text-sm text-muted">We publish only genuine, approved feedback. Working with AVENIX on a project? We would be glad to hear from you.</p>
            <div className="mt-6"><Button to="/contact" variant="secondary">Get in touch</Button></div>
          </div>
        </Reveal>
      ) : (
        <>
          {import.meta.env.DEV && !reviews.length && (
            <p className="mb-4 rounded-lg bg-amber-50 px-4 py-2 text-xs text-amber-900">Development preview: showing sample placeholders. They are hidden in production until real reviews are added to <code>src/data/reviews.ts</code>.</p>
          )}
          <div
            ref={track}
            onScroll={update}
            tabIndex={0}
            aria-label="Customer reviews"
            className="-mx-4 flex scroll-px-4 snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:scroll-px-6 lg:scroll-px-8[scrollbar-width:none] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 [&::-webkit-scrollbar]:hidden"
          >
            {list.map((r, i) => (
              <div key={r.id} data-card className="w-[86%] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
                <Reveal direction={i % 2 ? 'right' : 'left'} delay={Math.min(i, 3) * 0.08} className="h-full">
                  <ReviewCard review={r} />
                </Reveal>
              </div>
            ))}
          </div>
        </>
      )}
    </Section>
  )
}
