import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type NavItem = { id: string; label: string; icon: string }

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navItems: NavItem[] = useMemo(
    () => [
      { id: 'hero', label: 'Home', icon: 'fa-solid fa-house' },
      { id: 'services', label: 'Services', icon: 'fa-solid fa-cubes' },
      { id: 'skills', label: 'Skills', icon: 'fa-solid fa-code' },
      { id: 'projects', label: 'Work', icon: 'fa-solid fa-briefcase' },
      { id: 'experience', label: 'Experience', icon: 'fa-solid fa-rocket' },
      { id: 'education', label: 'Education', icon: 'fa-solid fa-graduation-cap' },
      { id: 'contact', label: 'Contact', icon: 'fa-solid fa-envelope' },
    ],
    [],
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id)
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((s): s is HTMLElement => s !== null)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [navItems])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (sectionId: string) => {
    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileOpen(false)
  }

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="navbar__inner">
          <a href="#hero" className="navbar__brand" onClick={(e) => { e.preventDefault(); handleNavClick('hero') }}>
            <div className="navbar__logo">
              <img src="/favicon.svg" alt="Logo" className="navbar__logo-text" />
              <div className="navbar__logo-glow" />
            </div>
            <div className="navbar__brand-info">
              <span className="navbar__brand-name">Daoud Umer</span>
              <span className="navbar__brand-role">Full‑Stack Developer</span>
            </div>
          </a>

          <nav className="navbar__nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`navbar__link ${activeSection === item.id ? 'navbar__link--active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <motion.div
                    className="navbar__link-indicator"
                    layoutId="activeNav"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <button
            className={`navbar__toggle ${mobileOpen ? 'navbar__toggle--open' : ''}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu rendered in a portal-like fixed overlay OUTSIDE the header */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="navbar__backdrop"
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />
            {/* Slide-down menu */}
            <motion.nav
              className="navbar__mobile"
              key="mobile-nav"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  className={`navbar__mobile-link ${activeSection === item.id ? 'navbar__mobile-link--active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <i className={item.icon} />
                  {item.label}
                </motion.button>
              ))}

              <div className="navbar__mobile-footer">
                <a href="mailto:daudumer2001@gmail.com" className="navbar__mobile-contact">
                  <i className="fa-solid fa-envelope" />
                  daudumer2001@gmail.com
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
