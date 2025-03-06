
import React from "react";

const TrustedCompanies: React.FC = () => {
  return (
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
  );
};

export default TrustedCompanies;
