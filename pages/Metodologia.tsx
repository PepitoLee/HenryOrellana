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

const inteligencias = [
  {
    numero: 1,
    icon: Sun,
    title: "Espiritual",
    frase: "Recordar quién eres y por qué estás aquí",
    resultado: "Sentido de vida y fe",
    color: "from-amber-500 to-orange-600",
    descripcion: "La base funcional de todas las demás inteligencias. La inteligencia no tiene principio ni fin, viene de Dios."
  },
  {
    numero: 2,
    icon: Brain,
    title: "Mental",
    frase: "Aprender a pensar y a crecer",
    resultado: "Disciplina y metas",
    color: "from-blue-500 to-indigo-600",
    descripcion: "Desarrolla la capacidad de establecer objetivos claros, mantener el enfoque y cultivar hábitos de crecimiento continuo."
  },
  {
    numero: 3,
    icon: Dumbbell,
    title: "Física",
    frase: "Cuidar el cuerpo, la base del éxito",
    resultado: "Vitalidad y dominio propio",
    color: "from-green-500 to-emerald-600",
    descripcion: "El cuerpo es el templo donde habita todo lo demás. Sin salud física, las otras inteligencias no pueden manifestarse plenamente."
  },
  {
    numero: 4,
    icon: Heart,
    title: "Emocional",
    frase: "Dominar el corazón antes que el mundo",
    resultado: "Autocontrol y resiliencia",
    color: "from-rose-500 to-pink-600",
    descripcion: "Aprende a gestionar tus emociones, responder en lugar de reaccionar, y construir fortaleza interior ante la adversidad."
  },
  {
    numero: 5,
    icon: Users,
    title: "Social",
    frase: "Conectar y liderar con empatía",
    resultado: "Relaciones sanas",
    color: "from-purple-500 to-violet-600",
    descripcion: "Desarrolla habilidades de comunicación efectiva, liderazgo servicial y la capacidad de construir comunidades significativas."
  },
  {
    numero: 6,
    icon: DollarSign,
    title: "Financiera",
    frase: "Dominar el dinero con propósito",
    resultado: "Libertad económica",
    color: "from-emerald-500 to-teal-600",
    descripcion: "Comprende cómo el dinero es una herramienta para cumplir tu propósito, no un fin en sí mismo. Gestiona recursos con sabiduría."
  },
  {
    numero: 7,
    icon: Cpu,
    title: "Tecnológica",
    frase: "Usar la tecnología para crear, no para perderse",
    resultado: "Innovación con propósito",
    color: "from-cyan-500 to-blue-600",
    descripcion: "Domina las herramientas digitales como instrumentos de creación, no de consumo pasivo. La tecnología al servicio de tu misión."
  }
];

const herramientas = [
  "Eneagrama de la Personalidad",
  "Programación Neurolingüística (PNL)",
  "Coaching para Padres",
  "Neurociencia Aplicada",
  "Psicología Positiva"
];

export const Metodologia: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 text-center mb-24">
        <Reveal>
          <span className="font-sans text-forest uppercase tracking-[0.2em] text-xs font-semibold">
            Metodología Patentada
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-5xl md:text-7xl text-charcoal mt-4 mb-6">
            GÉNESIS <span className="text-forest">17™</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-display text-2xl md:text-3xl text-charcoal italic mb-8">
            La Metodología Patentada que Unifica Espíritu, Ciencia y Tecnología
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="font-body text-lg text-warm-grey max-w-3xl mx-auto leading-relaxed">
            GÉNESIS 17™ es la ruta clara, profunda y moderna para formar adolescentes
            con <strong className="text-charcoal">propósito</strong>, <strong className="text-charcoal">carácter</strong> y <strong className="text-charcoal">visión global</strong>.
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
            <h2 className="font-display text-3xl md:text-4xl mb-6">El Orden Estructural</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              La inteligencia no tiene principio ni fin, <strong className="text-white">viene de Dios</strong>.
              El modelo establece que todo comienza con la <strong className="text-burgundy">Inteligencia Espiritual</strong>.
              Esta es la base funcional de las demás.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Las 7 Inteligencias Esenciales */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
              Las 7 Inteligencias <span className="text-forest">Esenciales</span>
            </h2>
            <p className="font-sans text-warm-grey max-w-2xl mx-auto">
              Cada inteligencia se construye sobre la anterior, formando un sistema integral de desarrollo
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
                          <span className="font-sans text-xs text-warm-grey uppercase tracking-wider block mb-1">Resultado</span>
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
                  Herramientas que Aprenderás
                </h2>
                <p className="font-body text-lg text-warm-grey leading-relaxed">
                  El programa combina las herramientas más poderosas de la ciencia del comportamiento
                  y el desarrollo personal:
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
                  El Reto Padres 3.0
                </h3>
                <p className="font-body text-warm-grey mb-6 leading-relaxed">
                  Un programa de transformación personal de <strong className="text-charcoal">60 días</strong> diseñado
                  para padres que desean guiar a sus hijos adolescentes en la nueva era digital.
                </p>
                <blockquote className="border-l-4 border-forest pl-4 italic text-charcoal font-display text-xl mb-6">
                  "El cambio comienza contigo, no con tu hijo."
                </blockquote>
                <p className="font-sans text-sm text-warm-grey">
                  El reto está dividido en 2 grandes etapas y no necesitas conocimientos previos.
                  Solo necesitas disposición para transformarte.
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
              Aplica esta metodología en tu familia
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Descubre cómo GÉNESIS 17™ puede transformar la relación con tus hijos
              y prepararlos para un futuro con propósito.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-charcoal px-8 py-4 font-sans text-sm tracking-widest hover:bg-cream transition-colors inline-flex items-center justify-center gap-2"
              >
                DESCUBRE EL RETO PADRES 3.0 <ArrowRight size={16} />
              </Link>
              <Link
                to="/ceo-junior"
                className="border-2 border-white text-white px-8 py-4 font-sans text-sm tracking-widest hover:bg-white hover:text-charcoal transition-colors"
              >
                EXPLORAR CEO JUNIOR
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
