
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
    small: "w-3 h-3",
    medium: "w-4 h-4", 
    large: "w-5 h-5"
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
        "fixed top-0 left-0 pointer-events-none z-50 rounded-full -translate-x-1/2 -translate-y-1/2",
        sizeClasses[size],
        color,
        animated && "transition-transform duration-100",
        pulseEffect && "animate-pulse-soft",
        visible ? "opacity-100" : "opacity-0",
        className
      )}
    />
  );
};

export default AnimatedCursor;
