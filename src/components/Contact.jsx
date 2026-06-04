import { business, contacts, whatsappMessage } from '../data.js'
import { PhoneIcon, WhatsAppIcon, PinIcon, ClockIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section__head reveal">
          <span className="section__tag">Get in touch</span>
          <h2 className="section__title">Let’s build your kitchen</h2>
          <p className="section__sub">
            Call or message on WhatsApp for a free measurement and quote.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__cards">
            {contacts.map((c) => (
              <div className="contact-card" key={c.name}>
                <div className="contact-card__head">
                  <span className="contact-card__avatar">{c.name[0]}</span>
                  <div>
                    <h3>{c.name}</h3>
                    <p dir="ltr">{c.phoneDisplay}</p>
                  </div>
                </div>
                <div className="contact-card__actions">
                  <a className="btn btn--whatsapp" href={`https://wa.me/${c.wa}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">
                    <WhatsAppIcon size={18} /> WhatsApp
                  </a>
                  <a className="btn btn--dark" href={`tel:${c.tel}`}>
                    <PhoneIcon size={17} /> Call
                  </a>
                </div>
              </div>
            ))}
          </div>

          <aside className="contact__info">
            <div className="info-row">
              <span className="info-row__icon"><PinIcon /></span>
              <div>
                <strong>Location</strong>
                <p>{business.area}</p>
              </div>
            </div>
            <div className="info-row">
              <span className="info-row__icon"><ClockIcon /></span>
              <div>
                <strong>Opening Hours</strong>
                <p>{business.hours}</p>
                <p dir="rtl" className="info-row__ar">{business.hoursAr}</p>
              </div>
            </div>
            <a
              className="info-map"
              href="https://www.google.com/maps/search/?api=1&query=aluminum+kitchens+Manfuhah+Riyadh"
              target="_blank"
              rel="noreferrer"
            >
              <PinIcon size={18} /> Open in Google Maps
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
