 "use client";

import Link from "next/link";
import { ArrowRight, Users, Target, Lightbulb, Heart, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const values = [
  { icon: Target, title: "Impact Over Output", desc: "We measure ourselves by the business outcomes we deliver, not the lines of code we write." },
  { icon: Users, title: "Partnership Mindset", desc: "We embed ourselves in your team, your goals, and your challenges. Your success is our success." },
  { icon: Lightbulb, title: "Continuous Learning", desc: "We invest 10% of our time in learning new technologies, methodologies, and business domains." },
  { icon: Heart, title: "Craftsmanship", desc: "We take pride in clean code, thoughtful architecture, and polished user experiences." },
  { icon: Globe, title: "Transparency", desc: "No hidden costs, no scope surprises, no communication gaps. Full visibility into everything we do." },
  { icon: Award, title: "Excellence", desc: "Good enough isn't in our vocabulary. We push for exceptional quality in every deliverable." },
];

const team = [
  { name: "Arjun Mehta", role: "Founder & CEO", bio: "15+ years in product engineering. Previously led engineering at a $200M fintech company." },
  { name: "Sarah Chen", role: "CTO", bio: "Ex-Google senior engineer. Expert in distributed systems and AI infrastructure." },
  { name: "Maya Patel", role: "Head of Design", bio: "Former design lead at a top SaaS unicorn. Specialist in B2B product design." },
  { name: "Vikram Singh", role: "VP of Engineering", bio: "Built and scaled engineering teams from 5 to 100+. Deep expertise in platform engineering." },
  { name: "Omar Hassan", role: "Head of Architecture", bio: "Cloud-native architect with 12+ years building distributed systems at enterprise scale." },
  { name: "Elena Volkov", role: "Director of Delivery", bio: "Program management expert who has delivered 80+ projects across fintech, healthcare, and SaaS." },
];

const archBorderRadius = "40% 40% 4% 4% / 20% 20% 4% 4%";

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        label="About Us"
        title="We Engineer Digital Products That Drive Growth"
        subtitle="NexaBuild is a premium software engineering studio that partners with ambitious companies to design, build, and scale digital products that win markets."
      />

      {/* Story */}
      <section className="section-spacing bg-background">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-6">Born from frustration with mediocre agencies</h2>
              <p className="text-base font-body text-muted-foreground leading-relaxed mb-4">
                NexaBuild was founded in 2019 by engineers and designers who were tired of seeing great product ideas fail because of poor execution. Too many agencies deliver average work, miss deadlines, and disappear after launch.
              </p>
              <p className="text-base font-body text-muted-foreground leading-relaxed mb-4">
                We built NexaBuild to be the agency we wished existed — one that combines strategic thinking with engineering excellence, treats every project like a startup, and measures success by business outcomes, not deliverables.
              </p>
              <p className="text-base font-body text-muted-foreground leading-relaxed">
                Today, we're a 60+ person team across 4 countries, serving clients from seed-stage startups to Fortune 500 enterprises. Our work has generated over $500M in value for our clients.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2019", label: "Founded" },
                  { value: "60+", label: "Team Members" },
                  { value: "150+", label: "Projects" },
                  { value: "$500M+", label: "Client Value Created" },
                ].map((s) => (
                  <div key={s.label} className="card-premium p-6 text-center">
                    <div className="text-2xl font-heading font-bold text-accent">{s.value}</div>
                    <div className="text-xs font-body text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-muted">
        <div className="container-wide section-padding">
          <AnimatedSection>
            <SectionLabel>Our Values</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-14">What guides every decision</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.05}>
                <div className="group">
                  <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center mb-4 shadow-sm group-hover:bg-accent transition-colors">
                    <v.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2">{v.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership — Arch-shaped founder images */}
      <section className="section-spacing bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[100px]" />
        <div className="relative container-wide section-padding">
          <AnimatedSection>
            <div className="text-center mb-16">
              <SectionLabel>Leadership</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-4">The people behind the work</h2>
              <p className="text-base font-body text-muted-foreground max-w-xl mx-auto">
                Our leadership team brings decades of experience from world-class technology companies.
              </p>
            </div>
          </AnimatedSection>

          {/* Top row — 4 founders */}
          <div className="flex flex-wrap sm:flex-nowrap items-end justify-center gap-5 sm:gap-6 lg:gap-8 mb-12">
            {team.slice(0, 4).map((member, i) => {
              const heights = ["h-[300px] sm:h-[340px]", "h-[320px] sm:h-[380px]", "h-[310px] sm:h-[360px]", "h-[300px] sm:h-[340px]"];
              const offsets = ["sm:mt-8", "sm:mt-0", "sm:mt-4", "sm:mt-10"];
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`group relative w-[calc(50%-10px)] sm:w-[200px] lg:w-[220px] ${offsets[i]}`}
                >
                  <div
                    className={`relative ${heights[i]} w-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-500`}
                    style={{ borderRadius: archBorderRadius }}
                  >
                    <img
                      src="/commit4solutions-log.png"
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-heading font-semibold text-sm text-primary-foreground">{member.name}</h3>
                      <div className="text-[10px] font-body text-accent-foreground/90 bg-accent/80 inline-block px-2 py-0.5 rounded-full mt-1">{member.role}</div>
                    </div>
                  </div>
                  <p className="text-xs font-body text-muted-foreground leading-relaxed mt-3 px-1">{member.bio}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom row — 2 more members, centered */}
          <div className="flex flex-wrap sm:flex-nowrap items-end justify-center gap-5 sm:gap-6 lg:gap-8">
            {team.slice(4).map((member, i) => {
              const heights = ["h-[300px] sm:h-[350px]", "h-[310px] sm:h-[360px]"];
              const offsets = ["sm:mt-4", "sm:mt-0"];
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (i + 4) * 0.12 }}
                  className={`group relative w-[calc(50%-10px)] sm:w-[200px] lg:w-[220px] ${offsets[i]}`}
                >
                  <div
                    className={`relative ${heights[i]} w-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-500`}
                    style={{ borderRadius: archBorderRadius }}
                  >
                    <img
                      src="/commit4solutions-log.png"
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-heading font-semibold text-sm text-primary-foreground">{member.name}</h3>
                      <div className="text-[10px] font-body text-accent-foreground/90 bg-accent/80 inline-block px-2 py-0.5 rounded-full mt-1">{member.role}</div>
                    </div>
                  </div>
                  <p className="text-xs font-body text-muted-foreground leading-relaxed mt-3 px-1">{member.bio}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary">
        <div className="container-wide section-padding text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-6">Let's build something meaningful together</h2>
            <p className="text-base font-body text-primary-foreground/70 max-w-lg mx-auto mb-8">
              Whether you're a startup with an idea or an enterprise with a challenge, we're ready.
            </p>
            <Link href="/contact" className="btn-accent">Start a Conversation <ArrowRight className="w-4 h-4" /></Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
