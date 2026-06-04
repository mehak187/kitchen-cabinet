import { business, contacts, heroImage } from '../data.js'
import { PhoneIcon, WhatsAppIcon, ArrowIcon, CheckIcon } from './Icons.jsx'

export default function Hero() {
  const primary = contacts[0]
  return (
    <section className="hero" id="home">
      <div className="hero__bg" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="hero__overlay" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">{business.area}</span>
          <h1 className="hero__title">
            Aluminum Kitchens
            <span className="hero__title-accent">Ready &amp; Custom Made</span>
          </h1>
          <p className="hero__ar" dir="rtl">
            {business.nameAr} — {business.taglineAr}
          </p>
          <p className="hero__lead">
            Beautiful, durable aluminum kitchen cabinets — built ready-to-fit or
            tailored (تفصيل) to your exact space. Crafted in Riyadh, delivered and
            installed with care.
          </p>

          <ul className="hero__points">
            <li><CheckIcon /> Free measurement &amp; design</li>
            <li><CheckIcon /> Ready-made &amp; fully custom</li>
            <li><CheckIcon /> Rust-proof aluminum build</li>
          </ul>

          <div className="hero__cta">
            <a className="btn btn--whatsapp btn--lg" href={`https://wa.me/${primary.wa}`} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> Get a Free Quote
            </a>
            <a className="btn btn--outline-light btn--lg" href={`tel:${primary.tel}`}>
              <PhoneIcon /> Call {primary.phoneDisplay}
            </a>
          </div>

          <a className="hero__scroll" href="#gallery">
            See our work <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
