'use client'

import { motion } from 'framer-motion'
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
    imagePosition: 'right' as const,
    featured: true
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

        <div className='mt-10 md:mt-12 space-y-6'>
          {cards.map((card, index) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
                delay: index * 0.05
              }}
              className={[
                'relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_18px_60px_rgba(15,23,42,0.10)]',
                'px-5 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12',
                'flex flex-col gap-8 sm:flex-row sm:items-center',
                'min-h-[260px] sm:min-h-[280px] lg:min-h-[300px]',
                index > 0 ? 'md:-mt-10' : '',
                card.featured ? 'md:border-[#0DB04433]' : ''
              ]
                .filter(Boolean)
                .join(' ')}
              style={{ zIndex: index + 1 }}
            >
              {/* Image */}
              <div
                className={[
                  'w-full sm:w-[45%] max-w-sm rounded-3xl overflow-hidden bg-muted/40',
                  'relative aspect-[16/9]',
                  card.imagePosition === 'right'
                    ? 'order-last sm:order-last'
                    : 'order-first'
                ]
                  .filter(Boolean)
                  .join(' ')}
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
              <div className='flex-1 sm:min-w-[55%]'>
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
                    className={[
                      'inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold font-body',
                      'transition-transform duration-200',
                      'shadow-sm hover:shadow-md hover:-translate-y-0.5',
                      card.featured
                        ? 'bg-green-light text-black'
                        : 'bg-foreground text-background'
                    ].join(' ')}
                  >
                    {card.cta}
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'

// const cards = [
//   {
//     id: 'startup',
//     label: 'The Startup Speed',
//     headline: 'Building a Startup?',
//     body: 'We help you ship your MVP fast with a lean, agile team of pre-vetted engineers. We commit to your deadline so you can focus on your pitch.',
//     cta: 'Start Building',
//     imagePosition: 'left' as const,
//     featured: false
//   },
//   {
//     id: 'enterprise',
//     label: 'The Enterprise Scale',
//     headline: 'Leading an Enterprise?',
//     body: 'We extend your in-house capabilities with scalable, senior-level engineers who integrate seamlessly into your workflow and security standards.',
//     cta: 'Scale Your Team',
//     imagePosition: 'right' as const,
//     featured: true
//   },
//   {
//     id: 'rescue',
//     label: 'The Rescue Mission',
//     headline: 'Is your project stuck?',
//     body: 'Technical debt or missed deadlines? We bring in a "Commitment Task Force" to audit, fix, and stabilize your product to get you back on track.',
//     cta: 'Rescue My Project',
//     imagePosition: 'left' as const,
//     featured: false
//   }
// ]

// export default function VisionCommitmentSection () {
//   return (
//     <section className='bg-background py-16 sm:py-20'>
//       <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
//         {/* Heading */}
//         <div className='max-w-3xl'>
//           <p className='text-xs font-body font-semibold uppercase tracking-[0.18em] text-green-bright'>
//             Your Vision. Our Commitment.
//           </p>
//           <h2 className='mt-3 text-2xl sm:text-3xl md:text-4xl font-heading font-semibold tracking-tight text-foreground'>
//             Your Vision. Our Commitment.
//           </h2>
//           <p className='mt-4 text-sm sm:text-base md:text-lg font-body text-muted-foreground max-w-2xl'>
//             From rapid MVP launches to scaling complex enterprise systems, we
//             provide the engineering excellence and accountability your project
//             demands.
//           </p>
//         </div>

//         {/* Cards – simple CSS overlap, no scroll hooks */}
//         <div className='mt-10 md:mt-12 space-y-8 md:space-y-10'>
//           {cards.map((card, index) => (
//             <motion.div
//               key={card.id}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.25 }}
//               transition={{
//                 duration: 0.45,
//                 ease: 'easeOut',
//                 delay: index * 0.08
//               }}
//               className={`
//                 relative overflow-hidden
//                 mx-auto w-full max-w-5xl
//                 rounded-3xl border border-border bg-card
//                 shadow-[0_18px_60px_rgba(15,23,42,0.10)]
//                 px-6 py-10 md:px-12 md:py-14
//                 flex flex-col md:flex-row gap-8 md:items-center
//                 ${index > 0 ? 'md:-mt-10' : ''}          /* overlap effect */
//                 ${card.featured ? 'border-[#0DB04433] shadow-green-900/10' : ''}
//               `}
//               style={{ zIndex: index + 1 }} /* top card appears above others */
//             >
//               {/* Image */}
//               <div
//                 className={`
//                   w-full md:w-[45%] max-w-sm rounded-3xl overflow-hidden bg-white
//                   relative aspect-[16/9]
//                   ${
//                     card.imagePosition === 'right'
//                       ? 'order-last md:order-last'
//                       : 'order-first'
//                   }
//                 `}
//               >
//                 <Image
//                   src='/commit4solutions-log1.png'
//                   alt={card.headline}
//                   fill
//                   className='object-contain p-6'
//                   sizes='(min-width: 1024px) 360px, 100vw'
//                 />
//               </div>

//               {/* Text / CTA */}
//               <div className='flex-1 md:min-w-[55%]'>
//                 <p className='text-[11px] sm:text-xs font-body font-semibold uppercase tracking-[0.2em] text-muted-foreground'>
//                   {card.label}
//                 </p>
//                 <h3 className='mt-2 text-xl sm:text-2xl font-heading font-semibold tracking-tight text-foreground'>
//                   {card.headline}
//                 </h3>
//                 <p className='mt-3 text-sm sm:text-base font-body text-muted-foreground'>
//                   {card.body}
//                 </p>

//                 <div className='mt-5 sm:mt-6'>
//                   <button
//                     className={`
//                       inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold font-body
//                       transition-transform duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5
//                       ${
//                         card.featured
//                           ? 'bg-green-light text-black'
//                           : 'bg-foreground text-background'
//                       }
//                     `}
//                   >
//                     {card.cta}
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
