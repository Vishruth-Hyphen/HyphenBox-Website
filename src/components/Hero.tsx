
import React from "react";
import HeroContent from "./hero/HeroContent";
import DemoInterface from "./hero/DemoInterface";
import TrustedCompanies from "./hero/TrustedCompanies";

const Hero: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <HeroContent />
            <DemoInterface />
          </div>
        </div>
        
        {/* CSS animations */}
        <style>
          {`
            .cursor-click {
              transform: scale(0.8) !important;
              transition: transform 0.1s ease-in-out !important;
            }
            
            @keyframes pulse-soft {
              0% { opacity: 0.6; }
              50% { opacity: 1; }
              100% { opacity: 0.6; }
            }
            
            .animate-pulse-soft {
              animation: pulse-soft 2s infinite ease-in-out;
            }
          `}
        </style>
      </section>

      {/* Hyphenbox Logo section - Moved from Features to here */}
      <TrustedCompanies />
    </>
  );
};

export default Hero;
