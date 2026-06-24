import { Link } from "react-router-dom";
import HeroCanvas from "../components/HeroCanvas";
import Footer from "../components/Footer";
import { personal, education, achievements } from "../data/resume";

export default function Home() {
  return (
    <div className="page page-fade">
      <div className="hero">
        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-eyebrow">AVAILABLE FOR OPPORTUNITIES</div>

          <h1 className="hero-name">
            {personal.name.split(" ")[0]}
            <span>{personal.name.split(" ")[1]}</span>
          </h1>

          <div className="hero-title">{personal.title}</div>

          <p className="hero-tagline">{personal.tagline}</p>

          <div className="hero-ctas">
            <Link to="/projects" className="btn btn-primary">
              View Projects →
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get In Touch
            </Link>
          </div>

          {/* Quick stats */}
          <div
            style={{
              marginTop: "3rem",
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "0.75rem",
              borderTop: "2px solid rgba(255,206,27,0.25)",
              paddingTop: "2rem",
            }}
          >
            {[
              { v: "300+", l: "LeetCode" },
              { v: "4", l: "Papers" },
              { v: "8.85", l: "CGPA" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.6rem",
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
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(248,244,239,0.5)",
                    marginTop: "0.15rem",
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Three.js */}
        <div className="hero-right">
          <HeroCanvas />

          {/* Overlay badge */}
          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "2rem",
              background: "var(--black)",
              border: "2px solid var(--gold)",
              boxShadow: "4px 4px 0 var(--gold)",
              padding: "0.9rem 1.4rem",
              zIndex: 10,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--teal)",
                marginBottom: "0.3rem",
              }}
            >
              Currently @ VIT-AP
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.85rem",
                color: "var(--white)",
              }}
            >
              {education.degree}
            </div>
          </div>

          {/* Corner tag */}
          <div
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "var(--gold)",
              border: "2px solid var(--black)",
              boxShadow: "3px 3px 0 var(--black)",
              padding: "0.4rem 0.9rem",
              fontFamily: "var(--font-display)",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              zIndex: 10,
            }}
          >
            CS &apos;27
          </div>
        </div>
      </div>

      {/* Quick nav strip */}
      <div
        style={{
          background: "var(--black)",
          borderTop: "2px solid var(--burnt)",
          borderBottom: "2px solid var(--burnt)",
          display: "flex",
          overflowX: "auto",
        }}
      >
        {[
          { to: "/about", label: "01 / About" },
          { to: "/skills", label: "02 / Skills" },
          { to: "/experience", label: "03 / Experience" },
          { to: "/projects", label: "04 / Projects" },
          { to: "/research", label: "05 / Research" },
          { to: "/achievements", label: "06 / Awards" },
          { to: "/contact", label: "07 / Contact" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(248,244,239,0.6)",
              padding: "1rem 2rem",
              borderRight: "1px solid rgba(255,255,255,0.08)",
              whiteSpace: "nowrap",
              transition: "color 0.15s, background 0.15s",
              display: "block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--gold)";
              e.currentTarget.style.background = "rgba(255,206,27,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(248,244,239,0.6)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
