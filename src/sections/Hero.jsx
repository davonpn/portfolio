function Hero() {

  const downloadCV = (e) => {
    e.preventDefault()
    window.open('/assets/Davon_Perry_Resume.pdf', '_blank')
  }

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-inner">

          <div className="hero-content">
            <div className="hero-status reveal">
              <div className="status-dot"></div>
              Available for Opportunities
            </div>
            <h1 className="hero-name reveal">Davon Perry<br />Nugroho</h1>
            <p className="hero-title reveal">
              <strong>Computer Science Student</strong> &nbsp;·&nbsp;
              <strong>Machine Learning Engineer</strong> &nbsp;·&nbsp;
              <strong>Full-Stack Developer</strong>
            </p>
            <p className="hero-intro reveal">
              Building <em>intelligent systems</em>, scalable applications,
              and AI-driven solutions that solve real-world problems.
            </p>
            <div className="hero-btns reveal">
              <a href="#projects" className="btn-primary">
                View Projects
                <svg className="arrow-icon"><polyline points="5 12 12 12"/><polyline points="9 8 13 12 9 16"/></svg>
              </a>
              <a href="#" className="btn-secondary" onClick={downloadCV}>
                <svg className="arrow-icon"><path d="M12 3v9m0 0l-3-3m3 3l3-3M3 17v1a2 2 0 002 2h14a2 2 0 002-2v-1"/></svg>
                Download CV
              </a>
              <a href="#contact" className="btn-ghost">Contact Me</a>
            </div>
            <div className="hero-socials reveal">
              <a href="https://github.com/davonpn" className="social-link" target="_blank" rel="noreferrer">
                <svg className="social-icon" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/davonpn/" className="social-link" target="_blank" rel="noreferrer">
                <svg className="social-icon" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href="mailto:davon.perryn@gmail.com" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Email
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card hero-card-main">
              <div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1.25rem'}}>
                <div className="profile-ring">
                  <img src="/assets/profile.jpg" alt="Davon Perry Nugroho" className="profile-img" />
                </div>
                <div>
                  <div className="card-label">Profile</div>
                  <div style={{fontWeight:600,fontSize:'0.95rem'}}>Davon Perry Nugroho</div>
                  <div className="card-sub">BINUS University · CS 6th Semester</div>
                </div>
              </div>
              <div className="card-info-row">
                <div className="card-dot card-dot-green"></div>
                <span className="card-info-label">Specialization:</span>
                <span className="card-info-value">Machine Learning &amp; AI</span>
              </div>
              <div className="card-info-row">
                <div className="card-dot card-dot-cyan"></div>
                <span className="card-info-label">GPA:</span>
                <span className="card-info-value">3.67 / 4.00</span>
              </div>
              <div className="card-info-row">
                <div className="card-dot card-dot-green"></div>
                <span className="card-info-label">Location:</span>
                <span className="card-info-value">Indonesia</span>
              </div>
              <div style={{marginTop:'1rem',display:'flex',flexWrap:'wrap',gap:'0.5rem'}}>
                <span style={{padding:'0.35rem 0.75rem',borderRadius:'999px',fontSize:'0.78rem',fontWeight:600,background:'rgba(0,255,136,0.1)',border:'1px solid rgba(0,255,136,0.25)',color:'var(--green)'}}>Machine Learning</span>
                <span style={{padding:'0.35rem 0.75rem',borderRadius:'999px',fontSize:'0.78rem',fontWeight:600,background:'rgba(0,212,255,0.1)',border:'1px solid rgba(0,212,255,0.25)',color:'var(--cyan)'}}>Full-Stack Dev</span>
                <span style={{padding:'0.35rem 0.75rem',borderRadius:'999px',fontSize:'0.78rem',fontWeight:600,background:'rgba(0,255,136,0.1)',border:'1px solid rgba(0,255,136,0.25)',color:'var(--green)'}}>Data Science</span>
                <span style={{padding:'0.35rem 0.75rem',borderRadius:'999px',fontSize:'0.78rem',fontWeight:600,background:'rgba(0,212,255,0.1)',border:'1px solid rgba(0,212,255,0.25)',color:'var(--cyan)'}}>AI Research</span>
              </div>
            </div>

            <div className="hero-stats-row">
              <div className="hero-card hero-card-floating">
                <div className="card-label card-label-cyan">Study Abroad</div>
                <div style={{fontWeight:600,fontSize:'0.88rem',marginBottom:'0.3rem'}}>Universiti Malaya</div>
                <div className="card-sub">Kuala Lumpur, Malaysia</div>
              </div>
              <div className="hero-card hero-card-stat hero-card-stat1">
                <div className="card-label">Projects</div>
                <div className="card-big-num">6+</div>
                <div className="card-sub">Completed projects</div>
              </div>
              <div className="hero-card hero-card-stat hero-card-stat2">
                <div className="card-label">Publication</div>
                <div className="card-big-num">1</div>
                <div className="card-sub">ICORIS 2025 Conference</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
