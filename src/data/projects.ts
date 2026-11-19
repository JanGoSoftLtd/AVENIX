export type VisualKind = 'factory' | 'mobile' | 'catalog' | 'shop' | 'profile' | 'erp' | 'workflow'

export interface Project {
  id: string
  name: string
  category: string
  /** Short description. Keep it factual; no results or numbers unless verified. */
  description: string
  /** Which AVENIX concept illustration to show when there is no real screenshot. */
  visual: VisualKind
  /** Real screenshot: file in /public (e.g. '/projects/muri.webp'). When set it replaces the illustration. */
  image?: string
  /** Only verified technologies. */
  tags?: string[]
  /** Real destination only. The "View Project" button renders only when this is set. */
  url?: string
}

/**
 * Project list. No genuine screenshots, technology details or public URLs exist in the
 * repository yet, so cards use clearly labelled concept illustrations. Add `image`,
 * `tags` and `url` as each becomes available and verified.
 */
export const projects: Project[] = [
  {
    id: 'muri-factory',
    name: 'Muri Factory Management',
    category: 'Business Management Systems',
    visual: 'factory',
    description: 'A factory management solution that brings operational activities and business records into one organised digital system.',
  },
  {
    id: 'alokdhara',
    name: 'Alokdhara Publication – Mobile Application',
    category: 'Mobile Applications',
    visual: 'mobile',
    description: 'A dedicated mobile application that makes the publication more accessible to its audience, designed for usability.',
  },
  {
    id: 'meghna-accessories',
    name: 'Meghna Accessories Ltd.',
    category: 'Web Applications',
    visual: 'catalog',
    description: 'A digital solution for Meghna Accessories Ltd., supporting how the business presents and manages its work.',
  },
  {
    id: 'halal-bazar',
    name: 'Halal Bazar – E-commerce Platform',
    category: 'Web Applications',
    visual: 'shop',
    description: 'An online shopping platform built around the business requirements and the customer shopping experience.',
  },
  {
    id: 'portfolio-website',
    name: 'Personal Portfolio Website – Dr. Ahmad Mursel Anam',
    category: 'Web Applications',
    visual: 'profile',
    description: 'A dedicated personal website presenting a professional profile and information in an organised way.',
  },
  {
    id: 'customer-erp',
    name: 'Customer ERP',
    category: 'Business Management Systems',
    visual: 'erp',
    description: 'A business management system that centralises operations, records and reporting for day-to-day control.',
  },
  {
    id: 'sunburg-automation',
    name: 'Sunburg – Business Process Automation',
    category: 'AI & Automation',
    visual: 'workflow',
    description: 'Automation of repetitive activities and operational workflows to support more efficient day-to-day operations.',
  },
]
