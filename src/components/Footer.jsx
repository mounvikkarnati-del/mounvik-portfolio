import { personal } from "../data/resume";

const marqueeItems = [
  "Software Engineer", "AI/ML Researcher", "Full Stack Dev",
  "Distributed Systems", "Open Source Contributor", "IEEE Author",
  "VIT-AP", "AWS Certified", "CCNA Certified", "300+ LeetCode",
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
