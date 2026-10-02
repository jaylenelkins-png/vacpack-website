import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">V</span>
            <span className="brand-text">VacPack</span>
          </div>
          <p>Fresh protection. Elevated presentation.</p>
        </div>

        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-meta">
          <a href="mailto:hello@vacpack.com">hello@vacpack.com</a>
          <span>© 2026 VacPack</span>
        </div>
      </div>
    </footer>
  )
}
