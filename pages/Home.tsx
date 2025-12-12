import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Brain, Target, Users, Sparkles, CheckCircle2, HelpCircle, ChevronDown } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const featuredLogos = ["Forbes", "TEDx", "HBR", "Entrepreneur", "Medium"];

const logrosReto = [
  { icon: Heart, text: "Recuperar la conexión emocional y disminuir conflictos." },
  { icon: Shield, text: "Poner límites desde el amor, no desde el miedo." },
  { icon: Brain, text: "Entender la personalidad de tu hijo y la tuya (Eneagrama)." },
  { icon: Target, text: "Prepararte para guiarlo hacia la libertad económica y la innovación con propósito." },
];

const faqItems = [
  {
    question: "¿Qué es exactamente el Reto Padres 3.0?",
    answer: "Es un programa de transformación personal de 60 días diseñado para padres que desean guiar a sus hijos adolescentes en la nueva era digital. Se basa en la premisa: \"El cambio comienza contigo, no con tu hijo\"."
  },
  {
    question: "¿En qué se basa la metodología del programa?",
    answer: "Se basa en la metodología patentada GÉNESIS 17™ y utiliza herramientas modernas que combinan ciencia, espiritualidad y desarrollo personal."
  },
  {
    question: "¿Qué herramientas específicas voy a aprender?",
    answer: "Aprenderás a aplicar Eneagrama de la Personalidad, Programación Neurolingüística (PNL), Coaching para Padres, Neurociencia Aplicada y Psicología Positiva."
  },
  {
    question: "¿Qué puedo esperar lograr con mi hijo en estos 60 días?",
    answer: "Podrás mejorar la comunicación con tus hijos, disminuir conflictos y recuperar la conexión emocional."
  },
  {
    question: "¿Cuál es el compromiso de tiempo?",
    answer: "El reto está dividido en 2 grandes etapas y dura 60 días."
  },
  {
    question: "¿Necesito tener conocimientos previos?",
    answer: "No necesitas conocimientos previos. Solo necesitas disposición para transformarte."
  },
  {
    question: "¿Quién es Jimy Henry Orellana Domínguez?",
    answer: "Es el autor de la metodología GÉNESIS 17™, un Coach de Vida certificado por la Asociación Mundial de Coaches de EE. UU. y un profesional con formación ejecutiva en Harvard."
  },
  {
    question: "¿Cómo se relaciona Padres 3.0 con CEO Junior?",
    answer: "Padres 3.0 es el programa de padres conscientes, y CEO Junior es el programa para adolescentes con visión emprendedora digital."
  },
];

