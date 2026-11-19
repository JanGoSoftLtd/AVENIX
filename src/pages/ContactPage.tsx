import { Mail, Clock, ShieldCheck } from 'lucide-react'
import { Seo } from '@/components/layout/Seo'
import { PageHero, Section } from '@/components/ui/Section'
import { ContactForm } from '@/components/sections/ContactForm'
import { CONTACT_EMAIL } from '@/lib/site'

export default function ContactPage() {
  return (
    <>
      <Seo title="Contact Us" path="/contact" description="Contact AVENIX to discuss your software, AI, automation or SaaS project." />
      <PageHero eyebrow="Contact" title="Have a Challenge? Let's Engineer the Solution." text="Tell us about your project and we will come back with practical next steps." />
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-14">
          <aside className="space-y-6">
            <div className="flex gap-4"><Clock className="h-6 w-6 shrink-0 text-violet" aria-hidden="true" /><div><h2 className="font-semibold">What happens next</h2><p className="mt-1 text-sm text-muted">We review your enquiry, then reply to discuss goals, scope and the best way forward.</p></div></div>
            <div className="flex gap-4"><ShieldCheck className="h-6 w-6 shrink-0 text-violet" aria-hidden="true" /><div><h2 className="font-semibold">Your information</h2><p className="mt-1 text-sm text-muted">Details you share are used only to respond to your enquiry.</p></div></div>
            {CONTACT_EMAIL && (
              <div className="flex gap-4"><Mail className="h-6 w-6 shrink-0 text-violet" aria-hidden="true" /><div><h2 className="font-semibold">Email</h2><a className="mt-1 block text-sm text-violet-dark underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div></div>
            )}
          </aside>
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
