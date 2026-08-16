import Footer from "../components/Footer";
import { certifications } from "../data/resume";

const issuers = {
  Cisco: "#1BA0D7",
  "Cisco Networking Academy": "#1BA0D7",
  "Amazon Web Services": "#FF9900",
};

export default function Certifications() {
  return (
    <div className="page page-fade">
      <div className="inner">
        <div className="section-header">
          <div>
            <div className="section-tag">Credentials</div>
            <h2 className="section-title">Certifications</h2>
          </div>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-header">
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="cert-name">{cert.name}</div>
              </div>
              <ul className="cert-body">
                {cert.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Summary bar */}
        <div
          style={{
            marginTop: "3rem",
            background: "var(--black)",
            border: "2px solid var(--teal)",
            boxShadow: "6px 6px 0 var(--teal)",
            padding: "1.75rem 2rem",
            display: "flex",
            gap: "3rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--teal)",
            }}
          >
            Certified By
          </div>
          {["Cisco", "Amazon Web Services"].map((org) => (
            <div
              key={org}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.85rem",
                color: "var(--white)",
                padding: "0.4rem 1rem",
                border: "1.5px solid rgba(248,244,239,0.2)",
              }}
            >
              {org}
            </div>
          ))}
          <div style={{ marginLeft: "auto", textAlign: "right" }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--gold)",
                lineHeight: 1,
              }}
            >
              {certifications.length}
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(248,244,239,0.5)",
              }}
            >
              Total Certs
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
