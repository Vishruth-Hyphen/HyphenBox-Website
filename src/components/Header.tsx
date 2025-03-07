
import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3 glass shadow-sm" : "py-5 bg-transparent"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img alt="Hyphenbox Logo" className="h-8" src="./lovable-uploads/3c26d8b0-3f8b-4a55-a617-e62da83daf42.png" />
        </div>
      </div>
    </header>;
};

export default Header;
