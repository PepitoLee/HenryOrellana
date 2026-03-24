import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BackToHubProps {
  variant?: 'dark' | 'light';
}

export const BackToHub: React.FC<BackToHubProps> = ({ variant = 'dark' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = variant === 'dark';

  return (
    <Link
      to="/"
      className={`
        fixed top-4 left-4 z-[70] flex items-center gap-2
        px-4 py-2.5 rounded-full
        text-xs font-bold uppercase tracking-wider
        transition-all duration-500 group
        ${isDark
          ? 'bg-black/40 text-white/80 hover:bg-black/60 hover:text-white border border-white/10'
          : 'bg-white/80 text-charcoal/80 hover:bg-white hover:text-charcoal border border-black/10'
        }
        backdrop-blur-md shadow-lg
        ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-4 pointer-events-none'
        }
      `}
    >
      <ArrowLeft
        size={14}
        className="transition-transform duration-300 group-hover:-translate-x-1"
      />
      <span>Orellana Group</span>
    </Link>
  );
};
