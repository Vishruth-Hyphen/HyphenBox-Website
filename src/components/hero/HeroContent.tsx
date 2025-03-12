
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroContent: React.FC = () => {
  const heroButtonRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize Google Calendar scheduling button after component mounts
    if (heroButtonRef.current && window.calendar?.schedulingButton) {
      window.calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Mf8BsXtRdb-QFwzpMqqDUjANUxIrzeKr6uwrfY4p8L2-_LWRf_u2SonX1AqXkv6r6KRQpWqM8?gv=true',
        color: '#039BE5',
        label: "Book a demo",
        target: heroButtonRef.current,
      });
    }
  }, []);

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
        <Button size="lg" className="gap-2">
          Get Started <ArrowRight className="h-4 w-4" />
        </Button>
        <div ref={heroButtonRef} style={{ display: 'none' }}></div>
      </div>
    </div>
  );
};

export default HeroContent;
