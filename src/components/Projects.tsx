import { Reveal } from './Reveal'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

const projects = [
  {
    title: 'IntelliFlow AI',
    tag: 'Next.js · OpenAI · n8n',
    description:
      'AI-powered business automation platform that uses GPT-4 and n8n workflows to automate customer support, lead qualification, and document processing.',
    bullets: [
      'GPT-4 integrated chat & document analysis',
      'n8n workflow automation engine',
      'Real-time analytics dashboard',
      'Multi-tenant SaaS architecture',
    ],
    icon: 'fa-solid fa-brain',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(168,85,247,0.1))',
    accentColor: '#06b6d4',
    link: 'https://github.com/daoudumer',
    linkType: 'github',
  },
  {
    title: 'ShopVerse',
    tag: 'React · Django · Stripe',
    description:
      'Modern headless e-commerce platform with AI-powered product recommendations, Stripe payments, and real-time inventory management.',
    bullets: [
      'AI product recommendation engine',
      'Stripe payment integration',
      'Admin dashboard with analytics',
      'Multi-vendor marketplace support',
    ],
    icon: 'fa-solid fa-cart-shopping',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(236,72,153,0.1))',
    accentColor: '#a855f7',
    link: 'https://github.com/daoudumer',
    linkType: 'github',
  },
  {
    title: 'MedSync Pro',
    tag: 'Flutter · Firebase · AI',
    description:
      'Cross-platform telemedicine app with AI symptom checker, video consultations, prescription management, and health record tracking.',
    bullets: [
      'AI-driven symptom analysis',
      'Real-time video calling (WebRTC)',
      'E-prescription & pharmacy integration',
      'HIPAA-compliant data handling',
    ],
    icon: 'fa-solid fa-heartbeat',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(6,182,212,0.1))',
    accentColor: '#ec4899',
    link: 'https://github.com/daoudumer',
    linkType: 'github',
  },
  {
    title: 'CloudTask Hub',
    tag: 'Next.js · Prisma · tRPC',
    description:
      'Enterprise project management SaaS with Kanban boards, time tracking, AI sprint planning, and team collaboration in real-time.',
    bullets: [
      'AI-powered sprint planning assistant',
      'Real-time collaboration (WebSockets)',
      'Gantt charts & resource allocation',
      'Integrates with Slack, GitHub, Jira',
    ],
    icon: 'fa-solid fa-diagram-project',
    gradient: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(6,182,212,0.1))',
    accentColor: '#22c55e',
    link: 'https://github.com/daoudumer',
    linkType: 'github',
  },
  {
    title: 'FinTrack AI',
    tag: 'React · Python · ML',
    description:
      'Fintech analytics dashboard with ML-powered expense forecasting, bank API integration, and automated financial report generation.',
    bullets: [
      'Machine learning expense predictor',
      'Plaid bank API integration',
      'Automated PDF report generation',
      'Multi-currency & tax calculations',
    ],
    icon: 'fa-solid fa-chart-line',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(168,85,247,0.1))',
    accentColor: '#3b82f6',
    link: 'https://github.com/daoudumer',
    linkType: 'github',
  },
  {
    title: 'AutomateX',
    tag: 'n8n · Zapier · APIs',
    description:
      '"No-code/low-code automation platform that orchestrates 200+ app integrations and custom webhook workflows."',
    bullets: [
      'n8n & Zapier workflow builder',
      '200+ API integrations',
      'Custom webhook handling',
      'Cron-scheduled automation pipelines',
    ],
    icon: 'fa-solid fa-robot',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(236,72,153,0.1))',
    accentColor: '#f59e0b',
    link: 'https://github.com/daoudumer',
    linkType: 'github',
  },
]

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-eyebrow">
            <i className="fa-solid fa-layer-group" /> Selected Work
          </span>
          <h2>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p>AI-powered platforms, SaaS products, and automation systems built with cutting-edge technologies.</p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <Tilt
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                glareEnable={true}
                glareMaxOpacity={0.08}
                glareColor={project.accentColor}
                glareBorderRadius="20px"
                scale={1.01}
              >
                <motion.article
                  className="project-card"
                  style={{ background: project.gradient }}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="project-card__top">
                    <div className="project-card__icon" style={{ color: project.accentColor }}>
                      <i className={project.icon} />
                    </div>
                    <span className="project-card__tag">{project.tag}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="project-card__bullets">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>
                        <i className="fa-solid fa-chevron-right" style={{ color: project.accentColor }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="project-card__shine" aria-hidden="true" />
                </motion.article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
