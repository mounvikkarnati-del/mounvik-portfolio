import { useState } from "react";
import Footer from "../components/Footer";
import { projects } from "../data/resume";

const allStacks = [...new Set(projects.flatMap((p) => p.stack))];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.stack.includes(filter));

  const topFilters = ["All", "Python", "Java", "JavaScript", "MERN Stack", "Spring Boot", "Apache Kafka"];

  return (
    <div className="page page-fade">
      <div className="inner">
        <div className="section-header">
          <div>
            <div className="section-tag">Builds</div>
            <h2 className="section-title">Projects</h2>
          </div>
        </div>

        {/* Filter bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {topFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.45rem 1rem",
                border: "2px solid var(--black)",
                background: filter === f ? "var(--black)" : "var(--off)",
                color: filter === f ? "var(--gold)" : "var(--black)",
                cursor: "pointer",
                boxShadow: filter === f ? "3px 3px 0 var(--burnt)" : "2px 2px 0 var(--black)",
                transition: "all 0.12s",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((proj, i) => (
            <div className="project-card" key={i}>
              <div className="project-card-top">
                <div className="project-title">{proj.title}</div>
                <div className="project-stack">
                  {proj.stack.map((t) => (
                    <span className="project-tech" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-body">
                <ul className="project-points">
                  {proj.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="project-footer">
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ fontSize: "0.7rem", padding: "0.5rem 1.25rem" }}
                >
                  View Project ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "4rem",
              fontFamily: "var(--font-display)",
              color: "#888",
              border: "2px dashed var(--black)",
            }}
          >
            No projects match this filter.
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
