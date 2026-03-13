 "use client";

import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const perks = [
  "Remote-first culture", "Flexible working hours", "Learning budget ($2K/year)", "Annual team retreats",
  "Health insurance", "Performance bonuses", "Latest hardware", "Open source Fridays",
];

const openings: { title: string; type: string; team: string }[] = [
  { title: "Senior React Engineer", type: "Full-time · Remote", team: "Engineering" },
  { title: "Senior Backend Engineer (Node.js)", type: "Full-time · Remote", team: "Engineering" },
  { title: "Product Designer", type: "Full-time · Remote", team: "Design" },
  { title: "Project Manager", type: "Full-time · Remote", team: "Operations" },
];

export default function CareersPage() {
  return (
    <PageLayout>
      <PageHero
        label="Careers"
        title="Build the Future With Us"
        subtitle="Join a team of ambitious engineers, designers, and strategists working on challenging problems for global clients."
      />

      {/* Culture */}
      <section className="section-spacing bg-background">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <SectionLabel>Why NexaBuild</SectionLabel>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-6">Work on meaningful problems</h2>
              <p className="text-base font-body text-muted-foreground leading-relaxed mb-4">
                At NexaBuild, you'll work on real products for real businesses — not internal tools nobody sees. Every project ships, every line of code reaches users, and every design decision impacts a business.
              </p>
              <p className="text-base font-body text-muted-foreground leading-relaxed">
                We're a remote-first team that values ownership, quality, and continuous learning. We invest in our people because they're the reason our clients come back.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <SectionLabel>Perks & Benefits</SectionLabel>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-2 p-3 rounded-xl bg-muted">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm font-body">{perk}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="section-spacing bg-muted">
        <div className="container-wide section-padding">
          <AnimatedSection>
            <SectionLabel>Open Positions</SectionLabel>
            <h2 className="text-3xl font-heading font-bold tracking-tight mb-14">Current openings</h2>
          </AnimatedSection>
          <div className="max-w-3xl space-y-4">
            {openings.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 0.08}>
                <div className="card-premium p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-semibold text-base">{job.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs font-body text-muted-foreground">{job.type}</span>
                      <span className="pill-accent text-[10px]">{job.team}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="btn-outline text-xs shrink-0">
                    Apply Now <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-12 card-premium p-8 max-w-3xl text-center">
              <Briefcase className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">Don't see your role?</h3>
              <p className="text-sm font-body text-muted-foreground mb-4">We're always looking for talented people. Send us your resume and we'll keep you in mind.</p>
              <Link href="/contact" className="btn-primary text-xs">Send Your Resume <ArrowRight className="w-3 h-3" /></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
