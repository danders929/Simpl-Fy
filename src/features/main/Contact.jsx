import { useState } from "react";

// Contact section
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", "bot-field": "" });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const encode = (data) =>
    Object.keys(data)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // if a bot filled the honeypot, quietly succeed
      if (form["bot-field"]) {
        setOpen(true);
        setLoading(false);
        return;
      }
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      setOpen(true); // show your on-brand modal
      setForm({ name: "", email: "", message: "", "bot-field": "" });
    } catch {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <p className="kicker">Have a mission we can help with? Let’s talk.</p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="contact-card"
          onSubmit={submit}
          noValidate
        >
          {/* Inputs Netlify Needs */}
          <input type="hidden" name="form-name" value="contact" />
          <p style={{ display: "none" }}>
            <label>
              Don’t fill this out:
              <input name="bot-field" value={form["bot-field"]} onChange={onChange} />
            </label>
          </p>

          <div className="grid">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                placeholder="Jane Doe"
                required
                value={form.name}
                onChange={onChange}
                aria-invalid={!!error && !form.name ? "true" : "false"}
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                required
                value={form.email}
                onChange={onChange}
                aria-invalid={!!error && !form.email ? "true" : "false"}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell us about your mission…"
              value={form.message}
              onChange={onChange}
            />
          </div>

          {error && <p className="error" style={{ marginTop: 8 }}>{error}</p>}

          <div className="actions">
            <button className="btn primary" type="submit" disabled={loading}>
              {loading ? "Sending…" : "Submit"}
            </button>
          </div>
        </form>

        {/* Modal (unchanged) */}
        {open && (
          <div role="dialog" aria-modal="true" className="modal-backdrop" onClick={() => setOpen(false)}>
            <div className="card modal" onClick={(e) => e.stopPropagation()}>
              <h3 style={{ marginTop: 0 }}>Request received</h3>
              <p>Thanks—someone from our team will reach out shortly.</p>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
                <button className="btn" onClick={() => setOpen(false)}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
