import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import {
  Rocket,
  Lightbulb,
  Target,
  Users,
  Cpu,
  DollarSign,
  Brain,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Heart,
  Dumbbell,
  Sun,
  BookOpen,
  Star
} from 'lucide-react';
import { RippleButton, MagneticButton, ShineButton, FillSlideButton } from '../components/AnimatedButtons';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEO/SEOHead';
import { OptimizedImage } from '../components/OptimizedImage';

export const CEOJunior: React.FC = () => {
  const { t } = useLanguage();

  const pilares = [
    {
      icon: DollarSign,
      title: t('ceoJunior.pillars.financial.title'),
      subtitle: t('ceoJunior.pillars.financial.subtitle'),
      description: t('ceoJunior.pillars.financial.description'),
      color: "from-green-600 to-green-800"
    },
    {
      icon: Cpu,
      title: t('ceoJunior.pillars.technological.title'),
      subtitle: t('ceoJunior.pillars.technological.subtitle'),
      description: t('ceoJunior.pillars.technological.description'),
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Brain,
      title: t('ceoJunior.pillars.mental.title'),
      subtitle: t('ceoJunior.pillars.mental.subtitle'),
      description: t('ceoJunior.pillars.mental.description'),
      color: "from-purple-600 to-purple-800"
    }
  ];

  const competencias = [
    t('ceoJunior.focus.skills.digital'),
    t('ceoJunior.focus.skills.innovative'),
    t('ceoJunior.focus.skills.ai'),
    t('ceoJunior.focus.skills.entrepreneurship'),
    t('ceoJunior.focus.skills.leadership'),
    t('ceoJunior.focus.skills.vision')
  ];

  // GÉNESIS i7™ - Las 7 Inteligencias
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
    <>
      <SEOHead
        title={t('seo.ceoJunior.title')}
        description={t('seo.ceoJunior.description')}
        url="/ceo-junior"
      />
      <div className="w-full pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Reveal>
              <span className="font-sans text-forest uppercase tracking-[0.2em] text-xs font-semibold">
                {t('ceoJunior.hero.subtitle')}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-5xl md:text-6xl text-charcoal leading-tight">
                {t('ceoJunior.hero.title')} <span className="italic text-forest">{t('ceoJunior.hero.titleHighlight')}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-xl text-warm-grey leading-relaxed">
                {t('ceoJunior.hero.description')}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-body text-lg text-warm-grey leading-relaxed border-l-4 border-forest pl-6">
                {t('ceoJunior.hero.story')}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <RippleButton
                  to="/contact"
                  className="bg-forest text-white px-8 py-4 font-sans text-sm tracking-widest hover:bg-charcoal transition-colors text-center"
                >
                  <Rocket size={18} />
                  {t('ceoJunior.hero.cta1')}
                </RippleButton>
                <MagneticButton
                  to="/metodologia"
                  className="border-2 border-charcoal text-charcoal px-8 py-4 font-sans text-sm tracking-widest hover:bg-charcoal hover:text-white transition-colors text-center"
                >
                  {t('ceoJunior.hero.cta2')}
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="relative">
            <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
              <OptimizedImage
                src="/images/ceo-junior-hero.png"
                alt="CEO Junior"
                className="w-full h-full"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-forest/30"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-forest/30"></div>
          </Reveal>
        </div>
      </section>

      {/* Enfoque Section */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <Lightbulb className="mx-auto mb-6 text-burgundy" size={48} />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl mb-8">{t('ceoJunior.focus.title')}</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              {t('ceoJunior.focus.description')}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
              {competencias.map((comp, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-sm">
                  <CheckCircle2 className="text-burgundy flex-shrink-0" size={20} />
                  <span className="font-sans text-sm text-left">{comp}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pilares de GÉNESIS i7™ Aplicados */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="font-sans text-forest uppercase tracking-[0.2em] text-xs font-semibold">
              {t('ceoJunior.pillars.subtitle')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-4 mb-4">
              {t('ceoJunior.pillars.title')}
            </h2>
            <p className="font-sans text-warm-grey max-w-2xl mx-auto">
              {t('ceoJunior.pillars.description')}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pilares.map((pilar, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${pilar.color} flex items-center justify-center mb-6`}>
                    <pilar.icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-display text-2xl text-charcoal mb-2">{pilar.title}</h3>
                  <p className="font-sans text-forest text-sm uppercase tracking-wider mb-4">{pilar.subtitle}</p>
                  <p className="font-body text-warm-grey text-sm leading-relaxed flex-grow">{pilar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GÉNESIS i7™ - Nuestra Metodología */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <OptimizedImage
              src="/images/genesis-i7-logo.png"
              alt="GÉNESIS i7™ Logo"
              className="w-40 h-40 mx-auto mb-6"
              objectFit="contain"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="font-sans text-burgundy uppercase tracking-[0.2em] text-xs font-semibold">
              {t('metodologia.hero.subtitle')}
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
              {t('metodologia.hero.title')} <span className="text-burgundy">{t('metodologia.hero.titleHighlight')}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="font-body text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              {t('metodologia.hero.description')}
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 max-w-2xl mx-auto">
              <Sparkles className="mx-auto mb-4 text-burgundy" size={32} />
              <p className="font-body text-lg text-white/90 italic">
                {t('metodologia.structure.description')}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Las 7 Inteligencias Esenciales */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <Star className="mx-auto mb-4 text-forest" size={40} />
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
                <div className="bg-cream rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    {/* Número y Icon */}
                    <div className={`md:col-span-2 bg-gradient-to-br ${intel.color} p-6 flex flex-col items-center justify-center text-white`}>
                      <span className="font-display text-4xl font-bold opacity-50">{intel.numero}</span>
                      <intel.icon size={36} className="mt-2" />
                    </div>

                    {/* Contenido */}
                    <div className="md:col-span-10 p-6 md:p-8 bg-white">
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
      <section className="py-24 bg-cream-dark">
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
              <div className="bg-white p-8 rounded-sm shadow-lg">
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

      {/* Visión */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="space-y-6">
                <Target className="text-forest" size={48} />
                <h2 className="font-display text-3xl md:text-4xl text-charcoal">
                  {t('ceoJunior.vision.title')}
                </h2>
                <p className="font-body text-lg text-warm-grey leading-relaxed">
                  {t('ceoJunior.vision.description')}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-cream p-8 rounded-sm">
                <blockquote className="font-display text-2xl italic text-charcoal leading-relaxed">
                  {t('ceoJunior.vision.quote')}
                  <footer className="text-forest text-base mt-4 not-italic font-sans">— Henry Orellana D.</footer>
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Relación con Padres 3.0 */}
      <section className="py-24 bg-forest text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <Users className="mx-auto mb-6 opacity-80" size={48} />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl mb-6">{t('ceoJunior.solution.title')}</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
              {t('ceoJunior.solution.description')}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <ShineButton
                to="/metodologia"
                className="bg-white text-charcoal px-8 py-4 font-sans text-sm tracking-widest hover:bg-cream transition-colors"
              >
                {t('ceoJunior.solution.cta1')} <ArrowRight size={16} />
              </ShineButton>
              <RippleButton
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 font-sans text-sm tracking-widest hover:bg-white hover:text-charcoal transition-colors"
              >
                {t('ceoJunior.solution.cta2')}
              </RippleButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
    </>
  );
};
