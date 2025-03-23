
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
      <div ref={cursorRef} className="absolute top-0 left-0 w-6 h-6 pointer-events-none z-20 transition-opacity duration-300" style={{
        transform: 'translate(140px, 55px)'
      }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-primary rounded-full transform scale-75 animate-pulse-soft"></div>
          <div className="absolute inset-0 border-2 border-white rounded-full"></div>
          <div ref={messageRef} className="absolute -top-8 -left-1 glass rounded px-2 py-1 text-xs whitespace-nowrap transition-opacity duration-300 shadow-sm">
            Click on this sidebar item
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoAnimation;
