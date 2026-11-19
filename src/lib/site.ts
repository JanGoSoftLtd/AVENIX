export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://www.avenixltd.cloud'
export const CONTACT_ENDPOINT = (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined)?.trim() || ''
export const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined)?.trim() || ''
export const SITE_NAME = 'AVENIX'
export const TAGLINE = 'Engineering Tomorrow, Today.'

export const NAV = [
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Industries', to: '/industries' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Insights', to: '/insights' },
  { label: 'About', to: '/about' },
] as const
