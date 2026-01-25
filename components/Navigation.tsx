import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Star, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

const getNavItems = (t: (key: string) => string) => [
  { name: t('nav.about'), path: '/about', subtitle: t('nav.about') },
  { name: 'USALATINO PRIME', path: '/usalatino-prime', subtitle: 'Migración VIP', isPrime: true },
  { name: 'STARBIZACADEMY', path: '/ceo-junior', subtitle: 'GÉNESIS i7™', isStarbiz: true },
  { name: t('nav.books'), path: '/books', subtitle: t('nav.books') },
  { name: t('nav.blog'), path: '/blog', subtitle: t('nav.blog') },
  { name: t('nav.contact'), path: '/contact', subtitle: t('nav.contact') },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const navItems = getNavItems(t);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[70] transition-all duration-500 ${
          scrolled && !isOpen ? 'bg-cream/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link
            to="/"
            className="flex flex-col"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-display font-bold text-lg md:text-xl tracking-tight text-charcoal uppercase">
              ORELLANA GROUP
            </span>
            <span className="font-sans text-[9px] md:text-[10px] text-warm-grey tracking-[0.15em] uppercase -mt-0.5">
              by Henry Orellana
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item: any) => {
              if (item.isPrime) {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#ffd700] to-[#ffaa00] text-[#1a3a6e] px-4 py-2 rounded-sm font-sans text-xs tracking-wide font-bold hover:shadow-lg hover:shadow-[#ffd700]/30 transition-all"
                  >
                    <Star size={14} />
                    PRIME
                  </Link>
                );
              }
              if (item.isStarbiz) {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#06b6d4] to-[#0891b2] text-white px-4 py-2 rounded-sm font-sans text-xs tracking-wide font-bold hover:shadow-lg hover:shadow-[#06b6d4]/30 transition-all"
                  >
                    <Rocket size={14} />
                    STARBIZ
                  </Link>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xs font-sans tracking-wide uppercase transition-colors relative group ${
                    location.pathname === item.path ? 'text-forest' : 'text-charcoal hover:text-forest'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-px bg-forest transition-all duration-300 ${
                     location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
            <LanguageSwitcher variant="pill" />
            <Link
              to="/ceo-junior"
              className="bg-forest text-white px-5 py-2 rounded-sm font-sans text-xs tracking-wide hover:bg-charcoal transition-all"
            >
              {t('nav.cta')}
            </Link>
          </nav>

          {/* Mobile Toggle - Elegant Hamburger */}
          <button
            className="lg:hidden relative w-12 h-12 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-4">
              <span
                className={`absolute left-0 h-[1.5px] bg-charcoal rounded-full transition-all duration-400 ease-out ${
                  isOpen
                    ? 'top-1/2 -translate-y-1/2 w-6 rotate-45'
                    : 'top-0 w-6'
                }`}
              />
              <span
                className={`absolute top-1/2 -translate-y-1/2 left-0 h-[1.5px] bg-charcoal rounded-full transition-all duration-300 ${
                  isOpen ? 'w-0 opacity-0' : 'w-4 opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] bg-charcoal rounded-full transition-all duration-400 ease-out ${
                  isOpen
                    ? 'top-1/2 -translate-y-1/2 w-6 -rotate-45'
                    : 'bottom-0 w-5'
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu - Editorial Minimalist */}
      <div
        className={`lg:hidden fixed inset-0 z-[65] transition-all duration-500 ease-out ${
          isOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
      >
        {/* Clean Cream Background */}
        <div
          className={`absolute inset-0 bg-cream transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Subtle Decorative Line */}
        <div
          className={`absolute top-28 left-6 right-6 h-px bg-charcoal/10 transition-all duration-700 ${
            isOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transformOrigin: 'left' }}
        />

        {/* Navigation Content */}
        <nav className="relative h-full flex flex-col justify-start px-8 pt-32 pb-24 overflow-y-auto">
          {/* Nav Items - Clean List */}
          <div className="space-y-2">
            {navItems.map((item: any, index) => {
              const isCurrent = location.pathname === item.path;

              // Special PRIME item styling
              if (item.isPrime) {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center justify-between py-4 border-b border-[#ffd700]/20 transition-all duration-500 bg-gradient-to-r from-[#ffd700]/10 to-transparent -mx-4 px-4 rounded-lg ${
                      isOpen
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: isOpen ? `${index * 60 + 100}ms` : '0ms' }}
                  >
                    <div className="flex items-center gap-4">
                      <Star size={24} className="text-[#ffd700]" />
                      <span className="font-display text-3xl md:text-4xl tracking-tight text-[#1a3a6e] font-bold">
                        PRIME
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-xs text-[#1a3a6e]/70 uppercase tracking-wider">
                        {item.subtitle}
                      </span>
                      <ArrowUpRight size={16} className="text-[#ffd700]" />
                    </div>
                  </Link>
                );
              }

              // Special STARBIZ item styling
              if (item.isStarbiz) {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center justify-between py-4 border-b border-[#06b6d4]/20 transition-all duration-500 bg-gradient-to-r from-[#06b6d4]/10 to-transparent -mx-4 px-4 rounded-lg ${
                      isOpen
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: isOpen ? `${index * 60 + 100}ms` : '0ms' }}
                  >
                    <div className="flex items-center gap-4">
                      <Rocket size={24} className="text-[#06b6d4]" />
                      <span className="font-display text-3xl md:text-4xl tracking-tight text-[#0e7490] font-bold">
                        STARBIZ
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-xs text-[#0e7490]/70 uppercase tracking-wider">
                        {item.subtitle}
                      </span>
                      <ArrowUpRight size={16} className="text-[#06b6d4]" />
                    </div>
                  </Link>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between py-4 border-b border-charcoal/5 transition-all duration-500 ${
                    isOpen
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: isOpen ? `${index * 60 + 100}ms` : '0ms' }}
                >
                  <div className="flex items-baseline gap-4">
                    {/* Number */}
                    <span className="font-mono text-xs text-warm-grey/50 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Name */}
                    <span className={`font-display text-3xl md:text-4xl tracking-tight transition-colors duration-300 ${
                      isCurrent
                        ? 'text-forest'
                        : 'text-charcoal group-hover:text-forest'
                    }`}>
                      {item.name}
                    </span>

                    {/* Current Indicator */}
                    {isCurrent && (
                      <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                    )}
                  </div>

                  {/* Subtitle + Arrow */}
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-sans text-xs text-warm-grey uppercase tracking-wider">
                      {item.subtitle}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-forest transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons + Language Switcher */}
          <div
            className={`mt-12 flex flex-col gap-4 transition-all duration-500 ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: isOpen ? '550ms' : '0ms' }}
          >
            <Link
              to="/ceo-junior"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-3 bg-charcoal text-cream px-8 py-4 font-sans text-sm tracking-widest uppercase hover:bg-forest transition-colors duration-300"
            >
              <span>{t('nav.cta')}</span>
              <ArrowUpRight size={16} />
            </Link>

            {/* Language Switcher Mobile */}
            <div className="flex items-center justify-center">
              <LanguageSwitcher variant="pill" />
            </div>
          </div>

          {/* Footer Info */}
          <div
            className={`absolute bottom-8 left-8 right-8 flex justify-between items-end transition-all duration-500 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: isOpen ? '600ms' : '0ms' }}
          >
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm text-charcoal/80 tracking-tight uppercase">
                ORELLANA GROUP
              </span>
              <span className="font-sans text-[9px] text-warm-grey/60 tracking-wider">
                GÉNESIS i7™
              </span>
            </div>
            <div className="font-mono text-xs text-warm-grey/40">
              © 2025
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
