import { useRef, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { services } from '@/data/services'
import { budgets } from '@/data/misc'
import { CONTACT_ENDPOINT, CONTACT_EMAIL } from '@/lib/site'

interface Values {
  name: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  message: string
}
type Errors = Partial<Record<keyof Values, string>>
type Status = 'idle' | 'sending' | 'success' | 'error' | 'unconfigured'

const empty: Values = { name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[+()\d\s.-]{7,20}$/

function validate(v: Values): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.'
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.phone.trim() && !PHONE_RE.test(v.phone.trim())) e.phone = 'Please enter a valid phone number.'
  if (!v.service) e.service = 'Please choose a service.'
  if (v.message.trim().length < 20) e.message = 'Please describe your project in at least 20 characters.'
  if (v.message.length > 3000) e.message = 'Please keep the description under 3,000 characters.'
  return e
}

const field =
  'mt-1.5 w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray-400 focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/25'

export function ContactForm() {
  const [params] = useSearchParams()
  const preset = services.find((s) => s.id === params.get('service'))?.title ?? ''
  const [values, setValues] = useState<Values>({ ...empty, service: preset })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const honeypot = useRef<HTMLInputElement>(null)
  const openedAt = useRef(Date.now())

  const set = (k: keyof Values) => (ev: { target: { value: string } }) => {
    setValues((p) => ({ ...p, [k]: ev.target.value }))
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }))
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(`cf-${Object.keys(found)[0]}`)?.focus()
      return
    }
    // Spam protection: honeypot filled, or submitted implausibly fast. Pretend nothing; do not send.
    if (honeypot.current?.value || Date.now() - openedAt.current < 3000) {
      setStatus('success')
      return
    }
    if (!CONTACT_ENDPOINT) {
      setStatus('unconfigured')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, source: 'avenix-website' }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('success')
      setValues(empty)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-2xl border border-line bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-violet" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold">Message sent</h3>
        <p className="mt-2 text-muted">Thank you. We have received your enquiry and will get back to you soon.</p>
        <Button variant="secondary" className="mt-6" onClick={() => setStatus('idle')}>Send another message</Button>
      </div>
    )
  }

  const err = (k: keyof Values) => (errors[k] ? <p id={`cf-${k}-err`} className="mt-1.5 text-xs font-medium text-red-600">{errors[k]}</p> : null)
  const aria = (k: keyof Values) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `cf-${k}-err` : undefined })
  const border = (k: keyof Values) => (errors[k] ? 'border-red-400' : 'border-line')

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-sm font-medium">Full Name *</label>
          <input id="cf-name" autoComplete="name" value={values.name} onChange={set('name')} className={`${field} ${border('name')}`} {...aria('name')} />
          {err('name')}
        </div>
        <div>
          <label htmlFor="cf-email" className="text-sm font-medium">Business Email *</label>
          <input id="cf-email" type="email" autoComplete="email" value={values.email} onChange={set('email')} className={`${field} ${border('email')}`} {...aria('email')} />
          {err('email')}
        </div>
        <div>
          <label htmlFor="cf-phone" className="text-sm font-medium">Phone Number</label>
          <input id="cf-phone" type="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} className={`${field} ${border('phone')}`} {...aria('phone')} />
          {err('phone')}
        </div>
        <div>
          <label htmlFor="cf-company" className="text-sm font-medium">Company Name</label>
          <input id="cf-company" autoComplete="organization" value={values.company} onChange={set('company')} className={`${field} ${border('company')}`} />
        </div>
        <div>
          <label htmlFor="cf-service" className="text-sm font-medium">Service Interested In *</label>
          <select id="cf-service" value={values.service} onChange={set('service')} className={`${field} ${border('service')}`} {...aria('service')}>
            <option value="">Select a service</option>
            {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
          {err('service')}
        </div>
        <div>
          <label htmlFor="cf-budget" className="text-sm font-medium">Estimated Project Budget</label>
          <select id="cf-budget" value={values.budget} onChange={set('budget')} className={`${field} ${border('budget')}`}>
            <option value="">Select a range</option>
            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="cf-message" className="text-sm font-medium">Project Description *</label>
        <textarea id="cf-message" rows={5} value={values.message} onChange={set('message')} placeholder="What are you trying to build or improve?" className={`${field} ${border('message')}`} {...aria('message')} />
        {err('message')}
      </div>
      {/* Honeypot: hidden from people and assistive tech, bots tend to fill it. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>Leave this empty<input ref={honeypot} tabIndex={-1} autoComplete="off" name="website" /></label>
      </div>

      {status === 'unconfigured' && (
        <div role="alert" className="mt-5 flex gap-3 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden="true" />
          <p>
            Your message has <strong>not</strong> been sent: online submission is not connected yet.
            {CONTACT_EMAIL ? <> Please email us at <a className="font-semibold underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</> : ' Please try again later.'}
          </p>
        </div>
      )}
      {status === 'error' && (
        <div role="alert" className="mt-5 flex gap-3 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden="true" />
          <p>Something went wrong and your message was not sent. Please check your connection and try again.</p>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">Fields marked * are required. We only use your details to respond to your enquiry.</p>
        <Button type="submit" disabled={status === 'sending'} arrow={status !== 'sending'}>
          {status === 'sending' ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…</> : 'Send Message'}
        </Button>
      </div>
    </form>
  )
}
