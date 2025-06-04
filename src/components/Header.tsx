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

  const goToSignup = () => {
    window.open("https://dashboard.hyphenbox.com/auth/signup", "_blank");
  };

  const goToLogin = () => {
    window.open("https://dashboard.hyphenbox.com/auth/login", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className={`max-w-6xl mx-auto transition-all duration-300 rounded-2xl ${
        isScrolled 
          ? "bg-gradient-to-r from-blue-50/95 via-white/95 to-blue-50/95 backdrop-blur-md shadow-lg border border-blue-100/50" 
          : "bg-gradient-to-r from-blue-50/80 via-white/80 to-blue-50/80 backdrop-blur-sm"
      }`}>
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img alt="HyphenBox" className="h-9" src="./lovable-uploads/3c26d8b0-3f8b-4a55-a617-e62da83daf42.png" />
          </div>
          
        
          
          {/* CTA */}
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="hidden sm:flex text-sm" onClick={goToLogin}>
              Sign In
            </Button>
            <Button size="sm" onClick={goToSignup} className="text-sm px-3 py-2 h-8">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
