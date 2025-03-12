
import React from "react";
import { Button } from "@/components/ui/button";

const CTA: React.FC = () => {
  return <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass rounded-xl p-10 md:p-16 text-center max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary">
            Get Started Today
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your User Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of forward-thinking companies that are using HyphenBox to improve user adoption, reduce support costs, and deliver exceptional experiences.
          </p>
          
          <div className="flex justify-center">
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>;
};

export default CTA;
