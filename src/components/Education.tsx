import { Reveal } from './Reveal'
import { motion } from 'framer-motion'

const educationItems = [
  {
    degree: 'Bachelor (BS) of Professional Studies',
    school: 'University of Management and Technology, Lahore',
    meta: '',
    icon: 'fa-solid fa-graduation-cap',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(168,85,247,0.08))',
    accentColor: '#06b6d4',
  },
  {
    degree: 'Associate Degree Program (Science)',
    school: 'The Islamia University of Bahawalpur',
    meta: '',
    icon: 'fa-solid fa-university',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.08))',
    accentColor: '#a855f7',
  },
  {
    degree: 'Intermediate in Computer Science',
    school: 'The United College, Ahmedpur East',
    meta: '',
    icon: 'fa-solid fa-laptop-code',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(6,182,212,0.08))',
    accentColor: '#ec4899',
  },
  {
    degree: 'Matriculation (Science)',
    school: 'Islamia Model High School, Ahmedpur East',
    meta: '',
    icon: 'fa-solid fa-book',
    gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(6,182,212,0.08))',
    accentColor: '#22c55e',
  },
]

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-eyebrow">
            <i className="fa-solid fa-graduation-cap" /> Education
          </span>
          <h2>
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p>A solid foundation in IT and computer science studies.</p>
        </Reveal>

        <div className="education-grid">
          {educationItems.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.1}>
              <motion.article
                className="education-card"
                style={{ background: item.gradient }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="education-card__icon" style={{ color: item.accentColor }}>
                  <i className={item.icon} />
                </div>
                <h3>{item.degree}</h3>
                <p className="education-card__school">
                  <i className="fa-solid fa-building-columns" /> {item.school}
                </p>
                {item.meta && <p className="education-card__meta">{item.meta}</p>}
                <div className="education-card__shine" aria-hidden="true" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
