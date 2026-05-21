function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">

          <div className="reveal-left">
            <div className="section-tag">About Me</div>
            <h2 className="section-title">Driven by<br /><span>Intelligence</span></h2>
            <p className="about-text">
              A <strong>6th-semester Computer Science student</strong> with strong foundations
              in machine learning, data analysis, and software development. Experienced in building
              projects involving predictive analytics and real-world problem solving.
            </p>
            <p className="about-text">
              My focus lies at the intersection of <strong>AI explainability</strong>,
              natural language processing, and scalable web architecture — building systems
              that are not only powerful, but transparent and understandable.
            </p>
          </div>

          <div className="reveal-right">
            <div className="info-cards stagger">
              <div className="info-card">
                <div className="info-card-num">3.67</div>
                <div className="info-card-label">GPA Score</div>
              </div>
              <div className="info-card">
                <div className="info-card-num">6+</div>
                <div className="info-card-label">Projects Built</div>
              </div>
              <div className="info-card">
                <div className="info-card-num" style={{color:'var(--cyan)'}}>1</div>
                <div className="info-card-label">Publication</div>
              </div>
              <div className="info-card">
                <div className="info-card-num" style={{color:'var(--cyan)'}}>2</div>
                <div className="info-card-label">Universities</div>
              </div>
              <div className="info-card info-card-full" style={{textAlign:'left'}}>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:'0.75rem'}}>
                  <span className="card-label">Core Competencies</span>
                </div>
                <div style={{display:'flex',flexWrap:'wrap',gap:'0.4rem'}}>
                  <span className="skill-tag">Machine Learning</span>
                  <span className="skill-tag">NLP</span>
                  <span className="skill-tag skill-tag-cyan">Computer Vision</span>
                  <span className="skill-tag">Full-Stack</span>
                  <span className="skill-tag skill-tag-cyan">Data Analysis</span>
                  <span className="skill-tag">Explainable AI</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag skill-tag-cyan">Next.js</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="edu-h-wrap reveal">
          <div className="section-tag" style={{justifyContent:'center'}}>Education Journey</div>
          <div className="edu-h-timeline">
            <div className="edu-h-line"></div>

            <div className="edu-h-node">
              <div className="edu-h-year">2020 — 2023</div>
              <div className="edu-h-dot"></div>
              <div className="edu-h-card">
                <div className="edu-h-badge-sm edu-badge-prev">Previous</div>
                <div className="edu-h-school">SMA Karangturi Semarang</div>
                <div className="edu-h-detail">Science Course</div>
                <div className="edu-h-place">Semarang, Indonesia</div>
              </div>
            </div>

            <div className="edu-h-node">
              <div className="edu-h-year edu-year-green">2023 — Present</div>
              <div className="edu-h-dot edu-dot-green">
                <div className="edu-dot-pulse"></div>
              </div>
              <div className="edu-h-card edu-card-green">
                <div className="edu-h-badge-sm">Current</div>
                <div className="edu-h-school">BINUS University</div>
                <div className="edu-h-detail">Bachelor of Computer Science</div>
                <div className="edu-h-gpa">GPA: 3.67 / 4.00</div>
              </div>
            </div>

            <div className="edu-h-node">
              <div className="edu-h-year edu-year-cyan">2026</div>
              <div className="edu-h-dot edu-dot-cyan"></div>
              <div className="edu-h-card edu-card-cyan">
                <div className="edu-h-badge-sm edu-badge-cyan">Abroad</div>
                <div className="edu-h-school">Universiti Malaya</div>
                <div className="edu-h-detail">Study Abroad Program</div>
                <div className="edu-h-place">Kuala Lumpur, Malaysia</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About
