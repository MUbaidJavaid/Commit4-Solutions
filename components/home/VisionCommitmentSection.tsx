'use client'

import Image from 'next/image'

const cards = [
  {
    id: 'startup',
    label: 'The Startup Speed',
    headline: 'Building a Startup?',
    body: 'We help you ship your MVP fast with a lean, agile team of pre-vetted engineers. We commit to your deadline so you can focus on your pitch.',
    cta: 'Start Building',
    imagePosition: 'left' as const,
    featured: false
  },
  {
    id: 'enterprise',
    label: 'The Enterprise Scale',
    headline: 'Leading an Enterprise?',
    body: 'We extend your in-house capabilities with scalable, senior-level engineers who integrate seamlessly into your workflow and security standards.',
    cta: 'Scale Your Team',
    featured: true,
    imagePosition: 'right' as const
  },
  {
    id: 'rescue',
    label: 'The Rescue Mission',
    headline: 'Is your project stuck?',
    body: 'Technical debt or missed deadlines? We bring in a "Commitment Task Force" to audit, fix, and stabilize your product to get you back on track.',
    cta: 'Rescue My Project',
    imagePosition: 'left' as const,
    featured: false
  }
]

export default function VisionCommitmentSection () {
  return (
    <section className='bg-background py-16 sm:py-24'>
      <div className='mx-auto max-w-6xl px-5 sm:px-8 lg:px-10'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-green-600'>
            Your Vision. Our Commitment.
          </p>
          <h2 className='mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground'>
            Your Vision. Our Commitment.
          </h2>
          <p className='mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto'>
            From rapid MVP launches to scaling complex enterprise systems, we
            provide the engineering excellence and accountability your project
            demands.
          </p>
        </div>

        {/* Classic sticky stack: page scroll, sab cards same top par stick, agla card upar (z-index) */}
        <div className='relative min-h-[300vh] md:min-h-[340vh]'>
          {cards.map((card, i) => (
            <div
              key={card.id}
              className='min-h-[100vh] flex items-start justify-center px-2'
              style={{ paddingTop: i === 0 ? 0 : '5rem' }}
            >
              <div
                className='sticky w-full max-w-5xl mx-auto'
                style={{
                  zIndex: i + 1,
                  top: '5rem'
                }}
              >
                <article
                  className={`
                  w-full rounded-3xl border bg-card shadow-2xl shadow-black/8 overflow-hidden
                  ${card.featured ? 'border-green-500/40 shadow-green-900/15' : 'border-border/70'}
                `}
              >
                <div className='flex flex-col md:flex-row items-stretch gap-8 md:gap-10'>
                  <div
                    className={`
                      w-full md:w-5/12 lg:w-2/5 min-h-[280px] md:min-h-[380px]
                      relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100
                      ${card.imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}
                    `}
                  >
                    <Image
                      src='/commit4solutions-log1.png'
                      alt={card.headline}
                      fill
                      className='object-contain p-10 md:p-14'
                      sizes='(min-width: 768px) 45vw, 90vw'
                    />
                  </div>
                  <div className='flex-1 p-6 md:p-10 lg:p-12 flex flex-col justify-center'>
                    <p className='text-xs md:text-sm font-semibold uppercase tracking-wider text-muted-foreground/80 mb-3'>
                      {card.label}
                    </p>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-5'>
                      {card.headline}
                    </h3>
                    <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-8'>
                      {card.body}
                    </p>
                    <div>
                      <button
                        type='button'
                        className={`
                          inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm md:text-base font-semibold
                          transition-all duration-300 hover:shadow-lg active:scale-95
                          ${card.featured ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-foreground text-background hover:bg-foreground/90'}
                        `}
                      >
                        {card.cta}
                        <span aria-hidden>→</span>
                      </button>
                    </div>
                  </div>
                </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
