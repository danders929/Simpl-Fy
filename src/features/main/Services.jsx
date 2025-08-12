
// Services Section
export default function Services() {
  const items = [
    ["Systems Integration", "Planning, architecture, platform integration across ISR/IT."],
    ["Field Technicians & Support", "On-site/remote experts for uptime and readiness."],
    ["Automation & Tooling", "Secure workflow automation and data movement."],
    ["Cyber & Compliance", "Zero-trust patterns, hardening, audit support."],
    ["Training & Enablement", "Operator training, SOPs, knowledge transfer."],
    ["Lifecycle Management", "Road-maps, monitoring, continual improvement."]
  ];
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Services</h2>
        <p className="kicker">From integration to sustained operations.</p>
        <div className="services">
          {items.map(([t, c]) => (
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