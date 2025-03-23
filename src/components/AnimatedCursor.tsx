
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCursorProps {
  className?: string;
  size?: "small" | "medium" | "large";
  animated?: boolean;
  pulseEffect?: boolean;
  color?: string;
  showInstructions?: boolean;
  instructionText?: string;
}

const AnimatedCursor: React.FC<AnimatedCursorProps> = ({
  className,
  size = "medium",
  animated = true,
  pulseEffect = false,
  color = "bg-primary",
  showInstructions = true,
  instructionText
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const sizeClasses = {
    small: "w-5 h-5",
    medium: "w-6 h-6", 
    large: "w-7 h-7"
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        if (!visible) setVisible(true);
      }
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [visible]);

  return (
    <div 
      ref={cursorRef}
      className={cn(
        "fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2",
        visible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div className="relative">
        {/* Pointer cursor */}
        <div className={cn(
          sizeClasses[size],
          "relative",
          animated && "transition-transform duration-100"
        )}>
          {/* Outer glow */}
          <div className={cn(
            "absolute inset-0 rounded-full blur-sm opacity-50",
            color
          )}></div>
          
          {/* Inner shape - pointer */}
          <div className={cn(
            "absolute inset-0 rotate-45 transform origin-top-left",
            pulseEffect && "animate-pulse-soft"
          )}>
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path 
                fill={color === "bg-primary" ? "#2563eb" : "currentColor"} 
                d="M7,2l12,11.2l-5.8,0.5l3.3,7.3l-2.2,1l-3.2-7.4L7,18.5V2" 
              />
            </svg>
          </div>
        </div>
        
        {/* Instruction text box - positioned to the right of the cursor */}
        {showInstructions && instructionText && (
          <div className="absolute left-8 top-0 glass rounded px-3 py-1.5 text-xs whitespace-nowrap shadow-sm transition-opacity duration-300 border border-blue-200 bg-blue-50 text-blue-800">
            {instructionText}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedCursor;
