import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import './landing-styles.css';

export default function LandingPage() {
  const [faqActiveIndex, setFaqActiveIndex] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reading progress bar
    const handleScroll = () => {
      if (progressRef.current) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressRef.current.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Hero animation timeline
    const tl = anime.timeline({ easing: 'easeOutExpo' });

    tl.add({
      targets: '.landing-page-wrapper .hero-content',
      opacity: [0, 1],
      duration: 800
    })
    .add({
      targets: '.landing-page-wrapper .hero-pretitle',
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 800
    }, '-=400')
    .add({
      targets: '.landing-page-wrapper .hero-title',
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000
    }, '-=600')
    .add({
      targets: '.landing-page-wrapper .hero-subtitle',
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 800
    }, '-=700')
    .add({
      targets: '.landing-page-wrapper #hero .btn-primary',
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 600
    }, '-=500');

    // Scroll reveal animations with Intersection Observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target,
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 800,
              easing: 'easeOutExpo'
            });
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe section titles and major elements
    document.querySelectorAll('.landing-page-wrapper .section-title').forEach((el) => {
      (el as HTMLElement).style.opacity = '0';
      revealObserver.observe(el);
    });

    // Stagger animations for grids
    const gridObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.pain-point, .stat-card, .transformation-card, .bonus-card, .module-card, .testimonial-card');
            anime({
              targets: items,
              translateY: [50, 0],
              opacity: [0, 1],
              delay: anime.stagger(100),
              duration: 800,
              easing: 'easeOutExpo'
            });
            gridObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.landing-page-wrapper .pain-points-grid, .landing-page-wrapper .stats-grid, .landing-page-wrapper .transformation-grid, .landing-page-wrapper .bonus-grid, .landing-page-wrapper .modules-timeline, .landing-page-wrapper .testimonials-cinema').forEach((el) => {
      gridObserver.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
      gridObserver.disconnect();
    };
  }, []);

  const toggleFaq = (index: number) => {
    setFaqActiveIndex(faqActiveIndex === index ? null : index);
  };

  const handleCheckout = () => {
    // TODO: Replace with actual Hotmart offer code
    const offerCode = 'TU_CODIGO_DE_OFERTA';
    window.open(`https://pay.hotmart.com/${offerCode}`, '_blank');
  };

  return (
    <div className="landing-page-wrapper" ref={wrapperRef}>
      {/* Reading Progress */}
      <div className="reading-progress" ref={progressRef}></div>

      {/* Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* HERO SECTION */}
      <section id="hero">
        <div className="hero-bg-layers">
          <div className="hero-gradient"></div>
          <div className="hero-glitch-lines"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-pretitle">
              <span className="pretitle-icon">&#x26A0;</span>
              <span>Si tu celular es lo primero que tocas al despertar...</span>
            </div>

            <h1 className="hero-title">
              <span className="title-line">Recupera el Control de tu</span>
              <span className="title-line glitch-text" data-text="Tiempo y Mente">Tiempo y Mente</span>
              <span className="title-highlight">Sin Desconectarte del Mundo Digital</span>
            </h1>

            <p className="hero-subtitle">
              El protocolo probado que ha ayudado a cientos de profesionales a eliminar la dependencia
              del celular y recuperar <strong className="hope-accent">hasta 4 horas diarias</strong> de productividad real.
            </p>

            <div className="hero-validation">
              <div className="validation-icon">&#x2713;</div>
              <p>
                <strong className="gold-text">Basado en neurociencia aplicada</strong> y desarrollado tras
                trabajar con +500 profesionales que sentian que la tecnologia controlaba sus vidas.
              </p>
            </div>

            <button className="btn btn-primary btn-xlarge btn-glow" onClick={handleCheckout}>
              <span className="btn-text">Quiero Recuperar Mi Tiempo</span>
              <span className="btn-arrow">&#x2192;</span>
            </button>

            <div className="hero-microcopy">
              <span className="check-icon">&#x2713;</span> Acceso inmediato
              <span className="separator">|</span>
              <span className="check-icon">&#x2713;</span> Garantia 7 dias
              <span className="separator">|</span>
              <span className="check-icon">&#x2713;</span> Soporte incluido
            </div>

            <div className="hero-badges">
              <div className="badge">
                <span className="badge-icon">&#x1F4F1;</span>
                <span>+2,000 estudiantes</span>
              </div>
              <div className="badge">
                <span className="badge-icon">&#x2B50;</span>
                <span>4.9/5 calificacion</span>
              </div>
              <div className="badge">
                <span className="badge-icon">&#x1F9E0;</span>
                <span>Metodologia cientifica</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA SECTION */}
      <section id="problema">
        <div className="container">
          <h2 className="section-title">
            <span className="danger-text">&#x26A0; Reconoces Alguna de Estas Situaciones?</span>
            <span className="subtitle">Si al menos 2 te suenan familiares, este protocolo es para ti</span>
          </h2>

          <div className="pain-points-grid">
            <div className="pain-point">
              <span className="pain-icon">&#x1F4F1;</span>
              <p><strong>Tu celular es lo primero</strong> que tocas al despertar y lo ultimo antes de dormir</p>
            </div>
            <div className="pain-point">
              <span className="pain-icon">&#x23F0;</span>
              <p><strong>Pierdes horas</strong> sin darte cuenta en redes sociales o videos</p>
            </div>
            <div className="pain-point">
              <span className="pain-icon">&#x1F4AD;</span>
              <p>Sientes <strong>ansiedad</strong> si no revisas tu telefono cada pocos minutos</p>
            </div>
            <div className="pain-point">
              <span className="pain-icon">&#x1F6AB;</span>
              <p>Has intentado <strong>desconectarte</strong> pero siempre vuelves a caer</p>
            </div>
            <div className="pain-point">
              <span className="pain-icon">&#x1F634;</span>
              <p>Tu <strong>sueno y concentracion</strong> han empeorado notablemente</p>
            </div>
            <div className="pain-point">
              <span className="pain-icon">&#x1F46A;</span>
              <p>Tus <strong>relaciones</strong> se ven afectadas por tu uso del celular</p>
            </div>
          </div>

          <div className="validation-box">
            <div className="validation-alert">
              <span className="alert-icon pulse">&#x26A0;</span>
              <div className="validation-content">
                <p><strong>Esto no es tu culpa.</strong> Las apps estan disenadas por equipos de psicologos y
                neurocientificos para mantenerte enganchado.</p>
                <p className="validation-emphasis">Pero <strong className="hope-accent">hay una salida</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSECUENCIAS SECTION */}
      <section id="consecuencias">
        <div className="container">
          <h2 className="section-title">
            El Costo Real de No Actuar
            <span className="subtitle">Lo que estas perdiendo cada dia que pasa</span>
          </h2>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">4.5h</div>
              <p>Tiempo <strong>promedio diario</strong> que pasamos en el celular. Son <span className="gold-text">31 horas semanales</span> de tu vida.</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">96x</div>
              <p>Veces que revisamos el celular al dia. Cada interrupcion necesita <span className="gold-text">23 minutos</span> para recuperar el enfoque.</p>
            </div>
            <div className="stat-card stat-alert">
              <span className="stat-icon pulse-danger">&#x26A0;</span>
              <p>El uso excesivo del celular se asocia con <strong className="danger-text">ansiedad, depresion</strong> y problemas de atencion.</p>
            </div>
          </div>

          <div className="consequences-box">
            <div className="consequences-header">
              <div className="warning-pulse"></div>
              <h3>Si sigues sin hacer nada...</h3>
              <div className="warning-pulse"></div>
            </div>
            <ul className="consequences-list">
              <li>
                <span className="consequence-icon">&#x1F4C9;</span>
                Tu productividad seguira cayendo
              </li>
              <li>
                <span className="consequence-icon">&#x1F494;</span>
                Tus relaciones continuaran deteriorandose
              </li>
              <li>
                <span className="consequence-icon">&#x1F4A4;</span>
                Tu calidad de sueno empeorara cada vez mas
              </li>
              <li>
                <span className="consequence-icon">&#x1F9E0;</span>
                Tu capacidad de concentracion se reducira
              </li>
            </ul>
          </div>

          <div className="urgency-box">
            <span className="urgency-icon">&#x23F3;</span>
            <div className="urgency-content">
              <p>Cada dia que pospones la decision, <strong>son 4+ horas mas de tu vida</strong> que nunca recuperaras.</p>
              <p className="urgency-emphasis">El momento de actuar es <strong>AHORA</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUCION SECTION */}
      <section id="solucion">
        <div className="container">
          <h2 className="section-title">
            <span className="hope-text">La Solucion Que Funciona</span>
            <span className="subtitle">Un sistema probado, no otro consejo generico</span>
          </h2>

          <div className="solution-intro">
            <p>Durante anos, pense que el problema era <strong>falta de disciplina</strong>.</p>
            <p>Intente todo: apps de bloqueo, "detox digital", hasta dejar el celular en otra habitacion...</p>
            <p className="solution-highlight"><strong className="hope-accent">Nada funcionaba de forma permanente.</strong></p>
          </div>

          <div className="differentiator-box">
            <div className="warning-badge">
              <span>&#x26A0;</span> IMPORTANTE
            </div>
            <h3>Por Que Otros Metodos Fallan</h3>
            <p>Los metodos tradicionales atacan los <strong>sintomas</strong>, no la causa raiz.</p>
            <p>Este protocolo reprograma tu <strong className="hope-accent">relacion neurologica</strong> con la tecnologia.</p>
          </div>

          <div className="academy-box">
            <div className="academy-logo">
              <span className="logo-text">HOA</span>
              <span className="logo-subtext">ACADEMY</span>
            </div>
            <div className="academy-content">
              <p><strong>Henry Orellana Academy</strong> presenta el <span className="protocol-name">Protocolo Desconexion</span></p>
              <p>El sistema integral que combina <strong>neurociencia, habitos</strong> y <strong>psicologia conductual</strong> para liberarte de la dependencia digital de forma permanente.</p>
              <p className="academy-mission"><strong>Nuestra mision:</strong> Que recuperes el control de tu tiempo y atencion.</p>
            </div>
          </div>

          <button className="btn btn-primary btn-large" onClick={handleCheckout}>
            <span className="btn-text">Acceder al Protocolo Ahora</span>
            <span className="btn-arrow">&#x2192;</span>
          </button>
        </div>
      </section>

      {/* TRANSFORMACION SECTION */}
      <section id="transformacion">
        <div className="container">
          <h2 className="section-title">
            Tu Vida Despues del Protocolo
            <span className="subtitle">Lo que vas a experimentar</span>
          </h2>

          <div className="transformation-grid">
            <div className="transformation-card">
              <span className="transform-icon">&#x23F0;</span>
              <p><strong>+4 horas diarias</strong> de tiempo productivo recuperado</p>
            </div>
            <div className="transformation-card">
              <span className="transform-icon">&#x1F9D8;</span>
              <p><strong>Claridad mental</strong> y capacidad de concentracion profunda</p>
            </div>
            <div className="transformation-card">
              <span className="transform-icon">&#x1F634;</span>
              <p><strong>Mejor sueno</strong> y mas energia durante el dia</p>
            </div>
            <div className="transformation-card">
              <span className="transform-icon">&#x1F46A;</span>
              <p><strong>Relaciones mas presentes</strong> y significativas</p>
            </div>
            <div className="transformation-card">
              <span className="transform-icon">&#x1F4AA;</span>
              <p><strong>Control real</strong> sobre tu tiempo y decisiones</p>
            </div>
            <div className="transformation-card">
              <span className="transform-icon">&#x2764;</span>
              <p><strong>Bienestar mental</strong> sin ansiedad por notificaciones</p>
            </div>
          </div>

          <div className="transformation-closing">
            <span className="handwritten">Imagina despertar sin la necesidad de revisar tu celular...</span>
            <p>Y sentir paz en lugar de ansiedad.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS SECTION */}
      <section id="testimonios">
        <div className="container">
          <h2 className="section-title">
            Lo Que Dicen Nuestros Estudiantes
            <span className="subtitle">Resultados reales de personas reales</span>
          </h2>

          <div className="testimonials-cinema">
            <div className="testimonial-card">
              <div className="film-frame">
                <div className="film-holes top"></div>
                <div className="testimonial-content">
                  <span className="quote-mark">"</span>
                  <p className="testimonial-quote">
                    Pense que era imposible dejar de revisar mi celular cada 5 minutos. En 2 semanas
                    ya notaba la diferencia. Ahora trabajo sin distracciones y tengo tiempo real para mi familia.
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">MC</div>
                  <div className="author-info">
                    <strong>Maria C.</strong>
                    <span>Ejecutiva de Marketing</span>
                  </div>
                  <div className="rating">&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</div>
                </div>
                <div className="film-holes bottom"></div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="film-frame">
                <div className="film-holes top"></div>
                <div className="testimonial-content">
                  <span className="quote-mark">"</span>
                  <p className="testimonial-quote">
                    Mi tiempo de pantalla bajo de 6 horas a menos de 2. Pero lo mas increible es que
                    ya no siento ansiedad. El celular ya no me controla.
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">JR</div>
                  <div className="author-info">
                    <strong>Jorge R.</strong>
                    <span>Emprendedor</span>
                  </div>
                  <div className="rating">&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</div>
                </div>
                <div className="film-holes bottom"></div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="film-frame">
                <div className="film-holes top"></div>
                <div className="testimonial-content">
                  <span className="quote-mark">"</span>
                  <p className="testimonial-quote">
                    Mis hijos notaron el cambio antes que yo. Ahora estoy presente de verdad
                    cuando estamos juntos. Eso no tiene precio.
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">AL</div>
                  <div className="author-info">
                    <strong>Ana L.</strong>
                    <span>Madre y Profesional</span>
                  </div>
                  <div className="rating">&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</div>
                </div>
                <div className="film-holes bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULOS SECTION */}
      <section id="modulos">
        <div className="container">
          <h2 className="section-title">
            Que Incluye el Protocolo
            <span className="subtitle">Tu hoja de ruta completa hacia la libertad digital</span>
          </h2>

          <div className="modules-timeline">
            <div className="timeline-line"></div>

            <div className="module-card">
              <div className="episode-number">
                <span className="number">01</span>
                <span className="episode-label">MODULO</span>
              </div>
              <div className="module-content">
                <h3>Diagnostico Digital</h3>
                <p className="module-subtitle">Entiende tu patron de adiccion</p>
                <ul>
                  <li>Analisis de tu uso actual del celular</li>
                  <li>Identificacion de tus triggers principales</li>
                  <li>Evaluacion del impacto en tu vida</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="episode-number">
                <span className="number">02</span>
                <span className="episode-label">MODULO</span>
              </div>
              <div className="module-content">
                <h3>La Ciencia del Enganche</h3>
                <p className="module-subtitle">Conoce a tu "enemigo"</p>
                <ul>
                  <li>Como las apps hackean tu cerebro</li>
                  <li>El ciclo de la dopamina explicado</li>
                  <li>Por que la "fuerza de voluntad" no funciona</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="episode-number">
                <span className="number">03</span>
                <span className="episode-label">MODULO</span>
              </div>
              <div className="module-content">
                <h3>El Sistema de Desenganche</h3>
                <p className="module-subtitle">El nucleo del protocolo</p>
                <ul>
                  <li>Tecnica de los "3 Anclajes"</li>
                  <li>Reconfiguracion de habitos automaticos</li>
                  <li>Creacion de fricciones inteligentes</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="episode-number">
                <span className="number">04</span>
                <span className="episode-label">MODULO</span>
              </div>
              <div className="module-content">
                <h3>Productividad Sin Pantallas</h3>
                <p className="module-subtitle">Usa la tecnologia a tu favor</p>
                <ul>
                  <li>Configuracion optima del celular</li>
                  <li>Apps que ayudan vs apps que danan</li>
                  <li>Rutinas de alto rendimiento</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="episode-number">
                <span className="number">05</span>
                <span className="episode-label">MODULO</span>
              </div>
              <div className="module-content">
                <h3>Mantenimiento de por Vida</h3>
                <p className="module-subtitle">Nunca volver a caer</p>
                <ul>
                  <li>Sistema anti-recaidas</li>
                  <li>Como manejar situaciones de estres</li>
                  <li>Evolucion continua de tu relacion digital</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BONUS SECTION */}
      <section id="bonus">
        <div className="container">
          <h2 className="section-title">
            <span className="gold-text">&#x1F381; Bonus Exclusivos</span>
            <span className="subtitle">Solo por tiempo limitado</span>
          </h2>

          <div className="bonus-grid">
            <div className="bonus-card">
              <span className="bonus-icon">&#x1F4CB;</span>
              <div className="bonus-value">
                <span className="original">$47</span>
                <span className="free">GRATIS</span>
              </div>
              <h3>Plantilla de Tracking Digital</h3>
              <p>Monitorea tu progreso diario con nuestra plantilla probada</p>
            </div>

            <div className="bonus-card">
              <span className="bonus-icon">&#x1F4F1;</span>
              <div className="bonus-value">
                <span className="original">$37</span>
                <span className="free">GRATIS</span>
              </div>
              <h3>Guia de Configuracion Optima</h3>
              <p>Paso a paso para configurar tu celular de forma que te ayude</p>
            </div>

            <div className="bonus-card featured">
              <div className="bonus-ribbon">NUEVO</div>
              <span className="bonus-icon">&#x1F3A7;</span>
              <div className="bonus-value">
                <span className="original">$67</span>
                <span className="free">GRATIS</span>
              </div>
              <h3>Meditaciones de Desenganche</h3>
              <p>5 audios guiados para momentos de urgencia digital</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRECIO SECTION */}
      <section id="precio">
        <div className="container">
          <div className="pricing-box">
            <div className="pricing-header">
              <h2>Acceso Completo al Protocolo Desconexion</h2>
            </div>

            <div className="value-stack">
              <div className="value-item">
                <span className="value-name">5 Modulos Completos</span>
                <span className="value-price">$197</span>
              </div>
              <div className="value-item">
                <span className="value-name">Plantilla de Tracking</span>
                <span className="value-price">$47</span>
              </div>
              <div className="value-item">
                <span className="value-name">Guia de Configuracion</span>
                <span className="value-price">$37</span>
              </div>
              <div className="value-item">
                <span className="value-name">Meditaciones de Desenganche</span>
                <span className="value-price">$67</span>
              </div>
              <div className="value-total">
                <span className="value-name">Valor Total</span>
                <span className="value-price">$348</span>
              </div>
            </div>

            <div className="price-reveal">
              <p>Tu inversion hoy:</p>
              <div className="price-comparison">
                <span className="old-price">$348</span>
                <span className="price-arrow">&#x2192;</span>
                <span className="new-price">
                  <span className="currency">$</span>
                  <span className="amount">47</span>
                  <span className="period">USD</span>
                </span>
              </div>
              <p className="payment-option">Pago unico - Acceso de por vida</p>
            </div>

            <button className="btn btn-primary btn-xlarge btn-glow btn-pulse" onClick={handleCheckout}>
              <span className="btn-text">Quiero Recuperar Mi Tiempo</span>
              <span className="btn-arrow">&#x2192;</span>
            </button>

            <div className="price-microcopy">
              <span className="check-icon">&#x2713;</span> Acceso inmediato
              <span className="separator">|</span>
              <span className="check-icon">&#x2713;</span> Garantia 7 dias
              <span className="separator">|</span>
              <span className="check-icon">&#x2713;</span> Soporte incluido
            </div>

            <p className="price-justification">
              Menos de lo que gastas en un mes de cafe... para recuperar anos de tu vida.
            </p>
          </div>
        </div>
      </section>

      {/* GARANTIA SECTION */}
      <section id="garantia">
        <div className="container">
          <div className="guarantee-box">
            <div className="guarantee-shield">
              <div className="shield-inner">
                <span className="guarantee-days">7</span>
                <span className="guarantee-label">DIAS</span>
              </div>
            </div>
            <div className="guarantee-content">
              <h2>Garantia de Satisfaccion Total <span className="subtext">(Sin preguntas)</span></h2>
              <p>Prueba el Protocolo Desconexion durante 7 dias completos.</p>
              <p>Si no sientes que estas recuperando el control de tu tiempo y atencion, te devolvemos el 100% de tu dinero.</p>
              <p className="guarantee-emphasis">Sin preguntas. Sin complicaciones. <strong>Tu satisfaccion o tu dinero.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq">
        <div className="container">
          <h2 className="section-title">
            Preguntas Frecuentes
          </h2>

          <div className="faq-list">
            {[
              {
                q: "Cuanto tiempo necesito dedicar al dia?",
                a: "El protocolo esta disenado para personas ocupadas. Necesitas entre 15-20 minutos diarios durante las primeras 2 semanas. Despues, solo aplicar lo aprendido."
              },
              {
                q: "Funciona si he intentado otros metodos antes?",
                a: "Si. La mayoria de nuestros estudiantes han intentado otras soluciones sin exito. Este protocolo es diferente porque ataca la raiz neurologica del problema, no solo los sintomas."
              },
              {
                q: "Tengo que dejar de usar mi celular completamente?",
                a: "No. El objetivo no es eliminar la tecnologia, sino tener una relacion saludable con ella. Seguiras usando tu celular, pero tu lo controlaras a el, no al reves."
              },
              {
                q: "Cuanto tiempo hasta ver resultados?",
                a: "La mayoria reporta mejoras notables en la primera semana. Cambios significativos y duraderos se consolidan entre las semanas 2-3."
              },
              {
                q: "Que pasa si no funciona para mi?",
                a: "Tienes 7 dias de garantia total. Si no ves resultados, te devolvemos el 100% de tu inversion sin preguntas."
              }
            ].map((item, index) => (
              <div key={index} className={`faq-item ${faqActiveIndex === index ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{item.q}</span>
                  <div className="faq-icon">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </div>
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CIERRE SECTION */}
      <section id="cierre">
        <div className="closing-gradient"></div>
        <div className="container">
          <div className="closing-content">
            <h2 className="section-title">
              La Decision Esta en Tus Manos
            </h2>

            <div className="closing-copy">
              <p>Cada dia que pasa sin actuar, son mas horas perdidas.</p>
              <p>Mas momentos con tu familia que no volveras a tener.</p>
              <p>Mas potencial desperdiciado.</p>
              <p className="closing-emphasis">
                O puedes decidir <strong>HOY</strong> que mereces algo mejor.
              </p>
            </div>

            <button className="btn btn-primary btn-xlarge" onClick={handleCheckout}>
              <span className="btn-text">Si, Quiero Recuperar Mi Vida</span>
              <span className="btn-arrow">&#x2192;</span>
            </button>

            <div className="closing-microcopy">
              <span className="check-icon">&#x2713;</span> Acceso inmediato
              <span className="separator">|</span>
              <span className="check-icon">&#x2713;</span> Garantia 7 dias
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer">
        <div className="container">
          <div className="ps-section">
            <p className="ps-text">
              <strong>P.D.:</strong> Si has llegado hasta aqui, es porque sabes que necesitas un cambio.
              La unica pregunta es: <span className="highlight-gold">vas a hacerlo hoy o vas a seguir posponiendo?</span>
            </p>
            <p className="ps-text">
              Recuerda: tienes 7 dias de garantia. No tienes nada que perder, excepto la adiccion.
            </p>
          </div>

          <div className="footer-info">
            <div className="footer-logo">
              <span className="logo-text">HOA</span>
              <span className="logo-subtext">ACADEMY</span>
            </div>
            <p className="footer-disclaimer">
              &copy; {new Date().getFullYear()} Henry Orellana Academy. Todos los derechos reservados.
            </p>
            <div className="footer-links">
              <a href="#">Terminos y Condiciones</a>
              <a href="#">Politica de Privacidad</a>
              <a href="#">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
