
// Hero Function, contains eyebrow, summary, hero-actions, and a mockup window
export default function Hero() {
  return (
    <section id="top" className="hero">
      {/* Hero content container */}
      <div className="container hero-grid">
        {/* Eyebrow statement, summary, and hero-actions */}
        <div>
          <span className="eyebrow">Mission-Ready • Modular • Secure</span>
          <h1>Let’s Simpl-FY ISR.</h1>
          <p><strong>Simpl-FY</strong> delivers modular, secure, and mission-ready
            C5ISR systems and IT services. Seamless integration, expert support,
            and field-proven performance.</p>
          <div className="hero-actions">
            <a href="#get-started" className="btn primary">Start a project</a>
            <a href="#features" className="btn ghost">View capabilities</a>
          </div>
        </div>
        {/** Mockup window showcasing key features */}
        <div className="mockup" aria-hidden="true">
          <div className="window">
            <div className="window-bar">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="window-body">
              <div className="chip">🧩 Turn-Key Systems</div>
              <div className="chip">🔐 Zero-Trust Mindset</div>
              <div className="chip">📈 Cost-Effective Scaling</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}