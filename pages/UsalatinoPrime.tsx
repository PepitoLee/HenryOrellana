import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import {
  Shield,
  FileCheck,
  CheckCircle2,
  Users,
  Star,
  ArrowRight,
  Phone,
  Clock,
  Award,
  Heart,
  Lock,
  Handshake,
  Sparkles,
  MapPin,
  Navigation,
  Scale,
  Landmark,
  FileText,
  Calculator,
  Hash,
  Car,
  Globe,
  Headphones,
  DollarSign
} from 'lucide-react';
import { SEOHead } from '../components/SEO/SEOHead';

export const UsalatinoPrime: React.FC = () => {
  const serviciosDetallados = [
    {
      num: '01', icon: Shield, title: 'Asilo Afirmativo',
      description: '¿Sufriste persecución en tu país por tu raza, religión, nacionalidad, opinión política o pertenencia a un grupo social? Si estás dentro de Estados Unidos y NO estás en proceso de deportación, Henry te ayuda a presentar tu solicitud de asilo ante USCIS.',
      forms: ['I-589', 'I-765 (permiso de trabajo)'],
      timeline: '1 a 3+ años',
      henryHelp: 'Henry prepara tu caso completo, te acompaña en la entrevista y pelea por tu protección.',
      tabGradient: 'from-[#1a3a6e] to-[#0d2240]', accent: '#1a3a6e', category: 'migratorio',
    },
    {
      num: '02', icon: Scale, title: 'Asilo Defensivo',
      description: '¿Ya estás en proceso de deportación? No te rindas. Henry presenta tu caso de asilo directamente ante la Corte de Inmigración para defenderte y evitar tu deportación.',
      forms: ['I-589', 'EOIR-28'],
      timeline: '1 a 3+ años',
      henryHelp: 'Representación completa ante el juez de inmigración.',
      tabGradient: 'from-[#c41e3a] to-[#8b1428]', accent: '#c41e3a', category: 'migratorio',
    },
    {
      num: '03', icon: Users, title: 'Visa Juvenil (SIJS)',
      description: '¿Tu hijo menor de 21 años fue víctima de abuso, abandono o negligencia? El Estatus de Inmigrante Juvenil Especial puede darle residencia permanente y protección en Estados Unidos.',
      forms: ['I-360', 'I-485', 'I-912', 'I-765'],
      timeline: '6 a 18 meses',
      henryHelp: 'Henry maneja todo el proceso: desde la petición hasta la Green Card del menor.',
      tabGradient: 'from-[#b8860b] to-[#8b6508]', accent: '#b8860b', category: 'migratorio',
    },
    {
      num: '04', icon: FileCheck, title: 'Ajuste de Estatus (Green Card)',
      description: '¿Eres elegible para la residencia permanente? Ya sea por matrimonio con ciudadano/residente, por ser padre/hijo de ciudadano, por empleo, o por asilo/SIJS aprobado, Henry te lleva paso a paso hasta tu Green Card.',
      forms: ['I-485', 'I-130', 'I-864', 'I-765', 'I-131', 'I-693'],
      timeline: '8 a 36 meses',
      henryHelp: 'Incluye permiso de trabajo y permiso de viaje mientras esperas.',
      tabGradient: 'from-[#1a3a6e] to-[#0d2240]', accent: '#1a3a6e', category: 'migratorio',
    },
    {
      num: '05', icon: Landmark, title: 'Cambio de Corte',
      description: '¿Tu caso está en una corte lejos de donde vives? Henry presenta la moción para transferir tu caso a una corte más cercana a ti, para que puedas asistir sin complicaciones.',
      forms: ['Motion to Change Venue'],
      timeline: '2 a 4 meses',
      henryHelp: 'No pierdas tu caso por no poder viajar a otra ciudad.',
      tabGradient: 'from-[#c41e3a] to-[#8b1428]', accent: '#c41e3a', category: 'migratorio',
    },
    {
      num: '06', icon: FileText, title: 'Mociones ante Corte',
      description: '¿Te negaron tu caso? ¿Necesitas reabrir o reconsiderar una decisión? Henry presenta mociones legales ante la Corte de Inmigración para darte una segunda oportunidad.',
      forms: ['Motion to Reopen', 'Motion to Reconsider', 'EOIR-26'],
      timeline: '3 a 12 meses',
      henryHelp: 'Cada caso merece una pelea justa.',
      tabGradient: 'from-[#b8860b] to-[#8b6508]', accent: '#b8860b', category: 'migratorio',
    },
    {
      num: '07', icon: Calculator, title: 'Declaración de Impuestos',
      description: '¿Necesitas presentar tus taxes? Henry prepara y presenta tu declaración de impuestos ante el IRS. Tener tus taxes al día es clave para cualquier proceso migratorio futuro.',
      forms: ['1040', '1040-NR'],
      timeline: '2 a 4 semanas',
      henryHelp: 'Proceso rápido y sin complicaciones.',
      tabGradient: 'from-[#1a3a6e] to-[#0d2240]', accent: '#1a3a6e', category: 'complementario',
    },
    {
      num: '08', icon: Hash, title: 'Número ITIN',
      description: '¿No tienes Social Security? El ITIN te permite declarar impuestos, abrir cuentas bancarias y construir historial financiero en EE.UU. Henry gestiona tu solicitud completa ante el IRS.',
      forms: ['W-7', '1040'],
      timeline: '7 a 11 semanas',
      henryHelp: 'Tu primer paso para establecerte legalmente.',
      tabGradient: 'from-[#c41e3a] to-[#8b1428]', accent: '#c41e3a', category: 'complementario',
    },
    {
      num: '09', icon: Car, title: 'Licencia de Conducir',
      description: 'Henry te asiste con todo el proceso de solicitud de licencia de conducir en el estado de Utah. Te guía con los documentos, formularios y requisitos necesarios.',
      forms: ['State DMV Form'],
      timeline: '2 a 6 semanas',
      henryHelp: 'Maneja legal, maneja tranquilo.',
      tabGradient: 'from-[#b8860b] to-[#8b6508]', accent: '#b8860b', category: 'complementario',
    },
  ];

  const porQueHenry = [
    { icon: Globe, title: '100% en Español', desc: 'Te entiende y te escucha en tu idioma' },
    { icon: Users, title: '+500 Familias', desc: 'Ya confiaron en él' },
    { icon: DollarSign, title: 'Planes Flexibles', desc: 'Pregunta por las opciones de pago' },
    { icon: Headphones, title: 'Seguimiento Personal', desc: 'No eres un número, eres familia' },
    { icon: Lock, title: 'Confidencialidad', desc: 'Tu información siempre segura' },
    { icon: Sparkles, title: 'Consulta Gratuita', desc: 'Conoce tus opciones sin compromiso' },
  ];

  const proceso = [
    { step: '01', title: 'Consulta Inicial', desc: 'Evaluamos tu caso sin compromiso' },
    { step: '02', title: 'Estrategia Personalizada', desc: 'Diseñamos el mejor camino legal' },
    { step: '03', title: 'Ejecución Profesional', desc: 'Preparamos y presentamos tu caso' },
    { step: '04', title: 'Seguimiento Constante', desc: 'Te acompañamos hasta el éxito' }
  ];

  return (
    <>
      <SEOHead
        title="USALATINO PRIME | Tu Camino hacia el Sueño Americano"
        description="Acompañamiento VIP para tu proceso migratorio. Asilo político, Visa Juvenil SIJS, Ajuste de Status y asesoría especializada. Estrategia experta y resultados reales."
        url="/usalatino-prime"
      />

      {/* Custom styles for premium effects */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-gold {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.4); }
          50% { box-shadow: 0 0 30px 10px rgba(255, 215, 0, 0.2); }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #ffd700 0%, #fff 50%, #ffd700 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s infinite;
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .pulse-gold {
          animation: pulse-gold 2s infinite;
        }
        .image-frame {
          position: relative;
        }
        .image-frame::before {
          content: '';
          position: absolute;
          inset: -3px;
          background: linear-gradient(135deg, #ffd700, #1a3a6e, #c41e3a, #ffd700);
          border-radius: inherit;
          z-index: -1;
          opacity: 0.8;
        }
        .image-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          border-radius: inherit;
          z-index: -1;
        }
      `}</style>

      <div className="w-full overflow-x-hidden">

        {/* ============================================
            HERO SECTION - Full Impact Mobile First
        ============================================ */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#1a3a6e] via-[#0d2240] to-[#0d1b2a] overflow-hidden">
          {/* Ambient Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd700]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c41e3a]/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#ffd700]/5 rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Decorative Stars */}
          <div className="absolute top-20 right-8 md:right-20 opacity-20 text-[#ffd700] float-animation">
            <Star size={48} fill="currentColor" />
          </div>
          <div className="absolute bottom-32 left-4 md:left-10 opacity-10 text-[#ffd700]" style={{ animationDelay: '2s' }}>
            <Star size={80} fill="currentColor" className="float-animation" />
          </div>

          {/* Mobile: Image First Layout */}
          <div className="lg:hidden relative">
            {/* Hero Image - Mobile Prominent */}
            <div className="relative h-[60vh] min-h-[400px] w-full">
              <img
                src="/images/usalatino/usalatino-hero.png"
                alt="Henry Orellana - USALATINO PRIME"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/60 to-transparent" />

              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent" />
            </div>

            {/* Mobile Content */}
            <div className="relative px-6 py-10 -mt-20 z-10">
              <Reveal delay={0.1}>
                <p className="text-[#ffd700]/80 uppercase tracking-[0.3em] text-xs font-semibold text-center">
                  Tu Camino Seguro hacia el
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <h1 className="font-display text-4xl sm:text-5xl text-white leading-[1.1] mt-3 text-center">
                  Sueño <span className="shimmer-text italic">Americano</span>
                </h1>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="font-body text-lg text-white/70 leading-relaxed mt-6 text-center max-w-md mx-auto">
                  Acompañamiento VIP personalizado para tu proceso migratorio.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-col gap-4 mt-8">
                  <a
                    href="https://green-caterpillar-757909.hostingersite.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ffd700] to-[#ffaa00] text-[#1a3a6e] font-bold px-8 py-4 rounded-full text-base hover:scale-105 transition-transform shadow-xl shadow-[#ffd700]/30 font-sans uppercase tracking-wider pulse-gold"
                  >
                    <Sparkles size={20} />
                    ¡Agenda tu Consulta!
                  </a>
                  <a
                    href="#servicios"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/90 px-6 py-3 rounded-full font-sans text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
                  >
                    Ver Servicios
                    <ArrowRight size={16} />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <p className="text-white/30 text-xs font-sans tracking-[0.2em] text-center mt-6">
                  YOUR PATH TO SUCCESS IN THE USA
                </p>
              </Reveal>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block max-w-7xl mx-auto px-8 pt-32 pb-20">
            <div className="grid grid-cols-2 gap-20 items-center min-h-[80vh]">
              {/* Content */}
              <div className="space-y-8 z-10">
                <Reveal>
                  <p className="text-[#ffd700]/70 uppercase tracking-[0.3em] text-sm font-medium">
                    Tu Camino Seguro hacia el
                  </p>
                  <h1 className="font-display text-6xl xl:text-7xl text-white leading-[1.05] mt-3">
                    Sueño <span className="shimmer-text italic">Americano</span>
                  </h1>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="font-body text-xl text-white/70 leading-relaxed max-w-lg">
                    Acompañamiento VIP personalizado para tu proceso migratorio.
                    Estrategia experta, seguimiento constante y resultados reales.
                  </p>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="flex gap-5 pt-4">
                    <a
                      href="https://green-caterpillar-757909.hostingersite.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ffd700] to-[#ffaa00] text-[#1a3a6e] font-bold px-10 py-5 rounded-full text-lg hover:scale-105 transition-transform shadow-xl shadow-[#ffd700]/30 font-sans uppercase tracking-wider pulse-gold"
                    >
                      <Sparkles size={22} />
                      ¡Agenda tu Consulta!
                    </a>
                    <a
                      href="#servicios"
                      className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-8 py-5 rounded-full font-sans uppercase tracking-wider hover:bg-white/10 transition-colors"
                    >
                      Ver Servicios
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={0.4}>
                  <p className="text-white/30 text-sm font-sans tracking-[0.2em] pt-4">
                    YOUR PATH TO SUCCESS IN THE USA
                  </p>
                </Reveal>
              </div>

              {/* Image - Desktop */}
              <Reveal delay={0.3} className="relative">
                <div className="relative">
                  {/* Decorative frame */}
                  <div className="absolute -inset-6 border border-[#ffd700]/20 rounded-3xl" />
                  <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#ffd700]/20 rounded-full blur-3xl" />
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#c41e3a]/20 rounded-full blur-3xl" />

                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl image-frame">
                    <img
                      src="/images/usalatino/usalatino-hero.png"
                      alt="Henry Orellana - USALATINO PRIME"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a6e]/50 via-transparent to-transparent" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================
            IMAGE GALLERY - Showcase All Images
        ============================================ */}
        <section className="py-16 md:py-24 bg-[#0d1b2a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd700' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <Reveal className="text-center mb-12">
              <p className="text-[#ffd700] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
                Profesionalismo & Dedicación
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-white">
                Tu Éxito es Nuestra <span className="text-[#ffd700] italic">Misión</span>
              </h2>
            </Reveal>

            {/* Mobile: Horizontal Scroll Gallery */}
            <div className="md:hidden">
              <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory -mx-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {[
                  { src: '/images/usalatino/usalatino-vision.png', label: 'Visión' },
                  { src: '/images/usalatino/usalatino-working.png', label: 'Dedicación' },
                  { src: '/images/usalatino/usalatino-document.png', label: 'Profesionalismo' },
                  { src: '/images/usalatino/usalatino-founder.png', label: 'Liderazgo' },
                ].map((img, idx) => (
                  <div key={idx} className="flex-shrink-0 w-72 snap-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <div className="aspect-[4/5]">
                        <img
                          src={img.src}
                          alt={img.label}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className="inline-block bg-[#ffd700] text-[#1a3a6e] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                          {img.label}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-xs text-center mt-4">← Desliza para ver más →</p>
            </div>

            {/* Desktop: Masonry-like Grid */}
            <div className="hidden md:grid grid-cols-4 gap-6">
              {/* Large Image - Vision */}
              <Reveal className="col-span-2 row-span-2">
                <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="/images/usalatino/usalatino-vision.png"
                    alt="Visión hacia el futuro"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block bg-[#ffd700] text-[#1a3a6e] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-3">
                      Visión
                    </span>
                    <p className="text-white/80 text-lg">Mirando siempre hacia tu futuro</p>
                  </div>
                </div>
              </Reveal>

              {/* Working Image */}
              <Reveal delay={0.1} className="col-span-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-full">
                  <div className="aspect-[16/9]">
                    <img
                      src="/images/usalatino/usalatino-working.png"
                      alt="Trabajo dedicado"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-[#c41e3a] text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                      Dedicación
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Document Image */}
              <Reveal delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="aspect-square">
                    <img
                      src="/images/usalatino/usalatino-document.png"
                      alt="Profesionalismo documentado"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-white/90 text-[#1a3a6e] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Profesionalismo
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Founder Portrait */}
              <Reveal delay={0.3}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="aspect-square">
                    <img
                      src="/images/usalatino/usalatino-founder.png"
                      alt="Henry Orellana - Fundador"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-[#ffd700] text-[#1a3a6e] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Liderazgo
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================
            SERVICIOS SECTION - DETALLADO
        ============================================ */}
        <section id="servicios" className="py-20 md:py-28 bg-white relative">
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #1a3a6e 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }} />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <Reveal className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-[#1a3a6e]/10 text-[#1a3a6e] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">
                <Shield size={14} />
                Nuestros Servicios
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">
                Soluciones <span className="text-[#c41e3a] italic">Migratorias</span>
                <br className="hidden md:block" />
                <span className="text-[#1a3a6e]"> Completas</span>
              </h2>
              <p className="font-body text-warm-grey max-w-2xl mx-auto text-lg leading-relaxed">
                Desde asilo hasta tu Green Card. 9 servicios especializados para cada etapa de tu proceso migratorio.
              </p>
            </Reveal>

            {/* ── Servicios Migratorios ── */}
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1a3a6e]/20 to-[#1a3a6e]/20" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#1a3a6e] whitespace-nowrap">
                  Servicios Migratorios
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#1a3a6e]/20 to-[#1a3a6e]/20" />
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
              {serviciosDetallados.filter(s => s.category === 'migratorio').map((servicio, idx) => (
                <Reveal key={servicio.num} delay={idx * 0.08}>
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 h-full flex flex-col">
                    {/* Tab header — case file style */}
                    <div className={`flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r ${servicio.tabGradient}`}>
                      <span className="text-white/40 font-mono text-xs font-bold">{servicio.num}</span>
                      <div className="w-px h-4 bg-white/20" />
                      <span className="text-white font-semibold text-sm tracking-wide">{servicio.title}</span>
                      <servicio.icon className="text-[#ffd700] ml-auto opacity-80" size={18} />
                    </div>

                    {/* Body */}
                    <div className="p-5 md:p-6 flex-1 flex flex-col">
                      <p className="text-warm-grey text-sm leading-relaxed mb-4 flex-1">
                        {servicio.description}
                      </p>

                      {/* Metadata */}
                      <div className="space-y-2.5 pt-4 border-t border-gray-100">
                        <div className="flex items-start gap-2 flex-wrap">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">Formularios:</span>
                          {servicio.forms.map((form) => (
                            <span key={form} className="px-2 py-0.5 text-[11px] font-mono rounded-md font-medium" style={{
                              backgroundColor: `${servicio.accent}12`,
                              color: servicio.accent,
                            }}>
                              {form}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={13} className="opacity-50" style={{ color: servicio.accent }} />
                          <span className="text-xs font-medium" style={{ color: servicio.accent }}>
                            {servicio.timeline}
                          </span>
                        </div>
                      </div>

                      {/* Henry's help */}
                      <div className="mt-4 p-3 rounded-lg bg-[#ffd700]/5 border border-[#ffd700]/15">
                        <p className="text-[13px] text-charcoal/80 leading-relaxed flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#ffd700] flex-shrink-0 mt-0.5" />
                          {servicio.henryHelp}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* ── Servicios Complementarios ── */}
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b8860b]/20 to-[#b8860b]/20" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8860b] whitespace-nowrap">
                  Servicios Complementarios
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b8860b]/20 to-[#b8860b]/20" />
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {serviciosDetallados.filter(s => s.category === 'complementario').map((servicio, idx) => (
                <Reveal key={servicio.num} delay={idx * 0.1}>
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 h-full flex flex-col">
                    {/* Tab header */}
                    <div className={`flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r ${servicio.tabGradient}`}>
                      <span className="text-white/40 font-mono text-xs font-bold">{servicio.num}</span>
                      <div className="w-px h-4 bg-white/20" />
                      <span className="text-white font-semibold text-sm tracking-wide">{servicio.title}</span>
                      <servicio.icon className="text-[#ffd700] ml-auto opacity-80" size={18} />
                    </div>

                    {/* Body */}
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-warm-grey text-sm leading-relaxed mb-4 flex-1">
                        {servicio.description}
                      </p>

                      {/* Metadata */}
                      <div className="space-y-2.5 pt-4 border-t border-gray-100">
                        <div className="flex items-start gap-2 flex-wrap">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">Formularios:</span>
                          {servicio.forms.map((form) => (
                            <span key={form} className="px-2 py-0.5 text-[11px] font-mono rounded-md font-medium" style={{
                              backgroundColor: `${servicio.accent}12`,
                              color: servicio.accent,
                            }}>
                              {form}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={13} className="opacity-50" style={{ color: servicio.accent }} />
                          <span className="text-xs font-medium" style={{ color: servicio.accent }}>
                            {servicio.timeline}
                          </span>
                        </div>
                      </div>

                      {/* Henry's help */}
                      <div className="mt-4 p-3 rounded-lg bg-[#ffd700]/5 border border-[#ffd700]/15">
                        <p className="text-[13px] text-charcoal/80 leading-relaxed flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#ffd700] flex-shrink-0 mt-0.5" />
                          {servicio.henryHelp}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            ¿POR QUÉ ELEGIR A HENRY?
        ============================================ */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a3a6e] via-[#0d2240] to-[#0d1b2a] relative overflow-hidden">
          {/* Ambient effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffd700]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#c41e3a]/10 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <Reveal className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#ffd700]/15 border border-[#ffd700]/25 rounded-full text-[#ffd700] text-xs font-bold uppercase tracking-[0.2em] mb-6">
                <Star size={14} fill="currentColor" />
                Tu Mejor Aliado
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
                ¿Por Qué Elegir a{' '}
                <span className="shimmer-text italic">Henry</span>?
              </h2>
              <p className="text-white/50 max-w-xl mx-auto text-lg">
                Más que un consultor, un aliado que entiende tu historia
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {porQueHenry.map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.08}>
                  <div className="p-6 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300 group hover:-translate-y-1">
                    <div className="w-11 h-11 rounded-xl bg-[#ffd700]/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="text-[#ffd700]" size={22} />
                    </div>
                    <h4 className="text-white font-bold text-base mb-1.5">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            NUESTRO PROCESO - Con imagen de fondo visible
        ============================================ */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a3a6e] via-[#0d2240] to-[#0d1b2a] text-white relative overflow-hidden">
          {/* Background Image - Más visible */}
          <div className="absolute inset-0">
            <img
              src="/images/usalatino/usalatino-working.png"
              alt=""
              className="w-full h-full object-cover opacity-15"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a] via-[#0d1b2a]/80 to-[#0d1b2a]" />
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <Reveal className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#ffd700]/20 rounded-full mb-6">
                <Clock className="text-[#ffd700]" size={40} />
              </div>
              <h2 className="font-display text-3xl md:text-5xl">
                Nuestro <span className="text-[#ffd700] italic">Proceso</span>
              </h2>
              <p className="font-body text-white/60 mt-4 max-w-xl mx-auto text-lg">
                Un camino claro y estructurado hacia tus metas migratorias
              </p>
            </Reveal>

            {/* Mobile: Vertical Timeline */}
            <div className="md:hidden space-y-6">
              {proceso.map((paso, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#ffd700] to-[#ffaa00] rounded-2xl flex items-center justify-center shadow-lg shadow-[#ffd700]/30">
                        <span className="font-display text-xl text-[#1a3a6e] font-bold">{paso.step}</span>
                      </div>
                      {idx < proceso.length - 1 && (
                        <div className="w-0.5 h-16 bg-gradient-to-b from-[#ffd700]/50 to-transparent mt-2" />
                      )}
                    </div>
                    <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 mt-1">
                      <h3 className="font-sans font-bold text-white text-lg mb-1">{paso.title}</h3>
                      <p className="font-body text-white/60 text-sm">{paso.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Desktop: Horizontal Cards */}
            <div className="hidden md:grid grid-cols-4 gap-8">
              {proceso.map((paso, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="relative group">
                    {/* Connection line */}
                    {idx < proceso.length - 1 && (
                      <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#ffd700]/60 to-[#ffd700]/20" />
                    )}

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 relative z-10 group-hover:-translate-y-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#ffd700] to-[#ffaa00] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#ffd700]/30 group-hover:scale-110 transition-transform">
                        <span className="font-display text-2xl text-[#1a3a6e] font-bold">{paso.step}</span>
                      </div>
                      <h3 className="font-sans font-bold text-white text-lg mb-2">{paso.title}</h3>
                      <p className="font-body text-white/60 text-sm">{paso.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SOBRE EL FUNDADOR - Imagen prominente
        ============================================ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image First on Mobile */}
              <Reveal className="order-1 lg:order-2">
                <div className="relative max-w-md mx-auto lg:max-w-none">
                  {/* Decorative background */}
                  <div className="absolute -inset-6 bg-gradient-to-br from-[#1a3a6e]/10 to-[#c41e3a]/10 rounded-3xl" />
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#ffd700] rounded-tl-2xl" />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#1a3a6e] rounded-br-2xl" />

                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/usalatino/usalatino-founder.png"
                      alt="Henry Orellana - Fundador de USALATINO PRIME"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a6e]/30 to-transparent" />
                  </div>

                  {/* Name badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                    <p className="font-display text-xl text-charcoal">Henry Orellana D.</p>
                    <p className="text-[#c41e3a] text-sm font-medium">Fundador & Director</p>
                  </div>
                </div>
              </Reveal>

              {/* Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <Reveal>
                  <span className="inline-block bg-[#c41e3a] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em]">
                    El Fundador
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mt-6 leading-tight">
                    Henry <span className="text-[#1a3a6e] italic">Orellana D.</span>
                  </h2>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="font-body text-warm-grey text-lg leading-relaxed">
                    Como inmigrante, entiendo en carne propia los desafíos y sueños que traes contigo.
                    USALATINO PRIME nace de mi propia experiencia y del deseo de ayudar a otros
                    a navegar el sistema migratorio con dignidad y éxito.
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <blockquote className="relative bg-gradient-to-r from-cream to-white border-l-4 border-[#ffd700] pl-6 pr-6 py-6 rounded-r-xl shadow-lg">
                    <Star className="absolute -top-3 -left-3 text-[#ffd700]" size={24} fill="currentColor" />
                    <p className="font-display text-xl md:text-2xl italic text-charcoal leading-relaxed">
                      "Tu sueño americano es posible. Solo necesitas el guía correcto."
                    </p>
                  </blockquote>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-[#1a3a6e] text-white px-5 py-2 text-sm font-sans rounded-full font-medium">
                      Consultor Migratorio
                    </span>
                    <span className="bg-[#c41e3a] text-white px-5 py-2 text-sm font-sans rounded-full font-medium">
                      Autor & Speaker
                    </span>
                    <span className="bg-[#ffd700] text-[#1a3a6e] px-5 py-2 text-sm font-sans rounded-full font-bold">
                      Coach Familiar
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            COMPROMISO - Con imagen documento
        ============================================ */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-cream">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <Reveal className="order-1">
                <div className="relative max-w-lg mx-auto lg:max-w-none">
                  <div className="absolute -inset-3 bg-gradient-to-br from-[#1a3a6e]/20 to-[#ffd700]/20 rounded-2xl blur-xl" />

                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/usalatino/usalatino-document.png"
                      alt="Compromiso USALATINO PRIME"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a6e]/30 to-transparent" />
                  </div>

                  {/* Trust badge */}
                  <div className="absolute -bottom-4 right-4 bg-[#1a3a6e] text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3">
                    <Lock className="text-[#ffd700]" size={20} />
                    <div>
                      <p className="font-bold text-sm">100% Confidencial</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Content */}
              <div className="space-y-8 order-2">
                <Reveal>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a3a6e] rounded-2xl mb-4">
                    <Lock className="text-[#ffd700]" size={32} />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight">
                    Nuestro <span className="text-[#c41e3a] italic">Compromiso</span>
                  </h2>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="space-y-5">
                    {[
                      { title: 'Confidencialidad Total', desc: 'Tu información está protegida bajo estrictos protocolos de privacidad.' },
                      { title: 'Transparencia en Cada Paso', desc: 'Siempre sabrás el estado de tu caso y los próximos pasos a seguir.' },
                      { title: 'Profesionalismo y Ética', desc: 'Trabajamos bajo los más altos estándares de profesionalismo.' },
                      { title: 'Compromiso con Tu Éxito', desc: 'Tu meta es nuestra misión. No descansamos hasta verte triunfar.' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-start p-4 bg-white rounded-xl shadow-md border border-gray-100">
                        <div className="w-10 h-10 bg-[#ffd700] rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="text-[#1a3a6e]" size={20} />
                        </div>
                        <div>
                          <h3 className="font-sans font-bold text-charcoal mb-1">{item.title}</h3>
                          <p className="text-warm-grey text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            OFICINA - UBICACIÓN Y MAPA
        ============================================ */}
        <section className="py-20 md:py-28 bg-[#f8f6f3] relative">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#1a3a6e]/10 rounded-full text-[#1a3a6e] text-sm font-semibold tracking-wide uppercase mb-4">
                  <MapPin size={16} />
                  Nuestra Oficina
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight">
                  Visítanos en <span className="text-[#c41e3a] italic">Utah</span>
                </h2>
                <p className="text-warm-grey text-base md:text-lg max-w-lg mx-auto mt-3 leading-relaxed">
                  Agenda tu cita presencial o virtual desde nuestra oficina en Highland, Utah
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                {/* Mapa */}
                <div className="w-full h-[300px] md:h-[360px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5!2d-111.7953!3d40.4536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528e8b0b0b0b0b%3A0x0!2s10951+N+Town+Center+Dr%2C+Highland%2C+UT+84003!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación UsaLatino Prime - Highland, Utah"
                  />
                </div>

                {/* Info de contacto */}
                <div className="p-6 md:p-8 flex flex-col sm:flex-row gap-6 md:gap-10">
                  {/* Dirección */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-11 h-11 bg-[#1a3a6e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#1a3a6e]" size={22} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-charcoal mb-1">Dirección</p>
                      <p className="text-warm-grey text-sm leading-relaxed">
                        10951 N. Town Center Drive<br />
                        Highland, Utah 84003
                      </p>
                    </div>
                  </div>

                  {/* Horario */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-11 h-11 bg-green-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="text-green-600" size={22} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-charcoal mb-1">Horario de Atención</p>
                      <p className="text-warm-grey text-sm leading-relaxed">
                        Martes y Jueves<br />
                        8:00 AM – 12:00 PM · 4:00 PM – 7:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Botón */}
                  <div className="flex items-center sm:items-end">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=10951+N+Town+Center+Drive+Highland+Utah+84003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1a3a6e] to-[#2a5298] text-white font-semibold text-sm rounded-xl hover:scale-105 transition-transform shadow-lg shadow-[#1a3a6e]/20"
                    >
                      <Navigation size={16} />
                      Cómo llegar
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============================================
            CTA FINAL
        ============================================ */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-[#1a3a6e] via-[#0d2240] to-[#0d1b2a] relative overflow-hidden">
          {/* Ambient effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffd700]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#c41e3a]/10 rounded-full blur-[100px]" />
          </div>

          {/* Decorative stars */}
          <div className="absolute top-12 left-8 md:left-16 text-[#ffd700]/20">
            <Star size={40} fill="currentColor" className="float-animation" />
          </div>
          <div className="absolute bottom-12 right-8 md:right-16 text-[#ffd700]/20" style={{ animationDelay: '1s' }}>
            <Star size={60} fill="currentColor" className="float-animation" />
          </div>
          <div className="absolute top-1/2 right-1/4 text-[#ffd700]/10">
            <Star size={100} fill="currentColor" />
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                ¿Listo para dar el <br className="md:hidden" />
                <span className="shimmer-text italic">primer paso</span>?
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-body text-xl text-white/60 max-w-2xl mx-auto mb-12">
                Tu futuro en Estados Unidos comienza con una conversación.
                Agenda tu consulta hoy y descubre cómo podemos ayudarte.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="https://green-caterpillar-757909.hostingersite.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-[#ffd700] to-[#ffaa00] text-[#1a3a6e] font-bold px-10 md:px-14 py-5 md:py-6 rounded-full text-lg md:text-xl hover:scale-105 transition-transform shadow-2xl shadow-[#ffd700]/40 font-sans uppercase tracking-wider pulse-gold"
              >
                <Sparkles size={26} />
                ¡Agenda tu Consulta AHORA!
              </a>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-white/30 text-sm mt-10 font-sans tracking-[0.25em]">
                YOUR PATH TO SUCCESS IN THE USA
              </p>
            </Reveal>

            {/* Back to Home */}
            <Reveal delay={0.5}>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors mt-10 font-sans text-sm group"
              >
                <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                Volver al Inicio
              </Link>
            </Reveal>
          </div>
        </section>

      </div>
    </>
  );
};
