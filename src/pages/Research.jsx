import Footer from "../components/Footer";
import { research } from "../data/resume";

export default function Research() {
  return (
    <div className="page page-fade">
      <div className="inner">
        <div className="section-header">
          <div>
            <div className="section-tag">Publications</div>
            <h2 className="section-title">Research Papers</h2>
          </div>
        </div>

        {/* Badge row */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {[
            { v: "2", l: "IEEE Conference Papers", color: "var(--teal)" },
            { v: "2+", l: "arXiv Preprints", color: "var(--burnt)" },
            { v: "CS", l: "arXiv Endorser", color: "var(--gold)" },
          ].map((b) => (
            <div
              key={b.l}
              style={{
                border: "2px solid var(--black)",
                background: b.color,
                boxShadow: "4px 4px 0 var(--black)",
                padding: "0.75rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: b.color === "var(--gold)" ? "var(--black)" : "var(--white)",
                  lineHeight: 1,
                }}
              >
                {b.v}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: b.color === "var(--gold)" ? "var(--black)" : "rgba(248,244,239,0.8)",
                }}
              >
                {b.l}
              </div>
            </div>
          ))}
        </div>

        <div className="research-list">
          {research.map((paper, i) => (
            <div className="research-card" key={i}>
              <div className="research-card-header">
                <div className="research-title">{paper.title}</div>
                <span className="research-venue">{paper.venue}</span>
              </div>
              <div className="research-body">
                <ul className="research-points">
                  {paper.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
                <div style={{ marginTop: "1rem" }}>
                  <a
                    href={paper.doi}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-teal"
                    style={{ fontSize: "0.7rem", padding: "0.5rem 1.25rem" }}
                  >
                    Read Paper ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
