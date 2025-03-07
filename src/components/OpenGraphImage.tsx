
import React from "react";

const OpenGraphImage: React.FC = () => {
  return (
    <div className="w-[1200px] h-[630px] bg-gradient-to-br from-blue-600 to-blue-900 flex flex-col items-center justify-center p-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-40 -left-40 w-96 h-96 bg-indigo-300/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-20 w-32 h-32 bg-white/10 rounded-full blur-md"></div>
      <div className="absolute -bottom-10 right-40 w-64 h-64 bg-sky-300/20 rounded-full blur-2xl"></div>
      
      {/* Abstract patterns for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-40 w-20 h-20 border-4 border-white/40 rounded-full"></div>
        <div className="absolute bottom-40 right-60 w-16 h-16 border-2 border-white/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-1 bg-white/40 rounded-full rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-1 bg-white/40 rounded-full -rotate-45"></div>
      </div>
      
      {/* Main content with enhanced visual appeal */}
      <div className="z-10 flex flex-col items-center gap-6 backdrop-blur-sm bg-white/10 p-10 rounded-xl border border-white/20 shadow-lg w-4/5">
        {/* Logo - using an absolute URL that's more likely to be accessible to WhatsApp */}
        <div className="mb-2">
          <img 
            src="https://hyphenbox.com/lovable-uploads/3c26d8b0-3f8b-4a55-a617-e62da83daf42.png" 
            alt="HyphenBox Logo" 
            className="h-20 object-contain"
          />
        </div>
        
        {/* Tagline with more visual impact */}
        <h2 className="text-5xl font-extrabold text-center leading-tight max-w-3xl mb-2 text-white drop-shadow-lg">
          The Second Cursor That Guides Your Users
        </h2>
        
        {/* Subtitle with enhanced styling */}
        <p className="text-xl text-white/90 text-center max-w-2xl font-medium">
          Autonomous navigation assistance that indexes all user flows and creates interactive guides
        </p>
        
        {/* Website URL */}
        <p className="text-xl text-blue-300 font-semibold mt-4">
          Hyphenbox.com
        </p>
        
        {/* Visual element - stylized demo interface */}
        <div className="mt-4 glass bg-white/20 rounded-xl p-6 max-w-2xl w-full relative border border-white/30 shadow-xl">
          <div className="grid grid-cols-5 gap-4">
            {/* Browser mockup header */}
            <div className="col-span-5 flex items-center gap-2 mb-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="w-full h-6 bg-white/40 rounded-md px-2 flex items-center justify-center">
                <span className="text-xs text-white/80">HyphenBox Dashboard</span>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-span-1 bg-white/90 rounded-lg shadow p-2 h-28">
              <div className="w-full h-4 bg-blue-600/20 rounded mb-3"></div>
              <div className="w-3/4 h-3 bg-gray-200 rounded mb-4"></div>
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-full h-5 ${i === 2 ? 'bg-blue-600/40' : 'bg-gray-100'} rounded mb-2`}></div>
              ))}
            </div>
            
            {/* Main content */}
            <div className="col-span-4 bg-white/90 rounded-lg shadow p-3 h-28">
              <div className="w-full h-5 bg-gray-200 rounded mb-3"></div>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-14 bg-gray-100 rounded"></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Animated cursor element matching the HyphenBox concept */}
          <div className="absolute top-1/3 right-1/3 w-8 h-8 pointer-events-none z-20 animate-pulse">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-blue-500 rounded-full transform scale-75 animate-pulse"></div>
              <div className="absolute inset-0 border-2 border-white rounded-full"></div>
              <div className="absolute -top-10 -left-2 glass bg-blue-600 rounded-lg px-3 py-1.5 text-sm whitespace-nowrap shadow-lg text-white border border-white/30">
                Click here to start
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenGraphImage;
