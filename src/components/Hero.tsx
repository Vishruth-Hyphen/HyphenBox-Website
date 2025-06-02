import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { supabase } from "../lib/supabase";

const Hero: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const calendarUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Mf8BsXtRdb-QFwzpMqqDUjANUxIrzeKr6uwrfY4p8L2-_LWRf_u2SonX1AqXkv6r6KRQpWqM8";

  useEffect(() => {
    // Try to play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Auto-play prevented:', error);
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const { error: supabaseError } = await supabase
        .from('landing_page_visitors')
        .insert([
          { 
            email: email,
            created_at: new Date().toISOString()
          }
        ]);

      if (supabaseError) {
        console.error('Supabase error details:', supabaseError);
        
        if (supabaseError.code === '42501' || supabaseError.message.includes('permission denied')) {
          throw new Error('Permission denied. Please contact support.');
        }
        
        throw supabaseError;
      }

      setEmail('');
      window.location.href = calendarUrl;
      
    } catch (err: any) {
      console.error('Error storing email:', err);
      setError(err.message || 'Failed to submit email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToDemo = () => {
    const demoSection = document.getElementById('how-it-works');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (videoRef.current) {
      // Reset video to beginning and show controls
      videoRef.current.currentTime = 0;
      setShowControls(true);
      videoRef.current.play().catch(console.error);
    }
  };

  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="px-3 md:px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 mb-6 md:mb-8 rounded-full bg-primary/10 text-primary font-medium text-sm">
            ✨ Stop losing users mid-flow
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
            Nudge Users to 
            <span className="text-primary block">Complete Their Journey</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Record user flows once. Guide users through them forever. 
            Turn abandoned workflows into completed conversions.
          </p>
          
          {/* Demo video */}
          <div className="relative max-w-4xl mx-auto mb-8 md:mb-12 px-2">
            <div className="aspect-video bg-white rounded-lg md:rounded-xl shadow-xl border border-gray-200 overflow-hidden relative group cursor-pointer" onClick={handleVideoClick}>
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
                onLoadStart={() => console.log('Video loading started')}
                onCanPlay={() => console.log('Video can play')}
                onError={(e) => console.error('Video error:', e)}
              />
              {!showControls && (
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 md:p-4 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-primary ml-0.5" />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Value props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            <div className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-xl md:text-2xl">🎬</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Record Once</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Capture any user flow with our browser extension</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-xl md:text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Integrate Simply</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Add one script tag to your website</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-xl md:text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Guide Forever</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Help users complete flows when they get stuck</p>
            </div>
          </div>
          
          {/* Email capture */}
          <div className="max-w-md mx-auto px-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@company.com"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary transition-colors text-center sm:text-left text-sm"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 md:px-8 py-3 text-sm"
                >
                  {isSubmitting ? 'Starting...' : 'Get Started'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
            </form>
            <p className="text-xs md:text-sm text-muted-foreground mt-3">
              Free to try • No credit card required • 2-minute setup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
