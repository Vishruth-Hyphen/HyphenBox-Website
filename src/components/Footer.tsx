import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const openCalendarPopup = () => {
    window.open("https://calendar.app.google/mwipUSjbjHafkua97", "_blank", "width=600,height=700");
  };

  return (
    <footer className="py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50/80 via-white/80 to-blue-50/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="flex items-center">
              <img src="./lovable-uploads/3c26d8b0-3f8b-4a55-a617-e62da83daf42.png" alt="Hyphenbox Logo" className="h-8" />
            </div>
            
            {/* Navigation */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </a>
              <button 
                onClick={openCalendarPopup}
                className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0 font-inherit text-sm"
              >
                Demo
              </button>
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
            
            {/* Built by */}
            <div className="flex items-center gap-4 text-sm">
              <span className="text-muted-foreground">Built by</span>
              <div className="flex items-center gap-3">
                <a 
                  href="https://x.com/KushalSM5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  @KushalSM5
                </a>
                <a 
                  href="https://x.com/Vishruth_N" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  @Vishruth_N
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-4 pt-4 border-t border-gray-200/50 text-center">
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} HyphenBox. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
