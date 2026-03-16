'use client'

import { projects } from '@/data/projects'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '../shared/AnimatedSection'
import SectionLabel from '../shared/SectionLabel'

export default function FeaturedWorkSection () {
  const featured = projects.slice(0, 3)

  return (
    <section className='section-spacing bg-muted relative overflow-hidden'>
      {/* Background accent */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[120px]' />

      <div className='relative container-wide section-padding'>
        <AnimatedSection>
          <SectionLabel>Featured Work</SectionLabel>
          <div className='flex flex-col lg:flex-row justify-between items-start gap-4 mb-16'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight max-w-xl leading-tight'>
              Products we&apos;re proud to have built
            </h2>
            <Link href='/work' className='btn-outline text-xs mt-2'>
              View All Work <ArrowUpRight className='w-3.5 h-3.5' />
            </Link>
          </div>
        </AnimatedSection>

        {/* Asymmetric bento layout */}
        <div className='grid lg:grid-cols-2 gap-6'>
          {/* Large featured card */}
          <AnimatedSection delay={0.05}>
            <Link
              href={`/work/${featured[0].slug}`}
              className='group relative overflow-hidden rounded-3xl h-[420px] flex flex-col justify-end'
            >
              <Image
                src={featured[0].imageUrl}
                alt={featured[0].title}
                fill
                className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2'
              />

              {/* Base dark overlay + hover deep-green rise (#18251f) */}
              <div className='absolute inset-0 pointer-events-none'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-0' />
                <div className='absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#18251f] via-[#18251f]/90 to-transparent opacity-100 group-hover:h-2/3 transition-[height] duration-500 ease-out' />
              </div>

              {/* Content */}
              <div className='relative p-8 lg:p-10 flex flex-col justify-end h-full'>
                {/* Top row: tags + category, hidden until hover */}
                <div className='flex gap-1.5 flex-wrap mb-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
                  {featured[0].techStack.slice(0, 4).map(tag => (
                    <span
                      key={tag}
                      className='text-[10px] font-body font-medium px-2.5 py-0.5 rounded-full bg-background/20 text-primary-foreground backdrop-blur-md'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className='text-xs font-body font-medium text-accent mb-2 block opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75'>
                  {featured[0].category}
                </span>

                {/* Heading: always visible, anchored near bottom, moves up on hover */}
                <h3 className='font-heading font-bold text-xl lg:text-2xl text-primary-foreground mb-2 translate-y-4 group-hover:-translate-y-1 transition-transform duration-300'>
                  {featured[0].title}
                </h3>

                {/* Description + results slide up under heading on hover */}
                <p className='text-sm font-body text-primary-foreground/85 max-w-md mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100'>
                  {featured[0].shortDesc}
                </p>
                <div className='flex items-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150'>
                  {featured[0].results.slice(0, 2).map(r => (
                    <span
                      key={r}
                      className='text-xs font-body font-semibold text-accent flex items-center gap-1.5'
                    >
                      <span className='w-1 h-1 rounded-full bg-accent' />
                      {r}
                    </span>
                  ))}
                </div>
              </div>
              <div className='absolute top-6 right-6 w-10 h-10 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
                <ArrowUpRight className='w-4 h-4 text-primary-foreground' />
              </div>
            </Link>
          </AnimatedSection>

          {/* Two stacked cards */}
          <div className='flex flex-col gap-6'>
            {featured.slice(1).map((project, i) => (
              <AnimatedSection key={project.slug} delay={(i + 1) * 0.1}>
                <Link
                  href={`/work/${project.slug}`}
                  className='group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-border/60 bg-background hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500 h-full'
                >
                  <div className='relative w-full sm:w-[45%] h-48 sm:h-auto overflow-hidden shrink-0'>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                    />
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent to-foreground/10 sm:bg-gradient-to-r sm:from-transparent sm:to-background/20' />
                  </div>
                  <div className='p-6 flex flex-col justify-center flex-1'>
                    <span className='text-xs font-body font-medium text-accent mb-1.5'>
                      {project.category}
                    </span>
                    <h3 className='font-heading font-semibold text-base mb-2 group-hover:text-accent transition-colors duration-300'>
                      {project.title}
                    </h3>
                    <p className='text-sm font-body text-muted-foreground leading-relaxed mb-3'>
                      {project.shortDesc}
                    </p>
                    <div className='flex flex-wrap gap-1.5'>
                      {project.techStack.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className='text-[10px] font-body font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
