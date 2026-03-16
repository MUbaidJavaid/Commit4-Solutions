'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function QuickTeamCTASection () {
  return (
    <section className='py-12 sm:py-16'>
      <div className='container-wide section-padding'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='relative overflow-hidden rounded-3xl bg-[#18251f] text-white px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between'
        >
          {/* Soft gradient texture */}
          <div className='pointer-events-none absolute inset-0'>
            <div className='absolute -top-20 -left-10 w-72 h-72 rounded-full bg-primary/15 blur-3xl' />
            <div className='absolute bottom-0 right-0 w-[420px] h-[260px] rounded-full bg-emerald-500/10 blur-3xl' />
          </div>

          <div className='relative z-10 max-w-xl'>
            <p className='text-[11px] sm:text-xs font-body font-semibold uppercase tracking-[0.25em] text-primary'>
              Fast Team Deployment
            </p>
            <h2 className='mt-3 text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold tracking-tight'>
              24 hours. From a complex problem to a committed solution.
            </h2>
            <p className='mt-4 text-sm sm:text-base font-body text-white/80 max-w-xl'>
              Stop waiting on talent. Share your brief and get a vetted
              engineering team ready to ship.
            </p>
          </div>

          <div className='relative z-10 w-full sm:w-auto flex sm:block'>
            <Link
              href='/contact'
              className='group relative mx-auto sm:mx-0 inline-flex items-center justify-between gap-3 rounded-full border border-white/25 bg-transparent pl-4 pr-1 py-1.5 sm:pl-5 sm:pr-1.5
               sm:py-2 text-sm font-body font-semibold text-white backdrop-blur-md overflow-hidden'
            >
              {/* Inner pill background expands from arrow side, leaving border gap */}
              <span className='pointer-events-none absolute inset-0.5 rounded-full bg-primary transition-transform duration-300 group-hover:bg-white origin-right scale-x-0 group-hover:scale-x-100' />

              <span className='relative z-10 transition-colors duration-300 group-hover:text-black'>
                Get My Team
              </span>
              <span className='relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black text-base transition-transform duration-200 group-hover:translate-x-0.5'>
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