export const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="w-full overflow-hidden">

      {/* Hero Section - Actualizado según PDF */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 bg-gradient-to-b from-cream to-cream-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

          <div className="lg:col-span-7 space-y-8 z-10">
             <Reveal delay={0.1}>
               <span className="font-sans text-forest uppercase tracking-[0.2em] text-xs font-semibold">
                 Empresario Digital con Propósito • Creador de GÉNESIS 17™
               </span>
             </Reveal>

             <Reveal delay={0.2}>
               <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-charcoal">
                 De la Desconexión a las <span className="text-forest italic">Mil Oportunidades</span>
               </h1>
             </Reveal>

             <Reveal delay={0.3}>
               <p className="font-body text-xl md:text-2xl text-warm-grey max-w-2xl leading-relaxed">
                 El mapa científico y espiritual que los padres de adolescentes necesitan en la era digital.
               </p>
             </Reveal>

             <Reveal delay={0.4}>
               <p className="font-sans text-sm md:text-base text-charcoal max-w-lg border-l-4 border-forest pl-4 py-2 bg-white/50">
                 Descubre <strong>GÉNESIS 17™</strong>, el único mapa creado por Henry Orellana D. que integra <em>Espiritualidad, Ciencia y Tecnología</em> para transformar a los padres y empoderar a sus hijos.
               </p>
             </Reveal>

             <Reveal delay={0.5} className="pt-4">
               <div className="flex flex-col sm:flex-row gap-4">
                 <Link to="/metodologia" className="bg-forest text-white px-8 py-4 font-sans text-sm tracking-widest hover:bg-charcoal transition-colors text-center flex items-center justify-center gap-2">
                   <Sparkles size={18} />
                   ¡COMIENZA HOY!
                 </Link>
                 <Link to="/ceo-junior" className="border-2 border-forest text-forest px-8 py-4 font-sans text-sm tracking-widest hover:bg-forest hover:text-white transition-colors text-center">
                   ÚNETE AL RETO PADRES 3.0
                 </Link>
               </div>
               <p className="text-xs text-warm-grey mt-3 font-sans">
                 Transforma tu Hogar en 60 Días
               </p>
             </Reveal>
          </div>

          <div className="lg:col-span-5 relative h-full flex justify-center lg:justify-end">
            <Reveal delay={0.4} className="relative w-full max-w-md aspect-[3/4]">
              <div className="absolute inset-0 bg-gray-200 overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/henry3/800/1000"
                  alt="Henry Orellana D."
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-forest opacity-50"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-forest opacity-50"></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-12 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center font-sans text-xs text-warm-grey uppercase tracking-widest mb-8">
            Como visto en
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
             {featuredLogos.map(logo => (
               <span key={logo} className="font-display text-2xl md:text-3xl font-bold text-gray-400">{logo}</span>
             ))}
          </div>
        </div>
      </section>

      {/* La Crisis y el Quiebre - Nueva sección según PDF */}
      <section className="py-24 px-6 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="font-sans text-burgundy uppercase tracking-[0.2em] text-xs font-semibold">
              La Realidad que Enfrentamos
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-8">
              El Amor <span className="italic text-burgundy">no Basta</span>: La Crisis Silenciosa de la Familia Moderna
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-xl text-white/80 leading-relaxed mb-8">
              ¿Amas a tu hijo, pero te sientes confundido sobre cómo guiarlo en el mundo de hoy?
              Yo estuve ahí: pasé de tenerlo todo a buscar monedas en la cama, hasta que entendí
              que <strong className="text-white">ellos no eran el problema</strong>. El cambio debía comenzar en mí.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <blockquote className="font-display text-2xl md:text-3xl italic text-burgundy border-l-4 border-burgundy pl-6 text-left max-w-2xl mx-auto">
              "Ellos no son el problema. Si tú cambias, todo cambia."
              <footer className="text-white/60 text-base mt-4 not-italic font-sans">— Henry Orellana D.</footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* El Reto Padres 3.0 - Nueva sección según PDF */}
      <section className="py-24 bg-cream-dark overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 md:order-1">
            <div className="relative group perspective-1000">
              <div className="relative w-64 h-96 mx-auto bg-forest shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-12">
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center border border-white/20">
                  <h3 className="font-display text-3xl text-white italic mb-2">Padres 3.0</h3>
                  <p className="font-sans text-white/80 text-xs tracking-widest uppercase mb-8">El Mapa de 60 Días</p>
                  <div className="w-12 h-1 bg-white/50 mb-8"></div>
                  <span className="font-display text-white text-lg">Henry Orellana D.</span>
                </div>
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-black/20"></div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 md:order-2 space-y-6">
            <Reveal delay={0.1}>
              <span className="bg-forest text-white px-4 py-2 text-xs font-bold tracking-widest">LA SOLUCIÓN</span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal leading-tight">
                Padres 3.0: El Mapa de 60 Días para ser el <span className="text-forest italic">Padre que tu Futuro CEO necesita</span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-body text-warm-grey text-lg leading-relaxed">
                Transformación garantizada en 60 días. Logros clave que alcanzarás:
              </p>
            </Reveal>

            <div className="space-y-4 pt-4">
              {logrosReto.map((logro, idx) => (
                <Reveal key={idx} delay={0.4 + idx * 0.1}>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow">
                    <logro.icon className="text-forest flex-shrink-0 mt-1" size={24} />
                    <p className="font-sans text-charcoal text-sm">{logro.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.8}>
              <Link to="/metodologia" className="inline-flex items-center bg-forest text-white px-8 py-4 font-sans text-sm tracking-widest hover:bg-charcoal transition-colors mt-6">
                QUIERO UNIRME A LA COMUNIDAD PADRES 3.0 <ArrowRight size={16} className="ml-2" />
              </Link>
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
                  Para tus Hijos
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-4xl md:text-5xl text-charcoal">
                  CEO Junior: <span className="italic text-forest">La Próxima Generación</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="font-body text-lg text-warm-grey leading-relaxed">
                  Esta es la comunidad que prepara a la Generación Z para ir más allá de la escuela tradicional.
                  En CEO Junior, les proporcionamos el mapa, las herramientas y la mentalidad para convertirse
                  en líderes que no solo ganan dinero, sino que también <strong>dejan un legado</strong>.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="bg-cream px-4 py-2 text-xs font-sans text-charcoal">Competencias Digitales</span>
                  <span className="bg-cream px-4 py-2 text-xs font-sans text-charcoal">Pensamiento Innovador</span>
                  <span className="bg-cream px-4 py-2 text-xs font-sans text-charcoal">Uso Consciente de IA</span>
                  <span className="bg-cream px-4 py-2 text-xs font-sans text-charcoal">Emprendimiento Online</span>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <Link to="/ceo-junior" className="inline-flex items-center text-forest border-b-2 border-forest pb-1 hover:text-charcoal hover:border-charcoal transition-colors font-sans uppercase text-sm tracking-wide mt-4">
                  Quiero que mi hijo sea un CEO Junior <ArrowRight size={16} className="ml-2" />
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.3} className="relative">
              <div className="aspect-square bg-gradient-to-br from-forest to-charcoal rounded-sm overflow-hidden">
                <img
                  src="https://picsum.photos/seed/ceojunior/600/600"
                  alt="CEO Junior"
                  className="w-full h-full object-cover mix-blend-overlay opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Users size={64} className="mx-auto mb-4 opacity-80" />
                    <p className="font-display text-2xl italic">Empresarios del Futuro</p>
                  </div>
                </div>
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
               <h2 className="font-display text-4xl md:text-5xl text-charcoal">Reflexiones</h2>
             </Reveal>
             <Reveal delay={0.2}>
               <Link to="/blog" className="hidden md:block font-sans text-sm text-warm-grey hover:text-forest transition-colors">
                 Ver todos los artículos
               </Link>
             </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "La crisis silenciosa de la familia moderna", category: "Familia" },
              { title: "Inteligencia Espiritual en la era de la IA", category: "GÉNESIS 17™" },
              { title: "CEO Junior: El futuro del emprendimiento", category: "Emprendimiento" }
            ].map((article, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link to="/blog" className="group block space-y-4">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src={`https://picsum.photos/seed/article${i+1}/600/400`}
                      alt={article.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-sans text-forest uppercase tracking-wider">
                    <span>{article.category}</span>
                    <span className="w-1 h-1 rounded-full bg-forest"></span>
                    <span>5 min lectura</span>
                  </div>
                  <h3 className="font-display text-2xl text-charcoal group-hover:text-forest transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="font-body text-warm-grey text-sm line-clamp-2">
                    Explorando cómo la metodología GÉNESIS 17™ puede cambiar la dinámica familiar desde la raíz...
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Nueva según PDF */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-16">
            <HelpCircle className="mx-auto mb-4 text-forest" size={48} />
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">Preguntas Frecuentes</h2>
            <p className="font-sans text-warm-grey">Todo lo que necesitas saber sobre el Reto Padres 3.0</p>
          </Reveal>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
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
            <h2 className="font-display text-4xl md:text-6xl">Ideas que transforman</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light">
              Únete a más de 10,000 padres y educadores que reciben mis estrategias semanales para criar hijos con propósito.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <form className="max-w-md mx-auto mt-8 flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 bg-white/10 border border-white/20 px-6 py-4 placeholder-white/50 text-white focus:outline-none focus:bg-white/20 font-sans"
              />
              <button className="bg-cream text-charcoal px-8 py-4 font-sans font-bold tracking-wide hover:bg-white transition-colors">
                UNIRME
              </button>
            </form>
            <p className="mt-4 text-xs text-white/40 font-sans">
              Respetamos tu privacidad. Sin spam.
            </p>
          </Reveal>
        </div>
      </section>

    </div>
  );
};
