'use client'

import { motion } from 'framer-motion'

export default function HeroSection () {
  return (
    <section className='relative min-h-[90vh] w-full bg-[#18251f] text-white'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(13,176,68,0.20),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(9,15,12,0.95),_rgba(9,15,12,1))]' />

      <div className='relative z-10 flex min-h-[90vh] items-center justify-center px-4 py-20 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='mx-auto flex max-w-5xl flex-col items-center text-center'
        >
          <span className='relative mt-10 inline-block'>
            <span
              className='absolute -inset-x-6 -inset-y-1 rounded-full bg-primary/15 blur-xl'
              aria-hidden='true'
            />
            <span className='relative '>Software Development Consulting</span>
            <span className='mt-2 block h-1 w-24 mx-auto rounded-full bg-green-700  ' />
          </span>

          <h1
            className='mt-6 font-heading font-semibold leading-tight
 space-y-2  text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-body font-medium text-white'
          >
            <span className='tracking-tight'>We deliver what we commit</span>
            <br />
            <span className='tracking-tight'>We commit what we can build</span>
            <br />
            <span className='tracking-tight'>
              We can build what your business needs
            </span>
          </h1>

          <p className='mt-10 max-w-3xl text-base sm:text-lg md:text-xl font-body text-white/80'>
            From product strategy to scalable engineering — we partner with
            ambitious companies to design, build, and launch digital products
            that win.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className='mt-12 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center'
          >
            <button
              className='w-full sm:w-auto rounded-full bg-green-700 px-8 py-3.5 text-sm sm:text-base font-semibold text-black shadow-md shadow-black/40 transition duration-200 hover:scale-[1.05] hover:bg-primary hover:shadow-lg hover:shadow-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black'
            >
              Get a Quote
            </button>
            <button className='w-full sm:w-auto rounded-full border border-secondary bg-transparent px-8 py-3.5 text-sm sm:text-base font-semibold text-white transition duration-200 hover:scale-[1.05] hover:border-primary hover:text-white hover:bg-primary/10 hover:shadow-md hover:shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-black'>
              Start your journey
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
