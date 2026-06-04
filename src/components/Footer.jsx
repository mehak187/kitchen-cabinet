import { business, contacts } from '../data.js'
import { PhoneIcon } from './Icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" id="site-footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="brand">
            <span className="brand__mark" aria-hidden="true">AK</span>
            <span className="brand__text">
              <strong>{business.nameEn}</strong>
              <em>{business.nameAr}</em>
            </span>
          </div>
          <p>{business.taglineEn} · {business.area}</p>
        </div>

        <div className="footer__contacts">
          {contacts.map((c) => (
            <a key={c.name} href={`tel:${c.tel}`} className="footer__phone">
              <PhoneIcon size={16} /> {c.name} · <span dir="ltr">{c.phoneDisplay}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="footer__bar">
        <div className="container">
          <span>© {year} {business.nameEn} · {business.nameAr}</span>
          <span>{business.hours}</span>
        </div>
      </div>
    </footer>
  )
}
