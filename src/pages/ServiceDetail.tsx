 "use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle, ChevronDown } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";
import { getServiceBySlug, services } from "@/data/services";
import { useState } from "react";

interface Props {
  slug: string;
}

export default function ServiceDetail({ slug }: Props) {
  const service = getServiceBySlug(slug || "");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) {
    return (
      <PageLayout>
        <div className="container-wide section-padding py-32 text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Service not found</h1>
          <Link href="/services" className="btn-primary">Back to Services <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </PageLayout>
    );
  }

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-green-light/20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="relative container-wide section-padding py-20 lg:py-28">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <AnimatedSection>
            <div className="w-14 h-14 rounded-2xl bg-green-light flex items-center justify-center mb-6">
              <service.icon className="w-7 h-7 text-accent" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight max-w-3xl leading-[1.1] mb-6">
              {service.heroTitle}
            </h1>
            <p className="text-lg font-body text-muted-foreground max-w-2xl leading-relaxed mb-8">{service.heroSubtitle}</p>
            <Link href="/contact" className="btn-primary">Discuss This Service <ArrowRight className="w-4 h-4" /></Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="section-spacing bg-background">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <SectionLabel>Overview</SectionLabel>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-6">What we deliver</h2>
              <p className="text-base font-body text-muted-foreground leading-relaxed">{service.overview}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <SectionLabel>Key Benefits</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-body text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Capabilities + Technologies */}
      <section className="section-spacing bg-muted">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <SectionLabel>Capabilities</SectionLabel>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-8">What we can build</h2>
              <div className="space-y-3">
                {service.capabilities.map((c) => (
                  <div key={c} className="flex items-center gap-3 p-3 rounded-xl bg-background">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm font-body">{c}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <SectionLabel>Technologies</SectionLabel>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-8">Our tech stack</h2>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((t) => (
                  <span key={t} className="pill-accent text-sm">{t}</span>
                ))}
              </div>
              <div className="mt-12">
                <SectionLabel>Industries Served</SectionLabel>
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.industries.map((ind) => (
                    <span key={ind} className="pill-lavender text-sm">{ind}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-spacing bg-background">
        <div className="container-wide section-padding">
          <AnimatedSection>
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="text-3xl font-heading font-bold tracking-tight mb-14">How we deliver</h2>
          </AnimatedSection>
          <div className="space-y-6 max-w-3xl">
            {service.process.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-heading font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    {i < service.process.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-heading font-semibold text-lg mb-2">{step.step}</h3>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
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
            <h2 className="text-3xl font-heading font-bold tracking-tight mb-14">Common questions</h2>
          </AnimatedSection>
          <div className="max-w-3xl space-y-3">
            {service.faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left card-premium p-6 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-heading font-semibold text-base">{faq.q}</h3>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </div>
                  {openFaq === i && (
                    <p className="text-sm font-body text-muted-foreground leading-relaxed mt-4">{faq.a}</p>
                  )}
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-spacing bg-background">
        <div className="container-wide section-padding">
          <AnimatedSection>
            <SectionLabel>Explore More</SectionLabel>
            <h2 className="text-3xl font-heading font-bold tracking-tight mb-14">Other services</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherServices.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.05}>
                <Link href={`/services/${s.slug}`} className="group card-premium p-6 hover:-translate-y-1 transition-all duration-300">
                  <s.icon className="w-5 h-5 text-accent mb-3" />
                  <h3 className="font-heading font-semibold text-base mb-2">{s.title}</h3>
                  <p className="text-sm font-body text-muted-foreground">{s.shortDesc}</p>
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
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Ready to get started with {service.title.toLowerCase()}?
            </h2>
            <p className="text-base font-body text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Share your project details and we'll craft a tailored approach within 24 hours.
            </p>
            <Link href="/contact" className="btn-accent">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
