import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-semibold mb-4 text-charcoal">Henry Orellana D.</h3>
            <p className="font-body text-warm-grey italic text-sm leading-relaxed mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-warm-grey hover:text-forest transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-warm-grey hover:text-forest transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-warm-grey hover:text-forest transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-charcoal mb-6">{t('footer.explore')}</h4>
            <ul className="space-y-3 font-body text-sm text-warm-grey">
              <li><Link to="/metodologia" className="hover:text-forest hover:underline transition-all">GÉNESIS i7™</Link></li>
              <li><Link to="/about" className="hover:text-forest hover:underline transition-all">{t('nav.about')}</Link></li>
              <li><Link to="/books" className="hover:text-forest hover:underline transition-all">{t('nav.books')}</Link></li>
              <li><Link to="/blog" className="hover:text-forest hover:underline transition-all">{t('nav.blog')}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-charcoal mb-6">{t('footer.programs')}</h4>
            <ul className="space-y-3 font-body text-sm text-warm-grey">
              <li><Link to="/metodologia" className="hover:text-forest hover:underline transition-all">Padres 3.0</Link></li>
              <li><Link to="/ceo-junior" className="hover:text-forest hover:underline transition-all">CEO Junior</Link></li>
              <li><Link to="/speaking" className="hover:text-forest hover:underline transition-all">{t('nav.speaking')}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-charcoal mb-6">{t('footer.contact')}</h4>
            <p className="font-body text-sm text-warm-grey mb-4">
              {t('footer.contactQuestion')}
            </p>
            <Link to="/contact" className="inline-flex items-center text-forest hover:text-charcoal font-medium font-sans text-sm transition-colors">
              <Mail size={16} className="mr-2" />
              {t('footer.contactCta')}
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-gray-400">
          <p>&copy; {new Date().getFullYear()} Henry Orellana D. {t('footer.rights')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-charcoal transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-charcoal transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
