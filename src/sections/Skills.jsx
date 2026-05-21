function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="reveal" style={{textAlign:'center'}}>
          <div className="section-tag" style={{justifyContent:'center'}}>Technical Arsenal</div>
          <h2 className="section-title" style={{textAlign:'center'}}>Skills &amp; <span>Technologies</span></h2>
          <p className="section-desc" style={{margin:'0 auto',textAlign:'center'}}>
            A diverse toolkit spanning AI research, software engineering, and data systems.
          </p>
        </div>

        <div className="skills-grid stagger">
          <div className="skill-cat">
            <div className="skill-cat-header">
              <div className="skill-cat-icon">
                <svg width="20" height="20" fill="none" stroke="var(--green)" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              </div>
              <div className="skill-cat-name">Machine Learning</div>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">NLP</span>
              <span className="skill-tag">Computer Vision</span>
              <span className="skill-tag">Explainable AI</span>
              <span className="skill-tag">Regression</span>
              <span className="skill-tag">Classification</span>
              <span className="skill-tag">XGBoost</span>
              <span className="skill-tag">LightGBM</span>
              <span className="skill-tag">SHAP</span>
              <span className="skill-tag">Ensemble Learning</span>
              <span className="skill-tag">TensorFlow</span>
              <span className="skill-tag">PyTorch</span>
              <span className="skill-tag">scikit-learn</span>
            </div>
          </div>

          <div className="skill-cat">
            <div className="skill-cat-header">
              <div className="skill-cat-icon">
                <svg width="20" height="20" fill="none" stroke="var(--cyan)" strokeWidth="1.5" viewBox="0 0 24 24">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <div className="skill-cat-name">Programming</div>
            </div>
            <div className="skill-tags">
              <span className="skill-tag skill-tag-cyan">Python</span>
              <span className="skill-tag skill-tag-cyan">JavaScript</span>
              <span className="skill-tag skill-tag-cyan">TypeScript</span>
              <span className="skill-tag skill-tag-cyan">Java</span>
              <span className="skill-tag skill-tag-cyan">SQL</span>
              <span className="skill-tag skill-tag-cyan">C</span>
              <span className="skill-tag skill-tag-cyan">C#</span>
              <span className="skill-tag skill-tag-cyan">C++</span>
              <span className="skill-tag skill-tag-cyan">HTML</span>
              <span className="skill-tag skill-tag-cyan">CSS</span>
              <span className="skill-tag skill-tag-cyan">PHP</span>
            </div>
          </div>

          <div className="skill-cat">
            <div className="skill-cat-header">
              <div className="skill-cat-icon">
                <svg width="20" height="20" fill="none" stroke="#a084ff" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div className="skill-cat-name">Web Development</div>
            </div>
            <div className="skill-tags">
              <span className="skill-tag skill-tag-purple">Next.js</span>
              <span className="skill-tag skill-tag-purple">React</span>
              <span className="skill-tag skill-tag-purple">Laravel</span>
              <span className="skill-tag skill-tag-purple">Tailwind CSS</span>
              <span className="skill-tag skill-tag-purple">TypeScript</span>
              <span className="skill-tag skill-tag-purple">REST APIs</span>
            </div>
          </div>

          <div className="skill-cat">
            <div className="skill-cat-header">
              <div className="skill-cat-icon">
                <svg width="20" height="20" fill="none" stroke="#ffa040" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.07 4.93A10 10 0 006.99 3.34M4.93 4.93A10 10 0 003.34 17a10 10 0 0016.58 3.08"/>
                </svg>
              </div>
              <div className="skill-cat-name">Tools &amp; Platforms</div>
            </div>
            <div className="skill-tags">
              <span className="skill-tag skill-tag-amber">Supabase</span>
              <span className="skill-tag skill-tag-amber">Power BI</span>
              <span className="skill-tag skill-tag-amber">XAMPP</span>
              <span className="skill-tag skill-tag-amber">Excel</span>
              <span className="skill-tag skill-tag-amber">Git</span>
              <span className="skill-tag skill-tag-amber">VS Code</span>
              <span className="skill-tag skill-tag-amber">Jupyter</span>
            </div>
          </div>

          <div className="skill-cat" style={{gridColumn:'1 / -1'}}>
            <div className="skill-cat-header">
              <div className="skill-cat-icon">
                <svg width="20" height="20" fill="none" stroke="#e06cff" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M8 14l-4 7h16l-4-7"/>
                  <line x1="12" y1="12" x2="12" y2="21"/>
                </svg>
              </div>
              <div className="skill-cat-name">Certifications</div>
            </div>
            <div className="skill-tags">
              <span className="skill-tag" style={{borderColor:'rgba(224,108,255,0.3)',color:'#e06cff',background:'rgba(224,108,255,0.08)'}}>English (IELTS 7.5)</span>
              <span className="skill-tag" style={{borderColor:'rgba(224,108,255,0.3)',color:'#e06cff',background:'rgba(224,108,255,0.08)'}}>Alibaba Cloud ACA: Cloud Engineer</span>
              <span className="skill-tag" style={{borderColor:'rgba(224,108,255,0.3)',color:'#e06cff',background:'rgba(224,108,255,0.08)'}}>AWS Educate: Cloud 101</span>
              <span className="skill-tag" style={{borderColor:'rgba(224,108,255,0.3)',color:'#e06cff',background:'rgba(224,108,255,0.08)'}}>AWS Educate: Compute</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
