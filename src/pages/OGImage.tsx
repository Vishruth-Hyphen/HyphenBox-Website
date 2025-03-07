
import React, { useEffect } from "react";
import OpenGraphImage from "@/components/OpenGraphImage";

const OGImage: React.FC = () => {
  // This helps with styling the page specifically for OG image capture
  useEffect(() => {
    // Remove scrollbars and set background color
    document.body.style.overflow = "hidden";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.background = "#0055B3";
    
    // Clean up
    return () => {
      document.body.style.overflow = "";
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.body.style.background = "";
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <OpenGraphImage />
    </div>
  );
};

export default OGImage;
