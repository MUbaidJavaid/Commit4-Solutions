 "use client";

import { ArrowRight, Play, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroModularShapes } from "../shared/ModularShapes";

const logos = ["Google", "Amazon", "Shopify", "Stripe", "Slack", "Netflix", "Zoom", "Airbnb", "HubSpot"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Premium background mesh */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute top-20 right-0 w-[700px] h-[700px] rounded-full bg-accent/6 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-brand/4 blur-[100px]" />
      
      {/* Geometric grid pattern */}
      <div className="absolute inset-0 geo-dots opacity-30" />

      <div className="relative container-wide section-padding pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="pill-accent mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 animate-pulse" />
                Engineering Digital Excellence
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-heading font-bold leading-[1.08] tracking-tight mb-6"
            >
              We Build Scalable
              <br />
              <span className="text-gradient">Digital Products</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg font-body text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              From product strategy to scalable engineering — we partner with ambitious companies to design, build, and launch digital products that win.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link href="/contact" className="btn-primary shadow-lg hover:shadow-xl">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/work" className="btn-outline">
                <Play className="w-4 h-4" /> View Our Work
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
            >
              {[
                { value: "150+", label: "Projects Delivered" },
                { value: "40+", label: "Global Clients" },
                { value: "98%", label: "Client Retention" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  {i > 0 && <div className="hidden sm:block w-px h-8 bg-border" />}
                  <div>
                    <div className="text-2xl font-heading font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs font-body text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Modular shapes visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg ml-auto">
              {/* Background decorative circles */}
              <div className="absolute -top-8 -right-8 w-72 h-72 rounded-full border border-accent/10" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 rounded-full border border-blue-brand/10" />
              
              {/* Modular shapes as hero graphic */}
              <HeroModularShapes className="absolute inset-0" />

              {/* Floating cards on top of shapes */}
              <motion.div 
                className="absolute top-8 right-4 card-dark p-5 shadow-xl z-20 w-[240px]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-brand/60" />
                  <span className="text-[10px] font-body text-primary-foreground/40 ml-2">system.ts</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex gap-2">
                    <div className="h-2 bg-accent/30 rounded w-16" />
                    <div className="h-2 bg-primary-foreground/10 rounded w-20" />
                  </div>
                  <div className="flex gap-2 ml-4">
                    <div className="h-2 bg-blue-brand/30 rounded w-20" />
                    <div className="h-2 bg-primary-foreground/10 rounded w-12" />
                  </div>
                  <div className="flex gap-2 ml-4">
                    <div className="h-2 bg-accent/20 rounded w-24" />
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="h-7 w-16 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-[8px] font-body font-bold text-accent-foreground">Deploy</span>
                  </div>
                  <div className="h-7 w-12 bg-primary-foreground/10 rounded-lg" />
                </div>
              </motion.div>

              {/* Stats card */}
              <motion.div 
                className="absolute bottom-16 left-0 card-glass p-4 shadow-lg z-30 w-[220px]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-xs font-body font-semibold text-muted-foreground mb-2">Revenue Growth</div>
                <div className="flex items-end gap-0.5 h-10">
                  {[25, 40, 30, 50, 45, 65, 55, 75, 70, 85, 80, 95].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%` }}>
                      <div className={`w-full h-full rounded-sm ${i >= 8 ? 'bg-accent' : 'bg-accent/30'}`} />
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-heading font-bold text-foreground">+47%</span>
                  <span className="text-[9px] font-body text-accent font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> This Quarter
                  </span>
                </div>
              </motion.div>

              {/* Notification */}
              <motion.div
                className="absolute top-[35%] -left-2 card-glass px-3 py-2 shadow-md z-40"
                animate={{ y: [0, -4, 0], x: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-body font-medium">Build successful</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Client logos — infinite marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 pt-12 border-t border-border/50"
        >
          <p className="text-xs font-body text-muted-foreground mb-6 tracking-wide uppercase">Built with the standards trusted by modern product teams</p>
          <div className="relative overflow-hidden group">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <span
                  key={`${logo}-${i}`}
                  className="text-lg font-heading font-bold text-foreground/15 hover:text-foreground/40 transition-colors duration-500 cursor-default shrink-0 mx-8 sm:mx-12"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
