
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import AnimatedCursor from "./AnimatedCursor";

const steps = [
  {
    title: "Installation",
    description: "Add our lightweight SDK to your application with just a few lines of code.",
    image: "demo-installation.png"
  },
  {
    title: "Indexing",
    description: "Our system automatically analyzes and maps all user paths and interactions.",
    image: "demo-indexing.png"
  },
  {
    title: "Guide Creation",
    description: "Intelligent algorithms create step-by-step guides for every user flow.",
    image: "demo-guide-creation.png"
  },
  {
    title: "User Assistance",
    description: "Users can access guides on demand or receive proactive help when they seem stuck.",
    image: "demo-user-assistance.png"
  }
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  return (
    <section id="how-it-works" className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-center mx-auto">
          How It Works
        </div>
        <h2 className="section-title">Simple integration, powerful results</h2>
        <p className="section-subtitle">
          Get up and running in minutes with our easy-to-integrate solution. No complex configuration required.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/3">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeStep === index 
                      ? "glass shadow-sm border-l-4 border-l-primary" 
                      : "hover:bg-white/50"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center mb-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      activeStep === index ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
                    }`}>
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-medium">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground ml-11">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button>
                Read Documentation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <div className="glass rounded-lg overflow-hidden aspect-video relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-40"></div>
              
              {/* Demo area */}
              <div className="relative h-full p-6 grid place-items-center">
                {/* Content changes based on active step */}
                {activeStep === 0 && (
                  <div className="text-center">
                    <div className="bg-white/80 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
                      <pre>
                        <code>
                          npm install guide-cursor<br />
                          <br />
                          import GuideCursor from 'guide-cursor';<br />
                          <br />
                          GuideCursor.init({'{'}
                          <br />
                          {'  '}appId: 'YOUR_APP_ID',<br />
                          {'  '}apiKey: 'YOUR_API_KEY'<br />
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
                  <div className="w-full">
                    <div className="bg-white/80 rounded-lg p-4 w-full">
                      <div className="h-4 w-full bg-gray-100 rounded-full mb-4">
                        <div className="h-4 bg-primary rounded-full w-3/4 animate-pulse"></div>
                      </div>
                      <div className="grid grid-cols-4 gap-3">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                          <div 
                            key={i} 
                            className="h-16 bg-gray-100 rounded flex items-center justify-center"
                          >
                            {i % 3 === 0 && (
                              <Check className="w-5 h-5 text-green-500" />
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
                  <div className="w-full">
                    <div className="bg-white/80 rounded-lg p-4 flex gap-4">
                      <div className="w-1/2">
                        <div className="w-full h-5 bg-gray-100 rounded mb-3"></div>
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="flex items-center mb-3">
                            <div className="w-6 h-6 rounded-full bg-gray-200 mr-2 flex items-center justify-center text-xs">
                              {i}
                            </div>
                            <div className="flex-1 h-4 bg-gray-100 rounded"></div>
                          </div>
                        ))}
                      </div>
                      <div className="w-1/2 border-l pl-4">
                        <div className="w-full h-5 bg-gray-100 rounded mb-3"></div>
                        <div className="aspect-video bg-gray-100 rounded mb-3"></div>
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
                  <div className="w-full relative">
                    <div className="bg-white/80 rounded-lg p-4 grid grid-cols-6 gap-4">
                      <div className="col-span-1 flex flex-col gap-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="h-8 bg-gray-100 rounded"></div>
                        ))}
                      </div>
                      <div className="col-span-5 bg-gray-50 rounded p-3">
                        <div className="w-full h-6 bg-gray-100 rounded mb-4"></div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="aspect-video bg-gray-100 rounded"></div>
                          <div className="aspect-video bg-gray-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-10 right-10">
                      <div className="glass rounded-lg p-3 shadow-lg animate-pulse-soft max-w-[200px]">
                        <div className="text-xs font-medium mb-2">Need help with this page?</div>
                        <div className="text-xs text-muted-foreground mb-2">I can guide you through:</div>
                        <div className="text-xs bg-primary/10 rounded py-1 px-2 mb-1">Creating a new item</div>
                        <div className="text-xs bg-secondary rounded py-1 px-2">Exporting data</div>
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
    </section>
  );
};

export default HowItWorks;
