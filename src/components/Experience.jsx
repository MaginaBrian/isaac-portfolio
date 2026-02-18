import useScrollReveal from '../hooks/useScrollReveal'
import { experience } from '../data/portfolio'

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="experience section" ref={ref}>
      <p className="overline reveal">Work Experience</p>
      <h2 className="experience__heading reveal reveal-delay-1">18 years of impact across Africa and Europe.</h2>
      <div className="timeline">
        {experience.map((item, i) => (
          <article key={item.id} className="timeline__item reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="timeline__period">
              {item.period}
              <span className="timeline__location">{item.location}</span>
            </div>
            <div className="timeline__content">
              <h3 className="timeline__org">{item.organisation}</h3>
              <p className="timeline__role">{item.role}</p>
              <p className="timeline__desc">{item.description}</p>
              {item.achievements.length > 0 && (
                <ul className="timeline__achievements">
                  {item.achievements.map(a => (
                    <li key={a} className="timeline__achievement">{a}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}