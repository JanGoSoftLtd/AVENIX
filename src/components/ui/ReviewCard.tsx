import { Quote, Star, PenLine } from 'lucide-react'
import type { Review } from '@/data/reviews'

function initials(name: string) {
  return name.replace(/^(Dr|Md)\.?\s+/i, '').split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase()).join('')
}

export function ReviewCard({ review }: { review: Review }) {
  const who = review.name ?? review.company ?? 'Client'
  const sub = review.name ? [review.role, review.company].filter(Boolean).join(', ') : review.project
  const draft = review.status === 'draft'
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet/10 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <Quote className="h-7 w-7 text-lavender" aria-hidden="true" />
        {draft && (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-semibold uppercase leading-none tracking-wide text-amber-800">
            <PenLine className="h-3 w-3" aria-hidden="true" /> Draft · awaiting client approval
          </span>
        )}
      </div>
      {review.rating ? (
        <div className="mt-4 flex gap-0.5" role="img" aria-label={`Rated ${review.rating} out of 5`}>
          {[1, 2, 3, 4, 5].map((n) => (
            <Star key={n} className={`h-4 w-4 ${n <= review.rating! ? 'fill-violet text-violet' : 'text-line'}`} aria-hidden="true" />
          ))}
        </div>
      ) : null}
      {review.project && <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-violet-dark">{review.project}</p>}
      <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-navy/85">{review.text}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        {review.avatar ? (
          <img src={review.avatar} alt="" width={44} height={44} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
        ) : (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-deep font-display text-sm font-semibold text-white" aria-hidden="true">
            {initials(who)}
          </span>
        )}
        <span className="min-w-0">
          <span className="block font-semibold leading-snug">{who}</span>
          {sub && <span className="block text-sm leading-snug text-muted">{sub}</span>}
        </span>
      </figcaption>
    </figure>
  )
}
