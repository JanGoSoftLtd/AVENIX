import { Quote, Star } from 'lucide-react'
import type { Review } from '@/data/reviews'

function initials(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase()).join('')
}

export function ReviewCard({ review }: { review: Review }) {
  const meta = [review.role, review.company].filter(Boolean).join(', ')
  return (
    <figure className="relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-violet/10 sm:p-7">
      {review.placeholder && (
        <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-800">
          Sample placeholder
        </span>
      )}
      <Quote className="h-7 w-7 text-lavender" aria-hidden="true" />
      {review.rating ? (
        <div className="mt-4 flex gap-0.5" role="img" aria-label={`Rated ${review.rating} out of 5`}>
          {[1, 2, 3, 4, 5].map((n) => (
            <Star key={n} className={`h-4 w-4 ${n <= review.rating! ? 'fill-violet text-violet' : 'text-line'}`} aria-hidden="true" />
          ))}
        </div>
      ) : null}
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-navy/85">{review.text}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        {review.avatar ? (
          <img src={review.avatar} alt="" width={44} height={44} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
        ) : (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-deep font-display text-sm font-semibold text-white" aria-hidden="true">
            {initials(review.name)}
          </span>
        )}
        <span className="min-w-0">
          <span className="block truncate font-semibold">{review.name}</span>
          {meta && <span className="block truncate text-sm text-muted">{meta}</span>}
        </span>
      </figcaption>
    </figure>
  )
}
