
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroContent: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 animate-slide-right">
      <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary animate-fade-in">
        Introduce with confidence
      </div>
      <h1 className="font-bold mb-6 leading-tight">
        The Second Cursor That <br />
        <span className="text-primary">Guides Your Users</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-xl">
        Autonomous navigation assistance that indexes all user flows and creates
        interactive guides. Help your users master your product without frustration.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="group">
          Get Started 
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
