export interface Review {
  id: string
  /** Reviewer's name. Leave undefined when it is not known; never invent one. */
  name?: string
  /** Job title, e.g. "Founder". Optional. */
  role?: string
  /** Organisation. */
  company?: string
  /** The project the review relates to. */
  project?: string
  text: string
  /** 1-5. Omit unless the customer actually gave a rating; no stars are shown without it. */
  rating?: number
  /** Path or URL of a real, authorised profile image. Omit to show initials. */
  avatar?: string
  /** 'draft' = written by AVENIX, awaiting the client's approval. Shows a visible "Draft" label. */
  status: 'draft' | 'approved'
}

/**
 * HOW TO PUBLISH A REAL REVIEW: once a client approves their wording, replace
 * the entry's `text` with their approved quote and change `status` to 'approved'.
 * The draft label disappears automatically for that card.
 */
export const testimonials: Review[] = [
  {
    id: 'muri-factory',
    name: 'Didarul Alam',
    role: 'Founder',
    company: "Alam's Factory",
    project: 'Muri Factory Management',
    status: 'draft',
    text: 'Managing our factory operations requires proper coordination, accurate records, and efficient business management. Muri Factory Management has helped us bring important operational activities into a more organized digital system. The solution reflects a practical understanding of our business requirements.',
  },
  {
    id: 'szhm-trust',
    company: 'SZHM Trust',
    project: 'Organizational Management Solution',
    status: 'draft',
    text: 'We value technology that helps organizations manage their activities more efficiently. AVENIX understands the importance of practical digital solutions and building systems around organizational requirements. Their approach focuses on making management processes more structured and accessible.',
  },
  {
    id: 'alokdhara',
    company: 'Alokdhara Publication',
    project: 'Mobile Application',
    status: 'draft',
    text: 'Having a dedicated mobile application creates new opportunities to connect with our audience and make our publication more accessible. AVENIX approached the project with a focus on usability, accessibility, and delivering a digital experience suited to our needs.',
  },
  {
    id: 'halal-bazar',
    name: 'Md. Tarak',
    role: 'Founder',
    company: 'Halal Bazar',
    project: 'E-commerce Platform',
    status: 'draft',
    text: 'An online shopping platform needs to provide customers with a convenient and smooth shopping experience while supporting business operations. AVENIX has worked on developing a digital commerce solution designed around our business requirements and customer experience.',
  },
  {
    id: 'ahmad-mursel-anam',
    name: 'Dr. Ahmad Mursel Anam',
    project: 'Personal Portfolio Website',
    status: 'draft',
    text: 'A professional online presence is important for communicating expertise, experience, and professional identity. The portfolio website provides a dedicated digital platform to present my profile and professional information in an organized way.',
  },
  {
    id: 'sunburg',
    company: 'Sunburg',
    project: 'Business Automation',
    status: 'draft',
    text: 'Business automation can help simplify repetitive activities and improve operational workflows. AVENIX focuses on understanding business processes and developing technology solutions that support more efficient day-to-day operations.',
  },
]
