
import React from "react";

const OpenGraphImage: React.FC = () => {
  return (
    <div className="w-[1200px] h-[630px] bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
      
      {/* Main content */}
      <div className="z-10 flex flex-col items-center gap-8">
        {/* Logo and name */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-white text-3xl font-bold">H</span>
          </div>
          <h1 className="text-4xl font-bold">HyphenBox</h1>
        </div>
        
        {/* Tagline */}
        <h2 className="text-5xl font-bold text-center leading-tight max-w-3xl mb-4">
          The Second Cursor That <span className="text-primary">Guides Your Users</span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl text-muted-foreground text-center max-w-2xl">
          Autonomous navigation assistance that indexes all user flows and creates interactive guides
        </p>
        
        {/* Visual element - simplified demo interface */}
        <div className="mt-12 glass rounded-lg p-6 max-w-2xl w-full relative">
          <div className="grid grid-cols-5 gap-4">
            {/* Sidebar */}
            <div className="col-span-1 bg-white/80 rounded shadow-sm p-2 h-32">
              <div className="w-full h-4 bg-primary/10 rounded mb-3"></div>
              <div className="w-3/4 h-3 bg-gray-200 rounded mb-4"></div>
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`w-full h-6 ${i === 2 ? 'bg-primary/20' : 'bg-gray-100'} rounded mb-2`}></div>
              ))}
            </div>
            
            {/* Main content */}
            <div className="col-span-4 bg-white/80 rounded shadow-sm p-3 h-32">
              <div className="w-full h-6 bg-gray-200 rounded mb-4"></div>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-16 bg-gray-100 rounded"></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Cursor element */}
          <div className="absolute top-1/4 right-1/3 w-6 h-6 pointer-events-none z-20">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-primary rounded-full transform scale-75"></div>
              <div className="absolute inset-0 border-2 border-white rounded-full"></div>
              <div className="absolute -top-8 -left-1 glass rounded px-2 py-1 text-xs whitespace-nowrap shadow-sm">
                Click this option
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenGraphImage;
