'use client'

import { motion } from 'framer-motion'

export default function WhatWeOfferSection () {
  return (
    <section className='py-10 sm:py-14'>
      <div className='container-wide section-padding'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className='max-w-3xl'
        >
          <p className='text-sm sm:text-base font-body text-muted-foreground'>
            Helping you bring ideas to life with thoughtful design and modern technology, creating seamless digital
            experiences.
          </p>
          <h2 className='mt-3 text-2xl sm:text-3xl md:text-4xl font-heading font-semibold tracking-tight text-foreground'>
            What We Offer
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

