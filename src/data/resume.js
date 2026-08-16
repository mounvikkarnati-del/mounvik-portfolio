export const personal = {
  name: "Mounvik Karnati",
  title: "Full Stack Developer / Software Engineer",
  tagline: "Building scalable web applications, REST APIs, and reliable backend systems.",
  email: "mounvikkarnati06@gmail.com",
  phone: "+91-9515467198",
  linkedin: "https://in.linkedin.com/in/mounvikkarnati",
  github: "https://github.com/mounvikkarnati",
  portfolio: "https://mounvikkarnati.22web.org",
  summary:
    "Computer Science undergraduate with strong foundations in Full Stack development, backend architecture, and distributed systems. Experienced in building scalable MERN and Java Spring Boot applications, designing RESTful APIs, and solving real-world engineering problems across fintech and web platforms. Strong in data structures, algorithms, and system design. Quick learner with a passion for clean code, high-performance systems, and impactful software across fintech and web domains.",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Vellore Institute of Technology – AP, Andhra Pradesh",
  duration: "Sep 2023 – May 2027 (Expected)",
  cgpa: "8.85 / 10.0",
};

export const skills = {
  Languages: ["JavaScript", "Java", "C/C++", "Python", "TypeScript"],
  Frontend: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Responsive UI/UX"],
  Backend: [
    "Node.js",
    "Express.js",
    "Java (Spring Boot)",
    "REST APIs",
    "Apache Kafka",
    "WebSockets",
  ],
  Databases: [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQL",
    "Query Optimization",
  ],
  "DevOps & Cloud": [
    "Git",
    "GitHub",
    "Docker",
    "Kubernetes",
    "CI/CD Pipelines",
    "AWS (Certified)",
    "GitHub Actions",
  ],
  "System Design & Architecture": [
    "Distributed Systems",
    "Microservices",
    "SOLID Principles",
    "Design Patterns",
    "Low-Level Design",
  ],
  "Core CS": [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "DBMS",
    "Operating Systems",
    "Computer Networks (CCNA)",
  ],
};

export const experience = [
  {
    role: "Software Development Intern",
    company: "Tribha Digital Solutions",
    url: "https://tribhadigital.com/",
    duration: "June 2025 – Jul 2025",
    location: "Hyderabad, India",
    points: [
      "Developed and deployed scalable RESTful APIs using Node.js and Express, handling 5K+ records with optimized indexing and query performance.",
      "Reduced API latency by 30% through modular backend architecture and efficient data handling — reflecting priorities essential in low-latency financial systems.",
      "Collaborated in an Agile environment on backend design, testing, and deployment workflows; participated in code reviews ensuring production-grade stability.",
    ],
  },
];

