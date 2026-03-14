"use client";

import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import FeaturedWorkSection from "@/components/home/FeaturedWorkSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogPreviewSection from "@/components/home/BlogPreviewSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import TechStackSection from "@/components/home/TechStackSection";
import FounderSection from "@/components/home/FounderSection";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <TechStackSection />
      <WhyUsSection />
      <IndustriesSection />
      <ProcessSection />
      <FounderSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <ContactCTASection />
    </motion.div>
  );
}

