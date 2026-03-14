import { Quote, Star } from 'lucide-react'
import AnimatedSection from '../shared/AnimatedSection'
import SectionLabel from '../shared/SectionLabel'

const testimonials = [
  {
    quote:
      "NexaBuild didn't just build our platform — they became a strategic partner. The quality of engineering and speed of delivery exceeded every expectation.",
    name: 'Jennifer Lucas',
    title: 'Project Manager, OrbitalAI',
    rating: 5,
    metric: '57% production time saved',
    avatar: 'JL'
  },
  {
    quote:
      'Their team integrated seamlessly with ours. Fast communication, clean code, and they genuinely cared about our business outcomes, not just shipping features.',
    name: 'David Kim',
    title: 'CTO, HealthBridge',
    rating: 5,
    metric: '$10,775 in cost savings',
    avatar: 'DK'
  },
  {
    quote:
      'We went from concept to a fully launched SaaS product in 14 weeks. The design quality and technical depth were world-class.',
    name: 'Sarah Okafor',
    title: 'CEO, PayStack Labs',
    rating: 5,
    metric: '20 features in 14 weeks',
    avatar: 'SO'
  }
]

export default function TestimonialsSection () {
  return (
    <section className='section-spacing bg-muted relative overflow-hidden'>
      {/* Decorative shapes */}
      <div className='absolute top-0 left-0 w-96 h-96 rounded-full bg-accent/4 blur-[120px]' />
      <div className='absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-brand/4 blur-[100px]' />

      <div className='relative container-wide section-padding'>
        <AnimatedSection>
          <SectionLabel>Client Stories</SectionLabel>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight max-w-2xl mb-16 leading-tight'>
            Results that speak louder than promises
          </h2>
        </AnimatedSection>

        <div className='grid lg:grid-cols-3 gap-6'>
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.12}>
              <div className='relative bg-background border border-border/60 rounded-3xl p-8 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group overflow-hidden'>
                {/* Decorative corner accent */}
                <div className='absolute -top-6 -right-6 w-20 h-20 rounded-full bg-accent/[0.05] group-hover:bg-accent/[0.1] transition-colors duration-500' />

                <Quote className='w-8 h-8 text-accent/30 mb-5 group-hover:text-accent/50 transition-colors' />
                <div className='flex gap-0.5 mb-5'>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className='w-4 h-4 fill-accent text-accent' />
                  ))}
                </div>
                <p className='text-sm font-body leading-[1.85] text-muted-foreground mb-7 flex-1'>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className='border-t border-border/50 pt-5'>
                  <div className='flex items-center gap-3'>
                    <div className='w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center'>
                      <span className='text-xs font-heading font-bold text-accent'>
                        {t.avatar}
                      </span>
                    </div>
                    <div>
                      <p className='font-heading font-semibold text-sm'>
                        {t.name}
                      </p>
                      <p className='text-xs font-body text-muted-foreground'>
                        {t.title}
                      </p>
                    </div>
                  </div>
                  <div className='mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-body font-semibold'>
                    <span className='w-1.5 h-1.5 rounded-full bg-accent' />
                    {t.metric}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
