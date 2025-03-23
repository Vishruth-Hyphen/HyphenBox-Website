
import React, { useEffect, useRef } from "react";

interface DemoAnimationProps {
  demoRef: React.RefObject<HTMLDivElement>;
}

const DemoAnimation: React.FC<DemoAnimationProps> = ({ demoRef }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!demoRef.current || !cursorRef.current || !messageRef.current) return;
    
    const animateCursor = () => {
      const paths = [{
        x: 140,
        y: 55,
        delay: 0,
        message: "Click on this sidebar item"
      }, {
        x: 220,
        y: 110,
        delay: 1500,
        message: "Select this option"
      }, {
        x: 300,
        y: 170,
        delay: 3000,
        message: "Adjust this setting"
      }, {
        x: 180,
        y: 190,
        delay: 4500,
        message: "Click Submit"
      }];

      if (messageRef.current) {
        messageRef.current.style.opacity = "0";
        setTimeout(() => {
          if (cursorRef.current && messageRef.current) {
            const lastPosition = paths[paths.length - 1];
            cursorRef.current.style.transform = `translate(${lastPosition.x}px, ${lastPosition.y}px)`;
            messageRef.current.textContent = paths[0].message;
            messageRef.current.style.opacity = "1";
            setTimeout(() => {
              if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${paths[0].x}px, ${paths[0].y}px)`;
              }
            }, 300);
          }
        }, 300);
      }

      paths.forEach((position, index) => {
        setTimeout(() => {
          if (cursorRef.current && messageRef.current) {
            cursorRef.current.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
            cursorRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
            messageRef.current.style.opacity = "0";
            setTimeout(() => {
              if (messageRef.current) {
                messageRef.current.textContent = position.message;
                messageRef.current.style.opacity = "1";
              }
            }, 300);
            setTimeout(() => {
              if (cursorRef.current) {
                cursorRef.current.classList.add("cursor-click");
                setTimeout(() => {
                  if (cursorRef.current) {
                    cursorRef.current.classList.remove("cursor-click");
                  }
                }, 300);
              }
            }, 400);
          }
        }, position.delay);
      });
    };

    animateCursor();
    const interval = setInterval(animateCursor, 6000);
    return () => clearInterval(interval);
  }, [demoRef]);

  return (
    <>
      <div ref={cursorRef} className="absolute top-0 left-0 pointer-events-none z-20 transition-opacity duration-300" style={{
        transform: 'translate(140px, 55px)'
      }}>
        <div className="relative w-full h-full">
          {/* Symmetrical arrow cursor */}
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 animate-pulse-soft"
          >
            <path 
              d="M5 2L20 12L13 14L11 22L5 2Z" 
              fill="white"
              stroke="rgb(37, 99, 235)"
              strokeWidth="2"
              strokeLinejoin="round"
              className="drop-shadow-md"
            />
          </svg>
          
          {/* Tooltip box positioned to the right */}
          <div 
            ref={messageRef} 
            className="absolute top-1/2 left-full ml-2 -translate-y-1/2 glass rounded-md px-3 py-1.5 text-xs whitespace-nowrap transition-opacity duration-300 shadow-sm bg-white/90 backdrop-blur-md border border-blue-100"
          >
            Click on this sidebar item
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoAnimation;
