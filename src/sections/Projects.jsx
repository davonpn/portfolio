import { useState } from 'react'

const Arrow = () => (
  <svg className="arrow-icon" viewBox="0 0 24 24">
    <polyline points="5 12 12 12"/>
    <polyline points="9 8 13 12 9 16"/>
  </svg>
)

function ProjectModal({ onClose }) {
  const handleContact = () => {
    onClose()
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-tag">Project Access</div>
        <div className="modal-title">Want to see the full project?</div>
        <p className="modal-body">
          For a full demo, source code walkthrough, or any further inquiry about
          this project — feel free to reach out directly. I'd love to chat!
        </p>
        <div className="modal-actions">
          <button className="btn-primary" onClick={handleContact}>
            Send a Message <Arrow />
          </button>
          <button className="btn-secondary" onClick={onClose}>Maybe Later</button>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [showModal, setShowModal] = useState(false)

  const handleViewProject = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  return (
    <section id="projects">
      {showModal && <ProjectModal onClose={() => setShowModal(false)} />}
      <div className="container">
        <div className="projects-header reveal">
          <div>
            <div className="section-tag">Featured Work</div>
            <h2 className="section-title">Selected <span>Projects</span></h2>
          </div>
          <p className="section-desc" style={{maxWidth:'380px'}}>
            From AI research to full-stack platforms, each project built to solve real problems.
          </p>
        </div>

        <div className="projects-grid stagger">

          <div className="project-card">
            {/* Replace src with your own image — see file header for instructions */}
            <img
              src="/assets/aniswipe.png"
              alt="Project Preview"
              className="project-img"
            />
            <div className="project-number">01 / WEB APP</div>
            <div className="project-badge">Live Project</div>
            <div className="project-name">AniSwipe</div>
            <p className="project-desc">
              Swipe-based anime discovery platform with personalized user lists,
              MyAnimeList integration, and seamless authentication.
            </p>
            <div className="project-tags">
              <span className="project-tag">Next.js</span>
              <span className="project-tag">TypeScript</span>
              <span className="project-tag">Supabase</span>
              <span className="project-tag">Jikan API</span>
            </div>
            <div className="project-footer">
              <a href="#" className="project-link" onClick={handleViewProject}>View Project <Arrow /></a>
            </div>
          </div>

          <div className="project-card">
            {/* Replace src with your own image — see file header for instructions */}
            <img
              src="/assets/semantic-anime-recommendation.png"
              alt="Project Preview"
              className="project-img"
            />
            <div className="project-number">02 / ML PROJECT</div>
            <div className="project-badge">AI · NLP</div>
            <div className="project-name">Semantic Anime Recommendation System</div>
            <p className="project-desc">
              Recommendation system using natural language queries and an explainable
              pipeline for intuitive, transparent suggestions.
            </p>
            <div className="project-tags">
              <span className="project-tag">SBERT</span>
              <span className="project-tag">Semantic Search</span>
              <span className="project-tag">CrossEncoder Reranking</span>
              <span className="project-tag">Integrated Gradients</span>
              <span className="project-tag">Explainable AI</span>
            </div>
            <div className="project-footer">
              <a href="#" className="project-link" onClick={handleViewProject}>View Project <Arrow /></a>
            </div>
          </div>

          <div className="project-card">
            {/* Replace src with your own image — see file header for instructions */}
            <img
              src="/assets/automated-car-damage-segmentation.png"
              alt="Project Preview"
              className="project-img"
            />
            <div className="project-number">03 / ML PROJECT</div>
            <div className="project-badge" style={{background:'rgba(120,80,255,0.1)',borderColor:'rgba(120,80,255,0.25)',color:'#a084ff'}}>AI · Computer Vision</div>
            <div className="project-name">Automated Car Damage Segmentation for Insurance</div>
            <p className="project-desc">
              Computer vision system to detect and segment vehicle damage,
              streamlining insurance claim assessment processes.
            </p>
            <div className="project-tags">
              <span className="project-tag">CLAHE</span>
              <span className="project-tag">ResNet 50</span>
              <span className="project-tag">Mask R-CNN</span>
              <span className="project-tag">Segment Anything</span>
            </div>
            <div className="project-footer">
              <a href="#" className="project-link" onClick={handleViewProject}>View Project <Arrow /></a>
            </div>
          </div>

          <div className="project-card">
            {/* Replace src with your own image — see file header for instructions */}
            <img
              src="/assets/mathe.png"
              alt="Project Preview"
              className="project-img"
            />
            <div className="project-number">04 / WEB APP</div>
            <div className="project-badge" style={{background:'rgba(255,160,0,0.08)',borderColor:'rgba(255,160,0,0.2)',color:'#ffa040'}}>Live Project · Education</div>
            <div className="project-name">Mathe — Math Education Platform</div>
            <p className="project-desc">
              Interactive math learning platform with adaptive quizzes,
              user authentication, and structured learning materials.
            </p>
            <div className="project-tags">
              <span className="project-tag">PHP</span>
              <span className="project-tag">JavaScript</span>
              <span className="project-tag">HTML</span>
              <span className="project-tag">XAMPP</span>
            </div>
            <div className="project-footer">
              <a href="#" className="project-link" onClick={handleViewProject}>View Project <Arrow /></a>
            </div>
          </div>

          <div className="project-card">
            {/* Replace src with your own image — see file header for instructions */}
            <img
              src="/assets/daily-habits-journey.png"
              alt="Project Preview"
              className="project-img"
            />
            <div className="project-number">05 / WEB APP</div>
            <div className="project-badge" style={{background:'rgba(0,212,255,0.08)',borderColor:'rgba(0,212,255,0.2)',color:'var(--cyan)'}}>Live Web · SDG</div>
            <div className="project-name">Daily Habits Journey Web</div>
            <p className="project-desc">
              Gamified storytelling platform promoting SDG-inspired morale-building
              values through interactive daily habit challenges.
            </p>
            <div className="project-tags">
              <span className="project-tag">JavaScript</span>
              <span className="project-tag">HTML</span>
              <span className="project-tag">CSS</span>
              <span className="project-tag">DaVinci Resolve</span>
            </div>
            <div className="project-footer">
              <a href="#" className="project-link" onClick={handleViewProject}>View Project <Arrow /></a>
            </div>
          </div>

          <div className="project-card">
            {/* Replace src with your own image — see file header for instructions */}
            <img
              src="/assets/drug-approval-prediction.png"
              alt="Project Preview"
              className="project-img"
            />
            <div className="project-number">06 / ML PROJECT</div>
            <div className="project-badge" style={{background:'rgba(0,255,136,0.08)',borderColor:'rgba(0,255,136,0.2)',color:'var(--green)'}}>AI · Classifier</div>
            <div className="project-name">Drug Approval Prediction</div>
            <p className="project-desc">
              ML-based drug approval prediction system using molecular descriptors and
              ensemble models to support early-stage pharmaceutical decision making and
              prevent loss during the development process.
            </p>
            <div className="project-tags">
              <span className="project-tag">PubChem</span>
              <span className="project-tag">RDKit</span>
              <span className="project-tag">Random Forest</span>
              <span className="project-tag">XGBoost</span>
              <span className="project-tag">SVM</span>
              <span className="project-tag">KNN</span>
              <span className="project-tag">Logistic Regression</span>
            </div>
            <div className="project-footer">
              <a href="#" className="project-link" onClick={handleViewProject}>View Project <Arrow /></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
