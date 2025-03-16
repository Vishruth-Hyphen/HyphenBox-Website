
import React from "react";
import { Check, Rocket, Navigation, Wand2, Users, Infinity, BarChart } from "lucide-react";

const features = [
  {
    icon: <Navigation className="w-10 h-10 text-primary" />,
    title: "Autonomous Navigation",
    description: "Automatically indexes all user flows within your product, creating a comprehensive map of functionality.",
    className: "border-t-primary"
  },
  {
    icon: <Wand2 className="w-10 h-10 text-primary" />,
    title: "Intelligent Guides",
    description: "Creates step-by-step guides for any action in your product based on the indexed flows.",
    className: "border-t-accent"
  },
  {
    icon: <Rocket className="w-10 h-10 text-primary" />,
    title: "Seamless Onboarding",
    description: "Reduce time-to-value with guided tours that help users master your product from day one.",
    className: "border-t-purple-400"
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Personalized Assistance",
    description: "Adapts to different user roles and personas to provide contextually relevant guidance.",
    className: "border-t-blue-400"
  },
  {
    icon: <Infinity className="w-10 h-10 text-primary" />,
    title: "Zero Configuration",
    description: "Works right out of the box, with no manual setup of flows or tutorials required.",
    className: "border-t-green-400"
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary" />,
    title: "Usage Analytics",
    description: "Track which features users struggle with and optimize your product accordingly.",
    className: "border-t-yellow-400"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20">
      <div className="section-container">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-center mx-auto">
          Features
        </div>
        <h2 className="section-title">Everything you need for perfect user guidance</h2>
        <p className="section-subtitle">
          Our intelligent second cursor provides comprehensive support for your users, ensuring they can navigate your product with confidence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`glass rounded-lg p-6 border-t-4 ${feature.className} transform transition-all hover:-translate-y-1 hover:shadow-md`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-medium mb-4">Advanced features for enterprise users</h3>
              <div className="space-y-3">
                {[
                  "Custom branding and theming options",
                  "Advanced user segmentation and targeting",
                  "Integration with your existing analytics tools",
                  "Multi-language support for global teams"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-primary/5 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">Enterprise</div>
              <div className="text-muted-foreground mb-4">Customized for your needs</div>
              <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
