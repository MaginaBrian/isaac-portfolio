import useScrollReveal from '../hooks/useScrollReveal'
import { profile, competencies, languages, interests } from '../data/portfolio'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="about__left">
        <p className="overline reveal">About Me</p>
        <h2 className="about__heading reveal reveal-delay-1">Strategic leader at the intersection of insurance and climate.</h2>
        <p className="about__body reveal reveal-delay-2">Over <strong>18 years</strong>, I have built a track record of leading transformative projects across Africa and Europe from pioneering <strong>parametric insurance products</strong> that protect smallholder farmers to steering <strong>sovereign risk transfer solutions</strong> worth hundreds of millions of dollars.</p>
        <p className="about__body reveal reveal-delay-3">I bring a genuine passion for <strong>ESG integration</strong>, coalition building, and unlocking underserved markets through innovation and public-private partnerships.</p>
      </div>
      <div className="about__right reveal reveal-delay-2">
        <div className="about__group">
          <p className="about__group-label">Core Competencies</p>
          <div className="about__tags">
            {competencies.map(c => (<span key={c} className="about__tag">{c}</span>))}
          </div>
        </div>
        <div className="about__group">
          <p className="about__group-label">Languages</p>
          <div className="about__langs">
            {languages.map(({ name, level }) => (
              <div key={name} className="about__lang">
                <span className="about__lang-name">{name}</span>
                <span className="about__lang-level">{level}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about__group">
          <p className="about__group-label">Based In</p>
          <p className="about__meta">{profile.location}</p>
        </div>
        <div className="about__group">
          <p className="about__group-label">Personal Interests</p>
          <div className="about__interests">
            {interests.map(({ icon, label }) => (<span key={label} className="about__interest">{icon} {label}</span>))}
          </div>
        </div>
      </div>
    </section>
  )
}