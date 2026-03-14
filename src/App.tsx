import { useEffect, useMemo, useState } from 'react'
import profileImage from './assets/profile.png'
import './App.css'
import { Reveal } from './components/Reveal'
import {
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Handshake,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
} from 'lucide-react'

type NavItem = {
  id: string
  label: string
}

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')

  const navItems: NavItem[] = useMemo(
    () => [
      { id: 'hero', label: 'Home' },
      { id: 'services', label: 'Services' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Work' },
      { id: 'experience', label: 'Experience' },
      { id: 'education', label: 'Education' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  )

  const handleNavClick = (sectionId: string) => {
    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileNavOpen(false)
  }

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id)
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (!('IntersectionObserver' in window) || sections.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          if (entry.isIntersecting && id) {
            setActiveSection(id)
          }
        })
      },
      {
        threshold: 0.4,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [navItems])

  return (
    <div className="page">
      <header className="top-nav">
        <div className="brand">
          <span className="brand-mark">DU</span>
          <div className="brand-text">
            <span className="brand-name">Daoud Umer</span>
            <span className="brand-role">Full‑Stack Web Developer</span>
          </div>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? 'active' : undefined}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setIsMobileNavOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        {isMobileNavOpen && (
          <nav className="nav-links-mobile">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={activeSection === item.id ? 'active' : undefined}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="hero" className="section hero-section">
          <div className="hero-bg" aria-hidden="true">
            <div className="mesh mesh-a" />
            <div className="mesh mesh-b" />
            <div className="mesh mesh-c" />
          </div>

          <div className="container hero-content">
            <Reveal className="hero-text" delay={0.02}>
              <div className="hero-kicker">
                <span className="chip">
                  <Cpu size={16} />
                  Full‑stack developer
                </span>
                <span className="chip subtle">
                  <Sparkles size={16} />
                  Modern UI · Clean APIs · Scalable systems
                </span>
              </div>

              <p className="eyebrow">
                <MapPin size={14} /> Bahawalpur, Pakistan · Remote / On‑site
              </p>
              <h1>
                Build fast, reliable products
                <span className="accent-gradient"> with premium UI.</span>
              </h1>
              <p className="subtitle">
                I specialize in <strong>Python Django</strong>, <strong>PHP Laravel</strong>,{' '}
                <strong>MERN</strong>, <strong>WordPress</strong>, and <strong>Flutter</strong>—from
                product design to production deployment.
              </p>

              <div className="hero-actions">
                <a
                  href="#contact"
                  className="btn primary"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('contact')
                  }}
                >
                  <Rocket size={16} />
                  Book a call
                </a>
                <a
                  href="#projects"
                  className="btn ghost"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('projects')
                  }}
                >
                  <Layers3 size={16} />
                  View featured work
                </a>
              </div>

              <div className="hero-highlights" aria-label="Key strengths">
                <div className="highlight">
                  <ShieldCheck size={18} />
                  <div>
                    <p className="highlight-title">Production‑ready</p>
                    <p className="highlight-sub">Security, performance, maintainability</p>
                  </div>
                </div>
                <div className="highlight">
                  <Workflow size={18} />
                  <div>
                    <p className="highlight-title">End‑to‑end delivery</p>
                    <p className="highlight-sub">Frontend, backend, database, deployment</p>
                  </div>
                </div>
                <div className="highlight">
                  <CheckCircle2 size={18} />
                  <div>
                    <p className="highlight-title">Great UX</p>
                    <p className="highlight-sub">Clean layouts, responsive design, accessibility</p>
                  </div>
                </div>
              </div>

              <div className="hero-meta">
                <div>
                  <p className="meta-label">Core stacks</p>
                  <p className="meta-value">
                    Python · Django · Laravel · MERN · WordPress · Flutter · Tailwind CSS
                  </p>
                </div>
                <div>
                  <p className="meta-label">Available for</p>
                  <p className="meta-value">Full‑time · Freelance · Remote</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="hero-profile-card" delay={0.08}>
              <div className="profile-top">
                <img src={profileImage} alt="Portrait of Daoud Umer" className="profile-image" />
                <div className="profile-top-overlay" aria-hidden="true" />
              </div>
              <div className="profile-info">
                <h2>Daoud Umer</h2>
                <p className="profile-title">Full‑Stack Web Developer</p>
                <p className="profile-summary">
                  Focused on delivering clean code, scalable APIs, and modern UI that users love.
                </p>
              </div>
              <div className="profile-links">
                <a href="mailto:daudumer2001@gmail.com" target="_blank" rel="noreferrer">
                  <Mail size={16} />
                  daudumer2001@gmail.com
                </a>
                <a href="tel:+923015498356" target="_blank" rel="noreferrer">
                  <Phone size={16} />
                  +92 301 549 8356
                </a>
                <a
                  href="https://linkedin.com/in/daoud-umer-40b640255/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a href="https://github.com/daoudumer" target="_blank" rel="noreferrer">
                  <Github size={16} />
                  GitHub
                </a>
              </div>
              <a
                href="#contact"
                className="profile-cta"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('contact')
                }}
              >
                <Handshake size={16} />
                Start a project
              </a>
            </Reveal>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <Reveal className="section-header">
              <span className="section-eyebrow">
                <Star size={14} /> What I do
              </span>
              <h2>Services</h2>
              <p>
                I build modern, high‑quality software with a strong focus on maintainability, UX,
                and delivery speed.
              </p>
            </Reveal>

            <div className="service-grid">
              <Reveal className="service-card" delay={0.02}>
                <div className="service-icon">
                  <Code2 size={20} />
                </div>
                <h3>Full‑stack web apps</h3>
                <p>Dashboards, admin panels, portals, and APIs that scale.</p>
                <ul>
                  <li>Django / Laravel backends</li>
                  <li>React frontends</li>
                  <li>Clean architecture</li>
                </ul>
              </Reveal>

              <Reveal className="service-card" delay={0.06}>
                <div className="service-icon">
                  <Boxes size={20} />
                </div>
                <h3>Mobile apps</h3>
                <p>Cross‑platform Flutter apps with production polish.</p>
                <ul>
                  <li>Reusable UI components</li>
                  <li>API integrations</li>
                  <li>Performance optimization</li>
                </ul>
              </Reveal>

              <Reveal className="service-card" delay={0.1}>
                <div className="service-icon">
                  <Database size={20} />
                </div>
                <h3>WordPress & CMS</h3>
                <p>Fast, secure websites that are easy to edit and maintain.</p>
                <ul>
                  <li>Custom themes</li>
                  <li>WooCommerce setup</li>
                  <li>SEO-friendly pages</li>
                </ul>
              </Reveal>

              <Reveal className="service-card" delay={0.14}>
                <div className="service-icon">
                  <ShieldCheck size={20} />
                </div>
                <h3>UI modernization</h3>
                <p>Upgrade existing products with modern UI and better UX.</p>
                <ul>
                  <li>Responsive redesign</li>
                  <li>Accessibility improvements</li>
                  <li>Performance tuning</li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <Reveal className="section-header">
              <span className="section-eyebrow">
                <Cpu size={14} /> Toolkit
              </span>
              <h2>Skills</h2>
            <p>
              A balanced mix of backend, frontend, mobile, and tooling to deliver complete products.
            </p>
            </Reveal>
            <div className="cards-grid">
            <article className="card">
              <div className="card-head">
                <span className="icon-pill">
                  <Database size={18} />
                </span>
                <h3>Backend & APIs</h3>
              </div>
              <p>
                Robust, secure, and scalable backends with clean architectures and well‑documented
                APIs.
              </p>
              <ul className="pill-list">
                <li>Python</li>
                <li>Django</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>REST APIs</li>
                <li>JSON / XML</li>
              </ul>
            </article>

            <article className="card">
              <div className="card-head">
                <span className="icon-pill">
                  <Code2 size={18} />
                </span>
                <h3>Frontend & UX</h3>
              </div>
              <p>
                Modern, responsive interfaces with attention to detail, accessibility, and
                performance.
              </p>
              <ul className="pill-list">
                <li>React</li>
                <li>Vue.js</li>
                <li>Tailwind CSS</li>
                <li>HTML &amp; CSS</li>
                <li>JavaScript / TypeScript</li>
              </ul>
            </article>

            <article className="card">
              <div className="card-head">
                <span className="icon-pill">
                  <Boxes size={18} />
                </span>
                <h3>Mobile & CMS</h3>
              </div>
              <p>Cross‑platform experiences and content‑driven websites that are easy to manage.</p>
              <ul className="pill-list">
                <li>Flutter</li>
                <li>WordPress</li>
                <li>Custom themes</li>
                <li>WooCommerce</li>
                <li>UI/UX · Figma</li>
              </ul>
            </article>

            <article className="card">
              <div className="card-head">
                <span className="icon-pill">
                  <Workflow size={18} />
                </span>
                <h3>Tooling & Platforms</h3>
              </div>
              <p>End‑to‑end project workflow from version control to deployment and monitoring.</p>
              <ul className="pill-list">
                <li>Git &amp; GitHub</li>
                <li>SQL · MongoDB</li>
                <li>Linux · Windows · macOS</li>
                <li>Agile · Jira</li>
                <li>OOP · MVC · MVP</li>
              </ul>
            </article>
          </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <Reveal className="section-header">
              <span className="section-eyebrow">
                <Layers3 size={14} /> Selected work
              </span>
              <h2>Featured projects</h2>
              <p>Real systems shipped for education, healthcare, e‑commerce, and fintech workflows.</p>
            </Reveal>

            <div className="work-rail" aria-label="Featured projects (horizontal scroll)">
              <article className="work-card">
                <div className="work-card-top">
                  <h3>Affiliate System</h3>
                  <span className="work-tag">Django · React</span>
                </div>
                <p>
                  Affiliate / MLM-style platform with binary tree networking, deposits/withdrawals,
                  and role‑based dashboards.
                </p>
                <ul className="work-bullets">
                  <li>JWT authentication + protected routes</li>
                  <li>Admin workflows for approvals</li>
                  <li>Modern dashboard UI</li>
                </ul>
                <div className="work-actions">
                  <a
                    className="card-link"
                    href="https://github.com/umershaikh/affiliate-system"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </article>

              <article className="work-card">
                <div className="work-card-top">
                  <h3>NFT Marketplace</h3>
                  <span className="work-tag">Web3 · React</span>
                </div>
                <p>
                  Web3 NFT marketplace app for exploring and interacting with NFT collections using
                  wallet-based authentication.
                </p>
                <ul className="work-bullets">
                  <li>Wallet connection + on‑chain interactions</li>
                  <li>SEO-friendly pages and clean UI</li>
                  <li>Responsive marketplace layout</li>
                </ul>
                <div className="work-actions">
                  <a
                    className="card-link"
                    href="https://github.com/umershaikh/everydaynft-seo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </article>

              <article className="work-card">
                <div className="work-card-top">
                  <h3>Schoolify</h3>
                  <span className="work-tag">Full‑stack</span>
                </div>
                <p>
                  School management system with role‑based panels for admins, teachers, and
                  students—built for daily operations.
                </p>
                <ul className="work-bullets">
                  <li>Course & class management</li>
                  <li>CRUD modules with clean UX</li>
                  <li>Scalable architecture</li>
                </ul>
                <div className="work-actions">
                  <a
                    className="card-link"
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick('contact')
                    }}
                  >
                    <BriefcaseBusiness size={16} /> Build similar
                  </a>
                </div>
              </article>

              <article className="work-card">
                <div className="work-card-top">
                  <h3>Hospital Management</h3>
                  <span className="work-tag">PHP · SQL</span>
                </div>
                <p>
                  Hospital operations system covering patients, staff, appointments, and pharmacy
                  management.
                </p>
                <ul className="work-bullets">
                  <li>Reliable CRUD + role-based access</li>
                  <li>Optimized SQL workflows</li>
                  <li>Admin dashboards</li>
                </ul>
                <div className="work-actions">
                  <a
                    className="card-link"
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick('contact')
                    }}
                  >
                    <ExternalLink size={16} /> Request demo
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <Reveal className="section-header">
              <span className="section-eyebrow">
                <BriefcaseBusiness size={14} /> Background
              </span>
              <h2>Experience</h2>
              <p>
                Hands‑on delivery across education, retail, and healthcare systems with a
                full‑stack mindset.
              </p>
            </Reveal>

            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-meta">
                  <span className="timeline-period">Oct 2022 – Present</span>
                  <span className="timeline-role">Full‑Stack Web Developer</span>
                </div>
                <h3>Schoolify · School Management System</h3>
                <p>
                  Built a school management platform with admin, teacher, and student panels for
                  course and class operations.
                </p>
                <ul>
                  <li>Role‑based dashboards and secure authentication flows</li>
                  <li>CRUD modules for classes, courses, and schedules</li>
                  <li>UX focused design for daily usability</li>
                </ul>
              </article>

              <article className="timeline-item">
                <div className="timeline-meta">
                  <span className="timeline-period">Oct 2020 – Aug 2022</span>
                  <span className="timeline-role">Full‑Stack Developer</span>
                </div>
                <h3>Luxe · E‑commerce dashboard</h3>
                <p>
                  Developed a clean dashboard for a luxury clothing brand to manage inventory and
                  content.
                </p>
                <ul>
                  <li>Responsive UI built with HTML/CSS/JavaScript and Bootstrap</li>
                  <li>Admin views to monitor sales and operations</li>
                  <li>Backend API work to support business workflows</li>
                </ul>
              </article>

              <article className="timeline-item">
                <div className="timeline-meta">
                  <span className="timeline-period">Nov 2018 – Sep 2020</span>
                  <span className="timeline-role">Web Developer</span>
                </div>
                <h3>Hospital Management System</h3>
                <p>
                  Developed a system using PHP, JavaScript, SQL, HTML, and CSS to streamline hospital
                  operations.
                </p>
                <ul>
                  <li>Patients, staff, appointments, and pharmacy management</li>
                  <li>CRUD operations with stable data flows</li>
                  <li>Query optimization for performance</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <Reveal className="section-header">
              <span className="section-eyebrow">
                <GraduationCap size={14} /> Education
              </span>
              <h2>Education</h2>
              <p>A solid foundation in IT and computer science studies.</p>
            </Reveal>
            <div className="education-grid">
            <article className="card">
              <div className="card-head">
                <span className="icon-pill">
                  <GraduationCap size={18} />
                </span>
                <h3>Bachelor (BS) of Professional Studies</h3>
              </div>
              <p className="edu-school">University of Management and Technology, Lahore</p>
              <p className="edu-meta">Major in Information Technology · Oct 2022 – Present</p>
            </article>
            <article className="card">
              <h3>Associate Degree Program (Science)</h3>
              <p className="edu-school">The Islamia University of Bahawalpur</p>
            </article>
            <article className="card">
              <h3>Intermediate in Computer Science</h3>
              <p className="edu-school">The United College, Ahmedpur East</p>
            </article>
            <article className="card">
              <h3>Matriculation (Science)</h3>
              <p className="edu-school">Islamia Model High School, Ahmedpur East</p>
            </article>
          </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <Reveal className="section-header">
              <span className="section-eyebrow">
                <Handshake size={14} /> Contact
              </span>
              <h2>Let&apos;s build something great</h2>
              <p>
                Tell me about your project (or role). I&apos;ll reply with next steps, timeline, and a
                clear plan.
              </p>
            </Reveal>

            <div className="contact-grid">
              <div className="contact-card">
                <h3>Contact details</h3>
                <ul className="contact-list">
                  <li>
                    <span>Email</span>
                    <a href="mailto:daudumer2001@gmail.com">daudumer2001@gmail.com</a>
                  </li>
                  <li>
                    <span>Phone</span>
                    <a href="tel:+923015498356">+92 301 549 8356</a>
                  </li>
                  <li>
                    <span>Location</span>
                    <p>Bahawalpur, Pakistan</p>
                  </li>
                  <li>
                    <span>Profiles</span>
                    <div className="profile-links-inline">
                      <a
                        href="https://linkedin.com/in/daoud-umer-40b640255/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn <ExternalLink size={14} />
                      </a>
                      <a
                        href="https://github.com/daoudumer"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub <ExternalLink size={14} />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault()
                const form = event.currentTarget
                const formData = new FormData(form)
                const name = formData.get('name') ?? ''
                const email = formData.get('email') ?? ''
                const projectType = formData.get('projectType') ?? ''
                const subject = `Project inquiry from ${name}`
                const body = `From: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${String(formData.get('message') ?? '')}`
                const encodedSubject = encodeURIComponent(String(subject))
                const encodedBody = encodeURIComponent(String(body))
                window.location.href = `mailto:daudumer2001@gmail.com?subject=${encodedSubject}&body=${encodedBody}`
              }}
            >
              <h3>Quick message</h3>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="projectType">Project type</label>
                <select id="projectType" name="projectType" defaultValue="full-stack-web">
                  <option value="full-stack-web">Full‑stack web application</option>
                  <option value="mobile-app">Flutter mobile app</option>
                  <option value="wordpress">WordPress / CMS website</option>
                  <option value="dashboard">Admin dashboard / internal tool</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Project details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Share your goals, timeline, and any links or references…"
                  required
                />
              </div>
              <button type="submit" className="btn primary full-width">
                Send message
              </button>
            </form>
          </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Daoud Umer. All Rights Reserved.</p>
          <div className="footer-links">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('projects')
              }}
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('contact')
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
