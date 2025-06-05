import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const CTA: React.FC = () => {
  const openCalendarPopup = () => {
    window.open("https://calendar.app.google/mwipUSjbjHafkua97", "_blank", "width=600,height=700");
  };

  return (
    <section className="py-12 bg-gradient-to-br from-primary/5 via-white to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-16 shadow-xl border border-white/50">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 rounded-full bg-primary/10 text-primary font-medium text-xs md:text-sm">
              <Rocket className="w-3 h-3 md:w-4 md:h-4" />
              Transform Your User Experience
            </div>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Stop Losing Users 
              <span className="text-primary block">Mid-Journey</span>
            </h2>
            
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Start guiding your users through complex workflows today. 
              See immediate improvements in completion rates and user satisfaction.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">2 min</div>
                <div className="text-xs md:text-sm text-muted-foreground">Setup time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">0%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Code changes needed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">∞</div>
                <div className="text-xs md:text-sm text-muted-foreground">Guided user flows</div>
              </div>
            </div>
            
            <Button size="lg" onClick={openCalendarPopup} className="group mb-3 md:mb-4 w-full md:w-auto">
              Schedule Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-xs md:text-sm text-muted-foreground">
              No commitment required • See results in minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
