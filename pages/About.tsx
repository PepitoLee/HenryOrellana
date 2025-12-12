import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { CheckCircle2, Award, GraduationCap, Heart, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const credenciales = [
    { icon: GraduationCap, text: t('about.credentials.items.degree1') },
    { icon: GraduationCap, text: t('about.credentials.items.degree2') },
    { icon: Award, text: t('about.credentials.items.diploma1') },
    { icon: Award, text: t('about.credentials.items.certification') },
  ];

  const especialidades = [
    t('about.credentials.specialtiesList.enneagram'),
    t('about.credentials.specialtiesList.nlp'),
    t('about.credentials.specialtiesList.coaching'),
    t('about.credentials.specialtiesList.neuroscience'),
    t('about.credentials.specialtiesList.psychology'),
  ];

  const intelligences = [
    { title: t('about.methodology.intelligences.spiritual.title'), desc: t('about.methodology.intelligences.spiritual.desc') },
    { title: t('about.methodology.intelligences.mental.title'), desc: t('about.methodology.intelligences.mental.desc') },
    { title: t('about.methodology.intelligences.emotional.title'), desc: t('about.methodology.intelligences.emotional.desc') },
    { title: t('about.methodology.intelligences.physical.title'), desc: t('about.methodology.intelligences.physical.desc') },
    { title: t('about.methodology.intelligences.social.title'), desc: t('about.methodology.intelligences.social.desc') },
    { title: t('about.methodology.intelligences.financial.title'), desc: t('about.methodology.intelligences.financial.desc') },
    { title: t('about.methodology.intelligences.technological.title'), desc: t('about.methodology.intelligences.technological.desc') },
  ];

  return (
    <div className="w-full pt-32 pb-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <Reveal>
          <span className="font-sans text-forest uppercase tracking-[0.2em] text-xs font-semibold">
            {t('about.header.subtitle')}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-5xl md:text-7xl text-charcoal mt-4 mb-6">
            {t('about.header.title')}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-display text-xl md:text-2xl text-forest italic">
            {t('about.header.role')}
          </p>
        </Reveal>
      </div>

      {/* Image & Intro */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
        <Reveal>
          <div className="relative">
            <img
              src="/images/about-henry.png"
              alt="Henry Orellana D."
              className="w-full h-auto object-cover shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-forest/30"></div>
          </div>
        </Reveal>
        <div className="space-y-6">
           <Reveal delay={0.2}>
             <h2 className="font-display text-3xl text-charcoal flex items-center gap-3">
               <Heart className="text-forest" size={28} />
               {t('about.mission.title')}
             </h2>
           </Reveal>
           <Reveal delay={0.3}>
             <p className="font-body text-lg text-charcoal leading-relaxed">
               <strong className="text-forest">{t('about.mission.description').split(',')[0]},</strong>
               {t('about.mission.description').split(',').slice(1).join(',')}
             </p>
           </Reveal>
           <Reveal delay={0.4}>
             <p className="font-body text-warm-grey leading-relaxed border-l-4 border-forest pl-4 py-2 bg-cream">
               {t('about.mission.story')}
             </p>
           </Reveal>
           <Reveal delay={0.5}>
             <blockquote className="font-display text-2xl italic text-forest">
               {t('about.mission.quote')}
             </blockquote>
           </Reveal>
        </div>
      </section>

      {/* La Solución Integral */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">{t('about.solution.title')}</h2>
            <p className="font-body text-white/80 text-lg">{t('about.solution.subtitle')}</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-burgundy/50 transition-colors">
                <h3 className="font-display text-2xl text-burgundy mb-4">{t('about.solution.padres.title')}</h3>
                <p className="font-body text-white/80 mb-4">
                  {t('about.solution.padres.description')}
                </p>
                <Link to="/metodologia" className="inline-flex items-center text-burgundy font-sans text-sm uppercase tracking-wider hover:text-white transition-colors">
                  {t('about.solution.padres.cta')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-burgundy/50 transition-colors">
                <h3 className="font-display text-2xl text-burgundy mb-4">{t('about.solution.ceoJunior.title')}</h3>
                <p className="font-body text-white/80 mb-4">
                  {t('about.solution.ceoJunior.description')}
                </p>
                <Link to="/ceo-junior" className="inline-flex items-center text-burgundy font-sans text-sm uppercase tracking-wider hover:text-white transition-colors">
                  {t('about.solution.ceoJunior.cta')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.3} className="text-center mt-12">
            <p className="font-body text-white/60">
              {t('about.solution.footer')} <strong className="text-burgundy">GÉNESIS i7™</strong>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Credenciales */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <Reveal>
                <h2 className="font-display text-3xl text-charcoal mb-8">{t('about.credentials.education')}</h2>
              </Reveal>
              <div className="space-y-4">
                {credenciales.map((cred, idx) => (
                  <Reveal key={idx} delay={idx * 0.1}>
                    <div className="flex items-start gap-4 p-4 bg-white rounded-sm shadow-sm">
                      <cred.icon className="text-forest flex-shrink-0 mt-1" size={24} />
                      <p className="font-sans text-charcoal">{cred.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal>
                <h2 className="font-display text-3xl text-charcoal mb-8">{t('about.credentials.specialties')}</h2>
              </Reveal>
              <div className="space-y-3">
                {especialidades.map((esp, idx) => (
                  <Reveal key={idx} delay={idx * 0.1}>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-sm shadow-sm">
                      <CheckCircle2 className="text-forest flex-shrink-0" size={20} />
                      <p className="font-sans text-charcoal">{esp}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <span className="font-sans text-forest uppercase tracking-[0.2em] text-xs font-semibold">
              {t('about.methodology.subtitle')}
            </span>
            <h2 className="font-display text-4xl text-charcoal mt-4 mb-4">
              GÉNESIS <span className="text-forest">i7™</span>
            </h2>
            <p className="font-body text-warm-grey max-w-2xl mx-auto">
              {t('about.methodology.description')}
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {intelligences.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-4 bg-cream text-center rounded-sm hover:shadow-md transition-shadow">
                  <h3 className="font-display text-lg text-charcoal mb-1">{item.title}</h3>
                  <p className="font-sans text-xs text-warm-grey">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4} className="text-center">
            <Link
              to="/metodologia"
              className="inline-flex items-center bg-forest text-white px-8 py-4 font-sans text-sm tracking-widest hover:bg-charcoal transition-colors"
            >
              {t('about.methodology.cta')} <ArrowRight size={16} className="ml-2" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
