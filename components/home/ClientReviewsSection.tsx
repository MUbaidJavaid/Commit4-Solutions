// 'use client'

// import { motion } from 'framer-motion'

// const cards = [
//   {
//     id: 'partnership',
//     image: '/logos/client-01.webp',
//     heading: 'Long-term product partnerships',
//     body: 'Most of our clients stay with us for multiple releases. We embed with your team, own outcomes, and keep shipping long after v1.'
//   },
//   {
//     id: 'communication',
//     image: '/logos/client-02.jpg',
//     heading: 'Senior, proactive communication',
//     body: 'Clear weekly updates, transparent roadmaps, and engineers who speak business as well as they speak code.'
//   },
//   {
//     id: 'reliability',
//     image: '/logos/client-03.jpg',
//     heading: 'Predictable delivery, zero drama',
//     body: 'We protect your timelines with battle-tested processes, strong QA, and a culture built around commitments.'
//   }
// ]

// export default function ClientReviewsSection () {
//   return (
//     <section className='section-spacing bg-background'>
//       <div className='container-wide section-padding'>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.45, ease: 'easeOut' }}
//           className='max-w-3xl mb-10 sm:mb-12'
//         >
//           <p className='text-sm sm:text-base font-body text-muted-foreground'>
//             We have delivered products successfully to an average partnership
//             lasting over 2 years.
//           </p>
//           <h2 className='mt-3 text-2xl sm:text-3xl md:text-4xl font-heading font-semibold tracking-tight text-foreground'>
//             Client reviews.
//           </h2>
//         </motion.div>

//         <div className='grid gap-5 md:grid-cols-3'>
//           {cards.map((card, index) => (
//             <motion.article
//               key={card.id}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.35 }}
//               transition={{
//                 duration: 0.4,
//                 ease: 'easeOut',
//                 delay: index * 0.05
//               }}
//               className='group flex flex-col overflow-hidden rounded-3xl bg-card border border-border/60 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1'
//             >
//               {/* Image top */}
//               <div className='relative h-48 w-full overflow-hidden'>
//                 <div
//                   className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
//                   style={{
//                     backgroundImage: `url(${card.image})`
//                   }}
//                 />
//                 <div className='absolute inset-0 bg-black/10' />
//               </div>

//               {/* Bottom content panel with hover reveal */}
//               <div className='relative flex-1 bg-[#18251f] text-white px-5 py-6 sm:px-6 sm:py-7'>
//                 <div className='absolute inset-0 bg-[#18251f] group-hover:bg-[#1f3b2e] transition-colors duration-400' />

//                 <div className='relative z-10 flex flex-col gap-3'>
//                   <h3 className='font-heading text-base sm:text-lg font-semibold tracking-tight'>
//                     {card.heading}
//                   </h3>
//                   <div className='min-h-0 group-hover:min-h-[72px] overflow-hidden'>
//                     <p className='text-xs sm:text-sm font-body text-white/80 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out'>
//                       {card.body}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    id: 'partnership',
    image: '/logos/client-01.webp',
    heading: 'Long-term product partnerships',
    body: 'Most of our clients stay with us for multiple releases. We embed with your team, own outcomes, and keep shipping long after v1.'
  },
  {
    id: 'communication',
    image: '/logos/client-02.jpg',
    heading: 'Senior, proactive communication',
    body: 'Clear weekly updates, transparent roadmaps, and engineers who speak business as well as they speak code.'
  },
  {
    id: 'reliability',
    image: '/logos/client-03.jpg',
    heading: 'Predictable delivery, zero drama',
    body: 'We protect your timelines with battle-tested processes, strong QA, and a culture built around commitments.'
  }
]

export default function ClientReviewsSection () {
  return (
    <section className='section-spacing bg-background'>
      <div className='container-wide section-padding'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className='max-w-3xl mb-10 sm:mb-12'
        >
          <p className='text-sm sm:text-base font-body text-muted-foreground'>
            We have delivered products successfully to an average partnership
            lasting over 2 years.
          </p>
          <h2 className='mt-3 text-2xl sm:text-3xl md:text-4xl font-heading font-semibold tracking-tight text-foreground'>
            Client reviews.
          </h2>
        </motion.div>

        <div className='grid gap-6 md:grid-cols-3'>
          {cards.map((card, index) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className='group relative overflow-hidden rounded-3xl border border-border/40 shadow-md hover:shadow-2xl transition-shadow duration-500 h-[440px] md:h-[480px]'
            >
              {/* Background image */}
              <div
                className='absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105'
                style={{ backgroundImage: `url(${card.image})` }}
              />

              {/* Gradient overlay - always present, stronger at bottom */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10' />

              {/* Sliding green panel from bottom */}
              <div className='absolute inset-x-0 bottom-0 h-0 group-hover:h-[65%] bg-gradient-to-t from-[#0f2a1f] via-[#153c2b] to-transparent transition-all duration-700 ease-out z-20' />

              {/* Content - positioned at bottom */}
              <div className='absolute inset-0 z-30 flex flex-col justify-end p-6 sm:p-8 pb-9'>
                <div className='translate-y-[140%] group-hover:translate-y-0 transition-all duration-700 ease-out'>
                  <h3 className='font-heading text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-500 group-hover:delay-150'>
                    {card.heading}
                  </h3>

                  <p className='text-sm sm:text-base font-body text-white/90 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out group-hover:delay-300'>
                    {card.body}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
