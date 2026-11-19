import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { NAV, PHONE_DISPLAY, WHATSAPP_URL, CONTACT_EMAIL } from '@/lib/site'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const solid = scrolled || open
  const link = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'text-violet-dark' : 'text-navy/80 hover:text-violet-dark'}`

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow duration-300 ${solid ? 'border-line shadow-sm' : 'border-transparent'}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link to="/" aria-label="AVENIX home">
          <Logo />
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.to}>
              <NavLink to={n.to} className={link}>{n.label}</NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <Button to="/contact" arrow>Get in Touch</Button>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {[{ label: 'Home', to: '/' }, ...NAV].map((n) => (
              <li key={n.to}>
                <NavLink to={n.to} end={n.to === '/'} className={({ isActive }) => `block border-b border-line py-3.5 text-base font-medium ${isActive ? 'text-violet-dark' : 'text-navy'}`}>
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/contact" arrow className="mt-5 w-full">Get in Touch</Button>
          <p className="mt-5 space-y-1 text-center text-sm text-muted">
            <a className="block font-medium text-violet-dark" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp {PHONE_DISPLAY}</a>
            <a className="block break-all" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>
      )}
    </header>
  )
}
