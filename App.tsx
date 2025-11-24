import React, { useState, useEffect } from 'react';
import { USER_PROFILE, SOCIAL_LINKS } from './constants';
import { PixelCard } from './components/PixelCard';
import { RetroButton } from './components/RetroButton';
import { Avatar } from './components/Avatar';
import { StatBar } from './components/StatBar';
import { PasswordScreen } from './components/PasswordScreen';
import { Terminal, BookOpen, Gamepad2, Heart, Box, Swords } from 'lucide-react';
import { initAudio, playLoadSound } from './utils/sound';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Add global listener to initialize audio context on first interaction
    const handleInteraction = () => {
      initAudio();
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  // Effect to trigger load animation once authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const timer = setTimeout(() => {
        setLoaded(true);
        playLoadSound();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'GitHub': return <Terminal size={20} />;
      case 'Twitter': return <div className="font-bold text-lg">X</div>;
      default: return <Gamepad2 size={20} />;
    }
  };

  const getGameIcon = (game: string) => {
    if (game.toLowerCase().includes('minecraft')) return <Box size={16} className="text-green-500" />;
    if (game.toLowerCase().includes('mobile legend')) return <Swords size={16} className="text-yellow-500" />;
    return <Gamepad2 size={16} className="text-blue-500" />;
  };

  if (!isAuthenticated) {
    return <PasswordScreen onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center py-10 px-4 relative overflow-hidden">
      
      {/* Background Grid Animation */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#4f4f4f 1px, transparent 1px), linear-gradient(90deg, #4f4f4f 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>

      {/* Floating decorative particles */}
      <div className="fixed top-10 left-10 w-4 h-4 bg-yellow-400 animate-bounce z-0"></div>
      <div className="fixed bottom-20 right-10 w-6 h-6 bg-pink-500 animate-pulse z-0"></div>
      <div className="fixed top-1/2 left-4 w-2 h-2 bg-cyan-400 z-0"></div>

      <div className={`max-w-2xl w-full z-10 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Main Header / Profile Stats */}
        <header className="mb-10">
          <div className="text-center mb-6">
             <h1 className="font-pixel text-3xl md:text-4xl text-yellow-400 mb-2 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
               PLAYER SELECT
             </h1>
             <p className="text-green-400 text-sm md:text-base animate-pulse">
               &lt; READY PLAYER ONE &gt;
             </p>
          </div>

          <PixelCard title="CHARACTER STATS" className="mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              
              {/* Avatar Column */}
              <div className="flex-shrink-0">
                <Avatar />
                <div className="text-center mt-2">
                  <div className="inline-block bg-black px-2 py-1 border border-gray-600 text-xs text-green-500">
                    ONLINE
                  </div>
                </div>
              </div>

              {/* Info Column */}
              <div className="flex-grow w-full">
                <h2 className="text-2xl font-bold text-white mb-1">{USER_PROFILE.name}</h2>
                <p className="text-blue-300 mb-4 font-pixel text-xs flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 inline-block"></span>
                  {USER_PROFILE.role}
                </p>
                <p className="text-gray-400 mb-6 text-sm border-b-2 border-dashed border-gray-700 pb-2">
                  Guild: {USER_PROFILE.organization}
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-1">
                      <BookOpen size={16} className="text-purple-400" />
                      <span className="text-purple-400 font-bold text-sm">SKILLS / INTERESTS</span>
                    </div>
                    {USER_PROFILE.interests.map((interest, idx) => (
                      <StatBar 
                        key={idx} 
                        label={interest} 
                        value="MAXED" 
                        fillColor={idx === 0 ? "bg-cyan-500" : "bg-orange-500"} 
                        delay={idx * 400} // Stagger animation by 400ms for each item
                      />
                    ))}
                  </div>

                  <div className="pt-2 border-t-2 border-dashed border-gray-700">
                     <div className="flex items-center gap-2 mb-2">
                      <Gamepad2 size={16} className="text-red-400" />
                      <span className="text-red-400 font-bold text-sm">FAVORITE GAMES</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {USER_PROFILE.favoriteGames.map((game, idx) => (
                        <div key={idx} className="group relative">
                          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="relative flex items-center gap-2 bg-slate-800 border-2 border-gray-600 px-3 py-2 group-hover:bg-slate-900 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform">
                             {getGameIcon(game)}
                             <span className="text-xs text-gray-300 font-pixel uppercase">{game}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PixelCard>
        </header>

        {/* Links Section */}
        <main>
          <div className="bg-black/40 p-4 border-2 border-white/10 backdrop-blur-sm mb-4 text-center">
             <h3 className="text-white font-pixel text-sm mb-4">CHOOSE YOUR PATH</h3>
             <div className="space-y-4">
                {SOCIAL_LINKS.map((link) => (
                  <RetroButton 
                    key={link.id}
                    href={link.url}
                    label={link.label}
                    colorClass={link.color}
                    textColorClass={link.textColor}
                    icon={getIcon(link.type)}
                  />
                ))}
             </div>
          </div>
        </main>

        <footer className="mt-12 text-center text-gray-500 text-xs">
          <p className="mb-2">CREDITS: 1 COIN</p>
          <p>© {new Date().getFullYear()} {USER_PROFILE.name} | {USER_PROFILE.organization}</p>
          <div className="flex justify-center items-center gap-2 mt-2">
             <Heart size={12} className="text-red-500 fill-red-500" />
             <span>Built with React & Tailwind</span>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;