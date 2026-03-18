'use client'

import PageLayout from '@/components/layout/PageLayout'
import AnimatedSection from '@/components/shared/AnimatedSection'
import SectionLabel from '@/components/shared/SectionLabel'
import {
  ArrowRight,
  Award,
  Globe,
  Heart,
  Lightbulb,
  Target,
  Users
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const values = [
  {
    icon: Target,
    title: 'Impact Over Output',
    desc: 'We measure ourselves by the business outcomes we deliver, not the lines of code we write.'
  },
  {
    icon: Users,
    title: 'Partnership Mindset',
    desc: 'We embed ourselves in your team, your goals, and your challenges. Your success is our success.'
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    desc: 'We invest 10% of our time in learning new technologies, methodologies, and business domains.'
  },
  {
    icon: Heart,
    title: 'Craftsmanship',
    desc: 'We take pride in clean code, thoughtful architecture, and polished user experiences.'
  },
  {
    icon: Globe,
    title: 'Transparency',
    desc: 'No hidden costs, no scope surprises, no communication gaps. Full visibility into everything we do.'
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: "Good enough isn't in our vocabulary. We push for exceptional quality in every deliverable."
  }
]

const team = [
  {
    name: 'Arjun Mehta',
    role: 'Founder & CEO',
    bio: '15+ years in product engineering. Previously led engineering at a $200M fintech company.'
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    bio: 'Ex-Google senior engineer. Expert in distributed systems and AI infrastructure.'
  },
  {
    name: 'Maya Patel',
    role: 'Head of Design',
    bio: 'Former design lead at a top SaaS unicorn. Specialist in B2B product design.'
  },
  {
    name: 'Vikram Singh',
    role: 'VP of Engineering',
    bio: 'Built and scaled engineering teams from 5 to 100+. Deep expertise in platform engineering.'
  },
  {
    name: 'Omar Hassan',
    role: 'Head of Architecture',
    bio: 'Cloud-native architect with 12+ years building distributed systems at enterprise scale.'
  },
  {
    name: 'Elena Volkov',
    role: 'Director of Delivery',
    bio: 'Program management expert who has delivered 80+ projects across fintech, healthcare, and SaaS.'
  }
]

const archBorderRadius = '40% 40% 4% 4% / 20% 20% 4% 4%'

export default function AboutPage () {
  return (
    <PageLayout>
      {/* <PageHero
        label="About Us"
        title="We Engineer Digital Products That Drive Growth"
        subtitle="NexaBuild is a premium software engineering studio that partners with ambitious companies to design, build, and scale digital products that win markets."
      /> */}
      {/* Driving Business Success — pro-level bg section */}
      <section className='relative min-h-[520px] md:min-h-[560px] flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/about-innovation-section-bg.jpg'
            alt=''
            fill
            className='object-cover'
            sizes='100vw'
            priority={false}
          />
        </div>
        <div
          className='absolute inset-0 z-[1]'
          style={{
            background:
              'linear-gradient(to bottom, hsl(50 33% 95% / 0.88), hsl(150 20% 12% / 0.75))'
          }}
        />
        <div className='relative z-10 container-wide section-padding py-32 text-center max-w-3xl mx-auto'>
          <AnimatedSection>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground mb-6'>
              Driving Business Success Through Innovative Software
            </h2>
            <p className='text-base sm:text-lg font-body text-muted-foreground leading-relaxed mb-6'>
              In today&apos;s digital world, the right software can make or
              break your business. At Commit4 Solutions, our dedicated team of
              engineers and developers is committed to delivering tailored
              software solutions that align with your business goals —
              empowering you to lead with confidence while we handle the
              technology.
            </p>
            <p className='text-base font-body font-semibold text-foreground mb-8'>
              Have a software project in mind? Partner with Commit4 Solutions
              today!
            </p>
            <Link
              href='/contact'
              className='btn-accent inline-flex items-center gap-2'
            >
              Step Into Innovation
              <ArrowRight className='w-4 h-4' />
            </Link>
          </AnimatedSection>
        </div>
      </section>
      {/* CTA card — Explore Services & Portfolio */}
      <section className='section-spacing'>
        <div className='container-wide section-padding'>
          <AnimatedSection>
            <div className='rounded-3xl bg-gradient-to-r from-[#0a1a12] to-[#112a1d] p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 shadow-xl'>
              <div className='max-w-xl'>
                <p className='text-xs font-semibold uppercase tracking-wider text-primary-foreground/60 mb-3'>
                  Explore
                </p>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground tracking-tight mb-3'>
                  Ready To Explore Our Services & Client Stories?
                </h2>
                <p className='text-sm sm:text-base font-body text-primary-foreground/80 leading-relaxed'>
                  Discover how we help teams ship products and scale. Browse our
                  work and services.
                </p>
              </div>
              <div className='shrink-0'>
                <Link
                  href='/work'
                  className='inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-primary-foreground text-primary-foreground font-body font-semibold text-sm hover:bg-primary-foreground hover:text-primary transition-colors duration-200'
                >
                  Dive Into Our Portfolio
                  <ArrowRight className='w-4 h-4' />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* Message From The CEO — left text, right image (theme-aligned with Story/Values) */}
      <section className='section-spacing bg-muted'>
        <div className='container-wide section-padding'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <AnimatedSection className='order-2 lg:order-1'>
              <SectionLabel>Message From The CEO</SectionLabel>
              <h2 className='text-3xl font-heading font-bold tracking-tight mb-6'>
                A note from our leadership
              </h2>
              <p className='text-base font-body text-muted-foreground leading-relaxed mb-4'>
                Hey Everyone,
              </p>
              <p className='text-base font-body text-muted-foreground leading-relaxed mb-4'>
                Welcome to Commit4 Solutions, your trusted partner for software
                development and consultancy. I lead this company, and I&apos;m
                excited to share our story and vision with you.
              </p>
              <p className='text-base font-body text-muted-foreground leading-relaxed mb-4'>
                At Commit4 Solutions, we believe in the power of software to
                transform industries and unlock boundless possibilities. Our
                team of exceptional professionals, specializing in modern
                technologies and best practices, is here to drive your digital
                transformation journey.
              </p>
              <p className='text-base font-body text-muted-foreground leading-relaxed mb-4'>
                We go beyond being just developers; we&apos;re your strategic
                partners. We tailor solutions to ensure your success, foster
                long-lasting partnerships, and deliver top-notch software. Our
                innovative mindset keeps us at the forefront of the
                ever-evolving tech landscape.
              </p>
              <p className='text-base font-body text-muted-foreground leading-relaxed mb-4'>
                Integrity and transparency are the cornerstones of our culture.
                We earn your trust by delivering excellence and practicing open
                communication. Moreover, we actively support social causes and
                embrace sustainable practices to make a positive impact on our
                world.
              </p>
              <p className='text-base font-body text-muted-foreground leading-relaxed mb-4'>
                Let&apos;s shape the future together through technology. Choose
                Commit4 Solutions for exceptional results and leverage our
                resource augmentation or remote teams of software developers.
              </p>
              <p className='text-base font-body text-muted-foreground leading-relaxed'>
                Join us on this exciting journey, and let&apos;s make a
                difference together.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className='order-1 lg:order-2'>
              <div className='relative aspect-[4/5] max-h-[560px] lg:max-h-none w-full overflow-hidden  shadow-lg border border-border/50'>
                <Image
                  src='/about-ceo-message.jpg'
                  alt='Commit4 Solutions leadership'
                  fill
                  className='object-cover object-top'
                  sizes='(min-width: 1024px) 50vw, 100vw'
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Our Inspiring Vision — left image, right text */}
      <section className='section-spacing bg-background'>
        <div className='container-wide section-padding'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <AnimatedSection className='order-1'>
              <div className='relative aspect-[4/5] max-h-[560px] lg:max-h-none w-full overflow-hidden  shadow-lg border border-border/50'>
                <Image
                  src='/about-vision-section.jpg'
                  alt='Commit4 Solutions vision — technology and innovation'
                  fill
                  className='object-cover object-center'
                  sizes='(min-width: 1024px) 50vw, 100vw'
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className='order-2'>
              <SectionLabel>Our Inspiring Vision</SectionLabel>
              <h2 className='text-3xl font-heading font-bold tracking-tight mb-6'>
                Our Inspiring Vision
              </h2>
              <p className='text-base font-body text-muted-foreground leading-relaxed mb-4'>
                At Commit4 Solutions, we envision a future where technology
                breaks barriers, bold ideas reshape industries, and innovation
                drives meaningful change. We are dedicated to building
                cutting-edge, AI-powered solutions that redefine what is
                possible in the digital world.
              </p>
              <p className='text-base font-body text-muted-foreground leading-relaxed'>
                Fueled by passion and purpose, we harness the collective
                strength of our team to create a world of limitless
                opportunities. We dream big, innovate boldly, and commit to
                building a smarter, better tomorrow.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Impactful Mission — left text, right image */}
      <section className='section-spacing bg-muted'>
        <div className='container-wide section-padding'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <AnimatedSection className='order-2 lg:order-1'>
              <SectionLabel>Our Impactful Mission</SectionLabel>
              <h2 className='text-3xl font-heading font-bold tracking-tight mb-6'>
                Our Impactful Mission
              </h2>
              <p className='text-base font-body text-muted-foreground leading-relaxed mb-4'>
                At Commit4 Solutions, our mission is to empower businesses with
                the transformative technology solutions they need to thrive.
                Through our expertise in custom software development, Cloud
                Services, AI/ML, DevOps, and cybersecurity, we deliver tailored
                solutions that accelerate growth, streamline operations, and
                spark innovation.
              </p>
              <p className='text-base font-body text-muted-foreground leading-relaxed'>
                We put our clients at the center of everything we do —
                consistently exceeding expectations and building lasting
                partnerships rooted in trust, transparency, and collaboration.
                Together, let&apos;s shape the future of business.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className='order-1 lg:order-2'>
              <div className='relative aspect-[4/5] max-h-[360px] lg:max-h-none w-full overflow-hidden shadow-lg border border-border/50'>
                <Image
                  src='/about-mission-section.jpg'
                  alt='Commit4 Solutions mission — technology solutions and partnership'
                  fill
                  className='object-cover object-center'
                  sizes='(min-width: 1024px) 50vw, 100vw'
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story */}
      {/* <section className='section-spacing bg-background'>
        <div className='container-wide section-padding'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <AnimatedSection>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className='text-3xl font-heading font-bold tracking-tight mb-6'>
                Born from frustration with mediocre agencies
              </h2>
              <p className='text-base font-body text-muted-foreground leading-relaxed mb-4'>
                NexaBuild was founded in 2019 by engineers and designers who
                were tired of seeing great product ideas fail because of poor
                execution. Too many agencies deliver average work, miss
                deadlines, and disappear after launch.
              </p>
              <p className='text-base font-body text-muted-foreground leading-relaxed mb-4'>
                We built NexaBuild to be the agency we wished existed — one that
                combines strategic thinking with engineering excellence, treats
                every project like a startup, and measures success by business
                outcomes, not deliverables.
              </p>
              <p className='text-base font-body text-muted-foreground leading-relaxed'>
                Today, we're a 60+ person team across 4 countries, serving
                clients from seed-stage startups to Fortune 500 enterprises. Our
                work has generated over $500M in value for our clients.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className='grid grid-cols-2 gap-4'>
                {[
                  { value: '2019', label: 'Founded' },
                  { value: '60+', label: 'Team Members' },
                  { value: '150+', label: 'Projects' },
                  { value: '$500M+', label: 'Client Value Created' }
                ].map(s => (
                  <div key={s.label} className='card-premium p-6 text-center'>
                    <div className='text-2xl font-heading font-bold text-accent'>
                      {s.value}
                    </div>
                    <div className='text-xs font-body text-muted-foreground mt-1'>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section> */}
      {/* Values */}
      {/* <section className='section-spacing bg-muted'>
        <div className='container-wide section-padding'>
          <AnimatedSection>
            <SectionLabel>Our Values</SectionLabel>
            <h2 className='text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-14'>
              What guides every decision
            </h2>
          </AnimatedSection>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.05}>
                <div className='group'>
                  <div className='w-12 h-12 rounded-2xl bg-background flex items-center justify-center mb-4 shadow-sm group-hover:bg-accent transition-colors'>
                    <v.icon className='w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors' />
                  </div>
                  <h3 className='font-heading font-semibold text-base mb-2'>
                    {v.title}
                  </h3>
                  <p className='text-sm font-body text-muted-foreground leading-relaxed'>
                    {v.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}
      {/* Leadership — Arch-shaped founder images */}
      {/* <section className='section-spacing bg-background relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[100px]' />
        <div className='relative container-wide section-padding'>
          <AnimatedSection>
            <div className='text-center mb-16'>
              <SectionLabel>Leadership</SectionLabel>
              <h2 className='text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-4'>
                The people behind the work
              </h2>
              <p className='text-base font-body text-muted-foreground max-w-xl mx-auto'>
                Our leadership team brings decades of experience from
                world-class technology companies.
              </p>
            </div>
          </AnimatedSection>


          <div className='flex flex-wrap sm:flex-nowrap items-end justify-center gap-5 sm:gap-6 lg:gap-8 mb-12'>
            {team.slice(0, 4).map((member, i) => {
              const heights = [
                'h-[300px] sm:h-[340px]',
                'h-[320px] sm:h-[380px]',
                'h-[310px] sm:h-[360px]',
                'h-[300px] sm:h-[340px]'
              ]
              const offsets = ['sm:mt-8', 'sm:mt-0', 'sm:mt-4', 'sm:mt-10']
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`group relative w-[calc(50%-10px)] sm:w-[200px] lg:w-[220px] ${offsets[i]}`}
                >
                  <div
                    className={`relative ${heights[i]} w-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-500`}
                    style={{ borderRadius: archBorderRadius }}
                  >
                    <Image
                      src='/commit4solutions-log.png'
                      alt={member.name}
                      fill
                      className='object-cover object-top group-hover:scale-105 transition-transform duration-700'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent' />
                    <div className='absolute bottom-0 left-0 right-0 p-4'>
                      <h3 className='font-heading font-semibold text-sm text-primary-foreground'>
                        {member.name}
                      </h3>
                      <div className='text-[10px] font-body text-accent-foreground/90 bg-accent/80 inline-block px-2 py-0.5 rounded-full mt-1'>
                        {member.role}
                      </div>
                    </div>
                  </div>
                  <p className='text-xs font-body text-muted-foreground leading-relaxed mt-3 px-1'>
                    {member.bio}
                  </p>
                </motion.div>
              )
            })}
          </div>


         <div className='flex flex-wrap sm:flex-nowrap items-end justify-center gap-5 sm:gap-6 lg:gap-8'>
            {team.slice(4).map((member, i) => {
              const heights = [
                'h-[300px] sm:h-[350px]',
                'h-[310px] sm:h-[360px]'
              ]
              const offsets = ['sm:mt-4', 'sm:mt-0']
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (i + 4) * 0.12 }}
                  className={`group relative w-[calc(50%-10px)] sm:w-[200px] lg:w-[220px] ${offsets[i]}`}
                >
                  <div
                    className={`relative ${heights[i]} w-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-500`}
                    style={{ borderRadius: archBorderRadius }}
                  >
                    <Image
                      src='/commit4solutions-log.png'
                      alt={member.name}
                      fill
                      className='object-cover object-top group-hover:scale-105 transition-transform duration-700'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent' />
                    <div className='absolute bottom-0 left-0 right-0 p-4'>
                      <h3 className='font-heading font-semibold text-sm text-primary-foreground'>
                        {member.name}
                      </h3>
                      <div className='text-[10px] font-body text-accent-foreground/90 bg-accent/80 inline-block px-2 py-0.5 rounded-full mt-1'>
                        {member.role}
                      </div>
                    </div>
                  </div>
                  <p className='text-xs font-body text-muted-foreground leading-relaxed mt-3 px-1'>
                    {member.bio}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>*/}
      {/* CTA */}
      <section className='section-spacing bg-primary'>
        <div className='container-wide section-padding text-center'>
          <AnimatedSection>
            <h2 className='text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-6'>
              Let&apos;s build something meaningful together
            </h2>
            <p className='text-base font-body text-primary-foreground/70 max-w-lg mx-auto mb-8'>
              Whether you&apos;re a startup with an idea or an enterprise with a
              challenge, we&apos;re ready.
            </p>
            <Link href='/contact' className='btn-accent'>
              Start a Conversation <ArrowRight className='w-4 h-4' />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  )
}
