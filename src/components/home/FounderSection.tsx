import { motion } from "framer-motion";
import AnimatedSection from "../shared/AnimatedSection";
import SectionLabel from "../shared/SectionLabel";

export default function FounderSection() {
  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-lavender/8 blur-[120px]" />

      <div className="relative container-wide section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <motion.div
                className="relative overflow-hidden rounded-3xl shadow-xl"
                style={{ borderRadius: "40% 40% 4% 4% / 20% 20% 4% 4%" }}
                whileInView={{ scale: [0.95, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/commit4solutions-log.png"
                  alt="Commit4Solutions leadership"
                  className="w-full h-[400px] object-contain bg-background"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              </motion.div>
              {/* Floating credential card */}
              <motion.div
                className="absolute -bottom-4 -right-4 lg:-right-8 card-glass px-4 py-3 shadow-lg"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs font-body font-semibold text-foreground">Arjun Mehta</div>
                <div className="text-[10px] font-body text-muted-foreground">Founder & CEO • 15+ yrs</div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Quote */}
          <AnimatedSection delay={0.15}>
            <SectionLabel>From Our Founder</SectionLabel>
            <blockquote className="text-xl sm:text-2xl font-heading font-medium leading-relaxed mb-6 text-foreground">
              "We built NexaBuild because we were tired of seeing great ideas fail due to poor execution. Every product deserves engineering that matches its ambition."
            </blockquote>
            <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
              Our philosophy is simple: treat every project like a startup we co-founded. We invest the same care, urgency, and strategic thinking that founders bring to their own products. That's why 98% of our clients stay with us beyond the first project.
            </p>
            <div className="flex items-center gap-6">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "$500M+", label: "Value Created" },
                { value: "98%", label: "Retention Rate" },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-lg font-heading font-bold text-accent">{stat.value}</div>
                  <div className="text-[10px] font-body text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
