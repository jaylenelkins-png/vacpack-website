import { pricingPlans } from '../data'
import { Link } from 'react-router-dom'

export default function PricingPage() {
  return (
    <section className="page-section">
      <div className="container narrow">
        <span className="eyebrow">Pricing</span>
        <h1>Plans designed around growth.</h1>
      </div>

      <div className="container plan-grid">
        {pricingPlans.map((plan) => (
          <article className={`plan-card ${plan.highlight ? 'featured' : ''}`} key={plan.name}>
            <div className="plan-header">
              <h3>{plan.name}</h3>
              {plan.highlight && <span className="tag">Most popular</span>}
            </div>
            <p className="plan-price">
              {plan.price}
              {plan.period && <span>{plan.period}</span>}
            </p>
            <p className="plan-description">{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Link to="/contact" className={`button ${plan.highlight ? 'button-primary' : 'button-secondary'}`}>
              {plan.highlight ? 'Choose Signature' : 'Start with this plan'}
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
