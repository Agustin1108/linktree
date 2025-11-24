import React from 'react';
import { playHoverSound, playClickSound } from '../utils/sound';

interface RetroButtonProps {
  href: string;
  label: string;
  colorClass: string;
  textColorClass: string;
  icon?: React.ReactNode;
}

export const RetroButton: React.FC<RetroButtonProps> = ({ href, label, colorClass, textColorClass, icon }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block relative mb-6 last:mb-0 w-full max-w-md mx-auto transition-transform duration-200 hover:scale-[1.02]"
      onMouseEnter={() => playHoverSound()}
      onClick={() => playClickSound()}
    >
      {/* Button Shadow (expands on hover) */}
      <div className="absolute inset-0 bg-gray-900 translate-y-2 translate-x-2 rounded-none transition-transform duration-200 group-hover:translate-y-3 group-hover:translate-x-3" />
      
      {/* Button Face (lifts on hover, presses on click) */}
      <div className={`relative flex items-center justify-center py-4 px-6 border-4 border-white ${colorClass} ${textColorClass} transition-transform duration-200 group-active:translate-y-2 group-active:translate-x-2 group-hover:-translate-y-1 group-hover:-translate-x-1`}>
        {icon && <span className="absolute left-4">{icon}</span>}
        <span className="font-pixel text-xs md:text-sm uppercase tracking-wider">{label}</span>
        
        {/* Shine effect */}
        <div className="absolute top-1 left-1 w-full h-[2px] bg-white opacity-20" />
        <div className="absolute top-1 left-1 w-[2px] h-full bg-white opacity-20" />
      </div>
    </a>
  );
};