import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { BookingCalendar } from '../components/Booking';

// ===== CONFIGURABLE CTA - WHATSAPP =====
const WHATSAPP_NUMBER = '13854564470';
const WHATSAPP_MESSAGE = encodeURIComponent('Hola Henry, vengo del LIVE de TikTok y quiero aprovechar la oferta de S/50 para la asesoría de estudios en Utah.');
const CTA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
// ========================================

// Responsive image component for desktop/mobile
const ResponsiveImage = ({
  desktopSrc,
  mobileSrc,
  alt,
  className = '',
  style = {},
}: {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <img
      src={isMobile ? mobileSrc : desktopSrc}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
    />
  );
};

// Reveal component with intersection observer
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '50px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const MentoriaUtahPeruPromo: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isStickyCTAVisible, setIsStickyCTAVisible] = useState(false);

  // Sticky CTA visibility
  useEffect(() => {
    const handleScroll = () => setIsStickyCTAVisible(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTA = () => {
    const agendaSection = document.getElementById('agenda');
    if (agendaSection) {
      agendaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const styles = {
    colors: {
      onyx: '#071D49',
      onyxLight: '#0a2a5c',
      champagne: '#FFB81D',
      champagneLight: '#FFD966',
      champagneDark: '#E5A000',
      forest: '#AA0200',
      forestLight: '#CC2A2A',
      sage: '#FFFFFF',
      cream: '#faf8f5',
      promo: '#FF4757',
    },
    container: {
      minHeight: '100vh',
      backgroundColor: '#071D49',
      color: '#ffffff',
      fontFamily: "'Outfit', system-ui, sans-serif",
      overflowX: 'hidden' as const,
    },
    section: {
      padding: '80px 24px',
    },
    sectionLg: {
      padding: '128px 24px',
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
    },
    fontEditorial: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(40px)',
      WebkitBackdropFilter: 'blur(40px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
    },
    glassGold: {
      background: 'linear-gradient(135deg, rgba(255, 184, 29, 0.1) 0%, rgba(255, 184, 29, 0.02) 100%)',
      backdropFilter: 'blur(40px)',
      WebkitBackdropFilter: 'blur(40px)',
      border: '1px solid rgba(255, 184, 29, 0.2)',
    },
    ctaButton: {
      position: 'relative' as const,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      background: 'linear-gradient(135deg, #FFB81D 0%, #E5A000 100%)',
      color: '#071D49',
      fontWeight: 600,
      fontSize: '16px',
      letterSpacing: '0.05em',
      padding: '20px 40px',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      boxShadow: '0 20px 60px -15px rgba(255, 184, 29, 0.4)',
    },
    card: {
      padding: '32px',
      borderRadius: '24px',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 16px',
      borderRadius: '50px',
      fontSize: '12px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase' as const,
    },
    grid2: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
    },
    grid3: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
    },
    textCenter: {
      textAlign: 'center' as const,
    },
  };

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>🔥 OFERTA LIVE TIKTOK | Estudiar en Utah S/50 - StarbizAcademy</title>
        <meta name="description" content="OFERTA EXCLUSIVA del LIVE de TikTok. Mentoría para estudiar en Utah por S/50 (precio regular S/70). Ahorra S/20." />
        <meta property="og:title" content="🔥 OFERTA LIVE - Estudiar en Utah S/50" />
        <meta property="og:description" content="Precio exclusivo para asistentes del LIVE de TikTok. Ahorra S/20." />
        <meta name="robots" content="noindex" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 71, 87, 0.4), 0 0 40px rgba(255, 71, 87, 0.2); }
          50% { box-shadow: 0 0 40px rgba(255, 71, 87, 0.6), 0 0 80px rgba(255, 71, 87, 0.3); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
          20%, 40%, 60%, 80% { transform: translateX(3px); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes heroZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        @keyframes scrollDown {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }

        .promo-banner {
          animation: glow 2s ease-in-out infinite;
        }

        .promo-bounce {
          animation: bounce 2s ease-in-out infinite;
        }

        .promo-shake:hover {
          animation: shake 0.5s ease-in-out;
        }

        .animate-hero-zoom {
          animation: heroZoom 20s ease-out forwards;
        }

        .animate-fade-1 { animation: fadeUp 0.8s ease-out 0.2s both; }
        .animate-fade-2 { animation: fadeUp 0.8s ease-out 0.4s both; }
        .animate-fade-3 { animation: fadeUp 0.8s ease-out 0.6s both; }
        .animate-fade-4 { animation: fadeUp 0.8s ease-out 0.8s both; }
        .animate-fade-5 { animation: fadeUp 0.8s ease-out 1s both; }
        .animate-fade-6 { animation: fadeUp 0.8s ease-out 1.2s both; }

        .shimmer-text {
          background: linear-gradient(90deg, #FFB81D 0%, #FFD966 50%, #FFB81D 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .text-gold {
          background: linear-gradient(135deg, #FFD966 0%, #FFB81D 50%, #E5A000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-btn:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 30px 80px -15px rgba(255, 184, 29, 0.5) !important;
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.5);
        }

        .faq-item { cursor: pointer; }
        .faq-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .faq-content.open { max-height: 200px; }

        ::selection {
          background: #FFB81D;
          color: #071D49;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem !important; }
          .hero-subtitle { font-size: 1.25rem !important; }
          .section-title { font-size: 2rem !important; }
        }
      `}</style>

      <div style={styles.container}>

        {/* ══════════════════════════════════════════════════════════════
            PROMO BANNER - TIKTOK LIVE EXCLUSIVE
        ══════════════════════════════════════════════════════════════ */}
        <div className="promo-banner" style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: `linear-gradient(135deg, #FF4757 0%, #C0392B 100%)`,
          padding: '16px 24px',
          textAlign: 'center',
          borderBottom: '3px solid #FFB81D',
        }}>
          <div style={{ ...styles.maxWidth }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
            }}>
              <span className="promo-bounce" style={{ fontSize: '28px' }}>🔴</span>
              <div>
                <p style={{
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  letterSpacing: '0.05em',
                  marginBottom: '4px',
                }}>
                  🎉 OFERTA EXCLUSIVA LIVE TIKTOK 🎉
                </p>
                <p style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: 'clamp(12px, 2.5vw, 14px)',
                }}>
                  <span style={{ textDecoration: 'line-through', opacity: 0.7 }}>S/70</span>
                  {' → '}
                  <span style={{
                    fontWeight: 800,
                    fontSize: 'clamp(16px, 3vw, 20px)',
                    color: '#FFB81D',
                  }}>S/50</span>
                  <span style={{ marginLeft: '8px', background: '#FFB81D', color: '#071D49', padding: '2px 8px', borderRadius: '4px', fontWeight: 700, fontSize: '12px' }}>
                    AHORRAS S/20
                  </span>
                </p>
              </div>
              <span className="promo-bounce" style={{ fontSize: '28px' }}>🔴</span>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════════════════════ */}
        <section style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          {/* Background Image */}
          <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
          }}>
            <ResponsiveImage
              desktopSrc="/images/utah/hero-desktop.jpeg"
              mobileSrc="/images/utah/hero-mobile.jpeg"
              alt="Estudiante latino en campus universitario de Utah"
              className="animate-hero-zoom"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(7,29,73,0.7) 0%, rgba(7,29,73,0.5) 40%, rgba(7,29,73,0.8) 100%)',
            }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '150vw',
              height: '150vh',
              background: 'radial-gradient(ellipse at center, rgba(255, 184, 29, 0.08) 0%, transparent 50%)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Content */}
          <div style={{
            position: 'relative',
            zIndex: 10,
            padding: '80px 24px',
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
          }}>
            {/* PROMO Badge */}
            <div className="animate-fade-1" style={{ marginBottom: '32px' }}>
              <span className="promo-shake" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#FF4757',
                color: '#FFFFFF',
                padding: '12px 24px',
                borderRadius: '50px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                boxShadow: '0 4px 20px rgba(255, 71, 87, 0.4)',
              }}>
                <span>🔴</span>
                EXCLUSIVO LIVE TIKTOK
                <span>🔴</span>
              </span>
            </div>

            {/* Main headline */}
            <h1 style={{ ...styles.fontEditorial, marginBottom: '32px' }}>
              <span className="animate-fade-2 hero-title" style={{
                display: 'block',
                fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                fontWeight: 300,
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
              }}>
                Envía a tus hijos
              </span>
              <span className="animate-fade-3 hero-title text-gold" style={{
                display: 'block',
                fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 0.95,
                marginTop: '8px',
              }}>
                a estudiar en USA
              </span>
            </h1>

            {/* Decorative line */}
            <div className="animate-fade-4" style={{
              height: '1px',
              width: '120px',
              background: 'linear-gradient(90deg, #FFB81D, transparent)',
              marginBottom: '32px',
            }} />

            {/* Subheadline */}
            <p className="animate-fade-4 hero-subtitle" style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              color: 'rgba(255, 255, 255, 0.6)',
              fontWeight: 300,
              maxWidth: '500px',
              marginBottom: '40px',
              lineHeight: 1.6,
            }}>
              El sueño de estudiar en Estados Unidos{' '}
              <span style={{ color: '#ffffff', fontWeight: 400 }}>¡ahora con precio especial del LIVE!</span>
            </p>

            {/* Value props with PROMO pricing */}
            <div className="animate-fade-5" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '40px',
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #FF4757 0%, #C0392B 100%)',
                padding: '14px 24px',
                borderRadius: '50px',
                fontSize: '14px',
                color: '#FFFFFF',
                fontWeight: 600,
                boxShadow: '0 4px 20px rgba(255, 71, 87, 0.3)',
              }}>
                <span style={{ textDecoration: 'line-through', opacity: 0.7 }}>S/70</span>
                {' → '}
                <span style={{ fontWeight: 800, fontSize: '18px' }}>S/50</span>
                {' · '}
                <span style={{ color: '#FFB81D' }}>¡Ahorras S/20!</span>
              </span>
              <span style={{
                ...styles.glass,
                padding: '12px 20px',
                borderRadius: '50px',
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
              }}>
                Grabación incluida
              </span>
              <span style={{
                ...styles.glass,
                padding: '12px 20px',
                borderRadius: '50px',
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
              }}>
                Q&A en vivo
              </span>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-6">
              <button
                onClick={handleCTA}
                className="cta-btn"
                style={styles.ctaButton}
              >
                ¡QUIERO MI LUGAR POR S/50!
                <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <p style={{
                marginTop: '20px',
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <svg style={{ width: '16px', height: '16px', color: '#FFFFFF' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Acepta tarjetas internacionales · Oferta por tiempo limitado
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            animation: 'scrollDown 2s ease-in-out infinite',
          }}>
            <span style={{
              fontSize: '10px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.3)',
            }}>Scroll</span>
            <div style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, #FFB81D, transparent)',
            }} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            CALENDARIO DE RESERVAS
        ══════════════════════════════════════════════════════════════ */}
        <section id="agenda" style={{
          ...styles.sectionLg,
          background: '#0a2a5c',
        }}>
          <div style={styles.maxWidth}>
            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  background: 'rgba(255, 184, 29, 0.15)',
                  borderRadius: '100px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: styles.colors.champagne,
                  marginBottom: '16px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}>Reserva tu Lugar</span>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  fontWeight: 400,
                  color: '#ffffff',
                }}>
                  Reserva tu Horario Promocional
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '600px',
                  margin: '16px auto 0',
                  lineHeight: 1.7,
                }}>
                  Aprovecha el precio exclusivo del LIVE. Selecciona el día y hora para tu sesión de asesoría.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <BookingCalendar
                serviceType="mentoria-peru"
                priceAmount={50}
                priceCurrency="PEN"
                whatsappNumber={WHATSAPP_NUMBER}
                colors={{
                  primary: styles.colors.onyx,
                  secondary: styles.colors.onyxLight,
                  success: styles.colors.champagne,
                  accent: styles.colors.forest,
                  background: '#0d3366',
                  backgroundAlt: '#0a2a5c',
                  text: '#ffffff',
                  textLight: 'rgba(255, 255, 255, 0.7)',
                  border: 'rgba(255, 255, 255, 0.2)',
                }}
              />
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PROBLEM SECTION
        ══════════════════════════════════════════════════════════════ */}
        <section style={{
          ...styles.sectionLg,
          background: '#0a2a5c',
        }}>
          <div style={styles.maxWidth}>
            <Reveal>
              <div style={{ ...styles.textCenter, marginBottom: '64px' }}>
                <span style={{
                  ...styles.glass,
                  ...styles.badge,
                  color: '#FFB81D',
                  marginBottom: '24px',
                }}>El Problema</span>
                <h2 className="section-title" style={{
                  ...styles.fontEditorial,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 300,
                  lineHeight: 1.2,
                }}>
                  ¿Sueñas con que tus hijos{' '}
                  <span style={{ fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.5)' }}>estudien en USA?</span>
                </h2>
              </div>
            </Reveal>

            <div style={styles.grid3}>
              {[
                { emoji: '🤯', title: 'Proceso confuso', desc: 'Visas, requisitos, trámites... un laberinto sin guía clara.' },
                { emoji: '💸', title: 'Costos aterradores', desc: 'Las universidades parecen inalcanzables económicamente.' },
                { emoji: '😔', title: 'La distancia', desc: 'Desde Perú parece imposible lograrlo sin contactos.' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 150}>
                  <div className="card-hover" style={{
                    ...styles.glass,
                    ...styles.card,
                    height: '100%',
                  }}>
                    <span style={{ fontSize: '48px', display: 'block', marginBottom: '20px' }}>{item.emoji}</span>
                    <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '12px' }}>{item.title}</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={500}>
              <div style={{ ...styles.textCenter, marginTop: '48px' }}>
                <div style={{
                  ...styles.glassGold,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px 32px',
                  borderRadius: '50px',
                }}>
                  <span style={{ fontSize: '24px' }}>✨</span>
                  <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.8)' }}>
                    La buena noticia:{' '}
                    <span style={{ color: '#FFB81D', fontWeight: 500 }}>hay un camino más simple y HOY a precio especial.</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            WHY UTAH
        ══════════════════════════════════════════════════════════════ */}
        <section style={{
          ...styles.sectionLg,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
          }}>
            <ResponsiveImage
              desktopSrc="/images/utah/utah-city-desktop.jpeg"
              mobileSrc="/images/utah/utah-city-mobile.jpeg"
              alt="Vista panorámica de Salt Lake City, Utah"
              style={{
                position: 'absolute',
                width: '110%',
                height: '110%',
                objectFit: 'cover',
                objectPosition: 'center',
                left: '-5%',
                top: '-5%',
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(7,29,73,0.85) 0%, rgba(7,29,73,0.75) 50%, rgba(7,29,73,0.9) 100%)',
            }} />
          </div>

          <div style={{ ...styles.maxWidth, position: 'relative', zIndex: 10 }}>
            <Reveal>
              <div style={{ ...styles.textCenter, marginBottom: '64px' }}>
                <span style={{
                  ...styles.badge,
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  marginBottom: '24px',
                }}>El Secreto Mejor Guardado</span>
                <h2 className="section-title" style={{
                  ...styles.fontEditorial,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 300,
                }}>
                  ¿Por qué <span className="shimmer-text" style={{ fontWeight: 500 }}>UTAH</span>?
                </h2>
              </div>
            </Reveal>

            <div style={styles.grid2}>
              {[
                { icon: '💰', stat: '40%', label: 'más baratas', title: 'Universidades accesibles', desc: 'Opciones reales para familias latinoamericanas.', accent: '#FFB81D' },
                { icon: '🏠', stat: '#1', label: 'en seguridad', title: 'Ambiente familiar', desc: 'Comunidad acogedora y segura.', accent: '#FFFFFF' },
                { icon: '📈', stat: '#1', label: 'en crecimiento', title: 'Oportunidades laborales', desc: 'El estado con mayor crecimiento de USA.', accent: '#FFB81D' },
                { icon: '🏔️', stat: '25%', label: 'más accesible', title: 'Calidad de vida', desc: 'Naturaleza, seguridad y costo razonable.', accent: '#FFFFFF' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="card-hover" style={{
                    ...styles.glass,
                    ...styles.card,
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '3px',
                      background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                    }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                      <span style={{ fontSize: '40px' }}>{item.icon}</span>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
                          <span style={{ fontSize: '32px', fontWeight: 700, color: item.accent }}>{item.stat}</span>
                          <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)' }}>{item.label}</span>
                        </div>
                        <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>{item.title}</h3>
                        <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            WHAT YOU'LL LEARN
        ══════════════════════════════════════════════════════════════ */}
        <section style={{
          ...styles.sectionLg,
          background: '#0a2a5c',
        }}>
          <div style={styles.maxWidth}>
            <Reveal>
              <div style={{ ...styles.textCenter, marginBottom: '64px' }}>
                <span style={{
                  ...styles.badge,
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  marginBottom: '24px',
                }}>El Contenido</span>
                <h2 className="section-title" style={{
                  ...styles.fontEditorial,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 300,
                }}>
                  ¿Qué aprenderás?
                </h2>
              </div>
            </Reveal>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '16px',
            }}>
              {[
                'Proceso completo de aplicación paso a paso',
                'Requisitos de visa F-1 para estudiantes internacionales',
                'Las mejores universidades en Utah (costo-beneficio)',
                'Opciones de financiamiento y becas disponibles',
                'Cómo preparar a tu hijo para la entrevista consular',
                'Vida estudiantil y adaptación en Utah',
              ].map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px 24px',
                    background: 'rgba(255, 184, 29, 0.03)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 184, 29, 0.1)',
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FFB81D 0%, #E5A000 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <svg style={{ width: '16px', height: '16px', color: '#071D49' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.4 }}>{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PRICING CARD - PROMO
        ══════════════════════════════════════════════════════════════ */}
        <section style={{
          ...styles.sectionLg,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
          }}>
            <ResponsiveImage
              desktopSrc="/images/utah/abstract-desktop.jpeg"
              mobileSrc="/images/utah/abstract-mobile.jpeg"
              alt=""
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: 0.4,
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(7,29,73,0.7) 0%, rgba(7,29,73,0.9) 70%, rgba(7,29,73,0.95) 100%)',
            }} />
          </div>

          <div style={{ ...styles.maxWidth, position: 'relative', zIndex: 10 }}>
            <Reveal>
              <div style={{
                maxWidth: '500px',
                margin: '0 auto',
                textAlign: 'center',
              }}>
                <div style={{
                  ...styles.glassGold,
                  borderRadius: '32px',
                  padding: '48px 32px',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '3px solid #FF4757',
                }}>
                  {/* Promo ribbon */}
                  <div style={{
                    position: 'absolute',
                    top: '24px',
                    right: '-40px',
                    background: '#FF4757',
                    color: '#FFFFFF',
                    padding: '8px 50px',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    transform: 'rotate(45deg)',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                  }}>
                    -30% OFF
                  </div>

                  {/* LIVE Badge */}
                  <div style={{
                    background: '#FF4757',
                    color: '#FFFFFF',
                    padding: '8px 20px',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '24px',
                    boxShadow: '0 4px 20px rgba(255, 71, 87, 0.4)',
                  }}>
                    🔴 PRECIO LIVE TIKTOK
                  </div>

                  <h3 style={{
                    ...styles.fontEditorial,
                    fontSize: '24px',
                    fontWeight: 400,
                    marginBottom: '8px',
                  }}>Mentoría Grupal en Vivo</h3>

                  <p style={{ color: 'rgba(255, 255, 255, 0.5)', marginBottom: '24px', fontSize: '14px' }}>
                    Acceso completo + grabación
                  </p>

                  {/* Price comparison */}
                  <div style={{ marginBottom: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                      <span style={{
                        fontSize: '24px',
                        color: 'rgba(255, 255, 255, 0.4)',
                        textDecoration: 'line-through',
                      }}>S/ 70</span>
                      <span style={{
                        ...styles.fontEditorial,
                        fontSize: '72px',
                        fontWeight: 300,
                        color: '#FFB81D',
                      }}>S/ 50</span>
                    </div>
                    <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '8px' }}>
                      Soles · Pago único · <span style={{ color: '#FF4757', fontWeight: 600 }}>¡Ahorras S/20!</span>
                    </p>
                  </div>

                  {/* What's included */}
                  <div style={{
                    textAlign: 'left',
                    marginBottom: '32px',
                    padding: '24px',
                    background: 'rgba(0, 0, 0, 0.2)',
                    borderRadius: '16px',
                  }}>
                    {[
                      'Sesión en vivo de 90+ minutos',
                      'Q&A para resolver todas tus dudas',
                      'Grabación disponible por 30 días',
                      'Guía PDF con recursos adicionales',
                      'Acceso a grupo privado de WhatsApp',
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '8px 0',
                        borderBottom: i < 4 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                      }}>
                        <svg style={{ width: '18px', height: '18px', color: '#FFFFFF', flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={handleCTA}
                    className="cta-btn"
                    style={{
                      ...styles.ctaButton,
                      width: '100%',
                      justifyContent: 'center',
                    }}
                  >
                    ¡RESERVAR A S/50!
                    <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <p style={{
                    marginTop: '16px',
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.4)',
                  }}>
                    🔒 Pago seguro · Oferta exclusiva LIVE
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════════════════════ */}
        <section style={styles.sectionLg}>
          <div style={{ ...styles.maxWidth, maxWidth: '700px' }}>
            <Reveal>
              <div style={{ ...styles.textCenter, marginBottom: '48px' }}>
                <h2 className="section-title" style={{
                  ...styles.fontEditorial,
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 300,
                }}>
                  Preguntas Frecuentes
                </h2>
              </div>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { q: '¿Qué pasa si no puedo asistir en vivo?', a: 'No te preocupes. La grabación estará disponible por 30 días para que puedas verla cuando quieras.' },
                { q: '¿Es en español?', a: '¡Sí! Toda la mentoría es 100% en español, pensada para nuestra comunidad latinoamericana.' },
                { q: '¿Hasta cuándo está disponible el precio del LIVE?', a: 'Esta oferta de S/50 es exclusiva para los asistentes del LIVE de TikTok. El precio regular es S/70.' },
                { q: '¿Puedo hacer preguntas durante la sesión?', a: '¡Por supuesto! Habrá un espacio dedicado de Q&A para resolver todas tus dudas específicas.' },
                { q: '¿Puedo pagar desde Perú?', a: 'Sí, aceptamos tarjetas de crédito/débito internacionales y otros métodos de pago disponibles en Latinoamérica.' },
              ].map((faq, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div
                    className="faq-item"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      ...styles.glass,
                      borderRadius: '16px',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '20px 24px',
                    }}>
                      <span style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.9)' }}>{faq.q}</span>
                      <svg
                        style={{
                          width: '20px',
                          height: '20px',
                          color: '#FFB81D',
                          transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)',
                          transition: 'transform 0.3s ease',
                          flexShrink: 0,
                          marginLeft: '16px',
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className={`faq-content ${openFaq === i ? 'open' : ''}`}>
                      <p style={{
                        padding: '0 24px 20px',
                        color: 'rgba(255, 255, 255, 0.6)',
                        lineHeight: 1.6,
                      }}>{faq.a}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════════════════════════ */}
        <section style={{
          padding: '128px 24px',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
          }}>
            <ResponsiveImage
              desktopSrc="/images/utah/graduation-desktop.jpeg"
              mobileSrc="/images/utah/graduation-mobile.jpeg"
              alt="Familia latina celebrando graduación universitaria"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'brightness(0.9)',
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(7,29,73,0.85) 0%, rgba(170,2,0,0.7) 50%, rgba(7,29,73,0.9) 100%)',
            }} />
          </div>

          <div style={{ ...styles.maxWidth, position: 'relative', zIndex: 10 }}>
            <Reveal>
              {/* Promo reminder */}
              <div style={{
                display: 'inline-block',
                background: '#FF4757',
                borderRadius: '16px',
                padding: '16px 32px',
                marginBottom: '32px',
              }}>
                <p style={{
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: 600,
                }}>
                  🔴 OFERTA EXCLUSIVA LIVE TIKTOK 🔴
                </p>
                <p style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '14px',
                  marginTop: '4px',
                }}>
                  <span style={{ textDecoration: 'line-through' }}>S/70</span> → <span style={{ fontWeight: 800, fontSize: '20px' }}>S/50</span> · ¡Ahorras S/20!
                </p>
              </div>

              <h2 style={{
                ...styles.fontEditorial,
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                fontWeight: 300,
                marginBottom: '24px',
                lineHeight: 1.2,
              }}>
                Tus hijos merecen{' '}
                <span className="text-gold" style={{ fontStyle: 'italic' }}>esta oportunidad</span>
              </h2>

              <p style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.6)',
                maxWidth: '500px',
                margin: '0 auto 40px',
                lineHeight: 1.6,
              }}>
                No dejes pasar esta oferta exclusiva del LIVE. El sueño de estudiar en USA está más cerca de lo que crees.
              </p>

              <button
                onClick={handleCTA}
                className="cta-btn"
                style={{
                  ...styles.ctaButton,
                  fontSize: '18px',
                  padding: '24px 48px',
                }}
              >
                ¡QUIERO MI LUGAR POR S/50!
                <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <p style={{
                marginTop: '24px',
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.4)',
              }}>
                ⏰ Oferta limitada · Precio exclusivo LIVE
              </p>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FOOTER
        ══════════════════════════════════════════════════════════════ */}
        <footer style={{
          padding: '48px 24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          textAlign: 'center',
          background: 'linear-gradient(180deg, #071D49 0%, #0d0d0d 100%)',
        }}>
          <div style={styles.maxWidth}>
            <p style={{
              ...styles.fontEditorial,
              fontSize: '20px',
              color: '#FFB81D',
              marginBottom: '8px',
            }}>StarbizAcademy</p>
            <p style={{
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.4)',
              marginBottom: '16px',
            }}>
              © {new Date().getFullYear()} · Oferta Exclusiva LIVE TikTok
            </p>
            <p style={{
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.3)',
            }}>
              Precio regular S/70 · Precio LIVE S/50
            </p>
          </div>
        </footer>

        {/* ══════════════════════════════════════════════════════════════
            STICKY MOBILE CTA
        ══════════════════════════════════════════════════════════════ */}
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '16px 24px',
          background: 'linear-gradient(to top, #071D49 0%, rgba(7, 29, 73, 0.95) 100%)',
          borderTop: '1px solid rgba(255, 184, 29, 0.2)',
          transform: isStickyCTAVisible ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            <div>
              <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>🔴 OFERTA LIVE</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.4)', textDecoration: 'line-through' }}>S/70</span>
                <span style={{ fontSize: '24px', fontWeight: 600, color: '#FFB81D' }}>S/50</span>
              </div>
            </div>
            <button
              onClick={handleCTA}
              style={{
                background: 'linear-gradient(135deg, #FFB81D 0%, #E5A000 100%)',
                color: '#071D49',
                fontWeight: 600,
                fontSize: '14px',
                padding: '14px 28px',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              ¡LO QUIERO! →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentoriaUtahPeruPromo;
