import { reviews } from '../data.js'
import { StarIcon, QuoteIcon } from './Icons.jsx'

export default function Reviews() {
  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <div className="section__head">
          <span className="section__tag">Reviews</span>
          <h2 className="section__title">What our customers say</h2>
          <p className="section__sub">
            Rated 4.2★ on Google by kitchen owners across Riyadh.
          </p>
        </div>

        <div className="reviews__grid">
          {reviews.map((r, i) => (
            <figure
              className="review reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
              key={r.name}
            >
              <span className="review__quote" aria-hidden="true"><QuoteIcon /></span>
              <div className="review__stars" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} size={17} className={s < r.rating ? '' : 'is-dim'} />
                ))}
              </div>
              <blockquote>{r.text}</blockquote>
              <figcaption className="review__author">
                <span className="review__avatar">{r.name[0]}</span>
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
