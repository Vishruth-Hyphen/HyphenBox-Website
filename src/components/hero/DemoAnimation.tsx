
import React, { useEffect, useRef } from "react";
import AnimatedCursor from "../AnimatedCursor";

interface DemoAnimationProps {
  demoRef: React.RefObject<HTMLDivElement>;
}

const DemoAnimation: React.FC<DemoAnimationProps> = ({ demoRef }) => {
  const messageRef = useRef<HTMLDivElement>(null);
  const [currentMessage, setCurrentMessage] = React.useState("Click on this sidebar item");
  const [cursorPosition, setCursorPosition] = React.useState({ x: 140, y: 55 });
  const [showClick, setShowClick] = React.useState(false);

  useEffect(() => {
    if (!demoRef.current || !messageRef.current) return;
    
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

      // Reset to first position
      setCursorPosition({ x: paths[0].x, y: paths[0].y });
      setCurrentMessage(paths[0].message);

      // Animate through each path
      paths.forEach((position, index) => {
        setTimeout(() => {
          setCursorPosition({ x: position.x, y: position.y });
          setCurrentMessage(position.message);
          
          // Show click animation
          setTimeout(() => {
            setShowClick(true);
            setTimeout(() => {
              setShowClick(false);
            }, 300);
          }, 400);
        }, position.delay);
      });
    };

    animateCursor();
    const interval = setInterval(animateCursor, 6000);
    return () => clearInterval(interval);
  }, [demoRef]);

  return (
    <div className="absolute" style={{
      transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
      transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
    }}>
      <div className={`${showClick ? 'cursor-click' : ''}`}>
        <AnimatedCursor 
          color="bg-blue-500" 
          size="small" 
          animated={false}
          showInstructions={true}
          instructionText={currentMessage}
          className="!transform-none"
        />
      </div>
    </div>
  );
};

export default DemoAnimation;
