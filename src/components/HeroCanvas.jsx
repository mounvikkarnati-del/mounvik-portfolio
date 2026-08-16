import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { personal } from "../data/resume";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
      { to: "/projects", label: "Projects" },
  { to: "/open-source", label: "OSS" },
  { to: "/certifications", label: "Certs" },
  { to: "/achievements", label: "Awards" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          {personal.name.split(" ")[0].toUpperCase()}_DEV
        </Link>
        <ul className="navbar-links">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="hamburger"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span style={{ transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </nav>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
