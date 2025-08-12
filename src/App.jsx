import Header from "./components/Header.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
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
        <div className="mockup" aria-hidden="true">
          <div className="window">
            <div className="window-bar">
              <div className="dot"></div><div className="dot"></div><div className="dot"></div>
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

function Features() {
  const items = [
    ["🧩","Modularity That Scales","Composable system blocks for evolving mission needs."],
    ["🔗","Seamless Integration","Connect platforms and data pipelines without disruption."],
    ["🛡️","Mission-Ready Security","Zero-trust principles from day one."],
    ["📊","Clear Analytics","Dashboards for readiness, performance, and cost."],
    ["👥","Expert Support","Field-proven techs and SMEs — not just integrators."],
    ["⚡","Fast Deployment","From planning to go-live in weeks, not months."]
  ];
  return (
    <section id="features" className="section">
      <div className="container">
        <h2>Everything you need — minus the clutter</h2>
        <p className="kicker">Focused capability set for maximum impact with minimal overhead.</p>
        <div className="features">
          {items.map(([icon,title,copy]) => (
            <article key={title} className="card">
              <div className="icon">{icon}</div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="get-started" className="section">
      <div className="container">
        <div className="cta">
          <div>
            <h3 style={{margin:0,fontSize:"clamp(20px,3vw,26px)"}}>Start small. Scale fast.</h3>
            <p style={{margin:0,color:"var(--muted)"}}>
              Pilot with core capabilities at low cost. Upgrade when ready.
            </p>
          </div>
          <div style={{textAlign:"right"}}>
            <a href="#contact" className="btn primary">Request a consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div>
          <h2>Our mission & vision</h2>
          <p className="kicker">Formal, technical, and focused on outcomes.</p>
          <p><strong>Vision:</strong> Trusted partner for C5ISR & IT solutions that support critical missions and scalable growth.</p>
          <p><strong>Mission:</strong> Deliver modular, secure, mission-ready systems with seamless integration, expert support, and field-proven performance.</p>
          <div className="pill">Core values: Simplicity • Technical Expertise • Innovation & Modularity • Mission Ready • Integrity & Reliability</div>
        </div>
        <div>
          <h2>Who we serve</h2>
          <p>ISR small businesses, defense contractors reducing overhead, and government agencies seeking reliable delivery.</p>
          <ul>
            <li>Positioning: cost-effective, modular, turn-key.</li>
            <li>Tone: formal & technical.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    ["Systems Integration","Planning, architecture, platform integration across ISR/IT."],
    ["Field Technicians & Support","On-site/remote experts for uptime and readiness."],
    ["Automation & Tooling","Secure workflow automation and data movement."],
    ["Cyber & Compliance","Zero-trust patterns, hardening, audit support."],
    ["Training & Enablement","Operator training, SOPs, knowledge transfer."],
    ["Lifecycle Management","Road-maps, monitoring, continual improvement."]
  ];
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Services</h2>
        <p className="kicker">From integration to sustained operations.</p>
        <div className="services">
          {items.map(([t,c]) => (
            <article key={t} className="card">
              <h3>{t}</h3>
              <p>{c}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const submit = (e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); };
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <p className="kicker">Have a mission we can help with? Let’s talk.</p>
        <form className="card" onSubmit={submit}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" placeholder="Jane Doe" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="jane@example.com" required />
            </div>
          </div>
          <div style={{marginTop:"12px"}}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Tell us about your mission…"></textarea>
          </div>
          <div style={{marginTop:"14px",display:"flex",justifyContent:"flex-end"}}>
            <button className="btn primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>© {new Date().getFullYear()} Simpl-FY. All rights reserved.</div>
        <div className="socials">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="X">x</a>
          <a href="#" aria-label="Email">@</a>
        </div>
      </div>
    </footer>
  );
}
