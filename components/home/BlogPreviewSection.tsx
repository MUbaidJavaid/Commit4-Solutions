 "use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "../shared/AnimatedSection";
import SectionLabel from "../shared/SectionLabel";
import { blogs } from "@/data/blogs";

export default function BlogPreviewSection() {
  const featured = blogs.slice(0, 3);
  const hero = featured[0];
  const rest = featured.slice(1);

  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-lavender/8 blur-[100px]" />

      <div className="relative container-wide section-padding">
        <AnimatedSection>
          <SectionLabel>Insights</SectionLabel>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight max-w-xl leading-tight">
              Perspectives from the build floor
            </h2>
            <Link href="/blog" className="btn-outline text-xs mt-2">
              All Articles <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Editorial layout: hero + side list */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Hero article */}
          <AnimatedSection className="lg:col-span-3">
            <Link href={`/blog/${hero.slug}`} className="group relative overflow-hidden rounded-3xl h-full min-h-[380px] flex flex-col justify-end">
              <Image
                src={hero.imageUrl}
                alt={hero.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
              <div className="relative p-8">
                <span className="pill-accent shadow-sm mb-3 inline-flex">{hero.category}</span>
                <h3 className="font-heading font-bold text-xl lg:text-2xl text-primary-foreground mb-2 leading-snug">{hero.title}</h3>
                <p className="text-sm font-body text-primary-foreground/70 max-w-md mb-3">{hero.excerpt}</p>
                <div className="flex items-center gap-4 text-xs font-body text-primary-foreground/50">
                  <span>{hero.author}</span>
                  <span>·</span>
                  <span>{hero.readTime}</span>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Side articles */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {rest.map((article, i) => (
              <AnimatedSection key={article.slug} delay={(i + 1) * 0.1}>
                <Link href={`/blog/${article.slug}`} className="group flex gap-4 items-start p-4 rounded-2xl border border-border/50 bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-500">
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-body font-semibold text-accent mb-1 block">{article.category}</span>
                    <h3 className="font-heading font-semibold text-sm mb-1.5 group-hover:text-accent transition-colors duration-300 leading-snug line-clamp-2">{article.title}</h3>
                    <div className="flex items-center gap-2 text-[11px] font-body text-muted-foreground">
                      <span>{article.author}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
