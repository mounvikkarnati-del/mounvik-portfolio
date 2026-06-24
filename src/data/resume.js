export const personal = {
  name: "Mounvik Karnati",
  title: "Software Engineer & AI/ML Researcher",
  tagline: "Building systems that scale. Researching models that matter.",
  email: "mounvikkarnati06@gmail.com",
  phone: "+91-9515467198",
  linkedin: "https://in.linkedin.com/in/mounvikkarnati",
  github: "https://github.com/mounvikkarnati",
  portfolio: "https://mounvikkarnati.22web.org",
  summary:
    "Computer Science undergraduate with strong foundations in software engineering, AI/ML, data analytics, and distributed systems. Experienced in building scalable applications, conducting research, and solving real-world problems through development, Data Science and machine learning. Quick learner with a passion for innovation, high-performance systems, and impactful technology across fintech, AI, and software domains.",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Vellore Institute of Technology – AP, Andhra Pradesh",
  duration: "Sep 2023 – May 2027 (Expected)",
  cgpa: "8.85 / 10.0",
};

export const skills = {
  Languages: ["C/C++", "Java", "JavaScript", "Python"],
  "OOP & System Design": [
    "SOLID Principles",
    "Design Patterns",
    "Microservices",
    "Low-Level Design",
  ],
  Frontend: ["HTML", "CSS", "React.js", "Next.js", "Responsive UI Design"],
  Backend: [
    "Node.js",
    "Express.js",
    "Java (Spring Boot)",
    "REST APIs",
    "Apache Kafka",
    "MongoDB",
  ],
  "DevOps & Cloud": [
    "Git",
    "GitHub",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "AWS (Certified)",
  ],
  "AI/ML": ["Machine Learning", "Deep Learning", "CNN", "Transformers"],
  GenAI: ["LLMs", "Prompt Engineering", "CLIP", "Hugging Face"],
  "Data Analytics & Science": [
    "SQL",
    "Tableau",
    "Pandas",
    "Statistical Modeling",
  ],
  Other: [
    "WebSockets",
    "Distributed Systems",
    "CI/CD Pipelines",
    "Python Scripting",
    "Networking (CCNA)",
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
    stack: ["Python", "LSTM", "Prophet", "scikit-learn", "Pandas", "Flask"],
    points: [
      "Engineered a multi-model time-series forecasting system comparing LSTM and Facebook Prophet on 5 years of NIFTY 50 stock data, achieving RMSE of 18.4 on 30-day price prediction horizons.",
      "Applied feature engineering on lag variables, RSI, MACD, and Bollinger Bands; used walk-forward validation to prevent data leakage across temporal splits.",
      "Deployed inference via a Flask REST API with configurable prediction windows, demonstrating production-grade ML serving for financial time-series applications.",
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
      "Invited as an organization member of the EduLinkUp GitHub organization by the maintainer @eccentriccoder01, recognizing consistent high-quality contributions.",
      "Delivered full-stack features: glassmorphic UI components (React + Tailwind CSS), RESTful API integrations, community forum enhancements (TipTap rich text editor), and course management modules.",
      "Collaborated with a distributed team through GitHub pull requests, code reviews, and issue triage following Agile open-source contribution workflows.",
      "Platform supports 24/7 course access, AI-powered learning paths, interactive community discussions, and real-time progress tracking for thousands of students.",
    ],
  },
];

export const research = [
  {
    title: "Web-Scale Multimodal Summarization using CLIP-Based Semantic Alignment",
    doi: "https://doi.org/10.48550/arXiv.2602.14889",
    venue: "arXiv Preprint",
    points: [
      "Developed a web-scale multimodal summarization framework integrating web, news, and image retrieval with CLIP-based semantic ranking.",
      "Achieved 96.99% accuracy and 0.927 ROC-AUC using fine-tuned CLIP models for multimodal text-image alignment.",
    ],
  },
  {
    title: "Accuracy-Constrained CNN Pruning for Efficient and Reliable EEG-Based Seizure Detection",
    doi: "https://doi.org/10.48550/arXiv.2509.05190",
    venue: "arXiv Preprint",
    points: [
      "Developed a lightweight 1D-CNN model for EEG-based seizure detection using structured pruning and mild early stopping techniques.",
      "Reduced model weights and memory by 50% while maintaining 92.87% precision and improving macro-F1 performance.",
    ],
  },
  {
    title: "Improving Real-Time Concept Drift Detection using a Hybrid Transformer-Autoencoder Framework",
    doi: "https://doi.org/10.48550/arXiv.2508.07085",
    venue: "arXiv Preprint",
    points: [
      "Developed a hybrid Transformer-Autoencoder framework for real-time concept drift detection in time-sequenced machine learning applications.",
      "Designed a Trust Score system combining drift metrics, uncertainty, and rule violations for earlier and interpretable drift detection.",
    ],
  },
  {
    title: "Eliminating Redundancy in EEG Seizure Models Through Precision-Aware CNN Compression",
    doi: "https://doi.org/10.1109/ESIC68176.2026.11495868",
    venue: "IEEE International Conference (Published)",
    points: [
      "Designed a lightweight 1D-CNN architecture for EEG seizure detection with improved efficiency for low-resource clinical environments.",
      "Applied structured pruning to reduce model parameters and memory by 50% while maintaining high predictive performance.",
    ],
  },
];

export const certifications = [
  {
    name: "Cisco Certified Network Associate (CCNA) – Computer Networks",
    issuer: "Cisco",
    points: [
      "Strong understanding of network architecture, routing & switching, TCP/IP protocols, and network security — applicable to distributed, high-reliability backend infrastructure.",
      "Relevant for building secure, scalable backend services operating across global, low-latency financial networks.",
    ],
  },
  {
    name: "Cisco JavaScript Essentials 1 & 2 (JS-1, JS-2)",
    issuer: "Cisco Networking Academy",
    points: [
      "Foundational to advanced JavaScript — DOM manipulation, asynchronous programming, modern APIs, enabling scalable full-stack development.",
      "Applied in building interactive, responsive frontends for high-concurrency user experiences.",
    ],
  },
  {
    name: "AWS Cloud Architecture Certified",
    issuer: "Amazon Web Services",
    points: [
      "Cloud-native development fundamentals applicable to service-oriented, high-availability architectures in large-scale financial systems.",
    ],
  },
  {
    name: "Cisco Networking Academy Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    points: [
      "Earned certification, learning Excel, SQL, and Tableau for data analysis and visualization.",
      "Built a movie dataset analytics project using SQL, Excel, and Tableau dashboards to generate meaningful business insights.",
    ],
  },
  {
    name: "Cisco Networking Academy Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    points: [
      "Completed introductory Data Science course, learning fundamentals of data analytics, engineering, and machine learning concepts.",
      "Explored real-world applications of data science in business, healthcare, and education to understand data-driven decision making.",
    ],
  },
];

export const achievements = [
  "Solved 300+ DSA problems on LeetCode, demonstrating strong algorithmic problem-solving essential for large-scale financial engineering systems.",
  "2 research papers accepted at IEEE international conferences (Delhi Section & Bhubaneswar Section); multiple preprints on arXiv; recognized as an arXiv CS endorser.",
  "Secured 9th place among 400+ teams in the Smart India Hackathon (SIH) Internal Round.",
  "Vice President, Photon Club — led 10+ technical events and managed cross-functional teams of 50+ members.",
];
