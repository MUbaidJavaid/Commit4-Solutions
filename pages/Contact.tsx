 "use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";
import { createLead } from "@/lib/api/storage";
import { toast } from "sonner";

const serviceOptions = ["Backend Development", "Frontend Development", "Mobile App Development", "UI/UX Design", "AI Automation", "SaaS Product", "Ecommerce", "CRM Solution", "Other"];
const budgetOptions = ["$10K - $25K", "$25K - $50K", "$50K - $100K", "$100K - $250K", "$250K+"];
const timelineOptions = ["ASAP", "1-2 months", "3-4 months", "6+ months", "Flexible"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "", email: "", company: "", service: "", budget: "", timeline: "", message: ""
  });

  const update = (key: string, value: string) => setForm(prev => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createLead(form);
    toast.success("Brief submitted successfully!");
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-green-light/20" />
        <div className="relative container-wide section-padding py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — Info */}
            <AnimatedSection>
              <SectionLabel>Contact Us</SectionLabel>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight leading-[1.1] mb-6">
                Let's Build <span className="text-accent">Something Great</span>
              </h1>
              <p className="text-lg font-body text-muted-foreground leading-relaxed mb-10">
                Submit a short brief and our team will get back to you within 24 hours with a tailored approach, timeline, and estimate.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center"><Mail className="w-5 h-5 text-accent" /></div>
                  <div>
                    <div className="text-sm font-body font-semibold">Email</div>
                    <div className="text-sm font-body text-muted-foreground">hello@nexabuild.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center"><Phone className="w-5 h-5 text-accent" /></div>
                  <div>
                    <div className="text-sm font-body font-semibold">Phone</div>
                    <div className="text-sm font-body text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center"><MapPin className="w-5 h-5 text-accent" /></div>
                  <div>
                    <div className="text-sm font-body font-semibold">Office</div>
                    <div className="text-sm font-body text-muted-foreground">San Francisco, CA · London, UK</div>
                  </div>
                </div>
              </div>

              <div className="card-dark p-6 rounded-2xl">
                <h3 className="font-heading font-semibold text-primary-foreground mb-4">What happens next?</h3>
                <div className="space-y-3">
                  {["We review your brief within 24 hours", "A senior consultant schedules a call", "We present a tailored proposal & estimate", "Kick off within 1-2 weeks"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xs font-bold">{i + 1}</div>
                      <span className="text-sm font-body text-primary-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right — Form */}
            <AnimatedSection delay={0.15}>
              {submitted ? (
                <div className="card-premium p-10 text-center">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h2 className="text-2xl font-heading font-bold mb-4">Brief Received!</h2>
                  <p className="text-sm font-body text-muted-foreground">We'll review your project and get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-premium p-8 space-y-5">
                  <h2 className="font-heading font-bold text-xl mb-2">Submit Your Project Brief</h2>
                  <p className="text-sm font-body text-muted-foreground mb-6">Tell us about your project and we'll craft a tailored solution.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-body font-semibold mb-1.5 block">Full Name *</label>
                      <input type="text" required value={form.fullName} onChange={e => update("fullName", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="text-sm font-body font-semibold mb-1.5 block">Email *</label>
                      <input type="email" required value={form.email} onChange={e => update("email", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="john@company.com" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-body font-semibold mb-1.5 block">Company</label>
                    <input type="text" value={form.company} onChange={e => update("company", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="Your company name" />
                  </div>

                  <div>
                    <label className="text-sm font-body font-semibold mb-1.5 block">Service Required *</label>
                    <select required value={form.service} onChange={e => update("service", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30">
                      <option value="">Select a service</option>
                      {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-body font-semibold mb-1.5 block">Budget Range</label>
                      <select value={form.budget} onChange={e => update("budget", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30">
                        <option value="">Select budget</option>
                        {budgetOptions.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-body font-semibold mb-1.5 block">Timeline</label>
                      <select value={form.timeline} onChange={e => update("timeline", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30">
                        <option value="">Select timeline</option>
                        {timelineOptions.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-body font-semibold mb-1.5 block">Project Summary *</label>
                    <textarea required rows={4} value={form.message} onChange={e => update("message", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none" placeholder="Describe your project, goals, and any specific requirements..." />
                  </div>

                  <div>
                    <label className="text-sm font-body font-semibold mb-1.5 block">Attachment (optional)</label>
                    <div className="w-full px-4 py-6 rounded-xl border-2 border-dashed border-border bg-muted/50 text-center">
                      <p className="text-xs font-body text-muted-foreground">Drag & drop files or click to browse</p>
                      <p className="text-[10px] font-body text-muted-foreground mt-1">PDF, DOC, or images up to 10MB</p>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Submit Brief <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] font-body text-muted-foreground text-center">
                    By submitting, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
