import Footer from "../components/Footer";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <div className="page page-fade">
      <div className="inner">
        <div className="section-header">
          <div>
            <div className="section-tag">Work History</div>
            <h2 className="section-title">Experience</h2>
          </div>
        </div>

        {experience.map((exp, i) => (
          <div className="exp-card" key={i}>
            <div className="exp-header">
              <div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "underline", textDecorationColor: "rgba(255,206,27,0.4)" }}
                  >
                    {exp.company} ↗
                  </a>
                </div>
              </div>
              <div className="exp-meta">
                <div className="exp-duration">{exp.duration}</div>
                <div className="exp-location">{exp.location}</div>
              </div>
            </div>
            <div className="exp-body">
              <ul className="exp-points">
                {exp.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Timeline note */}
        <div
          style={{
            marginTop: "2rem",
            border: "2px solid var(--black)",
            background: "var(--off)",
            boxShadow: "4px 4px 0 var(--black)",
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "var(--teal)",
              color: "var(--white)",
              fontFamily: "var(--font-display)",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "0.5rem 1rem",
              border: "2px solid var(--black)",
              boxShadow: "3px 3px 0 var(--black)",
              whiteSpace: "nowrap",
            }}
          >
            Currently
          </div>
          <div style={{ fontSize: "0.95rem", color: "#2a2a2a" }}>
            Pursuing B.Tech at VIT-AP (2023–2027) — actively seeking Summer
            2026 internships in Full Stack Development and Fintech domains.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
