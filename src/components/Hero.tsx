import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedCursor from "./AnimatedCursor";
const Hero: React.FC = () => {
  const demoRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!demoRef.current || !cursorRef.current || !messageRef.current) return;
    const animateCursor = () => {
      const paths = [{
        x: 140,
        y: 55,
        delay: 0,
        message: "Click on this sidebar item"
      }, {
        x: 220,
        y: 110,
        delay: 1500,
        message: "Select this option"
      }, {
        x: 300,
        y: 170,
        delay: 3000,
        message: "Adjust this setting"
      }, {
        x: 180,
        y: 190,
        delay: 4500,
        message: "Click Submit"
      }];
      if (messageRef.current) {
        messageRef.current.style.opacity = "0";
        setTimeout(() => {
          if (cursorRef.current && messageRef.current) {
            const lastPosition = paths[paths.length - 1];
            cursorRef.current.style.transform = `translate(${lastPosition.x}px, ${lastPosition.y}px)`;
            messageRef.current.textContent = paths[0].message;
            messageRef.current.style.opacity = "1";
            setTimeout(() => {
              if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${paths[0].x}px, ${paths[0].y}px)`;
              }
            }, 300);
          }
        }, 300);
      }
      paths.forEach((position, index) => {
        setTimeout(() => {
          if (cursorRef.current && messageRef.current) {
            cursorRef.current.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
            cursorRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
            messageRef.current.style.opacity = "0";
            setTimeout(() => {
              if (messageRef.current) {
                messageRef.current.textContent = position.message;
                messageRef.current.style.opacity = "1";
              }
            }, 300);
            setTimeout(() => {
              if (cursorRef.current) {
                cursorRef.current.classList.add("cursor-click");
                setTimeout(() => {
                  if (cursorRef.current) {
                    cursorRef.current.classList.remove("cursor-click");
                  }
                }, 300);
              }
            }, 400);
          }
        }, position.delay);
      });
    };
    animateCursor();
    const interval = setInterval(animateCursor, 6000);
    return () => clearInterval(interval);
  }, []);
  return <>
      <section className="pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
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
            
            <div className="w-full lg:w-1/2 relative animate-slide-left">
              <div ref={demoRef} className="glass rounded-lg p-4 aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-40"></div>
                
                {/* Demo interface */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="h-8 flex items-center border-b border-gray-200 gap-2 px-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="flex-1 text-center text-xs text-gray-400">HyphenBox Dashboard</div>
                  </div>
                  
                  <div className="flex-1 p-4 grid grid-cols-5 gap-4">
                    {/* Sidebar */}
                    <div className="col-span-1 bg-white/80 rounded shadow-sm p-2">
                      <div className="w-full h-4 bg-primary/10 rounded mb-3"></div>
                      <div className="w-3/4 h-3 bg-gray-200 rounded mb-4"></div>
                      {[1, 2, 3, 4, 5].map(i => <div key={i} className={`w-full h-6 ${i === 2 ? 'bg-primary/20' : 'bg-gray-100'} rounded mb-2 transition-colors`}></div>)}
                    </div>
                    
                    {/* Main content */}
                    <div className="col-span-4 bg-white/80 rounded shadow-sm p-3">
                      <div className="w-full h-6 bg-gray-200 rounded mb-4"></div>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {[1, 2, 3].map(i => <div key={i} className="h-20 bg-gray-100 rounded"></div>)}
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="w-1/3 h-8 bg-gray-100 rounded"></div>
                        <div className="w-24 h-8 bg-primary/80 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Animated cursor */}
                <div ref={cursorRef} className="absolute top-0 left-0 w-6 h-6 pointer-events-none z-20 transition-opacity duration-300" style={{
                transform: 'translate(140px, 55px)'
              }}>
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-primary rounded-full transform scale-75 animate-pulse-soft"></div>
                    <div className="absolute inset-0 border-2 border-white rounded-full"></div>
                    <div ref={messageRef} className="absolute -top-8 -left-1 glass rounded px-2 py-1 text-xs whitespace-nowrap transition-opacity duration-300 shadow-sm">
                      Click on this sidebar item
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-yellow-200/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-blue-200/20 rounded-full blur-xl animate-float" style={{
              animationDelay: '1s'
            }}></div>
            </div>
          </div>
        </div>
        
        {/* CSS animations */}
        <style>
          {`
            .cursor-click {
              transform: scale(0.8) !important;
              transition: transform 0.1s ease-in-out !important;
            }
            
            @keyframes pulse-soft {
              0% { opacity: 0.6; }
              50% { opacity: 1; }
              100% { opacity: 0.6; }
            }
            
            .animate-pulse-soft {
              animation: pulse-soft 2s infinite ease-in-out;
            }
          `}
        </style>
      </section>

      {/* Hyphenbox Logo section - Moved from Features to here */}
      <div className="container mx-auto px-4 mb-20">
        <div className="glass rounded-lg py-8 px-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg font-medium mb-4">Trusted by companies backed by</p>
            <div className="flex items-center justify-center bg-white/80 px-6 py-3 rounded-lg">
              <img src="/lovable-uploads/d837605b-332b-4ec9-8552-95c3005ec88e.png" alt="Y Combinator Logo" className="h-10" />
            </div>
            
          </div>
        </div>
      </div>
    </>;
};
export default Hero;