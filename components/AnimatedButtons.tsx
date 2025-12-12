import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// 1. MAGNETIC BUTTON - Follows cursor slightly
export const MagneticButton: React.FC<ButtonProps> = ({ to, children, className = '' }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Link
      ref={buttonRef}
      to={to}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center overflow-hidden transition-transform duration-300 ease-out ${className}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {children}
    </Link>
  );
};

// 2. SHINE BUTTON - Glare sweep effect
export const ShineButton: React.FC<ButtonProps> = ({ to, children, className = '' }) => {
  return (
    <Link
      to={to}
      className={`group relative inline-flex items-center justify-center overflow-hidden ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </Link>
  );
};

// 3. BORDER DRAW BUTTON - Animated border on hover
export const BorderDrawButton: React.FC<ButtonProps> = ({ to, children, className = '' }) => {
  return (
    <Link
      to={to}
      className={`group relative inline-flex items-center justify-center ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Top border */}
      <span className="absolute top-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 ease-out group-hover:w-full" />
      {/* Right border */}
      <span className="absolute top-0 right-0 w-[2px] h-0 bg-current transition-all duration-300 ease-out delay-150 group-hover:h-full" />
      {/* Bottom border */}
      <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-current transition-all duration-300 ease-out delay-300 group-hover:w-full" style={{ transformOrigin: 'right' }} />
      {/* Left border */}
      <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-current transition-all duration-300 ease-out delay-[450ms] group-hover:h-full" style={{ transformOrigin: 'bottom' }} />
    </Link>
  );
};

// 4. FILL SLIDE BUTTON - Background slides in from left/right/bottom
export const FillSlideButton: React.FC<ButtonProps & { direction?: 'left' | 'right' | 'bottom' | 'center' }> = ({
  to,
  children,
  className = '',
  direction = 'left'
}) => {
  const directionClasses = {
    left: '-translate-x-full group-hover:translate-x-0',
    right: 'translate-x-full group-hover:translate-x-0',
    bottom: 'translate-y-full group-hover:translate-y-0',
    center: 'scale-x-0 group-hover:scale-x-100'
  };

  return (
    <Link
      to={to}
      className={`group relative inline-flex items-center justify-center overflow-hidden ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">{children}</span>
      <div className={`absolute inset-0 bg-forest transition-transform duration-500 ease-out ${directionClasses[direction]}`} />
    </Link>
  );
};

// 5. PULSE GLOW BUTTON - Subtle pulsing glow effect
export const PulseGlowButton: React.FC<ButtonProps> = ({ to, children, className = '' }) => {
  return (
    <Link
      to={to}
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 rounded-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 animate-pulse-glow rounded-sm" />
      </div>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(44, 74, 124, 0.4); }
          50% { box-shadow: 0 0 30px rgba(44, 74, 124, 0.7); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </Link>
  );
};

// 6. RIPPLE BUTTON - Click ripple effect
export const RippleButton: React.FC<ButtonProps> = ({ to, children, className = '', onClick }) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600);

    onClick?.();
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`relative inline-flex items-center justify-center overflow-hidden ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      <style>{`
        @keyframes ripple {
          0% { width: 0; height: 0; opacity: 0.5; }
          100% { width: 300px; height: 300px; opacity: 0; }
        }
        .animate-ripple {
          animation: ripple 0.6s ease-out forwards;
        }
      `}</style>
    </Link>
  );
};

// 7. SCALE SHADOW BUTTON - Lifts and adds shadow on hover
export const ScaleShadowButton: React.FC<ButtonProps> = ({ to, children, className = '' }) => {
  return (
    <Link
      to={to}
      className={`relative inline-flex items-center justify-center transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Link>
  );
};

// 8. UNDERLINE REVEAL BUTTON - Elegant underline animation
export const UnderlineRevealButton: React.FC<ButtonProps> = ({ to, children, className = '' }) => {
  return (
    <Link
      to={to}
      className={`group relative inline-flex items-center justify-center ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-current transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
    </Link>
  );
};

// 9. SPLIT TEXT BUTTON - Text splits on hover
export const SplitTextButton: React.FC<ButtonProps & { text: string; icon?: React.ReactNode }> = ({
  to,
  text,
  icon,
  className = ''
}) => {
  return (
    <Link
      to={to}
      className={`group relative inline-flex items-center justify-center overflow-hidden ${className}`}
    >
      <span className="flex items-center gap-2">
        {icon}
        <span className="relative overflow-hidden">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            {text}
          </span>
          <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-burgundy">
            {text}
          </span>
        </span>
      </span>
    </Link>
  );
};

// 10. GRADIENT SHIFT BUTTON - Background gradient moves on hover
export const GradientShiftButton: React.FC<ButtonProps> = ({ to, children, className = '' }) => {
  return (
    <Link
      to={to}
      className={`relative inline-flex items-center justify-center overflow-hidden ${className}`}
      style={{
        backgroundSize: '200% 100%',
        backgroundImage: 'linear-gradient(90deg, #2c4a7c 0%, #1a2744 50%, #2c4a7c 100%)',
      }}
    >
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 hover:scale-105">
        {children}
      </span>
      <style>{`
        .gradient-shift:hover {
          background-position: 100% 0;
        }
      `}</style>
    </Link>
  );
};
