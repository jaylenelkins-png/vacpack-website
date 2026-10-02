import { Link } from 'react-router-dom'
import { stats, features, testimonials } from '../data'

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Fresh. Protected. Premium.</span>
            <h1>Luxury vacuum packaging for modern brands.</h1>
            <p className="lede">
              VacPack helps premium food, wellness, and retail brands protect product integrity,
              extend freshness, and present their goods with elevated confidence.
            </p>

            <div className="button-row">
              <Link to="/pricing" className="button button-primary">
                Explore Plans
              </Link>
              <Link to="/solutions" className="button button-secondary">
                How it Works
              </Link>
            </div>

            <div className="stats-row">
              {stats.map((stat) => (
                <div className="stat-box" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="VacPack packaging visual">
            <div className="visual-card">
              <div className="bag-scene">
                <div className="product-bag large"></div>
                <div className="product-bag mid"></div>
                <div className="product-bag small"></div>
              </div>
              <div className="floating-tag tag-top">2x shelf life</div>
              <div className="floating-tag tag-bottom">Airtight seal</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading align-center">
            <span className="eyebrow">Why VacPack</span>
            <h2>Built for brands that expect more.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-panel">
        <div className="container split-layout">
          <div>
            <span className="eyebrow">A seamless process</span>
            <h2>From careful preparation to protected delivery.</h2>
            <ul className="check-list">
              <li>Choose the ideal package format for your product line.</li>
              <li>Deploy a sealing workflow tailored to volume and timing.</li>
              <li>Improve shelf stability, brand presentation, and shipping confidence.</li>
            </ul>
          </div>

          <div className="stack-panel">
            <div className="stack-item one"></div>
            <div className="stack-item two"></div>
            <div className="stack-item three"></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading align-center">
            <span className="eyebrow">What clients say</span>
            <h2>Trusted by product-driven teams.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <div className="stars">★★★★★</div>
                <p>“{item.quote}”</p>
                <div className="person">
                  <div className="person-badge">{item.name.charAt(0)}</div>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.title}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-box">
          <div>
            <span className="eyebrow">Next step</span>
            <h2>Ready to redefine your packaging experience?</h2>
          </div>
          <Link to="/contact" className="button button-primary">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
