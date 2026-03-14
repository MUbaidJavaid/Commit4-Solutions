 "use client";

import Link from "next/link";
import { ArrowRight, Building2, Stethoscope, ShoppingCart, GraduationCap, Home, Truck, UtensilsCrossed, Cloud, Brain, Building } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const industries = [
  { icon: Building2, title: "Fintech", desc: "Payment platforms, banking apps, trading dashboards, and regulatory-compliant financial products built for security and performance.", solutions: ["Payment gateways", "Trading platforms", "Banking apps", "Compliance tools"] },
  { icon: Stethoscope, title: "Healthcare", desc: "HIPAA-compliant telehealth, EHR integrations, patient portals, and medical device interfaces that prioritize safety and usability.", solutions: ["Telehealth platforms", "Patient portals", "EHR integrations", "Medical IoT"] },
  { icon: ShoppingCart, title: "Ecommerce", desc: "High-converting storefronts, marketplace platforms, inventory systems, and omnichannel commerce solutions that drive revenue.", solutions: ["Custom storefronts", "Marketplace platforms", "Inventory management", "POS systems"] },
  { icon: GraduationCap, title: "Education", desc: "LMS platforms, interactive learning tools, assessment systems, and EdTech products that transform how people learn.", solutions: ["LMS platforms", "Virtual classrooms", "Assessment engines", "Content management"] },
  { icon: Home, title: "Real Estate", desc: "Property management CRMs, listing platforms, virtual tour systems, and real estate marketplaces that streamline transactions.", solutions: ["Property CRMs", "Listing platforms", "Virtual tours", "Transaction management"] },
  { icon: Truck, title: "Logistics", desc: "Fleet management, route optimization, warehouse management, and supply chain visibility platforms that reduce costs.", solutions: ["Fleet tracking", "Route optimization", "Warehouse management", "Supply chain visibility"] },
  { icon: UtensilsCrossed, title: "Food & Grocery", desc: "Delivery platforms, restaurant management systems, kitchen display systems, and food-tech solutions that improve operations.", solutions: ["Delivery apps", "Restaurant POS", "Kitchen displays", "Inventory tracking"] },
  { icon: Cloud, title: "SaaS", desc: "Multi-tenant platforms, subscription billing systems, analytics dashboards, and B2B/B2C SaaS products built for scale.", solutions: ["Multi-tenant platforms", "Billing systems", "Analytics dashboards", "API platforms"] },
  { icon: Brain, title: "AI Startups", desc: "AI/ML product development, model deployment infrastructure, data pipelines, and intelligent feature integration for startups.", solutions: ["ML model deployment", "Data pipelines", "AI-powered features", "Chatbot platforms"] },
  { icon: Building, title: "Enterprise", desc: "Enterprise resource planning, workflow automation, internal tools, and digital transformation solutions for large organizations.", solutions: ["ERP systems", "Workflow automation", "Internal tools", "Digital transformation"] },
];

const workCategories = [
  { title: "Web Applications", count: "45+" },
  { title: "Mobile Apps", count: "32+" },
  { title: "SaaS Platforms", count: "28+" },
  { title: "Ecommerce Stores", count: "18+" },
  { title: "CRM / ERP Systems", count: "15+" },
  { title: "AI Tools & Automation", count: "12+" },
  { title: "Landing Pages", count: "50+" },
];

export default function IndustriesPage() {
  return (
    <PageLayout>
      <PageHero
        label="Who We Serve"
        title="Deep Industry Expertise Across Verticals"
        subtitle="We bring specialized knowledge to every vertical, understanding the unique challenges, regulations, and user expectations that define your industry."
      />

      {/* Industries */}
      <section className="section-spacing bg-background">
        <div className="container-wide section-padding">
          <AnimatedSection>
            <SectionLabel>Industries</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-14">Sectors we specialize in</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.title} delay={i * 0.05}>
                <div className="card-premium p-6 h-full group hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <ind.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{ind.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">{ind.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.solutions.map((s) => (
                      <span key={s} className="text-[11px] font-body px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{s}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Work Categories */}
      <section className="section-spacing bg-muted">
        <div className="container-wide section-padding">
          <AnimatedSection>
            <SectionLabel>Solutions Portfolio</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-14">What we've built — by category</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workCategories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.05}>
                <Link href="/our-work" className="card-premium p-6 text-center hover:-translate-y-1 transition-all duration-300 group block">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">{cat.count}</div>
                  <div className="text-sm font-body font-semibold group-hover:text-accent transition-colors">{cat.title}</div>
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
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-6">Don't see your industry?</h2>
            <p className="text-base font-body text-primary-foreground/70 max-w-lg mx-auto mb-8">
              Our engineering principles apply across domains. Let's discuss how we can help.
            </p>
            <Link href="/contact" className="btn-accent">Talk to Us <ArrowRight className="w-4 h-4" /></Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
