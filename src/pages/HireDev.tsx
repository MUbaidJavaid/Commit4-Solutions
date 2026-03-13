 "use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Users, Clock, Shield, TrendingUp, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";
import { hireDevRoles } from "@/data/hireDev";

const benefits = [
  { icon: Users, title: "Pre-Vetted Talent", desc: "Every developer passes our rigorous technical assessment, cultural fit evaluation, and reference checks." },
  { icon: Clock, title: "Start in 48 Hours", desc: "We match you with the right developer within 48 hours. No lengthy recruitment process." },
  { icon: Shield, title: "Risk-Free Trial", desc: "Start with a 2-week trial period. If you're not satisfied, we replace the developer at no cost." },
  { icon: TrendingUp, title: "Flexible Scaling", desc: "Scale your team up or down based on project needs. No long-term commitments required." },
];

const process = [
  { num: "01", title: "Share Requirements", desc: "Tell us about the skills, experience level, and team culture you need." },
  { num: "02", title: "Get Matched", desc: "We present pre-vetted candidates within 48 hours of your request." },
  { num: "03", title: "Interview & Select", desc: "Meet your candidates, assess fit, and select the best match." },
  { num: "04", title: "Start Building", desc: "Your developer integrates with your team and starts contributing immediately." },
];

interface TechItem {
  name: string;
  icon: string;
}

const techCategories: Record<string, TechItem[]> = {
  All: [],
  "Front-End": [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Vue.js", icon: "💚" },
    { name: "Angular", icon: "🅰️" },
    { name: "Svelte", icon: "🔥" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "HTML/CSS", icon: "🌐" },
  ],
  "Back-End": [
    { name: "Node.js", icon: "💚" },
    { name: "Python", icon: "🐍" },
    { name: "Elixir", icon: "💜" },
    { name: "Ruby", icon: "💎" },
    { name: "Java", icon: "☕" },
    { name: "PHP", icon: "🐘" },
    { name: "Golang", icon: "🔵" },
    { name: "C#", icon: "🟣" },
    { name: "C++", icon: "⚙️" },
    { name: "Rust", icon: "🦀" },
    { name: "Nest.js", icon: "🐈" },
    { name: ".NET Core", icon: "🔷" },
  ],
  "Low/No Code": [
    { name: "Bubble", icon: "🫧" },
    { name: "Webflow", icon: "🌊" },
    { name: "Retool", icon: "🔧" },
    { name: "Zapier", icon: "⚡" },
  ],
  Database: [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🐬" },
    { name: "Redis", icon: "🔴" },
    { name: "DynamoDB", icon: "📦" },
    { name: "Firebase", icon: "🔥" },
  ],
  DevOps: [
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "AWS", icon: "☁️" },
    { name: "GCP", icon: "🌩️" },
    { name: "Terraform", icon: "🏗️" },
    { name: "GitHub Actions", icon: "🔄" },
  ],
  Mobile: [
    { name: "React Native", icon: "📱" },
    { name: "Flutter", icon: "🦋" },
    { name: "Swift", icon: "🍎" },
    { name: "Kotlin", icon: "🤖" },
    { name: "Expo", icon: "📲" },
  ],
  "AI & ML": [
    { name: "TensorFlow", icon: "🧠" },
    { name: "PyTorch", icon: "🔥" },
    { name: "OpenAI", icon: "🤖" },
    { name: "LangChain", icon: "🔗" },
    { name: "Hugging Face", icon: "🤗" },
    { name: "Scikit-learn", icon: "📊" },
  ],
};

// Combine all for "All" tab
techCategories.All = Object.entries(techCategories)
  .filter(([k]) => k !== "All")
  .flatMap(([, v]) => v)
  .filter((item, index, self) => self.findIndex((i) => i.name === item.name) === index)
  .slice(0, 18);

const tabKeys = Object.keys(techCategories);

export default function HireDevPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const currentTech = techCategories[activeTab] || [];
  const filteredTech = searchQuery.trim()
    ? currentTech.filter((t) =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentTech;

  return (
    <PageLayout>
      <PageHero
        label="Hire Developers"
        title="Extend Your Team with World-Class Engineers"
        subtitle="Access pre-vetted senior developers who integrate seamlessly with your team. Hire by role, skill, or full stack — with flexible engagement models."
        ctaText="Hire a Developer"
        ctaHref="/contact"
      />

      {/* Benefits */}
      <section className="section-spacing bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[100px]" />
        <div className="relative container-wide section-padding">
          <AnimatedSection>
            <SectionLabel>Why Hire Through Us</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-14">
              The smart way to build your team
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.08}>
                <div className="card-premium p-6 text-center h-full group hover:-translate-y-1 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-green-light flex items-center justify-center mx-auto mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <b.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Browser */}
      <section className="section-spacing bg-muted/50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-brand/4 blur-[120px]" />
        <div className="relative container-wide section-padding">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <SectionLabel>Tech Expertise</SectionLabel>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mt-2">
                  Yes, we have developers for{" "}
                  <span className="underline decoration-accent decoration-2 underline-offset-4">
                    every stack
                  </span>
                </h2>
                <p className="text-sm font-body text-muted-foreground mt-3 max-w-lg">
                  Our 1000+ engineers have expertise in almost every programming
                  language and framework.
                </p>
              </div>
              <div className="relative shrink-0">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What are you looking for?"
                  className="pl-10 pr-5 py-3 text-sm font-body bg-card rounded-xl border border-border focus:ring-2 focus:ring-accent/30 outline-none w-64 transition-all"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Tabs */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-10">
              {tabKeys.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-body font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80 border border-border"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Tech Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + searchQuery}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
            >
              {filteredTech.map((tech) => (
                <div
                  key={tech.name}
                  className="group card-premium p-5 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </span>
                  <span className="text-xs font-body font-medium text-foreground">
                    {tech.name}
                  </span>
                </div>
              ))}
              {filteredTech.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-sm font-body text-muted-foreground">
                    No technologies found matching "{searchQuery}"
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* How it works */}
      <section className="section-spacing bg-background">
        <div className="container-wide section-padding">
          <AnimatedSection>
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-14">
              Simple, fast, reliable
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div className="relative group">
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-6 -right-3 w-6 h-px bg-border" />
                  )}
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <span className="text-lg font-heading font-bold text-accent">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="section-spacing bg-muted">
        <div className="container-wide section-padding">
          <AnimatedSection>
            <SectionLabel>Available Roles</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-14">
              Hire by specialization
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hireDevRoles.map((role, i) => (
              <AnimatedSection key={role.slug} delay={i * 0.06}>
                <Link
                  href={`/hire-developers/${role.slug}`}
                  className="group card-premium-elevated p-6 flex flex-col h-full bg-card"
                >
                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                    {role.shortTitle}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed flex-1 mb-4">
                    {role.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {role.skills.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-body px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-body font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details <ArrowUpRight className="w-3 h-3" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary relative overflow-hidden">
        <div className="absolute inset-0 geo-dots opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/8 blur-[100px]" />
        <div className="relative container-wide section-padding text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Need a custom team?
            </h2>
            <p className="text-base font-body text-primary-foreground/70 max-w-lg mx-auto mb-8">
              Tell us your requirements and we'll assemble the perfect team
              within 48 hours.
            </p>
            <Link href="/contact" className="btn-accent shadow-lg">
              Discuss Your Needs <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
