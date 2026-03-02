"use client";

import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import PortfolioSection from '@/components/portfolio-section';
import CustomProjectsSection from '@/components/custom-projects-section';
import TechnologiesSection from '@/components/technologies-section';
import TestimonialsSection from '@/components/testimonials-section';
import PricingSection from '@/components/pricing-section';
import WhyUsSection from '@/components/why-us-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen surface-primary text-primary overflow-x-hidden theme-transition">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <CustomProjectsSection />
      <TechnologiesSection />
      <PricingSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}