
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCursorProps {
  className?: string;
  size?: "small" | "medium" | "large";
  animated?: boolean;
  pulseEffect?: boolean;
  color?: string;
}

const AnimatedCursor: React.FC<AnimatedCursorProps> = ({
  className,
  size = "medium",
  animated = true,
  pulseEffect = false,
  color = "bg-primary"
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-7 h-7", 
    large: "w-8 h-8"
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
        animated && "transition-transform duration-100",
        visible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {/* Improved arrow pointer design */}
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          sizeClasses[size],
          pulseEffect && "animate-pulse-soft"
        )}
      >
        <path 
          d="M4.5 2L19.5 13L13 14.5L10.5 22L4.5 2Z" 
          fill="white"
          stroke={color.startsWith('bg-') ? 'rgb(37, 99, 235)' : color}
          strokeWidth="2"
          strokeLinejoin="round"
          className="drop-shadow-md"
        />
      </svg>
    </div>
  );
};

export default AnimatedCursor;
