function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="reveal">
          <div className="section-tag">Professional Journey</div>
          <h2 className="section-title">Experience &amp; <span>Involvement</span></h2>
          <p className="section-desc">Organizations and events where I contributed my skills and grew as a professional.</p>
        </div>

        <div className="exp-grid stagger">
          <div className="exp-card">
            <div className="exp-org">HIMTI BINUS</div>
            <div className="exp-role">Publication &amp; Marketing Division</div>
            <div className="exp-date">Jan 2024 — Dec 2024 · Student Organization</div>
            <ul className="exp-duties">
              <li>Managed and curated educational content across social media platforms, growing digital engagement for the Computer Science faculty organization</li>
              <li>Developed marketing strategies and visual content for department events and academic initiatives</li>
              <li>Collaborated with cross-functional teams to communicate complex topics to a broad student audience</li>
            </ul>
          </div>

          <div className="exp-card">
            <div className="exp-org" style={{color:'var(--cyan)'}}>HISHOT 2024</div>
            <div className="exp-role">Technical Team Member</div>
            <div className="exp-date">2024 · Event Organizing Committee</div>
            <ul className="exp-duties">
              <li>Responsible for executing technical aspects of the organization event, ensuring seamless operation of systems and infrastructure</li>
              <li>Coordinated technical logistics and troubleshooting in real-time during live event sessions</li>
              <li>Worked closely with the organizing committee to deliver a smooth and professionally run event experience</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
