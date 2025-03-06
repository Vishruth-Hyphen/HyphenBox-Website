
import React, { useRef } from "react";
import DemoAnimation from "./DemoAnimation";

const DemoInterface: React.FC = () => {
  const demoRef = useRef<HTMLDivElement>(null);

  return (
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
        <DemoAnimation demoRef={demoRef} />
      </div>
      
      {/* Floating elements */}
      <div className="absolute -top-5 -right-5 w-20 h-20 bg-yellow-200/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-blue-200/20 rounded-full blur-xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
    </div>
  );
};

export default DemoInterface;
