
// About section


export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        {/*Mission and Vision*/}
        <div>
          <h2>Our mission & vision</h2>
          <p className="kicker">Formal, technical, and focused on outcomes.</p>
          <p><strong>Vision:</strong> Trusted partner for C5ISR & IT solutions that support critical missions and scalable growth.</p>
          <p><strong>Mission:</strong> Deliver modular, secure, mission-ready systems with seamless integration, expert support, and field-proven performance.</p>
          <div className="pill-group">
            <span className="pill-item">Simplicity</span>
            <span className="pill-item">Technical Expertise</span>
            <span className="pill-item">Innovation &amp; Modularity</span>
            <span className="pill-item">Mission Ready</span>
            <span className="pill-item">Integrity &amp; Reliability</span>
          </div>
        </div>
        {/*Who We Serve*/}
        <div>
          <h2>Who we serve</h2>
          <p>ISR small businesses, defense contractors reducing overhead, and government agencies seeking reliable delivery.</p>
          <div className="pill-group">
            <span className="pill-item">Positioning: Cost-effective, modular, turn-key</span>
            <span className="pill-item">Tone: Formal & technical</span>
          </div>
        </div>
      </div>
    </section>
  );
}