import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { BackToHub } from '../components/BackToHub';
import { SEOHead } from '../components/SEO/SEOHead';
import {
  Rocket, Brain, Heart, Dumbbell, Users, DollarSign, Cpu, Sun,
  Building2, Smartphone, Headphones, Globe, BookOpen, Star,
  GraduationCap, LifeBuoy, BarChart3, CheckCircle2, ArrowRight,
  Sparkles, Crown, Zap, MessageCircle
} from 'lucide-react';

// ─── CEO Junior Apps ───
const ceoJuniorApps = [
  { icon: Building2, name: 'StarEmpresa', subtitle: 'El Diferencial Harvard', description: 'Analizamos empresas reales (Amazon, Tesla, Apple) usando la metodología del caso de Harvard. Pensamiento empresarial de élite.', color: 'from-blue-600 to-blue-800' },
  { icon: Smartphone, name: 'StarEduca', subtitle: 'La Fábrica de Recursos', description: 'Formación técnica para crear y vender productos digitales. Ingresos reales desde jóvenes.', color: 'from-green-600 to-green-800' },
  { icon: Brain, name: 'StarLíderes', subtitle: 'Modelado de Éxito', description: 'Psicología y perseverancia de líderes que cambiaron el mundo. Referentes de altura, no influencers vacíos.', color: 'from-purple-600 to-purple-800' },
  { icon: BookOpen, name: 'StarBooks', subtitle: 'Mentalidad Acelerada', description: 'Libros de desarrollo personal en lenguaje Gen Z. Micro-aprendizaje moderno, corto y potente.', color: 'from-orange-600 to-orange-800' },
  { icon: Headphones, name: 'StarVoice', subtitle: 'Combustible Diario', description: 'Audios, historias y relatos para empezar el día con propósito y guía moral.', color: 'from-pink-600 to-pink-800' },
  { icon: Globe, name: 'English Pre-U', subtitle: 'El Puente Global', description: 'Inglés con propósito académico. Estándar universitario internacional.', color: 'from-cyan-600 to-cyan-800' },
];

// ─── Padres 3.0 Tools ───
const padresTools = [
  { icon: GraduationCap, name: 'StarEduca Padres', subtitle: 'Escuela de Mentores', description: 'Herramientas de crianza moderna, neurociencia y comunicación para guiar sin conflictos.', color: 'from-blue-600 to-indigo-700' },
  { icon: LifeBuoy, name: 'StarVoice Expert', subtitle: 'Soporte de Crisis', description: 'Acceso a psicólogos y coaches para resolver desafíos de la adolescencia en tiempo real.', color: 'from-red-600 to-rose-700' },
  { icon: BarChart3, name: 'Dashboard de Progreso', subtitle: 'La Torre de Control', description: 'Visualiza el crecimiento de tu hijo. Supervisión transparente que genera confianza.', color: 'from-green-600 to-emerald-700' },
  { icon: Globe, name: 'English Together', subtitle: 'Crecimiento Compartido', description: 'Aprende inglés a la par de tu hijo. El ejemplo arrastra más que la palabra.', color: 'from-teal-600 to-cyan-700' },
];

// ─── GÉNESIS i7™ Inteligencias ───
const inteligencias = [
  { numero: 1, icon: Sun, title: 'Inteligencia Espiritual', frase: 'La vida tiene sentido y propósito', color: 'from-amber-500 to-orange-600' },
  { numero: 2, icon: Brain, title: 'Inteligencia Mental', frase: 'Cultiva tu pensamiento', color: 'from-blue-500 to-indigo-600' },
  { numero: 3, icon: Dumbbell, title: 'Inteligencia Física', frase: 'El cuerpo importa', color: 'from-green-500 to-emerald-600' },
  { numero: 4, icon: Heart, title: 'Inteligencia Emocional', frase: 'Siente con sabiduría', color: 'from-rose-500 to-pink-600' },
  { numero: 5, icon: Users, title: 'Inteligencia Social', frase: 'La conexión es fundamental', color: 'from-purple-500 to-violet-600' },
  { numero: 6, icon: DollarSign, title: 'Inteligencia Financiera', frase: 'El dinero es energía', color: 'from-emerald-500 to-teal-600' },
  { numero: 7, icon: Cpu, title: 'Inteligencia Tecnológica', frase: 'La tecnología amplifica el potencial', color: 'from-cyan-500 to-blue-600' },
];

// ─── Speaking Topics ───
const speakingTopics = [
  { icon: Users, title: 'Padres 3.0', description: 'Reconecta con tu adolescente en la era digital' },
  { icon: Rocket, title: 'CEO Junior', description: 'Forma al futuro líder desde la adolescencia' },
  { icon: Crown, title: 'Liderazgo Transformacional', description: 'Del liderazgo tradicional al liderazgo con propósito' },
];

const WHATSAPP_URL = 'https://wa.me/13854564470?text=Hola%20Henry%2C%20me%20interesa%20StarbizAcademy';

