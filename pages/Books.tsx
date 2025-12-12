import React from 'react';
import { Reveal } from '../components/Reveal';
import { ShoppingBag, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Books: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full pt-32 pb-20 bg-cream">

      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <Reveal>
          <h1 className="font-display text-5xl md:text-7xl text-charcoal mb-6">{t('books.title')}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-body text-lg text-warm-grey max-w-2xl mx-auto">
            {t('books.subtitle')}
          </p>
        </Reveal>
      </div>

      {/* Main Feature */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="bg-white p-8 md:p-16 shadow-sm flex flex-col md:flex-row gap-16 items-center">
           <Reveal className="w-full md:w-1/3 flex justify-center">
              <div className="w-full max-w-sm overflow-hidden shadow-2xl">
                <img
                  src="/images/books-autor.png"
                  alt="Henry Orellana - Autor"
                  className="w-full h-auto object-cover"
                />
              </div>
           </Reveal>

           <div className="w-full md:w-2/3 space-y-8">
             <Reveal delay={0.2}>
               <h2 className="font-display text-4xl text-charcoal">{t('books.featured.title')}</h2>
             </Reveal>
             <Reveal delay={0.3}>
               <p className="font-body text-lg text-warm-grey leading-relaxed">
                 {t('books.featured.description')}
               </p>
             </Reveal>
             <Reveal delay={0.4}>
               <div className="bg-cream-dark p-6 border-l-2 border-forest italic font-body text-charcoal">
                 {t('books.featured.quote')}
                 <span className="block mt-2 text-xs font-sans font-bold uppercase not-italic text-warm-grey">{t('books.featured.quoteAuthor')}</span>
               </div>
             </Reveal>
             <Reveal delay={0.5} className="flex gap-4 pt-4">
                <button className="bg-forest text-white px-8 py-3 flex items-center gap-2 font-sans text-sm tracking-wider hover:bg-charcoal transition-colors">
                  <ShoppingBag size={16} /> {t('books.featured.buyAmazon')}
                </button>
                <button className="border border-charcoal text-charcoal px-8 py-3 flex items-center gap-2 font-sans text-sm tracking-wider hover:bg-charcoal hover:text-white transition-colors">
                  <BookOpen size={16} /> {t('books.featured.readExcerpt')}
                </button>
             </Reveal>
           </div>
        </div>
      </section>

      {/* Other Works Grid */}
      <section className="max-w-6xl mx-auto px-6">
        <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-warm-grey mb-12 border-b border-gray-200 pb-4">
          {t('books.other.title')}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2].map((book) => (
             <Reveal key={book} delay={0.2} className="group cursor-pointer">
                <div className="w-full aspect-[2/3] bg-gray-200 mb-6 relative overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                   <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <span className="text-xs uppercase tracking-widest mb-1 block">202{book + 2}</span>
                      <h4 className="font-display text-2xl">{t('books.other.bookTitle')} {book}</h4>
                   </div>
                </div>
                <div className="flex justify-between items-center">
                   <span className="font-sans text-sm font-bold text-charcoal">{t('books.other.moreInfo')}</span>
                   <span className="w-8 h-px bg-charcoal group-hover:w-16 transition-all duration-300"></span>
                </div>
             </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};
