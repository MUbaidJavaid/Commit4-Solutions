'use client'

import PageLayout from '@/components/layout/PageLayout'
import AnimatedSection from '@/components/shared/AnimatedSection'
import PageHero from '@/components/shared/PageHero'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const faqCategories = [
  {
    category: 'FAQs',
    faqs: [
      {
        q: 'Q1. You say you "deliver what you commit" — but every agency says something like that. What actually makes you different?',
        a: "Fair question — and we'd ask the same thing. The difference is in how we start. Before we agree to anything, we go through a structured scoping process where we map out exactly what we're building, how long it'll realistically take, and what it'll cost. If something isn't achievable in your timeline or budget, we tell you before the contract — not after. We'd rather lose a deal than lose your trust."
      },
      {
        q: "Q2. I've outsourced development before and it went badly. Why would this time be different?",
        a: "We hear this more than you'd think — and it's usually the same story: unclear scope, poor communication, and a team that disappeared when problems came up. Here's what we do differently. You get a dedicated contact who actually knows your project, Agile sprints so you see real progress every week, and a team that stays on the project from kickoff to launch. No handoffs to a B-team. No radio silence."
      },
      {
        q: 'Q3. How long will my project actually take?',
        a: "It depends on what you're building — and we'll always give you a real answer, not a vague estimate. A focused backend API or frontend redesign is typically 4–6 weeks. A full SaaS platform, e-commerce build, or CRM system is usually 3–6 months. We map out a detailed timeline before anything starts, with milestones you can hold us to. And if something changes along the way, you'll hear about it immediately — not at the deadline."
      },
      {
        q: "Q4. How much will this cost? Do you work with startups who don't have enterprise budgets?",
        a: "Yes, we work with startups, growing businesses, and enterprises — and we structure our pricing to fit accordingly. We offer fixed-price engagements when the scope is well-defined, and flexible retainer models for ongoing or evolving products. We'll always give you a transparent breakdown before anything is agreed. No hidden fees, no scope-creep surprises. If your budget doesn't match what you need, we'll tell you honestly — and often suggest a phased approach that gets you to the right place over time."
      },
      {
        q: "Q5. I'm not technical. Will I actually understand what's happening on my project?",
        a: "That's exactly the kind of client we work best with. We translate everything — architecture decisions, tech stack choices, sprint progress — into plain language you can actually use to make decisions. You'll never be left nodding along in a call you didn't follow. If you want the technical depth, we'll go there. If you want the summary, we've got that too."
      },
      {
        q: 'Q6. What technologies do you build with — and can you work with what we already have?',
        a: "Our core stack covers Java, Kotlin, JavaScript, and Python on the backend, with Spring Boot, Node.js, FastAPI, React.js, and Next.js as our main frameworks. We deploy on AWS, Google Cloud, and Azure, and work with databases including MySQL, PostgreSQL, MongoDB, Firebase, and Supabase. If you're starting fresh, we'll recommend what fits best for your use case. If you have an existing codebase, we'll audit it, work with it, and be honest about what we find."
      },
      {
        q: 'Q7. Do you actually understand my industry — or will I have to explain everything from scratch?',
        a: "We've built across retail, fintech, logistics, healthcare, education, and SaaS — so we come with context, not just code. That said, we never assume we know your business better than you do. Every project starts with us listening. We ask a lot of questions, we learn how your business actually works, and we build around that — not around a generic template we've used before."
      },
      {
        q: 'Q8. How do I stay in the loop without micromanaging the project?',
        a: "We make it easy. You get weekly sprint updates, a shared project tracker, and a direct line to your project lead — not a ticketing system. You'll see working software at the end of every sprint, so you always know what's been built and what's coming next. You're as involved as you want to be. Some clients check in daily. Others trust us to run and just want the highlights. We adapt to how you work."
      },
      {
        q: 'Q9. What if something goes wrong mid-project?',
        a: "It's software — things come up. The question is how a team handles it when they do. Our answer: immediately and openly. If a timeline shifts, a technical constraint emerges, or scope needs to change, you hear about it from us before it becomes a problem — not after. We document decisions, flag risks early, and always bring a proposed solution alongside the problem. No finger-pointing. Just problem-solving."
      },
      {
        q: "Q10. What happens after my product launches? Are you gone once it's live?",
        a: "Not unless you want us to be. We offer post-launch support, bug fixes, performance monitoring, and ongoing development for clients who want a long-term partner. A lot of our relationships started as a single project and grew into something much bigger — because once a product is live, there's always a next feature, a next version, a next idea. We'll be here for that too."
      }
    ]
  }
]

export default function FAQPage () {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggle = (key: string) =>
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))

  return (
    <PageLayout>
      <PageHero
        label='FAQ'
        title='Frequently Asked Questions'
        subtitle="Questions we get before projects start — and the answers that help you decide if we're the right partner."
        ctaText='Contact Us'
        ctaHref='/contact'
      />

      <section className='section-spacing bg-background'>
        <div className='container-wide section-padding'>
          <div className='max-w-3xl mx-auto space-y-12'>
            {faqCategories.map((cat, ci) => (
              <AnimatedSection key={cat.category} delay={ci * 0.05}>
                <h2 className='text-xl font-heading font-bold mb-6'>
                  {cat.category}
                </h2>
                <div className='space-y-3'>
                  {cat.faqs.map((faq, fi) => {
                    const key = `${ci}-${fi}`
                    return (
                      <button
                        key={key}
                        onClick={() => toggle(key)}
                        className='w-full text-left card-premium p-5 transition-all'
                      >
                        <div className='flex items-center justify-between gap-4'>
                          <h3 className='font-heading font-semibold text-sm'>
                            {faq.q}
                          </h3>
                          <ChevronDown
                            className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${
                              openItems[key] ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        {openItems[key] && (
                          <p className='text-sm font-body text-muted-foreground leading-relaxed mt-3'>
                            {faq.a}
                          </p>
                        )}
                      </button>
                    )
                  })}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='section-spacing bg-primary'>
        <div className='container-wide section-padding text-center'>
          <AnimatedSection>
            <h2 className='text-3xl font-heading font-bold text-primary-foreground mb-6'>
              Still have questions?
            </h2>
            <p className='text-base font-body text-primary-foreground/70 max-w-lg mx-auto mb-8'>
              We&apos;d love to hear from you. Schedule a free consultation to
              discuss your project.
            </p>
            <Link href='/contact' className='btn-accent'>
              Get in Touch <ArrowRight className='w-4 h-4' />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  )
}
