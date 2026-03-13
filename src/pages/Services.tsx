 "use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle, Settings, Brain, Users, Cloud, Sparkles, Link2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";
import { services } from "@/data/services";

const engagementModels = [
  { title: "Dedicated Team", desc: "A full team dedicated exclusively to your project with a PM, designers, and engineers.", best: "Long-term products" },
  { title: "Project-Based", desc: "Fixed scope, timeline, and budget. Ideal for well-defined projects with clear deliverables.", best: "Defined scope" },
  { title: "Team Augmentation", desc: "Embed our specialists into your existing team to accelerate delivery.", best: "Scaling fast" },
];

const faqs = [
  { q: "How do you scope and estimate projects?", a: "We start with a discovery phase to understand your requirements, then provide detailed estimates based on user stories, technical complexity, and our experience with similar projects." },
  { q: "What's your typical project timeline?", a: "MVPs take 8-14 weeks. Full products take 16-32 weeks. We provide detailed timelines during the scoping phase and deliver in 2-week sprint cycles." },
  { q: "Do you provide ongoing support?", a: "Yes. We offer maintenance packages, SLA-based support, and retainer arrangements for ongoing development and optimization." },
  { q: "How do you handle communication?", a: "Dedicated Slack channel, weekly sprint reviews, daily standups (optional), and a project dashboard with real-time progress visibility." },
];

interface ExpertiseCategory {
  id: string;
  title: string;
  icon: typeof Settings;
  description: string;
  capabilities: string[];
  technologies: string[];
  cta: string;
  ctaHref: string;
}

const expertiseCategories: ExpertiseCategory[] = [
  {
    id: "product",
    title: "Product Engineering",
    icon: Settings,
    description: "Our Product Engineering Services cover product management, design, development, DevOps, testing, security & more.",
    capabilities: ["Discovery Workshop", "Web App Development", "Custom Software Development", "Mobile App Development"],
    technologies: ["React", "Next.js", "Node.js", "Python", "Flutter", "AWS", "Docker", "PostgreSQL", "MongoDB", "Redis", "Figma", "TypeScript"],
    cta: "View More",
    ctaHref: "/services/frontend",
  },
  {
    id: "ai",
    title: "Data & Artificial Intelligence",
    icon: Brain,
    description: "Leverage AI and data engineering to automate workflows, build intelligent features, and gain competitive advantages.",
    capabilities: ["Custom ML Models", "LLM Integration", "Data Pipelines", "Predictive Analytics"],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain", "AWS SageMaker", "Hugging Face", "Apache Spark"],
    cta: "View More",
    ctaHref: "/services/ai",
  },
  {
    id: "hire",
    title: "Hire Dev",
    icon: Users,
    description: "Extend your team with pre-vetted senior developers who integrate seamlessly and start contributing in 48 hours.",
    capabilities: ["Frontend Engineers", "Backend Engineers", "Full-Stack Developers", "UI/UX Designers"],
    technologies: ["React", "Node.js", "Python", "Flutter", "Swift", "Kotlin", "Go", "TypeScript"],
    cta: "Hire Now",
    ctaHref: "/hire",
  },
  {
    id: "devops",
    title: "DevOps & CloudOps",
    icon: Cloud,
    description: "Build reliable, scalable cloud infrastructure with CI/CD pipelines, container orchestration, and monitoring.",
    capabilities: ["CI/CD Automation", "Container Orchestration", "Cloud Migration", "Infrastructure as Code"],
    technologies: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Grafana"],
    cta: "View More",
    ctaHref: "/services/backend",
  },
  {
    id: "emerging",
    title: "Emerging Technologies",
    icon: Sparkles,
    description: "Stay ahead with cutting-edge tech — from AR/VR experiences to IoT solutions and edge computing.",
    capabilities: ["AR/VR Applications", "IoT Solutions", "Edge Computing", "Real-time Systems"],
    technologies: ["Unity", "ARKit", "WebXR", "MQTT", "Edge Functions", "WebSocket", "WebRTC"],
    cta: "View More",
    ctaHref: "/services/saas",
  },
  {
    id: "blockchain",
    title: "Blockchain & Web 3.0",
    icon: Link2,
    description: "Build decentralized applications, smart contracts, and Web3 solutions with modern blockchain technologies.",
    capabilities: ["Smart Contracts", "DeFi Protocols", "NFT Platforms", "Token Systems"],
    technologies: ["Solidity", "Ethereum", "Polygon", "IPFS", "Hardhat", "Web3.js", "Rust"],
    cta: "View More",
    ctaHref: "/services/saas",
  },
];

