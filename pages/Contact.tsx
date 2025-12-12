import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { Mail, Mic } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEO/SEOHead';

type ContactType = 'general' | 'speaking' | 'media';

export const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ContactType>('general');
  const { t } = useLanguage();

  const getTabContent = () => {
    switch (activeTab) {
      case 'general':
        return {
          title: t('contact.general.title'),
          description: t('contact.general.description')
        };
      case 'speaking':
        return {
          title: t('contact.speakingTab.title'),
          description: t('contact.speakingTab.description')
        };
      case 'media':
        return {
          title: t('contact.media.title'),
          description: t('contact.media.description')
        };
    }
  };

  const content = getTabContent();

  return (
    <>
      <SEOHead
        title={t('seo.contact.title')}
        description={t('seo.contact.description')}
        url="/contact"
      />
      <div className="w-full pt-32 pb-20 bg-cream min-h-screen">

      <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <Reveal>
          <h1 className="font-display text-5xl md:text-6xl text-charcoal mb-4">{t('contact.title')}</h1>
          <p className="font-body text-xl text-warm-grey">
            {t('contact.subtitle')}
          </p>
        </Reveal>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Tabs */}
        <Reveal delay={0.2} className="flex flex-wrap justify-center gap-4 mb-12">
           <button
             onClick={() => setActiveTab('general')}
             className={`px-6 py-3 font-sans text-sm tracking-widest uppercase transition-all ${activeTab === 'general' ? 'bg-forest text-white' : 'bg-white text-charcoal hover:bg-gray-100'}`}
           >
             {t('contact.tabs.general')}
           </button>
           <button
             onClick={() => setActiveTab('speaking')}
             className={`px-6 py-3 font-sans text-sm tracking-widest uppercase transition-all ${activeTab === 'speaking' ? 'bg-forest text-white' : 'bg-white text-charcoal hover:bg-gray-100'}`}
           >
             {t('contact.tabs.speaking')}
           </button>
           <button
             onClick={() => setActiveTab('media')}
             className={`px-6 py-3 font-sans text-sm tracking-widest uppercase transition-all ${activeTab === 'media' ? 'bg-forest text-white' : 'bg-white text-charcoal hover:bg-gray-100'}`}
           >
             {t('contact.tabs.media')}
           </button>
        </Reveal>

        {/* Content Area */}
        <div className="bg-white p-8 md:p-16 shadow-sm">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

              <div className="space-y-8">
                 <h2 className="font-display text-3xl text-charcoal">
                   {content.title}
                 </h2>
                 <p className="font-body text-warm-grey">
                   {content.description}
                 </p>

                 <div className="space-y-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-charcoal">
                       <Mail className="text-forest" size={20} />
                       <span className="font-sans text-sm">contacto@henryorellana.com</span>
                    </div>
                    {activeTab === 'speaking' && (
                       <div className="flex items-center gap-4 text-charcoal">
                          <Mic className="text-forest" size={20} />
                          <span className="font-sans text-sm">booking@henryorellana.com</span>
                       </div>
                    )}
                 </div>
              </div>

              <form className="space-y-6">
                 <div>
                   <label className="block font-sans text-xs font-bold uppercase tracking-wider text-charcoal mb-2">{t('contact.form.name')}</label>
                   <input type="text" className="w-full bg-cream border border-transparent focus:border-forest px-4 py-3 outline-none transition-colors" />
                 </div>
                 <div>
                   <label className="block font-sans text-xs font-bold uppercase tracking-wider text-charcoal mb-2">{t('contact.form.email')}</label>
                   <input type="email" className="w-full bg-cream border border-transparent focus:border-forest px-4 py-3 outline-none transition-colors" />
                 </div>
                 {activeTab === 'speaking' && (
                   <div>
                     <label className="block font-sans text-xs font-bold uppercase tracking-wider text-charcoal mb-2">{t('contact.form.eventDate')}</label>
                     <input type="date" className="w-full bg-cream border border-transparent focus:border-forest px-4 py-3 outline-none transition-colors" />
                   </div>
                 )}
                 <div>
                   <label className="block font-sans text-xs font-bold uppercase tracking-wider text-charcoal mb-2">{t('contact.form.message')}</label>
                   <textarea rows={5} className="w-full bg-cream border border-transparent focus:border-forest px-4 py-3 outline-none transition-colors resize-none"></textarea>
                 </div>
                 <button className="w-full bg-charcoal text-white py-4 font-sans font-bold uppercase tracking-widest hover:bg-forest transition-colors">
                   {t('contact.form.submit')}
                 </button>
              </form>

           </div>
        </div>
      </div>

    </div>
    </>
  );
};
