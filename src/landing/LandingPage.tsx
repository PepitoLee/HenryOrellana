import { useEffect, useRef } from 'react';
import './landing-styles.css';

export default function LandingPage() {
  const carouselsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Auto-scroll carousels
    const carousels = document.querySelectorAll('.horizontal-scroll');

    carousels.forEach((container) => {
      const el = container as HTMLElement;
      let isPaused = false;
      let currentScroll = 0;
      const scrollSpeed = 0.3;

      // Clone content for infinite loop
      const originalContent = Array.from(el.children);
      originalContent.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        el.appendChild(clone);
      });

      const animationLoop = () => {
        if (!isPaused) {
          currentScroll += scrollSpeed;
          el.scrollLeft = currentScroll;

          if (el.scrollLeft >= el.scrollWidth / 2) {
            currentScroll = 0;
            el.scrollLeft = 0;
          }
        } else {
          currentScroll = el.scrollLeft;
        }
        requestAnimationFrame(animationLoop);
      };

      requestAnimationFrame(animationLoop);

      el.addEventListener('mouseenter', () => (isPaused = true));
      el.addEventListener('touchstart', () => (isPaused = true), { passive: true });
      el.addEventListener('mouseleave', () => (isPaused = false));
      el.addEventListener('touchend', () => {
        setTimeout(() => (isPaused = false), 1000);
      });
    });
  }, []);

  const handleCheckout = () => {
    window.open('https://pay.hotmart.com/G103838321V', '_blank');
  };

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page-wrapper">
      <div className="background-wrapper"></div>

      {/* 1. HERO */}
      <section className="hero-section">
        <div className="container">
          <div className="pre-headline badge-glow">ATENCION PADRES (13-19 ANOS)</div>
          <h1 className="headline">"Siento que estoy perdiendo a mi hijo..."</h1>
          <p className="subheadline">
            Revierte la "zombificacion" digital en 21 dias sin gritos, sin peleas y sin quitarle el telefono a la fuerza.
          </p>

          <div className="vsl-wrapper">
            <div className="video-container">
              <img src="/landing/images/mobile_vsl_thumbnail_vertical_1768452316161.png" alt="Video Historia" className="vsl-thumb" />
              <div className="play-button-overlay">
                <div className="play-icon">▶</div>
              </div>
            </div>
          </div>

          <button className="cta-button primary-btn pulse-animation" onClick={scrollToOffer}>
            QUIERO RESCATARLO AHORA
          </button>
          <p className="guarantee-text">🔒 Garantia de 7 Dias | Acceso Inmediato</p>
        </div>
      </section>

      {/* 2. PROBLEMA (CARRUSEL SWIPE) */}
      <section className="problem-section">
        <div className="container">
          <h2 className="section-title">¿Te suena familiar?</h2>
          <p className="swipe-hint">👉 Desliza para ver</p>

          <div className="horizontal-scroll">
            <div className="scroll-card">
              <img src="/landing/images/agitation_dinner_silence_vertical_1768454183181.png" className="card-img" alt="Silencio" />
              <div className="card-content">
                <h3>El Silencio Incomodo</h3>
                <p>Cenas donde nadie habla. El esta fisicamente ahi, pero su mente no.</p>
              </div>
            </div>
            <div className="scroll-card">
              <img src="/landing/images/agitation_door_slam_vertical_1768454197319.png" className="card-img" alt="Puerta" />
              <div className="card-content">
                <h3>La Puerta Cerrada</h3>
                <p>Vive encerrado en su "cueva", iluminado solo por la luz azul.</p>
              </div>
            </div>
            <div className="scroll-card">
              <img src="/landing/images/metaphor_digital_prison_vertical_1768454211108.png" className="card-img" alt="Carcel" />
              <div className="card-content">
                <h3>La Carcel Digital</h3>
                <p>No es rebelde. Esta atrapado por algoritmos disenados para adictos.</p>
              </div>
            </div>
          </div>

          <div className="text-block">
            <p>Sientes que es tu culpa, pero tengo noticias: <strong>Tu hijo ha sido hackeado.</strong></p>
          </div>
        </div>
      </section>

      {/* 3. SOLUCION (CIENCIA) */}
      <section className="science-section">
        <div className="container">
          <h2 className="section-title">No es Rebeldia,<br />Es <span className="highlight-red">Dopamina</span></h2>

          <div className="image-overlay-box">
            <img src="/landing/images/module_neuroscience_brain_1768453808759.png" className="full-width-img" alt="Cerebro" />
            <div className="overlay-text bottom">
              <h3>Cerebros Hackeados</h3>
              <p>Las redes sociales disparan ansiedad y depresion a niveles historicos.</p>
            </div>
          </div>

          <div className="image-overlay-box">
            <img src="/landing/images/mobile_dopamine_spike_chart_1768453095241.png" className="full-width-img" alt="Dopamina" />
            <div className="overlay-text bottom">
              <h3>El Pico de Adiccion</h3>
              <p>Necesitas CIENCIA, no castigos. Necesitas un Detox Neurologico.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EL FUTURO (BENEFICIOS) */}
      <section className="future-section">
        <div className="container">
          <h2 className="section-title">Imagina un Nuevo Futuro...</h2>

          <div className="horizontal-scroll">
            <div className="scroll-card">
              <img src="/landing/images/benefit_peaceful_sleep_vertical_1768454224636.png" className="card-img" alt="Paz" />
              <div className="card-content positive">
                <h3>Paz Real</h3>
                <p>Duerme profundamente sin el telefono bajo la almohada.</p>
              </div>
            </div>
            <div className="scroll-card">
              <img src="/landing/images/benefit_teen_studying_vertical_1768454237635.png" className="card-img" alt="Enfoque" />
              <div className="card-content positive">
                <h3>Enfoque Recuperado</h3>
                <p>Vuelve a estudiar, leer y tener metas claras.</p>
              </div>
            </div>
            <div className="scroll-card">
              <img src="/landing/images/module_reconnection_moment_1768453821647.png" className="card-img" alt="Conexion" />
              <div className="card-content positive">
                <h3>Conexion</h3>
                <p>Vuelve a reir contigo. Vuelves a tener a tu hijo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CURSO (MODULOS) */}
      <section className="course-section">
        <div className="container">
          <h2 className="section-title">El Protocolo Desconexion</h2>
          <img src="/landing/images/starbiz_course_mockup_vertical_1768453765854.png" className="hero-mockup" alt="Curso" />

          <div className="module-grid">
            <div className="module-card">
              <img src="/landing/images/module_detox_calendar_vertical_1768454266585.png" className="mini-thumb" alt="Modulo 1" />
              <div>
                <h4>Modulo 1: Detox</h4>
                <p>El plan de 21 dias exacto.</p>
              </div>
            </div>
            <div className="module-card">
              <img src="/landing/images/mobile_step2_mechanism_1768453138423.png" className="mini-thumb" alt="Modulo 2" />
              <div>
                <h4>Modulo 2: Reconexion</h4>
                <p>Herramientas para unir a la familia.</p>
              </div>
            </div>
            <div className="module-card">
              <img src="/landing/images/mobile_step3_mechanism_1768453151700.png" className="mini-thumb" alt="Modulo 3" />
              <div>
                <h4>Modulo 3: Libertad</h4>
                <p>Uso responsable de por vida.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. APP BONUS */}
      <section className="app-section">
        <div className="container">
          <div className="bonus-badge">Regalo Hoy ($97 USD)</div>
          <h2 className="section-title">App "Starbiz Voices"</h2>
          <p className="subtitle">Tu Panel de Expertos en el Bolsillo.</p>

          <div className="image-overlay-box">
            <img src="/landing/images/starbiz_app_mockup_vertical_1768453779266.png" className="full-width-img" alt="App" />
          </div>

          <div className="audio-list-compact">
            <span>🎧 Neurociencia</span>
            <span>🎧 Pornografia</span>
            <span>🎧 Videojuegos</span>
            <span>🎧 Depresion</span>
            <span>🎧 Bullying</span>
            <span>+16 Temas</span>
          </div>
        </div>
      </section>

      {/* 7. KIT DESCARGABLE */}
      <section className="kit-section">
        <div className="container">
          <h2 className="section-title">Kit de Emergencia</h2>
          <img src="/landing/images/downloadable_kit_mockup_vertical_1768453793110.png" className="full-width-img rounded" alt="Kit" />
          <div className="check-grid">
            <div className="check-item">📄 Contrato Familiar</div>
            <div className="check-item">📊 Test Nomofobia</div>
            <div className="check-item">💬 Guiones Anti-Pelea</div>
          </div>
        </div>
      </section>

      {/* 8. AUTORIDAD */}
      <section className="author-section">
        <div className="container">
          <img src="/landing/images/author_consulting_vertical_1768454280839.png" className="author-hero" alt="Henry" />
          <div className="author-content">
            <h3>Henry Orellana</h3>
            <p>Experto en comportamiento adolescente. He ayudado a +500 familias a recuperar la paz.</p>
          </div>
        </div>
      </section>

      {/* 9. PRUEBA SOCIAL */}
      <section className="social-section">
        <div className="container">
          <h2 className="section-title">Familias Recuperadas</h2>
          <div className="horizontal-scroll">
            <div className="scroll-card testimonial">
              <img src="/landing/images/community_parents_vertical_1768454252596.png" className="card-img" alt="Testimonial" />
              <p>"Volvimos a cenar sin celulares. Parece magia." - Familia R.</p>
            </div>
            <div className="scroll-card testimonial">
              <img src="/landing/images/mobile_testimonial_chat_1_1768453166521.png" className="card-img full" alt="Chat 1" />
            </div>
            <div className="scroll-card testimonial">
              <img src="/landing/images/mobile_testimonial_chat_2_1768453182932.png" className="card-img full" alt="Chat 2" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. OFERTA IRRESISTIBLE */}
      <section id="offer" className="offer-section-v2">
        <div className="container">
          <h2 className="section-title">TU ARSENAL COMPLETO</h2>
          <p className="subtitle">Todo lo que necesitas para rescatarlo:</p>

          <div className="visual-stack-grid">
            <div className="stack-card main-item">
              <div className="stack-img-wrapper">
                <img src="/landing/images/starbiz_course_mockup_vertical_1768453765854.png" alt="Curso" />
              </div>
              <div className="stack-details">
                <h3>Protocolo "Rescata a tu Hijo"</h3>
                <p>El sistema paso a paso.</p>
                <span className="value-tag strikethrough">$197 USD</span>
              </div>
            </div>

            <div className="plus-sign">+</div>

            <div className="stack-card bonus-item">
              <div className="stack-img-wrapper">
                <img src="/landing/images/starbiz_app_mockup_vertical_1768453779266.png" alt="App" />
              </div>
              <div className="stack-details">
                <h3>App "Starbiz Voices"</h3>
                <p>21 Audios de Expertos.</p>
                <span className="value-tag strikethrough">$97 USD</span>
              </div>
            </div>

            <div className="plus-sign">+</div>

            <div className="stack-card bonus-item">
              <div className="stack-img-wrapper">
                <img src="/landing/images/downloadable_kit_mockup_vertical_1768453793110.png" alt="Kit" />
              </div>
              <div className="stack-details">
                <h3>Kit de Emergencia</h3>
                <p>Contratos y Test.</p>
                <span className="value-tag strikethrough">$47 USD</span>
              </div>
            </div>
          </div>

          <div className="final-price-wrapper">
            <div className="total-value-label">VALOR TOTAL REAL: <span className="cross-red">$341 USD</span></div>
            <div className="price-explosion">
              <span className="currency">$</span>
              <span className="big-number">47</span>
              <span className="currency">USD</span>
            </div>
            <div className="one-time-payment">UN SOLO PAGO DE POR VIDA</div>
          </div>

          <button className="cta-button final-btn pulse-animation" onClick={handleCheckout}>
            <span className="btn-title">SI, QUIERO EL PROTOCOLO</span>
            <span className="btn-sub">Descarga Inmediata y Acceso a la App</span>
          </button>

          <div className="guarantee-seal">
            <img src="https://img.icons8.com/color/48/guarantee.png" alt="Garantia" />
            <p>Prueba todo por 7 dias. Si no funciona, te devolvemos el 100%.</p>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Preguntas Frecuentes</h2>

          <div className="faq-item">
            <details>
              <summary>📅 "No tengo tiempo para ver cursos."</summary>
              <p>Por eso creamos <strong>Starbiz Voices</strong>. Puedes escuchar las lecciones en audio de 5 minutos mientras vas al trabajo o cocinas. Esta disenado especificamente para padres ocupados.</p>
            </details>
          </div>

          <div className="faq-item">
            <details>
              <summary>😡 "¿Esto funciona si mi hijo es muy rebelde?"</summary>
              <p>Si. El Modulo de Comunicacion te ensena a dejar de ser "Carpintero" (tratar de tallarlo a la fuerza) y ser "Jardinero" (crear el entorno). Cuando cambias la estrategia y la forma de hablar, baja su resistencia automaticamente.</p>
            </details>
          </div>

          <div className="faq-item">
            <details>
              <summary>📱 "¿Como accedo a la App?"</summary>
              <p>Inmediatamente despues de tu pago, recibiras un correo automatico con tus claves de acceso a nuestra plataforma privada. Desde ahi podras bajar la App y entrar al curso.</p>
            </details>
          </div>

          <div className="faq-item">
            <details>
              <summary>💳 "¿Es una suscripcion mensual?"</summary>
              <p><strong>NO.</strong> Es un pago unico de $47 dolares. El acceso es tuyo para siempre, incluyendo futuras actualizaciones del sistema.</p>
            </details>
          </div>
        </div>
      </section>

      {/* 12. CIERRE FINAL */}
      <section className="closing-section-creative">
        <div className="container">
          <h2 className="section-title">El Costo de No Hacer Nada</h2>

          <div className="hourglass-visual">
            <img src="/landing/images/closing_hourglass_time_running_out_vertical_1768455110996.png" alt="El tiempo se acaba" />
          </div>

          <p className="closing-text">
            Puedes cerrar esta pagina y seguir igual. Seguir peleando en las cenas. Seguir viendo como esa luz azul le roba el brillo a los ojos de tu hijo dia tras dia.
          </p>
          <p className="closing-keywords">
            O puedes tomar accion HOY.
          </p>
          <p className="closing-text">
            Por menos de lo que cuesta una cena familiar, puedes tener el mapa exacto para rescatarlo.
          </p>
          <p className="final-call">Tu hijo te necesita.<br />No esperes a que sea tarde.</p>

          <button className="cta-button final-btn" onClick={handleCheckout}>COMENZAR AHORA</button>
          <p className="copyright">Derechos Reservados © 2025 Starbiz Academy</p>
        </div>
      </section>
    </div>
  );
}
