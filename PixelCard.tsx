import React from 'react';

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const PixelCard: React.FC<PixelCardProps> = ({ children, className = "", title }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Outer Shadow/Border Effect for Pixel Art Look */}
      <div className="absolute inset-0 bg-gray-800 translate-x-2 translate-y-2" />
      
      <div className="relative border-4 border-white bg-slate-900 p-1">
        <div className="border-2 border-gray-700 p-4 h-full flex flex-col">
          {title && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 px-4 py-1 border-2 border-white text-yellow-400 font-pixel text-xs md:text-sm uppercase tracking-widest whitespace-nowrap z-10">
              {title}
            </div>
          )}
          {children}
        </div>
      </div>
      
      {/* Pixel corners decoration */}
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-slate-900 z-20" />
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-slate-900 z-20" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-slate-900 z-20" />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-slate-900 z-20" />
    </div>
  );
};