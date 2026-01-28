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
  Star,
  Building2,
  Smartphone,
  Headphones,
  GraduationCap,
  LifeBuoy,
  BarChart3,
  Globe,
  Zap,
  Crown
} from 'lucide-react';
import { RippleButton, MagneticButton, ShineButton, FillSlideButton } from '../components/AnimatedButtons';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEO/SEOHead';
import { OptimizedImage } from '../components/OptimizedImage';

export const CEOJunior: React.FC = () => {
  const { t } = useLanguage();

  // CEO Junior Apps - Las 6 "Apps" del Sistema
  const ceoJuniorApps = [
    {
      icon: Building2,
      name: 'StarEmpresa',
      subtitle: 'El Diferencial Harvard',
      description: 'No jugamos a la tiendita. Analizamos empresas reales (Amazon, Tesla, Apple) usando la metodología del caso de Harvard. Descodificamos su estructura para que tu hijo instale el pensamiento empresarial de élite en su mente.',
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Smartphone,
      name: 'StarEduca',
      subtitle: 'La Fábrica de Recursos',
      description: 'Formación técnica para convertirse en Empresario Digital. Aquí aprenden a crear y vender productos digitales para generar ingresos reales y ayudar a la economía familiar desde jóvenes.',
      color: "from-green-600 to-green-800"
    },
    {
      icon: Brain,
      name: 'StarLíderes',
      subtitle: 'Modelado de Éxito',
      description: 'Dime a quién admiras y te diré quién serás. Estudiamos la psicología y perseverancia de los líderes que cambiaron el mundo, para que tu hijo tenga referentes de altura, no influencers vacíos.',
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: BookOpen,
      name: 'StarBooks',
      subtitle: 'Mentalidad Acelerada',
      description: 'Libros de desarrollo personal traducidos al lenguaje Gen Z. Metodología de micro-aprendizaje moderna, corta y potente. Leen menos paja, absorben más sabiduría.',
      color: "from-orange-600 to-orange-800"
    },
    {
      icon: Headphones,
      name: 'StarVoice',
      subtitle: 'Combustible Diario',
      description: 'Su dosis diaria de inspiración. Audios, historias y relatos para empezar el día con propósito y guía moral.',
      color: "from-pink-600 to-pink-800"
    },
    {
      icon: Globe,
      name: 'English Pre-U',
      subtitle: 'El Puente Global',
      description: 'Inglés con propósito académico. Los preparamos para el estándar universitario internacional (el camino a BYU/Ensign).',
      color: "from-cyan-600 to-cyan-800"
    }
  ];

  // Padres 3.0 - Las Herramientas de Mando
  const padresTools = [
    {
      icon: GraduationCap,
      name: 'StarEduca Padres',
      subtitle: 'Escuela de Mentores',
      description: 'El manual que no trajo tu hijo. Herramientas de crianza moderna, neurociencia y comunicación para guiar a la nueva generación sin conflictos.',
      color: "from-blue-600 to-indigo-700"
    },
    {
      icon: LifeBuoy,
      name: 'StarVoice Expert',
      subtitle: 'Soporte de Crisis',
      description: 'No estás solo. Acceso a profesionales digitales (psicólogos, coaches) para resolver los desafíos duros de la adolescencia en tiempo real.',
      color: "from-red-600 to-rose-700"
    },
    {
      icon: BarChart3,
      name: 'Dashboard de Progreso',
      subtitle: 'La Torre de Control',
      description: 'Visualiza el crecimiento de tu hijo. Mira qué libros lee, qué negocios crea y celebra sus victorias. Supervisión transparente que genera confianza, no control.',
      color: "from-green-600 to-emerald-700"
    },
    {
      icon: Globe,
      name: 'English Together',
      subtitle: 'Crecimiento Compartido',
      description: 'Aprende inglés a la par de tu hijo. El ejemplo arrastra más que la palabra.',
      color: "from-teal-600 to-cyan-700"
    }
  ];

  return (
    <>
      <SEOHead
        title="StarbizAcademy | CEO Junior + Padres 3.0 - El Ecosistema Familiar"
        description="Un Solo Universo. Dos Plataformas Sincronizadas. CEO Junior para adolescentes + Padres 3.0 para la familia. Metodología Harvard aplicada."
        url="/ceo-junior"
      />
      <div className="w-full pt-32 pb-20">

        {/* ========== HERO SECTION ========== */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="text-center space-y-8">
            <Reveal>
              <span className="text-6xl block mb-4">🌌</span>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-sans text-forest uppercase tracking-[0.2em] text-xs font-semibold">
                El Ecosistema Familiar
              </span>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="font-display text-5xl md:text-7xl text-charcoal leading-tight">
                Starbiz<span className="italic text-forest">Academy</span>
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-body text-2xl text-warm-grey leading-relaxed max-w-2xl mx-auto">
                Un Solo Universo. Dos Plataformas Sincronizadas.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="bg-cream p-8 rounded-sm max-w-3xl mx-auto border-l-4 border-forest">
                <p className="font-body text-lg text-charcoal leading-relaxed">
                  <span className="text-2xl mr-2">💎</span>
                  "La mayoría separa a la familia: el hijo estudia por allá y el padre trabaja por acá.
                  En <strong className="text-forest">Starbiz</strong>, unimos el universo.
                  Creamos un ecosistema digital donde el <strong>adolescente se convierte en CEO</strong> y
                  el <strong>padre en su mejor Mentor</strong>, conectados por la misma visión."
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========== PILAR 1: CEO JUNIOR ========== */}
        <section className="py-24 bg-charcoal text-white">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="text-center mb-16">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wider mb-6">
                🚀 PILAR 1
              </span>
              <h2 className="font-display text-4xl md:text-5xl mb-4">CEO Junior</h2>
              <p className="font-sans text-white/70 text-xl mb-2">La Plataforma del Adolescente</p>
              <p className="font-sans text-burgundy font-semibold">⭐ Gen Z - La mejor generación de la historia</p>
              <p className="font-body text-white/80 mt-4 max-w-xl mx-auto">
                <strong className="text-white">El Objetivo:</strong> Ser Industriosos y crear recursos mientras estudian.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="font-display text-2xl text-center text-white/70 mb-12">
                📱 Las "Apps" del Sistema — El Menú de Éxito
              </h3>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ceoJuniorApps.map((app, idx) => (
                <Reveal key={idx} delay={idx * 0.08}>
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-white/10 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${app.color} flex items-center justify-center mb-6`}>
                      <app.icon className="text-white" size={28} />
                    </div>
                    <h4 className="font-display text-2xl text-white mb-1">{app.name}</h4>
                    <p className="font-sans text-burgundy text-sm uppercase tracking-wider mb-4">{app.subtitle}</p>
                    <p className="font-body text-white/70 text-sm leading-relaxed flex-grow">{app.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Harvard Badge */}
            <Reveal delay={0.5}>
              <div className="mt-16 text-center bg-gradient-to-r from-burgundy/20 to-burgundy/10 p-6 rounded-sm border border-burgundy/30">
                <GraduationCap className="mx-auto mb-4 text-burgundy" size={32} />
                <p className="font-sans text-burgundy font-semibold">
                  🎓 StarEmpresa usa metodología Harvard — Respaldado por la formación de Henry Orellana en Harvard Business School
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========== PILAR 2: PADRES 3.0 ========== */}
        <section className="py-24 bg-cream-dark">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="text-center mb-16">
              <span className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wider mb-6">
                👨‍👩‍👧‍👦 PILAR 2
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">Padres 3.0</h2>
              <p className="font-sans text-warm-grey text-xl mb-2">La Plataforma de Soporte</p>
              <p className="font-sans text-forest font-semibold">🛰️ Tú orbitas, no aplastas</p>
              <p className="font-body text-warm-grey mt-4 max-w-xl mx-auto">
                <strong className="text-charcoal">El Objetivo:</strong> Crianza moderna y Supervisión Inteligente.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="font-display text-2xl text-center text-warm-grey mb-12">
                🛠️ Las Herramientas de Mando
              </h3>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {padresTools.map((tool, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tool.color} flex items-center justify-center mb-6`}>
                      <tool.icon className="text-white" size={28} />
                    </div>
                    <h4 className="font-display text-2xl text-charcoal mb-1">{tool.name}</h4>
                    <p className="font-sans text-forest text-sm uppercase tracking-wider mb-4">{tool.subtitle}</p>
                    <p className="font-body text-warm-grey text-sm leading-relaxed flex-grow">{tool.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========== MODELO DE NEGOCIO - FAMILY PASS ========== */}
        <section className="py-24 bg-charcoal text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <DollarSign className="mx-auto mb-6 text-burgundy" size={48} />
              <h2 className="font-display text-4xl md:text-5xl mb-4">
                Una Membresía. Acceso Total.
              </h2>
              <p className="font-sans text-burgundy text-xl font-semibold mb-8">
                El "Family Pass" de la Educación Empresarial
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-burgundy/30 mb-8">
                <p className="font-body text-xl text-white/90 leading-relaxed">
                  Pagas una suscripción <strong>(Mensual/Anual)</strong> y obtienes
                  <span className="text-burgundy"> llave en mano </span>
                  para el futuro de tu hijo y tu tranquilidad como padre.
                </p>
                <p className="font-sans text-white/60 mt-4">
                  Sin cobros ocultos. Educación de élite a precio de suscripción.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap justify-center items-center gap-4 text-lg">
                <div className="bg-white/10 px-6 py-3 rounded-sm flex items-center gap-2">
                  <span className="text-2xl">👦</span>
                  <span className="font-sans font-semibold">CEO Junior</span>
                </div>
                <span className="text-burgundy text-2xl font-bold">+</span>
                <div className="bg-white/10 px-6 py-3 rounded-sm flex items-center gap-2">
                  <span className="text-2xl">👨‍👩‍👧</span>
                  <span className="font-sans font-semibold">Padres 3.0</span>
                </div>
                <span className="text-burgundy text-2xl font-bold">=</span>
                <div className="bg-gradient-to-r from-burgundy to-rose-700 px-6 py-3 rounded-sm flex items-center gap-2">
                  <Crown className="text-white" size={24} />
                  <span className="font-sans font-bold">Family Pass</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========== MANIFIESTO GEN Z ========== */}
        <section className="py-24 bg-forest text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <Zap className="mx-auto mb-6 opacity-80" size={48} />
              <h2 className="font-display text-3xl md:text-4xl mb-8 leading-relaxed">
                Dicen que son frágiles.<br />
                <span className="opacity-80">Nosotros decimos que son</span><br />
                <strong className="text-burgundy">la mejor generación que ha existido.</strong>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="font-body text-xl text-white/80 leading-relaxed mb-8">
                Son rápidos, creativos y globales. Solo les falta una cosa: <strong className="text-white">Dirección.</strong>
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-body text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-8">
                En <strong className="text-white">Starbiz Academy</strong>, no les damos entretenimiento; les damos
                <strong className="text-white"> Herramientas de Industria</strong>. Usando el <strong className="text-white">Método del Caso (Harvard)</strong> y
                tecnología propia, tu hijo aprenderá a pensar como CEO y a generar ingresos digitales
                <strong className="text-burgundy"> hoy</strong>, no en 10 años.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="font-display text-2xl italic">
                Bienvenido al Ecosistema donde las Familias Crecen Juntas.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ========== CTA FINAL ========== */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Reveal>
              <Rocket className="mx-auto mb-6 text-forest" size={56} />
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6">
                ¿Listo para el despegue?
              </h2>
              <p className="font-body text-lg text-warm-grey leading-relaxed mb-10">
                Únete al ecosistema Starbiz y transforma el futuro de tu familia.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <RippleButton
                  to="/contact"
                  className="bg-forest text-white px-10 py-5 font-sans text-sm tracking-widest hover:bg-charcoal transition-colors"
                >
                  <Rocket size={18} />
                  Comenzar Ahora
                </RippleButton>
                <MagneticButton
                  to="/metodologia"
                  className="border-2 border-charcoal text-charcoal px-10 py-5 font-sans text-sm tracking-widest hover:bg-charcoal hover:text-white transition-colors"
                >
                  Ver Metodología GÉNESIS i7™
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-sans text-sm text-warm-grey mt-8">
                ¿Preguntas? Escríbenos a{' '}
                <a href="mailto:info@starbizacademy.com" className="text-forest hover:underline">
                  info@starbizacademy.com
                </a>
              </p>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
};
