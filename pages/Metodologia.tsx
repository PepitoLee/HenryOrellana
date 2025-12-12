import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import {
  Sparkles,
  Brain,
  Heart,
  Dumbbell,
  Users,
  DollarSign,
  Cpu,
  Sun,
  ArrowRight,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { ShineButton, FillSlideButton } from '../components/AnimatedButtons';
import { useLanguage } from '../context/LanguageContext';

export const Metodologia: React.FC = () => {
  const { t } = useLanguage();

  const inteligencias = [
    {
      numero: 1,
      icon: Sun,
      title: t('metodologia.intelligences.spiritual.title'),
      frase: t('metodologia.intelligences.spiritual.phrase'),
      resultado: t('metodologia.intelligences.spiritual.result'),
      color: "from-amber-500 to-orange-600",
      descripcion: t('metodologia.intelligences.spiritual.description')
    },
    {
      numero: 2,
      icon: Brain,
      title: t('metodologia.intelligences.mental.title'),
      frase: t('metodologia.intelligences.mental.phrase'),
      resultado: t('metodologia.intelligences.mental.result'),
      color: "from-blue-500 to-indigo-600",
      descripcion: t('metodologia.intelligences.mental.description')
    },
    {
      numero: 3,
      icon: Dumbbell,
      title: t('metodologia.intelligences.physical.title'),
      frase: t('metodologia.intelligences.physical.phrase'),
      resultado: t('metodologia.intelligences.physical.result'),
      color: "from-green-500 to-emerald-600",
      descripcion: t('metodologia.intelligences.physical.description')
    },
    {
      numero: 4,
      icon: Heart,
      title: t('metodologia.intelligences.emotional.title'),
      frase: t('metodologia.intelligences.emotional.phrase'),
      resultado: t('metodologia.intelligences.emotional.result'),
      color: "from-rose-500 to-pink-600",
      descripcion: t('metodologia.intelligences.emotional.description')
    },
    {
      numero: 5,
      icon: Users,
      title: t('metodologia.intelligences.social.title'),
      frase: t('metodologia.intelligences.social.phrase'),
      resultado: t('metodologia.intelligences.social.result'),
      color: "from-purple-500 to-violet-600",
      descripcion: t('metodologia.intelligences.social.description')
    },
    {
      numero: 6,
      icon: DollarSign,
      title: t('metodologia.intelligences.financial.title'),
      frase: t('metodologia.intelligences.financial.phrase'),
      resultado: t('metodologia.intelligences.financial.result'),
      color: "from-emerald-500 to-teal-600",
      descripcion: t('metodologia.intelligences.financial.description')
    },
    {
      numero: 7,
      icon: Cpu,
      title: t('metodologia.intelligences.technological.title'),
      frase: t('metodologia.intelligences.technological.phrase'),
      resultado: t('metodologia.intelligences.technological.result'),
      color: "from-cyan-500 to-blue-600",
      descripcion: t('metodologia.intelligences.technological.description')
    }
  ];

  const herramientas = [
    t('metodologia.tools.list.enneagram'),
    t('metodologia.tools.list.nlp'),
    t('metodologia.tools.list.coaching'),
    t('metodologia.tools.list.neuroscience'),
    t('metodologia.tools.list.psychology')
  ];

  return (
    <div className="w-full pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 text-center mb-24">
        <Reveal>
          <img
            src="/images/genesis-i7-logo.png"
            alt="GÉNESIS i7™ Logo"
            className="w-48 h-48 mx-auto mb-6 object-contain"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <span className="font-sans text-forest uppercase tracking-[0.2em] text-xs font-semibold">
            {t('metodologia.hero.subtitle')}
          </span>
        </Reveal>
        <Reveal delay={0.2}>
          <h1 className="font-display text-5xl md:text-7xl text-charcoal mt-4 mb-6">
            {t('metodologia.hero.title')} <span className="text-forest">{t('metodologia.hero.titleHighlight')}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-display text-2xl md:text-3xl text-charcoal italic mb-8">
            {t('metodologia.hero.tagline')}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="font-body text-lg text-warm-grey max-w-3xl mx-auto leading-relaxed">
            {t('metodologia.hero.description')}
          </p>
        </Reveal>
      </section>

      {/* El Orden Estructural */}
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <Sparkles className="mx-auto mb-6 text-burgundy" size={48} />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl mb-6">{t('metodologia.structure.title')}</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              {t('metodologia.structure.description')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Las 7 Inteligencias Esenciales */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
              {t('metodologia.intelligences.title')} <span className="text-forest">{t('metodologia.intelligences.titleHighlight')}</span>
            </h2>
            <p className="font-sans text-warm-grey max-w-2xl mx-auto">
              {t('metodologia.intelligences.description')}
            </p>
          </Reveal>

          <div className="space-y-6">
            {inteligencias.map((intel, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    {/* Número y Icon */}
                    <div className={`md:col-span-2 bg-gradient-to-br ${intel.color} p-6 flex flex-col items-center justify-center text-white`}>
                      <span className="font-display text-4xl font-bold opacity-50">{intel.numero}</span>
                      <intel.icon size={36} className="mt-2" />
                    </div>

                    {/* Contenido */}
                    <div className="md:col-span-10 p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-grow">
                          <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-2">
                            {intel.title}
                          </h3>
                          <p className="font-body text-lg text-forest italic mb-3">
                            "{intel.frase}"
                          </p>
                          <p className="font-body text-warm-grey text-sm leading-relaxed">
                            {intel.descripcion}
                          </p>
                        </div>
                        <div className="flex-shrink-0 bg-cream px-4 py-3 rounded-sm text-center min-w-[160px]">
                          <span className="font-sans text-xs text-warm-grey uppercase tracking-wider block mb-1">{t('metodologia.intelligences.result')}</span>
                          <span className="font-display text-lg text-charcoal">{intel.resultado}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas del Programa */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="space-y-6">
                <BookOpen className="text-forest" size={48} />
                <h2 className="font-display text-3xl md:text-4xl text-charcoal">
                  {t('metodologia.tools.title')}
                </h2>
                <p className="font-body text-lg text-warm-grey leading-relaxed">
                  {t('metodologia.tools.description')}
                </p>
                <div className="space-y-3 pt-4">
                  {herramientas.map((tool, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="text-forest flex-shrink-0" size={20} />
                      <span className="font-sans text-charcoal">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-cream p-8 rounded-sm">
                <h3 className="font-display text-2xl text-charcoal mb-6">
                  {t('metodologia.tools.challenge.title')}
                </h3>
                <p className="font-body text-warm-grey mb-6 leading-relaxed">
                  {t('metodologia.tools.challenge.description')}
                </p>
                <blockquote className="border-l-4 border-forest pl-4 italic text-charcoal font-display text-xl mb-6">
                  {t('metodologia.tools.challenge.quote')}
                </blockquote>
                <p className="font-sans text-sm text-warm-grey">
                  {t('metodologia.tools.challenge.footer')}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-forest text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <Sparkles className="mx-auto mb-6 opacity-80" size={48} />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              {t('metodologia.cta.title')}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-xl text-white/80 max-w-2xl mx-auto mb-8">
              {t('metodologia.cta.description')}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShineButton
                to="/contact"
                className="bg-white text-charcoal px-8 py-4 font-sans text-sm tracking-widest hover:bg-cream transition-colors"
              >
                {t('metodologia.cta.button1')} <ArrowRight size={16} />
              </ShineButton>
              <FillSlideButton
                to="/ceo-junior"
                direction="center"
                className="border-2 border-white text-white px-8 py-4 font-sans text-sm tracking-widest hover:text-charcoal"
              >
                {t('metodologia.cta.button2')}
              </FillSlideButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
