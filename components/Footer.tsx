import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-semibold mb-4 text-charcoal">Henry Orellana D.</h3>
            <p className="font-body text-warm-grey italic text-sm leading-relaxed mb-6">
              Transformando familias y empoderando a la próxima generación de líderes con GÉNESIS 17™.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-warm-grey hover:text-forest transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-warm-grey hover:text-forest transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-warm-grey hover:text-forest transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-charcoal mb-6">Explorar</h4>
            <ul className="space-y-3 font-body text-sm text-warm-grey">
              <li><Link to="/metodologia" className="hover:text-forest hover:underline transition-all">GÉNESIS 17™</Link></li>
              <li><Link to="/about" className="hover:text-forest hover:underline transition-all">Sobre Mí</Link></li>
              <li><Link to="/books" className="hover:text-forest hover:underline transition-all">Libros</Link></li>
              <li><Link to="/blog" className="hover:text-forest hover:underline transition-all">Blog</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-charcoal mb-6">Programas</h4>
            <ul className="space-y-3 font-body text-sm text-warm-grey">
              <li><Link to="/metodologia" className="hover:text-forest hover:underline transition-all">Padres 3.0</Link></li>
              <li><Link to="/ceo-junior" className="hover:text-forest hover:underline transition-all">CEO Junior</Link></li>
              <li><Link to="/speaking" className="hover:text-forest hover:underline transition-all">Conferencias</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-charcoal mb-6">Contacto</h4>
            <p className="font-body text-sm text-warm-grey mb-4">
              ¿Interesado en una conferencia o colaboración?
            </p>
            <Link to="/contact" className="inline-flex items-center text-forest hover:text-charcoal font-medium font-sans text-sm transition-colors">
              <Mail size={16} className="mr-2" />
              Escríbenos
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-gray-400">
          <p>&copy; {new Date().getFullYear()} Henry Orellana D. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-charcoal transition-colors">Privacidad</a>
            <a href="#" className="hover:text-charcoal transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};