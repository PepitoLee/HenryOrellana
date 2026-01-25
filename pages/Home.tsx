import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Brain, Target, Users, Sparkles, CheckCircle2, HelpCircle, ChevronDown, Star } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { ShineButton, RippleButton, FillSlideButton, ScaleShadowButton, BorderDrawButton, MagneticButton } from '../components/AnimatedButtons';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEO/SEOHead';
import { OptimizedImage } from '../components/OptimizedImage';

const featuredLogos = ["Forbes", "TEDx", "HBR", "Entrepreneur", "Medium"];

export const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const { t } = useLanguage();

  const logrosRetoTranslated = [
    { icon: Heart, text: t('home.padres.logro1') },
    { icon: Shield, text: t('home.padres.logro2') },
    { icon: Brain, text: t('home.padres.logro3') },
    { icon: Target, text: t('home.padres.logro4') },
  ];

  const faqItemsTranslated = [
    { question: t('home.faq.q1.question'), answer: t('home.faq.q1.answer') },
    { question: t('home.faq.q2.question'), answer: t('home.faq.q2.answer') },
    { question: t('home.faq.q3.question'), answer: t('home.faq.q3.answer') },
    { question: t('home.faq.q4.question'), answer: t('home.faq.q4.answer') },
    { question: t('home.faq.q5.question'), answer: t('home.faq.q5.answer') },
    { question: t('home.faq.q6.question'), answer: t('home.faq.q6.answer') },
    { question: t('home.faq.q7.question'), answer: t('home.faq.q7.answer') },
    { question: t('home.faq.q8.question'), answer: t('home.faq.q8.answer') },
  ];

  const articlesTranslated = [
    { title: t('home.articles.article1.title'), category: t('home.articles.article1.category'), image: "/images/blog-crisis-familiar.png" },
    { title: t('home.articles.article2.title'), category: t('home.articles.article2.category'), image: "/images/blog-inteligencia-espiritual.png" },
    { title: t('home.articles.article3.title'), category: t('home.articles.article3.category'), image: "/images/blog-ceo-junior.png" }
  ];

  return (
    <>
      <SEOHead
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        url="/"
      />
      <div className="w-full overflow-hidden">

      {/* Hero Section - ORELLANA GROUP Ecosystem */}
      <section className="relative min-h-screen bg-cream overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2744' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        {/* Mobile Layout (default) */}
        <div className="lg:hidden relative min-h-screen flex flex-col pt-24">
          {/* Mobile Image */}
          <div className="relative h-[40vh] w-full overflow-hidden">
            <img
              src="/images/hero-principal.png"
              alt="Henry Orellana - Fundador ORELLANA GROUP"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-transparent to-cream" />

            {/* Floating Badge */}
            <div className="absolute bottom-4 right-4">
              <div className="bg-charcoal/90 backdrop-blur-sm px-4 py-2 shadow-lg">
                <span className="font-sans text-[10px] text-cream/80 uppercase tracking-[0.15em] block">Fundador & CEO</span>
              </div>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="relative flex-1 px-6 py-8 -mt-8 z-10">
            <Reveal delay={0.1}>
              <div className="text-center mb-6">
                <h1 className="font-display text-3xl font-bold tracking-tight text-charcoal uppercase">
                  ORELLANA GROUP
                </h1>
                <div className="w-20 h-0.5 bg-forest mx-auto my-3" />
                <p className="font-display text-lg text-forest italic">
                  {t('home.group.tagline')}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-body text-base text-warm-grey leading-relaxed text-center mb-8">
                {t('home.group.description')}
              </p>
            </Reveal>

            {/* Brand Cards - Mobile */}
            <Reveal delay={0.3}>
              <div className="space-y-4 mb-8">
                {/* Padres 3.0 Card */}
                <Link to="/metodologia" className="block group">
                  <div className="bg-[#2d5a3d] p-5 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">👨‍👩‍👧‍👦</span>
                      <div className="flex-1">
                        <h3 className="font-display text-lg text-white font-semibold">PADRES 3.0</h3>
                        <p className="text-white/80 text-sm">{t('home.group.padres.tagline')}</p>
                      </div>
                      <ArrowRight size={20} className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>

                {/* StarbizAcademy Card */}
                <Link to="/ceo-junior" className="block group">
                  <div className="bg-[#1e40af] p-5 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">🚀</span>
                      <div className="flex-1">
                        <h3 className="font-display text-lg text-white font-semibold">STARBIZACADEMY</h3>
                        <p className="text-white/80 text-sm">{t('home.group.ceoJunior.tagline')}</p>
                      </div>
                      <ArrowRight size={20} className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>

                {/* USALATINO PRIME Card */}
                <Link to="/usalatino-prime" className="block group">
                  <div className="bg-gradient-to-r from-[#1a3a6e] to-[#0d1b2a] p-5 shadow-lg hover:shadow-xl transition-all border border-[#ffd700]/30">
                    <div className="flex items-center gap-4">
                      <Star size={28} className="text-[#ffd700]" />
                      <div className="flex-1">
                        <h3 className="font-display text-lg text-white font-semibold">USALATINO PRIME</h3>
                        <p className="text-white/80 text-sm">{t('home.group.usalatino.tagline')}</p>
                      </div>
                      <ArrowRight size={20} className="text-[#ffd700]/60 group-hover:text-[#ffd700] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </div>
            </Reveal>

            {/* Metodología Base */}
            <Reveal delay={0.4}>
              <div className="text-center border-t border-charcoal/10 pt-6">
                <p className="text-[10px] text-warm-grey uppercase tracking-[0.2em] mb-2">
                  {t('home.group.methodologyBase')}
                </p>
                <Link to="/metodologia" className="inline-flex items-center gap-2 text-forest font-display text-lg hover:text-charcoal transition-colors">
                  <Sparkles size={18} />
                  GÉNESIS i7™
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex relative min-h-screen items-center pt-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 items-center w-full">
            {/* Text Content */}
            <div className="col-span-7 space-y-6 z-10">
              <Reveal delay={0.1}>
                <div className="inline-flex items-center gap-2 bg-forest/10 px-4 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                  <span className="font-sans text-xs text-forest uppercase tracking-[0.2em] font-semibold">
                    {t('home.group.subtitle')}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <h1 className="font-display text-5xl xl:text-6xl font-bold tracking-tight text-charcoal uppercase">
                  ORELLANA GROUP
                </h1>
                <div className="w-24 h-1 bg-forest mt-4" />
              </Reveal>

              <Reveal delay={0.3}>
                <p className="font-display text-2xl xl:text-3xl text-forest italic">
                  {t('home.group.tagline')}
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="font-body text-lg text-warm-grey max-w-xl leading-relaxed">
                  {t('home.group.description')}
                </p>
              </Reveal>

              {/* Brand Cards - Desktop Grid */}
              <Reveal delay={0.5}>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {/* Padres 3.0 */}
                  <Link to="/metodologia" className="group">
                    <div className="bg-[#2d5a3d] p-5 h-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                      <span className="text-3xl block mb-3">👨‍👩‍👧‍👦</span>
                      <h3 className="font-display text-base text-white font-bold mb-1">PADRES 3.0</h3>
                      <p className="text-white/70 text-xs mb-3">{t('home.group.padres.tagline')}</p>
                      <p className="text-white/50 text-[10px] uppercase tracking-wider">{t('home.group.padres.for')}</p>
                    </div>
                  </Link>

                  {/* StarbizAcademy */}
                  <Link to="/ceo-junior" className="group">
                    <div className="bg-[#1e40af] p-5 h-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                      <span className="text-3xl block mb-3">🚀</span>
                      <h3 className="font-display text-base text-white font-bold mb-1">STARBIZACADEMY</h3>
                      <p className="text-white/70 text-xs mb-3">{t('home.group.ceoJunior.tagline')}</p>
                      <p className="text-white/50 text-[10px] uppercase tracking-wider">{t('home.group.ceoJunior.for')}</p>
                    </div>
                  </Link>

                  {/* USALATINO PRIME */}
                  <Link to="/usalatino-prime" className="group">
                    <div className="bg-gradient-to-br from-[#1a3a6e] to-[#0d1b2a] p-5 h-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-[#ffd700]/30">
                      <Star size={28} className="text-[#ffd700] mb-3" />
                      <h3 className="font-display text-base text-white font-bold mb-1">USALATINO PRIME</h3>
                      <p className="text-white/70 text-xs mb-3">{t('home.group.usalatino.tagline')}</p>
                      <p className="text-[#ffd700]/60 text-[10px] uppercase tracking-wider">{t('home.group.usalatino.for')}</p>
                    </div>
                  </Link>
                </div>
              </Reveal>

              {/* Metodología Base */}
              <Reveal delay={0.6}>
                <div className="flex items-center gap-4 pt-4 border-t border-charcoal/10">
                  <p className="font-sans text-sm text-warm-grey">
                    {t('home.group.methodologyBase')}:
                  </p>
                  <Link to="/metodologia" className="inline-flex items-center gap-2 text-charcoal font-display text-lg hover:text-forest transition-colors group">
                    <Sparkles size={18} className="text-forest" />
                    GÉNESIS i7™
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Image */}
            <div className="col-span-5 relative">
              <Reveal delay={0.3} className="relative">
                <div className="relative aspect-[3/4] w-full max-w-md ml-auto">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-full h-full border-2 border-forest/20" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-burgundy/10" />

                  {/* Image */}
                  <div className="relative w-full h-full overflow-hidden shadow-2xl">
                    <img
                      src="/images/hero-principal.png"
                      alt="Henry Orellana - Fundador ORELLANA GROUP"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>

                  {/* Name Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-charcoal text-cream px-6 py-4 shadow-xl">
                    <span className="font-display text-lg">Henry Orellana D.</span>
                    <span className="block font-sans text-[10px] text-cream/60 tracking-wider mt-1">FUNDADOR & CEO</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Desktop Only */}
        <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2">
          <Reveal delay={0.8}>
            <div className="flex flex-col items-center gap-2 text-warm-grey/50">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase">{t('home.hero.scroll')}</span>
              <div className="w-px h-8 bg-gradient-to-b from-warm-grey/50 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-12 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center font-sans text-xs text-warm-grey uppercase tracking-widest mb-8">
            {t('home.featured.title')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
             {featuredLogos.map(logo => (
               <span key={logo} className="font-display text-2xl md:text-3xl font-bold text-gray-400">{logo}</span>
             ))}
          </div>
        </div>
      </section>

      {/* ¿Por qué Orellana Group? - Los 3 desafíos */}
      <section className="py-24 px-6 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <span className="font-sans text-burgundy uppercase tracking-[0.2em] text-xs font-semibold">
                {t('home.whyGroup.subtitle')}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl mt-4 mb-4">
                {t('home.whyGroup.title')} <span className="italic text-emerald-400">{t('home.whyGroup.titleHighlight')}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-xl text-white/70 max-w-2xl mx-auto">
                {t('home.whyGroup.description')}
              </p>
            </Reveal>
          </div>

          {/* Los 3 Desafíos → Soluciones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Desafío 1: Desconexión Familiar */}
            <Reveal delay={0.3}>
              <div className="group">
                <div className="bg-white/5 border border-white/10 p-8 h-full hover:bg-white/10 hover:border-emerald-400/50 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🔴</span>
                    <h3 className="font-display text-xl text-white">{t('home.whyGroup.challenge1.title')}</h3>
                  </div>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {t('home.whyGroup.challenge1.description')}
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block mb-2">{t('home.whyGroup.solution')}</span>
                    <Link to="/metodologia" className="inline-flex items-center gap-2 text-emerald-400 font-semibold group-hover:text-emerald-300 transition-colors">
                      <span className="text-lg">👨‍👩‍👧‍👦</span>
                      PADRES 3.0
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Desafío 2: Jóvenes sin propósito */}
            <Reveal delay={0.4}>
              <div className="group">
                <div className="bg-white/5 border border-white/10 p-8 h-full hover:bg-white/10 hover:border-blue-400/50 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🔴</span>
                    <h3 className="font-display text-xl text-white">{t('home.whyGroup.challenge2.title')}</h3>
                  </div>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {t('home.whyGroup.challenge2.description')}
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block mb-2">{t('home.whyGroup.solution')}</span>
                    <Link to="/ceo-junior" className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                      <span className="text-lg">🚀</span>
                      STARBIZACADEMY
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Desafío 3: Sueño migratorio incierto */}
            <Reveal delay={0.5}>
              <div className="group">
                <div className="bg-white/5 border border-white/10 p-8 h-full hover:bg-white/10 hover:border-[#ffd700]/50 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🔴</span>
                    <h3 className="font-display text-xl text-white">{t('home.whyGroup.challenge3.title')}</h3>
                  </div>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {t('home.whyGroup.challenge3.description')}
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block mb-2">{t('home.whyGroup.solution')}</span>
                    <Link to="/usalatino-prime" className="inline-flex items-center gap-2 text-[#ffd700] font-semibold group-hover:text-[#ffe066] transition-colors">
                      <Star size={16} />
                      USALATINO PRIME
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Quote */}
          <Reveal delay={0.6}>
            <div className="mt-16 text-center">
              <blockquote className="font-display text-2xl md:text-3xl italic text-cream max-w-2xl mx-auto">
                {t('home.whyGroup.quote')}
              </blockquote>
              <p className="text-white/60 text-sm mt-4 font-sans">— Henry Orellana D.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* El Reto Padres 3.0 */}
      <section className="py-24 bg-cream-dark overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 md:order-1">
            <div className="relative group">
              {/* Book Image with hover effect */}
              <div className="relative w-72 md:w-80 mx-auto transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2">
                {/* Shadow */}
                <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/20 blur-xl rounded-full" />
                {/* Book */}
                <img
                  src="/images/padres-30-book.jpg"
                  alt="Libro Padres 3.0 - Henry Orellana"
                  className="relative w-full h-auto shadow-2xl rounded-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <div className="order-1 md:order-2 space-y-6">
            <Reveal delay={0.1}>
              <span className="bg-forest text-white px-4 py-2 text-xs font-bold tracking-widest">{t('home.padres.badge')}</span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal leading-tight">
                {t('home.padres.title')} <span className="text-forest italic">{t('home.padres.titleHighlight')}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-body text-warm-grey text-lg leading-relaxed">
                {t('home.padres.description')}
              </p>
            </Reveal>

            <div className="space-y-4 pt-4">
              {logrosRetoTranslated.map((logro, idx) => (
                <Reveal key={idx} delay={0.4 + idx * 0.1}>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow">
                    <logro.icon className="text-forest flex-shrink-0 mt-1" size={24} />
                    <p className="font-sans text-charcoal text-sm">{logro.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.8}>
              <MagneticButton
                to="/metodologia"
                className="inline-flex items-center bg-forest text-white px-8 py-4 font-sans text-sm tracking-widest hover:bg-charcoal transition-colors mt-6 hover:shadow-lg"
              >
                {t('home.padres.cta')} <ArrowRight size={16} className="ml-2" />
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CEO Junior Preview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Reveal>
                <span className="font-sans text-forest uppercase tracking-[0.2em] text-xs font-semibold">
                  {t('home.ceoJunior.subtitle')}
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-4xl md:text-5xl text-charcoal">
                  {t('home.ceoJunior.title')} <span className="italic text-forest">{t('home.ceoJunior.titleHighlight')}</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="font-body text-lg text-warm-grey leading-relaxed">
                  {t('home.ceoJunior.description')} <strong>{t('home.ceoJunior.descriptionBold')}</strong>.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="bg-cream px-4 py-2 text-xs font-sans text-charcoal">{t('home.ceoJunior.tags.digital')}</span>
                  <span className="bg-cream px-4 py-2 text-xs font-sans text-charcoal">{t('home.ceoJunior.tags.innovative')}</span>
                  <span className="bg-cream px-4 py-2 text-xs font-sans text-charcoal">{t('home.ceoJunior.tags.ai')}</span>
                  <span className="bg-cream px-4 py-2 text-xs font-sans text-charcoal">{t('home.ceoJunior.tags.entrepreneurship')}</span>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <ScaleShadowButton
                  to="/ceo-junior"
                  className="inline-flex items-center text-forest border-b-2 border-forest pb-1 hover:text-charcoal hover:border-charcoal transition-colors font-sans uppercase text-sm tracking-wide mt-4"
                >
                  {t('home.ceoJunior.cta')} <ArrowRight size={16} className="ml-2" />
                </ScaleShadowButton>
              </Reveal>
            </div>
            <Reveal delay={0.3} className="relative">
              <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
                <OptimizedImage
                  src="/images/ceo-junior-preview.png"
                  alt="CEO Junior"
                  className="w-full h-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* USALATINO PRIME Section - Premium Redesign */}
      <section className="relative overflow-hidden">
        {/* Estilos personalizados */}
        <style>{`
          @keyframes float-prime {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
          }
          @keyframes shimmer-gold {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          @keyframes pulse-border {
            0%, 100% { border-color: rgba(255, 215, 0, 0.3); }
            50% { border-color: rgba(255, 215, 0, 0.8); }
          }
          .float-prime { animation: float-prime 6s ease-in-out infinite; }
          .shimmer-gold {
            background: linear-gradient(90deg, #ffd700 0%, #fff 50%, #ffd700 100%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            animation: shimmer-gold 3s linear infinite;
          }
          .pulse-border { animation: pulse-border 2s ease-in-out infinite; }
        `}</style>

        {/* MOBILE LAYOUT */}
        <div className="lg:hidden">
          {/* Imagen Hero Mobile - Full Width */}
          <div className="relative h-[70vh] w-full overflow-hidden">
            <img
              src="/images/usalatino/usalatino-hero.png"
              alt="USALATINO PRIME - Henry Orellana"
              className="w-full h-full object-cover object-top"
            />
            {/* Overlay degradado */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a6e] via-[#1a3a6e]/60 to-transparent" />

            {/* Badge flotante sobre imagen */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-[#ffd700] to-[#ffaa00] px-6 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-[#1a3a6e]" />
                  <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#1a3a6e] uppercase">
                    USALATINO PRIME
                  </span>
                  <Star size={16} className="text-[#1a3a6e]" />
                </div>
              </div>
            </div>

            {/* Contenido sobre imagen */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <Reveal>
                <p className="text-[#ffd700] uppercase tracking-[0.3em] text-[10px] font-semibold mb-2">
                  Tu Camino Seguro hacia el
                </p>
                <h2 className="font-display text-4xl text-white mb-3 leading-tight">
                  Sueño <span className="italic shimmer-gold text-transparent">Americano</span>
                </h2>
              </Reveal>
            </div>
          </div>

          {/* Contenido Mobile */}
          <div className="bg-gradient-to-b from-[#1a3a6e] to-[#0d1b2a] px-6 py-10">
            <Reveal delay={0.1}>
              <p className="text-white/80 text-base text-center leading-relaxed mb-8 font-body">
                Acompañamiento VIP personalizado para tu proceso migratorio.
                Estrategia experta y seguimiento constante.
              </p>
            </Reveal>

            {/* Servicios - Cards horizontales móvil */}
            <Reveal delay={0.2}>
              <div className="space-y-3 mb-8">
                {[
                  { icon: '🛡️', title: 'Asilo Político', desc: 'Defensivo y afirmativo' },
                  { icon: '📋', title: 'Visa Juvenil SIJS', desc: 'Protección especializada' },
                  { icon: '✅', title: 'Ajuste de Status', desc: 'Green Card' },
                  { icon: '👔', title: 'Asesoría VIP', desc: 'Casos complejos' },
                ].map((service, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-[#ffd700]/20 p-4 hover:border-[#ffd700]/50 transition-all"
                  >
                    <span className="text-2xl flex-shrink-0">{service.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-sm font-sans">{service.title}</h3>
                      <p className="text-white/60 text-xs">{service.desc}</p>
                    </div>
                    <ArrowRight size={16} className="text-[#ffd700]/50" />
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CTAs Mobile */}
            <Reveal delay={0.3}>
              <div className="flex flex-col gap-3">
                <a
                  href="https://green-caterpillar-757909.hostingersite.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffd700] to-[#ffaa00] text-[#1a3a6e] font-bold px-6 py-4 text-sm hover:shadow-lg hover:shadow-[#ffd700]/30 transition-all font-sans uppercase tracking-wider"
                >
                  <Star size={18} />
                  ¡Agenda tu Consulta!
                </a>
                <Link
                  to="/usalatino-prime"
                  className="flex items-center justify-center gap-2 border-2 border-[#ffd700]/30 text-white px-6 py-4 font-sans text-sm uppercase tracking-wider hover:bg-white/5 transition-colors pulse-border"
                >
                  Conoce Más
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>

            {/* Tagline */}
            <p className="text-center text-[#ffd700]/40 text-[10px] mt-6 font-sans tracking-[0.2em]">
              YOUR PATH TO SUCCESS IN THE USA
            </p>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:block bg-gradient-to-br from-[#1a3a6e] via-[#0f2847] to-[#0d1b2a] py-24 relative">
          {/* Decoraciones de fondo */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#ffd700]/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ffd700]/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-12 gap-12 items-center">
              {/* Contenido Izquierda */}
              <div className="col-span-7 space-y-8 relative z-10">
                <Reveal>
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ffd700] to-[#ffaa00] px-6 py-2">
                    <Star size={18} className="text-[#1a3a6e]" />
                    <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#1a3a6e] uppercase">
                      USALATINO PRIME
                    </span>
                    <Star size={18} className="text-[#1a3a6e]" />
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="text-[#ffd700] uppercase tracking-[0.3em] text-sm font-semibold">
                    Tu Camino Seguro hacia el
                  </p>
                  <h2 className="font-display text-5xl xl:text-6xl text-white mt-2 leading-tight">
                    Sueño <span className="italic shimmer-gold text-transparent">Americano</span>
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="text-white/80 text-xl leading-relaxed max-w-xl font-body">
                    Acompañamiento VIP personalizado para tu proceso migratorio.
                    Estrategia experta, seguimiento constante y resultados reales.
                  </p>
                </Reveal>

                {/* Servicios Grid Desktop */}
                <Reveal delay={0.3}>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: '🛡️', title: 'Asilo Político', desc: 'Defensivo y afirmativo' },
                      { icon: '📋', title: 'Visa Juvenil SIJS', desc: 'Protección especializada' },
                      { icon: '✅', title: 'Ajuste de Status', desc: 'Residencia permanente' },
                      { icon: '👔', title: 'Asesoría VIP', desc: 'Casos complejos' },
                    ].map((service, i) => (
                      <div
                        key={i}
                        className="group flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:border-[#ffd700]/50 hover:bg-white/10 transition-all duration-300"
                      >
                        <span className="text-3xl group-hover:scale-110 transition-transform">{service.icon}</span>
                        <div>
                          <h3 className="text-white font-semibold text-sm font-sans">{service.title}</h3>
                          <p className="text-white/60 text-xs">{service.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>

                {/* CTAs Desktop */}
                <Reveal delay={0.4}>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href="https://green-caterpillar-757909.hostingersite.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffd700] to-[#ffaa00] text-[#1a3a6e] font-bold px-8 py-4 text-sm hover:scale-105 hover:shadow-lg hover:shadow-[#ffd700]/30 transition-all font-sans uppercase tracking-wider"
                    >
                      <Star size={18} />
                      ¡Agenda tu Consulta!
                    </a>
                    <Link
                      to="/usalatino-prime"
                      className="inline-flex items-center gap-2 border-2 border-[#ffd700]/40 text-white px-8 py-4 font-sans text-sm uppercase tracking-wider hover:bg-[#ffd700]/10 hover:border-[#ffd700] transition-all"
                    >
                      Conoce Más
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                  <p className="text-[#ffd700]/40 text-xs mt-4 font-sans tracking-[0.15em]">
                    YOUR PATH TO SUCCESS IN THE USA
                  </p>
                </Reveal>
              </div>

              {/* Imagen Derecha */}
              <div className="col-span-5 relative">
                <Reveal delay={0.3}>
                  <div className="relative float-prime">
                    {/* Marco decorativo */}
                    <div className="absolute -inset-4 border-2 border-[#ffd700]/20 -rotate-3" />
                    <div className="absolute -inset-4 border-2 border-[#ffd700]/10 rotate-2" />

                    {/* Imagen principal */}
                    <div className="relative aspect-[3/4] overflow-hidden shadow-2xl shadow-black/50">
                      <img
                        src="/images/usalatino/usalatino-hero.png"
                        alt="USALATINO PRIME - Henry Orellana"
                        className="w-full h-full object-cover object-top"
                      />
                      {/* Overlay sutil */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a6e]/50 via-transparent to-transparent" />
                    </div>

                    {/* Badge sobre imagen */}
                    <div className="absolute -bottom-6 -left-6 bg-[#1a3a6e] border-2 border-[#ffd700] px-6 py-4 shadow-xl">
                      <p className="font-display text-lg text-white">Henry Orellana D.</p>
                      <p className="font-sans text-[10px] text-[#ffd700] tracking-wider uppercase">
                        Fundador USALATINO PRIME
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GÉNESIS i7™ - Metodología Base */}
      <section className="py-24 px-6 bg-gradient-to-br from-cream to-cream-dark relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-forest/5 -skew-x-12 transform origin-top-right" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Reveal>
              <span className="font-sans text-forest uppercase tracking-[0.2em] text-xs font-semibold">
                {t('home.genesis.subtitle')}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-4 mb-4">
                GÉNESIS <span className="italic text-forest">i7™</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-lg text-warm-grey max-w-2xl mx-auto">
                {t('home.genesis.description')}
              </p>
            </Reveal>
          </div>

          {/* Las 7 Inteligencias */}
          <Reveal delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
              {[
                { icon: '✨', name: t('home.genesis.intelligences.spiritual'), color: 'bg-purple-100 text-purple-700 border-purple-200' },
                { icon: '🧠', name: t('home.genesis.intelligences.mental'), color: 'bg-blue-100 text-blue-700 border-blue-200' },
                { icon: '💪', name: t('home.genesis.intelligences.physical'), color: 'bg-orange-100 text-orange-700 border-orange-200' },
                { icon: '❤️', name: t('home.genesis.intelligences.emotional'), color: 'bg-red-100 text-red-700 border-red-200' },
                { icon: '🤝', name: t('home.genesis.intelligences.social'), color: 'bg-green-100 text-green-700 border-green-200' },
                { icon: '💰', name: t('home.genesis.intelligences.financial'), color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
                { icon: '🚀', name: t('home.genesis.intelligences.technological'), color: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
              ].map((intel, i) => (
                <div
                  key={i}
                  className={`${intel.color} border p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all`}
                >
                  <span className="text-2xl block mb-2">{intel.icon}</span>
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider">{intel.name}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Quote y CTA */}
          <Reveal delay={0.4}>
            <div className="bg-white p-8 md:p-12 shadow-xl max-w-3xl mx-auto">
              <blockquote className="font-display text-xl md:text-2xl text-charcoal italic text-center mb-6">
                {t('home.genesis.quote')}
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/metodologia"
                  className="inline-flex items-center justify-center gap-2 bg-forest text-white px-8 py-4 font-sans text-sm uppercase tracking-wider hover:bg-charcoal transition-colors"
                >
                  <Sparkles size={18} />
                  {t('home.genesis.cta')}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
             <Reveal>
               <h2 className="font-display text-4xl md:text-5xl text-charcoal">{t('home.articles.title')}</h2>
             </Reveal>
             <Reveal delay={0.2}>
               <Link to="/blog" className="hidden md:block font-sans text-sm text-warm-grey hover:text-forest transition-colors">
                 {t('home.articles.viewAll')}
               </Link>
             </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articlesTranslated.map((article, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link to="/blog" className="group block space-y-4">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-sans text-forest uppercase tracking-wider">
                    <span>{article.category}</span>
                    <span className="w-1 h-1 rounded-full bg-forest"></span>
                    <span>5 {t('home.articles.readTime')}</span>
                  </div>
                  <h3 className="font-display text-2xl text-charcoal group-hover:text-forest transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="font-body text-warm-grey text-sm line-clamp-2">
                    {t('home.articles.excerpt')}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-16">
            <HelpCircle className="mx-auto mb-4 text-forest" size={48} />
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">{t('home.faq.title')}</h2>
            <p className="font-sans text-warm-grey">{t('home.faq.subtitle')}</p>
          </Reveal>

          <div className="space-y-4">
            {faqItemsTranslated.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="border border-gray-200 rounded-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-cream transition-colors"
                  >
                    <span className="font-sans font-medium text-charcoal pr-4">{item.question}</span>
                    <ChevronDown
                      className={`text-forest flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                      size={20}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="px-6 pb-6 font-body text-warm-grey">{item.answer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 bg-forest text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Reveal>
            <Sparkles className="mx-auto mb-6 opacity-80" size={48} />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl">{t('home.newsletter.title')}</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light">
              {t('home.newsletter.description')}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <form className="max-w-md mx-auto mt-8 flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder={t('home.newsletter.placeholder')}
                className="flex-1 bg-white/10 border border-white/20 px-6 py-4 placeholder-white/50 text-white focus:outline-none focus:bg-white/20 font-sans"
              />
              <button className="bg-cream text-charcoal px-8 py-4 font-sans font-bold tracking-wide hover:bg-white transition-colors">
                {t('home.newsletter.cta')}
              </button>
            </form>
            <p className="mt-4 text-xs text-white/40 font-sans">
              {t('home.newsletter.privacy')}
            </p>
          </Reveal>
        </div>
      </section>

    </div>
    </>
  );
};
