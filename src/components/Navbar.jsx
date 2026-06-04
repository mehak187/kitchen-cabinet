import { useEffect, useState } from 'react'
import { business, contacts } from '../data.js'
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx'

const links = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Gallery', '#gallery'],
  ['Process', '#process'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const primary = contacts[0]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">AK</span>
          <span className="brand__text">
            <strong>{business.nameEn}</strong>
            <em>{business.nameAr}</em>
          </span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav__links-cta btn btn--ghost" href={`tel:${primary.tel}`}>
            <PhoneIcon size={17} /> {primary.phoneDisplay}
          </a>
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn--whatsapp btn--sm hide-mobile"
            href={`https://wa.me/${primary.wa}`}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={18} /> WhatsApp
          </a>
          <button
            className={`hamburger ${open ? 'is-active' : ''}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
