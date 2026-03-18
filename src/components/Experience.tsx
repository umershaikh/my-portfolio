import { Reveal } from './Reveal'
import { motion } from 'framer-motion'

const experiences = [
  {
    period: 'Jan 2024 – Present',
    role: 'Senior Full‑Stack Developer & AI Engineer',
    company: 'IntelliFlow — AI Automation Platform',
    description:
      'Leading development of an AI-powered business automation SaaS platform serving 500+ active users, integrating GPT-4 and n8n workflows.',
    bullets: [
      'Architected AI pipeline with OpenAI GPT-4 for document analysis',
      'Built n8n automation workflows reducing manual work by 70%',
      'Next.js 14 + tRPC + Prisma full-stack architecture',
      'Multi-tenant SaaS with Stripe billing & role-based access',
    ],
    icon: 'fa-solid fa-brain',
    accentColor: '#06b6d4',
  },
  {
    period: 'Mar 2022 – Dec 2023',
    role: 'Full‑Stack Developer',
    company: 'ShopVerse — E-Commerce Platform',
    description:
      'Built a modern headless e-commerce platform with AI product recommendations, serving 100K+ monthly active users across 3 countries.',
    bullets: [
      'React + Django REST framework headless architecture',
      'AI recommendation engine increasing sales by 35%',
      'Stripe & PayPal payment integration',
      'Admin dashboard with real-time sales analytics',
    ],
    icon: 'fa-solid fa-cart-shopping',
    accentColor: '#a855f7',
  },
  {
    period: 'Jun 2020 – Feb 2022',
    role: 'Full‑Stack Web Developer',
    company: 'HealthTech Solutions — Telemedicine Platform',
    description:
      'Developed a HIPAA-compliant telemedicine platform with video consultations, AI symptom checker, and electronic health records.',
    bullets: [
      'Flutter mobile app with WebRTC video calling',
      'AI-powered symptom analysis chatbot',
      'Laravel backend with secure health record management',
      'Deployed to AWS with 99.9% uptime SLA',
    ],
    icon: 'fa-solid fa-heartbeat',
    accentColor: '#ec4899',
  },
  {
    period: 'Nov 2018 – May 2020',
    role: 'Junior Web Developer',
    company: 'Freelance — WordPress & Custom Web Development',
    description:
      'Built 30+ websites and web apps for local and international clients, specializing in WordPress, PHP, and JavaScript solutions.',
    bullets: [
      'Custom WordPress themes & WooCommerce stores',
      'PHP/MySQL backend development',
      'Client-facing dashboards & admin panels',
      'SEO optimization achieving top-3 Google rankings',
    ],
    icon: 'fa-brands fa-wordpress',
    accentColor: '#22c55e',
  },
]

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-eyebrow">
            <i className="fa-solid fa-briefcase" /> Career
          </span>
          <h2>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p>
            6+ years of hands-on delivery across AI, SaaS, e-commerce, healthtech, and automation systems.
          </p>
        </Reveal>

        <div className="timeline">
          <div className="timeline__line" aria-hidden="true">
            <motion.div
              className="timeline__line-fill"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.12} variant={i % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <article className="timeline__item">
                <div className="timeline__dot" style={{ background: exp.accentColor }}>
                  <i className={exp.icon} />
                </div>
                <div className="timeline__card">
                  <div className="timeline__meta">
                    <span className="timeline__period">
                      <i className="fa-regular fa-calendar" />
                      {exp.period}
                    </span>
                    <span className="timeline__role" style={{ color: exp.accentColor }}>
                      {exp.role}
                    </span>
                  </div>
                  <h3>{exp.company}</h3>
                  <p>{exp.description}</p>
                  <ul className="timeline__bullets">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet}>
                        <i className="fa-solid fa-check" style={{ color: exp.accentColor }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
