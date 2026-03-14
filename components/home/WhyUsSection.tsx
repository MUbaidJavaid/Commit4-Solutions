 "use client";

import { Target, Zap, TrendingUp, Layers, ShieldCheck, Clock, MessageSquare, Eye } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "../shared/AnimatedSection";
import SectionLabel from "../shared/SectionLabel";

const reasons = [
  { icon: Target, title: "Strategic Thinking", desc: "We start with business goals, not just code. Every decision is purpose-driven." },
  { icon: MessageSquare, title: "Fast Communication", desc: "Dedicated teams, async-first culture, and 24-hour response guarantee." },
  { icon: TrendingUp, title: "Scalable Engineering", desc: "Architecture built for growth — from MVP to millions of users." },
  { icon: Layers, title: "Design + Dev Synergy", desc: "Designers and engineers work side by side for pixel-perfect execution." },
  { icon: Eye, title: "Business-First Approach", desc: "We measure success by your metrics — conversions, retention, revenue." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous testing, code reviews, and automated CI/CD pipelines." },
  { icon: Clock, title: "Reliable Delivery", desc: "We ship on time. No excuses, no delays, no scope surprises." },
  { icon: Zap, title: "Transparent Process", desc: "Weekly sprints, real-time dashboards, and full visibility into progress." },
];

export default function WhyUsSection() {
  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/4 blur-[140px]" />
      
      <div className="relative container-wide section-padding">
        <AnimatedSection>
          <SectionLabel>Why NexaBuild</SectionLabel>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight max-w-2xl leading-tight">
              Built for companies that can&apos;t afford to get it wrong
            </h2>
            <Link href="/why-us" className="btn-outline text-xs shrink-0 mt-2">
              Learn More <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </AnimatedSection>

        {/* 2-column layout with alternating sizes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.06}>
              <div className={`group relative overflow-hidden rounded-2xl border border-border/50 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                i % 3 === 0 ? 'bg-green-light/30' : 'bg-card'
              }`}>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-accent/[0.04] group-hover:bg-accent/[0.1] group-hover:scale-150 transition-all duration-700" />

                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-2xl bg-background flex items-center justify-center mb-4 shadow-sm group-hover:bg-accent group-hover:shadow-md group-hover:rotate-3 transition-all duration-500">
                    <r.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-semibold text-sm mb-2 group-hover:text-accent transition-colors duration-300">{r.title}</h3>
                  <p className="text-xs font-body text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
