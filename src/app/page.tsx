"use client";
import React from 'react';
import NavbarHeroSection from './components/NavbarHero';
import StatsSection from './components/StatsSection';
import BrandsSection from './components/BrandsSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MultimediaSection from './components/MultimediaSection';
import WhatsAppButton from './components/WhatsAppButton';

const LuxuryMattressLanding = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <NavbarHeroSection/>
      <StatsSection/>
      <MultimediaSection/>
      <BrandsSection/>
      <ProductsSection/>
      <AboutSection/>
      <ServiceSection/>
      <GallerySection/>
      <ContactSection/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
};

export default LuxuryMattressLanding;