import Footer from "../components/Footer";
import SkillsCanvas from "../components/SkillsCanvas";
import { skills } from "../data/resume";

const catColors = {
  Languages: "var(--burnt)",
  "OOP & System Design": "var(--teal)",
  Frontend: "var(--gold)",
  Backend: "var(--burnt)",
  "DevOps & Cloud": "var(--teal)",
  "AI/ML": "var(--rust)",
  GenAI: "var(--burnt)",
  "Data Analytics & Science": "var(--teal)",
  Other: "var(--black)",
};

export default function Skills() {
  return (
    <div className="page page-fade" style={{ position: "relative" }}>
      <SkillsCanvas />
      <div className="inner" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-header">
          <div>
            <div className="section-tag">Toolkit</div>
            <h2 className="section-title">Technical Skills</h2>
          </div>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([cat, items]) => (
            <div className="skill-category" key={cat}>
              <div
                className="skill-cat-header"
                style={{ background: catColors[cat] || "var(--black)" }}
              >
                {cat}
              </div>
              <div className="skill-tags">
                {items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend / summary */}
        <div
          style={{
            marginTop: "3rem",
            background: "var(--black)",
            border: "2px solid var(--gold)",
            boxShadow: "6px 6px 0 var(--gold)",
            padding: "1.75rem 2rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "1rem",
            }}
          >
            At a glance
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              color: "var(--white)",
            }}
          >
            {[
              { v: Object.keys(skills).length, l: "Categories" },
              { v: Object.values(skills).flat().length, l: "Technologies" },
              { v: "3", l: "Cloud Certs" },
              { v: "5+", l: "Languages" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--gold)",
                  }}
                >
                  {s.v}
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
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
