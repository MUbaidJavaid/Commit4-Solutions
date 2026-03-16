'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

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
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'] // full progress over the whole container
  })

  return (
    <section className='bg-background py-16 sm:py-20'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl'>
          <p className='text-xs font-body font-semibold uppercase tracking-[0.18em] text-green-bright'>
            Your Vision. Our Commitment.
          </p>
          <h2 className='mt-3 text-2xl sm:text-3xl md:text-4xl font-heading font-semibold tracking-tight text-foreground'>
            Your Vision. Our Commitment.
          </h2>
          <p className='mt-4 text-sm sm:text-base md:text-lg font-body text-muted-foreground max-w-2xl'>
            From rapid MVP launches to scaling complex enterprise systems, we
            provide the engineering excellence and accountability your project
            demands.
          </p>
        </div>

        {/* Tall container for scroll space */}
        <div
          ref={containerRef}
          className='relative mt-16 h-[200vh] md:h-[240vh]' // adjust height based on how long you want the effect to last
        >
          {cards.map((card, index) => {
            // Each card gets its own progress range (overlapping a bit)
            const progressStart = index * 0.25
            const progressEnd = progressStart + 0.45

            // Move up and stick near top
            const y = useTransform(
              scrollYProgress,
              [progressStart, progressEnd],
              ['20vh', `${index * 8 + 4}vh`]
            ) // stacks with small offset

            // Scale down slightly as more cards stack
            const scale = useTransform(
              scrollYProgress,
              [progressStart, progressEnd],
              [1, 0.94 - index * 0.03]
            )

            // Slight rotation for depth (optional)
            const rotate = useTransform(
              scrollYProgress,
              [progressStart, progressEnd],
              [0, index * 1.2]
            )

            // Opacity fade for older cards (optional)
            const opacity = useTransform(
              scrollYProgress,
              [progressStart - 0.1, progressStart, progressEnd],
              [0.7, 1, 0.92]
            )

            return (
              <motion.div
                key={card.id}
                style={{ y, scale, rotate, opacity }}
                className={`
                  sticky top-20 z-[${
                    10 - index
                  }]   // higher z-index = appears on top
                  mx-auto w-full max-w-5xl
                  rounded-3xl border border-border bg-card
                  shadow-[0_18px_60px_rgba(15,23,42,0.10)]
                  px-6 py-10 md:px-12 md:py-14
                  flex flex-col md:flex-row gap-8 md:items-center
                  ${
                    card.featured
                      ? 'border-[#0DB04433] shadow-green-900/10'
                      : ''
                  }
                `}
              >
                {/* Image */}
                <div
                  className={`
                    w-full md:w-[45%] max-w-sm rounded-3xl overflow-hidden bg-white
                    relative aspect-[16/9]
                    ${
                      card.imagePosition === 'right'
                        ? 'order-last md:order-last'
                        : 'order-first'
                    }
                  `}
                >
                  <Image
                    src='/commit4solutions-log1.png'
                    alt={card.headline}
                    fill
                    className='object-contain p-6'
                    sizes='(min-width: 1024px) 360px, 100vw'
                  />
                </div>

                {/* Text / CTA */}
                <div className='flex-1 md:min-w-[55%]'>
                  <p className='text-[11px] sm:text-xs font-body font-semibold uppercase tracking-[0.2em] text-muted-foreground'>
                    {card.label}
                  </p>
                  <h3 className='mt-2 text-xl sm:text-2xl font-heading font-semibold tracking-tight text-foreground'>
                    {card.headline}
                  </h3>
                  <p className='mt-3 text-sm sm:text-base font-body text-muted-foreground'>
                    {card.body}
                  </p>

                  <div className='mt-5 sm:mt-6'>
                    <button
                      className={`
                        inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold font-body
                        transition-transform duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5
                        ${
                          card.featured
                            ? 'bg-green-light text-black'
                            : 'bg-foreground text-background'
                        }
                      `}
                    >
                      {card.cta}
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
