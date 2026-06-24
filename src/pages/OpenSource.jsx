import Footer from "../components/Footer";
import { openSource } from "../data/resume";

export default function OpenSource() {
  return (
    <div className="page page-fade">
      <div className="inner">
        <div className="section-header">
          <div>
            <div className="section-tag">Community</div>
            <h2 className="section-title">Open Source</h2>
          </div>
        </div>

        <p
          style={{
            fontSize: "1.05rem",
            color: "#444",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
            maxWidth: "680px",
          }}
        >
          Contributing to open-source is where I sharpen collaboration skills,
          practice production-grade code quality, and give back to the developer
          community.
        </p>

        {openSource.map((oss, i) => (
          <div className="oss-card" key={i} style={{ marginBottom: "2rem" }}>
            <div className="oss-header">
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--black)",
                    opacity: 0.6,
                    marginBottom: "0.35rem",
                  }}
                >
                  Organization Member
                </div>
                <div className="oss-name">{oss.name}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a
                  href={oss.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ fontSize: "0.7rem", padding: "0.5rem 1.25rem" }}
                >
                  View on GitHub ↗
                </a>
              </div>
            </div>

            {/* Stack */}
            <div
              style={{
                background: "var(--black)",
                padding: "0.75rem 2rem",
                borderBottom: "2px solid var(--black)",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {oss.stack.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.65rem",
                    padding: "0.2rem 0.6rem",
                    border: "1px solid var(--teal)",
                    color: "var(--teal)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="oss-body">
              <ul className="exp-points">
                {oss.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Call to collaborate */}
        <div
          style={{
            background: "var(--teal)",
            border: "3px solid var(--black)",
            boxShadow: "6px 6px 0 var(--black)",
            padding: "2rem",
            marginTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                color: "var(--white)",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              Want to collaborate on an open-source project?
            </div>
            <div style={{ color: "rgba(248,244,239,0.8)", fontSize: "0.9rem" }}>
              I'm always open to interesting OSS contributions and collabs.
            </div>
          </div>
          <a
            href="https://github.com/mounvikkarnati"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            My GitHub ↗
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
