export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  /** ISO date, e.g. 2026-01-31 */
  date: string
  author: string
  /** Paragraphs of plain text. */
  body: string[]
}

/**
 * Add real articles here. The Insights page and the /insights/:slug route
 * render whatever is in this array. Leave empty until genuine content is ready.
 */
export const articles: Article[] = []
