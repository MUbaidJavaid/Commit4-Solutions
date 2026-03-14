 "use client";

import Link from "next/link";
import { ArrowRight, Search, FileText, Palette, Code, TestTube, Rocket, Headphones } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const steps = [
  { icon: Search, phase: "Phase 1", title: "Discovery & Strategy", duration: "1-2 weeks", desc: "We start by deeply understanding your business, users, market, and goals. This phase includes stakeholder interviews, competitive analysis, user research, and technical assessment.", deliverables: ["Project brief & scope document", "User personas & journey maps", "Technical architecture plan", "Timeline & milestone schedule", "Budget breakdown"] },
  { icon: FileText, phase: "Phase 2", title: "Planning & Architecture", duration: "1-2 weeks", desc: "We translate discovery insights into detailed technical plans, information architecture, and sprint roadmaps that guide the entire development process.", deliverables: ["Information architecture", "Data models & API contracts", "Sprint planning & backlog", "Infrastructure blueprint", "Risk assessment"] },
  { icon: Palette, phase: "Phase 3", title: "UI/UX Design", duration: "2-4 weeks", desc: "Our designers create wireframes, visual designs, and interactive prototypes. Every design decision is validated through user testing and stakeholder review.", deliverables: ["Wireframes & user flows", "High-fidelity mockups", "Interactive prototype", "Design system components", "Usability test results"] },
  { icon: Code, phase: "Phase 4", title: "Development", duration: "6-16 weeks", desc: "Our engineers build the product in 2-week sprints with continuous integration, automated testing, and regular stakeholder demos.", deliverables: ["Working software increments", "Sprint demo recordings", "Technical documentation", "Code review reports", "Progress dashboard access"] },
  { icon: TestTube, phase: "Phase 5", title: "Quality Assurance", duration: "Ongoing", desc: "QA runs parallel to development with automated tests, manual testing, performance benchmarks, security audits, and cross-device validation.", deliverables: ["Test coverage reports", "Performance benchmarks", "Security audit results", "Bug tracking dashboard", "Device compatibility matrix"] },
  { icon: Rocket, phase: "Phase 6", title: "Launch", duration: "1 week", desc: "We handle deployment, monitoring setup, documentation, and team training to ensure a smooth launch with zero surprises.", deliverables: ["Production deployment", "Monitoring & alerting setup", "Launch checklist completion", "Team training sessions", "Post-launch support plan"] },
  { icon: Headphones, phase: "Phase 7", title: "Support & Growth", duration: "Ongoing", desc: "Post-launch, we provide ongoing support, feature development, performance monitoring, and strategic guidance to keep your product growing.", deliverables: ["SLA-based support", "Monthly performance reports", "Feature roadmap planning", "Technology upgrades", "Growth optimization"] },
];

export default function ProcessPage() {
  return (
    <PageLayout>
      <PageHero
        label="Our Process"
        title="How We Deliver Exceptional Results"
        subtitle="A proven, transparent, sprint-based methodology refined over 150+ projects. No surprises, no black boxes — just disciplined engineering."
        ctaText="Start Your Project"
        ctaHref="/contact"
      />

      {/* Process Steps */}
      <section className="section-spacing bg-background">
        <div className="container-wide section-padding">
          <AnimatedSection>
            <SectionLabel>Step by Step</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-14">From idea to launch and beyond</h2>
          </AnimatedSection>
          <div className="space-y-8 max-w-4xl">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card-premium p-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-green-light flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="pill-accent">{step.phase}</span>
                        <span className="text-xs font-body text-muted-foreground">{step.duration}</span>
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-3">{step.title}</h3>
                      <p className="text-sm font-body text-muted-foreground leading-relaxed mb-5">{step.desc}</p>
                      <div>
                        <div className="text-xs font-body font-semibold uppercase tracking-wider text-foreground mb-3">Deliverables</div>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((d) => (
                            <span key={d} className="text-[11px] font-body px-2 py-1 rounded-lg bg-muted text-muted-foreground">{d}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary">
        <div className="container-wide section-padding text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-6">Ready to start the process?</h2>
            <p className="text-base font-body text-primary-foreground/70 max-w-lg mx-auto mb-8">
              Share your project brief and we'll get back to you within 24 hours with a tailored plan.
            </p>
            <Link href="/contact" className="btn-accent">Submit Your Brief <ArrowRight className="w-4 h-4" /></Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
