import useScrollReveal from '../hooks/useScrollReveal'
import { education, courses } from '../data/portfolio'

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" className="education section" ref={ref}>
      <p className="overline reveal">Education &amp; Certifications</p>
      <h2 className="education__heading reveal reveal-delay-1">
        Continuous learning across disciplines.
      </h2>
      <div className="edu-grid">
        {education.map((item, i) => (
          <div
            key={item.id}
            className={`edu-card reveal ${item.highlight ? 'edu-card--highlight' : ''}`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <span className="edu-card__year">{item.year}</span>
            <h3 className="edu-card__degree">{item.degree}</h3>
            <p className="edu-card__institution">{item.institution}</p>
          </div>
        ))}
        <div className="edu-card edu-card--dark reveal">
          <span className="edu-card__year-dark">Short Courses</span>
          <ul className="edu-card__courses">
            {courses.map((c) => (
              <li key={c} className="edu-card__course">{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}