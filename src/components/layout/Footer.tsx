import { Link } from 'react-router-dom'
import { Logo } from '@/components/ui/Logo'
import { Container } from '@/components/ui/Section'
import { NAV, CONTACT_EMAIL, TAGLINE } from '@/lib/site'
import { services } from '@/data/services'

export function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo tone="light" />
            <p className="mt-4 text-sm leading-relaxed">{TAGLINE} Intelligent software, AI-driven solutions and digital products for ambitious businesses.</p>
          </div>
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider !text-white">Company</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.to}><Link className="hover:text-white" to={n.to}>{n.label}</Link></li>
              ))}
              <li><Link className="hover:text-white" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider !text-white">Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}><Link className="hover:text-white" to={`/services#${s.id}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider !text-white">Get in touch</h2>
            <p className="mt-4 text-sm leading-relaxed">Tell us about your project and we will respond with next steps.</p>
            {CONTACT_EMAIL && (
              <p className="mt-3 text-sm"><a className="text-lavender hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
            )}
            <Link to="/contact" className="mt-4 inline-block rounded-lg bg-violet px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-dark">Start a project</Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} AVENIX. All rights reserved.</p>
          <p>www.avenixltd.cloud</p>
        </div>
      </Container>
    </footer>
  )
}
