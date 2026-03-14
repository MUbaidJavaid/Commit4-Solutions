 "use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionLabel from "./SectionLabel";

interface Props {
  label: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function PageHero({ label, title, subtitle, ctaText, ctaHref }: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-brand/3 blur-[100px]" />
      
      {/* Geometric accent */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full border border-accent/8 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full border border-accent/4 -translate-y-1/2 translate-x-1/2" />

      <div className="relative container-wide section-padding py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>{label}</SectionLabel>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight max-w-3xl leading-[1.08] mb-6">
            {title}
          </h1>
          <p className="text-lg font-body text-muted-foreground max-w-2xl leading-relaxed mb-8">{subtitle}</p>
          {ctaText && ctaHref && (
            <Link href={ctaHref} className="btn-primary shadow-lg">
              {ctaText} <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
