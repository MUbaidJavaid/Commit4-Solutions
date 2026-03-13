import { Code, Monitor, Smartphone, Palette, Brain, Blocks, ShoppingCart, Database } from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  shortDesc: string;
  icon: any;
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  benefits: string[];
  capabilities: string[];
  technologies: string[];
  industries: string[];
  process: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "backend",
    title: "Backend Development",
    shortDesc: "Robust APIs, microservices, and cloud-native architecture built for scale.",
    icon: Database,
    heroTitle: "Backend Systems Built for Scale & Speed",
    heroSubtitle: "We engineer high-performance APIs, microservices, and cloud-native backends that handle millions of requests without breaking a sweat.",
    overview: "Our backend engineering team builds the invisible infrastructure that powers modern digital products. From RESTful APIs to event-driven microservices, we design systems that scale horizontally, fail gracefully, and perform under pressure. Every architecture decision is guided by your business requirements, growth trajectory, and long-term maintenance needs.",
    benefits: ["99.99% uptime SLA", "Horizontal auto-scaling", "Sub-100ms API response times", "Zero-downtime deployments", "Built-in observability & monitoring", "SOC 2 compliant architecture"],
    capabilities: ["REST & GraphQL API development", "Microservices architecture", "Event-driven systems", "Database design & optimization", "Cloud infrastructure (AWS, GCP, Azure)", "CI/CD pipeline engineering", "Message queues & stream processing", "Serverless functions"],
    technologies: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "Kubernetes", "AWS", "Terraform"],
    industries: ["Fintech", "Healthcare", "SaaS", "Ecommerce", "Logistics"],
    process: [
      { step: "Architecture Discovery", desc: "We analyze your requirements, traffic patterns, and scaling needs to design the right architecture." },
      { step: "System Design", desc: "Detailed technical specification including data models, API contracts, and infrastructure blueprints." },
      { step: "Iterative Development", desc: "Agile sprints with continuous integration, automated testing, and regular deployments." },
      { step: "Load Testing & Optimization", desc: "Performance benchmarking, stress testing, and optimization for production readiness." },
      { step: "Launch & Monitoring", desc: "Zero-downtime deployment with full observability, alerts, and 24/7 support." },
    ],
    faqs: [
      { q: "What languages do you use for backend development?", a: "We primarily work with Node.js, Python, and Go, selecting the best fit based on your project's performance requirements and team ecosystem." },
      { q: "Can you work with our existing backend?", a: "Absolutely. We regularly integrate with, refactor, or extend existing systems. We'll audit your current architecture and propose the most efficient path forward." },
      { q: "How do you handle database design?", a: "We choose between SQL and NoSQL based on your data patterns, design normalized schemas, implement proper indexing, and set up replication and backup strategies." },
    ],
  },
  {
    slug: "frontend",
    title: "Frontend Development",
    shortDesc: "Pixel-perfect, performant interfaces crafted with modern frameworks.",
    icon: Monitor,
    heroTitle: "Interfaces That Convert & Delight",
    heroSubtitle: "We build fast, accessible, and visually stunning frontends using React, Next.js, and modern web standards that your users will love.",
    overview: "Your frontend is where users form their first impression. We craft responsive, performant, and accessible interfaces that combine beautiful design with bulletproof engineering. From complex dashboards to marketing sites, our frontend solutions are built for speed, SEO, and conversion.",
    benefits: ["Lighthouse 95+ scores", "WCAG 2.1 AA compliance", "Component-driven architecture", "SEO-optimized rendering", "Cross-browser consistency", "Progressive enhancement"],
    capabilities: ["React & Next.js applications", "TypeScript-first development", "Design system implementation", "Server-side & static rendering", "State management architecture", "Performance optimization", "Responsive & mobile-first design", "Micro-frontend architecture"],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "GraphQL", "Storybook", "Playwright", "Webpack/Vite"],
    industries: ["SaaS", "Fintech", "Ecommerce", "Education", "Enterprise"],
    process: [
      { step: "Design Handoff & Analysis", desc: "We review designs, define component architecture, and establish the design system foundation." },
      { step: "Component Development", desc: "Building reusable, accessible components with proper TypeScript typing and Storybook documentation." },
      { step: "Integration & State", desc: "Connecting UI to APIs, implementing state management, and handling complex data flows." },
      { step: "Testing & QA", desc: "Unit tests, integration tests, visual regression testing, and cross-browser validation." },
      { step: "Performance & Launch", desc: "Bundle optimization, lazy loading, CDN setup, and Core Web Vitals tuning." },
    ],
    faqs: [
      { q: "Do you work with existing design systems?", a: "Yes. We can work with your existing design system, extend it, or build a new one from scratch using tools like Storybook and Figma." },
      { q: "How do you ensure frontend performance?", a: "We optimize bundle sizes, implement code splitting, use lazy loading, optimize images, and continuously monitor Core Web Vitals." },
      { q: "Can you convert designs to pixel-perfect code?", a: "Absolutely. We work closely with design teams to ensure every pixel, animation, and interaction matches the intended experience." },
    ],
  },
  {
    slug: "mobile",
    title: "Mobile App Development",
    shortDesc: "Native and cross-platform apps that users love.",
    icon: Smartphone,
    heroTitle: "Mobile Apps That Users Can't Put Down",
    heroSubtitle: "We build native and cross-platform mobile experiences that combine beautiful UI with robust performance across iOS and Android.",
    overview: "Mobile is where your users live. We develop high-performance apps using React Native and Flutter that feel native on every platform while sharing code efficiently. From consumer apps to enterprise tools, we handle the full lifecycle — design, development, testing, deployment, and ongoing optimization.",
    benefits: ["Single codebase for iOS & Android", "Native-level performance", "Offline-first architecture", "Push notification systems", "App Store optimization", "Biometric authentication"],
    capabilities: ["React Native & Flutter development", "Native iOS (Swift) & Android (Kotlin)", "Cross-platform code sharing", "Offline data synchronization", "Push notifications & deep linking", "In-app purchases & subscriptions", "Biometric & secure authentication", "App Store submission & optimization"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo", "GraphQL", "SQLite", "Fastlane", "TestFlight"],
    industries: ["Healthcare", "Fintech", "Ecommerce", "Food & Grocery", "Logistics"],
    process: [
      { step: "Platform Strategy", desc: "Choosing the right platform approach based on your audience, budget, and performance requirements." },
      { step: "UI/UX for Mobile", desc: "Designing touch-first interfaces following iOS HIG and Material Design guidelines." },
      { step: "Development Sprints", desc: "Iterative development with regular builds, beta testing, and stakeholder reviews." },
      { step: "Device Testing", desc: "Testing across devices, screen sizes, OS versions, and network conditions." },
      { step: "Launch & Growth", desc: "App Store submission, ASO optimization, analytics setup, and post-launch iteration." },
    ],
    faqs: [
      { q: "Should I build native or cross-platform?", a: "Cross-platform (React Native/Flutter) works for most apps and saves 30-40% cost. We recommend native for GPU-heavy apps, AR/VR, or apps needing cutting-edge OS features." },
      { q: "How long does a typical mobile app take?", a: "An MVP typically takes 8-12 weeks. Full-featured apps can take 16-24 weeks. We scope each project individually based on complexity." },
      { q: "Do you handle App Store submissions?", a: "Yes. We manage the entire submission process, including store listings, screenshots, compliance reviews, and optimization for discoverability." },
    ],
  },
  {
    slug: "design",
    title: "UI/UX Design",
    shortDesc: "Research-driven design systems that drive engagement and conversion.",
    icon: Palette,
    heroTitle: "Design That Drives Business Results",
    heroSubtitle: "We create research-driven, user-centered designs that don't just look beautiful — they convert, retain, and delight.",
    overview: "Great design isn't decoration — it's strategy made visible. Our design team combines deep user research with visual excellence to create interfaces that drive measurable business outcomes. We build design systems that scale, prototypes that validate, and experiences that users genuinely enjoy.",
    benefits: ["Research-backed decisions", "Conversion-focused UX", "Scalable design systems", "Accessibility by default", "Consistent brand experience", "Data-informed iteration"],
    capabilities: ["User research & interviews", "Information architecture", "Wireframing & prototyping", "Visual design & branding", "Design system creation", "Usability testing", "Interaction design & motion", "Design-to-development handoff"],
    technologies: ["Figma", "Framer", "Principle", "Maze", "Hotjar", "Adobe Creative Suite", "Storybook", "Zeplin"],
    industries: ["SaaS", "Fintech", "Healthcare", "Education", "Ecommerce"],
    process: [
      { step: "Discovery & Research", desc: "Stakeholder interviews, competitive analysis, user personas, and journey mapping." },
      { step: "Information Architecture", desc: "Sitemaps, user flows, and content hierarchy that make complex products intuitive." },
      { step: "Wireframing", desc: "Low-fidelity layouts to validate structure, navigation, and content placement." },
      { step: "Visual Design", desc: "High-fidelity mockups with typography, color, imagery, and interaction specifications." },
      { step: "Testing & Handoff", desc: "Usability testing, iteration based on feedback, and developer-ready design specifications." },
    ],
    faqs: [
      { q: "Do you do user research?", a: "Yes. Every project starts with understanding your users. We conduct interviews, surveys, competitive analysis, and usability testing to inform design decisions." },
      { q: "Can you work with our existing brand?", a: "Absolutely. We extend existing brand guidelines into digital design systems while maintaining consistency and elevating the user experience." },
      { q: "What's your design tool of choice?", a: "We primarily use Figma for collaborative design. It allows real-time collaboration, developer handoff, and design system management." },
    ],
  },
  {
    slug: "ai",
    title: "AI Automation",
    shortDesc: "Intelligent workflows, ML models, and AI-powered product features.",
    icon: Brain,
    heroTitle: "AI Solutions That Actually Work",
    heroSubtitle: "We build practical AI systems — from intelligent automation to custom ML models — that solve real business problems and deliver measurable ROI.",
    overview: "AI is powerful, but only when applied thoughtfully. We help companies identify high-impact AI opportunities, build custom models, and integrate intelligent automation into existing workflows. Our focus is on practical, production-ready AI that drives efficiency, reduces costs, and creates competitive advantages.",
    benefits: ["60-80% task automation", "Custom ML model development", "LLM integration & fine-tuning", "Real-time data processing", "Predictive analytics", "Measurable ROI tracking"],
    capabilities: ["Custom ML model development", "LLM integration & prompt engineering", "Natural language processing", "Computer vision systems", "Predictive analytics", "Process automation (RPA)", "AI-powered search & recommendations", "Chatbot & conversational AI"],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face", "AWS SageMaker", "Vector databases", "Apache Spark"],
    industries: ["Fintech", "Healthcare", "Ecommerce", "Logistics", "Enterprise"],
    process: [
      { step: "Opportunity Assessment", desc: "Identifying where AI can deliver the highest ROI based on your data, processes, and business goals." },
      { step: "Data Strategy", desc: "Data collection, cleaning, labeling, and pipeline design for model training." },
      { step: "Model Development", desc: "Building, training, and validating models with rigorous testing and bias evaluation." },
      { step: "Integration", desc: "Deploying models into production with APIs, monitoring, and feedback loops." },
      { step: "Optimization", desc: "Continuous model retraining, performance monitoring, and accuracy improvement." },
    ],
    faqs: [
      { q: "Do we need a lot of data to use AI?", a: "Not necessarily. Many modern AI approaches work with smaller datasets, especially with transfer learning and pre-trained models. We'll assess your data and recommend the best approach." },
      { q: "Can you integrate AI into our existing product?", a: "Yes. We specialize in adding AI capabilities to existing products — whether it's smart search, recommendations, or process automation." },
      { q: "How do you measure AI project success?", a: "We define clear KPIs before starting — accuracy, processing time, cost savings, or user engagement — and track them throughout development." },
    ],
  },
  {
    slug: "saas",
    title: "SaaS Products",
    shortDesc: "Full-cycle SaaS engineering from MVP to enterprise scale.",
    icon: Blocks,
    heroTitle: "SaaS Products Built to Scale",
    heroSubtitle: "From MVP validation to enterprise-grade platforms, we engineer SaaS products with multi-tenancy, billing, and the architecture to grow.",
    overview: "Building a SaaS product requires more than great code — it demands product thinking, scalable architecture, and a deep understanding of recurring-revenue businesses. We partner with founders and product teams to build SaaS platforms that acquire, convert, and retain users while maintaining the technical foundation to scale.",
    benefits: ["Multi-tenant architecture", "Subscription billing integration", "Role-based access control", "Usage analytics & reporting", "White-label capabilities", "SOC 2 ready infrastructure"],
    capabilities: ["Multi-tenant architecture design", "Subscription & usage-based billing", "User management & RBAC", "API development for integrations", "Admin dashboards & analytics", "Onboarding flow optimization", "Data migration & import tools", "White-label / multi-brand support"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Auth0", "Redis", "AWS", "Terraform", "Segment", "Mixpanel"],
    industries: ["SaaS", "Fintech", "Enterprise", "Education", "Healthcare"],
    process: [
      { step: "Product Discovery", desc: "Understanding your market, users, and business model to define the right product scope." },
      { step: "MVP Architecture", desc: "Designing a scalable foundation that supports rapid iteration without technical debt." },
      { step: "Core Development", desc: "Building the essential features — auth, billing, core value prop, and admin tools." },
      { step: "Growth Features", desc: "Analytics, onboarding optimization, integrations, and features that drive retention." },
      { step: "Scale & Optimize", desc: "Performance optimization, cost reduction, and architecture evolution as you grow." },
    ],
    faqs: [
      { q: "How long does it take to build an MVP?", a: "A typical SaaS MVP takes 8-14 weeks depending on complexity. We focus on validating your core value proposition as quickly as possible." },
      { q: "Do you handle billing integration?", a: "Yes. We integrate Stripe, Paddle, or similar platforms with support for subscriptions, usage-based billing, trials, and enterprise invoicing." },
      { q: "Can you build multi-tenant systems?", a: "Yes, multi-tenancy is one of our specialties. We design isolated data, customizable configurations, and white-label capabilities." },
    ],
  },
  {
    slug: "ecommerce",
    title: "Ecommerce",
    shortDesc: "High-converting online stores and marketplace platforms.",
    icon: ShoppingCart,
    heroTitle: "Ecommerce That Converts & Scales",
    heroSubtitle: "We build high-performance online stores and marketplaces that deliver exceptional shopping experiences and drive revenue growth.",
    overview: "Ecommerce success depends on speed, trust, and seamless purchasing experiences. We build custom storefronts, headless commerce solutions, and marketplace platforms that convert browsers into buyers. From product catalogs to checkout flows, every element is optimized for conversion and performance.",
    benefits: ["Sub-2s page load times", "Optimized checkout flows", "Multi-currency & language", "Inventory management", "Real-time analytics", "PCI-DSS compliance"],
    capabilities: ["Custom storefront development", "Headless commerce architecture", "Marketplace platform building", "Payment gateway integration", "Inventory & order management", "Product search & filtering", "Personalization engines", "Multi-channel selling"],
    technologies: ["Next.js", "Shopify API", "Stripe", "Algolia", "Contentful", "Medusa.js", "PostgreSQL", "Redis", "CloudFront", "Vercel"],
    industries: ["D2C Brands", "Retail", "Fashion", "Food & Grocery", "B2B Commerce"],
    process: [
      { step: "Commerce Strategy", desc: "Platform selection, business model analysis, and technical architecture planning." },
      { step: "Storefront Design", desc: "Conversion-optimized UI/UX with A/B testing readiness and mobile-first approach." },
      { step: "Platform Development", desc: "Building the storefront, admin tools, inventory system, and payment integration." },
      { step: "Launch & Optimize", desc: "Performance testing, SEO setup, analytics, and conversion rate optimization." },
      { step: "Growth & Scale", desc: "Adding channels, markets, personalization, and scaling infrastructure." },
    ],
    faqs: [
      { q: "Shopify or custom build?", a: "It depends on your scale and customization needs. Shopify is great for fast launch; custom headless builds offer maximum flexibility. We'll help you choose." },
      { q: "Can you build a marketplace?", a: "Yes. We build multi-vendor marketplaces with vendor management, commission systems, and scalable order routing." },
      { q: "How do you optimize conversion rates?", a: "Through fast page loads, streamlined checkout, trust signals, A/B testing infrastructure, and data-driven UX improvements." },
    ],
  },
  {
    slug: "crm",
    title: "CRM Solutions",
    shortDesc: "Custom relationship management systems for your unique workflows.",
    icon: Code,
    heroTitle: "CRM Systems Built Around Your Business",
    heroSubtitle: "Off-the-shelf CRMs don't fit everyone. We build custom CRM and ERP solutions tailored to your exact workflows, data, and growth trajectory.",
    overview: "Generic CRM tools force you to adapt your processes to their limitations. We build custom CRM and business management systems that fit your organization like a glove — capturing the exact data you need, automating the workflows that matter, and providing the insights that drive decisions.",
    benefits: ["Custom workflow automation", "Deep integration capability", "Role-based dashboards", "Advanced reporting & analytics", "Mobile-ready interfaces", "Scalable data architecture"],
    capabilities: ["Custom CRM development", "Sales pipeline management", "Customer data platforms", "Workflow automation engines", "Reporting & business intelligence", "Third-party integrations", "Document management", "Communication tracking"],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Elasticsearch", "GraphQL", "AWS", "Docker", "Zapier API", "Twilio"],
    industries: ["Real Estate", "Healthcare", "Financial Services", "Professional Services", "Enterprise"],
    process: [
      { step: "Business Analysis", desc: "Deep dive into your sales process, customer lifecycle, and operational workflows." },
      { step: "System Design", desc: "Data modeling, workflow mapping, integration planning, and dashboard specifications." },
      { step: "Core Build", desc: "Developing the CRM engine, user interfaces, automation rules, and reporting modules." },
      { step: "Data Migration", desc: "Safely migrating your existing data with validation, deduplication, and mapping." },
      { step: "Training & Launch", desc: "User training, change management support, and phased rollout strategy." },
    ],
    faqs: [
      { q: "Why not use Salesforce or HubSpot?", a: "Off-the-shelf CRMs work for standard workflows. If you have unique processes, complex data relationships, or need deep integrations, a custom CRM pays for itself in efficiency." },
      { q: "Can you migrate data from our current CRM?", a: "Yes. We handle data migration with careful mapping, validation, and deduplication to ensure a smooth transition." },
      { q: "How long does a custom CRM take to build?", a: "A core CRM typically takes 12-20 weeks. We launch with essential features first and add complexity iteratively." },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
