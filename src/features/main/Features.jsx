
// Features Section
export default function Features() {
    // Array of feature items
    const items = [
        ["🧩", "Modularity That Scales", "Composable system blocks for evolving mission needs."],
        ["🔗", "Seamless Integration", "Connect platforms and data pipelines without disruption."],
        ["🛡️", "Mission-Ready Security", "Zero-trust principles from day one."],
        ["📊", "Clear Analytics", "Dashboards for readiness, performance, and cost."],
        ["👥", "Expert Support", "Field-proven techs and SMEs — not just integrators."],
        ["⚡", "Fast Deployment", "From planning to go-live in weeks, not months."]
    ];
    // Creates cards for each feature item in a grid
    return (
        <section id="features" className="section">
            <div className="container">
                <h2>Everything you need — minus the clutter</h2>
                <p className="kicker">Focused capability set for maximum impact with minimal overhead.</p>
                <div className="features">
                    {items.map(([icon, title, copy]) => (
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