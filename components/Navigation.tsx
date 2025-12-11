import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Metodología', path: '/metodologia' },
  { name: 'CEO Junior', path: '/ceo-junior' },
  { name: 'Sobre Mí', path: '/about' },
  { name: 'Libros', path: '/books' },
  { name: 'Conferencias', path: '/speaking' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contacto', path: '/contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-display font-semibold text-xl md:text-2xl tracking-tight text-charcoal hover:opacity-80 transition-opacity">
          Henry Orellana D.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
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
          ))}
          <Link
            to="/metodologia"
            className="bg-forest text-white px-5 py-2 rounded-sm font-sans text-xs tracking-wide hover:bg-opacity-90 transition-all"
          >
            ¡Comienza Hoy!
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-charcoal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '80px' }}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`font-display text-2xl transition-all ${
              location.pathname === item.path
                ? 'text-forest italic'
                : 'text-charcoal hover:text-forest hover:italic'
            }`}
          >
            {item.name}
          </Link>
        ))}
        <Link
          to="/metodologia"
          className="bg-forest text-white px-8 py-3 font-sans text-sm tracking-wide mt-4"
        >
          ¡Comienza Hoy!
        </Link>
      </div>
    </header>
  );
};
