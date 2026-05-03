export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  link?: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl: string;
  image: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
};

export type Education = {
  school: string;
  program: string;
  period: string;
  location: string;
  details: string;
  score?: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type ProfileHighlight = {
  platform: string;
  summary: string;
  metric: string;
  link: string;
};

export type Insight = {
  title: string;
  summary: string;
  link: string;
};

export const heroContent = {
  name: "Aman Kumar",
  headline: "New-grad SDE | Full-Stack Developer | SDE-1 Aspirant",
  subline:
    "New-grad SDE with 1906 LeetCode rating and production experience shipping Next.js + Django features for 60k+ user fintech workflows. Final-year B.Tech CSE (AI & DS) student at IIIT Manipur. Seeking full-time SDE-1 roles.",
  availability: "Available for full-time SDE-1 roles",
  location: "Mumbai • Open to relocation",
  avatar: "https://drive.google.com/uc?export=view&id=168GS1NogGpAoDTxYaFrEeg276_UkPgE4",
  ctaPrimary: {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/aman931120/",
  },
  ctaSecondary: {
    label: "View GitHub",
    href: "https://github.com/akt9802",
  },
  ctaThird: {
    label: "View Resume",
    href: "https://drive.google.com/file/d/18l79ZlWN5KROMAsdBezk6uL_QYEXv3hv/view?usp=sharing",
  },
};

export const stats = [
  { label: "LeetCode Rating", value: "1906" },
  { label: "LeetCode Problems Solved", value: "1000+" },
  { label: "Codeforces Rating", value: "1455" },
  { label: "Contest Achievement", value: "LeetCode Rank 563" },
  { label: "Current Role", value: "SDE Intern" },
  { label: "Years of Coding", value: "3+" },
];

export const experiences: Experience[] = [
  {
    company: "Saarathi Finance",
    role: "SDE Intern",
    period: "Aug 2025 – Present",
    location: "Mumbai",
    summary:
      "Developed core backend and frontend features for Telecaller Workflow, Data Collection, and Policy Manager modules using Django, Next.js and TypeScript.",
    bullets: [
      "Developed core backend and frontend features for Telecaller Workflow, Data Collection, and Policy Manager modules using Django, Next.js and TypeScript; built scalable APIs serving 60k+ customer records.",
      "Designed and implemented 100+ REST APIs with validation, retries, and error handling, reducing production submission failures while optimizing Next.js performance.",
      "Debugged and resolved 10+ production issues on live systems, improving internal tool reliability.",
    ],
    link: "https://www.saarathifinance.com/",
  },
  {
    company: "MyRevue",
    role: "Frontend Intern",
    period: "Oct 2024 – Feb 2025",
    location: "Remote",
    summary:
      "Implemented production-ready React frontend components and led user research with interactive Figma prototypes.",
    bullets: [
      "Implemented production-ready React frontend components that improved interface responsiveness and delivered a significantly more polished user experience.",
      "Led user research and developed interactive Figma prototypes; collaborated with the team to iterate designs, resulting in significantly improved website usability and layout consistency.",
    ],
    link: "https://myrevue.app/",
  },
];

export const projects: Project[] = [
  {
    title: "Prasikshan — SSB Preparation Platform",
    description:
      "Built a full-stack SSB preparation platform with 7 test modules, currently used by 20+ active users. Features JWT authentication, OTP-based password recovery, dual-layer Redis rate limiting, Redis-based session caching, AI-powered test review via FastAPI microservice with Azure OpenAI, performance analytics, leaderboards, and an admin CMS. Containerized with Docker and Nginx.",
    stack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Redis",
      "JWT",
      "Tailwind CSS",
      "FastAPI",
      "Azure OpenAI",
      "Docker",
      "Nginx",
    ],
    liveUrl: "https://www.prasikshan.akt9802.in/",
    repoUrl: "https://github.com/akt9802/prasikshan",
    image: "/prasikshan.png",
  },
  {
    title: "FinSense — Intelligent Financial Analysis Platform",
    description:
      "A premium financial analytics platform for smarter spending decisions. Features expense tracking with category/merchant details, recurring expense automation, monthly budget planning with budget-vs-actual tracking, JWT-based auth with bcrypt, and a modern glassmorphism UI with animated components.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Docker",
      "Nginx",
    ],
    liveUrl: "https://finsense.akt9802.in/",
    repoUrl: "https://github.com/akt9802/FinSense",
    image: "/finsense.png",
  },
  {
    title: "LocalSearch++ — Local Search Engine",
    description:
      "Built a local document search engine in C++ that crawls .txt files recursively, performs text normalization, tokenization, stopword removal, and builds inverted & positional indexes for fast keyword and exact phrase search. Implemented TF-IDF relevance ranking and a CLI-based search tool with flat-file index persistence to enable index-once, query-many and faster startup by loading prebuilt indexes.",
    stack: ["C++", "Inverted Index", "TF-IDF", "File I/O", "Data Structures"],
    repoUrl: "https://github.com/akt9802/localsearch",
    image: "https://opengraph.githubassets.com/1/akt9802/localsearch-plus-plus",
  },
];

