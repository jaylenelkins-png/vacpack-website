export default function AboutPage() {
  return (
    <section className="page-section">
      <div className="container narrow">
        <span className="eyebrow">Our story</span>
        <h1>Packaging with intention.</h1>
        <p className="page-intro">
          VacPack was built to help premium brands protect product quality without sacrificing the
          elegance of the unboxing experience. We combine packaging strategy, sealing technology, and
          design sensibility to create solutions that feel as refined as they perform.
        </p>
      </div>

      <div className="container value-grid">
        <article className="info-card">
          <h3>Crafted for quality</h3>
          <p>
            Every solution is designed around freshness, product integrity, and a premium visual identity.
          </p>
        </article>
        <article className="info-card">
          <h3>Built for scale</h3>
          <p>
            We support small-batch launches and enterprise operations with systems that grow with your brand.
          </p>
        </article>
        <article className="info-card">
          <h3>Driven by trust</h3>
          <p>
            Long-term partnerships, transparent communication, and dependable service define how we work.
          </p>
        </article>
      </div>

      <div className="container principles-grid">
        <div className="principle-box">
          <span className="tiny-label">01</span>
          <h4>Precision</h4>
          <p>We engineer packaging to preserve freshness and protect value with exacting care.</p>
        </div>
        <div className="principle-box">
          <span className="tiny-label">02</span>
          <h4>Luxury</h4>
          <p>Our presentation strategies turn everyday delivery into a premium brand moment.</p>
        </div>
        <div className="principle-box">
          <span className="tiny-label">03</span>
          <h4>Partnership</h4>
          <p>We work closely with product teams to create packaging systems that support growth.</p>
        </div>
      </div>
    </section>
  )
}
