import { personal } from "../data/resume";

const marqueeItems = [
  "Full Stack Developer", "Backend Engineer", "Frontend Developer",
  "Distributed Systems", "Open Source Contributor", "AWS Certified",
  "VIT-AP", "Software Engineer", "CCNA Certified", "300+ DSA",
];

export default function Footer() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <>
      <div className="marquee-bar">
        <div className="marquee-inner">
          {doubled.map((item, i) => (
            <span key={i}>
              {item}
              <span className="dot"> ◆ </span>
            </span>
          ))}
        </div>
      </div>
      <footer className="footer">
        <span className="footer-copy">
          © 2025 {personal.name} — All rights reserved
        </span>
        <span className="footer-tag">BUILT WITH REACT + THREE.JS</span>
      </footer>
    </>
  );
}
