import { CabinetIcon, DesignIcon, ShieldIcon, RulerIcon, TruckIcon } from './Icons.jsx'

const features = [
  {
    icon: <RulerIcon />,
    title: 'Free Measurement',
    text: 'We visit your home, measure precisely and plan a kitchen that fits your space perfectly.',
  },
  {
    icon: <CabinetIcon />,
    title: 'Ready-Made Kitchens',
    text: 'In-stock, ready-to-install aluminum cabinet sets for quick delivery and a fast finish.',
  },
  {
    icon: <DesignIcon />,
    title: 'Custom / تفصيل',
    text: 'Fully tailored layouts, sizes and finishes designed in 3D before we build a single panel.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Built to Last',
    text: 'Premium aluminum that resists water, heat and rust — ideal for everyday kitchen life.',
  },
  {
    icon: <TruckIcon />,
    title: 'Delivery & Install',
    text: 'We deliver and professionally fit your kitchen, leaving it clean and ready to use.',
  },
]

export default function Features() {
  return (
    <section className="features section" id="services">
      <div className="container">
        <div className="section__head reveal">
          <span className="section__tag">What we do</span>
          <h2 className="section__title">Everything for your aluminum kitchen</h2>
          <p className="section__sub">
            From a single ready-made set to a full custom design — one workshop handles it all.
          </p>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <article className="feature reveal" style={{ transitionDelay: `${i * 70}ms` }} key={f.title}>
              <div className="feature__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
