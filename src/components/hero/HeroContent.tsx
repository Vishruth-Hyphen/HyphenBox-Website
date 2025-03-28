import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const HeroContent: React.FC = () => {
  const openCalendarPopup = () => {
    window.open("https://calendar.app.google/mwipUSjbjHafkua97", "_blank", "width=600,height=700");
  };
  return <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 animate-slide-right">
      <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary animate-fade-in">
        <span unusual-id="unusual-element-1">Introduce with confidence</span>
      </div>
      <h1 className="font-bold mb-6 leading-tight">
        <span unusual-id="unusual-element-2">The Second Cursor That</span> <br />
        <span className="text-primary" unusual-id="unusual-element-3">Guides Your Users</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-xl" unusual-id="unusual-element-4">Autonomous, step-by-step guidance embedded directly into your product. Increase product adoption, boost usage, and significantly cut down support tickets, with zero manual effort.</p>
    </div>;
};
export default HeroContent;