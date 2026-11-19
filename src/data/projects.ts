export interface Project {
  id: string
  name: string
  category: string
  /** Only fill in once verified. Cards show a neutral line when absent. */
  description?: string
  /** Only verified technologies. */
  tags?: string[]
  /** Path under /public (e.g. '/projects/muri.webp') or URL. Branded placeholder is used when absent. */
  image?: string
  /** Real destination only. The "View Project" button renders only when this is set. */
  url?: string
}

/**
 * Project names were supplied by AVENIX. Categories are a provisional grouping
 * based on the project names; descriptions, technologies, images and links
 * are intentionally empty until verified. Edit entries here to update the site.
 */
export const projects: Project[] = [
  { id: 'muri-factory', name: 'Muri Factory Management', category: 'Business Management Systems' },
  { id: 'alokdhara', name: 'Alokdhara Publication', category: 'Web Applications' },
  { id: 'meghna-accessories', name: 'Meghna Accessories Ltd', category: 'Web Applications' },
  { id: 'hala-bazar', name: 'Hala Bazar E-commerce', category: 'Web Applications' },
  { id: 'portfolio-website', name: 'Portfolio Website', category: 'Web Applications' },
  { id: 'customer-erp', name: 'Customer ERP', category: 'Business Management Systems' },
  { id: 'service-automation', name: 'Business Customer Service Automation', category: 'AI & Automation' },
]