export const education: Education[] = [
  {
    school: "Indian Institute of Information Technology, Manipur",
    program: "B.Tech • Computer Science and Engineering (AI & DS)",
    period: "2022 – Expected May 2026",
    location: "Manipur, India",
    details: "Final-year student with strong foundations in Data Structures, Algorithms, OOP, DBMS, OS, and Computer Networks.",
    score: "CGPA: 7.9",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Core CS Fundamentals",
    items: ["Data Structures & Algorithms", "OOPs", "DBMS", "OS", "Computer Networks"],
  },
  {
    title: "Programming Languages",
    items: ["C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Django", "RESTful APIs"],
  },
  {
    title: "Databases & Storage",
    items: ["MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Deployment & DevOps",
    items: ["Docker", "Vercel", "Render", "GitHub Actions"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Figma", "Linux"],
  },
];

export const profileHighlights: ProfileHighlight[] = [
  {
    platform: "LeetCode",
    summary: "Solved 1000+ DSA problems with consistent problem-solving approach.",
    metric: "Max rating 1906 (Knight)",
    link: "https://leetcode.com/akt9802",
  },
  {
    platform: "Codeforces",
    summary: "Active competitive programmer with Specialist rank on Codeforces.",
    metric: "Max Rating 1455 (Specialist)",
    link: "https://codeforces.com/profile/akt9802",
  },
  {
    platform: "LeetCode Contests",
    summary: "Global Rank 563 in LeetCode Weekly Contest 460.",
    metric: "Top performers globally",
    link: "https://leetcode.com/akt9802",
  },
];

export const insights: Insight[] = [
  {
    title: "LeetCode Weekly Contest 460: Global Rank 563",
    summary:
      "Achieved a global rank of 563 among thousands of participants in LeetCode Weekly Contest 460.",
    link: "https://leetcode.com/akt9802",
  },
  {
    title: "GFG: Rank 1 in College",
    summary:
      "Ranked 1st in college on GeeksforGeeks, demonstrating consistent problem-solving excellence.",
    link: "https://auth.geeksforgeeks.org/user/akt9802/practice",
  },
  {
    title: "Central India Hackathon (CIH): Finalist",
    summary:
      "Achieved finalist recognition among 2,000+ teams at the Central India Hackathon.",
    link: "https://www.linkedin.com/in/aman931120/",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "akt9802@gmail.com",
    href: "mailto:akt9802@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 93112 09203",
    href: "tel:+919311209203",
  },
  {
    label: "GitHub",
    value: "github.com/akt9802",
    href: "https://github.com/akt9802",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/akt9802",
    href: "https://www.linkedin.com/in/aman931120/",
  },
];
