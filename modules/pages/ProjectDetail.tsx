 "use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";
import { getProjectBySlug, projects } from "@/data/projects";

interface Props {
  slug: string;
}

export default function ProjectDetail({ slug }: Props) {
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <PageLayout>
        <div className="container-wide section-padding py-32 text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Project not found</h1>
          <Link href="/our-work" className="btn-primary">Back to Work <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </PageLayout>
    );
  }

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-64 sm:h-80 lg:h-[420px]">
          <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container-wide section-padding -mt-24 relative z-10">
          <Link href="/our-work" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>
          <AnimatedSection>
            <span className="pill-accent mb-4">{project.category}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight mt-3 mb-4">{project.title}</h1>
            <p className="text-lg font-body text-muted-foreground max-w-2xl">{project.shortDesc}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="bg-muted py-10">
        <div className="container-wide section-padding">
          <div className="flex flex-wrap gap-8">
            {project.results.map((r) => (
              <div key={r} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-sm font-body font-semibold">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="section-spacing bg-background">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <SectionLabel>The Challenge</SectionLabel>
              <p className="text-base font-body text-muted-foreground leading-relaxed mt-4">{project.challenge}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <SectionLabel>Our Solution</SectionLabel>
              <p className="text-base font-body text-muted-foreground leading-relaxed mt-4">{project.solution}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features + Tech */}
      <section className="section-spacing bg-muted">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <SectionLabel>Key Features</SectionLabel>
              <div className="space-y-3 mt-6">
                {project.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 p-3 rounded-xl bg-background">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm font-body">{f}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <SectionLabel>Technology Stack</SectionLabel>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.techStack.map((t) => (
                  <span key={t} className="pill-accent text-sm">{t}</span>
                ))}
              </div>
              <div className="mt-10 card-premium p-6">
                <div className="text-sm font-body text-muted-foreground mb-1">Timeline</div>
                <div className="text-2xl font-heading font-bold">{project.timeline}</div>
              </div>
              <div className="mt-4 card-premium p-6">
                <div className="text-sm font-body text-muted-foreground mb-1">Industry</div>
                <div className="text-2xl font-heading font-bold">{project.industry}</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="section-spacing bg-background">
        <div className="container-wide section-padding">
          <AnimatedSection>
            <SectionLabel>More Work</SectionLabel>
            <h2 className="text-3xl font-heading font-bold tracking-tight mb-14">Explore other projects</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((p, i) => (
              <AnimatedSection key={p.slug} delay={i * 0.1}>
                <Link href={`/our-work/${p.slug}`} className="group card-premium overflow-hidden flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-48 h-40 sm:h-32 shrink-0">
                    <Image src={p.imageUrl} alt={p.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-body text-accent">{p.category}</span>
                    <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                    <p className="text-sm font-body text-muted-foreground">{p.shortDesc}</p>
                  </div>
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
            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">Want similar results?</h2>
            <p className="text-base font-body text-primary-foreground/70 max-w-lg mx-auto mb-8">
              Let's discuss your project and create a custom solution for your business.
            </p>
            <Link href="/contact" className="btn-accent">Start Your Project <ArrowRight className="w-4 h-4" /></Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
