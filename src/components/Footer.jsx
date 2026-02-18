import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer__copy">&copy; {year} {profile.name} &mdash; Strategic Business Leader</p>
      <div className="footer__links">
        <span className="footer__tag">{profile.subTagline}</span>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
        <a href={`mailto:${profile.email}`} className="footer__link">{profile.email}</a>
      </div>
    </footer>
  )
}