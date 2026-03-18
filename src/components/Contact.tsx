import { useState, useRef } from 'react'
import { Reveal } from './Reveal'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    setFormState('sending')
    setErrorMsg('')

    try {
      // EmailJS — user needs to set up their own service/template/public key
      // Replace these with your actual EmailJS credentials
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact',
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY' },
      )
      setFormState('success')
      formRef.current.reset()
    } catch (err: unknown) {
      console.error('EmailJS error:', err)
      setErrorMsg('Something went wrong. Please try again or email me directly.')
      setFormState('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-eyebrow">
            <i className="fa-solid fa-handshake" /> Contact
          </span>
          <h2>
            Let's Build Something <span className="gradient-text">Great</span>
          </h2>
          <p>
            Tell me about your project or role. I'll reply with next steps, timeline, and a clear plan—within 24 hours.
          </p>
        </Reveal>

        <div className="contact-grid">
          {/* ── Info card ── */}
          <Reveal variant="fade-right" delay={0.1}>
            <div className="contact-info-card">
              <h3>
                <i className="fa-solid fa-address-card" /> Contact Details
              </h3>
              <ul className="contact-info-list">
                <li>
                  <div className="contact-info-icon" style={{ background: 'rgba(6,182,212,0.15)', color: '#06b6d4' }}>
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div>
                    <span className="contact-info-label">Email</span>
                    <a href="mailto:daudumer2001@gmail.com">daudumer2001@gmail.com</a>
                  </div>
                </li>
                <li>
                  <div className="contact-info-icon" style={{ background: 'rgba(168,85,247,0.15)', color: '#a855f7' }}>
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div>
                    <span className="contact-info-label">Phone / WhatsApp</span>
                    <a href="tel:+923015498356">+92 301 549 8356</a>
                  </div>
                </li>
                <li>
                  <div className="contact-info-icon" style={{ background: 'rgba(236,72,153,0.15)', color: '#ec4899' }}>
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div>
                    <span className="contact-info-label">Location</span>
                    <p>Bahawalpur, Pakistan · Remote OK</p>
                  </div>
                </li>
                <li>
                  <div className="contact-info-icon" style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>
                    <i className="fa-solid fa-clock" />
                  </div>
                  <div>
                    <span className="contact-info-label">Response Time</span>
                    <p>Typically within 24 hours</p>
                  </div>
                </li>
              </ul>

              <div className="contact-socials">
                <motion.a
                  href="https://linkedin.com/in/daoud-umer-40b640255/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-btn"
                  title="LinkedIn"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa-brands fa-linkedin-in" />
                </motion.a>
                <motion.a
                  href="https://github.com/daoudumer"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-btn"
                  title="GitHub"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa-brands fa-github" />
                </motion.a>
                <motion.a
                  href="https://wa.me/923015498356"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-btn"
                  title="WhatsApp"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa-brands fa-whatsapp" />
                </motion.a>
                <motion.a
                  href="mailto:daudumer2001@gmail.com"
                  className="contact-social-btn"
                  title="Email"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa-solid fa-envelope" />
                </motion.a>
              </div>

              {/* Availability badge */}
              <div className="contact-availability">
                <span className="contact-availability__dot" />
                <span>Available for new projects &amp; freelance work</span>
              </div>
            </div>
          </Reveal>

          {/* ── Contact Form ── */}
          <Reveal variant="fade-left" delay={0.2}>
            <div className="contact-form">
              <h3>
                <i className="fa-solid fa-paper-plane" /> Send a Message
              </h3>

              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    key="success"
                    className="contact-form__success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    <div className="contact-form__success-icon">
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <h4>Message Sent!</h4>
                    <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                    <motion.button
                      className="btn btn--glass"
                      onClick={() => setFormState('idle')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Another
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="from_name">
                          <i className="fa-solid fa-user" /> Name
                        </label>
                        <input
                          id="from_name"
                          name="from_name"
                          type="text"
                          placeholder="Your name"
                          required
                          disabled={formState === 'sending'}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="reply_to">
                          <i className="fa-solid fa-at" /> Email
                        </label>
                        <input
                          id="reply_to"
                          name="reply_to"
                          type="email"
                          placeholder="you@example.com"
                          required
                          disabled={formState === 'sending'}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="project_type">
                        <i className="fa-solid fa-folder-open" /> Project Type
                      </label>
                      <select id="project_type" name="project_type" disabled={formState === 'sending'}>
                        <option value="Full-stack web application">Full‑stack web application</option>
                        <option value="AI / Automation workflow">AI / Automation workflow (n8n)</option>
                        <option value="Flutter mobile app">Flutter mobile app</option>
                        <option value="WordPress / CMS website">WordPress / CMS website</option>
                        <option value="E-commerce store">E‑commerce store</option>
                        <option value="Admin dashboard">Admin dashboard / internal tool</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="message">
                        <i className="fa-solid fa-message" /> Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Describe your goals, timeline, budget range, and any references…"
                        required
                        disabled={formState === 'sending'}
                      />
                    </div>

                    {formState === 'error' && (
                      <div className="contact-form__error">
                        <i className="fa-solid fa-triangle-exclamation" />
                        {errorMsg}
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      className="btn btn--primary btn--full"
                      disabled={formState === 'sending'}
                      whileHover={formState !== 'sending' ? { scale: 1.02, y: -2 } : {}}
                      whileTap={formState !== 'sending' ? { scale: 0.98 } : {}}
                    >
                      {formState === 'sending' ? (
                        <>
                          <i className="fa-solid fa-spinner fa-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          <i className="fa-solid fa-paper-plane" /> Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="contact-form__note">
                      <i className="fa-solid fa-lock" />
                      Your info is private and never shared.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
