import { galleryItems } from '../data'

export default function GalleryPage() {
  return (
    <section className="page-section">
      <div className="container narrow">
        <span className="eyebrow">Collection</span>
        <h1>Packaging built to impress.</h1>
      </div>

      <div className="container gallery-grid">
        {galleryItems.map((item) => (
          <article className={`gallery-card ${item.tone}`} key={item.title}>
            <div className="gallery-visual"></div>
            <div className="gallery-copy">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
