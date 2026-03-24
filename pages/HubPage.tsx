import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SEOHead } from '../components/SEO/SEOHead';
import { Rocket, Star, Instagram, Youtube, Facebook } from 'lucide-react';

const SOCIAL_LINKS = [
  { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/henryorellanaoficial/', color: '#E4405F' },
  { icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@HenryOrellanaOficial', color: '#FF0000' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@henryorellanaoficial', color: '#ffffff' },
  { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61581737189432', color: '#1877F2' },
];

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z" />
  </svg>
);

const BRANDS = [
  {
    name: 'StarbizAcademy',
    subtitle: 'El Ecosistema Familiar · GÉNESIS i7™',
    description: 'Emprendimiento, liderazgo y transformación familiar',
    path: '/starbiz-academy',
    icon: Rocket,
    gradient: 'from-[#06b6d4] to-[#0891b2]',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    hoverShadow: '0 0 60px rgba(6, 182, 212, 0.3)',
  },
  {
    name: 'UsaLatino Prime',
    subtitle: 'Migración VIP · Highland, Utah',
    description: 'Tu camino seguro hacia el sueño americano',
    path: '/usalatino-prime',
    icon: Star,
    gradient: 'from-[#1a3a6e] to-[#0d2240]',
    glowColor: 'rgba(255, 215, 0, 0.4)',
    hoverShadow: '0 0 60px rgba(255, 215, 0, 0.2)',
    accentBorder: '#ffd700',
  },
];

export const HubPage: React.FC = () => {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState<{ path: string; color: string } | null>(null);

  const handleBrandClick = (path: string, glowColor: string) => {
    setTransitioning({ path, color: glowColor });
    setTimeout(() => navigate(path), 600);
  };

  return (
    <>
      <SEOHead
        title="Henry Orellana D. | Orellana Group"
        description="Fundador de StarbizAcademy y UsaLatino Prime. Emprendimiento familiar, liderazgo y migración VIP."
        url="/"
      />

      <style>{`
        @keyframes hub-fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hub-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes hub-expand {
          0% { clip-path: circle(0% at 50% 50%); }
          100% { clip-path: circle(150% at 50% 50%); }
        }
        @keyframes hub-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .hub-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hub-card:hover {
          transform: translateY(-4px) scale(1.02);
        }
        .hub-social:hover {
          transform: translateY(-2px) scale(1.1);
        }
      `}</style>

      {/* Transition overlay */}
      {transitioning && (
        <div
          className="fixed inset-0 z-[200]"
          style={{
            backgroundColor: transitioning.color.replace('0.4', '1').replace('0.3', '1').replace('0.2', '1'),
            background: transitioning.path === '/starbiz-academy'
              ? 'linear-gradient(135deg, #06b6d4, #0891b2)'
              : 'linear-gradient(135deg, #1a3a6e, #0d2240)',
            animation: 'hub-expand 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        />
      )}

      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[150px]"
            style={{ background: 'rgba(6, 182, 212, 0.06)', animation: 'hub-glow 8s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[150px]"
            style={{ background: 'rgba(255, 215, 0, 0.04)', animation: 'hub-glow 8s ease-in-out infinite 4s' }}
          />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-lg flex flex-col items-center">
          {/* Photo */}
          <Reveal delay={0}>
            <div className="relative mb-6">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-white/10 ring-offset-4 ring-offset-[#0a0a0a] shadow-2xl">
                <img
                  src="/images/about-henry.png"
                  alt="Henry Orellana D."
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              {/* Online dot */}
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0a0a0a]" />
            </div>
          </Reveal>

          {/* Name & Bio */}
          <Reveal delay={0.1}>
            <div className="text-center mb-10">
              <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-2">
                Henry Orellana D.
              </h1>
              <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                Fundador & CEO · Orellana Group<br />
                Transformando familias y empoderando líderes
              </p>
            </div>
          </Reveal>

          {/* Brand Cards */}
          <div className="w-full space-y-4 mb-10">
            {BRANDS.map((brand, idx) => (
              <Reveal key={brand.path} delay={0.2 + idx * 0.15}>
                <button
                  onClick={() => handleBrandClick(brand.path, brand.glowColor)}
                  className={`hub-card w-full bg-gradient-to-r ${brand.gradient} rounded-2xl p-6 md:p-7 text-left cursor-pointer border relative overflow-hidden group`}
                  style={{
                    borderColor: brand.accentBorder ? `${brand.accentBorder}40` : 'rgba(255,255,255,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = brand.hoverShadow;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 80% 50%, ${brand.glowColor}, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <brand.icon
                        size={24}
                        className={brand.accentBorder ? 'text-[#ffd700]' : 'text-white'}
                        fill={brand.accentBorder ? '#ffd700' : 'none'}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-white font-bold text-lg md:text-xl tracking-tight">
                        {brand.name}
                      </h2>
                      <p className="text-white/50 text-xs md:text-sm mt-0.5 truncate">
                        {brand.subtitle}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  <p className="relative z-10 text-white/30 text-xs mt-3 pl-16">
                    {brand.description}
                  </p>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Social Links */}
          <Reveal delay={0.55}>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hub-social w-11 h-11 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.12] transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon ? (
                    <social.icon size={20} />
                  ) : (
                    <TikTokIcon />
                  )}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Footer */}
          <Reveal delay={0.7}>
            <p className="text-white/15 text-xs mt-12 tracking-widest uppercase">
              © {new Date().getFullYear()} Orellana Group
            </p>
          </Reveal>
        </div>
      </div>
    </>
  );
};
