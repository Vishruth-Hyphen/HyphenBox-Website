import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCalendarPopup = () => {
    window.open("https://calendar.app.google/mwipUSjbjHafkua97", "_blank", "width=600,height=700");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 py-3 md:p-4">
      <div className={`max-w-6xl mx-auto transition-all duration-300 ${
        isScrolled 
          ? "bg-gradient-to-r from-blue-50/95 via-white/95 to-blue-50/95 backdrop-blur-md shadow-lg border border-blue-100/50" 
          : "bg-gradient-to-r from-blue-50/80 via-white/80 to-blue-50/80 backdrop-blur-sm"
      } rounded-2xl`}>
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <img alt="HyphenBox" className="h-8 md:h-9" src="./lovable-uploads/3c26d8b0-3f8b-4a55-a617-e62da83daf42.png" />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#demo" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Demo
            </a>
          </nav>
          
          {/* CTA */}
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="hidden sm:flex text-sm">
              Sign In
            </Button>
            <Button size="sm" onClick={openCalendarPopup} className="text-sm px-3 py-2 h-8">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
