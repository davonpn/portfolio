const Arrow = () => (
  <svg className="arrow-icon">
    <polyline points="5 12 12 12"/>
    <polyline points="9 8 13 12 9 16"/>
  </svg>
)

/*
 * HOW TO USE PROJECT IMAGES
 * ─────────────────────────
 * Option A — file in /public folder (e.g. public/aniswipe.png):
 *   src="/aniswipe.png"
 *
 * Option B — file in /src/assets (e.g. src/assets/aniswipe.png):
 *   import aniswipeImg from '../assets/aniswipe.png'
 *   then use  src={aniswipeImg}
 *
 * Replace the placeholder src on each <img className="project-img"> below.
 */

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-header reveal">
          <div>
            <div className="section-tag">Featured Work</div>
            <h2 className="section-title">Selected <span>Projects</span></h2>
          </div>
          <p className="section-desc" style={{maxWidth:'380px'}}>
            From AI research to full-stack platforms — each project built to solve real problems.
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
              <a href="#" className="project-link">View Project <Arrow /></a>
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
              <span className="project-tag">Python</span>
              <span className="project-tag">NLP</span>
              <span className="project-tag">Semantic Search</span>
              <span className="project-tag">Explainable AI</span>
            </div>
            <div className="project-footer">
              <a href="#" className="project-link">View Project <Arrow /></a>
            </div>
          </div>

          <div className="project-card">
            {/* Replace src with your own image — see file header for instructions */}
            <img
              src="/assets/automated-car-damage-segmentation.png"
              alt="Project Preview"
              className="project-img"
            />
            <div className="project-number">03 / COMPUTER VISION</div>
            <div className="project-badge" style={{background:'rgba(120,80,255,0.1)',borderColor:'rgba(120,80,255,0.25)',color:'#a084ff'}}>Vision AI</div>
            <div className="project-name">Automated Car Damage Segmentation for Insurance</div>
            <p className="project-desc">
              Computer vision system to detect and segment vehicle damage,
              streamlining insurance claim assessment processes.
            </p>
            <div className="project-tags">
              <span className="project-tag">Computer Vision</span>
              <span className="project-tag">Segmentation</span>
              <span className="project-tag">Python</span>
            </div>
            <div className="project-footer">
              <a href="#" className="project-link">View Project <Arrow /></a>
            </div>
          </div>

          <div className="project-card">
            {/* Replace src with your own image — see file header for instructions */}
            <img
              src="/assets/mathe.png"
              alt="Project Preview"
              className="project-img"
            />
            <div className="project-number">04 / EDUCATION</div>
            <div className="project-badge" style={{background:'rgba(255,160,0,0.08)',borderColor:'rgba(255,160,0,0.2)',color:'#ffa040'}}>EdTech</div>
            <div className="project-name">Mathe — Math Education Platform</div>
            <p className="project-desc">
              Interactive math learning platform with adaptive quizzes,
              user authentication, and structured learning materials.
            </p>
            <div className="project-tags">
              <span className="project-tag">PHP</span>
              <span className="project-tag">MySQL</span>
              <span className="project-tag">JavaScript</span>
              <span className="project-tag">Laravel</span>
            </div>
            <div className="project-footer">
              <a href="#" className="project-link">View Project <Arrow /></a>
            </div>
          </div>

          <div className="project-card">
            {/* Replace src with your own image — see file header for instructions */}
            <img
              src="/assets/daily-habits-journey.png"
              alt="Project Preview"
              className="project-img"
            />
            <div className="project-number">05 / GAMIFICATION</div>
            <div className="project-badge" style={{background:'rgba(0,212,255,0.08)',borderColor:'rgba(0,212,255,0.2)',color:'var(--cyan)'}}>SDG · Impact</div>
            <div className="project-name">Daily Habits Journey Web</div>
            <p className="project-desc">
              Gamified storytelling platform promoting SDG-inspired morale-building
              values through interactive daily habit challenges.
            </p>
            <div className="project-tags">
              <span className="project-tag">JavaScript</span>
              <span className="project-tag">Gamification</span>
              <span className="project-tag">SDG</span>
            </div>
            <div className="project-footer">
              <a href="#" className="project-link">View Project <Arrow /></a>
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
            <div className="project-badge" style={{background:'rgba(0,255,136,0.08)',borderColor:'rgba(0,255,136,0.2)',color:'var(--green)'}}>Pharma · AI</div>
            <div className="project-name">Drug Approval Prediction</div>
            <p className="project-desc">
              ML-based drug approval prediction system using molecular descriptors and
              ensemble models to support early-stage pharmaceutical decision making and
              prevent loss during the development process.
            </p>
            <div className="project-tags">
              <span className="project-tag">Python</span>
              <span className="project-tag">Ensemble Learning</span>
              <span className="project-tag">scikit-learn</span>
              <span className="project-tag">Molecular Descriptors</span>
            </div>
            <div className="project-footer">
              <a href="#" className="project-link">View Project <Arrow /></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
