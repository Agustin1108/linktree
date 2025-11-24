import React, { useState, useEffect } from 'react';
import { PixelCard } from './PixelCard';
import { LockKeyhole, ArrowRight, Delete } from 'lucide-react';
import { playClickSound, playErrorSound, playSuccessSound } from '../utils/sound';

interface PasswordScreenProps {
  onAuthenticated: () => void;
}

export const PasswordScreen: React.FC<PasswordScreenProps> = ({ onAuthenticated }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const correctPin = '1108';

  const handleNumberClick = (num: string) => {
    playClickSound();
    if (pin.length < 4) {
      setPin(prev => prev + num);
      setError(false);
    }
  };

  const handleClear = () => {
    playClickSound();
    setPin('');
    setError(false);
  };

  const handleDelete = () => {
    playClickSound();
    setPin(prev => prev.slice(0, -1));
    setError(false);
  };

  const handleSubmit = () => {
    if (pin === correctPin) {
      playSuccessSound();
      onAuthenticated();
    } else {
      playErrorSound();
      setError(true);
      setPin('');
      
      // Shake animation effect via simpler logic if needed, 
      // but here we rely on the red text/border state
    }
  };

  // Allow keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)) {
        handleNumberClick(e.key);
      } else if (e.key === 'Backspace') {
        handleDelete();
      } else if (e.key === 'Enter') {
        handleSubmit();
      } else if (e.key === 'Escape') {
        handleClear();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pin]); // Re-bind when pin changes isn't strictly necessary for logic but keeps closures fresh if needed

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-950">
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#4f4f4f 1px, transparent 1px), linear-gradient(90deg, #4f4f4f 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      <div className="z-10 w-full max-w-sm">
        <div className="text-center mb-8 animate-pulse">
           <LockKeyhole className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
           <h1 className="font-pixel text-xl text-yellow-400">SECURITY CHECK</h1>
        </div>

        <PixelCard title="LOGIN REQUIRED" className="w-full">
          <div className="flex flex-col items-center p-2">
            
            {/* Hint Text requested by user */}
            <p className="text-green-400 font-pixel text-[10px] md:text-xs mb-4 text-center border border-green-800 bg-green-900/20 px-3 py-1 rounded">
              HINT: PASSWORD 1108
            </p>

            {/* Display */}
            <div className={`w-full h-16 bg-black border-4 ${error ? 'border-red-500' : 'border-gray-600'} mb-6 flex items-center justify-center relative`}>
              <span className={`font-pixel text-3xl tracking-[0.5em] ${error ? 'text-red-500' : 'text-green-500'}`}>
                {pin.padEnd(4, '•').split('').map((char, i) => (
                  <span key={i} className={i < pin.length ? '' : 'text-gray-800'}>
                     {i < pin.length ? '*' : '•'}
                  </span>
                ))}
              </span>
              {error && (
                <div className="absolute top-0 right-0 px-1 bg-red-600 text-white text-[9px] font-pixel">ERROR</div>
              )}
            </div>

            {/* Keypad */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-[280px]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  onClick={() => handleNumberClick(num.toString())}
                  className="bg-slate-700 border-b-4 border-slate-900 text-white font-pixel text-xl py-4 active:border-b-0 active:translate-y-1 hover:bg-slate-600 transition-all rounded-sm"
                >
                  {num}
                </button>
              ))}
              
              <button
                onClick={handleClear}
                className="bg-red-900/80 border-b-4 border-red-950 text-white font-pixel text-sm py-4 active:border-b-0 active:translate-y-1 hover:bg-red-800 transition-all rounded-sm flex items-center justify-center"
              >
                CLR
              </button>
              
              <button
                onClick={() => handleNumberClick('0')}
                className="bg-slate-700 border-b-4 border-slate-900 text-white font-pixel text-xl py-4 active:border-b-0 active:translate-y-1 hover:bg-slate-600 transition-all rounded-sm"
              >
                0
              </button>
              
              <button
                onClick={handleSubmit}
                className="bg-green-700 border-b-4 border-green-900 text-white font-pixel text-xl py-4 active:border-b-0 active:translate-y-1 hover:bg-green-600 transition-all rounded-sm flex items-center justify-center"
              >
                <ArrowRight size={24} />
              </button>
            </div>

            <div className="mt-6 text-center">
               <p className="text-gray-500 text-xs font-mono">SECURE TERMINAL V.1.0</p>
            </div>
          </div>
        </PixelCard>
      </div>
    </div>
  );
};