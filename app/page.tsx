"use client";

import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import PartnersSection from '@/components/partners-section';
import PortfolioSection from '@/components/portfolio-section';
import WhyUsSection from '@/components/why-us-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen surface-primary text-primary overflow-x-clip theme-transition">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PartnersSection />
      <PortfolioSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
