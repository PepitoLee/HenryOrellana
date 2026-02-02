import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { BookingCalendar, ColorTheme } from '../components/Booking';

// ===== CONFIGURABLE CTA - WHATSAPP =====
const WHATSAPP_NUMBER = '13854564470';
const WHATSAPP_MESSAGE = encodeURIComponent('Hola Henry, me interesa agendar una consulta de mentoría migratoria.');
const CTA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
// ========================================

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
  const [isStickyCTAVisible, setIsStickyCTAVisible] = useState(false);

  // Sticky CTA visibility
  useEffect(() => {
    const handleScroll = () => setIsStickyCTAVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTA = () => {
    const agendaSection = document.getElementById('agenda');
    if (agendaSection) {
      agendaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Nueva paleta de colores - UsaLatino Prime
  const colors = {
    primary: '#1E3A5F',      // Azul Confianza
    primaryLight: '#2C5282',
    primaryDark: '#153152',
    success: '#2E7D32',      // Verde Esperanza
    successLight: '#4CAF50',
    accent: '#F5A623',       // Dorado Cálido
    accentLight: '#FFD54F',
    white: '#FFFFFF',
    offWhite: '#F5F5F5',
    gray: '#6B7280',
    grayLight: '#9CA3AF',
    text: '#1F2937',
    danger: '#DC2626',
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: colors.white,
      color: colors.text,
      fontFamily: "'Outfit', system-ui, sans-serif",
      overflowX: 'hidden' as const,
    },
    section: {
      padding: '80px 24px',
    },
    sectionAlt: {
      padding: '80px 24px',
      backgroundColor: colors.offWhite,
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
    },
    fontEditorial: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
    },
    ctaButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      background: `linear-gradient(135deg, ${colors.success} 0%, ${colors.successLight} 100%)`,
      color: colors.white,
      fontWeight: 600,
      fontSize: '16px',
      letterSpacing: '0.02em',
      padding: '18px 36px',
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: `0 8px 24px -8px ${colors.success}80`,
    },
    ctaButtonSecondary: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      background: 'transparent',
      color: colors.primary,
      fontWeight: 600,
      fontSize: '16px',
      padding: '18px 36px',
      borderRadius: '12px',
      border: `2px solid ${colors.primary}`,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    card: {
      padding: '32px',
      borderRadius: '16px',
      backgroundColor: colors.white,
      boxShadow: '0 4px 24px -4px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 16px',
      borderRadius: '50px',
      fontSize: '12px',
      letterSpacing: '0.15em',
      textTransform: 'uppercase' as const,
      fontWeight: 600,
    },
    grid4: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '24px',
    },
    grid2: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
    },
    textCenter: {
      textAlign: 'center' as const,
    },
  };

  // Servicios principales
  const servicios = [
    {
      icon: '🏛️',
      title: 'Asilo Político',
      desc: 'Para personas que huyen de persecución en su país de origen por razones políticas, religiosas o sociales.',
      color: colors.primary,
    },
    {
      icon: '📋',
      title: 'Restructuración de Casos',
      desc: 'Si tu caso fue denegado o está complicado, te oriento sobre opciones para reestructurarlo.',
      color: colors.success,
    },
    {
      icon: '👶',
      title: 'Visa Juvenil (SIJS)',
      desc: 'Para menores de 21 años en situaciones especiales que califican para este beneficio migratorio.',
      color: colors.accent,
    },
    {
      icon: '🔄',
      title: 'Ajustes de Status',
      desc: 'Cambio de estatus migratorio dentro de Estados Unidos. Te explico las opciones disponibles.',
      color: colors.primaryLight,
    },
  ];

  // Proceso de 4 pasos
  const pasos = [
    {
      num: '01',
      title: 'Agenda tu consulta',
      desc: 'Reserva tu sesión 1-a-1 por solo $50 USD vía WhatsApp.',
    },
    {
      num: '02',
      title: 'Conversamos',
      desc: 'Me cuentas tu situación migratoria y tus objetivos.',
    },
    {
      num: '03',
      title: 'Te oriento',
      desc: 'Te explico qué opciones tienes y qué camino seguir.',
    },
    {
      num: '04',
      title: 'Siguientes pasos',
      desc: 'Te conecto con recursos o abogados si es necesario.',
    },
  ];

  // Razones para elegir
  const razones = [
    {
      icon: '🌎',
      title: 'Viví el proceso',
      desc: 'Conozco de primera mano los desafíos del proceso migratorio.',
    },
    {
      icon: '💬',
      title: 'Hablo tu idioma',
      desc: 'Todo en español, sin barreras de comunicación.',
    },
    {
      icon: '🤝',
      title: 'Entiendo tu cultura',
      desc: 'Comprendo las dificultades que enfrentamos como latinos.',
    },
    {
      icon: '💰',
      title: 'Precio accesible',
      desc: 'Solo $50 por consulta, sin compromisos adicionales.',
    },
  ];

  // FAQs
  const faqs = [
    {
      q: '¿Eres abogado de inmigración?',
      a: 'NO, NO soy abogado. Soy un MENTOR que comparte su experiencia personal con el sistema migratorio. No ofrezco asesoría legal ni representación. Si necesitas un abogado, te puedo orientar sobre cómo encontrar uno.',
    },
    {
      q: '¿Qué incluye la consulta de $50?',
      a: 'Una sesión 1-a-1 conmigo donde escucho tu situación, te explico las opciones que conozco basado en mi experiencia, y te oriento sobre los siguientes pasos que podrías considerar.',
    },
    {
      q: '¿Puedes garantizar resultados?',
      a: 'NO puedo garantizar ningún resultado. Cada caso es único y depende de muchos factores. Mi rol es orientarte basado en mi experiencia, pero las decisiones finales y los resultados dependen de muchos otros factores.',
    },
    {
      q: '¿Trabajas con abogados?',
      a: 'Conozco profesionales en el área y puedo orientarte sobre cómo buscar un abogado de inmigración si tu caso lo requiere. Pero no represento ni trabajo para ningún bufete de abogados.',
    },
    {
      q: '¿Cómo agendo mi consulta?',
      a: 'Simplemente haz clic en cualquier botón de esta página para contactarme por WhatsApp. Coordinaremos el día y hora, y te enviaré el link de pago de $50 USD.',
    },
  ];

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>UsaLatino Prime | Mentoría Migratoria con Henry Orellana</title>
        <meta name="description" content="Mentoría migratoria personalizada. NO soy abogado - Soy tu MENTOR. Orientación basada en experiencia real por $50 USD. Asilo, SIJS, Ajustes de Status." />
        <meta property="og:title" content="UsaLatino Prime - Mentoría Migratoria" />
        <meta property="og:description" content="Orientación migratoria de alguien que ha vivido el proceso. Consulta 1-a-1 por $50 USD." />
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-1 { animation: fadeUp 0.8s ease-out 0.1s both; }
        .animate-fade-2 { animation: fadeUp 0.8s ease-out 0.2s both; }
        .animate-fade-3 { animation: fadeUp 0.8s ease-out 0.3s both; }
        .animate-fade-4 { animation: fadeUp 0.8s ease-out 0.4s both; }
        .animate-fade-5 { animation: fadeUp 0.8s ease-out 0.5s both; }

        .cta-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 12px 32px -8px rgba(46, 125, 50, 0.5) !important;
        }

        .cta-btn-secondary:hover {
          background-color: #1E3A5F !important;
          color: white !important;
        }

        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px -12px rgba(0, 0, 0, 0.15);
        }

        .service-card:hover {
          transform: translateY(-6px);
        }

        .faq-item { cursor: pointer; }
        .faq-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .faq-content.open { max-height: 300px; }

        .disclaimer-box {
          animation: pulse 3s ease-in-out infinite;
        }

        ::selection {
          background: #F5A623;
          color: #1E3A5F;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem !important; }
          .hero-subtitle { font-size: 1.125rem !important; }
          .section-title { font-size: 1.75rem !important; }
          .step-grid { grid-template-columns: 1fr !important; }
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
          alignItems: 'center',
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
          overflow: 'hidden',
        }}>
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 20% 80%, ${colors.primaryLight}30 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${colors.accent}20 0%, transparent 50%)`,
            pointerEvents: 'none',
          }} />

          <div style={{
            ...styles.maxWidth,
            padding: '120px 24px 80px',
            position: 'relative',
            zIndex: 10,
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '64px',
              alignItems: 'center',
            }}>
              {/* Left Content */}
              <div>
                {/* Pre-headline badge */}
                <div className="animate-fade-1" style={{ marginBottom: '24px' }}>
                  <span style={{
                    ...styles.badge,
                    background: `${colors.accent}20`,
                    color: colors.accent,
                    border: `1px solid ${colors.accent}40`,
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: colors.accent,
                      marginRight: '10px',
                      animation: 'pulse 2s ease-in-out infinite',
                    }} />
                    UsaLatino Prime
                  </span>
                </div>

                {/* Main headline */}
                <h1 className="animate-fade-2 hero-title" style={{
                  ...styles.fontEditorial,
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 400,
                  color: colors.white,
                  lineHeight: 1.1,
                  marginBottom: '24px',
                }}>
                  Mentoría Migratoria{' '}
                  <span style={{
                    color: colors.accent,
                    fontStyle: 'italic',
                  }}>Personalizada</span>
                </h1>

                {/* Subheadline */}
                <p className="animate-fade-3 hero-subtitle" style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 300,
                  maxWidth: '500px',
                  marginBottom: '32px',
                  lineHeight: 1.6,
                }}>
                  Orientación de alguien que ha vivido el proceso migratorio.{' '}
                  <span style={{ color: colors.white, fontWeight: 500 }}>
                    Consulta 1-a-1 por solo $50 USD.
                  </span>
                </p>

                {/* Important Disclaimer Badge */}
                <div className="animate-fade-4" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(220, 38, 38, 0.15)',
                  border: '2px solid rgba(220, 38, 38, 0.4)',
                  padding: '14px 20px',
                  borderRadius: '12px',
                  marginBottom: '32px',
                }}>
                  <span style={{ fontSize: '24px' }}>⚠️</span>
                  <span style={{
                    color: colors.white,
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}>
                    IMPORTANTE: <span style={{ fontWeight: 400, opacity: 0.9 }}>NO soy abogado - Soy tu MENTOR</span>
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="animate-fade-5" style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px',
                  marginBottom: '32px',
                }}>
                  <button
                    onClick={handleCTA}
                    className="cta-btn"
                    style={styles.ctaButton}
                  >
                    <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    AGENDA TU CONSULTA - $50
                  </button>
                </div>

                {/* Trust indicators */}
                <div className="animate-fade-5" style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '20px',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.6)',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <svg style={{ width: '16px', height: '16px', color: colors.success }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Respuesta en 24h
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <svg style={{ width: '16px', height: '16px', color: colors.success }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    100% en español
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <svg style={{ width: '16px', height: '16px', color: colors.success }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sin compromisos
                  </span>
                </div>
              </div>

              {/* Right - Price Card */}
              <div className="animate-fade-3" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                padding: '40px 32px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center',
              }}>
                <div style={{
                  background: colors.accent,
                  color: colors.primaryDark,
                  padding: '8px 20px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '24px',
                }}>
                  Consulta 1-a-1
                </div>

                <div style={{
                  ...styles.fontEditorial,
                  fontSize: '72px',
                  fontWeight: 400,
                  color: colors.white,
                  lineHeight: 1,
                  marginBottom: '8px',
                }}>
                  $50
                </div>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '14px',
                  marginBottom: '24px',
                }}>
                  USD · Pago único
                </p>

                <div style={{
                  textAlign: 'left',
                  marginBottom: '24px',
                }}>
                  {[
                    'Sesión personalizada 1-a-1',
                    'Análisis de tu situación',
                    'Orientación sobre opciones',
                    'Siguientes pasos claros',
                    'Vía WhatsApp o llamada',
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 0',
                      borderBottom: i < 4 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                    }}>
                      <svg style={{ width: '18px', height: '18px', color: colors.success, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleCTA}
                  className="cta-btn"
                  style={{
                    ...styles.ctaButton,
                    width: '100%',
                    justifyContent: 'center',
                  }}
                >
                  <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  CONTACTAR AHORA
                </button>
              </div>
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
            gap: '8px',
            animation: 'float 2s ease-in-out infinite',
          }}>
            <span style={{
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.4)',
            }}>Scroll</span>
            <svg style={{ width: '20px', height: '20px', color: 'rgba(255, 255, 255, 0.4)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            DISCLAIMER SECTION - MUY IMPORTANTE
        ══════════════════════════════════════════════════════════════ */}
        <section style={{
          padding: '48px 24px',
          background: `linear-gradient(135deg, ${colors.danger}15 0%, ${colors.accent}10 100%)`,
          borderTop: `3px solid ${colors.danger}`,
          borderBottom: `3px solid ${colors.danger}`,
        }}>
          <div style={{ ...styles.maxWidth, maxWidth: '900px' }}>
            <div className="disclaimer-box" style={{
              background: colors.white,
              borderRadius: '16px',
              padding: '32px',
              border: `2px solid ${colors.danger}40`,
              boxShadow: '0 8px 32px rgba(220, 38, 38, 0.1)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
              }}>
                <span style={{
                  fontSize: '48px',
                  lineHeight: 1,
                  flexShrink: 0,
                }}>⚠️</span>
                <div>
                  <h2 style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: colors.danger,
                    marginBottom: '16px',
                  }}>
                    IMPORTANTE: Disclaimer Legal
                  </h2>
                  <div style={{
                    fontSize: '16px',
                    color: colors.text,
                    lineHeight: 1.8,
                  }}>
                    <p style={{ marginBottom: '12px' }}>
                      <strong>Henry Orellana NO es abogado de inmigración.</strong> No estoy licenciado para practicar leyes ni proporciono asesoría legal.
                    </p>
                    <p style={{ marginBottom: '12px' }}>
                      Ofrezco <strong>MENTORÍA</strong> basada en mi experiencia personal con el sistema migratorio estadounidense. Mi rol es:
                    </p>
                    <ul style={{ marginLeft: '24px', marginBottom: '12px' }}>
                      <li>Orientarte sobre opciones que podrías considerar</li>
                      <li>Compartir mi experiencia y conocimiento general</li>
                      <li>Ayudarte a entender mejor tu situación</li>
                      <li>Conectarte con recursos y profesionales si es necesario</li>
                    </ul>
                    <p style={{
                      background: `${colors.accent}20`,
                      padding: '12px 16px',
                      borderRadius: '8px',
                      fontWeight: 500,
                    }}>
                      Para asesoría legal o representación, debes consultar con un abogado de inmigración licenciado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SERVICIOS SECTION
        ══════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <div style={styles.maxWidth}>
            <Reveal>
              <div style={{ ...styles.textCenter, marginBottom: '64px' }}>
                <span style={{
                  ...styles.badge,
                  background: `${colors.primary}10`,
                  color: colors.primary,
                  marginBottom: '16px',
                }}>Áreas de Orientación</span>
                <h2 className="section-title" style={{
                  ...styles.fontEditorial,
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  fontWeight: 400,
                  color: colors.text,
                  marginBottom: '16px',
                }}>
                  ¿En qué puedo orientarte?
                </h2>
                <p style={{
                  fontSize: '18px',
                  color: colors.gray,
                  maxWidth: '600px',
                  margin: '0 auto',
                }}>
                  Basado en mi experiencia, puedo ayudarte a entender mejor estos procesos migratorios:
                </p>
              </div>
            </Reveal>

            <div style={styles.grid4}>
              {servicios.map((servicio, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div
                    className="service-card card-hover"
                    style={{
                      ...styles.card,
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer',
                    }}
                    onClick={handleCTA}
                  >
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: servicio.color,
                    }} />
                    <span style={{
                      fontSize: '48px',
                      display: 'block',
                      marginBottom: '20px',
                    }}>{servicio.icon}</span>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: 600,
                      color: colors.text,
                      marginBottom: '12px',
                    }}>{servicio.title}</h3>
                    <p style={{
                      color: colors.gray,
                      lineHeight: 1.6,
                      fontSize: '15px',
                    }}>{servicio.desc}</p>
                    <div style={{
                      marginTop: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: servicio.color,
                      fontSize: '14px',
                      fontWeight: 600,
                    }}>
                      Consultar
                      <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PROCESO - 4 PASOS
        ══════════════════════════════════════════════════════════════ */}
        <section style={styles.sectionAlt}>
          <div style={styles.maxWidth}>
            <Reveal>
              <div style={{ ...styles.textCenter, marginBottom: '64px' }}>
                <span style={{
                  ...styles.badge,
                  background: `${colors.success}15`,
                  color: colors.success,
                  marginBottom: '16px',
                }}>Proceso Simple</span>
                <h2 className="section-title" style={{
                  ...styles.fontEditorial,
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  fontWeight: 400,
                  color: colors.text,
                }}>
                  ¿Cómo funciona?
                </h2>
              </div>
            </Reveal>

            <div className="step-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}>
              {pasos.map((paso, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div style={{
                    textAlign: 'center',
                    position: 'relative',
                  }}>
                    {/* Connector line */}
                    {i < 3 && (
                      <div style={{
                        position: 'absolute',
                        top: '40px',
                        left: '60%',
                        width: '80%',
                        height: '2px',
                        background: `linear-gradient(90deg, ${colors.success}, ${colors.success}30)`,
                        display: 'none',
                      }} className="connector" />
                    )}

                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${colors.success} 0%, ${colors.successLight} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px',
                      boxShadow: `0 8px 24px -8px ${colors.success}60`,
                    }}>
                      <span style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        color: colors.white,
                      }}>{paso.num}</span>
                    </div>

                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: colors.text,
                      marginBottom: '12px',
                    }}>{paso.title}</h3>
                    <p style={{
                      color: colors.gray,
                      fontSize: '14px',
                      lineHeight: 1.6,
                      maxWidth: '200px',
                      margin: '0 auto',
                    }}>{paso.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={500}>
              <div style={{ ...styles.textCenter, marginTop: '48px' }}>
                <button
                  onClick={handleCTA}
                  className="cta-btn"
                  style={styles.ctaButton}
                >
                  <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  EMPEZAR AHORA - $50
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            CALENDARIO DE RESERVAS
        ══════════════════════════════════════════════════════════════ */}
        <section id="agenda" style={styles.section}>
          <div style={styles.maxWidth}>
            <Reveal>
              <div style={{ ...styles.textCenter, marginBottom: '48px' }}>
                <span style={{
                  ...styles.badge,
                  background: `${colors.success}15`,
                  color: colors.success,
                  marginBottom: '16px',
                }}>Agenda tu Consulta</span>
                <h2 className="section-title" style={{
                  ...styles.fontEditorial,
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  fontWeight: 400,
                  color: colors.text,
                }}>
                  Selecciona tu Horario
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  color: colors.gray,
                  maxWidth: '600px',
                  margin: '16px auto 0',
                  lineHeight: 1.7,
                }}>
                  Elige el día y hora que mejor se adapte a tu agenda para nuestra sesión de mentoría personalizada.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <BookingCalendar
                serviceType="mentoria-usa"
                priceAmount={50}
                priceCurrency="USD"
                whatsappNumber={WHATSAPP_NUMBER}
                colors={{
                  primary: colors.primary,
                  secondary: colors.primaryLight,
                  success: colors.success,
                  accent: colors.accent,
                  background: colors.white,
                  backgroundAlt: colors.offWhite,
                  text: colors.text,
                  textLight: colors.gray,
                  border: '#E5E7EB',
                }}
              />
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            ¿POR QUÉ ELEGIRME?
        ══════════════════════════════════════════════════════════════ */}
        <section style={{
          ...styles.section,
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
        }}>
          <div style={styles.maxWidth}>
            <Reveal>
              <div style={{ ...styles.textCenter, marginBottom: '64px' }}>
                <span style={{
                  ...styles.badge,
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: colors.white,
                  marginBottom: '16px',
                }}>Mi Compromiso</span>
                <h2 className="section-title" style={{
                  ...styles.fontEditorial,
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  fontWeight: 400,
                  color: colors.white,
                }}>
                  ¿Por qué elegirme como tu mentor?
                </h2>
              </div>
            </Reveal>

            <div style={styles.grid4}>
              {razones.map((razon, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    padding: '32px 24px',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    height: '100%',
                  }}>
                    <span style={{
                      fontSize: '48px',
                      display: 'block',
                      marginBottom: '20px',
                    }}>{razon.icon}</span>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: colors.white,
                      marginBottom: '12px',
                    }}>{razon.title}</h3>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '14px',
                      lineHeight: 1.6,
                    }}>{razon.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            ABOUT HENRY
        ══════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <div style={styles.maxWidth}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}>
              <Reveal>
                <div style={{
                  ...styles.card,
                  textAlign: 'center',
                  padding: '48px 32px',
                }}>
                  {/* Photo placeholder */}
                  <div style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    margin: '0 auto 24px',
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 12px 40px -12px rgba(30, 58, 95, 0.4)',
                    border: `4px solid ${colors.accent}`,
                  }}>
                    <span style={{
                      fontSize: '64px',
                      color: colors.white,
                    }}>👤</span>
                  </div>

                  <h3 style={{
                    ...styles.fontEditorial,
                    fontSize: '28px',
                    fontWeight: 500,
                    color: colors.text,
                    marginBottom: '8px',
                  }}>Henry Orellana</h3>
                  <p style={{
                    fontSize: '14px',
                    color: colors.accent,
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}>Mentor Migratorio</p>
                  <p style={{
                    color: colors.gray,
                    fontSize: '14px',
                    fontStyle: 'italic',
                  }}>
                    "Viví el proceso migratorio. Entiendo tus miedos y tus sueños."
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div>
                  <h2 style={{
                    ...styles.fontEditorial,
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    fontWeight: 400,
                    color: colors.text,
                    marginBottom: '24px',
                  }}>
                    Mi historia es{' '}
                    <span style={{ color: colors.accent, fontStyle: 'italic' }}>tu historia</span>
                  </h2>

                  <div style={{
                    fontSize: '16px',
                    color: colors.gray,
                    lineHeight: 1.8,
                  }}>
                    <p style={{ marginBottom: '16px' }}>
                      Como inmigrante latino, conozco de primera mano lo confuso y abrumador que puede ser navegar el sistema migratorio de Estados Unidos.
                    </p>
                    <p style={{ marginBottom: '16px' }}>
                      Después de años ayudando a amigos y familiares con sus procesos, decidí formalizar mi experiencia para ayudar a más personas de nuestra comunidad.
                    </p>
                    <p style={{ marginBottom: '24px' }}>
                      <strong>Mi misión:</strong> Orientarte con información clara y accesible, en español, sin el lenguaje complicado que usan muchos en la industria.
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}>
                    {[
                      { icon: '🇺🇸', text: 'Residente en USA' },
                      { icon: '🗣️', text: 'Español nativo' },
                      { icon: '💼', text: 'Empresario' },
                    ].map((item, i) => (
                      <span key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 16px',
                        background: colors.offWhite,
                        borderRadius: '8px',
                        fontSize: '14px',
                        color: colors.text,
                      }}>
                        <span>{item.icon}</span>
                        {item.text}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════════════════════ */}
        <section style={styles.sectionAlt}>
          <div style={{ ...styles.maxWidth, maxWidth: '800px' }}>
            <Reveal>
              <div style={{ ...styles.textCenter, marginBottom: '48px' }}>
                <span style={{
                  ...styles.badge,
                  background: `${colors.primary}10`,
                  color: colors.primary,
                  marginBottom: '16px',
                }}>FAQ</span>
                <h2 className="section-title" style={{
                  ...styles.fontEditorial,
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 400,
                  color: colors.text,
                }}>
                  Preguntas Frecuentes
                </h2>
              </div>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div
                    className="faq-item"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      background: colors.white,
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                      border: `1px solid ${openFaq === i ? colors.primary : 'rgba(0, 0, 0, 0.08)'}`,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '20px 24px',
                    }}>
                      <span style={{
                        fontWeight: 600,
                        color: colors.text,
                        fontSize: '16px',
                      }}>{faq.q}</span>
                      <svg
                        style={{
                          width: '20px',
                          height: '20px',
                          color: colors.primary,
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
                        color: colors.gray,
                        lineHeight: 1.7,
                        fontSize: '15px',
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
          padding: '100px 24px',
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background pattern */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 30% 70%, ${colors.accent}15 0%, transparent 40%), radial-gradient(circle at 70% 30%, ${colors.success}10 0%, transparent 40%)`,
            pointerEvents: 'none',
          }} />

          <div style={{ ...styles.maxWidth, position: 'relative', zIndex: 10 }}>
            <Reveal>
              <span style={{
                ...styles.badge,
                background: 'rgba(255, 255, 255, 0.15)',
                color: colors.white,
                marginBottom: '24px',
              }}>Da el primer paso</span>

              <h2 style={{
                ...styles.fontEditorial,
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 400,
                color: colors.white,
                marginBottom: '24px',
                lineHeight: 1.2,
              }}>
                No tienes que navegar esto{' '}
                <span style={{ color: colors.accent, fontStyle: 'italic' }}>solo</span>
              </h2>

              <p style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '600px',
                margin: '0 auto 40px',
                lineHeight: 1.6,
              }}>
                Agenda tu consulta hoy y empecemos a explorar tus opciones. Por solo $50 USD, tendrás orientación personalizada de alguien que entiende tu situación.
              </p>

              <button
                onClick={handleCTA}
                className="cta-btn"
                style={{
                  ...styles.ctaButton,
                  fontSize: '18px',
                  padding: '22px 44px',
                }}
              >
                <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                AGENDAR MI CONSULTA - $50 USD
              </button>

              <p style={{
                marginTop: '24px',
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
              }}>
                ⚡ Respuesta en menos de 24 horas · 100% en español
              </p>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FOOTER
        ══════════════════════════════════════════════════════════════ */}
        <footer style={{
          padding: '48px 24px',
          backgroundColor: colors.primaryDark,
          textAlign: 'center',
        }}>
          <div style={styles.maxWidth}>
            <p style={{
              ...styles.fontEditorial,
              fontSize: '24px',
              color: colors.accent,
              marginBottom: '8px',
            }}>UsaLatino Prime</p>
            <p style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: '24px',
            }}>
              Mentoría Migratoria
            </p>

            <div style={{
              padding: '16px',
              background: 'rgba(220, 38, 38, 0.1)',
              borderRadius: '8px',
              marginBottom: '24px',
              maxWidth: '600px',
              margin: '0 auto 24px',
            }}>
              <p style={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.6)',
                lineHeight: 1.6,
              }}>
                <strong style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Disclaimer:</strong> Henry Orellana no es abogado y no proporciona asesoría legal. Los servicios ofrecidos son de mentoría basada en experiencia personal. Para asesoría legal, consulte con un abogado licenciado.
              </p>
            </div>

            <p style={{
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.4)',
            }}>
              © {new Date().getFullYear()} UsaLatino Prime · Todos los derechos reservados
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
          background: colors.white,
          borderTop: `1px solid rgba(0, 0, 0, 0.1)`,
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
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
              <p style={{ fontSize: '12px', color: colors.gray }}>Consulta 1-a-1</p>
              <p style={{ fontSize: '24px', fontWeight: 700, color: colors.success }}>$50 USD</p>
            </div>
            <button
              onClick={handleCTA}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: `linear-gradient(135deg, ${colors.success} 0%, ${colors.successLight} 100%)`,
                color: colors.white,
                fontWeight: 600,
                fontSize: '14px',
                padding: '14px 24px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentoriaUtah;
