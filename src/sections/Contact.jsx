import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner">

          <div className="reveal-left">
            <div className="section-tag">Get In Touch</div>
            <h2 className="contact-info-title">Let's Build<br /><span>Something</span><br />Together</h2>
            <p className="contact-desc">
              Open to internship opportunities, research collaborations, and
              exciting projects. Let's connect and create something meaningful.
            </p>
            <div className="contact-links">
              <a href="mailto:davon.perryn@gmail.com" className="contact-link-item">
                <div className="contact-link-icon">
                  <svg width="18" height="18" fill="none" stroke="var(--green)" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-value">davon.perryn@gmail.com</div>
                </div>
              </a>
              <a href="https://github.com/davonpn" target="_blank" rel="noreferrer" className="contact-link-item">
                <div className="contact-link-icon">
                  <svg width="18" height="18" fill="none" stroke="var(--green)" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-link-label">GitHub</div>
                  <div className="contact-link-value">github.com/davonpn</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/davonpn/" target="_blank" rel="noreferrer" className="contact-link-item">
                <div className="contact-link-icon">
                  <svg width="18" height="18" fill="none" stroke="var(--green)" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-link-label">LinkedIn</div>
                  <div className="contact-link-value">linkedin.com/in/davonpn</div>
                </div>
              </a>
            </div>
          </div>

          <div className="reveal-right">
            <div className="contact-form">
              <div style={{marginBottom:'1.5rem'}}>
                <div className="card-label">Send a Message</div>
                <p style={{fontSize:'0.85rem',color:'var(--text3)'}}>I'll get back to you within 24 hours.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input className="form-input" type="text" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input className="form-input" type="text" placeholder="Project collaboration, internship, etc." />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" placeholder="Tell me about your project or opportunity..."></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-submit"
                  style={submitted ? {background:'var(--cyan)'} : {}}
                >
                  {submitted ? '✓ Message Sent!' : (
                    <>
                      Send Message
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
