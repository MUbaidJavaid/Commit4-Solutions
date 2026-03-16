//  "use client";

import PageLayout from '@/components/layout/PageLayout'
import AnimatedSection from '@/components/shared/AnimatedSection'
import PageHero from '@/components/shared/PageHero'
import { projects } from '@/data/projects'
import { ArrowUpRight, Link } from 'lucide-react'
import { useState } from 'react'

// import { useState } from "react";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";
// import PageLayout from "@/components/layout/PageLayout";
// import PageHero from "@/components/shared/PageHero";
// import AnimatedSection from "@/components/shared/AnimatedSection";
// import { projects } from "@/data/projects";

const categories = [
  'All',
  'Fintech',
  'Healthcare',
  'Ecommerce',
  'Education',
  'Real Estate',
  'Logistics'
]

// export default function WorkPage() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.industry === activeCategory);

//   return (
//     <PageLayout>
//       <PageHero
//         label="Our Work"
//         title="Products We're Proud to Have Built"
//         subtitle="Explore our portfolio of digital products across industries — each one engineered for performance, designed for impact."
//       />

//       {/* Filters */}
//       <section className="bg-background sticky top-[72px] z-30 backdrop-blur-xl bg-background/90">
//         <div className="container-wide section-padding">
//           <div className="flex flex-wrap gap-2 py-6 border-b border-border/50">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`pill transition-all duration-300 ${activeCategory === cat ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:text-foreground"}`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Project Grid */}
//       <section className="section-spacing bg-background">
//         <div className="container-wide section-padding">
//           {filtered.length === 0 ? (
//             <div className="text-center py-20">
//               <p className="text-lg font-body text-muted-foreground">No projects found in this category.</p>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filtered.map((project, i) => (
//                 <AnimatedSection key={project.slug} delay={i * 0.08}>
//                   <Link href={`/our-work/${project.slug}`} className="group card-premium-elevated overflow-hidden h-full flex flex-col">
//                     <div className="relative h-52 overflow-hidden">
//                       <img
//                         src={project.imageUrl}
//                         alt={project.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />
//                       <div className="absolute bottom-3 left-4 flex gap-1.5 flex-wrap">
//                         {project.techStack.slice(0, 3).map((t) => (
//                           <span key={t} className="text-[10px] font-body font-medium px-2.5 py-0.5 rounded-full bg-background/20 text-primary-foreground backdrop-blur-md">{t}</span>
//                         ))}
//                       </div>
//                       <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
//                         <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
//                       </div>
//                     </div>
//                     <div className="p-6 flex flex-col flex-1">
//                       <span className="text-xs font-body font-medium text-accent mb-2">{project.category}</span>
//                       <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
//                       <p className="text-sm font-body text-muted-foreground leading-relaxed flex-1">{project.shortDesc}</p>
//                       <div className="mt-4 flex flex-col gap-1.5 pt-3 border-t border-border/50">
//                         {project.results.slice(0, 2).map((r) => (
//                           <span key={r} className="text-xs font-body font-semibold text-foreground flex items-center gap-2">
//                             <span className="w-1 h-1 rounded-full bg-accent" /> {r}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </Link>
//                 </AnimatedSection>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </PageLayout>
//   );
// }

// ... imports remain the same

export default function WorkPage () {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter(p => p.industry === activeCategory)

  return (
    <PageLayout>
      <PageHero
        label='Our Work'
        title="Products We're Proud to Have Built"
        subtitle='Explore our portfolio of digital products across industries — each one engineered for performance, designed for impact.'
      />

      {/* Filters - unchanged */}
      <section className='bg-background sticky top-[72px] z-30 backdrop-blur-xl bg-background/90'>
        <div className='container-wide section-padding'>
          <div className='flex flex-wrap gap-2 py-6 border-b border-border/50'>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pill transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className='section-spacing bg-background'>
        <div className='container-wide section-padding'>
          {filtered.length === 0 ? (
            <div className='text-center py-20'>
              <p className='text-lg font-body text-muted-foreground'>
                No projects found in this category.
              </p>
            </div>
          ) : (
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
              {filtered.map((project, i) => (
                <AnimatedSection key={project.slug} delay={i * 0.08}>
                  <Link
                    href={`/our-work/${project.slug}`}
                    className='group relative overflow-hidden rounded-2xl border border-border/40 shadow-md hover:shadow-2xl transition-shadow duration-500 flex flex-col h-[460px] md:h-[500px]'
                  >
                    {/* Image + overlays container */}
                    <div className='relative h-full w-full overflow-hidden flex-1'>
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-3'
                      />

                      {/* Default subtle gradient */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:via-black/30' />

                      {/* Sliding green overlay from bottom on hover */}
                      <div className='absolute inset-x-0 bottom-0 h-0 group-hover:h-3/5 bg-gradient-to-t from-[#0f2a1f] via-[#153c2b]/80 to-transparent transition-all duration-700 ease-out z-20 pointer-events-none' />

                      {/* Tech tags top-right (always visible) */}
                      <div className='absolute top-4 right-4 z-30 flex gap-1.5 flex-wrap'>
                        {project.techStack.slice(0, 3).map(t => (
                          <span
                            key={t}
                            className='text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full bg-background/30 backdrop-blur-md text-white border border-white/10'
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Arrow icon top-right */}
                      <div className='absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100'>
                        <ArrowUpRight className='w-5 h-5 text-white' />
                      </div>
                    </div>

                    {/* Bottom content - slides up on hover */}
                    <div className='absolute bottom-0 left-0 right-0 z-30 p-6 sm:p-7 pb-8'>
                      <div className='translate-y-[120%] group-hover:translate-y-0 transition-all duration-700 ease-out'>
                        <span className='text-xs font-medium text-accent/90 mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150'>
                          {project.category}
                        </span>

                        <h3 className='font-heading font-semibold text-lg sm:text-xl text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 group-hover:delay-100'>
                          {project.title}
                        </h3>

                        <p className='text-sm font-body text-white/85 leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-300'>
                          {project.shortDesc}
                        </p>

                        {/* Results */}
                        {project.results?.length > 0 && (
                          <div className='mt-4 flex flex-col gap-1.5 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-400'>
                            {project.results.slice(0, 2).map(r => (
                              <span
                                key={r}
                                className='text-xs font-medium text-white/90 flex items-center gap-2'
                              >
                                <span className='w-1.5 h-1.5 rounded-full bg-accent' />{' '}
                                {r}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  )
}
