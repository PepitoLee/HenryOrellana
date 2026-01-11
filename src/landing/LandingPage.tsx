import { useEffect, useRef } from 'react';
import './landing-styles.css';

export default function LandingPage() {
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

    // Scroll reveal animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeElements.forEach((el) => observer.observe(el));
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleCheckout = () => {
    const offerCode = 'TU_CODIGO_DE_OFERTA';
    window.open(`https://pay.hotmart.com/${offerCode}`, '_blank');
  };

  return (
    <div className="landing-page-wrapper">
      {/* Reading Progress */}
      <div className="reading-progress" ref={progressRef}></div>

      {/* ===== PANTALLA 1: HERO ===== */}
      <section className="vertical-image-section hero-section">
        <img src="/landing/images/1.jpeg" alt="Padre e hijo conectando" />
        <div className="overlay"></div>
        <div className="content">
          <h1>
            Rescata a tu hijo
            <span className="highlight">de la adiccion digital</span>
          </h1>
          <p className="subtitle">
            El protocolo que ha ayudado a +500 familias a recuperar la conexion real con sus hijos
          </p>
          <button className="btn-cta primary pulse" onClick={handleCheckout}>
            <span>Quiero ayudar a mi hijo</span>
            <span className="arrow">→</span>
          </button>
          <div className="micro-copy">
            <span><span className="check">✓</span> Acceso inmediato</span>
            <span><span className="check">✓</span> Garantia 7 dias</span>
          </div>
        </div>
      </section>

      {/* ===== PANTALLA 2: EL DOLOR (Texto) ===== */}
      <section className="text-break fade-in">
        <h2>
          <span className="danger">¿Tu hijo esta pegado al celular todo el dia?</span>
        </h2>
        <ul className="bullet-list danger">
          <li>
            <span className="icon">😶</span>
            <span>Ya no te habla como antes</span>
          </li>
          <li>
            <span className="icon">😤</span>
            <span>Se irrita cuando le quitas el telefono</span>
          </li>
          <li>
            <span className="icon">📉</span>
            <span>Sus notas han bajado</span>
          </li>
          <li>
            <span className="icon">🌙</span>
            <span>Se desvela con el celular</span>
          </li>
          <li>
            <span className="icon">🚫</span>
            <span>Ya no sale con amigos reales</span>
          </li>
        </ul>
        <p><strong>No es tu culpa.</strong> Las apps estan disenadas para enganchar.</p>
      </section>

      {/* ===== PANTALLA 3: IMAGEN ZOMBIE ===== */}
      <section className="vertical-image-section">
        <img src="/landing/images/2.jpeg" alt="Adolescente hipnotizado por pantalla" />
        <div className="overlay"></div>
        <div className="image-caption">
          <h3>Asi se ve un cerebro adicto</h3>
          <p>La luz azul y las notificaciones alteran su desarrollo neurologico</p>
        </div>
      </section>

      {/* ===== PANTALLA 4: GIF CEREBRO ===== */}
      <section className="vertical-image-section">
        <img src="/landing/images/Gif 1.gif" alt="Cerebro ansioso animacion" />
        <div className="overlay"></div>
        <div className="image-caption">
          <h3>El ciclo de la dopamina</h3>
          <p>Cada notificacion genera una descarga que el cerebro pide repetir</p>
        </div>
      </section>

      {/* ===== PANTALLA 5: LA CIENCIA (Texto) ===== */}
      <section className="text-break dark fade-in">
        <h2>La dopamina de las redes es <span className="danger">400% mas adictiva</span></h2>
        <ul className="bullet-list danger">
          <li>
            <span className="icon">🎮</span>
            <span>Mas que los videojuegos</span>
          </li>
          <li>
            <span className="icon">🍔</span>
            <span>Mas que la comida chatarra</span>
          </li>
          <li>
            <span className="icon">📺</span>
            <span>Mas que la television</span>
          </li>
        </ul>
        <p>Por eso la "fuerza de voluntad" no funciona. Necesitas un <strong>sistema probado</strong>.</p>
      </section>

      {/* ===== PANTALLA 6: AUTORIDAD (Henry) ===== */}
      <section className="vertical-image-section">
        <img src="/landing/images/3.jpeg" alt="Henry Orellana investigador" />
        <div className="overlay"></div>
        <div className="image-caption">
          <h3>Soy Henry Orellana</h3>
          <p>+500 familias transformadas con mi metodologia</p>
        </div>
      </section>

      {/* ===== PANTALLA 7: CREDENCIAL (Starbiz) ===== */}
      <section className="vertical-image-section">
        <img src="/landing/images/4.jpeg" alt="Certificacion Starbiz Academy" />
        <div className="overlay"></div>
        <div className="image-caption">
          <h3>Metodologia certificada</h3>
          <p>Avalada por academia de negocios de EE.UU.</p>
          <div className="authority-badge" style={{ marginTop: '1rem' }}>
            <span>⭐</span>
            <span>Starbiz Academy Certified</span>
          </div>
        </div>
      </section>

      {/* ===== PANTALLA 8: EL PRODUCTO (Mockup) ===== */}
      <section className="vertical-image-section">
        <img src="/landing/images/5.jpeg" alt="Protocolo Desconexion curso" />
        <div className="overlay"></div>
        <div className="image-caption">
          <h3>Protocolo Desconexion</h3>
          <p>El sistema paso a paso para rescatar a tu hijo</p>
        </div>
      </section>

      {/* ===== PANTALLA 9: ENTREGABLES (Texto) ===== */}
      <section className="text-break fade-in">
        <h2>Que incluye el <span className="gold">Protocolo</span></h2>
        <ul className="checklist">
          <li>
            <span className="check">✓</span>
            <span>Test de diagnostico digital</span>
          </li>
          <li>
            <span className="check">✓</span>
            <span>Contrato familiar de uso</span>
          </li>
          <li>
            <span className="check">✓</span>
            <span>5 modulos paso a paso</span>
          </li>
          <li>
            <span className="check">✓</span>
            <span>Guia de configuracion del celular</span>
          </li>
          <li>
            <span className="check">✓</span>
            <span>Meditaciones de desenganche</span>
          </li>
        </ul>
      </section>

      {/* ===== PANTALLA 10: IMAGEN PDFs ===== */}
      <section className="vertical-image-section">
        <img src="/landing/images/6.jpeg" alt="Materiales del curso" />
        <div className="overlay"></div>
        <div className="image-caption">
          <h3>Materiales practicos</h3>
          <p>Todo listo para imprimir y usar con tu familia</p>
        </div>
      </section>

      {/* ===== PANTALLA 11: GIF TRANSFORMACION ===== */}
      <section className="vertical-image-section">
        <img src="/landing/images/gif 2.gif" alt="Transformacion del cuarto" />
        <div className="overlay"></div>
        <div className="image-caption">
          <h3>Del caos al orden</h3>
          <p>Asi cambia la vida cuando recuperas a tu hijo</p>
        </div>
      </section>

      {/* ===== PANTALLA 12: TRANSFORMACION (Texto) ===== */}
      <section className="text-break dark fade-in">
        <h2>Imagina <span className="hope">recuperar</span> a tu hijo</h2>
        <ul className="bullet-list success">
          <li>
            <span className="icon">💬</span>
            <span>Conversaciones reales otra vez</span>
          </li>
          <li>
            <span className="icon">📚</span>
            <span>Mejor rendimiento escolar</span>
          </li>
          <li>
            <span className="icon">😴</span>
            <span>Duerme a horas normales</span>
          </li>
          <li>
            <span className="icon">👨‍👩‍👧</span>
            <span>Tiempo de calidad en familia</span>
          </li>
          <li>
            <span className="icon">😊</span>
            <span>Menos irritabilidad, mas paz</span>
          </li>
        </ul>
      </section>

      {/* ===== PANTALLA 13: FAMILIA FELIZ ===== */}
      <section className="vertical-image-section">
        <img src="/landing/images/7.jpeg" alt="Familia feliz conectada" />
        <div className="overlay"></div>
        <div className="content" style={{ marginTop: 'auto', paddingBottom: '2rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.75rem',
            marginBottom: '1.5rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.8)'
          }}>
            Tu familia puede volver a esto
          </h2>

          <div className="price-box">
            <p className="old-price">$348 USD</p>
            <p className="new-price">
              <span className="currency">$</span>47
            </p>
            <p className="payment-info">Pago unico • Acceso de por vida</p>
          </div>

          <button className="btn-cta primary pulse" onClick={handleCheckout}>
            <span>Si, quiero rescatar a mi hijo</span>
            <span className="arrow">→</span>
          </button>

          <div className="micro-copy" style={{ marginTop: '1rem' }}>
            <span><span className="check">✓</span> Acceso inmediato</span>
            <span><span className="check">✓</span> Garantia 7 dias</span>
          </div>

          <div className="guarantee-box" style={{ marginTop: '1.5rem' }}>
            <span className="shield">🛡️</span>
            <p>
              <strong>Garantia total:</strong> Si no ves resultados en 7 dias, te devolvemos el 100%. Sin preguntas.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="landing-footer">
        <div className="logo">
          HOA
          <span>ACADEMY</span>
        </div>
        <p>© {new Date().getFullYear()} Henry Orellana Academy</p>
        <p>Todos los derechos reservados</p>
        <div className="links">
          <a href="#">Terminos</a>
          <a href="#">Privacidad</a>
          <a href="#">Contacto</a>
        </div>
      </footer>
    </div>
  );
}
