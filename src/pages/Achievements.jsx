import Footer from "../components/Footer";
import { achievements } from "../data/resume";

const icons = ["🏆", "📄", "🥇", "👑"];

export default function Achievements() {
  return (
    <div className="page page-fade">
      <div className="inner">
        <div className="section-header">
          <div>
            <div className="section-tag">Highlights</div>
            <h2 className="section-title">Achievements</h2>
          </div>
        </div>

        <div className="achievements-list">
          {achievements.map((item, i) => (
            <div className="achievement-item" key={i}>
              <div className="achievement-number">{icons[i] || "★"}</div>
              <div className="achievement-text">{item}</div>
            </div>
          ))}
        </div>

        {/* Decorative block */}
        <div
          style={{
            marginTop: "3rem",
            background: "var(--gold)",
            border: "3px solid var(--black)",
            boxShadow: "8px 8px 0 var(--black)",
            padding: "2rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--black)",
              opacity: 0.6,
              marginBottom: "0.5rem",
            }}
          >
            Current Focus
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              color: "var(--black)",
              fontWeight: 700,
              lineHeight: 1.4,
            }}
          >
            Targeting Top-Tier Internships in Full Stack Development & Fintech
          </div>
          <div
            style={{
              marginTop: "1rem",
              fontSize: "0.9rem",
              color: "rgba(13,13,13,0.7)",
              lineHeight: 1.7,
            }}
          >
            Actively contributing to research, open source, and competitive programming while
            maintaining a CGPA of 8.85 at VIT-AP.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
