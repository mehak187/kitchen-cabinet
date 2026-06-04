import { useEffect, useState } from 'react'
import { contacts, whatsappMessage } from '../data.js'
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx'

export default function MobileCallBar() {
  const primary = contacts[0]
  const [hidden, setHidden] = useState(false)

  // Hide the bar once the Contact section or footer is on screen — they have
  // their own Call/WhatsApp links, so the bar would only overlap them.
  useEffect(() => {
    const targets = ['contact', 'site-footer']
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!targets.length || !('IntersectionObserver' in window)) return
    const visible = new Set()
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target)
          else visible.delete(e.target)
        })
        setHidden(visible.size > 0)
      },
      { threshold: 0.08 }
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return (
    <div
      className={`callbar ${hidden ? 'is-hidden' : ''}`}
      role="region"
      aria-label="Quick contact"
      aria-hidden={hidden}
    >
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
