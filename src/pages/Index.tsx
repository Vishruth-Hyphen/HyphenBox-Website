import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";

const Index = () => {
  useEffect(() => {
    // Add the Unusual.ai script here
    const script = document.createElement('script');
    script.src = "https://content.unusual.ai/unusual.js";
    script.setAttribute('data-domain-id', "d3a3db33-5afc-4e50-a0c2-4a549519d684");
    document.head.appendChild(script);
    
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
      <Hero />
      <HowItWorks />
      <CTA />
    </Layout>
  );
};

export default Index;