export default function ServicesPage() {
  const [activeExpertise, setActiveExpertise] = useState(expertiseCategories[0]);

  return (
    <PageLayout>
      <PageHero
        label="Our Services"
        title="End-to-End Digital Product Engineering"
        subtitle="From strategy to deployment, we provide the full spectrum of services needed to bring your digital product vision to life."
        ctaText="Discuss Your Project"
        ctaHref="/contact"
      />

      {/* Full-Stack Expertise Interactive Section */}
      <section className="section-spacing bg-background relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-blue-brand/4 blur-[120px]" />
        <div className="relative container-wide section-padding">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-14">
              <div>
                <SectionLabel>Capabilities</SectionLabel>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mt-2 max-w-lg">
                  From Concept to Delivery:{" "}
                  <span className="underline decoration-accent decoration-2 underline-offset-4">
                    Explore Our Full-Stack Expertise
                  </span>
                </h2>
              </div>
              <Link
                href="/services"
                className="btn-outline shrink-0 mt-2 lg:mt-4"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-[340px_1fr] gap-8">
            {/* Left: Category Cards */}
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {expertiseCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveExpertise(cat)}
                    className={`relative p-4 rounded-2xl text-center transition-all duration-300 border ${
                      activeExpertise.id === cat.id
                        ? "bg-accent text-accent-foreground border-accent shadow-lg scale-[1.02]"
                        : "bg-card border-border hover:border-accent/30 hover:shadow-sm"
                    }`}
                  >
                    <cat.icon
                      className={`w-6 h-6 mx-auto mb-2 ${
                        activeExpertise.id === cat.id
                          ? "text-accent-foreground"
                          : "text-accent"
                      }`}
                    />
                    <span
                      className={`text-xs font-body font-semibold leading-tight ${
                        activeExpertise.id === cat.id
                          ? "text-accent-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {cat.title}
                    </span>
                  </button>
                ))}
              </div>
            </AnimatedSection>

            {/* Right: Active Content Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExpertise.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.35 }}
                className="card-premium p-8 lg:p-10"
              >
                <h3 className="text-2xl font-heading font-bold mb-4">
                  {activeExpertise.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
                  {activeExpertise.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                  {activeExpertise.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-2.5 py-1.5"
                    >
                      <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-sm font-body font-medium">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2.5 mb-8">
                  {activeExpertise.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-body px-3 py-1.5 rounded-lg bg-muted text-muted-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={activeExpertise.ctaHref}
                  className="btn-outline text-sm"
                >
                  {activeExpertise.cta}{" "}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing bg-muted">
        <div className="container-wide section-padding">
          <AnimatedSection>
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-14">
              Comprehensive development capabilities
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group card-premium p-6 h-full flex flex-col hover:-translate-y-1 transition-all duration-300 bg-card"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed flex-1">
                    {service.shortDesc}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-body font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <ArrowUpRight className="w-3 h-3" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section-spacing bg-background">
        <div className="container-wide section-padding">
          <AnimatedSection>
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-14">
              Flexible engagement models
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model, i) => (
              <AnimatedSection key={model.title} delay={i * 0.1}>
                <div className="card-premium p-8 h-full">
                  <span className="pill-accent mb-4">
                    Best for: {model.best}
                  </span>
                  <h3 className="font-heading font-bold text-xl mb-3 mt-3">
                    {model.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {model.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing bg-muted">
        <div className="container-wide section-padding">
          <AnimatedSection>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-14">
              Common questions
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl space-y-6">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="card-premium p-6 bg-card">
                  <h3 className="font-heading font-semibold text-base mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary relative overflow-hidden">
        <div className="absolute inset-0 geo-dots opacity-[0.03]" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[120px]" />
        <div className="relative container-wide section-padding text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Ready to build something great?
            </h2>
            <p className="text-base font-body text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Tell us about your project and we'll get back to you within 24
              hours with a tailored approach.
            </p>
            <Link href="/contact" className="btn-accent">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
