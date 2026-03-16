'use client'

import BlogPreviewSection from '@/components/home/BlogPreviewSection'
import ClientReviewsSection from '@/components/home/ClientReviewsSection'
import ContactCTASection from '@/components/home/ContactCTASection'
import FeaturedWorkSection from '@/components/home/FeaturedWorkSection'
import FounderSection from '@/components/home/FounderSection'
import HeroSection from '@/components/home/HeroSection'
import IndustriesSection from '@/components/home/IndustriesSection'
import ProcessSection from '@/components/home/ProcessSection'
import QuickTeamCTASection from '@/components/home/QuickTeamCTASection'
import ServicesSection from '@/components/home/ServicesSection'
import TechStackSection from '@/components/home/TechStackSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import TrustedCompaniesSection from '@/components/home/TrustedCompaniesSection'
import VisionCommitmentSection from '@/components/home/VisionCommitmentSection'
import WhatWeOfferSection from '@/components/home/WhatWeOfferSection'
import WhyUsSection from '@/components/home/WhyUsSection'
import { motion } from 'framer-motion'

export default function HomePage () {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection />
      <TrustedCompaniesSection />
      <VisionCommitmentSection />
      <QuickTeamCTASection />
      <WhatWeOfferSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <ClientReviewsSection />
      <TechStackSection />
      <WhyUsSection />
      <IndustriesSection />
      <ProcessSection />
      <FounderSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <ContactCTASection />
    </motion.div>
  )
}
