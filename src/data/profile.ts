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
  headline: "Final-Year B.Tech CSE | MERN Stack Developer | SDE Aspirant",
  subline:
    "Final-year B.Tech CSE student (AI & DS specialization) at IIIT Manipur with strong foundations in Data Structures, Algorithms, and MERN stack development. Experienced in building scalable, responsive web applications and REST APIs. Seeking SDE roles to build high-performance software solutions.",
  availability: "Available for full-time SDE roles",
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
  { label: "LeetCode rating", value: "1867" },
  { label: "LeetCode Problems Solved", value: "900+" },
  { label: "GeeksforGeeks Problems", value: "700+" },
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
      "Building responsive frontend features for financial applications and contributing to telecaller platform development.",
    bullets: [
      "Built and optimized responsive frontend features for financial applications using Next.js and JavaScript.",
      "Integrated Django templates with backend workflows for seamless data handling and API integration.",
      "Developed UI flows for telecaller application with RESTful API integration and performance optimization.",
      "Ensured maintainable, performant, and user-friendly interfaces for production applications.",
    ],
    link: "https://www.saarathifinance.com/",
  },
  {
    company: "MyRevue",
    role: "Intern",
    period: "Oct 2024 – Feb 2025",
    location: "Remote",
    summary:
      "Conducted user research and optimized digital content for enhanced user experience.",
    bullets: [
      "Conducted comprehensive user research, wireframing, and prototyping to improve website design.",
      "Enhanced user experience through iterative design improvements and usability testing.",
      "Edited and optimized video content for enhanced visual storytelling and audience engagement.",
      "Collaborated with cross-functional teams to align design decisions with business objectives.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Prasikshan — SSB Preparation Platform",
    description:
      "Developed a responsive SSB preparation platform supporting 25+ daily active users with timers, image prompts, and scalable architecture. Implemented using MERN stack achieving 100% mobile responsiveness and 35% reduction in page load time.",
    stack: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    repoUrl: "https://github.com/akt9802/prasikshan",
    image:
      "https://opengraph.githubassets.com/1/akt9802/prasikshan",
  },
  {
    title: "LocalSearch++ — Local Search Engine",
    description:
      "Built a local search engine in C++ using inverted and positional indexing for fast keyword and exact phrase search. Implemented TF-IDF based relevance ranking with flat-file index persistence enabling efficient index reuse and low-latency query processing.",
    stack: ["C++", "Inverted Index", "TF-IDF", "File I/O", "Data Structures"],
    repoUrl: "https://github.com/akt9802/localsearch",
    image: "https://opengraph.githubassets.com/1/akt9802/localsearch-plus-plus",
  },
];

export const education: Education[] = [
  {
    school: "Indian Institute of Information Technology, Manipur",
    program: "B.Tech • Computer Science and Engineering (AI & DS)",
    period: "2022 – Present",
    location: "Manipur, India",
    details: "Final-year student with strong foundations in Data Structures, Algorithms, OOP, DBMS, OS, and Computer Networks.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Core CS Fundamentals",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "OS", "Computer Networks"],
  },
  {
    title: "Programming Languages",
    items: ["C++", "JavaScript", "TypeScript", "Python", "Dart"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "Flutter", "HTML", "CSS", "Tailwind", "Bootstrap", "Recoil"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Middleware"],
  },
  {
    title: "Databases & Storage",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Deployment & Hosting",
    items: ["Vercel", "Render", "GitHub Actions"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Figma", "Linux", "VS Code"],
  },
];

export const profileHighlights: ProfileHighlight[] = [
  {
    platform: "LeetCode",
    summary: "Solved 900+ problems with consistent problem-solving approach.",
    metric: "Max rating 1867 (Knight)",
    link: "https://leetcode.com/akt9802",
  },
  {
    platform: "GeeksforGeeks",
    summary: "Solved 700+ DSA problems across various topics and difficulty levels.",
    metric: "3 Stars rating",
    link: "https://auth.geeksforgeeks.org/user/akt9802/practice",
  },
  {
    platform: "LeetCode Contests",
    summary: "Global Rank 563 in LeetCode Weekly Contest 460.",
    metric: "Top 1000 performers",
    link: "https://leetcode.com/akt9802",
  },
];

export const insights: Insight[] = [
  {
    title: "Building Scalable MERN Applications",
    summary:
      "Lessons from developing production-grade SSB preparation platform with 25+ daily active users.",
    link: "https://www.linkedin.com/in/aman931120/",
  },
  {
    title: "Full-Stack Development with Next.js and Express",
    summary:
      "Practical insights from developing responsive financial applications and RESTful APIs.",
    link: "https://github.com/akt9802",
  },
  {
    title: "Optimizing Frontend Performance",
    summary:
      "Techniques to reduce page load time by 35% and improve user experience in React applications.",
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
    value: "linkedin.com/in/aman-kumar-",
    href: "https://www.linkedin.com/in/aman931120/",
  },
];

