import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="./lovable-uploads/3c26d8b0-3f8b-4a55-a617-e62da83daf42.png" alt="Hyphenbox Logo" className="h-11" />
            </div>
            <p className="text-muted-foreground mb-4 max-w-xs">
              The intelligent second cursor that guides your users through your product with ease.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} HyphenBox. All rights reserved.
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
