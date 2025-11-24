import React from 'react';

export const Avatar: React.FC = () => {
  return (
    <div className="relative w-32 h-32 mx-auto mb-6">
      <div className="absolute inset-0 bg-indigo-900 rotate-3" />
      <div className="absolute inset-0 bg-yellow-400 -rotate-3 border-4 border-black" />
      
      <div className="relative w-full h-full bg-blue-300 border-4 border-white overflow-hidden flex items-center justify-center">
         {/* Simple CSS Pixel Art Face Placeholder since we don't have a real image URL */}
         <div className="w-20 h-20 bg-orange-200 relative pixel-art-head">
            {/* Hair */}
            <div className="absolute top-0 w-full h-6 bg-black"></div>
            <div className="absolute top-2 -left-2 w-4 h-10 bg-black"></div>
            <div className="absolute top-2 -right-2 w-4 h-10 bg-black"></div>
            {/* Eyes */}
            <div className="absolute top-8 left-4 w-4 h-4 bg-black"></div>
            <div className="absolute top-8 right-4 w-4 h-4 bg-black"></div>
            {/* Glasses (Programmer style) */}
             <div className="absolute top-8 left-3 w-6 h-5 border-2 border-black opacity-50"></div>
             <div className="absolute top-8 right-3 w-6 h-5 border-2 border-black opacity-50"></div>
             <div className="absolute top-10 left-9 w-2 h-1 bg-black"></div>
             
            {/* Mouth */}
            <div className="absolute bottom-4 left-8 w-4 h-2 bg-red-500"></div>
         </div>
      </div>
      
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-red-600 border-2 border-white text-white text-[10px] px-2 py-0.5 font-pixel whitespace-nowrap">
        LVL. 18
      </div>
    </div>
  );
};