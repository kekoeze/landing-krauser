"use client";

import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import ValuePropSection from '@/components/value-prop-section';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import PartnersSection from '@/components/partners-section';
import PortfolioSection from '../components/portfolio-section';
import WhyUsSection from '@/components/why-us-section';
import FinalCtaSection from '@/components/final-cta-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-primary overflow-x-clip theme-transition">
      <Navbar />
      <HeroSection />
      <ValuePropSection />
      <AboutSection />
      <ServicesSection />
      <PartnersSection />
      <PortfolioSection />
      <WhyUsSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
