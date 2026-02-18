import useScrollReveal from '../hooks/useScrollReveal'
import { profile } from '../data/portfolio'

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="contact section" ref={ref}>
      <p className="overline reveal">Get in Touch</p>
      <h2 className="contact__heading reveal reveal-delay-1">
        Let&apos;s build something <em>impactful together.</em>
      </h2>
      <p className="contact__sub reveal reveal-delay-2">
        Open to strategic partnerships, speaking engagements, advisory roles and
        new leadership opportunities in insurance, agriculture &amp; climate risk.
      </p>
      <div className="contact__links reveal reveal-delay-3">
        <a href={`mailto:${profile.email}`} className="btn btn--outline-light">{profile.email}</a>
        <a href={`tel:${profile.phone1.replace(/\s/g, '')}`} className="btn btn--outline-light">{profile.phone1}</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--outline-light">LinkedIn</a>
        <a href="#" className="btn btn--outline-light">{profile.location}</a>
      </div>
    </section>
  )
}