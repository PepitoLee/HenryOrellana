import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';

// ===== CONFIGURABLE CTA URL =====
const CTA_URL = 'https://tu-link-de-pago.com';
// ================================

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

// Counter animation component
const AnimatedNumber = ({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
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

const MentoriaUtah: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [isStickyCTAVisible, setIsStickyCTAVisible] = useState(false);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sticky CTA visibility
  useEffect(() => {
    const handleScroll = () => setIsStickyCTAVisible(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTA = () => window.open(CTA_URL, '_blank');

  const styles = {
    // Base colors
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
    },
    // Base container
    container: {
      minHeight: '100vh',
      backgroundColor: '#071D49',
      color: '#ffffff',
      fontFamily: "'Outfit', system-ui, sans-serif",
      overflowX: 'hidden' as const,
    },
    // Section styles
    section: {
      padding: '80px 24px',
    },
    sectionLg: {
      padding: '128px 24px',
    },
    // Max width container
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
    },
    // Typography
    fontEditorial: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
    },
    // Glass effect
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
    // CTA Button
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
    ctaButtonHover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 30px 80px -15px rgba(255, 184, 29, 0.5)',
    },
    // Card
    card: {
      padding: '32px',
      borderRadius: '24px',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    // Badge
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 16px',
      borderRadius: '50px',
      fontSize: '12px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase' as const,
    },
    // Grid
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
    // Flex
    flexCenter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flexCol: {
      display: 'flex',
      flexDirection: 'column' as const,
    },
    // Text center
    textCenter: {
      textAlign: 'center' as const,
    },
  };

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Estudiar en Utah | Mentoría Exclusiva - StarbizAcademy</title>
        <meta name="description" content="Descubre el secreto mejor guardado de USA. Trae a tu familia a estudiar en Utah con universidades 40% más baratas. Mentoría en vivo por $30." />
        <meta property="og:title" content="El Sueño Americano Está en Utah | Mentoría $30" />
        <meta property="og:description" content="Universidades accesibles, comunidad segura, el estado #1 en crecimiento. Tu familia merece esta oportunidad." />
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

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes drawLine {
          from { width: 0; }
          to { width: 120px; }
        }

        @keyframes scrollDown {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }

        /* ===== PREMIUM IMAGE ANIMATIONS ===== */

        /* Hero: Cinematic slow zoom */
        @keyframes heroZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        /* Ken Burns: Zoom + Pan for landscapes */
        @keyframes kenBurns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.15) translate(-2%, -2%); }
        }

        /* Floating particles effect */
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.7;
          }
        }

        /* Sun pulse for logo */
        @keyframes sunPulse {
          0%, 100% {
            filter: brightness(1) drop-shadow(0 0 10px rgba(255,184,29,0.3));
          }
          50% {
            filter: brightness(1.15) drop-shadow(0 0 25px rgba(255,184,29,0.5));
          }
        }

        /* Shimmer background */
        @keyframes shimmerBg {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* Parallax subtle float */
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-hero-zoom {
          animation: heroZoom 20s ease-out forwards;
        }

        .animate-ken-burns {
          animation: kenBurns 25s ease-in-out infinite alternate;
        }

        .animate-sun-pulse {
          animation: sunPulse 3s ease-in-out infinite;
        }

        .animate-float {
          animation: subtleFloat 6s ease-in-out infinite;
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
          {/* Background Image with Cinematic Zoom */}
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
            {/* Dark gradient overlay for text readability */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(7,29,73,0.7) 0%, rgba(7,29,73,0.5) 40%, rgba(7,29,73,0.8) 100%)',
            }} />
            {/* Gold accent glow */}
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
            {/* Pre-headline badge */}
            <div className="animate-fade-1" style={{ marginBottom: '32px' }}>
              <span style={{
                ...styles.glassGold,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 20px',
                borderRadius: '50px',
                fontSize: '11px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#FFD966',
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  animation: 'pulse 2s ease-in-out infinite',
                }} />
                Mentoría en Vivo
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
                Trae a tu familia
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
              El camino más accesible existe.{' '}
              <span style={{ color: '#ffffff', fontWeight: 400 }}>Y está en Utah.</span>
            </p>

            {/* Value props */}
            <div className="animate-fade-5" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '40px',
            }}>
              {[
                { label: 'Solo $30 USD', accent: true },
                { label: 'Grabación incluida', accent: false },
                { label: 'Q&A en vivo', accent: false },
              ].map((item, i) => (
                <span key={i} style={{
                  ...(item.accent ? styles.glassGold : styles.glass),
                  padding: '12px 20px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  color: item.accent ? '#FFD966' : 'rgba(255, 255, 255, 0.7)',
                  fontWeight: item.accent ? 500 : 400,
                }}>
                  {item.label}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="animate-fade-6">
              <button
                onClick={handleCTA}
                className="cta-btn"
                style={styles.ctaButton}
              >
                RESERVAR MI LUGAR
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
                Empresa constituida en Estados Unidos
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
            URGENCY BAR
        ══════════════════════════════════════════════════════════════ */}
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'linear-gradient(90deg, #AA0200 0%, #CC2A2A 50%, #AA0200 100%)',
          padding: '12px 16px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}>
          <div style={{
            ...styles.maxWidth,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            textAlign: 'center',
          }}>
            <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 300 }}>
              ⚡ Precio especial termina en:
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'monospace' }}>
              {[
                { value: timeLeft.hours, label: 'h' },
                { value: timeLeft.minutes, label: 'm' },
                { value: timeLeft.seconds, label: 's' },
              ].map((unit, i) => (
                <React.Fragment key={i}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '4px',
                  }}>
                    <span style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff' }}>
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>{unit.label}</span>
                  </div>
                  {i < 2 && <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>:</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

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
                { emoji: '😔', title: 'Sin guía confiable', desc: 'No conoces a nadie que lo haya logrado antes.' },
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
                    <span style={{ color: '#FFB81D', fontWeight: 500 }}>hay un camino más simple.</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SOLUTION - WHY UTAH
        ══════════════════════════════════════════════════════════════ */}
        <section style={{
          ...styles.sectionLg,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background Image with Ken Burns */}
          <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
          }}>
            <ResponsiveImage
              desktopSrc="/images/utah/utah-city-desktop.jpeg"
              mobileSrc="/images/utah/utah-city-mobile.jpeg"
              alt="Vista panorámica de Salt Lake City, Utah"
              className="animate-ken-burns"
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
            {/* Dark overlay for content readability */}
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
                { icon: '💰', stat: '40%', label: 'más baratas', title: 'Universidades accesibles', desc: 'Opciones reales para familias latinas. Sin endeudarte de por vida.', accent: '#FFB81D' },
                { icon: '🏠', stat: '#1', label: 'en seguridad', title: 'Ambiente familiar', desc: 'Comunidad acogedora y segura. Ideal para jóvenes lejos de casa.', accent: '#FFFFFF' },
                { icon: '📈', stat: '#1', label: 'en crecimiento', title: 'Oportunidades laborales', desc: 'El estado con mayor crecimiento económico de USA.', accent: '#FFB81D' },
                { icon: '🏔️', stat: '25%', label: 'más accesible', title: 'Calidad de vida', desc: 'Naturaleza, seguridad y costo de vida razonable.', accent: '#FFFFFF' },
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
            STATS SECTION
        ══════════════════════════════════════════════════════════════ */}
        <section style={{
          padding: '64px 24px',
          background: 'linear-gradient(180deg, #071D49 0%, #0a2a5c 50%, #071D49 100%)',
        }}>
          <div style={styles.maxWidth}>
            <div style={{
              ...styles.glassGold,
              borderRadius: '32px',
              padding: '48px 32px',
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '32px',
                textAlign: 'center',
              }}>
                {[
                  { value: 500, suffix: '+', label: 'Familias ayudadas' },
                  { value: 15, suffix: '', label: 'Años de experiencia' },
                  { value: 98, suffix: '%', label: 'Satisfacción' },
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{
                      ...styles.fontEditorial,
                      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                      fontWeight: 300,
                      color: '#FFB81D',
                      marginBottom: '8px',
                    }}>
                      <AnimatedNumber value={item.value} suffix={item.suffix} />
                    </div>
                    <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', letterSpacing: '0.05em' }}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FOR WHO SECTION
        ══════════════════════════════════════════════════════════════ */}
        <section style={{
          ...styles.sectionLg,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background Image - Students in Library */}
          <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
          }}>
            <ResponsiveImage
              desktopSrc="/images/utah/students-desktop.jpeg"
              mobileSrc="/images/utah/students-mobile.jpeg"
              alt="Estudiantes latinos en biblioteca universitaria"
              className="animate-float"
              style={{
                position: 'absolute',
                width: '100%',
                height: '110%',
                objectFit: 'cover',
                objectPosition: 'center top',
                top: '-5%',
              }}
            />
            {/* Dark overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(7,29,73,0.92) 0%, rgba(7,29,73,0.85) 50%, rgba(7,29,73,0.92) 100%)',
            }} />
          </div>

          <div style={{ ...styles.maxWidth, position: 'relative', zIndex: 10 }}>
            <Reveal>
              <div style={{ ...styles.textCenter, marginBottom: '64px' }}>
                <span style={{
                  ...styles.glass,
                  ...styles.badge,
                  color: '#FFB81D',
                  marginBottom: '24px',
                }}>¿Es Para Ti?</span>
                <h2 className="section-title" style={{
                  ...styles.fontEditorial,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 300,
                }}>
                  Esta mentoría es perfecta si...
                </h2>
              </div>
            </Reveal>

            <div style={styles.grid2}>
              {[
                { icon: '👨‍👩‍👧‍👦', text: 'Tienes hijos o hermanos que sueñan con estudiar en USA' },
                { icon: '🌎', text: 'Eres latino en Estados Unidos buscando opciones accesibles' },
                { icon: '💡', text: 'Quieres un plan claro, paso a paso, sin complicaciones' },
                { icon: '🎯', text: 'Buscas la mejor inversión para el futuro de tu familia' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '24px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.3s ease',
                  }}>
                    <span style={{ fontSize: '32px' }}>{item.icon}</span>
                    <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.5 }}>{item.text}</p>
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
                'Requisitos de visa y documentación necesaria',
                'Las mejores universidades en Utah (costo-beneficio)',
                'Opciones de financiamiento y becas disponibles',
                'Cómo preparar a tu familiar para la entrevista',
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
            PRICING CARD
        ══════════════════════════════════════════════════════════════ */}
        <section style={{
          ...styles.sectionLg,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Abstract Golden Background */}
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
            {/* Animated shimmer overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,184,29,0.1) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
              animation: 'shimmerBg 4s ease-in-out infinite',
            }} />
            {/* Dark gradient overlay */}
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
                }}>
                  {/* Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: '#FFFFFF',
                    color: '#071D49',
                    padding: '6px 12px',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}>
                    MEJOR VALOR
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

                  {/* Price */}
                  <div style={{ marginBottom: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                      <span style={{
                        fontSize: '20px',
                        color: 'rgba(255, 255, 255, 0.4)',
                        textDecoration: 'line-through',
                      }}>$97</span>
                      <span style={{
                        ...styles.fontEditorial,
                        fontSize: '64px',
                        fontWeight: 300,
                        color: '#FFB81D',
                      }}>$30</span>
                    </div>
                    <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)' }}>USD · Pago único</p>
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
                    RESERVAR AHORA
                    <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <p style={{
                    marginTop: '16px',
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.4)',
                  }}>
                    🔒 Pago seguro · Satisfacción garantizada
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            ABOUT / AUTHORITY
        ══════════════════════════════════════════════════════════════ */}
        <section style={{
          ...styles.sectionLg,
          background: '#0a2a5c',
        }}>
          <div style={styles.maxWidth}>
            <Reveal>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '48px',
                alignItems: 'center',
              }}>
                <div>
                  <span style={{
                    ...styles.badge,
                    ...styles.glassGold,
                    color: '#FFD966',
                    marginBottom: '24px',
                  }}>Sobre StarbizAcademy</span>

                  <h2 style={{
                    ...styles.fontEditorial,
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    fontWeight: 300,
                    marginBottom: '24px',
                    lineHeight: 1.3,
                  }}>
                    Ayudando a familias latinas a alcanzar el sueño americano
                  </h2>

                  <p style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    lineHeight: 1.8,
                    marginBottom: '24px',
                    fontSize: '16px',
                  }}>
                    StarbizAcademy es una empresa constituida en Estados Unidos dedicada a guiar
                    a familias latinas en su camino hacia una mejor educación. Con más de 15 años
                    de experiencia y cientos de familias ayudadas, conocemos el proceso de primera mano.
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                  }}>
                    {[
                      { icon: '🏢', text: 'Empresa en USA' },
                      { icon: '🎓', text: '+15 años' },
                      { icon: '🌟', text: '+500 familias' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '8px',
                        fontSize: '14px',
                      }}>
                        <span>{item.icon}</span>
                        <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  ...styles.glassGold,
                  borderRadius: '24px',
                  padding: '32px',
                  textAlign: 'center',
                }}>
                  {/* Henry's Professional Photo */}
                  <div style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    margin: '0 auto 24px',
                    overflow: 'hidden',
                    border: '3px solid rgba(255, 184, 29, 0.4)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                  }}>
                    <ResponsiveImage
                      desktopSrc="/images/utah/henry-desktop.jpeg"
                      mobileSrc="/images/utah/henry-mobile.jpeg"
                      alt="Henry Orellana - Fundador de StarbizAcademy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                      }}
                    />
                  </div>
                  <h3 style={{
                    ...styles.fontEditorial,
                    fontSize: '24px',
                    fontWeight: 400,
                    marginBottom: '12px',
                  }}>Henry Orellana</h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#FFB81D',
                    marginBottom: '16px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}>Fundador · Mentor</p>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '14px',
                    lineHeight: 1.6,
                  }}>
                    Empresario y educador con más de 15 años ayudando a la comunidad latina
                    a navegar el sistema educativo estadounidense.
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
                { q: '¿Es en español?', a: '¡Sí! Toda la mentoría es 100% en español, pensada para nuestra comunidad latina.' },
                { q: '¿Cómo recibo el acceso?', a: 'Inmediatamente después de tu pago recibirás un email con el link a la sesión en vivo y al grupo de WhatsApp.' },
                { q: '¿Puedo hacer preguntas durante la sesión?', a: '¡Por supuesto! Habrá un espacio dedicado de Q&A para resolver todas tus dudas específicas.' },
                { q: '¿Este proceso aplica para cualquier familiar?', a: 'Sí, el proceso es similar para hijos, hermanos, sobrinos o cualquier familiar que quiera estudiar en USA.' },
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
          {/* Background Image - Graduation Family */}
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
                transition: 'filter 0.5s ease',
              }}
            />
            {/* Gradient overlay combining dark with forest green accent */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(7,29,73,0.85) 0%, rgba(170,2,0,0.7) 50%, rgba(7,29,73,0.9) 100%)',
            }} />
          </div>

          <div style={{ ...styles.maxWidth, position: 'relative', zIndex: 10 }}>
            <Reveal>
              <h2 style={{
                ...styles.fontEditorial,
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                fontWeight: 300,
                marginBottom: '24px',
                lineHeight: 1.2,
              }}>
                Tu familia merece{' '}
                <span className="text-gold" style={{ fontStyle: 'italic' }}>esta oportunidad</span>
              </h2>

              <p style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.6)',
                maxWidth: '500px',
                margin: '0 auto 40px',
                lineHeight: 1.6,
              }}>
                No dejes pasar más tiempo. El sueño de estudiar en USA está más cerca de lo que crees.
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
                RESERVAR MI LUGAR POR $30
                <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <p style={{
                marginTop: '24px',
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.4)',
              }}>
                ⏰ Cupos limitados · Grabación incluida si no puedes asistir
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
            {/* Utah Logo with Pulse Animation */}
            <div style={{
              marginBottom: '24px',
            }}>
              <ResponsiveImage
                desktopSrc="/images/utah/logo-utah-desktop.jpeg"
                mobileSrc="/images/utah/logo-utah-mobile.jpeg"
                alt="Logo Utah - Montañas y Sol"
                className="animate-sun-pulse"
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'contain',
                  borderRadius: '16px',
                }}
              />
            </div>
            <p style={{
              ...styles.fontEditorial,
              fontSize: '20px',
              color: '#FFB81D',
              marginBottom: '8px',
            }}>StarbizAcademy</p>
            <p style={{
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.4)',
            }}>
              © {new Date().getFullYear()} · Empresa constituida en Estados Unidos
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
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>Mentoría Utah</p>
              <p style={{ fontSize: '24px', fontWeight: 600, color: '#FFB81D' }}>$30 USD</p>
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
              RESERVAR →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentoriaUtah;
