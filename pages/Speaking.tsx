import React from 'react';
import { Reveal } from '../components/Reveal';
import { Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Speaking: React.FC = () => {
  const { t } = useLanguage();

  const topics = [
    {
      title: t('speaking.topics.padres.title'),
      desc: t('speaking.topics.padres.description'),
      tag: t('speaking.topics.padres.tag')
    },
    {
      title: t('speaking.topics.ceoJunior.title'),
      desc: t('speaking.topics.ceoJunior.description'),
      tag: t('speaking.topics.ceoJunior.tag')
    },
    {
      title: t('speaking.topics.leadership.title'),
      desc: t('speaking.topics.leadership.description'),
      tag: t('speaking.topics.leadership.tag')
    }
  ];

  const events = [
    { date: t('speaking.events.event1.date'), event: t('speaking.events.event1.name'), loc: t('speaking.events.event1.location'), type: t('speaking.events.event1.type') },
    { date: t('speaking.events.event2.date'), event: t('speaking.events.event2.name'), loc: t('speaking.events.event2.location'), type: t('speaking.events.event2.type') },
    { date: t('speaking.events.event3.date'), event: t('speaking.events.event3.name'), loc: t('speaking.events.event3.location'), type: t('speaking.events.event3.type') },
  ];

  return (
    <div className="w-full pt-32 pb-20">

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h1 className="font-display text-6xl md:text-7xl text-charcoal mb-6">
              {t('speaking.hero.title')} <br/> <span className="italic text-forest">{t('speaking.hero.titleHighlight')}</span>
            </h1>
            <p className="font-body text-xl text-warm-grey max-w-lg mb-8">
              {t('speaking.hero.description')}
            </p>
            <button className="bg-charcoal text-white px-8 py-3 font-sans uppercase tracking-widest text-xs hover:bg-forest transition-colors">
              {t('speaking.hero.cta')}
            </button>
          </Reveal>
          <Reveal delay={0.2} className="relative h-[400px] w-full overflow-hidden shadow-xl">
             <img
               src="/images/speaking-hero.png"
               alt="Henry Orellana en Conferencia"
               className="w-full h-full object-cover"
             />
          </Reveal>
        </div>
      </div>

      {/* Topics */}
      <section className="bg-cream-dark py-24">
        <div className="max-w-5xl mx-auto px-6">
           <Reveal className="mb-12">
             <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-warm-grey mb-2">{t('speaking.topics.title')}</h2>
             <div className="h-px w-20 bg-forest"></div>
           </Reveal>

           <div className="space-y-8">
             {topics.map((topic, i) => (
               <Reveal key={i} delay={i * 0.1} width="100%">
                 <div className="group bg-white p-8 md:p-12 hover:shadow-xl transition-all duration-500 border-l-4 border-transparent hover:border-forest cursor-default">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                      <h3 className="font-display text-3xl text-charcoal">{topic.title}</h3>
                      <span className="font-sans text-xs font-bold uppercase text-forest tracking-wider border border-forest/20 px-3 py-1 rounded-full">{topic.tag}</span>
                    </div>
                    <p className="font-body text-warm-grey text-lg max-w-3xl">{topic.desc}</p>
                 </div>
               </Reveal>
             ))}
           </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <Reveal className="text-center mb-16 mx-auto">
          <h2 className="font-display text-4xl text-charcoal">{t('speaking.events.title')}</h2>
        </Reveal>

        <div className="space-y-6">
          {events.map((evt, i) => (
            <Reveal key={i} delay={i * 0.1} width="100%">
              <div className="flex flex-col md:flex-row items-center border-b border-gray-200 py-6 hover:bg-gray-50 transition-colors px-4 group">
                 <div className="w-full md:w-32 font-display text-2xl text-forest font-bold mb-2 md:mb-0">{evt.date}</div>
                 <div className="flex-1 text-center md:text-left">
                   <h4 className="font-sans text-lg font-semibold text-charcoal group-hover:text-forest transition-colors">{evt.event}</h4>
                   <div className="flex items-center justify-center md:justify-start gap-4 mt-1 text-sm text-warm-grey">
                     <span className="flex items-center gap-1"><MapPin size={14}/> {evt.loc}</span>
                     <span className="flex items-center gap-1"><Calendar size={14}/> {evt.type}</span>
                   </div>
                 </div>
                 <button className="mt-4 md:mt-0 text-xs font-sans font-bold uppercase tracking-widest border-b border-charcoal pb-1 hover:text-forest hover:border-forest transition-all">
                   {t('speaking.events.details')}
                 </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};
