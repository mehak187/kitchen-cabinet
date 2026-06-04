import { contacts, whatsappMessage } from '../data.js'
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx'

export default function MobileCallBar() {
  const primary = contacts[0]
  return (
    <div className="callbar" role="region" aria-label="Quick contact">
      <a className="callbar__btn callbar__btn--call" href={`tel:${primary.tel}`}>
        <PhoneIcon size={19} /> Call now
      </a>
      <a
        className="callbar__btn callbar__btn--wa"
        href={`https://wa.me/${primary.wa}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon size={20} /> WhatsApp
      </a>
    </div>
  )
}
