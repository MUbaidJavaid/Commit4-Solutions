 "use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";
import { getHireDevBySlug, hireDevRoles } from "@/data/hireDev";

interface Props {
  slug: string;
}

export default function HireDevDetail({ slug }: Props) {
  const role = getHireDevBySlug(slug || "");

  if (!role) {
    return (
      <PageLayout>
        <div className="container-wide section-padding py-32 text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Role not found</h1>
          <Link href="/hire-developers" className="btn-primary">Back to Hire Dev <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </PageLayout>
    );
  }

  const otherRoles = hireDevRoles.filter((r) => r.slug !== slug).slice(0, 3);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-green-light/20" />
        <div className="relative container-wide section-padding py-20 lg:py-28">
          <Link href="/hire-developers" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> All Roles
          </Link>
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight max-w-3xl leading-[1.1] mb-6">{role.title}</h1>
            <p className="text-lg font-body text-muted-foreground max-w-2xl leading-relaxed mb-8">{role.description}</p>
            <Link href="/contact" className="btn-primary">Hire Now <ArrowRight className="w-4 h-4" /></Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Details */}
      <section className="section-spacing bg-background">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <SectionLabel>Responsibilities</SectionLabel>
              <div className="space-y-3 mt-6">
                {role.responsibilities.map((r) => (
                  <div key={r} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-body">{r}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <SectionLabel>When to Hire</SectionLabel>
                <div className="space-y-3 mt-6">
                  {role.useCases.map((u) => (
                    <div key={u} className="flex items-start gap-3 p-3 rounded-xl bg-muted">
                      <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span className="text-sm font-body">{u}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <SectionLabel>Skills & Technologies</SectionLabel>
              <div className="flex flex-wrap gap-2 mt-6">
                {role.skills.map((s) => (
                  <span key={s} className="pill-accent text-sm">{s}</span>
                ))}
              </div>

              <div className="mt-12">
                <SectionLabel>Hiring Models</SectionLabel>
                <div className="space-y-3 mt-6">
                  {role.hiringModels.map((m) => (
                    <div key={m} className="card-premium p-4 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm font-body font-semibold">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Other Roles */}
      <section className="section-spacing bg-muted">
        <div className="container-wide section-padding">
          <AnimatedSection>
            <SectionLabel>Explore More</SectionLabel>
            <h2 className="text-3xl font-heading font-bold tracking-tight mb-14">Other roles available</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherRoles.map((r, i) => (
              <AnimatedSection key={r.slug} delay={i * 0.05}>
                <Link href={`/hire-developers/${r.slug}`} className="group card-premium p-6 hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-accent transition-colors">{r.shortTitle}</h3>
                  <p className="text-sm font-body text-muted-foreground">{r.description}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary">
        <div className="container-wide section-padding text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">Ready to hire a {role.shortTitle.toLowerCase()}?</h2>
            <p className="text-base font-body text-primary-foreground/70 max-w-lg mx-auto mb-8">
              Share your requirements and we'll match you with the perfect candidate within 48 hours.
            </p>
            <Link href="/contact" className="btn-accent">Get Started <ArrowRight className="w-4 h-4" /></Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
