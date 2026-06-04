import { videos } from '../data.js'

export default function VideoSection() {
  return (
    <section className="videos section section--dark">
      <div className="container">
        <div className="section__head reveal">
          <span className="section__tag section__tag--light">Walkthrough</span>
          <h2 className="section__title">See a kitchen up close</h2>
          <p className="section__sub">Short video tours of finished aluminum kitchens.</p>
        </div>

        <div className="videos__grid">
          {videos.map((src, i) => (
            <video
              key={src}
              className="videos__item"
              controls
              preload="metadata"
              playsInline
              poster="/gallery/k35.jpg"
            >
              <source src={src} type="video/mp4" />
              Your browser does not support video. Video {i + 1}.
            </video>
          ))}
        </div>
      </div>
    </section>
  )
}
