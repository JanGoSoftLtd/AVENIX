import { Clock, ShieldCheck } from 'lucide-react'
import { Seo } from '@/components/layout/Seo'
import { PageHero, Section } from '@/components/ui/Section'
import { ContactForm } from '@/components/sections/ContactForm'
import { ContactDetails } from '@/components/sections/ContactDetails'
import { MAP_EMBED, LOCATION } from '@/lib/site'

export default function ContactPage() {
  return (
    <>
      <Seo title="Contact Us" path="/contact" description="Contact AVENIX on WhatsApp or email, or send a project enquiry. Based at Chattogram Software Technology Park." />
      <PageHero eyebrow="Contact" title="Have a Challenge? Let's Engineer the Solution." text="Tell us about your project and we will come back with practical next steps." />
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-14">
          <aside className="space-y-8">
            <ContactDetails />
            <div className="flex gap-4"><Clock className="h-6 w-6 shrink-0 text-violet" aria-hidden="true" /><div><h3 className="font-semibold">What happens next</h3><p className="mt-1 text-sm text-muted">We review your enquiry, then reply to discuss goals, scope and the best way forward.</p></div></div>
            <div className="flex gap-4"><ShieldCheck className="h-6 w-6 shrink-0 text-violet" aria-hidden="true" /><div><h3 className="font-semibold">Your information</h3><p className="mt-1 text-sm text-muted">Details you share are used only to respond to your enquiry.</p></div></div>
          </aside>
          <ContactForm />
        </div>
        <div className="mt-12 overflow-hidden rounded-2xl border border-line">
          <iframe
            title={`Map showing ${LOCATION}`}
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full sm:h-96"
          />
        </div>
      </Section>
    </>
  )
}
