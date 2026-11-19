import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

/** Scrolls to top on route change, or to the #hash target when one is present. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export function Layout() {
  return (
    <>
      <a href="#main" className="sr-only z-[60] rounded bg-white px-4 py-2 text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main">
        <Suspense fallback={<div role="status" className="grid min-h-[70vh] place-items-center text-sm text-muted">Loading…</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
