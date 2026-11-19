import { MessageCircle, Mail, MapPin, ExternalLink } from 'lucide-react'
import { CONTACT_EMAIL, PHONE_DISPLAY, WHATSAPP_URL, LOCATION, MAP_LINK } from '@/lib/site'

const row = 'flex items-start gap-4'
const icon = 'mt-0.5 h-6 w-6 shrink-0 text-violet'
const link = 'break-words text-sm text-violet-dark underline-offset-4 hover:underline'

/** Official AVENIX contact details, shared by the home and contact sections. */
export function ContactDetails() {
  return (
    <div className="space-y-6">
      <div className={row}>
        <MessageCircle className={icon} aria-hidden="true" />
        <div>
          <h3 className="font-semibold">WhatsApp / Phone</h3>
          <a className={`mt-1 block ${link}`} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            {PHONE_DISPLAY}<span className="sr-only"> (opens WhatsApp)</span>
          </a>
        </div>
      </div>
      <div className={row}>
        <Mail className={icon} aria-hidden="true" />
        <div>
          <h3 className="font-semibold">Email</h3>
          <a className={`mt-1 block ${link}`} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
      <div className={row}>
        <MapPin className={icon} aria-hidden="true" />
        <div>
          <h3 className="font-semibold">Office location</h3>
          <p className="mt-1 text-sm text-muted">{LOCATION}</p>
          <a className={`mt-1 inline-flex items-center gap-1 ${link}`} href={MAP_LINK} target="_blank" rel="noopener noreferrer">
            View on Google Maps <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </div>
  )
}
