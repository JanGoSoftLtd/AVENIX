export interface Review {
  id: string
  name: string
  /** Job title, e.g. "Operations Manager". Optional. */
  role?: string
  company?: string
  text: string
  /** 1-5. Omit unless the customer actually gave a rating; no stars are shown without it. */
  rating?: number
  /** Path or URL of a real profile image. Omit to show initials. */
  avatar?: string
  /** Internal flag. Never set on real reviews. */
  placeholder?: boolean
}

/**
 * VERIFIED customer reviews. Add real ones here (with the customer's permission)
 * and they appear on the home page automatically. Leave empty until then.
 */
export const reviews: Review[] = []

/**
 * Development-only sample content so the carousel can be reviewed visually.
 * It is NEVER included in production builds (see ReviewsSection) and is
 * labelled "Sample placeholder" wherever it renders.
 */
export const devPlaceholderReviews: Review[] = [
  { id: 'ph-1', placeholder: true, name: 'Customer Name', role: 'Designation', company: 'Company', rating: 5, text: 'Placeholder review text. Replace this with a real, approved customer review to show feedback in this card.' },
  { id: 'ph-2', placeholder: true, name: 'Customer Name', role: 'Designation', company: 'Company', text: 'Placeholder review text without a rating, showing how a card looks when no star rating was given.' },
  { id: 'ph-3', placeholder: true, name: 'Customer Name', role: 'Designation', company: 'Company', rating: 4, text: 'Placeholder review text. Longer reviews wrap onto several lines and every card keeps the same height inside the carousel.' },
  { id: 'ph-4', placeholder: true, name: 'Customer Name', role: 'Designation', company: 'Company', text: 'Placeholder review text for testing carousel navigation on mobile, tablet and desktop.' },
]
