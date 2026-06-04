import { contacts, whatsappMessage } from '../data.js'
import { WhatsAppIcon } from './Icons.jsx'

export default function FloatingWhatsApp() {
  const primary = contacts[0]
  return (
    <a
      className="fab-whatsapp"
      href={`https://wa.me/${primary.wa}?text=${whatsappMessage}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={30} />
      <span className="fab-whatsapp__pulse" aria-hidden="true" />
    </a>
  )
}
