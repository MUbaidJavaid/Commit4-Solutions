import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../shared/AnimatedSection";
import SectionLabel from "../shared/SectionLabel";
import ImgSphereDemo from "@/components/ui/img-sphere-demo";

const categories = ["All", "Front-End", "Back-End", "Mobile", "AI & ML", "Database", "DevOps"];

interface Tech {
  name: string;
  category: string;
  color: string;
}

const technologies: Tech[] = [
  // Front-End
  { name: "React", category: "Front-End", color: "bg-blue-brand/10 text-blue-brand" },
  { name: "Next.js", category: "Front-End", color: "bg-foreground/10 text-foreground" },
  { name: "Vue.js", category: "Front-End", color: "bg-accent/10 text-accent" },
  { name: "TypeScript", category: "Front-End", color: "bg-blue-brand/10 text-blue-brand" },
  { name: "Tailwind CSS", category: "Front-End", color: "bg-accent/10 text-accent" },
  // Back-End
  { name: "Node.js", category: "Back-End", color: "bg-accent/10 text-accent" },
  { name: "Python", category: "Back-End", color: "bg-blue-brand/10 text-blue-brand" },
  { name: "Java", category: "Back-End", color: "bg-destructive/10 text-destructive" },
  { name: "Go", category: "Back-End", color: "bg-accent/10 text-accent" },
  { name: "Rust", category: "Back-End", color: "bg-foreground/10 text-foreground" },
  { name: "GraphQL", category: "Back-End", color: "bg-lavender/30 text-foreground" },
  // Mobile
  { name: "Flutter", category: "Mobile", color: "bg-blue-brand/10 text-blue-brand" },
  { name: "React Native", category: "Mobile", color: "bg-blue-brand/10 text-blue-brand" },
  { name: "Swift", category: "Mobile", color: "bg-destructive/10 text-destructive" },
  { name: "Kotlin", category: "Mobile", color: "bg-lavender/30 text-foreground" },
  // AI & ML
  { name: "TensorFlow", category: "AI & ML", color: "bg-accent/10 text-accent" },
  { name: "PyTorch", category: "AI & ML", color: "bg-destructive/10 text-destructive" },
  { name: "OpenAI", category: "AI & ML", color: "bg-foreground/10 text-foreground" },
  { name: "LangChain", category: "AI & ML", color: "bg-accent/10 text-accent" },
  // Database
  { name: "PostgreSQL", category: "Database", color: "bg-blue-brand/10 text-blue-brand" },
  { name: "MongoDB", category: "Database", color: "bg-accent/10 text-accent" },
  { name: "Redis", category: "Database", color: "bg-destructive/10 text-destructive" },
  { name: "Supabase", category: "Database", color: "bg-accent/10 text-accent" },
  // DevOps
  { name: "AWS", category: "DevOps", color: "bg-foreground/10 text-foreground" },
  { name: "Docker", category: "DevOps", color: "bg-blue-brand/10 text-blue-brand" },
  { name: "Kubernetes", category: "DevOps", color: "bg-blue-brand/10 text-blue-brand" },
  { name: "Terraform", category: "DevOps", color: "bg-lavender/30 text-foreground" },
  { name: "GitHub Actions", category: "DevOps", color: "bg-foreground/10 text-foreground" },
];

export default function TechStackSection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? technologies : technologies.filter(t => t.category === active);

  return (
    <section className="section-spacing bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-brand/5 blur-[100px]" />

      <div className="relative container-wide section-padding">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-body font-semibold tracking-widest uppercase text-accent">Technology</span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight max-w-xl leading-tight">
              Built with the best tools in the industry
            </h2>
            <p className="text-base font-body text-primary-foreground/50 max-w-md">
              We choose the right technology for each project — never forcing a one-size-fits-all approach.
            </p>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-xs font-body font-semibold transition-all duration-300 ${
                  active === cat
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-primary-foreground/5 text-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group bg-primary-foreground/[0.04] border border-primary-foreground/[0.08] rounded-2xl p-5 hover:bg-primary-foreground/[0.08] hover:border-primary-foreground/[0.15] transition-all duration-500 cursor-default"
              >
                <div
                  className={`inline-flex px-2.5 py-1 rounded-lg text-[10px] font-body font-bold mb-3 ${tech.color}`}
                >
                  {tech.category}
                </div>
                <h3 className="font-heading font-semibold text-sm text-primary-foreground group-hover:text-accent transition-colors duration-300">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 3D Tech stack sphere */}
        <div className="mt-16 flex justify-center">
          <ImgSphereDemo />
        </div>
      </div>
    </section>
  );
}
