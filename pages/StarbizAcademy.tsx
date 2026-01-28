import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

// ===== COLORS (Apple-inspired) =====
const COLORS = {
  dark: '#1d1d1f',
  darkGray: '#424245',
  lightGray: '#86868b',
  white: '#ffffff',
  offWhite: '#fbfbfd',
  blue: '#0071e3',
  blueLight: '#2997ff',
  gold: '#FFB81D',
  goldDark: '#E5A000',
  green: '#34c759',
  purple: '#5856d6',
  red: '#ff3b30',
  orange: '#ff9500',
  teal: '#5ac8fa',
  pink: '#ff2d55',
};

// Reveal animation component
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
      { threshold: 0.1, rootMargin: '50px' }
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

const StarbizAcademy: React.FC = () => {
  // CEO Junior Apps
  const ceoJuniorApps = [
    {
      icon: '🏢',
      name: 'StarEmpresa',
      subtitle: 'El Diferencial Harvard',
      description: 'No jugamos a la tiendita. Analizamos empresas reales (Amazon, Tesla, Apple) usando la metodología del caso de Harvard. Descodificamos su estructura para que tu hijo instale el pensamiento empresarial de élite en su mente.',
      color: COLORS.blue,
    },
    {
      icon: '📲',
      name: 'StarEduca',
      subtitle: 'La Fábrica de Recursos',
      description: 'Formación técnica para convertirse en Empresario Digital. Aquí aprenden a crear y vender productos digitales para generar ingresos reales y ayudar a la economía familiar desde jóvenes.',
      color: COLORS.green,
    },
    {
      icon: '🧠',
      name: 'StarLíderes',
      subtitle: 'Modelado de Éxito',
      description: 'Dime a quién admiras y te diré quién serás. Estudiamos la psicología y perseverancia de los líderes que cambiaron el mundo, para que tu hijo tenga referentes de altura, no influencers vacíos.',
      color: COLORS.purple,
    },
    {
      icon: '📚',
      name: 'StarBooks',
      subtitle: 'Mentalidad Acelerada',
      description: 'Libros de desarrollo personal traducidos al lenguaje Gen Z. Metodología de micro-aprendizaje moderna, corta y potente. Leen menos paja, absorben más sabiduría.',
      color: COLORS.orange,
    },
    {
      icon: '🎧',
      name: 'StarVoice',
      subtitle: 'Combustible Diario',
      description: 'Su dosis diaria de inspiración. Audios, historias y relatos para empezar el día con propósito y guía moral.',
      color: COLORS.pink,
    },
    {
      icon: '🇺🇸',
      name: 'English Pre-U',
      subtitle: 'El Puente Global',
      description: 'Inglés con propósito académico. Los preparamos para el estándar universitario internacional (el camino a BYU/Ensign).',
      color: COLORS.teal,
    },
  ];

  // Padres 3.0 Tools
  const padresTools = [
    {
      icon: '🎓',
      name: 'StarEduca Padres',
      subtitle: 'Escuela de Mentores',
      description: 'El manual que no trajo tu hijo. Herramientas de crianza moderna, neurociencia y comunicación para guiar a la nueva generación sin conflictos.',
      color: COLORS.blue,
    },
    {
      icon: '🆘',
      name: 'StarVoice Expert',
      subtitle: 'Soporte de Crisis',
      description: 'No estás solo. Acceso a profesionales digitales (psicólogos, coaches) para resolver los desafíos duros de la adolescencia en tiempo real.',
      color: COLORS.red,
    },
    {
      icon: '📊',
      name: 'Dashboard de Progreso',
      subtitle: 'La Torre de Control',
      description: 'Visualiza el crecimiento de tu hijo. Mira qué libros lee, qué negocios crea y celebra sus victorias. Supervisión transparente que genera confianza, no control.',
      color: COLORS.green,
    },
    {
      icon: '🇺🇸',
      name: 'English Together',
      subtitle: 'Crecimiento Compartido',
      description: 'Aprende inglés a la par de tu hijo. El ejemplo arrastra más que la palabra.',
      color: COLORS.teal,
    },
  ];

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>StarbizAcademy | El Ecosistema donde las Familias Crecen Juntas</title>
        <meta name="description" content="Un Solo Universo. Dos Plataformas Sincronizadas. CEO Junior para adolescentes + Padres 3.0 para la familia. Metodología Harvard aplicada." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@300;400;500;600;700&family=SF+Pro+Text:wght@400;500;600&display=swap" rel="stylesheet" />
      </Helmet>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .app-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .app-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .cta-button {
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0,113,227,0.4);
        }

        .gradient-text {
          background: linear-gradient(135deg, ${COLORS.blue}, ${COLORS.purple}, ${COLORS.pink});
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 5s ease infinite;
        }
      `}</style>

      <div style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif",
        color: COLORS.dark,
        background: COLORS.offWhite,
        overflowX: 'hidden',
      }}>

        {/* ========== HERO SECTION ========== */}
        <section style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '120px 24px 80px',
          background: `linear-gradient(180deg, ${COLORS.offWhite} 0%, ${COLORS.white} 100%)`,
        }}>
          <Reveal>
            <span style={{
              fontSize: '64px',
              display: 'block',
              marginBottom: '16px',
            }}>🌌</span>
          </Reveal>

          <Reveal delay={100}>
            <h1 style={{
              fontSize: 'clamp(40px, 8vw, 80px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              lineHeight: 1.1,
            }}>
              El Ecosistema <span className="gradient-text">Starbiz</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p style={{
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: 500,
              color: COLORS.lightGray,
              marginBottom: '40px',
            }}>
              Un Solo Universo. Dos Plataformas Sincronizadas.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div style={{
              maxWidth: '800px',
              background: COLORS.white,
              borderRadius: '24px',
              padding: '32px 40px',
              boxShadow: '0 4px 30px rgba(0,0,0,0.08)',
              border: `1px solid rgba(0,0,0,0.05)`,
            }}>
              <p style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: COLORS.darkGray,
              }}>
                <span style={{ fontSize: '24px', marginRight: '8px' }}>💎</span>
                "La mayoría separa a la familia: el hijo estudia por allá y el padre trabaja por acá.
                En <strong style={{ color: COLORS.blue }}>Starbiz</strong>, unimos el universo.
                Creamos un ecosistema digital donde el <strong>adolescente se convierte en CEO</strong> y
                el <strong>padre en su mejor Mentor</strong>, conectados por la misma visión."
              </p>
            </div>
          </Reveal>
        </section>

        {/* ========== PILAR 1: CEO JUNIOR ========== */}
        <section style={{
          padding: '100px 24px',
          background: COLORS.dark,
          color: COLORS.white,
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <span style={{
                  display: 'inline-block',
                  background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.purple})`,
                  padding: '8px 20px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 600,
                  marginBottom: '20px',
                  letterSpacing: '0.05em',
                }}>
                  🚀 PILAR 1
                </span>
                <h2 style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: 700,
                  marginBottom: '16px',
                }}>
                  CEO Junior
                </h2>
                <p style={{
                  fontSize: '20px',
                  color: COLORS.lightGray,
                  marginBottom: '8px',
                }}>
                  La Plataforma del Adolescente
                </p>
                <p style={{
                  fontSize: '16px',
                  color: COLORS.gold,
                  fontWeight: 500,
                }}>
                  ⭐ Gen Z - La mejor generación de la historia
                </p>
                <p style={{
                  fontSize: '18px',
                  color: COLORS.lightGray,
                  marginTop: '16px',
                  maxWidth: '600px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                  <strong style={{ color: COLORS.white }}>El Objetivo:</strong> Ser Industriosos y crear recursos mientras estudian.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 600,
                textAlign: 'center',
                marginBottom: '40px',
                color: COLORS.lightGray,
              }}>
                📱 Las "Apps" del Sistema — El Menú de Éxito
              </h3>
            </Reveal>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '24px',
            }}>
              {ceoJuniorApps.map((app, index) => (
                <Reveal key={app.name} delay={150 + index * 50}>
                  <div className="app-card" style={{
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    padding: '32px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    height: '100%',
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: `linear-gradient(135deg, ${app.color}, ${app.color}cc)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '28px',
                      marginBottom: '20px',
                      boxShadow: `0 8px 20px ${app.color}40`,
                    }}>
                      {app.icon}
                    </div>
                    <h4 style={{
                      fontSize: '22px',
                      fontWeight: 600,
                      marginBottom: '4px',
                    }}>
                      {app.name}
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      color: app.color,
                      fontWeight: 500,
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      {app.subtitle}
                    </p>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: 'rgba(255,255,255,0.7)',
                    }}>
                      {app.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Harvard Badge */}
            <Reveal delay={500}>
              <div style={{
                marginTop: '60px',
                textAlign: 'center',
                padding: '24px 32px',
                background: 'linear-gradient(135deg, rgba(255,184,29,0.1), rgba(255,184,29,0.05))',
                borderRadius: '16px',
                border: `1px solid ${COLORS.gold}40`,
              }}>
                <p style={{
                  fontSize: '16px',
                  color: COLORS.gold,
                  fontWeight: 500,
                }}>
                  🎓 <strong>StarEmpresa usa metodología Harvard</strong> — Respaldado por la formación de Henry Orellana en Harvard Business School
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========== PILAR 2: PADRES 3.0 ========== */}
        <section style={{
          padding: '100px 24px',
          background: COLORS.white,
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <span style={{
                  display: 'inline-block',
                  background: `linear-gradient(135deg, ${COLORS.green}, ${COLORS.teal})`,
                  color: COLORS.white,
                  padding: '8px 20px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 600,
                  marginBottom: '20px',
                  letterSpacing: '0.05em',
                }}>
                  👨‍👩‍👧‍👦 PILAR 2
                </span>
                <h2 style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: 700,
                  marginBottom: '16px',
                  color: COLORS.dark,
                }}>
                  Padres 3.0
                </h2>
                <p style={{
                  fontSize: '20px',
                  color: COLORS.lightGray,
                  marginBottom: '8px',
                }}>
                  La Plataforma de Soporte
                </p>
                <p style={{
                  fontSize: '16px',
                  color: COLORS.green,
                  fontWeight: 500,
                }}>
                  🛰️ Tú orbitas, no aplastas
                </p>
                <p style={{
                  fontSize: '18px',
                  color: COLORS.lightGray,
                  marginTop: '16px',
                  maxWidth: '600px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                  <strong style={{ color: COLORS.dark }}>El Objetivo:</strong> Crianza moderna y Supervisión Inteligente.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 600,
                textAlign: 'center',
                marginBottom: '40px',
                color: COLORS.darkGray,
              }}>
                🛠️ Las Herramientas de Mando
              </h3>
            </Reveal>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}>
              {padresTools.map((tool, index) => (
                <Reveal key={tool.name} delay={150 + index * 50}>
                  <div className="app-card" style={{
                    background: COLORS.offWhite,
                    borderRadius: '20px',
                    padding: '32px',
                    border: '1px solid rgba(0,0,0,0.08)',
                    height: '100%',
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: `linear-gradient(135deg, ${tool.color}20, ${tool.color}10)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '28px',
                      marginBottom: '20px',
                      border: `2px solid ${tool.color}30`,
                    }}>
                      {tool.icon}
                    </div>
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: 600,
                      marginBottom: '4px',
                      color: COLORS.dark,
                    }}>
                      {tool.name}
                    </h4>
                    <p style={{
                      fontSize: '13px',
                      color: tool.color,
                      fontWeight: 600,
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      {tool.subtitle}
                    </p>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: COLORS.darkGray,
                    }}>
                      {tool.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========== MODELO DE NEGOCIO ========== */}
        <section style={{
          padding: '100px 24px',
          background: `linear-gradient(135deg, ${COLORS.dark} 0%, #2d2d30 100%)`,
          color: COLORS.white,
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <Reveal>
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '20px' }}>💰</span>
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 700,
                marginBottom: '16px',
              }}>
                Una Membresía. Acceso Total.
              </h2>
              <p style={{
                fontSize: '20px',
                color: COLORS.gold,
                fontWeight: 500,
                marginBottom: '40px',
              }}>
                El "Family Pass" de la Educación Empresarial
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '24px',
                padding: '40px',
                border: `2px solid ${COLORS.gold}40`,
                marginBottom: '40px',
              }}>
                <p style={{
                  fontSize: '22px',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.9)',
                }}>
                  Pagas una suscripción <strong>(Mensual/Anual)</strong> y obtienes
                  <span style={{ color: COLORS.gold }}> llave en mano </span>
                  para el futuro de tu hijo y tu tranquilidad como padre.
                </p>
                <p style={{
                  fontSize: '16px',
                  color: COLORS.lightGray,
                  marginTop: '20px',
                }}>
                  Sin cobros ocultos. Educación de élite a precio de suscripción.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '24px',
                flexWrap: 'wrap',
              }}>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '16px 32px',
                  borderRadius: '12px',
                }}>
                  <span style={{ fontSize: '24px', marginRight: '8px' }}>👦</span>
                  <span style={{ fontSize: '16px', fontWeight: 500 }}>CEO Junior</span>
                </div>
                <div style={{
                  fontSize: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  color: COLORS.gold,
                }}>+</div>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '16px 32px',
                  borderRadius: '12px',
                }}>
                  <span style={{ fontSize: '24px', marginRight: '8px' }}>👨‍👩‍👧</span>
                  <span style={{ fontSize: '16px', fontWeight: 500 }}>Padres 3.0</span>
                </div>
                <div style={{
                  fontSize: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  color: COLORS.gold,
                }}>=</div>
                <div style={{
                  background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
                  color: COLORS.dark,
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontWeight: 700,
                }}>
                  <span style={{ fontSize: '24px', marginRight: '8px' }}>🎯</span>
                  Family Pass
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========== MANIFIESTO GEN Z ========== */}
        <section style={{
          padding: '100px 24px',
          background: `linear-gradient(135deg, ${COLORS.blue} 0%, ${COLORS.purple} 100%)`,
          color: COLORS.white,
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <Reveal>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 600,
                marginBottom: '32px',
                lineHeight: 1.4,
              }}>
                Dicen que son frágiles.<br />
                <span style={{ opacity: 0.8 }}>Nosotros decimos que son</span><br />
                <strong style={{ fontSize: '1.2em' }}>la mejor generación que ha existido.</strong>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p style={{
                fontSize: '20px',
                lineHeight: 1.8,
                marginBottom: '40px',
                opacity: 0.9,
              }}>
                Son rápidos, creativos y globales. Solo les falta una cosa: <strong>Dirección.</strong>
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p style={{
                fontSize: '18px',
                lineHeight: 1.8,
                marginBottom: '40px',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
                En <strong>Starbiz Academy</strong>, no les damos entretenimiento; les damos
                <strong> Herramientas de Industria</strong>. Usando el <strong>Método del Caso (Harvard)</strong> y
                tecnología propia, tu hijo aprenderá a pensar como CEO y a generar ingresos digitales
                <strong> hoy</strong>, no en 10 años.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p style={{
                fontSize: '24px',
                fontWeight: 600,
              }}>
                Bienvenido al Ecosistema donde las Familias Crecen Juntas.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ========== CTA FINAL ========== */}
        <section style={{
          padding: '100px 24px',
          background: COLORS.white,
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Reveal>
              <span style={{ fontSize: '64px', display: 'block', marginBottom: '24px' }}>🚀</span>
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 700,
                marginBottom: '20px',
                color: COLORS.dark,
              }}>
                ¿Listo para el despegue?
              </h2>
              <p style={{
                fontSize: '18px',
                color: COLORS.darkGray,
                marginBottom: '40px',
                lineHeight: 1.7,
              }}>
                Únete al ecosistema Starbiz y transforma el futuro de tu familia.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <a
                href="/contact"
                className="cta-button"
                style={{
                  display: 'inline-block',
                  background: COLORS.blue,
                  color: COLORS.white,
                  padding: '18px 48px',
                  borderRadius: '50px',
                  fontSize: '18px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(0,113,227,0.3)',
                }}
              >
                Comenzar Ahora →
              </a>
            </Reveal>

            <Reveal delay={200}>
              <p style={{
                marginTop: '24px',
                fontSize: '14px',
                color: COLORS.lightGray,
              }}>
                ¿Preguntas? Escríbenos a <a href="mailto:info@starbizacademy.com" style={{ color: COLORS.blue }}>info@starbizacademy.com</a>
              </p>
            </Reveal>
          </div>
        </section>

        {/* ========== FOOTER ========== */}
        <footer style={{
          padding: '40px 24px',
          background: COLORS.offWhite,
          borderTop: '1px solid rgba(0,0,0,0.08)',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '14px',
            color: COLORS.lightGray,
          }}>
            © {new Date().getFullYear()} StarbizAcademy — Parte de <strong>ORELLANA GROUP</strong>
          </p>
        </footer>
      </div>
    </>
  );
};

export default StarbizAcademy;
