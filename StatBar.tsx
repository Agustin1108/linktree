import React, { useState, useEffect } from 'react';

interface StatBarProps {
  label: string;
  value: string;
  fillColor?: string;
  delay?: number;
}

export const StatBar: React.FC<StatBarProps> = ({ label, value, fillColor = "bg-green-500", delay = 0 }) => {
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    // Small timeout to ensure the render happens before animation starts
    const timer = setTimeout(() => {
      setWidth('100%');
    }, 100 + delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="flex flex-col mb-3 w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-400 font-bold uppercase">{label}</span>
        <span className="text-sm text-white">{value}</span>
      </div>
      <div className="w-full h-4 bg-gray-800 border-2 border-gray-600 p-0.5 relative">
        {/* Background grid pattern for empty space */}
        <div className="absolute inset-0 z-0 opacity-30 bg-[linear-gradient(90deg,transparent_2px,#000_2px)] bg-[length:4px_100%] pointer-events-none"></div>
        
        <div 
          className={`h-full ${fillColor} transition-all ease-out relative z-10`} 
          style={{ width, transitionDuration: '1500ms' }}
        >
          {/* Shine effect on the edge */}
          <div className="absolute top-0 right-0 w-[2px] h-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
          
          {/* Inner highlight */}
          <div className="absolute top-[1px] left-0 right-[2px] h-[2px] bg-white/30"></div>
        </div>
      </div>
    </div>
  );
};