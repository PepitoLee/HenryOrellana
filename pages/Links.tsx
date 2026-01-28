import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

// ===== UTAH COLORS =====
const COLORS = {
  blue: '#071D49',
  blueLight: '#0a2a5c',
  gold: '#FFB81D',
  goldLight: '#FFD966',
  goldDark: '#E5A000',
  red: '#AA0200',
  redLight: '#CC2A2A',
  white: '#FFFFFF',
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
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Social Icons
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const Links: React.FC = () => {
  // Products data with images
  const products = [
    {
      id: 1,
      title: 'Utah Mentorship USA',
      subtitle: '$30 USD',
      description: 'Asesoría personalizada para estudiar en USA',
      link: '/asesoria-utah',
      isExternal: false,
      badge: '⭐ Nuevo',
      badgeColor: COLORS.gold,
      type: 'asesoria',
      image: '/images/links/utah.jpg',
      cols: 2,
      imageHeight: 180,
      objectPosition: 'center center',
    },
    {
      id: 2,
      title: 'Utah Mentorship Perú',
      subtitle: 'S/50 PEN',
      description: 'Asesoría para familias LATAM',
      link: '/asesoria-utah-peru',
      isExternal: false,
      badge: '🌎 LATAM',
      badgeColor: COLORS.red,
      type: 'asesoria',
      image: '/images/links/utah-peru.jpg',
      cols: 2,
      imageHeight: 180,
      objectPosition: 'center 30%',
    },
    {
      id: 3,
      title: 'Protocolo Desconexión',
      subtitle: 'Rescata a tu hijo de la adicción digital',
      description: 'Curso completo con estrategias probadas',
      link: 'https://www.henryorellana.com/landingpage',
      isExternal: true,
      badge: '🔥 Hot',
      badgeColor: COLORS.red,
      type: 'curso',
      image: '/images/links/desconexion.png',
      cols: 1,
      imageHeight: 280,
      objectPosition: 'center center',
    },
    {
      id: 4,
      title: 'StarbizAcademy',
      subtitle: 'CEO Junior',
      description: 'Formación empresarial para jóvenes',
      link: '/ceo-junior',
      isExternal: false,
      badge: 'Popular',
      badgeColor: COLORS.gold,
      type: 'programa',
      image: '/images/links/ceo-junior.jpg',
      cols: 1,
      imageHeight: 280,
      objectPosition: 'center 20%',
    },
  ];

  // Social media links
  const socialLinks = [
    { icon: InstagramIcon, label: 'Instagram', link: 'https://www.instagram.com/henryorellanaoficial/', color: '#E4405F' },
    { icon: YouTubeIcon, label: 'YouTube', link: 'https://www.youtube.com/@HenryOrellanaOficial', color: '#FF0000' },
    { icon: TikTokIcon, label: 'TikTok', link: 'https://www.tiktok.com/@henryorellanaoficial', color: '#000000' },
    { icon: FacebookIcon, label: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61581737189432', color: '#1877F2' },
  ];

  const handleLinkClick = (link: string, isExternal: boolean) => {
    if (isExternal) {
      window.open(link, '_blank');
    } else {
      window.location.href = link;
    }
  };

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Henry Orellana | Links</title>
        <meta name="description" content="Todos los enlaces de Henry Orellana - Empresario, Educador y Mentor. Accede a mis programas, cursos y redes sociales." />
        <meta property="og:title" content="Henry Orellana | Links" />
        <meta property="og:description" content="Accede a todos mis programas, cursos y contenido exclusivo." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes floatReverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 184, 29, 0.4), 0 0 40px rgba(255, 184, 29, 0.2); }
          50% { box-shadow: 0 0 30px rgba(255, 184, 29, 0.6), 0 0 60px rgba(255, 184, 29, 0.3); }
        }

        @keyframes borderGlow {
          0%, 100% { border-color: rgba(255, 184, 29, 0.3); }
          50% { border-color: rgba(255, 184, 29, 0.8); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes badgePulse {
          0%, 100% { transform: scale(1); box-shadow: 0 4px 15px rgba(0,0,0,0.3); }
          50% { transform: scale(1.1); box-shadow: 0 6px 25px rgba(0,0,0,0.4); }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .card-link {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
        }

        .card-link::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 26px;
          padding: 2px;
          background: linear-gradient(135deg, ${COLORS.gold}, ${COLORS.blue}, ${COLORS.gold});
          background-size: 200% 200%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .card-link:hover::before {
          opacity: 1;
          animation: gradientMove 2s ease infinite;
        }

        .card-link:hover {
          transform: translateY(-12px) scale(1.03);
          box-shadow: 0 20px 40px rgba(7, 29, 73, 0.25), 0 0 60px rgba(255, 184, 29, 0.2);
        }

        .card-link:hover .card-image {
          transform: scale(1.1);
        }

        .card-link:hover .badge {
          animation: badgePulse 0.6s ease infinite;
        }

        .social-btn {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .social-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .social-btn:hover::after {
          transform: translateX(100%);
        }

        .social-btn:hover {
          transform: scale(1.15) translateY(-5px) rotate(5deg);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
        }

        .hero-image-container {
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          animation: glow 3s ease-in-out infinite;
        }

        .hero-image-container:hover {
          transform: scale(1.05) rotate(2deg);
        }

        .floating-circle {
          animation: float 8s ease-in-out infinite;
        }

        .floating-circle-2 {
          animation: floatReverse 10s ease-in-out infinite;
        }

        .floating-circle-3 {
          animation: float 12s ease-in-out infinite;
        }

        .section-title {
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${COLORS.gold}, transparent);
          transition: width 0.4s ease;
        }

        .section-title:hover::after {
          width: 100%;
        }

        .shimmer-text {
          background: linear-gradient(90deg, ${COLORS.blue} 0%, ${COLORS.gold} 50%, ${COLORS.blue} 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        ::selection {
          background: ${COLORS.gold};
          color: ${COLORS.blue};
        }

        @media (max-width: 640px) {
          .cards-grid {
            grid-template-columns: 1fr !important;
          }
          .card-link {
            grid-column: span 1 !important;
          }
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${COLORS.blue} 0%, ${COLORS.blueLight} 50%, ${COLORS.blue} 100%)`,
        fontFamily: "'Outfit', system-ui, sans-serif",
        padding: '40px 20px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Animated background circles - Utah colors */}
        <div className="floating-circle" style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, ${COLORS.gold}40 0%, ${COLORS.gold}15 40%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(20px)',
        }} />
        <div className="floating-circle-2" style={{
          position: 'absolute',
          bottom: '10%',
          left: '-150px',
          width: '350px',
          height: '350px',
          background: `radial-gradient(circle, ${COLORS.red}30 0%, ${COLORS.red}10 40%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(30px)',
        }} />
        <div className="floating-circle-3" style={{
          position: 'absolute',
          top: '40%',
          right: '-80px',
          width: '250px',
          height: '250px',
          background: `radial-gradient(circle, ${COLORS.goldLight}35 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(25px)',
        }} />
        <div className="floating-circle" style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '180px',
          height: '180px',
          background: `radial-gradient(circle, ${COLORS.gold}25 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(15px)',
        }} />
        {/* Extra decorative ring */}
        <div style={{
          position: 'absolute',
          top: '60%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          border: `1px solid ${COLORS.gold}15`,
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'spin 60s linear infinite',
        }} />

        <div style={{
          maxWidth: '500px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}>
          {/* ========== HERO SECTION ========== */}
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              {/* Hero Image - With glow effect */}
              <div
                className="hero-image-container"
                style={{
                  width: '100%',
                  maxWidth: '280px',
                  margin: '0 auto 24px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, ${COLORS.blue} 0%, ${COLORS.blueLight} 100%)`,
                  border: `3px solid ${COLORS.gold}`,
                  position: 'relative',
                }}
              >
                <img
                  src="/images/hero-principal.png"
                  alt="Henry Orellana"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    aspectRatio: '3/4',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
                {/* Golden overlay gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(to top, ${COLORS.gold}20 0%, transparent 30%)`,
                  pointerEvents: 'none',
                }} />
              </div>

              {/* Name - Shimmer effect */}
              <h1 className="shimmer-text" style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '52px',
                fontWeight: 600,
                fontStyle: 'italic',
                marginBottom: '8px',
                letterSpacing: '-0.02em',
              }}>
                Henry Orellana
              </h1>

              {/* Subtitle */}
              <p style={{
                fontSize: '14px',
                color: COLORS.white,
                marginBottom: '20px',
                lineHeight: 1.6,
                opacity: 0.9,
              }}>
                ✨ Empresario · Educador · Mentor<br />
                <span style={{
                  color: COLORS.gold,
                  fontWeight: 600,
                  textShadow: `0 0 20px ${COLORS.gold}60`,
                }}>
                  Fundador ORELLANA GROUP
                </span>
              </p>

              {/* Social Links Row */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '14px',
              }}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '16px',
                      background: `linear-gradient(145deg, ${COLORS.white} 0%, #f0f0f0 100%)`,
                      boxShadow: `0 4px 15px rgba(0, 0, 0, 0.2), 0 0 20px ${COLORS.gold}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: social.color,
                      textDecoration: 'none',
                      border: `2px solid ${COLORS.gold}50`,
                    }}
                    title={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ========== SECTION TITLE ========== */}
          <Reveal delay={100}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px',
            }}>
              <div style={{
                flex: 1,
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${COLORS.gold})`,
              }} />
              <h2 className="section-title" style={{
                fontSize: '14px',
                color: COLORS.gold,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 600,
                textShadow: `0 0 20px ${COLORS.gold}60`,
              }}>
                🚀 Mis Programas
              </h2>
              <div style={{
                flex: 1,
                height: '2px',
                background: `linear-gradient(90deg, ${COLORS.gold}, transparent)`,
              }} />
            </div>
          </Reveal>

          {/* ========== CARDS GRID ========== */}
          <div
            className="cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '18px',
              marginBottom: '40px',
            }}
          >
            {products.map((product, index) => (
              <Reveal key={product.id} delay={150 + index * 100}>
                <div
                  className="card-link"
                  onClick={() => handleLinkClick(product.link, product.isExternal)}
                  style={{
                    gridColumn: `span ${product.cols}`,
                    background: `linear-gradient(145deg, ${COLORS.white} 0%, #f8f8f8 100%)`,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 30px ${COLORS.gold}15`,
                  }}
                >
                  {/* Badge with pulse effect */}
                  {product.badge && (
                    <span className="badge" style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      zIndex: 10,
                      background: product.badgeColor === COLORS.gold
                        ? `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`
                        : `linear-gradient(135deg, ${COLORS.red}, ${COLORS.redLight})`,
                      color: product.badgeColor === COLORS.gold ? COLORS.blue : COLORS.white,
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '6px 14px',
                      borderRadius: '50px',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    }}>
                      {product.badge}
                    </span>
                  )}

                  {/* Image Container */}
                  <div style={{
                    width: '100%',
                    height: `${product.imageHeight}px`,
                    overflow: 'hidden',
                    background: COLORS.blue,
                    position: 'relative',
                  }}>
                    <img
                      className="card-image"
                      src={product.image}
                      alt={product.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: product.objectPosition,
                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                    {/* Overlay gradient */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(to bottom, transparent 50%, ${COLORS.blue}40 100%)`,
                      pointerEvents: 'none',
                    }} />
                  </div>

                  {/* Content */}
                  <div style={{
                    padding: '18px 20px 20px',
                    background: `linear-gradient(180deg, ${COLORS.white} 0%, #fafafa 100%)`,
                  }}>
                    {/* Type Label - CURSO / ASESORÍA */}
                    <div style={{
                      marginBottom: '10px',
                    }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 12px',
                        borderRadius: '6px',
                        fontSize: '10px',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        background: product.type === 'curso'
                          ? `linear-gradient(135deg, ${COLORS.red} 0%, ${COLORS.redLight} 100%)`
                          : product.type === 'asesoria'
                          ? `linear-gradient(135deg, ${COLORS.blue} 0%, ${COLORS.blueLight} 100%)`
                          : `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldDark} 100%)`,
                        color: product.type === 'programa' ? COLORS.blue : COLORS.white,
                        boxShadow: product.type === 'curso'
                          ? `0 2px 10px ${COLORS.red}50`
                          : product.type === 'asesoria'
                          ? `0 2px 10px ${COLORS.blue}50`
                          : `0 2px 10px ${COLORS.gold}50`,
                        border: product.type === 'curso'
                          ? `2px solid ${COLORS.red}`
                          : product.type === 'asesoria'
                          ? `2px solid ${COLORS.gold}`
                          : `2px solid ${COLORS.goldDark}`,
                      }}>
                        {product.type === 'curso' && '📚'}
                        {product.type === 'asesoria' && '🎯'}
                        {product.type === 'programa' && '⭐'}
                        {product.type === 'curso' ? 'CURSO' : product.type === 'asesoria' ? 'ASESORÍA' : 'PROGRAMA'}
                      </span>
                    </div>

                    {/* Title Row */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}>
                      <h3 style={{
                        fontSize: '17px',
                        fontWeight: 700,
                        color: COLORS.blue,
                        lineHeight: 1.3,
                      }}>
                        {product.title}
                      </h3>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={COLORS.gold}
                        strokeWidth="3"
                        style={{ flexShrink: 0, marginLeft: '10px', marginTop: '2px' }}
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>

                    {/* Subtitle/Price */}
                    <p style={{
                      fontSize: '15px',
                      color: product.type === 'asesoria' ? COLORS.gold : COLORS.blue,
                      fontWeight: 700,
                      marginBottom: '6px',
                      textShadow: product.type === 'asesoria' ? `0 0 10px ${COLORS.gold}40` : 'none',
                    }}>
                      {product.subtitle}
                    </p>

                    {/* Description */}
                    <p style={{
                      fontSize: '13px',
                      color: '#555',
                      lineHeight: 1.5,
                      fontWeight: 500,
                    }}>
                      {product.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ========== FOOTER ========== */}
          <Reveal delay={600}>
            <footer style={{
              textAlign: 'center',
              paddingTop: '28px',
              borderTop: `2px solid ${COLORS.gold}30`,
            }}>
              <p style={{
                fontSize: '12px',
                color: COLORS.white,
                marginBottom: '8px',
                opacity: 0.7,
              }}>
                © {new Date().getFullYear()} ORELLANA GROUP
              </p>
              <a
                href="/"
                style={{
                  fontSize: '14px',
                  color: COLORS.gold,
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  textShadow: `0 0 15px ${COLORS.gold}50`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = `0 0 25px ${COLORS.gold}`;
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = `0 0 15px ${COLORS.gold}50`;
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                henryorellana.com →
              </a>
            </footer>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default Links;
