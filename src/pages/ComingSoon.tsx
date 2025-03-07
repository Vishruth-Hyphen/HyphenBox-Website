
import React from "react";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      
      {/* Content container */}
      <div className="z-10 text-center px-4 max-w-xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="./lovable-uploads/3c26d8b0-3f8b-4a55-a617-e62da83daf42.png" alt="Hyphenbox Logo" className="h-10" />
        </div>
        
        {/* Main content */}
        <div className="glass px-8 py-12 rounded-xl">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Coming Soon
          </h1>
          <p className="text-muted-foreground mb-8">
            We're building something exciting. Stay tuned for updates.
          </p>
          
          {/* Optional: Contact button */}
          <Button variant="outline" className="group">
            <MailIcon className="mr-2 h-4 w-4" />
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
