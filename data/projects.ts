export interface ProjectData {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  challenge: string;
  solution: string;
  results: string[];
  features: string[];
  techStack: string[];
  timeline: string;
  industry: string;
  imageUrl: string;
  color: string;
}

export const projects: ProjectData[] = [
  {
    slug: "finflow",
    title: "FinFlow — AI-Powered Financial Dashboard",
    category: "Fintech · SaaS",
    shortDesc: "A real-time analytics platform processing 2M+ transactions daily for a Series B fintech startup.",
    challenge: "The client's existing dashboard couldn't handle growing transaction volumes, leading to 15-second load times, frequent timeouts, and frustrated users during peak hours.",
    solution: "We rebuilt the entire data pipeline with event-driven architecture, implemented real-time streaming analytics, and created an intuitive dashboard that surfaces actionable insights in milliseconds.",
    results: ["47% faster decision-making", "$2.3M saved annually", "99.99% uptime achieved", "2M+ daily transactions processed", "15s → 200ms load time"],
    features: ["Real-time transaction monitoring", "AI-powered anomaly detection", "Custom report builder", "Multi-currency support", "Role-based access control", "Audit trail & compliance"],
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Kafka", "AWS", "Docker"],
    timeline: "16 weeks",
    industry: "Fintech",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    color: "bg-primary",
  },
  {
    slug: "medconnect",
    title: "MedConnect — Telehealth Platform",
    category: "Healthcare · Mobile",
    shortDesc: "HIPAA-compliant telehealth solution connecting 50,000+ patients with specialists nationwide.",
    challenge: "The healthcare provider needed a telehealth platform that could handle video consultations, electronic prescriptions, and medical records — all while maintaining strict HIPAA compliance.",
    solution: "We built a cross-platform mobile app with encrypted video calls, integrated EHR systems, and an AI-powered triage system that routes patients to the right specialist within minutes.",
    results: ["300% user growth in 6 months", "4.8★ App Store rating", "50,000+ active patients", "60% reduction in wait times", "Full HIPAA compliance"],
    features: ["HD video consultations", "E-prescriptions", "AI triage routing", "Medical record access", "Appointment scheduling", "Insurance verification"],
    techStack: ["Flutter", "Firebase", "WebRTC", "Python", "AWS HIPAA", "HL7 FHIR"],
    timeline: "20 weeks",
    industry: "Healthcare",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    color: "bg-accent",
  },
  {
    slug: "cartgenius",
    title: "CartGenius — Headless Commerce Engine",
    category: "Ecommerce · SaaS",
    shortDesc: "Headless commerce platform powering 200+ D2C brands with sub-second page loads.",
    challenge: "A growing commerce platform was losing merchants due to slow page loads, rigid templates, and an inability to support multi-channel selling from a single backend.",
    solution: "We architected a headless commerce engine with a blazing-fast storefront SDK, flexible API-first backend, and real-time inventory synchronization across all sales channels.",
    results: ["35% conversion increase", "99.99% uptime", "200+ merchants onboarded", "Sub-second page loads", "3x faster checkout"],
    features: ["Headless storefront SDK", "Multi-channel inventory sync", "AI product recommendations", "Custom checkout builder", "Multi-currency support", "Merchant analytics"],
    techStack: ["Next.js", "Stripe", "Shopify API", "PostgreSQL", "Redis", "Vercel", "Algolia"],
    timeline: "24 weeks",
    industry: "Ecommerce",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    color: "bg-blue-brand",
  },
  {
    slug: "learnhub",
    title: "LearnHub — EdTech Learning Platform",
    category: "Education · Web App",
    shortDesc: "Interactive online learning platform serving 100,000+ students with AI-personalized curricula.",
    challenge: "An education startup needed a platform that could deliver personalized learning experiences at scale, with real-time progress tracking and adaptive difficulty levels.",
    solution: "We built an AI-driven learning platform with adaptive content delivery, gamification mechanics, and a comprehensive instructor dashboard for curriculum management.",
    results: ["100K+ active students", "40% better completion rates", "4.7★ user rating", "25% faster learning outcomes", "500+ courses hosted"],
    features: ["AI-adaptive learning paths", "Interactive quizzes & labs", "Progress tracking dashboard", "Video streaming", "Certificate generation", "Instructor analytics"],
    techStack: ["React", "Node.js", "MongoDB", "AWS", "FFmpeg", "TensorFlow.js"],
    timeline: "18 weeks",
    industry: "Education",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
    color: "bg-accent",
  },
  {
    slug: "propwise",
    title: "PropWise — Real Estate Management Suite",
    category: "Real Estate · CRM",
    shortDesc: "Comprehensive property management CRM serving 5,000+ listings across 3 markets.",
    challenge: "A real estate firm was managing properties with spreadsheets, losing leads, and struggling to coordinate between agents, landlords, and tenants across multiple markets.",
    solution: "We built a custom CRM that unifies property listings, lead management, tenant communications, and financial reporting into a single, intuitive platform.",
    results: ["5,000+ active listings", "35% more leads captured", "80% less admin overhead", "3 markets unified", "$1.2M revenue increase"],
    features: ["Property listing management", "Lead scoring & routing", "Tenant portal", "Maintenance requests", "Financial reporting", "Document management"],
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Twilio", "Mapbox", "AWS"],
    timeline: "14 weeks",
    industry: "Real Estate",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    color: "bg-primary",
  },
  {
    slug: "swiftdeliver",
    title: "SwiftDeliver — Logistics Optimization",
    category: "Logistics · AI",
    shortDesc: "AI-powered delivery optimization platform reducing costs by 28% for a regional logistics company.",
    challenge: "A logistics company was losing money on inefficient routing, manual dispatch, and no real-time visibility into fleet operations across 200+ vehicles.",
    solution: "We developed an AI routing engine with real-time fleet tracking, predictive ETA calculations, and automated dispatch that optimizes delivery sequences dynamically.",
    results: ["28% cost reduction", "200+ vehicles tracked", "95% on-time delivery", "Real-time fleet visibility", "40% fewer manual dispatches"],
    features: ["AI route optimization", "Real-time GPS tracking", "Predictive ETA engine", "Automated dispatch", "Driver mobile app", "Customer delivery tracking"],
    techStack: ["React", "Python", "PostgreSQL", "Redis", "Google Maps API", "TensorFlow", "AWS"],
    timeline: "20 weeks",
    industry: "Logistics",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    color: "bg-blue-brand",
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}
