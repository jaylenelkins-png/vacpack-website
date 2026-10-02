import { solutions } from '../data'

export default function SolutionsPage() {
  return (
    <section className="page-section">
      <div className="container narrow">
        <span className="eyebrow">Solutions</span>
        <h1>Tailored packaging systems for premium markets.</h1>
      </div>

      <div className="container solution-grid">
        {solutions.map((item) => (
          <article className="solution-card" key={item.label}>
            <span className="tiny-label">{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
