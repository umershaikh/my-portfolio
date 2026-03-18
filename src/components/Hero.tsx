import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { ParticleBackground } from './ParticleBackground'
import profileImage from '../assets/profile.png'

export function Hero() {
  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="hero">
      {/* Particles render absolutely behind everything — zero layout impact */}
      <ParticleBackground />

      {/* Gradient orbs */}
      <div className="hero__orbs" aria-hidden="true">
        <div className="hero__orb hero__orb--cyan" />
        <div className="hero__orb hero__orb--purple" />
        <div className="hero__orb hero__orb--magenta" />
      </div>

      {/* Full-width container with two-column grid */}
      <div className="container">
        <div className="hero__content">

          {/* ── LEFT: Text content ── */}
          <Reveal className="hero__text" delay={0.1}>
            <div className="hero__badges">
              <span className="badge badge--glow">
                <i className="fa-solid fa-microchip" />
                Full‑Stack Developer
              </span>
              <span className="badge badge--subtle">
                <i className="fa-solid fa-robot" />
                AI Automations · n8n
              </span>
              <span className="badge badge--subtle">
                <i className="fa-solid fa-wand-magic-sparkles" />
                Modern UI · Clean APIs
              </span>
            </div>

            <p className="hero__location">
              <i className="fa-solid fa-location-dot" />
              Bahawalpur, Pakistan · Remote / On‑site
            </p>

            <h1 className="hero__title">
              Build fast, reliable
              <br />
              <span className="gradient-text">
                <TypeAnimation
                  sequence={[
                    'AI-powered web apps.',
                    2000,
                    'n8n automation workflows.',
                    2000,
                    'scalable SaaS platforms.',
                    2000,
                    'stunning mobile apps.',
                    2000,
                    'beautiful interfaces.',
                    2000,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <p className="hero__subtitle">
              I build <strong>AI-powered platforms</strong>, <strong>n8n &amp; Zapier automations</strong>,{' '}
              full-stack web apps with <strong>React / Next.js</strong>, <strong>Django</strong>,{' '}
              <strong>Laravel</strong>, and cross-platform <strong>Flutter</strong> mobile apps—end to end.
            </p>

            <div className="hero__actions">
              <motion.a
                href="#contact"
                className="btn btn--primary"
                onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fa-solid fa-rocket" />
                Book a Call
              </motion.a>
              <motion.a
                href="#projects"
                className="btn btn--glass"
                onClick={(e) => { e.preventDefault(); handleNavClick('projects') }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fa-solid fa-layer-group" />
                View Featured Work
              </motion.a>
            </div>

            <div className="hero__highlights">
              <div className="hero__highlight">
                <div className="hero__highlight-icon">
                  <i className="fa-solid fa-robot" />
                </div>
                <div>
                  <p className="hero__highlight-title">AI &amp; Automation</p>
                  <p className="hero__highlight-sub">n8n, OpenAI GPT, LangChain, Zapier</p>
                </div>
              </div>
              <div className="hero__highlight">
                <div className="hero__highlight-icon">
                  <i className="fa-solid fa-diagram-project" />
                </div>
                <div>
                  <p className="hero__highlight-title">Full‑Stack Dev</p>
                  <p className="hero__highlight-sub">React, Next.js, Django, Laravel, Flutter</p>
                </div>
              </div>
              <div className="hero__highlight">
                <div className="hero__highlight-icon">
                  <i className="fa-solid fa-cloud" />
                </div>
                <div>
                  <p className="hero__highlight-title">Cloud &amp; DevOps</p>
                  <p className="hero__highlight-sub">AWS, Docker, CI/CD, Linux servers</p>
                </div>
              </div>
            </div>

            <div className="hero__meta">
              <div>
                <p className="hero__meta-label">Core Stacks</p>
                <p className="hero__meta-value">React · Next.js · Django · Laravel · Flutter · n8n</p>
              </div>
              <div>
                <p className="hero__meta-label">Available For</p>
                <p className="hero__meta-value">Full‑time · Freelance · Remote</p>
              </div>
            </div>
          </Reveal>

          {/* ── RIGHT: Profile card ── */}
          <Reveal className="hero__card-wrapper" delay={0.35} variant="fade-left">
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#06b6d4"
              glareBorderRadius="24px"
              scale={1.02}
            >
              <div className="hero__profile-card">
                <div className="hero__profile-img-wrap">
                  <img src={profileImage} alt="Daoud Umer" className="hero__profile-img" />
                  <div className="hero__profile-img-overlay" />
                </div>
                <div className="hero__profile-info">
                  <h2>Daoud Umer</h2>
                  <p className="hero__profile-title">Full‑Stack Web Developer</p>
                  <p className="hero__profile-summary">
                    Focused on delivering clean code, scalable APIs, and modern UI that users love.
                  </p>
                </div>
                <div className="hero__profile-links">
                  <a href="mailto:daudumer2001@gmail.com" target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-envelope" /> daudumer2001@gmail.com
                  </a>
                  <a href="tel:+923015498356" target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-phone" /> +92 301 549 8356
                  </a>
                  <a href="https://linkedin.com/in/daoud-umer-40b640255/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin" /> LinkedIn
                  </a>
                  <a href="https://github.com/daoudumer" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github" /> GitHub
                  </a>
                </div>
                <motion.a
                  href="#contact"
                  className="hero__profile-cta"
                  onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fa-solid fa-handshake" /> Start a Project
                </motion.a>
              </div>
            </Tilt>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
