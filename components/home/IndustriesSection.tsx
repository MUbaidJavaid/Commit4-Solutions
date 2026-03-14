'use client'

import {
  Building,
  Building2,
  Cloud,
  Cpu,
  GraduationCap,
  Heart,
  Home,
  ShoppingBag,
  Truck,
  UtensilsCrossed
} from 'lucide-react'
import Link from 'next/link'
import AnimatedSection from '../shared/AnimatedSection'
import SectionLabel from '../shared/SectionLabel'

const industries = [
  {
    icon: Building2,
    name: 'Fintech',
    desc: 'Banking, payments, and financial platforms'
  },
  {
    icon: Heart,
    name: 'Healthcare',
    desc: 'Telehealth, EHR, and patient platforms'
  },
  {
    icon: ShoppingBag,
    name: 'Ecommerce',
    desc: 'Marketplaces and D2C commerce'
  },
  {
    icon: GraduationCap,
    name: 'Education',
    desc: 'EdTech and learning management'
  },
  { icon: Home, name: 'Real Estate', desc: 'PropTech and property platforms' },
  { icon: Truck, name: 'Logistics', desc: 'Supply chain and fleet management' },
  {
    icon: UtensilsCrossed,
    name: 'Food & Grocery',
    desc: 'Delivery and restaurant tech'
  },
  { icon: Cloud, name: 'SaaS', desc: 'B2B and enterprise software' },
  { icon: Cpu, name: 'AI Startups', desc: 'ML platforms and AI tools' },
  {
    icon: Building,
    name: 'Enterprise',
    desc: 'Large-scale digital transformation'
  }
]

export default function IndustriesSection () {
  return (
    <section className='section-spacing bg-muted relative overflow-hidden'>
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-lavender/10 blur-[120px]' />

      <div className='relative container-wide section-padding'>
        <AnimatedSection>
          <SectionLabel>Who We Serve</SectionLabel>
          <div className='flex flex-col lg:flex-row justify-between items-start gap-6 mb-16'>
            <div>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight max-w-2xl leading-tight mb-4'>
                Deep expertise across industries
              </h2>
              <p className='text-base font-body text-muted-foreground max-w-lg'>
                We&apos;ve delivered mission-critical software across sectors
                that demand precision, compliance, and scale.
              </p>
            </div>
            <Link
              href='/industries'
              className='btn-outline text-xs shrink-0 mt-2'
            >
              Explore Industries
            </Link>
          </div>
        </AnimatedSection>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.name} delay={i * 0.05}>
              <Link
                href='/industries'
                className='group relative bg-background/70 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer border border-border/50 hover:border-accent/30 overflow-hidden'
              >
                {/* Decorative background shape */}
                <div className='absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-accent/[0.04] rotate-12 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500' />

                <div className='relative'>
                  <div className='w-11 h-11 rounded-xl bg-green-light mb-4 flex items-center justify-center group-hover:bg-accent group-hover:scale-105 transition-all duration-300 shadow-sm'>
                    <ind.icon className='w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors' />
                  </div>
                  <h3 className='text-sm font-heading font-semibold text-foreground mb-1'>
                    {ind.name}
                  </h3>
                  <p className='text-[11px] font-body text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    {ind.desc}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