export const projects = [
  {
    title: "LinkSphere – Distributed Real-Time Chat System",
    url: "https://linksphere-bchat.vercel.app/",
    stack: ["MERN Stack", "Socket.IO", "JWT", "WebSockets"],
    points: [
      "Built a full-stack real-time chat platform with secure JWT authentication and scalable room-based architecture supporting 1,000+ concurrent users.",
      "Designed event-driven messaging with optimized WebSocket communication for low-latency performance.",
      "Architected distributed session and state management, demonstrating core distributed-systems thinking for large-scale, fault-tolerant environments.",
    ],
  },
  {
    title: "RAPO – Event-Driven Payment Processing Platform",
    url: "https://github.com/mounvikkarnati/RAPO",
    stack: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL"],
    points: [
      "Engineered a scalable event-driven backend with Apache Kafka for reliable, high-throughput transaction processing — directly analogous to financial messaging and settlement infrastructure.",
      "Implemented fault-tolerant, idempotent APIs and ACID-compliant PostgreSQL workflows ensuring financial-grade data integrity across concurrent transactions.",
      "Achieved 35% latency reduction via Redis caching and optimized database query pipelines, reflecting performance engineering priorities in high-frequency financial systems.",
    ],
  },
  {
    title: "FinScope – Financial Market Analytics Engine",
    url: "https://github.com/mounvikkarnati",
    stack: ["Python", "Pandas", "PostgreSQL", "Tableau", "yfinance", "Seaborn"],
    points: [
      "Built a financial data pipeline ingesting live and historical stock market data via yfinance API, processing 100K+ OHLCV records with rolling window aggregations and sector-wise performance metrics.",
      "Designed PostgreSQL schemas for normalized storage of multi-ticker data; wrote optimized analytical queries for P&L attribution, volatility clustering, and drawdown analysis.",
      "Produced interactive Tableau dashboards tracking portfolio risk exposure, Sharpe ratio trends, and correlation heatmaps across 20+ equities for actionable investment insights.",
    ],
  },
  {
    title: "StockPulse – Time-Series Stock Price Forecasting",
    url: "https://github.com/mounvikkarnati",
    stack: ["Python", "Flask", "scikit-learn", "Pandas", "PostgreSQL"],
    points: [
      "Built a full-stack financial data analysis platform using Python backend, scikit-learn for statistical modeling, and PostgreSQL for persistent storage of historical market data.",
      "Engineered feature engineering pipeline processing lag variables, technical indicators (RSI, MACD, Bollinger Bands) with pandas; implemented walk-forward validation for robust model evaluation.",
      "Deployed REST API via Flask enabling real-time prediction queries with configurable analysis windows, demonstrating production-grade backend architecture for financial applications.",
    ],
  },
  {
    title: "State Transit Driver Portal",
    url: "https://driver-punjab-roadtransport.netlify.app/",
    stack: ["JavaScript", "WebSockets", "Leaflet.js", "Web APIs"],
    points: [
      "Developed a real-time geospatial tracking application with dynamic UI updates, reducing event propagation latency by 40% through optimized WebSocket pipelines.",
      "Implemented geospatial data processing for accurate live vehicle tracking with a responsive, operationally focused interface.",
    ],
  },
];

export const openSource = [
  {
    name: "EduLinkUp",
    url: "https://github.com/EduLinkUp",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "TipTap", "Radix UI"],
    points: [
      "Invited as an organization member of the EduLinkUp GitHub organization by the maintainer @eccentriccoder01, recognizing the certificate management system independently built for Photon Club, VIT-AP.",
      "Building EduLinkUp's certificate management system to issue certificates to users upon course completion, designing the underlying database schema and project structure from scratch.",
      "Developing REST APIs to fetch and serve certificate and course completion data, integrating with the platform's Next.js/React/TypeScript stack.",
      "Collaborating with a distributed team through GitHub pull requests, code reviews, and issue triage following Agile open-source contribution workflows.",
    ],
  },
];

// Research section removed - portfolio now focused on Full Stack software engineering and fintech projects
export const certifications = [
  {
    name: "Cisco Certified Network Associate (CCNA) – Computer Networks",
    issuer: "Cisco",
    points: [
      "Strong understanding of network architecture, routing & switching, TCP/IP protocols, and network security — essential for building distributed, high-reliability systems.",
      "Applicable to designing scalable backend services, understanding protocol optimization, and architecting secure distributed infrastructure.",
    ],
  },
  {
    name: "Cisco JavaScript Essentials 1 & 2 (JS-1, JS-2)",
    issuer: "Cisco Networking Academy",
    points: [
      "Foundational to advanced JavaScript — DOM manipulation, asynchronous programming, modern APIs, and event-driven architecture.",
      "Core enabler for full-stack development with React, Node.js, and responsive web applications.",
    ],
  },
  {
    name: "AWS Cloud Architecture Certified",
    issuer: "Amazon Web Services",
    points: [
      "Cloud-native development, serverless architectures, containerization, and scalable infrastructure design.",
      "Enables deploying production-grade full-stack applications with high availability, fault tolerance, and global reach.",
    ],
  },
];

export const achievements = [
  "Solved 300+ DSA problems demonstrating strong algorithmic problem-solving and system design capabilities.",
  "Secured 9th place among 400+ teams in the Smart India Hackathon (SIH) Internal Round — recognized for innovative full-stack solution design.",
  "Vice President, Photon Club — led 10+ technical events, mentored junior developers, and managed cross-functional teams of 50+ members.",
  "AWS Certified Cloud Architect & Cisco CCNA — strong cloud and network infrastructure fundamentals for scalable backend systems.",
];
