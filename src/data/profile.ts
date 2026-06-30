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
  link?: string;
};

export type Insight = {
  title: string;
  summary: string;
  link: string;
};

export const heroContent = {
  name: "Nayan Jyoti Bhattarai",
  headline: "Software Developer | Full-Stack Developer",
  subline:
    "Computer Science and Engineering student at IIIT Senapati, Manipur, building production-ready web apps with React, Next.js, TypeScript, Node.js, and modern backend tooling.",
  availability: "Open to software developer roles",
  location: "Bengaluru • Open to relocation",
  avatar: "/nayan_latest.png",

  ctaPrimary: {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/nayan-jyoti-bhattarai/",
  },

  ctaSecondary: {
    label: "View GitHub",
    href: "https://github.com/Nayan9854",
  },

  ctaThird: {
    label: "Resume",
    href: "/Nayan_one.pdf",   
  },
};

export const stats = [
  { label: "LeetCode Problems", value: "1100+" },
  { label: "LeetCode Rating", value: "1906" },
  { label: "CodeChef Rating", value: "1801" },
  { label: "Hackathon Win", value: "Ahouba 2025" },
  { label: "Current Role", value: "Software Developer Intern" },
  { label: "Years of Coding", value: "3+" },
];

export const experiences: Experience[] = [
  {
    company: "Wyreflow Technologies",
    role: "Software Developer Intern",
    period: "Feb 2026 – May 2026",
    location: "Remote",
    summary:
      "Engineered responsive recruitment platform interfaces and improved production workflows with React.js, TypeScript, Tailwind CSS, and Razorpay.",
    link: "https://wyreflow.com/",
    bullets: [
      "Engineered 50+ Figma designs into production-ready, responsive interfaces using React.js, TypeScript, and Tailwind CSS for a large-scale recruitment platform.",
      "Improved page load times of key pages by approximately 20–30% through lazy loading, component memoization, code splitting, and rendering optimizations.",
      "Integrated secure payment workflows using Razorpay and collaborated with QA to resolve 100+ frontend issues, improving stability and user experience.",
      "Led an 8-member team, coordinating feature implementation, pull request reviews, and sprint deliverables.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Sentinel — CRPF Personnel & Weapon Management System",
    description:
      "Built a full-stack platform for secure management of personnel records, weapon inventories, and duty assignments for CRPF operations. Implemented role-based JWT authentication, dashboards, and real-time messaging.",
    stack: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Socket.io"],
    liveUrl: "https://sentinel-frontend-mu.vercel.app/",
    repoUrl: "https://github.com/Nayan9854/crpf",
    image: "/sentinel.png",
  },
  {
    title: "BookShare — Peer-to-Peer Book Sharing Platform",
    description:
      "Built a full-stack platform enabling users to lend, borrow, and track books with real-time availability and doorstep delivery. Implemented JWT auth, role-based authorization, secure Stripe payments, and PostgreSQL persistence.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "JWT", "Stripe"],
    liveUrl: "https://book-share-madhav060s-projects.vercel.app/",
    repoUrl: "https://github.com/Nayan9854/BookShare",
    image: "/bookshare.png",
  },
  {
    title: "The Canvas",
    description:
      "A web-based graphic design and content creation platform that mirrors the core functionality of Canva. Built with TypeScript, Stripe, Google auth, and GitHub authentication.",
    stack: ["TypeScript", "Stripe", "Google Auth", "GitHub Auth", "Canva-like Editor"],
    liveUrl: "https://canva-clone-ali.vercel.app/",
    repoUrl: "https://github.com/Nayan9854/canva-clone",
    image: "/canvaclone.png",
  },
];

export const education: Education[] = [
  {
    school: "Indian Institute of Information Technology, Senapati, Manipur",
    program: "Bachelor of Technology • Computer Science and Engineering",
    period: "2022 – 2026",
    location: "Manipur, India",
    details: "Bachelor of Technology in Computer Science and Engineering with a focus on software development, product engineering, and core CS fundamentals.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["C++", "TypeScript", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Auth & ORM",
    items: ["JWT", "Auth.js", "Prisma", "Drizzle ORM"],
  },
  {
    title: "Cloud & Tools",
    items: ["AWS", "Git", "GitHub", "Postman", "Cloudinary"],
  },
  {
    title: "Core CS",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Linux"],
  },
];

export const profileHighlights: ProfileHighlight[] = [
  {
    platform: "LeetCode",
    summary: "Solved 1100+ algorithmic and data structure problems.",
    metric: "Max rating 1906 (Knight)",
    link: "https://leetcode.com/u/akt9802/",
  },
  {
    platform: "CodeChef",
    summary: "Rated 4-star with strong contest performance.",
    metric: "Max rating 1801",
    link: "https://www.codechef.com/users/iiitm_cse_60",
  },
  {
    platform: "Hackathons",
    summary: "Won Ahouba 2025 with a 4-member team building an AI-driven real-time energy management system.",
    metric: "Winner",
  },
];

export const insights: Insight[] = [
  {
    title: "LeetCode: Knight Level",
    summary: "Reached a maximum LeetCode rating of 1906 while solving 1100+ problems.",
    link: "https://leetcode.com/u/akt9802/",
  },
  {
    title: "CodeChef: 4-Star",
    summary: "Achieved a maximum CodeChef rating of 1801.",
    link: "https://www.codechef.com/users/iiitm_cse_60",
  },
  {
    title: "Ahouba 2025 Winner",
    summary: "Led a 4-member team to win a hackathon project focused on real-time energy management.",
    link: "https://www.linkedin.com/in/nayan-jyoti-bhattarai/",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "nayan9854bhattarai@gmail.com",
    href: "mailto:nayan9854bhattarai@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 99289 14557",
    href: "tel:+919928914557",
  },
  {
    label: "GitHub",
    value: "github.com/Nayan9854",
    href: "https://github.com/Nayan9854",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nayan-jyoti-bhattarai",
    href: "https://www.linkedin.com/in/nayan-jyoti-bhattarai/",
  },
];
