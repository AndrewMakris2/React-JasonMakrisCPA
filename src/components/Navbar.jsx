import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Team',     href: '#team'     },
  { label: 'Reviews',  href: '#reviews'  },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar({ theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  // True once the user scrolls past the hero (~80px)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  // "over-hero" = transparent, white text  (at the very top of the page)
  const navClass = `navbar${!scrolled && !mobileOpen ? ' over-hero' : ''}`

  return (
    <nav className={navClass} role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">

        {/* Firm name */}
        <a href="#hero" className="navbar-brand" onClick={closeMobile}>
          Dusseau <span>&amp;</span> Makris
        </a>

        {/* Desktop links */}
        <ul className="navbar-links" role="list">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="navbar-controls">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button
            className={`hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar-mobile${mobileOpen ? ' open' : ''}`} role="menu">
        {NAV_LINKS.map(link => (
          <a key={link.href} href={link.href} onClick={closeMobile} role="menuitem">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
