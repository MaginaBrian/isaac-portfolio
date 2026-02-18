import { profile, stats } from '../data/portfolio'

export default function Hero() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero__left">
        <div className="hero__stats">
          {stats.map(({ value, label }, i) => (
            <div key={label} className="hero__stat" style={{ animationDelay: `${i * 120}ms` }}>
              <span className="hero__stat-value">{value}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
        <h1 className="hero__greeting">Hello,</h1>
        <p className="hero__subtitle">It&apos;s <em>{profile.name}</em>, a strategic leader in <em>insurance, agriculture and climate risk.</em></p>
        <div className="hero__actions">
          <button className="btn btn--primary" onClick={() => scrollTo('#experience')}>View Experience</button>
          <button className="btn btn--ghost" onClick={() => scrollTo('#about')}>About Me</button>
        </div>
        <div className="hero__chips">
          <a href={`mailto:${profile.email}`} className="hero__chip">{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero__chip">LinkedIn</a>
        </div>
      </div>
      <div className="hero__right">
        <div className="hero__monogram">{profile.initials}</div>
        <div className="hero__card">
          <strong>{profile.name}</strong>
          <span>{profile.currentRole}</span>
        </div>
        <div className="hero__scroll">
          <span>Scroll down</span>
          <span className="hero__arrow">&#8595;</span>
        </div>
      </div>
    </section>
  )
}