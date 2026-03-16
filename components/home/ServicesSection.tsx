'use client'

import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Blocks,
  Brain,
  Code,
  Database,
  Monitor,
  Palette,
  Server,
  ShoppingCart,
  Smartphone
} from 'lucide-react'
import Link from 'next/link'
import AnimatedSection from '../shared/AnimatedSection'
import SectionLabel from '../shared/SectionLabel'

const services = [
  {
    icon: Database,
    title: 'Backend Development',
    desc: 'Robust APIs, microservices, and cloud-native architecture built for scale.',
    href: '/services/backend',
    accent: 'accent'
  },
  {
    icon: Monitor,
    title: 'Frontend Development',
    desc: 'Pixel-perfect, performant interfaces crafted with modern frameworks.',
    href: '/services/frontend',
    accent: 'blue-brand'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform apps that users love.',
    href: '/services/mobile',
    accent: 'accent'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Research-driven design systems that drive engagement and conversion.',
    href: '/services/design',
    accent: 'lavender'
  },
  {
    icon: Brain,
    title: 'AI Automation',
    desc: 'Intelligent workflows, ML models, and AI-powered product features.',
    href: '/services/ai',
    accent: 'accent'
  },
  {
    icon: Blocks,
    title: 'SaaS Products',
    desc: 'Full-cycle SaaS engineering from MVP to enterprise scale.',
    href: '/services/saas',
    accent: 'blue-brand'
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce',
    desc: 'High-converting online stores and marketplace platforms.',
    href: '/services/ecommerce',
    accent: 'accent'
  },
  {
    icon: Code,
    title: 'CRM Solutions',
    desc: 'Custom relationship management systems for your unique workflows.',
    href: '/services/crm',
    accent: 'lavender'
  },
  {
    icon: Server,
    title: 'DevOps & Cloud',
    desc: 'CI/CD pipelines, container orchestration, and cloud infrastructure.',
    href: '/services/backend',
    accent: 'blue-brand'
  }
]

export default function ServicesSection () {
  return (
    <section className='section-spacing bg-background relative overflow-hidden'>
      {/* Decorative background */}
      <div className='absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-brand/3 blur-[100px]' />
      <div className='absolute top-20 right-0 w-[300px] h-[300px] rounded-full bg-accent/4 blur-[80px]' />

      <div className='relative container-wide section-padding'>
        <AnimatedSection>
          <SectionLabel>Capabilities</SectionLabel>
          <div className='flex flex-col  justify-between items-start gap-4 mb-16'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight max-w-xl leading-tight'>
              Engineering solutions across the full stack
            </h2>
            <p className='text-base font-body text-muted-foreground max-w-md lg:pt-2'>
              We combine deep technical expertise with design sensibility to
              deliver digital products that perform.
            </p>
          </div>
        </AnimatedSection>

        {/* Premium bento-style grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.05}>
              <Link
                href={service.href}
                className='group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-500'
              >
                {/* Decorative half-circle accent */}
                <div
                  className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-${service.accent}/[0.06] group-hover:bg-${service.accent}/[0.12] group-hover:scale-150 transition-all duration-700`}
                />
                <div
                  className={`absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-${service.accent}/[0.04] group-hover:bg-${service.accent}/[0.08] transition-all duration-700`}
                />

                {/* Large subtle index number in top-right */}
                <div className='pointer-events-none absolute top-4 right-5 text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-foreground/5 group-hover:text-foreground/10 transition-colors duration-500'>
                  {(i + 1).toString().padStart(2, '0')}
                </div>

                <div className='relative z-10'>
                  {/* Icon with layered container */}
                  <div className='relative mb-5'>
                    <div className='w-12 h-12 rounded-2xl bg-green-light flex items-center justify-center group-hover:bg-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm'>
                      <service.icon className='w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors duration-300' />
                    </div>
                    {/* Floating dot accent */}
                    <motion.div
                      className='absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  <h3 className='font-heading font-semibold text-base mb-2 group-hover:text-accent transition-colors duration-300'>
                    {service.title}
                  </h3>
                  <p className='text-sm font-body text-muted-foreground leading-relaxed flex-1'>
                    {service.desc}
                  </p>

                  <div className='mt-5 flex items-center gap-1.5 text-xs font-body font-semibold text-accent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300'>
                    Explore <ArrowUpRight className='w-3.5 h-3.5' />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
