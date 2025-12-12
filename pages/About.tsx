import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { CheckCircle2, Award, GraduationCap, Heart, ArrowRight } from 'lucide-react';

const credenciales = [
  { icon: GraduationCap, text: "Licenciatura en Administración de Empresas" },
  { icon: GraduationCap, text: "MBA (Maestría en Administración de Negocios)" },
  { icon: Award, text: "Diplomado en Gerencia - Universidad de Harvard" },
  { icon: Award, text: "Coach de Vida certificado por la Asociación Mundial de Coaches de EE. UU." },
];

const especialidades = [
  "Eneagrama de la Personalidad",
  "Programación Neurolingüística (PNL)",
  "Coaching para Padres",
  "Neurociencia Aplicada",
  "Psicología Positiva",
];

export const About: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <Reveal>
          <span className="font-sans text-forest uppercase tracking-[0.2em] text-xs font-semibold">
            Conoce al Autor
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-5xl md:text-7xl text-charcoal mt-4 mb-6">
            Henry Orellana D.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-display text-xl md:text-2xl text-forest italic">
            Empresario Digital con Propósito y Creador del Movimiento GÉNESIS 17™
          </p>
        </Reveal>
      </div>

      {/* Image & Intro */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
        <Reveal>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/henryabout/800/1000"
              alt="Henry Orellana D."
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 object-cover shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-forest/30"></div>
          </div>
        </Reveal>
        <div className="space-y-6">
           <Reveal delay={0.2}>
             <h2 className="font-display text-3xl text-charcoal flex items-center gap-3">
               <Heart className="text-forest" size={28} />
               Mi Misión
             </h2>
           </Reveal>
           <Reveal delay={0.3}>
             <p className="font-body text-lg text-charcoal leading-relaxed">
               <strong className="text-forest">Soy un empresario digital con propósito</strong>, dedicado a hacer todo lo posible por ayudar a la <strong>Generación Z</strong> a convertirse en empresarios digitales con <em>valores cristianos</em>, <em>propósito eterno</em> y <em>habilidades del siglo XXI</em>.
             </p>
           </Reveal>
           <Reveal delay={0.4}>
             <p className="font-body text-warm-grey leading-relaxed border-l-4 border-forest pl-4 py-2 bg-cream">
               ¿Amas a tu hijo, pero te sientes confundido sobre cómo guiarlo en el mundo de hoy? Yo estuve ahí: pasé de tenerlo todo a buscar monedas en la cama, hasta que entendí que <strong className="text-charcoal">ellos no eran el problema</strong>. El cambio debía comenzar en mí.
             </p>
           </Reveal>
           <Reveal delay={0.5}>
             <blockquote className="font-display text-2xl italic text-forest">
               "Ellos no son el problema. Si tú cambias, todo cambia."
             </blockquote>
           </Reveal>
        </div>
      </section>

      {/* La Solución Integral */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">La Solución Integral</h2>
            <p className="font-body text-white/80 text-lg">Padres e Hijos transformados juntos</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-burgundy/50 transition-colors">
                <h3 className="font-display text-2xl text-burgundy mb-4">Padres 3.0</h3>
                <p className="font-body text-white/80 mb-4">
                  Empoderar a los padres para que sean los guías que sus hijos necesitan en la era digital.
                </p>
                <Link to="/metodologia" className="inline-flex items-center text-burgundy font-sans text-sm uppercase tracking-wider hover:text-white transition-colors">
                  Conocer más <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-burgundy/50 transition-colors">
                <h3 className="font-display text-2xl text-burgundy mb-4">CEO Junior</h3>
                <p className="font-body text-white/80 mb-4">
                  Formar a los jóvenes para convertirse en la comunidad más grande de emprendedores del mundo.
                </p>
                <Link to="/ceo-junior" className="inline-flex items-center text-burgundy font-sans text-sm uppercase tracking-wider hover:text-white transition-colors">
                  Explorar <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.3} className="text-center mt-12">
            <p className="font-body text-white/60">
              Todo se articula a través de mi metodología patentada: <strong className="text-burgundy">GÉNESIS 17™</strong>
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
                <h2 className="font-display text-3xl text-charcoal mb-8">Formación Académica</h2>
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
                <h2 className="font-display text-3xl text-charcoal mb-8">Especialidades</h2>
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
              Mi Metodología
            </span>
            <h2 className="font-display text-4xl text-charcoal mt-4 mb-4">
              GÉNESIS <span className="text-forest">17™</span>
            </h2>
            <p className="font-body text-warm-grey max-w-2xl mx-auto">
              La ruta clara, profunda y moderna para formar adolescentes con propósito, carácter y visión global.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { title: "Espiritual", desc: "Sentido de vida y fe" },
              { title: "Mental", desc: "Disciplina y metas" },
              { title: "Emocional", desc: "Autocontrol y resiliencia" },
              { title: "Física", desc: "Vitalidad y dominio propio" },
              { title: "Social", desc: "Relaciones sanas" },
              { title: "Financiera", desc: "Libertad económica" },
              { title: "Tecnológica", desc: "Innovación con propósito" },
            ].map((item, idx) => (
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
              EXPLORAR GÉNESIS 17™ <ArrowRight size={16} className="ml-2" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
