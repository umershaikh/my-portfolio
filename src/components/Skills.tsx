import { Reveal } from './Reveal'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'AI & Automation',
    icon: 'fa-solid fa-robot',
    description: 'Cutting-edge AI integrations and workflow automation for modern businesses.',
    skills: [
      { name: 'OpenAI / GPT APIs', level: 88 },
      { name: 'n8n Automations', level: 90 },
      { name: 'LangChain / RAG', level: 80 },
      { name: 'Zapier / Make', level: 85 },
      { name: 'Python ML (scikit-learn)', level: 78 },
      { name: 'AI Chatbots', level: 86 },
    ],
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  },
  {
    title: 'Frontend & UX',
    icon: 'fa-solid fa-palette',
    description: 'Pixel-perfect, responsive interfaces with cutting-edge frameworks and tools.',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Vue.js / Nuxt', level: 78 },
      { name: 'Figma / UI Design', level: 82 },
    ],
    gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
  },
  {
    title: 'Backend & APIs',
    icon: 'fa-solid fa-server',
    description: 'Robust, secure, and scalable backends with clean architectures and APIs.',
    skills: [
      { name: 'Python / Django', level: 90 },
      { name: 'PHP / Laravel', level: 88 },
      { name: 'Node.js / Express', level: 85 },
      { name: 'REST & GraphQL APIs', level: 92 },
      { name: 'PostgreSQL / MySQL', level: 88 },
      { name: 'MongoDB / Redis', level: 82 },
    ],
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
  },
  {
    title: 'Mobile & Cross-Platform',
    icon: 'fa-solid fa-mobile-screen',
    description: 'Native-quality cross-platform mobile apps and progressive web apps.',
    skills: [
      { name: 'Flutter / Dart', level: 85 },
      { name: 'React Native', level: 78 },
      { name: 'Firebase', level: 88 },
      { name: 'Push Notifications', level: 82 },
      { name: 'App Store Deployment', level: 80 },
      { name: 'PWA Development', level: 85 },
    ],
    gradient: 'linear-gradient(135deg, #ec4899, #f97316)',
  },
  {
    title: 'DevOps & Cloud',
    icon: 'fa-solid fa-cloud',
    description: 'Modern deployment pipelines, containerization, and cloud infrastructure.',
    skills: [
      { name: 'Docker / Containers', level: 84 },
      { name: 'AWS / DigitalOcean', level: 82 },
      { name: 'CI/CD (GitHub Actions)', level: 86 },
      { name: 'Nginx / Apache', level: 85 },
      { name: 'Linux Server Admin', level: 88 },
      { name: 'Vercel / Netlify', level: 90 },
    ],
    gradient: 'linear-gradient(135deg, #22c55e, #06b6d4)',
  },
  {
    title: 'CMS & E-Commerce',
    icon: 'fa-solid fa-store',
    description: 'Content management systems and e-commerce solutions that drive revenue.',
    skills: [
      { name: 'WordPress / WooCommerce', level: 90 },
      { name: 'Shopify', level: 82 },
      { name: 'Headless CMS (Strapi)', level: 80 },
      { name: 'Stripe / PayPal', level: 88 },
      { name: 'SEO Optimization', level: 86 },
      { name: 'Custom Theme Dev', level: 88 },
    ],
    gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
  },
]

function SkillBar({ name, level, gradient }: { name: string; level: number; gradient: string }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          style={{ background: gradient }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-eyebrow">
            <i className="fa-solid fa-code" /> Toolkit
          </span>
          <h2>
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p>
            From AI automations to full-stack development — a complete toolkit for building modern digital products.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.08}>
              <article className="skill-card">
                <div className="skill-card__header">
                  <div className="skill-card__icon" style={{ background: cat.gradient }}>
                    <i className={cat.icon} />
                  </div>
                  <h3>{cat.title}</h3>
                </div>
                <p className="skill-card__desc">{cat.description}</p>
                <div className="skill-card__bars">
                  {cat.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      gradient={cat.gradient}
                    />
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
