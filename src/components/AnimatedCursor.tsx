
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCursorProps {
  className?: string;
  size?: "small" | "medium" | "large";
  animated?: boolean;
  pulseEffect?: boolean;
  color?: string;
  tooltipPosition?: "right" | "top";
}

const AnimatedCursor: React.FC<AnimatedCursorProps> = ({
  className,
  size = "medium",
  animated = true,
  pulseEffect = false,
  color = "bg-primary",
  tooltipPosition = "right"
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
        sizeClasses[size],
        visible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {/* Arrow cursor shape */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "w-full h-full",
          animated && "transition-transform duration-100",
          pulseEffect && "animate-pulse-soft"
        )}
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-primary"
        />
        <path
          d="M12 2L22 12L12 22V2Z"
          fill="currentColor"
          className="text-primary"
        />
      </svg>
    </div>
  );
};

export default AnimatedCursor;
