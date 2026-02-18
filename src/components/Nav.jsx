import { useState, useEffect } from 'react'
import { profile } from '../data/portfolio'

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Education',  href: '#education'  },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const ids = NAV_LINKS.map(l => l.href.slice(1))
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav-header ${scrolled ? 'nav-header--scrolled' : ''}`}>
      <nav className="nav">
        <a href="#home" className="nav__logo" onClick={e => handleClick(e, '#home')}>{profile.name}</a>
        <ul className="nav__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={`nav__link ${activeSection === href.slice(1) ? 'nav__link--active' : ''}`} onClick={e => handleClick(e, href)}>{label}</a>
            </li>
          ))}
        </ul>
        <a href={`mailto:${profile.email}`} className="btn btn--primary nav__cta">Get in Touch</a>
        <button className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`nav__mobile ${menuOpen ? 'nav__mobile--open' : ''}`}>
        <ul>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="nav__mobile-link" onClick={e => handleClick(e, href)}>{label}</a>
            </li>
          ))}
        </ul>
        <a href={`mailto:${profile.email}`} className="btn btn--primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>Get in Touch</a>
      </div>
    </header>
  )
}