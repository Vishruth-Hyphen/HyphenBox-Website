
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Code, Database, Lightbulb, HelpCircle } from "lucide-react";
import AnimatedCursor from "./AnimatedCursor";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Installation",
    description: "Add our lightweight SDK to your application with just a few lines of code.",
    image: "demo-installation.png",
    icon: <Code className="w-5 h-5" />
  },
  {
    title: "Indexing",
    description: "Our system automatically analyzes and maps all user paths and interactions.",
    image: "demo-indexing.png",
    icon: <Database className="w-5 h-5" />
  },
  {
    title: "Guide Creation",
    description: "Intelligent algorithms create step-by-step guides for every user flow.",
    image: "demo-guide-creation.png",
    icon: <Lightbulb className="w-5 h-5" />
  },
  {
    title: "User Assistance",
    description: "Users can access guides on demand or receive proactive help when they seem stuck.",
    image: "demo-user-assistance.png",
    icon: <HelpCircle className="w-5 h-5" />
  }
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  // Auto-rotate through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
        setAnimating(false);
      }, 300);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="section-container">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-center mx-auto font-medium shadow-sm">
          How It Works
        </div>
        <h2 className="section-title mb-6">Simple integration, powerful results</h2>
        <p className="section-subtitle max-w-3xl">
          Get up and running in minutes with one line of code. 
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center mt-12">
          <div className="w-full lg:w-1/3">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={cn(
                    "p-5 rounded-xl cursor-pointer transition-all duration-300 relative group",
                    activeStep === index 
                      ? "glass shadow-md border-l-4 border-l-primary translate-x-2" 
                      : "hover:bg-white/50 border border-transparent hover:border-gray-100"
                  )}
                  onClick={() => {
                    setAnimating(true);
                    setTimeout(() => {
                      setActiveStep(index);
                      setAnimating(false);
                    }, 300);
                  }}
                >
                  <div className="flex items-center mb-3">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-colors duration-300",
                      activeStep === index ? "bg-primary text-white" : "bg-secondary text-primary/70 group-hover:bg-primary/10"
                    )}>
                      {step.icon || (index + 1)}
                    </div>
                    <h3 className={cn(
                      "text-lg font-medium transition-colors",
                      activeStep === index ? "text-primary" : "text-foreground/80"
                    )}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground ml-14">{step.description}</p>
                  
                  {activeStep === index && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary">
                      <ArrowRight className="w-5 h-5 animate-pulse-soft" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 ml-14">
              <Button size="lg" className="group transition-all duration-300 hover:pr-7">
                Read Documentation 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <div className="glass rounded-xl overflow-hidden aspect-video relative shadow-lg border border-white/40">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-70"></div>
              
              {/* Demo area */}
              <div className="relative h-full p-6 grid place-items-center">
                {/* Animated transition */}
                <div className={cn(
                  "transition-all duration-300",
                  animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                )}>
                
                  {/* Content changes based on active step */}
                  {activeStep === 0 && (
                    <div className="text-center">
                      <div className="bg-white/90 p-6 rounded-lg shadow-inner mb-6 font-mono text-sm overflow-x-auto max-w-xl mx-auto border border-gray-100">
                        <pre className="text-left">
                          <code className="text-gray-800">
                            <span className="text-purple-600">npm</span> install guide-cursor<br />
                            <br />
                            <span className="text-blue-600">import</span> GuideCursor <span className="text-blue-600">from</span> <span className="text-green-600">'guide-cursor'</span>;<br />
                            <br />
                            GuideCursor.<span className="text-yellow-600">init</span>({'{'}
                            <br />
                            {'  '}<span className="text-red-500">appId:</span> <span className="text-green-600">'YOUR_APP_ID'</span>,<br />
                            {'  '}<span className="text-red-500">apiKey:</span> <span className="text-green-600">'YOUR_API_KEY'</span><br />
                            {'}'});
                          </code>
                        </pre>
                      </div>
                      <p className="text-center text-sm text-muted-foreground">
                        Just add these few lines to your application's entry point.
                      </p>
                    </div>
                  )}
                  
                  {activeStep === 1 && (
                    <div className="w-full max-w-2xl">
                      <div className="bg-white/90 rounded-lg p-6 w-full shadow-inner border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-medium">Analyzing User Flows</h4>
                          <span className="text-sm text-muted-foreground">75% complete</span>
                        </div>
                        <div className="h-4 w-full bg-gray-100 rounded-full mb-6 overflow-hidden">
                          <div className="h-4 bg-primary rounded-full w-3/4 animate-pulse"></div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div 
                              key={i} 
                              className={cn(
                                "h-20 rounded-lg flex items-center justify-center transition-all duration-300",
                                i % 3 === 0 
                                  ? "bg-green-50 border border-green-200" 
                                  : "bg-gray-50 border border-gray-200"
                              )}
                            >
                              {i % 3 === 0 && (
                                <Check className="w-6 h-6 text-green-500" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 text-center text-sm text-muted-foreground">
                        Indexing user flows in progress: 75% complete
                      </div>
                    </div>
                  )}
                  
                  {activeStep === 2 && (
                    <div className="w-full max-w-2xl">
                      <div className="bg-white/90 rounded-lg p-6 flex gap-6 shadow-inner border border-gray-100">
                        <div className="w-1/2">
                          <h4 className="font-medium mb-4">Generated Guide</h4>
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center mb-4 group">
                              <div className={cn(
                                "w-8 h-8 rounded-full mr-3 flex items-center justify-center text-sm transition-colors",
                                i === 2 
                                  ? "bg-primary text-white" 
                                  : "bg-gray-100 text-gray-600 group-hover:bg-primary/10"
                              )}>
                                {i}
                              </div>
                              <div className="flex-1">
                                <div className="h-4 bg-gray-100 rounded w-full"></div>
                                {i === 2 && (
                                  <div className="h-3 bg-gray-50 rounded w-3/4 mt-2"></div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="w-1/2 border-l pl-6">
                          <h4 className="font-medium mb-4">Preview</h4>
                          <div className="aspect-video bg-gray-50 rounded-lg mb-4 relative overflow-hidden border border-gray-200">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white/0"></div>
                            <div className="absolute bottom-3 right-3 flex space-x-1">
                              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                          </div>
                          <div className="w-full h-4 bg-gray-100 rounded mb-2"></div>
                          <div className="w-3/4 h-4 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                      <div className="mt-4 text-center text-sm text-muted-foreground">
                        Creating guides based on detected user flows
                      </div>
                    </div>
                  )}
                  
                  {activeStep === 3 && (
                    <div className="w-full max-w-2xl relative">
                      <div className="bg-white/90 rounded-lg p-6 grid grid-cols-6 gap-6 shadow-inner border border-gray-100">
                        <div className="col-span-1 flex flex-col gap-4">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div 
                              key={i} 
                              className={cn(
                                "h-10 rounded-md transition-colors",
                                i === 3 ? "bg-primary/10 border-l-2 border-primary" : "bg-gray-100"
                              )}
                            ></div>
                          ))}
                        </div>
                        <div className="col-span-5 bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="w-full h-6 bg-gray-100 rounded mb-5"></div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-video bg-white rounded-md shadow-sm border border-gray-100 flex items-center justify-center p-3">
                              <div className="w-full h-4 bg-gray-100 rounded"></div>
                            </div>
                            <div className="aspect-video bg-white rounded-md shadow-sm border border-gray-100 flex items-center justify-center p-3">
                              <div className="w-full h-4 bg-gray-100 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-10 right-10">
                        <div className="glass rounded-lg p-4 shadow-lg animate-pulse-soft max-w-[220px] border border-primary/20">
                          <div className="text-sm font-medium mb-2 text-primary">Need help with this page?</div>
                          <div className="text-xs text-muted-foreground mb-3">I can guide you through:</div>
                          <div className="text-xs bg-primary/10 rounded-md py-1.5 px-3 mb-2 font-medium text-primary/80">Creating a new item</div>
                          <div className="text-xs bg-secondary rounded-md py-1.5 px-3 font-medium text-secondary-foreground/80">Exporting data</div>
                        </div>
                      </div>
                      
                      <AnimatedCursor 
                        size="medium" 
                        animated={false} 
                        className="absolute top-1/2 left-1/2 animate-cursor-move" 
                      />
                      
                      <div className="mt-4 text-center text-sm text-muted-foreground">
                        Users receive contextual help as they navigate
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
