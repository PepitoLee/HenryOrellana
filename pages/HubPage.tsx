import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SEOHead } from '../components/SEO/SEOHead';
import { Rocket, Star, Instagram, Youtube, Facebook, FileText, ClipboardCheck, PlayCircle, ChevronDown, Sparkles, BookOpen, Users } from 'lucide-react';

const SOCIAL_LINKS = [
  { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/henryorellanaoficial/', color: '236, 72, 153' },
  { icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@HenryOrellanaOficial', color: '239, 68, 68' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@henryorellanaoficial', color: '34, 211, 238' },
  { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61581737189432', color: '59, 130, 246' },
];

const TikTokIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z" />
  </svg>
);

// Estrellas decorativas de fondo (posiciones fijas para consistencia)
const STARS = [
  { top: '12%', left: '18%', size: 2, delay: '0s' },
  { top: '20%', left: '82%', size: 3, delay: '1.2s' },
  { top: '35%', left: '8%', size: 2, delay: '2.4s' },
  { top: '48%', left: '90%', size: 2, delay: '0.6s' },
  { top: '62%', left: '14%', size: 3, delay: '1.8s' },
  { top: '72%', left: '78%', size: 2, delay: '3s' },
  { top: '85%', left: '30%', size: 2, delay: '0.9s' },
  { top: '28%', left: '50%', size: 2, delay: '2.1s' },
];

// Sub-servicios de UsaLatino Prime.
const USALATINO_SERVICES = [
  { label: 'Landing de Servicios', description: 'Servicios migratorios', icon: FileText, url: 'https://www.usalatinoprime.com/', external: true },
  { label: 'Evaluación de tu Asilo', description: 'Conoce tus posibilidades', icon: ClipboardCheck, url: 'https://juez.vercel.app/pro', external: true },
  { label: 'Plataforma de Videos', description: 'Preparación para tu asilo', icon: PlayCircle, url: 'https://aplicaci-n-three.vercel.app/', external: true },
  { label: 'Página Principal', description: 'UsaLatino Prime', icon: Star, url: '/usalatino-prime', external: false },
];

// Sub-servicios de StarbizAcademy.
const STARBIZ_SERVICES = [
  { label: 'Starbooks', description: 'Biblioteca de recursos', icon: BookOpen, url: '#', external: true },
  { label: 'Comunidad', description: 'Únete a la comunidad', icon: Users, url: 'https://comunidad-starbiz-academy.vercel.app/', external: true },
  { label: 'Página Principal', description: 'StarbizAcademy', icon: Rocket, url: '/starbiz-academy', external: false },
];

const BRANDS = [
  {
    name: 'StarbizAcademy',
    subtitle: 'El Ecosistema Familiar · GÉNESIS i7™',
    description: 'Emprendimiento, liderazgo y transformación familiar',
    badge: 'Emprendimiento',
    path: '/starbiz-academy',
    icon: Rocket,
    logo: '/images/starbiz-logo-mark.png',
    c1: '34, 211, 238',   // cian
    c2: '139, 92, 246',   // violeta
    accent: '#22d3ee',
    services: STARBIZ_SERVICES,
  },
  {
    name: 'UsaLatino Prime',
    subtitle: 'Migración VIP · Highland, Utah',
    description: 'Tu camino seguro hacia el sueño americano',
    badge: 'Migración VIP',
    path: '/usalatino-prime',
    icon: Star,
    logo: '/images/usalatino-logo-mark.svg',
    c1: '251, 191, 36',   // dorado
    c2: '59, 130, 246',   // azul premium
    accent: '#fbbf24',
    services: USALATINO_SERVICES,
  },
];

export const HubPage: React.FC = () => {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState<{ path: string; color: string } | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const goToPath = (path: string, accent: string) => {
    setTransitioning({ path, color: accent });
    setTimeout(() => navigate(path), 600);
  };

  const handleBrandClick = (brand: (typeof BRANDS)[number]) => {
    if (brand.services) {
      setExpanded((prev) => (prev === brand.name ? null : brand.name));
      return;
    }
    goToPath(brand.path, brand.accent);
  };

  return (
    <>
      <SEOHead
        title="Henry Orellana D. | Orellana Group"
        description="Fundador de StarbizAcademy y UsaLatino Prime. Emprendimiento familiar, liderazgo y migración VIP."
        url="/"
      />

      <style>{`
        .font-sans2 { font-family: 'Manrope', -apple-system, sans-serif; }

        @keyframes hub-aurora {
          0%, 100% { transform: translate(0,0) scale(1); opacity: 0.8; }
          33% { transform: translate(8%,-6%) scale(1.18); opacity: 1; }
          66% { transform: translate(-6%,7%) scale(0.9); opacity: 0.7; }
        }
        @keyframes hub-spin-slow { to { transform: rotate(360deg); } }
        @keyframes hub-twinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.8); }
          50% { opacity: 0.9; transform: scale(1.2); }
        }
        @keyframes hub-fade-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hub-overlay-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes hub-shimmer {
          0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
          35% { opacity: 0.55; }
          100% { transform: translateX(230%) skewX(-18deg); opacity: 0; }
        }
        @keyframes hub-badge-glow {
          0%, 100% { box-shadow: 0 0 0 rgba(255,255,255,0); }
          50% { box-shadow: 0 0 14px rgba(255,255,255,0.08); }
        }

        /* Gradient border via mask (elegant, colorful) */
        .grad-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.2px;
          background: linear-gradient(140deg,
            rgba(var(--c1), 0.85),
            rgba(var(--c2), 0.4) 45%,
            rgba(255,255,255,0.04) 75%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          pointer-events: none;
          z-index: 1;
          transition: opacity 0.4s ease;
        }

        .hub-card {
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease;
        }
        .hub-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 55px -18px rgba(var(--c1), 0.45), 0 0 30px -8px rgba(var(--c2), 0.25);
        }
        .hub-card.is-open {
          box-shadow: 0 22px 65px -20px rgba(var(--c1), 0.5), 0 0 40px -10px rgba(var(--c2), 0.3);
        }
        .hub-card:hover .hub-shimmer { animation: hub-shimmer 1.15s ease forwards; }

        .hub-expand {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.55s cubic-bezier(0.22,1,0.36,1);
        }
        .hub-expand.open { grid-template-rows: 1fr; }
        .hub-expand-inner { overflow: hidden; }

        .hub-row {
          position: relative;
          transition: background 0.35s ease, border-color 0.35s ease;
          opacity: 0;
        }
        .hub-expand.open .hub-row {
          animation: hub-fade-up 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .hub-row:hover {
          background: rgba(var(--c1), 0.10);
          border-color: rgba(var(--c1), 0.30) !important;
          box-shadow: 0 0 22px -6px rgba(var(--c1), 0.4);
        }

        .hub-social {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), background 0.4s ease, color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .hub-social:hover { transform: translateY(-3px) scale(1.06); }

        @media (prefers-reduced-motion: reduce) {
          .hub-aurora, .hub-ring, .hub-star { animation: none !important; }
        }
      `}</style>

      {/* Transition overlay */}
      {transitioning && (
        <div
          className="fixed inset-0 z-[200]"
          style={{
            background: `radial-gradient(circle at 50% 45%, ${transitioning.color}22, #05060a 60%)`,
            animation: 'hub-overlay-fade 0.55s ease forwards',
          }}
        />
      )}

      <div className="font-sans2 min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 py-16"
        style={{ background: '#05060a' }}>

        {/* Vibrant aurora mesh */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="hub-aurora absolute top-[-18%] left-[-12%] w-[480px] h-[480px] rounded-full blur-[130px]"
            style={{ background: 'rgba(34, 211, 238, 0.22)', animation: 'hub-aurora 18s ease-in-out infinite' }} />
          <div className="hub-aurora absolute top-[-10%] right-[-14%] w-[440px] h-[440px] rounded-full blur-[130px]"
            style={{ background: 'rgba(139, 92, 246, 0.20)', animation: 'hub-aurora 22s ease-in-out infinite 3s' }} />
          <div className="hub-aurora absolute bottom-[-16%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[140px]"
            style={{ background: 'rgba(251, 191, 36, 0.16)', animation: 'hub-aurora 24s ease-in-out infinite 6s' }} />
          <div className="hub-aurora absolute bottom-[-12%] left-[-12%] w-[440px] h-[440px] rounded-full blur-[130px]"
            style={{ background: 'rgba(236, 72, 153, 0.14)', animation: 'hub-aurora 20s ease-in-out infinite 9s' }} />
        </div>

        {/* Twinkling stars */}
        <div className="absolute inset-0 pointer-events-none">
          {STARS.map((s, i) => (
            <span key={i} className="hub-star absolute rounded-full bg-white"
              style={{ top: s.top, left: s.left, width: s.size, height: s.size,
                animation: `hub-twinkle 4s ease-in-out infinite`, animationDelay: s.delay,
                boxShadow: '0 0 6px rgba(255,255,255,0.8)' }} />
          ))}
        </div>

        {/* Subtle grain */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 30%, transparent 42%, rgba(0,0,0,0.6) 100%)' }} />

        <div className="relative z-10 w-full max-w-md flex flex-col items-center">

          {/* Avatar with rotating gradient ring */}
          <Reveal delay={0}>
            <div className="relative mb-6">
              {/* glow */}
              <div className="absolute inset-0 rounded-full blur-[26px] scale-125"
                style={{ background: 'conic-gradient(from 0deg, #22d3ee, #8b5cf6, #fbbf24, #ec4899, #22d3ee)', opacity: 0.5 }} />
              {/* rotating ring */}
              <div className="hub-ring absolute -inset-[3px] rounded-full"
                style={{ background: 'conic-gradient(from 0deg, #22d3ee, #8b5cf6, #fbbf24, #ec4899, #22d3ee)',
                  animation: 'hub-spin-slow 14s linear infinite' }} />
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden relative z-10 border-2 border-[#05060a]">
                <img src="/images/about-henry.png" alt="Henry Orellana D."
                  className="w-full h-full object-cover object-top" loading="eager" />
              </div>
              <div className="absolute bottom-1 right-1.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#05060a] z-20"
                style={{ boxShadow: '0 0 10px #34d399' }} />
            </div>
          </Reveal>

          {/* Chip */}
          <Reveal delay={0.06}>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full mb-4 border border-white/10"
              style={{ background: 'linear-gradient(90deg, rgba(34,211,238,0.12), rgba(139,92,246,0.12))', animation: 'hub-badge-glow 4s ease-in-out infinite' }}>
              <Sparkles size={13} className="text-cyan-300" />
              <span className="text-white/70 text-[11px] font-semibold tracking-wide uppercase">Orellana Group</span>
            </div>
          </Reveal>

          {/* Name & Bio */}
          <Reveal delay={0.12}>
            <div className="text-center mb-11">
              <h1 className="text-[2.1rem] md:text-[2.6rem] font-extrabold tracking-[-0.03em] leading-none mb-3"
                style={{
                  background: 'linear-gradient(180deg, #ffffff 0%, #dbeafe 55%, #bfdbfe 100%)',
                  WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                  filter: 'drop-shadow(0 3px 22px rgba(56,189,248,0.28))',
                }}>
                Henry Orellana D.
              </h1>
              <p className="text-white/80 text-[15px] md:text-base font-semibold leading-relaxed max-w-xs mx-auto">
                Fundador &amp; CEO · Orellana Group
              </p>
              <p className="text-white/55 text-sm font-normal mt-1.5">
                Transformando familias, empoderando líderes
              </p>
            </div>
          </Reveal>

          {/* Brand Cards */}
          <div className="w-full space-y-4 mb-12">
            {BRANDS.map((brand, idx) => {
              const isOpen = expanded === brand.name;
              return (
                <Reveal key={brand.path} delay={0.2 + idx * 0.1} width="100%">
                  <div
                    className={`hub-card grad-border rounded-[24px] relative overflow-hidden ${isOpen ? 'is-open' : ''}`}
                    style={{
                      ['--c1' as string]: brand.c1,
                      ['--c2' as string]: brand.c2,
                      background: `linear-gradient(150deg, rgba(${brand.c1},0.16), rgba(${brand.c2},0.14) 55%, rgba(10,12,20,0.5))`,
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                    }}
                  >
                    {/* Decorative corner glow */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[50px] pointer-events-none"
                      style={{ background: `rgba(${brand.c1}, 0.28)` }} />

                    {/* Shimmer sweep on hover */}
                    <div className="hub-shimmer absolute top-0 bottom-0 w-1/3 pointer-events-none z-[2] opacity-0"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)' }} />

                    {/* Header (clickable) */}
                    <button
                      onClick={() => handleBrandClick(brand)}
                      aria-expanded={brand.services ? isOpen : undefined}
                      className="w-full text-left p-5 md:p-6 cursor-pointer relative z-10 block group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-[56px] h-[56px] rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110 relative overflow-hidden"
                          style={{
                            background: brand.logo
                              ? `radial-gradient(circle at 50% 38%, rgba(${brand.c2},0.22), rgba(8,10,16,1) 75%)`
                              : `linear-gradient(135deg, rgba(${brand.c1},0.3), rgba(${brand.c2},0.22))`,
                            border: `1px solid rgba(${brand.c1}, 0.4)`,
                            boxShadow: `0 0 22px -4px rgba(${brand.c1}, 0.5), inset 0 0 14px rgba(${brand.c2}, 0.2)`,
                          }}>
                          {brand.logo ? (
                            <img src={brand.logo} alt={`${brand.name} logo`} className="w-full h-full object-cover" loading="eager" />
                          ) : (
                            <brand.icon size={24} style={{ color: brand.accent, filter: `drop-shadow(0 0 8px rgba(${brand.c1},0.8))` }}
                              fill={brand.name === 'UsaLatino Prime' ? brand.accent : 'none'}
                              strokeWidth={brand.name === 'UsaLatino Prime' ? 0 : 2} />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-white font-bold text-lg md:text-xl tracking-[-0.01em] leading-tight truncate">
                              {brand.name}
                            </h2>
                          </div>
                          <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold tracking-wide"
                            style={{ background: `rgba(${brand.c1},0.15)`, color: brand.accent, border: `1px solid rgba(${brand.c1},0.25)` }}>
                            {brand.badge}
                          </span>
                        </div>
                        {brand.services ? (
                          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: `rgba(${brand.c1},0.12)`, border: `1px solid rgba(${brand.c1},0.25)` }}>
                            <ChevronDown className={`w-[18px] h-[18px] transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
                              style={{ color: brand.accent }} />
                          </div>
                        ) : (
                          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 group-hover:translate-x-0.5 transition-transform duration-300"
                            style={{ background: `rgba(${brand.c1},0.12)`, border: `1px solid rgba(${brand.c1},0.25)` }}>
                            <svg className="w-[18px] h-[18px]" style={{ color: brand.accent }}
                              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        )}
                      </div>

                      <p className="text-white/70 text-[13px] mt-3.5 leading-relaxed font-medium">
                        {brand.description}
                      </p>
                    </button>

                    {/* Expandable sub-services */}
                    {brand.services && (
                      <div className={`hub-expand ${isOpen ? 'open' : ''} relative z-10`}>
                        <div className="hub-expand-inner">
                          <div className="px-4 md:px-5 pb-4 pt-1">
                            <div className="pt-3.5" style={{ borderTop: `1px solid rgba(${brand.c1},0.15)` }}>
                              <div className="flex items-center gap-2 mb-2.5 px-1">
                                <Sparkles size={12} style={{ color: brand.accent }} />
                                <span className="text-white/75 text-[11px] font-semibold tracking-wide">Explora nuestros servicios</span>
                              </div>
                              <div className="space-y-2">
                                {brand.services.map((service, sIdx) => {
                                  const commonClass = 'hub-row flex items-center gap-3.5 p-3 rounded-2xl border';
                                  const rowStyle: React.CSSProperties = {
                                    ['--c1' as string]: brand.c1,
                                    background: `rgba(${brand.c1}, 0.04)`,
                                    borderColor: 'rgba(255,255,255,0.06)',
                                    animationDelay: `${0.06 + sIdx * 0.06}s`,
                                  };
                                  const inner = (
                                    <>
                                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{
                                          background: `linear-gradient(135deg, rgba(${brand.c1},0.28), rgba(${brand.c2},0.2))`,
                                          border: `1px solid rgba(${brand.c1},0.3)`,
                                          boxShadow: `0 0 14px -4px rgba(${brand.c1},0.5)`,
                                        }}>
                                        <service.icon size={18} style={{ color: brand.accent }} />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className="text-white text-[14px] font-semibold truncate leading-tight">{service.label}</p>
                                        <p className="text-white/60 text-[12px] truncate mt-0.5 font-normal">{service.description}</p>
                                      </div>
                                      <svg className="w-[18px] h-[18px] flex-shrink-0 transition-all duration-300 group-hover/row:translate-x-0.5"
                                        style={{ color: `rgba(${brand.c1},0.6)` }}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                      </svg>
                                    </>
                                  );
                                  return service.external ? (
                                    <a key={service.label} href={service.url} target="_blank" rel="noopener noreferrer"
                                      className={`${commonClass} group/row`} style={rowStyle}>
                                      {inner}
                                    </a>
                                  ) : (
                                    <button key={service.label} onClick={() => goToPath(service.url, brand.accent)}
                                      className={`${commonClass} group/row w-full text-left`} style={rowStyle}>
                                      {inner}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Social Links */}
          <Reveal delay={0.5}>
            <div className="flex items-center gap-3.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hub-social w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/65 hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                  aria-label={social.label}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = `0 0 22px rgba(${social.color}, 0.55)`;
                    el.style.borderColor = `rgba(${social.color}, 0.6)`;
                    el.style.background = `rgba(${social.color}, 0.14)`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = 'none';
                    el.style.borderColor = 'rgba(255,255,255,0.1)';
                    el.style.background = 'rgba(255,255,255,0.03)';
                  }}
                >
                  {social.icon ? <social.icon size={19} /> : <TikTokIcon />}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Footer */}
          <Reveal delay={0.65}>
            <p className="text-white/45 text-xs mt-12 font-normal tracking-wide">
              © {new Date().getFullYear()} Orellana Group
            </p>
          </Reveal>
        </div>
      </div>
    </>
  );
};
