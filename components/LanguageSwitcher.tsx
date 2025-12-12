import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'default' | 'minimal' | 'pill';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'default',
  className = ''
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'minimal') {
    return (
      <button
        onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
        className={`flex items-center gap-1.5 font-sans text-xs uppercase tracking-wider transition-colors hover:text-forest ${className}`}
        aria-label="Toggle language"
      >
        <Globe size={14} />
        <span>{language === 'es' ? 'EN' : 'ES'}</span>
      </button>
    );
  }

  if (variant === 'pill') {
    return (
      <div className={`inline-flex items-center bg-cream-dark rounded-full p-1 ${className}`}>
        <button
          onClick={() => setLanguage('es')}
          className={`px-3 py-1.5 rounded-full font-sans text-xs uppercase tracking-wider transition-all ${
            language === 'es'
              ? 'bg-charcoal text-cream'
              : 'text-warm-grey hover:text-charcoal'
          }`}
        >
          ES
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 rounded-full font-sans text-xs uppercase tracking-wider transition-all ${
            language === 'en'
              ? 'bg-charcoal text-cream'
              : 'text-warm-grey hover:text-charcoal'
          }`}
        >
          EN
        </button>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`relative inline-flex items-center gap-2 ${className}`}>
      <Globe size={16} className="text-warm-grey" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'es' | 'en')}
        className="appearance-none bg-transparent font-sans text-xs uppercase tracking-wider text-charcoal cursor-pointer focus:outline-none pr-4"
        aria-label="Select language"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
      <svg
        className="absolute right-0 w-3 h-3 text-warm-grey pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
};
