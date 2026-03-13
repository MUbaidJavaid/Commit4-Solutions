 "use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "../shared/AnimatedSection";
import { FloatingModularAccent } from "../shared/ModularShapes";

export default function ContactCTASection() {
  return (
    <section className="section-spacing bg-muted">
      <div className="container-wide section-padding">
        <AnimatedSection>
          <div className="bg-primary text-primary-foreground rounded-[2rem] p-10 sm:p-16 lg:p-20 relative overflow-hidden">
            {/* Premium decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/8 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-brand/6 blur-[80px]" />
            
            {/* Modular shapes decoration */}
            <div className="absolute top-4 right-4 w-40 h-32 opacity-40">
              <FloatingModularAccent />
            </div>
            <div className="absolute bottom-4 left-4 w-32 h-24 opacity-20 rotate-180">
              <FloatingModularAccent />
            </div>

            {/* Concentric rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-primary-foreground/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary-foreground/3" />

            <div className="relative text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-body font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Ready to Start
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-4 leading-tight">
                Ready to build something
                <br className="hidden sm:block" />
                <span className="text-accent"> extraordinary?</span>
              </h2>
              <p className="text-base font-body text-primary-foreground/60 max-w-lg mx-auto mb-8 leading-relaxed">
                Tell us about your project. We'll get back to you within 24 hours with a strategic roadmap and honest estimate.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn-accent shadow-lg">
                  Submit Your Brief <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/work" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary-foreground/20 text-primary-foreground font-body font-semibold text-sm rounded-full hover:border-primary-foreground/50 hover:bg-primary-foreground/5 transition-all duration-300">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
