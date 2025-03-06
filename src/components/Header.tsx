
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 glass shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Navigation className="w-6 h-6 text-primary" />
          <span className="font-medium text-xl">GuideCursor</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
            Testimonials
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Log in
          </Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
