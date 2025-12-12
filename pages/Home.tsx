import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Brain, Target, Users, Sparkles, CheckCircle2, HelpCircle, ChevronDown } from 'lucide-react';
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

      {/* Hero Section - Mobile-First Editorial Design */}
      <section className="relative min-h-screen bg-cream overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2744' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        {/* Mobile Layout (default) */}
        <div className="lg:hidden relative min-h-screen flex flex-col">
          {/* Mobile Image - Top Half with Gradient Overlay */}
          <div className="relative h-[55vh] w-full overflow-hidden">
            <img
              src="/images/hero-principal.png"
              alt="Henry Orellana D."
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            {/* Gradient fade to content */}
            <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-transparent to-cream" />

            {/* Floating Badge on Image */}
            <div className="absolute bottom-8 left-6 right-6">
              <Reveal delay={0.2}>
                <div className="bg-white/95 backdrop-blur-sm px-5 py-3 shadow-lg border-l-4 border-burgundy">
                  <span className="font-sans text-[10px] text-warm-grey uppercase tracking-[0.2em] block mb-1">
                    {t('home.hero.creatorOf')}
                  </span>
                  <span className="font-display text-xl text-charcoal">GÉNESIS i7™</span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Mobile Content - Bottom */}
          <div className="relative flex-1 px-6 py-8 -mt-4 z-10">
            <Reveal delay={0.1}>
              <span className="font-sans text-forest uppercase tracking-[0.15em] text-[10px] font-semibold">
                {t('home.hero.subtitle')}
              </span>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="font-display text-[2rem] leading-[1.1] text-charcoal mt-3 mb-4">
                {t('home.hero.title1')}<br/>
                {t('home.hero.title2')} <span className="text-forest italic">{t('home.hero.title3')}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="font-body text-base text-warm-grey leading-relaxed mb-6">
                {t('home.hero.description')}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-col gap-3">
                <ShineButton
                  to="/metodologia"
                  className="bg-charcoal text-cream px-6 py-4 font-sans text-xs tracking-[0.15em] uppercase text-center"
                >
                  <Sparkles size={16} />
                  {t('home.hero.cta1')}
                </ShineButton>
                <BorderDrawButton
                  to="/ceo-junior"
                  className="border border-charcoal/20 text-charcoal px-6 py-4 font-sans text-xs tracking-[0.15em] uppercase text-center"
                >
                  {t('home.hero.cta2')}
                </BorderDrawButton>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <p className="text-[10px] text-warm-grey/70 mt-4 font-sans text-center tracking-wider">
                {t('home.hero.transform')}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex relative min-h-screen items-center pt-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-16 items-center w-full">
            {/* Text Content */}
            <div className="col-span-7 space-y-8 z-10">
              <Reveal delay={0.1}>
                <span className="font-sans text-forest uppercase tracking-[0.2em] text-xs font-semibold">
                  {t('home.hero.subtitle')} • {t('home.hero.creatorOf')} GÉNESIS i7™
                </span>
              </Reveal>

              <Reveal delay={0.2}>
                <h1 className="font-display text-5xl xl:text-6xl leading-[1.1] text-charcoal">
                  {t('home.hero.title1')} {t('home.hero.title2')} <span className="text-forest italic">{t('home.hero.title3')}</span>
                </h1>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="font-body text-xl xl:text-2xl text-warm-grey max-w-2xl leading-relaxed">
                  {t('home.hero.description')}
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="font-sans text-sm text-charcoal max-w-lg border-l-4 border-forest pl-4 py-2 bg-white/50">
                  {t('home.hero.genesisDescription')}
                </p>
              </Reveal>

              <Reveal delay={0.5} className="pt-4">
                <div className="flex gap-4">
                  <RippleButton
                    to="/metodologia"
                    className="bg-forest text-white px-8 py-4 font-sans text-sm tracking-widest hover:bg-charcoal transition-colors"
                  >
                    <Sparkles size={18} />
                    {t('nav.cta')}
                  </RippleButton>
                  <FillSlideButton
                    to="/ceo-junior"
                    direction="left"
                    className="border-2 border-forest text-forest px-8 py-4 font-sans text-sm tracking-widest hover:text-white transition-colors"
                  >
                    {t('home.hero.cta2')}
                  </FillSlideButton>
                </div>
                <p className="text-xs text-warm-grey mt-3 font-sans">
                  {t('home.hero.transform')}
                </p>
              </Reveal>
            </div>

            {/* Image */}
            <div className="col-span-5 relative">
              <Reveal delay={0.3} className="relative">
                {/* Main Image Container */}
                <div className="relative aspect-[3/4] w-full max-w-md ml-auto">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-full h-full border-2 border-forest/20" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-burgundy/10" />

                  {/* Image */}
                  <div className="relative w-full h-full overflow-hidden shadow-2xl">
                    <img
                      src="/images/hero-principal.png"
                      alt="Henry Orellana D."
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>

                  {/* Name Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-charcoal text-cream px-6 py-4 shadow-xl">
                    <span className="font-display text-lg">Henry Orellana D.</span>
                    <span className="block font-sans text-[10px] text-cream/60 tracking-wider mt-1">{t('home.hero.badge')}</span>
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

      {/* La Crisis y el Quiebre */}
      <section className="py-24 px-6 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="font-sans text-burgundy uppercase tracking-[0.2em] text-xs font-semibold">
              {t('home.crisis.subtitle')}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-8">
              {t('home.crisis.title')} <span className="italic text-burgundy">{t('home.crisis.titleHighlight')}</span>{t('home.crisis.titleEnd')}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-xl text-white/80 leading-relaxed mb-8">
              {t('home.crisis.description')}
              <strong className="text-white"> {t('home.crisis.descriptionBold')}</strong>{t('home.crisis.descriptionEnd')}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <blockquote className="font-display text-2xl md:text-3xl italic text-burgundy border-l-4 border-burgundy pl-6 text-left max-w-2xl mx-auto">
              {t('home.crisis.quote')}
              <footer className="text-white/60 text-base mt-4 not-italic font-sans">— Henry Orellana D.</footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* El Reto Padres 3.0 */}
      <section className="py-24 bg-cream-dark overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 md:order-1">
            <div className="relative group perspective-1000">
              <div className="relative w-64 h-96 mx-auto bg-forest shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-12">
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center border border-white/20">
                  <h3 className="font-display text-3xl text-white italic mb-2">{t('home.padres.bookTitle')}</h3>
                  <p className="font-sans text-white/80 text-xs tracking-widest uppercase mb-8">{t('home.padres.bookSubtitle')}</p>
                  <div className="w-12 h-1 bg-white/50 mb-8"></div>
                  <span className="font-display text-white text-lg">Henry Orellana D.</span>
                </div>
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-black/20"></div>
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
