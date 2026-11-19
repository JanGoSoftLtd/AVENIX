export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://www.avenixltd.cloud'
export const CONTACT_ENDPOINT = (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined)?.trim() || ''
export const CONTACT_EMAIL = 'jangosoftltd@gmail.com'
export const PHONE_DISPLAY = '+880 1629888934'
export const WHATSAPP_URL = 'https://wa.me/8801629888934'
export const LOCATION = 'Chattogram Software Technology Park'
export const MAP_LINK = 'https://www.google.com/maps/search/?api=1&query=Chattogram+Software+Technology+Park'
export const MAP_EMBED = 'https://www.google.com/maps?q=Chattogram+Software+Technology+Park&output=embed'
/** Draft testimonials are shown (with a visible draft label) unless this is set to 'true' at build time. */
export const HIDE_DRAFT_TESTIMONIALS = import.meta.env.VITE_HIDE_DRAFT_TESTIMONIALS === 'true'
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
