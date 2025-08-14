// Call to Action Section
export default function CTA() {
  return (
    <section id="get-started" className="section">
      <div className="container">
        <div className="cta">
          <div>
            <h3 style={{ margin: 0, fontSize: "clamp(20px,3vw,26px)" }}>Start small. Scale fast.</h3>
            <p style={{ margin: 0, color: "var(--muted)" }}>
              Pilot with core capabilities at low cost. Upgrade when ready.
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <a href="#contact" className="btn primary">Request a consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}