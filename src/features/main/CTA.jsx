// Call to Action Section
export default function CTA() {
  return (
    <section id="get-started" className="section">
      <div className="container">
        <div className="cta">
          <div>
            <h3 style={{ margin: 0, fontSize: "clamp(20px,3vw,26px)" }}>Scalable By Design</h3>
            <p style={{ margin: 0, color: "var(--muted)" }}>
              Deploy what you need now, with the flexibility to scale when required
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="#contact" className="btn primary">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
}