 "use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "../shared/AnimatedSection";
import SectionLabel from "../shared/SectionLabel";

const steps = [
  { num: "01", title: "Discovery", desc: "Deep-dive into your business, users, and market to define the vision and success metrics.", icon: "🔍" },
  { num: "02", title: "Strategy", desc: "Technical architecture, roadmap planning, and resource allocation for optimal execution.", icon: "📐" },
  { num: "03", title: "Design", desc: "Wireframes, prototypes, and design systems validated with real user feedback.", icon: "🎨" },
  { num: "04", title: "Development", desc: "Agile sprints, clean code, CI/CD, and continuous stakeholder demos.", icon: "⚡" },
  { num: "05", title: "Testing", desc: "Rigorous QA, performance testing, security audits, and user acceptance.", icon: "🛡️" },
  { num: "06", title: "Launch", desc: "Smooth deployment, monitoring setup, and confident go-live.", icon: "🚀" },
  { num: "07", title: "Support", desc: "Ongoing maintenance, feature iterations, and dedicated technical support.", icon: "🤝" },
];

export default function ProcessSection() {
  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-green-light/30 blur-[100px] -translate-y-1/2" />
      
      <div className="relative container-wide section-padding">
        <AnimatedSection>
          <SectionLabel>Our Process</SectionLabel>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight max-w-xl leading-tight">
              A proven framework for building what matters
            </h2>
            <Link href="/process" className="btn-outline text-xs shrink-0 mt-2">
              Full Process <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Timeline layout */}
        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <AnimatedSection key={step.num} delay={i * 0.08}>
                  <div className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${i > 0 ? 'lg:mt-6' : ''}`}>
                    {/* Center dot */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-6 z-10">
                      <motion.div
                        className="w-10 h-10 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-md"
                        whileInView={{ scale: [0.5, 1.1, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <span className="text-sm">{step.icon}</span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className={`${isLeft ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                      <div className={`flex items-start gap-4 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Mobile icon */}
                        <div className="lg:hidden w-10 h-10 rounded-full bg-green-light flex items-center justify-center shrink-0">
                          <span className="text-sm">{step.icon}</span>
                        </div>
                        <div>
                          <span className="text-xs font-body font-bold text-accent mb-1 block">Step {step.num}</span>
                          <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
                          <p className="text-sm font-body text-muted-foreground leading-relaxed max-w-sm">{step.desc}</p>
                        </div>
                      </div>
                    </div>

                    {/* Empty column for alternating */}
                    {isLeft && <div className="hidden lg:block" />}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
