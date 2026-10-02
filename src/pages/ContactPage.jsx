export default function ContactPage() {
  return (
    <section className="page-section contact-page">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">Contact</span>
          <h1>Let’s build your ideal packaging system.</h1>
          <p className="page-intro">
            Share your product needs, timeline, and packaging goals. We’ll help map the right strategy for freshness, protection, and presentation.
          </p>

          <div className="contact-list">
            <div>
              <strong>Email</strong>
              <a href="mailto:hello@vacpack.com">hello@vacpack.com</a>
            </div>
            <div>
              <strong>Phone</strong>
              <a href="tel:+12125550191">+1 (212) 555-0191</a>
            </div>
            <div>
              <strong>Studio</strong>
              <span>128 Mercer Street, New York, NY</span>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="field-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" />
          </div>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="field-group">
            <label htmlFor="company">Company</label>
            <input id="company" type="text" placeholder="Brand or company" />
          </div>
          <div className="field-group">
            <label htmlFor="message">Project details</label>
            <textarea id="message" rows="5" placeholder="Tell us about your packaging goals..." />
          </div>
          <button type="submit" className="button button-primary w-full">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}
