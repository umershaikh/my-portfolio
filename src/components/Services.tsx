import { Reveal } from './Reveal'
import { motion } from 'framer-motion'

const services = [
  {
    icon: 'fa-solid fa-brain',
    title: 'AI & Automation',
    description: 'AI-powered chatbots, n8n/Zapier automations, and intelligent workflows that save hours daily.',
    items: ['OpenAI / GPT integration', 'n8n workflow automation', 'AI chatbots & agents'],
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.08))',
    accentColor: '#f59e0b',
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Full‑Stack Web Apps',
    description: 'Scalable SaaS platforms, dashboards, and APIs built with modern frameworks.',
    items: ['React / Next.js frontends', 'Django / Laravel backends', 'Real-time & WebSockets'],
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(168,85,247,0.08))',
    accentColor: '#06b6d4',
  },
  {
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Mobile Apps',
    description: 'Cross-platform Flutter & React Native apps with next-level performance.',
    items: ['Flutter / React Native', 'Firebase & Supabase', 'App Store deployment'],
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.08))',
    accentColor: '#a855f7',
  },
  {
    icon: 'fa-solid fa-store',
    title: 'E-Commerce & CMS',
    description: 'Revenue-driving online stores and content platforms that convert and grow revenue.',
    items: ['Shopify / WooCommerce', 'Custom headless CMS', 'Stripe / PayPal payments'],
    gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(6,182,212,0.08))',
    accentColor: '#22c55e',
  },
]

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-eyebrow">
            <i className="fa-solid fa-star" /> What I Do
          </span>
          <h2>
            Services I <span className="gradient-text">Offer</span>
          </h2>
          <p>
            From AI automations to full-stack development — modern solutions that drive real business results.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1}>
              <motion.article
                className="service-card"
                style={{ background: service.gradient }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="service-card__icon" style={{ color: service.accentColor }}>
                  <i className={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-card__list">
                  {service.items.map((item) => (
                    <li key={item}>
                      <i className="fa-solid fa-check" style={{ color: service.accentColor }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="service-card__shine" aria-hidden="true" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
