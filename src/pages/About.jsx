import Footer from "../components/Footer";
import { personal, education } from "../data/resume";

export default function About() {
  return (
    <div className="page page-fade">
      <div className="inner">
        <div className="section-header">
          <div>
            <div className="section-tag">Who I Am</div>
            <h2 className="section-title">About Me</h2>
          </div>
        </div>

        <div className="about-grid">
          {/* Bio */}
          <div>
            <p className="about-bio" style={{ marginBottom: "1.5rem" }}>
              {personal.summary}
            </p>

            <p
              className="about-bio"
              style={{ color: "#555", fontSize: "0.95rem" }}
            >
              I'm passionate about building robust, scalable systems that solve real-world problems.
              My experience spans <strong style={{ color: "var(--burnt)" }}>full-stack web development</strong>,
              <strong style={{ color: "var(--teal)" }}> backend architecture</strong>, and distributed systems.
              I thrive on writing clean, maintainable code and collaborating with teams to ship high-quality products.
              From React frontends to Node.js/Spring Boot backends, I bring the same attention to performance,
              reliability, and engineering excellence to every project.
            </p>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                GitHub ↗
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-teal"
              >
                LinkedIn ↗
              </a>
              <a
                href={personal.portfolio}
                target="_blank"
                rel="noreferrer"
                className="btn btn-burnt"
              >
                Portfolio ↗
              </a>
            </div>
          </div>

          {/* Education card */}
          <div>
            <div className="edu-card">
              <h3>Education</h3>
              <div className="edu-degree">{education.degree}</div>
              <div className="edu-institution">{education.institution}</div>
              <div className="edu-meta">
                <span className="edu-chip cgpa">CGPA {education.cgpa}</span>
                <span className="edu-chip duration">{education.duration}</span>
              </div>
            </div>

            {/* Personal info */}
            <div
              style={{
                marginTop: "1.5rem",
                border: "2px solid var(--black)",
                background: "var(--off)",
                boxShadow: "4px 4px 0 var(--black)",
              }}
            >
              {[
                { label: "Location", value: "Hyderabad, India" },
                { label: "Email", value: personal.email },
                { label: "Phone", value: personal.phone },
                { label: "Status", value: "Open to Internships" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    borderBottom: i < 3 ? "1px solid var(--black)" : "none",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      background: "var(--black)",
                      color: "var(--gold)",
                      padding: "0.75rem 1rem",
                      minWidth: "110px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      padding: "0.75rem 1rem",
                      fontSize: "0.88rem",
                      display: "flex",
                      alignItems: "center",
                      wordBreak: "break-all",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="stats-row">
          {[
            { num: "300+", label: "DSA Problems" },
            { num: "5+", label: "Full-Stack Projects" },
            { num: "2", label: "Internships" },
            { num: "8.94", label: "CGPA / 10.0" },
            { num: "9th", label: "SIH Rank (400+ teams)" },
            { num: "50+", label: "Club Members Led" },
          ].map((s) => (
            <div className="stat-box" key={s.label}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
