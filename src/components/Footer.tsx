import { motion } from 'framer-motion'

export function Footer() {
  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__gradient-line" aria-hidden="true" />
      <div className="container footer__inner">
        <div className="footer__left">
          <div className="footer__brand">
            <span className="footer__logo">DU</span>
            <span className="footer__name">Daoud Umer</span>
          </div>
          <p className="footer__copy">
            © {new Date().getFullYear()} Daoud Umer. All Rights Reserved.
          </p>
        </div>

        <div className="footer__links">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); handleNavClick('projects') }}
          >
            Work
          </a>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); handleNavClick('services') }}
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}
          >
            Contact
          </a>
        </div>

        <div className="footer__socials">
          <motion.a
            href="https://linkedin.com/in/daoud-umer-40b640255/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fa-brands fa-linkedin-in" />
          </motion.a>
          <motion.a
            href="https://github.com/daoudumer"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fa-brands fa-github" />
          </motion.a>
          <motion.a
            href="mailto:daudumer2001@gmail.com"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fa-solid fa-envelope" />
          </motion.a>
        </div>

        <motion.button
          className="footer__back-to-top"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <i className="fa-solid fa-arrow-up" />
        </motion.button>
      </div>
    </footer>
  )
}
