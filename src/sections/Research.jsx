function Research() {
  return (
    <section id="research">
      <div className="container">
        <div className="reveal" style={{textAlign:'center'}}>
          <div className="section-tag" style={{justifyContent:'center'}}>Academic Work</div>
          <h2 className="section-title" style={{textAlign:'center'}}>Research &amp; <span>Publication</span></h2>
          <p className="section-desc" style={{margin:'0 auto',textAlign:'center'}}>
            Peer-reviewed research contributing to the field of AI explainability and misinformation detection.
          </p>
        </div>

        <div className="research-card reveal">
          <div className="research-inner">
            <div>
              <div className="research-meta">
                <span className="research-badge rb-conf">TF-IDF</span>
                <span className="research-badge rb-conf">BERT</span>
                <span className="research-badge rb-conf">Word2Vec</span>
                <span className="research-badge rb-year">XGBoost</span>
                <span className="research-badge rb-year">LightGBM</span>
                <span className="research-badge rb-pub">SHAP</span>
                <span className="research-badge rb-pub">LIME</span>
              </div>
              <h3 className="research-title">
                Fake News Detection Utilizing Ensemble Learning and Explainable AI
              </h3>
              <p className="research-abstract">
                This research presents a novel framework for automated fake news detection by combining
                the predictive power of ensemble learning algorithms with the transparency offered by
                explainable AI techniques. The system achieves high classification accuracy while
                providing human-interpretable explanations for each prediction, addressing the growing
                need for trustworthy AI in information verification.
              </p>
              <div style={{display:'flex',alignItems:'center',gap:'1.25rem',flexWrap:'wrap'}}>
                <a href="https://ieeexplore.ieee.org/abstract/document/11296101" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{display:'inline-flex'}}>
                  <svg className="arrow-icon">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                  View Full Paper
                </a>
                {/* Replace src with your paper screenshot — place the image in /public, e.g. /paper-screenshot.png */}
                <img
                  src="/assets/paper-screenshot.png"
                  alt="Paper screenshot"
                  className="paper-screenshot-img"
                />
              </div>
            </div>

            <div>
              <div className="research-highlights">
                <div className="rh-title">Key Contributions</div>
                <div className="rh-item">
                  <div className="rh-dot"></div>
                  <div className="rh-text">High-accuracy ensemble model combining XGBoost and LightGBM for robust fake news classification</div>
                </div>
                <div className="rh-item">
                  <div className="rh-dot"></div>
                  <div className="rh-text">SHAP and LIME-based explainability layer providing transparent, human-readable decision rationale</div>
                </div>
                <div className="rh-item">
                  <div className="rh-dot"></div>
                  <div className="rh-text">Advanced NLP preprocessing pipeline optimized for misinformation detection at scale</div>
                </div>
                <div className="rh-item">
                  <div className="rh-dot"></div>
                  <div className="rh-text">Published and presented at the International Conference on Research and Informatics Systems 2025</div>
                </div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.75rem',marginTop:'1.5rem'}}>
                <div style={{padding:'1rem',background:'rgba(0,212,255,0.05)',border:'1px solid rgba(0,212,255,0.12)',borderRadius:'2px',textAlign:'center'}}>
                  <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:'1.3rem',fontWeight:700,color:'var(--cyan)',marginBottom:'0.2rem'}}>ICORIS</div>
                  <div style={{fontSize:'0.72rem',color:'var(--text3)'}}>Conference Venue</div>
                </div>
                <div style={{padding:'1rem',background:'rgba(0,255,136,0.05)',border:'1px solid rgba(0,255,136,0.12)',borderRadius:'2px',textAlign:'center'}}>
                  <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:'1.3rem',fontWeight:700,color:'var(--green)',marginBottom:'0.2rem'}}>2025</div>
                  <div style={{fontSize:'0.72rem',color:'var(--text3)'}}>Publication Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research
