import { stats } from '../data.js'

export default function Stats() {
  return (
    <section className="stats" aria-label="Our track record">
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <div className="stat reveal" style={{ transitionDelay: `${i * 80}ms` }} key={s.label}>
            <span className="stat__value">
              {s.value}
              <em>{s.suffix}</em>
            </span>
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
