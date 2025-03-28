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
    // Add the Unusual.ai script here
    const script = document.createElement('script');
    script.src = "https://content.unusual.ai/unusual.js";
    script.setAttribute('data-domain-id', "d3a3db33-5afc-4e50-a0c2-4a549519d684");
    document.head.appendChild(script);
    
    // Rest of your existing useEffect code
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
      <AnimatedCursor color="bg-primary/60" size="small" pulseEffect />
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
