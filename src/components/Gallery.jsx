import { useCallback, useEffect, useState } from 'react'
import { gallery } from '../data.js'
import { CloseIcon, ArrowIcon } from './Icons.jsx'

const STEP = 9 // images revealed per "load more"

export default function Gallery() {
  const [visible, setVisible] = useState(STEP)
  const [active, setActive] = useState(null) // index in lightbox, or null

  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    []
  )
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % gallery.length)),
    []
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, prev, next])

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="section__head reveal">
          <span className="section__tag">Our work</span>
          <h2 className="section__title">Completed kitchens &amp; custom designs</h2>
          <p className="section__sub">
            Real kitchens we have built and the 3D designs behind them. Tap any photo to view larger.
          </p>
        </div>

        <div className="gallery__grid">
          {gallery.slice(0, visible).map((src, i) => (
            <button
              className="gallery__item"
              key={src}
              onClick={() => setActive(i)}
              aria-label={`Open kitchen image ${i + 1}`}
            >
              <img src={src} alt={`Aluminum kitchen ${i + 1}`} loading="lazy" />
              <span className="gallery__zoom">View</span>
            </button>
          ))}
        </div>

        {visible < gallery.length && (
          <div className="gallery__more">
            <button className="btn btn--dark btn--lg" onClick={() => setVisible((v) => v + STEP)}>
              Load more <ArrowIcon />
            </button>
          </div>
        )}
      </div>

      {active !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox__close" aria-label="Close" onClick={close}>
            <CloseIcon />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            ‹
          </button>
          <img
            className="lightbox__img"
            src={gallery[active]}
            alt={`Aluminum kitchen ${active + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            ›
          </button>
          <span className="lightbox__count">{active + 1} / {gallery.length}</span>
        </div>
      )}
    </section>
  )
}
