'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function CTASection () {
  return (
    <section className='relative w-full min-h-[420px] md:min-h-[480px] flex items-center justify-center overflow-hidden'>
      {/* Background image */}
      <div className='absolute inset-0'>
        <Image
          src='/cta-bg-commit4solutions.jpg'
          alt=''
          fill
          className='object-cover'
          sizes='100vw'
          priority={false}
        />
      </div>
      {/* Dark overlay – theme ke hisaab se contrast */}
      <div
        className='absolute inset-0 z-[1]'
        style={{ background: 'linear-gradient(to bottom, hsl(150 20% 12% / 0.75), hsl(150 20% 12% / 0.85))' }}
      />

      {/* Content */}
      <div className='relative z-10 w-full max-w-4xl mx-auto px-6 py-20 text-center'>
        <h2 className='font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4 italic'>
          Ready for the extraordinary?
        </h2>
        <p className='text-white/80 text-base sm:text-lg md:text-xl font-body max-w-xl mx-auto mb-10'>
          Let us build the technology that takes your vision to scale.
        </p>
        <Link
          href='/contact'
          className='btn-accent inline-flex items-center gap-2 text-accent-foreground hover:opacity-95'
        >
          Get in Touch
          <ArrowUpRight className='w-4 h-4' />
        </Link>
      </div>
    </section>
  )
}
