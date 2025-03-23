
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import AnimatedCursor from "@/components/AnimatedCursor";

const Index = () => {
  // Simulate preloading for smooth transitions
  useEffect(() => {
    const preloadImages = () => {
      // This would normally preload actual images
      console.log("Preloading assets for smooth experience");
    };
    
    preloadImages();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <Layout>
      <AnimatedCursor color="bg-primary/70" size="medium" pulseEffect />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
