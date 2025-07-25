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

const LuxuryMattressLanding = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <NavbarHeroSection/>
      <StatsSection/>
      <BrandsSection/>
      <ProductsSection/>
      <AboutSection/>
      <ServiceSection/>
      <GallerySection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default LuxuryMattressLanding;