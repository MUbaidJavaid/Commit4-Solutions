export interface HireDevRole {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  useCases: string[];
  hiringModels: string[];
}

export const hireDevRoles: HireDevRole[] = [
  {
    slug: "frontend-developer",
    title: "Hire Frontend Developer",
    shortTitle: "Frontend Developer",
    description: "Get expert frontend developers who build fast, accessible, and beautiful web interfaces using React, Next.js, and modern CSS.",
    responsibilities: ["Build responsive UI components", "Implement design systems", "Optimize Core Web Vitals", "Write unit & integration tests", "Collaborate with designers and backend teams"],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Testing (Jest, Playwright)", "Performance optimization"],
    useCases: ["You need to build a new web application from scratch", "Your existing frontend needs modernization", "You want to improve site performance and SEO", "You need design system implementation"],
    hiringModels: ["Full-time dedicated", "Part-time (20hrs/week)", "Project-based", "Team augmentation"],
  },
  {
    slug: "backend-developer",
    title: "Hire Backend Developer",
    shortTitle: "Backend Developer",
    description: "Hire senior backend engineers who build scalable APIs, microservices, and cloud-native infrastructure that handles millions of requests.",
    responsibilities: ["Design & build REST/GraphQL APIs", "Architect microservices", "Optimize database performance", "Set up CI/CD pipelines", "Implement security best practices"],
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS/GCP", "Kubernetes"],
    useCases: ["You need to build a new API or backend system", "Your backend can't handle growing traffic", "You need database optimization", "You want to migrate to microservices"],
    hiringModels: ["Full-time dedicated", "Part-time (20hrs/week)", "Project-based", "Team augmentation"],
  },
  {
    slug: "mern-stack-developer",
    title: "Hire MERN Stack Developer",
    shortTitle: "MERN Stack Developer",
    description: "Get full-stack MERN developers who can build complete web applications with MongoDB, Express, React, and Node.js.",
    responsibilities: ["Build full-stack web applications", "Design MongoDB schemas", "Create Express.js APIs", "Build React frontends", "Deploy & manage applications"],
    skills: ["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "REST APIs", "JWT Auth", "AWS"],
    useCases: ["You need a full-stack developer for a web project", "You're building an MVP or startup product", "You need rapid prototyping capability", "You want one developer handling both frontend and backend"],
    hiringModels: ["Full-time dedicated", "Part-time (20hrs/week)", "Project-based", "Team augmentation"],
  },
  {
    slug: "react-developer",
    title: "Hire React Developer",
    shortTitle: "React Developer",
    description: "Hire experienced React developers who build performant, maintainable, and scalable frontend applications with modern best practices.",
    responsibilities: ["Build React component libraries", "Implement complex state management", "Optimize rendering performance", "Write comprehensive tests", "Integrate with REST/GraphQL APIs"],
    skills: ["React", "TypeScript", "Redux/Zustand", "React Query", "Testing Library", "Storybook", "Performance profiling"],
    useCases: ["You need dedicated React expertise for a large project", "You're building a complex SPA or dashboard", "You need component library development", "You want to upgrade from class components to hooks"],
    hiringModels: ["Full-time dedicated", "Part-time (20hrs/week)", "Project-based", "Team augmentation"],
  },
  {
    slug: "nextjs-developer",
    title: "Hire Next.js Developer",
    shortTitle: "Next.js Developer",
    description: "Get Next.js specialists who build SEO-optimized, server-rendered web applications with the latest App Router and React Server Components.",
    responsibilities: ["Build Next.js applications with App Router", "Implement SSR/SSG/ISR strategies", "Optimize for SEO and Core Web Vitals", "Set up API routes and middleware", "Deploy on Vercel or custom infrastructure"],
    skills: ["Next.js", "React Server Components", "TypeScript", "Prisma", "tRPC", "Vercel", "Edge Functions"],
    useCases: ["You need an SEO-optimized web application", "You're building a content-heavy site or blog", "You want server-side rendering capabilities", "You need a marketing site + web app hybrid"],
    hiringModels: ["Full-time dedicated", "Part-time (20hrs/week)", "Project-based", "Team augmentation"],
  },
  {
    slug: "nodejs-developer",
    title: "Hire Node.js Developer",
    shortTitle: "Node.js Developer",
    description: "Hire Node.js engineers who build high-performance backend services, real-time applications, and scalable API architectures.",
    responsibilities: ["Build Node.js microservices", "Design event-driven architectures", "Implement WebSocket real-time features", "Optimize I/O-heavy applications", "Set up monitoring and logging"],
    skills: ["Node.js", "Express/Fastify", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "Message Queues", "Docker"],
    useCases: ["You need real-time features (chat, notifications, live data)", "You're building an API-first platform", "You need high-concurrency I/O handling", "You want JavaScript/TypeScript end-to-end"],
    hiringModels: ["Full-time dedicated", "Part-time (20hrs/week)", "Project-based", "Team augmentation"],
  },
  {
    slug: "python-developer",
    title: "Hire Python Developer",
    shortTitle: "Python Developer",
    description: "Get Python developers skilled in Django, FastAPI, data engineering, and AI/ML who build robust backend systems and intelligent features.",
    responsibilities: ["Build Python backend services", "Develop ML models and pipelines", "Create data processing workflows", "Build RESTful APIs with Django/FastAPI", "Implement data science solutions"],
    skills: ["Python", "Django", "FastAPI", "TensorFlow/PyTorch", "Pandas", "PostgreSQL", "Docker", "AWS"],
    useCases: ["You need AI/ML features in your product", "You're building data-intensive applications", "You need backend services with Django or FastAPI", "You want data pipeline development"],
    hiringModels: ["Full-time dedicated", "Part-time (20hrs/week)", "Project-based", "Team augmentation"],
  },
  {
    slug: "flutter-developer",
    title: "Hire Flutter Developer",
    shortTitle: "Flutter Developer",
    description: "Hire Flutter developers who build beautiful, natively compiled mobile applications for iOS and Android from a single codebase.",
    responsibilities: ["Build cross-platform mobile apps", "Implement custom UI components", "Integrate native device features", "Optimize app performance", "Handle app store submissions"],
    skills: ["Flutter", "Dart", "Firebase", "REST APIs", "SQLite", "Platform Channels", "CI/CD (Fastlane)"],
    useCases: ["You need a mobile app for both iOS and Android", "You want to reduce mobile development costs", "You need a beautiful, custom UI mobile experience", "You want fast iteration on mobile features"],
    hiringModels: ["Full-time dedicated", "Part-time (20hrs/week)", "Project-based", "Team augmentation"],
  },
  {
    slug: "ui-ux-designer",
    title: "Hire UI/UX Designer",
    shortTitle: "UI/UX Designer",
    description: "Get talented UI/UX designers who create research-driven, conversion-focused digital experiences that users love and businesses profit from.",
    responsibilities: ["Conduct user research & testing", "Create wireframes & prototypes", "Design visual interfaces", "Build design systems", "Collaborate with engineering teams"],
    skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Interaction Design", "Accessibility", "Motion Design"],
    useCases: ["You need a complete product design from scratch", "Your existing product needs a UX overhaul", "You want to build a design system", "You need ongoing design support for feature development"],
    hiringModels: ["Full-time dedicated", "Part-time (20hrs/week)", "Project-based", "Team augmentation"],
  },
];

export function getHireDevBySlug(slug: string): HireDevRole | undefined {
  return hireDevRoles.find((r) => r.slug === slug);
}
