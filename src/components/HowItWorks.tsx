import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code } from "lucide-react";

const steps = [
  {
    id: "record",
    title: "Record",
    description: "Install our browser extension and record any user journey once. Click through your app normally - we'll capture every step.",
    gif: "/recorder.gif",
    details: [
      "Install browser extension in 30 seconds",
      "Click record and perform your workflow", 
      "Automatic step detection and screenshots",
      "Export ready-to-use guides"
    ],
    cta: "Download Extension",
    icon: Download
  },
  {
    id: "integrate", 
    title: "Integrate",
    description: "Add one simple script tag to your website. No complex setup, no framework dependencies. Just copy, paste, and you're live.",
    gif: null,
    details: [
      "Copy-paste integration",
      "Works with any website or web app",
      "No performance impact", 
      "Instant deployment"
    ],
    code: `// Add to your website
<script src="https://hyphenbox-clientsdk.pages.dev/flow.js"></script>

// Initialize in your app
<script>
  window.hyphenSDKInstance = window.Hyphenbox.initialize({
    apiKey: "your_api_key",
    userId: "user123",
    userName: "John Doe"
  });
</script>`,
    cta: "View Integration Guide",
    icon: Code
  }
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState("record");
  const currentStep = steps.find(step => step.id === activeStep) || steps[0];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50/30 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From Recording to <span className="text-primary">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two simple steps to transform how users interact with your product.
          </p>
        </div>

        {/* Step Toggle Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-xl p-1 shadow-sm border border-gray-200">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeStep === step.id 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Step {index + 1}: {step.title}
              </button>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-video bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                {currentStep.gif ? (
                  <img 
                    src={currentStep.gif} 
                    alt={`${currentStep.title} demo`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-900 p-6 flex items-center justify-center">
                    <div className="w-full max-w-sm">
                      <div className="bg-gray-800 rounded-lg p-4 font-mono text-xs leading-relaxed">
                        <div className="text-gray-500">// Add to your website</div>
                        <div className="mt-2">
                          <span className="text-blue-400">&lt;script</span> 
                          <span className="text-yellow-400"> src</span>=
                          <span className="text-green-300">"https://hyphenbox-clientsdk.pages.dev/flow.js"</span>
                          <span className="text-blue-400">&gt;&lt;/script&gt;</span>
                        </div>
                        
                        <div className="mt-4 text-gray-500">// Initialize in your app</div>
                        <div className="mt-2">
                          <span className="text-blue-400">&lt;script&gt;</span>
                        </div>
                        <div className="ml-2">
                          window.<span className="text-purple-400">hyphenSDKInstance</span> = window.Hyphenbox.
                          <span className="text-purple-400">initialize</span>({"{"}
                        </div>
                        <div className="ml-4">
                          <span className="text-blue-400">apiKey:</span> <span className="text-green-300">"your_api_key"</span>,
                        </div>
                        <div className="ml-4">
                          <span className="text-blue-400">userId:</span> <span className="text-green-300">"user123"</span>,
                        </div>
                        <div className="ml-4">
                          <span className="text-blue-400">userName:</span> <span className="text-green-300">"John Doe"</span>
                        </div>
                        <div className="ml-2">{"});"}</div>
                        <div>
                          <span className="text-blue-400">&lt;/script&gt;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Step indicator */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-lg">
                {steps.findIndex(s => s.id === activeStep) + 1}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center text-white">
                  <currentStep.icon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{currentStep.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {currentStep.description}
              </p>
            </div>

            <div className="space-y-3">
              {currentStep.details.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">{detail}</span>
                </div>
              ))}
            </div>

            <Button 
              className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
              onClick={() => window.open("https://chromewebstore.google.com/detail/heolaamdcaoadoacmihafnhegjijopgh?utm_source=item-share-cb", "_blank")}
            >
              {currentStep.cta}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl border border-primary/10">
          <h3 className="text-2xl font-bold mb-3">Ready to boost your user completion rates?</h3>
          <p className="text-muted-foreground mb-6">
            Join teams already using HyphenBox to guide users through complex workflows.
          </p>
          <Button 
            variant="outline" 
            className="border-primary/20 hover:bg-primary/5"
            onClick={() => window.open("https://dashboard.hyphenbox.com/auth/signup", "_blank")}
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
