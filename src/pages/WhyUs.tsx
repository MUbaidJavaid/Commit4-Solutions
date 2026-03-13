 "use client";

import Link from "next/link";
import { ArrowRight, Target, MessageSquare, TrendingUp, Layers, ShieldCheck, Clock, Zap, Eye, Users, Heart } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const differentiators = [
  { icon: Target, title: "Strategic Thinking", desc: "We don't just write code — we think about your business model, competitive landscape, and growth trajectory before writing a single line." },
  { icon: MessageSquare, title: "Communication Standards", desc: "Dedicated Slack channels, weekly video reviews, daily async updates, and a real-time project dashboard. You're never in the dark." },
  { icon: Layers, title: "Design + Dev Synergy", desc: "Our designers and engineers sit side by side. This means pixel-perfect implementation, faster iteration, and fewer 'lost in translation' moments." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Automated testing, code reviews by senior engineers, CI/CD pipelines, and dedicated QA cycles ensure every release is production-ready." },
  { icon: Eye, title: "Business-First Execution", desc: "We measure our success by your metrics — user growth, conversion rates, revenue impact, and operational efficiency." },
  { icon: TrendingUp, title: "Scalable Architecture", desc: "Every system we build is designed to handle 10x your current scale. No rearchitecting when success hits." },
  { icon: Clock, title: "Reliable Delivery", desc: "We've shipped 150+ projects on time. Our sprint-based workflow with regular milestones means no surprises." },
  { icon: Users, title: "Long-Term Partnership", desc: "60% of our clients have worked with us for 2+ years. We're not a vendor — we're a technology partner." },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "40+", label: "Global Clients" },
  { value: "60%", label: "Return Clients" },
];

export default function WhyUsPage() {
  return (
    <PageLayout>
      <PageHero
        label="Why NexaBuild"
        title="Built for Companies That Can't Afford to Get It Wrong"
        subtitle="When your product is critical to your business, you need a partner who combines strategic thinking, engineering excellence, and unwavering reliability."
      />

      {/* Stats */}
      <section className="bg-primary py-12">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-heading font-bold text-accent">{s.value}</div>
                <div className="text-sm font-body text-primary-foreground/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-spacing bg-background">
        <div className="container-wide section-padding">
          <AnimatedSection>
            <SectionLabel>What Makes Us Different</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight max-w-2xl mb-14">The NexaBuild difference</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d, i) => (
              <AnimatedSection key={d.title} delay={i * 0.05}>
                <div className="group">
                  <div className="w-12 h-12 rounded-2xl bg-green-light flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                    <d.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2">{d.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-spacing bg-muted">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionLabel>Our Philosophy</SectionLabel>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-6">Engineering is a business discipline</h2>
              <p className="text-base font-body text-muted-foreground leading-relaxed mb-4">
                We believe that great engineering isn't about using the latest framework or the most elegant architecture. It's about building systems that drive business outcomes — reliably, efficiently, and at scale.
              </p>
              <p className="text-base font-body text-muted-foreground leading-relaxed mb-4">
                Every architecture decision, every technology choice, and every process optimization is evaluated through the lens of your business goals. Will this help you acquire users faster? Will this reduce operational costs? Will this give you a competitive advantage?
              </p>
              <p className="text-base font-body text-muted-foreground leading-relaxed">
                That's the question we ask at every step. And that's what makes our work different.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="card-dark p-10 rounded-2xl">
                <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-8">Our commitment</h3>
                <div className="space-y-6">
                  {["Transparent pricing with no hidden costs", "On-time delivery with sprint-based milestones", "Senior engineers on every project", "24-hour response time guaranteed", "Post-launch support included"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm font-body text-primary-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary">
        <div className="container-wide section-padding text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-6">Convinced? Let's talk.</h2>
            <p className="text-base font-body text-primary-foreground/70 max-w-lg mx-auto mb-8">
              Schedule a free consultation to discuss your project and see if we're the right fit.
            </p>
            <Link href="/contact" className="btn-accent">Book a Consultation <ArrowRight className="w-4 h-4" /></Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
