import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import {
  Rocket,
  Lightbulb,
  Shield,
  Target,
  Users,
  Cpu,
  DollarSign,
  Brain,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const pilares = [
  {
    icon: DollarSign,
    title: "Inteligencia Financiera",
    subtitle: "Dominar el dinero con propósito",
    description: "Aprenderá a dominar el dinero con propósito, entendiendo la gestión de riesgos y la mentalidad de abundancia responsable.",
    color: "from-green-600 to-green-800"
  },
  {
    icon: Cpu,
    title: "Inteligencia Tecnológica",
    subtitle: "Crear, no perderse",
    description: "Dejará de usar la tecnología para perderse y empezará a usarla para crear, creando contenido y seguridad digital.",
    color: "from-blue-600 to-blue-800"
  },
  {
    icon: Brain,
    title: "Inteligencia Mental y Espiritual",
    subtitle: "Disciplina y propósito",
    description: "Fortalecerá la disciplina, la fijación de metas y el sentido de misión, alineando sus decisiones con su propósito eterno.",
    color: "from-purple-600 to-purple-800"
  }
];

const competencias = [
  "Competencias digitales avanzadas",
  "Pensamiento innovador y creativo",
  "Uso consciente de la Inteligencia Artificial",
  "Habilidades reales de emprendimiento online",
  "Liderazgo con valores cristianos",
  "Visión global y propósito eterno"
];

export const CEOJunior: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Reveal>
              <span className="font-sans text-forest uppercase tracking-[0.2em] text-xs font-semibold">
                Para la Generación Z
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-5xl md:text-6xl text-charcoal leading-tight">
                CEO Junior: <span className="italic text-forest">Forjando a la Próxima Generación</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-xl text-warm-grey leading-relaxed">
                de Empresarios Digitales con <strong className="text-charcoal">Propósito Eterno</strong>.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-body text-lg text-warm-grey leading-relaxed border-l-4 border-forest pl-6">
                Esta es la comunidad que prepara a la Generación Z para ir más allá de la escuela tradicional.
                En CEO Junior, les proporcionamos el mapa, las herramientas y la mentalidad para convertirse
                en líderes que no solo ganan dinero, sino que también <strong>dejan un legado</strong>.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="bg-forest text-white px-8 py-4 font-sans text-sm tracking-widest hover:bg-charcoal transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  <Rocket size={18} />
                  EXPLORAR PROGRAMAS
                </Link>
                <Link
                  to="/metodologia"
                  className="border-2 border-charcoal text-charcoal px-8 py-4 font-sans text-sm tracking-widest hover:bg-charcoal hover:text-white transition-colors text-center"
                >
                  CONOCER GÉNESIS 17™
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="relative">
            <div className="aspect-square bg-gradient-to-br from-forest to-charcoal rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/ceojuniorhero/600/600"
                alt="CEO Junior - Jóvenes Emprendedores"
                className="w-full h-full object-cover mix-blend-overlay opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Sparkles size={64} className="mx-auto mb-6 opacity-90" />
                  <h3 className="font-display text-3xl italic mb-2">Empresarios del Futuro</h3>
                  <p className="font-sans text-sm text-white/80 tracking-wider uppercase">Con Propósito Eterno</p>
                </div>
              </div>
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
            <h2 className="font-display text-3xl md:text-4xl mb-8">Nuestro Enfoque</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Desarrollamos <strong className="text-white">competencias digitales</strong>,
              <strong className="text-white"> pensamiento innovador</strong>,
              <strong className="text-white"> uso consciente de la IA</strong> y
              <strong className="text-white"> habilidades reales de emprendimiento online</strong>.
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

      {/* Pilares de GÉNESIS 17™ Aplicados */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="font-sans text-forest uppercase tracking-[0.2em] text-xs font-semibold">
              Metodología Aplicada
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-4 mb-4">
              Pilares de <span className="text-forest">GÉNESIS 17™</span> en CEO Junior
            </h2>
            <p className="font-sans text-warm-grey max-w-2xl mx-auto">
              Las inteligencias clave que transformarán a tu hijo en un líder con propósito
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

      {/* Visión */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="space-y-6">
                <Target className="text-forest" size={48} />
                <h2 className="font-display text-3xl md:text-4xl text-charcoal">
                  Nuestra Visión
                </h2>
                <p className="font-body text-lg text-warm-grey leading-relaxed">
                  CEO Junior aspira a ser la <strong className="text-charcoal">comunidad más grande de jóvenes
                  emprendedores</strong> de todo el mundo, formando empresarios digitales con
                  <strong className="text-charcoal"> valores cristianos</strong>,
                  <strong className="text-charcoal"> propósito eterno</strong> y
                  <strong className="text-charcoal"> habilidades del siglo XXI</strong>.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-cream p-8 rounded-sm">
                <blockquote className="font-display text-2xl italic text-charcoal leading-relaxed">
                  "Preparamos líderes que no solo ganan dinero, sino que también dejan un legado."
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
            <h2 className="font-display text-3xl md:text-4xl mb-6">La Solución Integral</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
              <strong className="text-white">Padres 3.0</strong> es el programa de padres conscientes, y
              <strong className="text-white"> CEO Junior</strong> es el programa para adolescentes con visión
              emprendedora digital. Juntos, forman el ecosistema completo para transformar familias.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/metodologia"
                className="bg-white text-charcoal px-8 py-4 font-sans text-sm tracking-widest hover:bg-cream transition-colors inline-flex items-center justify-center gap-2"
              >
                CONOCER PADRES 3.0 <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 font-sans text-sm tracking-widest hover:bg-white hover:text-charcoal transition-colors"
              >
                QUIERO QUE MI HIJO SEA UN CEO JUNIOR
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
