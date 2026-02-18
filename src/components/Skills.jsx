import { useEffect, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import { skills } from '../data/portfolio'

const bodyText = 'A rare combination of deep technical insurance knowledge, commercial acumen, and on-the-ground market intelligence built across Sub-Saharan Africa and Europe over nearly two decades.'

export default function Skills() {
  const sectionRef = useScrollReveal()
  const barsRef = useRef(null)

  useEffect(() => {
    if (!barsRef.current) return
    const fills = barsRef.current.querySelectorAll('[data-fill]')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const level = entry.target.dataset.fill
          setTimeout(() => { entry.target.style.width = `${level}%` }, 200)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })
    fills.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="skills__left">
        <p className="overline reveal">Expertise</p>
        <h2 className="skills__heading reveal reveal-delay-1">Domain depth and leadership breadth.</h2>
        <p className="skills__body reveal reveal-delay-2">{bodyText}</p>
      </div>
      <div className="skills__right reveal reveal-delay-2" ref={barsRef}>
        {skills.map(({ category, items }) => (
          <div key={category} className="skills__group">
            <p className="skills__group-label">{category}</p>
            {items.map(({ name, level }) => (
              <div key={name} className="skill-bar">
                <div className="skill-bar__meta">
                  <span className="skill-bar__name">{name}</span>
                  <span className="skill-bar__value">{level}%</span>
                </div>
                <div className="skill-bar__track">
                  <div className="skill-bar__fill" data-fill={level} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}