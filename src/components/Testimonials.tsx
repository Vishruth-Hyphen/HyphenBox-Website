
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechFlow",
    image: "profile-1.png",
    content: "HyphenBox reduced our customer support tickets by 42% in the first month. The autonomous indexing makes it incredibly easy to keep help content up-to-date."
  },
  {
    name: "Michael Chen",
    role: "CTO at DataSphere",
    image: "profile-2.png",
    content: "We integrated HyphenBox in our enterprise software and saw immediate improvements in user activation rates. The zero-configuration approach saved us countless development hours."
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer at CreativeEdge",
    image: "profile-3.png",
    content: "As a designer, I love how HyphenBox seamlessly integrates with our UI without disrupting the user experience. It provides help exactly when users need it."
  },
  {
    name: "David Kim",
    role: "VP of Customer Success at SaaSMaster",
    image: "profile-4.png",
    content: "The analytics provided by HyphenBox have been invaluable in helping us understand user pain points and optimize our product accordingly."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 hidden">
      <div className="section-container">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-center mx-auto">
          Testimonials
        </div>
        <h2 className="section-title">Trusted by innovative teams</h2>
        <p className="section-subtitle">
          See how companies are improving their user experience and reducing support costs with HyphenBox.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass rounded-lg p-6 border border-white/20"
            >
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-5 h-5 text-yellow-400 fill-yellow-400" 
                  />
                ))}
              </div>
              <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="glass rounded-lg p-8">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-medium mb-2">Companies using GuideCursor</h3>
              <p className="text-muted-foreground">Trusted by leading businesses across industries</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i} 
                  className="h-12 bg-white/50 rounded flex items-center justify-center"
                >
                  <div className="text-xl font-medium text-muted-foreground/50">
                    Company {i}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
