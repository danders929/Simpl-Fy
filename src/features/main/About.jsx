
// About section
export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        {/*Mission and Vision*/}
        <div>
          <h2>Our mission & vision</h2>
          
          <p>We are the trusted partner for C5ISR and IT solutions that empower critical missions and enable scalable growth. We deliver modular, secure, mission-ready systems with seamless integration, expert support, and proven performance — ensuring our partners succeed with confidence and efficiency.</p>
          
          <div className="pill"> Innovation • Modularity • Reliability</div>
        </div>
        {/*Who We Serve*/}
        <div>
          <h2>Built for Big Plans</h2>
          <p>From first deployment to full-scale operations, we deliver solutions that adapt to your needs.</p>
          <ul>
            <li><strong>Defence &amp; C5ISR Teams:</strong> Streamlined, mission-ready systems that reduce complexity and operational overhead.</li>
            <li><strong>Government &amp; Federal Agencies:</strong> Secure, compliant, and modular IT infrastructure designed for evolving mission demands.</li>
            <li><strong>Enterprise IT Leaders:</strong> Flexible, scalable solutions that grow with your organization—without the clutter.</li>
            <li><strong>Scalable IT Infrastructure Needs:</strong> Deploy what you need today and expand seamlessly as your mission grows.</li>
</ul>
          
        </div>
      </div>
    </section>
  );
}