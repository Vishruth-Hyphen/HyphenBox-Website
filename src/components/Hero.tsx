import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Auto-play prevented:', error);
      });
    }
  }, []);

  const goToSignup = () => {
    window.open("https://dashboard.hyphenbox.io/signup", "_blank");
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setShowControls(true);
      videoRef.current.play().catch(console.error);
    }
  };

  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-2 mb-8 rounded-full bg-primary/10 text-primary font-medium text-sm">
            ✨ Stop losing users mid-flow
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Nudge Users to 
            <span className="text-primary block">Complete Their Journey</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Record user flows once. Guide users through them forever. 
            Turn abandoned workflows into completed conversions.
          </p>
          
          {/* Demo video */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="aspect-video bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden relative group cursor-pointer" onClick={handleVideoClick}>
              <video 
                ref={videoRef}
                src="/video.mp4" 
                aria-label="HyphenBox Demo" 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={showControls}
                preload="auto"
              />
              {!showControls && (
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary ml-0.5" />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Value props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="font-semibold mb-2">Record Once</h3>
              <p className="text-muted-foreground text-sm">Capture any user flow with our browser extension</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Integrate Simply</h3>
              <p className="text-muted-foreground text-sm">Add one script tag to your website</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Guide Forever</h3>
              <p className="text-muted-foreground text-sm">Help users complete flows when they get stuck</p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="max-w-md mx-auto">
            <Button
              onClick={goToSignup}
              size="lg"
              className="px-8 py-4 text-base mb-4"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Free to try • No credit card required • 2-minute setup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
