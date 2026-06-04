const steps = [
  {
    n: '01',
    title: 'Measure & Design',
    text: 'We take exact measurements and prepare a 3D design so you see your kitchen before it is built.',
  },
  {
    n: '02',
    title: 'Build in Aluminum',
    text: 'Your cabinets are cut and assembled from quality aluminum in our Riyadh workshop.',
  },
  {
    n: '03',
    title: 'Deliver & Install',
    text: 'We deliver, fit and finish everything on site — your kitchen ready to use the same day.',
  },
]

export default function Process() {
  return (
    <section className="process section" id="process">
      <div className="container">
        <div className="section__head reveal">
          <span className="section__tag">How it works</span>
          <h2 className="section__title">From idea to finished kitchen</h2>
          <p className="section__sub">A simple, clear process — no surprises.</p>
        </div>

        <div className="process__grid">
          {steps.map((s, i) => (
            <div className="step reveal" style={{ transitionDelay: `${i * 90}ms` }} key={s.n}>
              <span className="step__num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {i < steps.length - 1 && <span className="step__line" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
