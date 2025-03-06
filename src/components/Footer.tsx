
import React from "react";
import { Navigation } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Navigation className="w-5 h-5 text-primary" />
              <span className="font-medium text-lg">GuideCursor</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-xs">
              The intelligent second cursor that guides your users through your product with ease.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Case Studies", "Documentation", "API"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Blog", "Careers", "Contact", "Partners"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              {["Terms of Service", "Privacy Policy", "Cookie Policy", "GDPR", "Security"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} GuideCursor. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((platform, i) => (
              <a key={i} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