export const StarbizAcademy: React.FC = () => {
  return (
    <>
      <SEOHead
        title="StarbizAcademy | CEO Junior + Padres 3.0 · GÉNESIS i7™"
        description="El Ecosistema Familiar. CEO Junior para adolescentes + Padres 3.0 para la familia. Metodología Harvard + 7 Inteligencias."
        url="/starbiz-academy"
      />

      <style>{`
        @keyframes starbiz-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes starbiz-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      <BackToHub variant="dark" />

      <div className="w-full overflow-x-hidden bg-[#0f172a]">

        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Ambient */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#06b6d4]/15 rounded-full blur-[120px]" style={{ animation: 'starbiz-glow 8s ease-in-out infinite' }} />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8b5cf6]/10 rounded-full blur-[100px]" style={{ animation: 'starbiz-glow 8s ease-in-out infinite 3s' }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#06b6d4]/15 border border-[#06b6d4]/25 rounded-full text-[#06b6d4] text-xs font-bold uppercase tracking-[0.2em] mb-8">
                <Rocket size={14} />
                El Ecosistema Familiar
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[0.95]">
                Starbiz<span className="text-[#06b6d4]">Academy</span>
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
                Un Solo Universo. Dos Plataformas Sincronizadas.
              </p>
              <p className="text-white/30 text-base max-w-xl mx-auto mb-10">
                CEO Junior para adolescentes + Padres 3.0 para la familia. Respaldado por la metodología GÉNESIS i7™.
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#06b6d4] to-[#0891b2] text-white font-bold px-8 py-4 rounded-full text-base hover:scale-105 transition-transform shadow-xl shadow-[#06b6d4]/20"
                >
                  <MessageCircle size={20} />
                  Quiero Saber Más
                </a>
                <a
                  href="#genesis"
                  className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-sm font-medium"
                >
                  Ver Metodología
                  <ArrowRight size={16} />
                </a>
              </div>
            </Reveal>

            {/* Two pillars preview */}
            <Reveal delay={0.6}>
              <div className="grid grid-cols-2 gap-4 mt-16 max-w-md mx-auto">
                <a href="#ceojunior" className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all text-center group">
                  <Rocket size={24} className="text-[#06b6d4] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-white font-bold text-sm">CEO Junior</p>
                  <p className="text-white/30 text-xs">Adolescentes 14+</p>
                </a>
                <a href="#padres" className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all text-center group">
                  <Heart size={24} className="text-[#ec4899] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-white font-bold text-sm">Padres 3.0</p>
                  <p className="text-white/30 text-xs">Para la familia</p>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ════════════════════════════════════════
            GÉNESIS i7™
        ════════════════════════════════════════ */}
        <section id="genesis" className="py-20 md:py-28 bg-gradient-to-b from-[#0f172a] to-[#1e293b] relative">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="text-center mb-16">
              <img src="/images/genesis-i7-logo.png" alt="GÉNESIS i7™" className="w-24 h-24 mx-auto mb-6 opacity-90" />
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/15 border border-amber-500/25 rounded-full text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <Sparkles size={14} />
                Nuestra Metodología
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Las 7 Inteligencias de <span className="text-[#06b6d4]">GÉNESIS i7™</span>
              </h2>
              <p className="text-white/40 max-w-2xl mx-auto text-lg">
                "La inteligencia no tiene principio ni fin, viene de Dios. Todo comienza con la Inteligencia Espiritual."
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {inteligencias.map((intel, idx) => (
                <Reveal key={intel.numero} delay={idx * 0.06}>
                  <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all duration-300 group hover:-translate-y-1 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${intel.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <intel.icon size={20} className="text-white" />
                      </div>
                      <span className="text-white/20 font-mono text-xs">i{intel.numero}</span>
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1">{intel.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{intel.frase}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CEO JUNIOR - 6 Star Apps
        ════════════════════════════════════════ */}
        <section id="ceojunior" className="py-20 md:py-28 bg-[#1e293b] relative">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#06b6d4]/15 border border-[#06b6d4]/25 rounded-full text-[#06b6d4] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <Rocket size={14} />
                Pilar 1 · Adolescentes 14+
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                CEO <span className="text-[#06b6d4]">Junior</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto text-lg">
                6 aplicaciones diseñadas para instalar mentalidad empresarial desde la adolescencia
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ceoJuniorApps.map((app, idx) => (
                <Reveal key={app.name} delay={idx * 0.08}>
                  <div className="bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden hover:bg-white/[0.08] transition-all duration-300 group hover:-translate-y-1 h-full">
                    <div className={`flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r ${app.color}`}>
                      <app.icon size={18} className="text-white/80" />
                      <span className="text-white font-semibold text-sm">{app.name}</span>
                      <span className="text-white/40 text-xs ml-auto">{app.subtitle}</span>
                    </div>
                    <div className="p-5">
                      <p className="text-white/50 text-sm leading-relaxed">{app.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            PADRES 3.0
        ════════════════════════════════════════ */}
        <section id="padres" className="py-20 md:py-28 bg-gradient-to-b from-[#1e293b] to-[#0f172a] relative">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/15 border border-pink-500/25 rounded-full text-pink-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <Heart size={14} />
                Pilar 2 · Para la Familia
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Padres <span className="text-pink-400">3.0</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto text-lg">
                Herramientas de mando para la familia del futuro
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {padresTools.map((tool, idx) => (
                <Reveal key={tool.name} delay={idx * 0.1}>
                  <div className="flex gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all duration-300 group hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <tool.icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base">{tool.name}</h3>
                      <p className="text-[#06b6d4] text-xs font-medium mb-1">{tool.subtitle}</p>
                      <p className="text-white/40 text-sm leading-relaxed">{tool.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            FAMILY PASS
        ════════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-[#0f172a] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#06b6d4]/5 rounded-full blur-[150px]" />
          </div>

          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <Reveal className="text-center">
              <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-sm">
                <Star size={40} className="text-[#06b6d4] mx-auto mb-6" fill="currentColor" />
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                  Un Solo Pase. Toda la Familia.
                </h2>
                <p className="text-white/40 text-base md:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                  El <strong className="text-white">Family Pass</strong> incluye acceso completo a CEO Junior + Padres 3.0 bajo una sola suscripción. Padre e hijo crecen juntos.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                  <div className="text-center">
                    <Rocket size={28} className="text-[#06b6d4] mx-auto mb-2" />
                    <p className="text-white font-bold text-sm">CEO Junior</p>
                    <p className="text-white/30 text-xs">Para el adolescente</p>
                  </div>
                  <div className="text-[#06b6d4] text-2xl font-bold">+</div>
                  <div className="text-center">
                    <Heart size={28} className="text-pink-400 mx-auto mb-2" />
                    <p className="text-white font-bold text-sm">Padres 3.0</p>
                    <p className="text-white/30 text-xs">Para la familia</p>
                  </div>
                  <div className="text-[#06b6d4] text-2xl font-bold">=</div>
                  <div className="text-center">
                    <Crown size={28} className="text-amber-400 mx-auto mb-2" />
                    <p className="text-white font-bold text-sm">Family Pass</p>
                    <p className="text-white/30 text-xs">Todo incluido</p>
                  </div>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#06b6d4] to-[#0891b2] text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-xl shadow-[#06b6d4]/20"
                >
                  <MessageCircle size={20} />
                  Consultar Family Pass
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CONFERENCIAS / SPEAKING
        ════════════════════════════════════════ */}
        <section id="conferencias" className="py-20 md:py-28 bg-[#1e293b]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/15 border border-amber-500/25 rounded-full text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    <Zap size={14} />
                    Conferencias
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Henry en el <span className="text-[#06b6d4]">Escenario</span>
                  </h2>
                  <p className="text-white/40 text-base mb-8 leading-relaxed">
                    Conferencias que transforman. Desde auditorios corporativos hasta comunidades latinas.
                  </p>

                  <div className="space-y-4">
                    {speakingTopics.map((topic, idx) => (
                      <Reveal key={topic.title} delay={idx * 0.1}>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all group">
                          <div className="w-10 h-10 rounded-lg bg-[#06b6d4]/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <topic.icon size={20} className="text-[#06b6d4]" />
                          </div>
                          <div>
                            <h3 className="text-white font-bold text-sm">{topic.title}</h3>
                            <p className="text-white/40 text-xs">{topic.description}</p>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/speaking-hero.png"
                    alt="Henry Orellana - Conferencias"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CTA FINAL
        ════════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#06b6d4] via-[#0891b2] to-[#0e7490] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                ¿Listo para transformar a tu familia?
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
                Tu hijo tiene potencial de líder. Solo necesita el sistema correcto. Hablemos.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#0e7490] font-bold px-10 py-5 rounded-full text-lg hover:scale-105 transition-transform shadow-2xl"
              >
                <MessageCircle size={24} />
                Contactar a Henry
              </a>
            </Reveal>
          </div>
        </section>

        {/* ════════════════════════════════════════
            BRAND FOOTER
        ════════════════════════════════════════ */}
        <footer className="py-10 bg-[#0a0f1a] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[#06b6d4] font-bold text-xl mb-2">StarbizAcademy</p>
            <p className="text-white/30 text-xs mb-4">CEO Junior · Padres 3.0 · GÉNESIS i7™</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/25 hover:text-white/50 transition-colors text-xs uppercase tracking-widest group"
            >
              <ArrowRight size={12} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
              Orellana Group
            </Link>
            <p className="text-white/10 text-[10px] mt-6">
              © {new Date().getFullYear()} StarbizAcademy · Todos los derechos reservados
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};
