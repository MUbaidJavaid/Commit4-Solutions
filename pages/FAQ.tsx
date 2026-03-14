 "use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const faqCategories = [
  {
    category: "General",
    faqs: [
      { q: "What kind of projects do you work on?", a: "We work on custom software products — SaaS platforms, mobile apps, web applications, AI solutions, ecommerce stores, and enterprise tools. We specialize in complex, business-critical projects." },
      { q: "Where is your team based?", a: "We have team members across San Francisco, London, and South Asia. We work in overlapping time zones to ensure real-time collaboration." },
      { q: "What industries do you serve?", a: "We serve Fintech, Healthcare, Ecommerce, Education, Real Estate, Logistics, SaaS, and Enterprise sectors. Our engineering principles apply across domains." },
    ],
  },
  {
    category: "Process & Delivery",
    faqs: [
      { q: "How long does a typical project take?", a: "MVPs typically take 8-14 weeks. Full products take 16-32 weeks. We provide detailed timelines during the discovery phase." },
      { q: "What development methodology do you use?", a: "We use Agile/Scrum with 2-week sprints, daily standups, weekly demos, and continuous deployment. You'll have full visibility into progress." },
      { q: "Do you provide post-launch support?", a: "Yes. We offer SLA-based support packages, ongoing maintenance, and retainer arrangements for continued development." },
      { q: "How do you handle project management?", a: "Each project gets a dedicated PM, Slack channel, weekly video reviews, and access to a real-time project dashboard." },
    ],
  },
  {
    category: "Pricing & Engagement",
    faqs: [
      { q: "How much does a project cost?", a: "Projects range from $25K for MVPs to $250K+ for complex enterprise systems. We provide transparent estimates after a discovery phase." },
      { q: "What engagement models do you offer?", a: "We offer dedicated team, project-based, and team augmentation models. Each is designed for different project types and budgets." },
      { q: "Do you require a minimum project size?", a: "We typically work on projects starting at $25K. For smaller needs, we offer team augmentation starting at 20 hours/week." },
    ],
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <PageLayout>
      <PageHero
        label="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with NexaBuild. Can't find what you're looking for? Contact us."
        ctaText="Contact Us"
        ctaHref="/contact"
      />

      <section className="section-spacing bg-background">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((cat, ci) => (
              <AnimatedSection key={cat.category} delay={ci * 0.05}>
                <h2 className="text-xl font-heading font-bold mb-6">{cat.category}</h2>
                <div className="space-y-3">
                  {cat.faqs.map((faq, fi) => {
                    const key = `${ci}-${fi}`;
                    return (
                      <button
                        key={key}
                        onClick={() => toggle(key)}
                        className="w-full text-left card-premium p-5 transition-all"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="font-heading font-semibold text-sm">{faq.q}</h3>
                          <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${openItems[key] ? "rotate-180" : ""}`} />
                        </div>
                        {openItems[key] && (
                          <p className="text-sm font-body text-muted-foreground leading-relaxed mt-3">{faq.a}</p>
                        )}
                      </button>
                    );
                  })}
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
            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">Still have questions?</h2>
            <p className="text-base font-body text-primary-foreground/70 max-w-lg mx-auto mb-8">
              We'd love to hear from you. Schedule a free consultation to discuss your project.
            </p>
            <Link href="/contact" className="btn-accent">Get in Touch <ArrowRight className="w-4 h-4" /></Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
