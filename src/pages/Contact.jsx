import { useState } from "react";
import Footer from "../components/Footer";
import { personal } from "../data/resume";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.open(mailto, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const socials = [
    { icon: "✉", label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: "in", label: "LinkedIn", value: "MounvikKarnati", href: personal.linkedin },
    { icon: "gh", label: "GitHub", value: "MounvikKarnati", href: personal.github },
    { icon: "☎", label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { icon: "🌐", label: "Portfolio", value: "mounvikkarnati.22web.org", href: personal.portfolio },
  ];

  return (
    <div className="page page-fade">
      <div className="inner">
        <div className="section-header">
          <div>
            <div className="section-tag">Let's Talk</div>
            <h2 className="section-title">Contact Me</h2>
          </div>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div>
            <div className="contact-form">
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--burnt)",
                  marginBottom: "1.5rem",
                }}
              >
                Send a Message
              </div>

              {sent && (
                <div
                  style={{
                    background: "var(--teal)",
                    color: "var(--white)",
                    border: "2px solid var(--black)",
                    boxShadow: "3px 3px 0 var(--black)",
                    padding: "0.75rem 1.25rem",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    marginBottom: "1.5rem",
                  }}
                >
                  ✓ Email client opened — message on its way!
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Name *</label>
                    <input
                      className="form-input"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Email *</label>
                    <input
                      className="form-input"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    className="form-input"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity / Collaboration / ..."
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    className="form-textarea"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me what's on your mind..."
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message →
                </button>
              </form>
            </div>
          </div>

          {/* Social links */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#888",
                marginBottom: "1rem",
              }}
            >
              Find Me Online
            </div>
            <div className="social-links">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label !== "Phone" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="social-link"
                >
                  <div className="social-icon">{s.icon}</div>
                  <div>
                    <div className="social-label">{s.label}</div>
                    <div className="social-value">{s.value}</div>
                  </div>
                  <div style={{ marginLeft: "auto", color: "var(--gold)", fontSize: "1rem" }}>↗</div>
                </a>
              ))}
            </div>

            {/* Availability block */}
            <div
              style={{
                marginTop: "1.5rem",
                background: "var(--gold)",
                border: "2px solid var(--black)",
                boxShadow: "4px 4px 0 var(--black)",
                padding: "1.25rem 1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#12a912",
                    display: "inline-block",
                    boxShadow: "0 0 6px #12a912",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  Available
                </span>
              </div>
              <div style={{ fontSize: "0.9rem", color: "#1a1a1a" }}>
                Open to Summer 2026 internships, research collaborations,
                and full-time offers from May 2027.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
