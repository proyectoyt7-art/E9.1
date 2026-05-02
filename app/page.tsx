"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import ExitIntentPopup from './ExitIntentPopup';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = ['/imagenes/2.1.webp', '/imagenes/2.2.webp', '/imagenes/2.3.webp'];

  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: '¿Este recetario es para mí si no sé cocinar?', a: '¡Totalmente! Todas las recetas están diseñadas paso a paso para que cualquier persona, sin importar su experiencia, pueda prepararlas fácilmente y obtener resultados deliciosos.' },
    { q: '¿Cuánto tiempo necesito para preparar los desayunos?', a: 'La mayoría de nuestras recetas toman menos de 15 minutos en prepararse. Están pensadas justamente para personas ocupadas.' },
    { q: '¿Los ingredientes son difíciles de conseguir?', a: 'No, todos los ingredientes son comunes y fáciles de encontrar en cualquier supermercado local.' },
    { q: '¿Realmente puedo bajar de peso con estas recetas?', a: 'Sí, las recetas están balanceadas nutricionalmente para ayudarte a crear un déficit calórico de manera saludable y deliciosa.' },
    { q: '¿Tengo que seguir una dieta estricta?', a: 'No, la idea es que aprendas a comer mejor sin restricciones extremas, disfrutando de lo que comes.' },
    { q: '¿Qué pasa si no tengo tiempo?', a: 'Justamente por eso el recetario incluye opciones de preparación rápida y algunas que puedes dejar listas la noche anterior.' },
    { q: '¿Las recetas son repetitivas?', a: 'Con más de 300 recetas, tendrás variedad para mucho tiempo sin aburrirte de comer siempre lo mismo.' },
    { q: '¿Cómo recibiré mi recetario después de la compra?', a: 'Después de realizar la compra, Hotmart te enviará automáticamente un correo electrónico con el acceso directo al producto. Desde ese enlace podrás ingresar y descargar tu recetario de forma simple y segura.' },
    { q: '¿El pago es seguro?', a: 'Sí, el pago se procesa a través de la plataforma Hotmart, que cuenta con los más altos estándares de seguridad y protección.' },
    { q: '¿Y si no me gusta?', a: 'Tienes una garantía de 7 días. Si no te convence, te devolvemos el 100% de tu dinero.' },
  ];

  return (
    <div className={styles.container}>
      {/* Top Banner */}
      <div className={styles.topBanner}>
        ¡OFERTA TERMINA EN: <span className={styles.timer}>{formatTime(timeLeft)}</span> | APROVECHA MÁS DEL 80% DE DESCUENTO HOY 🔥
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <span className={styles.greenText}>Pierde peso sin dejar de disfrutar cada desayuno...</span> con más de 300 recetas rápidas, deliciosas y saludables
        </h1>
        <p className={styles.heroSubtitle}>
          Empieza tu día con energía, con las recetas de la nutricionista Isabella Mendoza, para personas con poco tiempo que quieren resultados reales.
        </p>

        <div className={styles.heroImage1}>
          <Image src="/imagenes/1.webp" alt="E-book de Desayunos" width={600} height={400} className={styles.imgResponsive} />
        </div>

        <div className={styles.carouselContainer}>
          <button className={styles.carouselButton} onClick={prevSlide}>&#10094;</button>
          <div className={styles.carouselSlide}>
            <Image src={carouselImages[currentSlide]} alt={`Receta ${currentSlide + 1}`} width={600} height={600} className={styles.imgResponsive} />
          </div>
          <button className={styles.carouselButton} onClick={nextSlide}>&#10095;</button>
        </div>
      </section>

      {/* Identified Section */}
      <section className={styles.identified}>
        <h2 className={styles.sectionTitle}>
          ¿TE SIENTES <span className={styles.greenText}>IDENTIFICADO(A)</span> CON ESTO?
        </h2>
        <div className={styles.identifiedGrid}>
          <div className={styles.idCard}>
            <div className={styles.idEmoji}>😕</div>
            <h3>No sabes qué desayunar</h3>
            <p>Te despiertas sin ideas y acabas comiendo lo primero que pillas o saltándote la comida.</p>
          </div>
          <div className={styles.idCard}>
            <div className={styles.idEmoji}>⏰</div>
            <h3>No tienes tiempo</h3>
            <p>Tus mañanas son un caos y lo último que quieres es complicarte en la cocina.</p>
          </div>
          <div className={styles.idCard}>
            <div className={styles.idEmoji}>😔</div>
            <h3>Te sientes culpable</h3>
            <p>Sabes que podrías hacerlo mejor... intentas comer saludable... pero no sabes por dónde empezar.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2 className={styles.benefitsTitle}>
          SI TE PASA ESTO, NO ESTÁS SOLO...<br />
          CON ESTE LIBRO, ESTO ES LO QUE VAS A <span className={styles.greenText}>LOGRAR:</span>
        </h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>💪</div>
            <div>
              <h4>Plan de éxito probado</h4>
              <p>Olvídate de las que no dan resultados. Empieza a verlos desde la primera semana.</p>
            </div>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>✨</div>
            <div>
              <h4>Libertad total</h4>
              <p>Más de 300 opciones para que nunca sientas que estás a dieta.</p>
            </div>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>🥗</div>
            <div>
              <h4>Pierde peso con sabor</h4>
              <p>Adelgaza disfrutando de comidas que realmente te encantan.</p>
            </div>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>⏰</div>
            <div>
              <h4>Ahorra tiempo</h4>
              <p>Recetas listas en 15 minutos o menos, perfectas para rutinas ocupadas.</p>
            </div>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>🌿</div>
            <div>
              <h4>Cocina sin estrés</h4>
              <p>Sin pasos tan tediosos o complicados, solo comida real.</p>
            </div>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>⚡</div>
            <div>
              <h4>Empieza el día con energía</h4>
              <p>Empieza el día con vitalidad, sin hambre a media mañana.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className={styles.recipes}>
        <h2 className={styles.sectionTitle}>
          DESAYUNOS QUE VAS A QUERER COMER <span className={styles.greenText}>TODOS LOS DÍAS:</span>
        </h2>
        <div className={styles.recipesGrid}>
          {[
            { img: '3.webp', title: 'PANQUECA VERDE CON ESPINACAS', desc: '10 MIN | FÁCIL' },
            { img: '4.webp', title: 'ACAI BOWL DE VERANO', desc: '5 MIN | SIN COCCIÓN' },
            { img: '5.webp', title: 'PANQUECA DE ZANAHORIA', desc: '7 MIN | REGULAR' },
            { img: '6.webp', title: 'TORTILLA DE ESPINACA Y QUESO', desc: '5 MIN | FÁCIL' },
            { img: '7.webp', title: 'TOSTADAS DE PALTA Y HUEVO', desc: '5 MIN | FÁCIL' },
            { img: '8.webp', title: 'PAN FRANCÉS SALUDABLE', desc: '8 MIN | FÁCIL' },
            { img: '9.webp', title: 'BATIDO VERDE DETOX', desc: '5 MIN | FÁCIL' },
            { img: '10.webp', title: 'PUDIN DE CHIA Y FRUTOS ROJOS', desc: '5 MIN | 2 HRS FRIO' },
          ].map((recipe, idx) => (
            <div key={idx} className={styles.recipeCard}>
              <div className={styles.recipeImgWrapper}>
                <Image src={`/imagenes/${recipe.img}`} alt={recipe.title} width={300} height={300} className={styles.imgResponsive} />
              </div>
              <div className={styles.recipeCardBody}>
                <h4>{recipe.title}</h4>
                <p>{recipe.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.recipesFooterText}>¡Y esto es solo una pequeña parte de todo lo que encontrarás dentro!</p>
      </section>

      {/* Bonuses Section */}
      <section className={styles.bonuses}>
        <h2 className={styles.bonusesTitle}>
          Además de aprender, vas a tener todo listo para empezar, solo por<br />
          hoy te regalaremos...<br />
          <span className={styles.greenText}>+ 5 BONUS EXCLUSIVOS:</span>
        </h2>
        <div className={styles.bonusesGrid}>
          {[
            { img: '11.webp', tag: 'BONUS 1', title: 'Más de 200 postres sin gluten ni azúcar para que puedas disfrutar sin remordimiento', oldPrice: '9.99' },
            { img: '12.webp', tag: 'BONUS 2', title: '20 recetas de panes saludables sin gluten fáciles de preparar en casa.', oldPrice: '7.99' },
            { img: '13.webp', tag: 'BONUS 3', title: '60 bebidas naturales para mejorar digestión, reducir inflamación y aumentar energía.', oldPrice: '9.99' },
            { img: '14.webp', tag: 'BONUS 4', title: 'Un plan completo de 30 días basado en las recetas del e-book, listo para seguir paso a paso.', oldPrice: '7.99' },
            { img: '15.webp', tag: 'BONUS 5', title: '5 videos explicativos donde te enseño la forma correcta de tus desayunos para mejorar tu alimentación.', oldPrice: '4.99' },
          ].map((bonus, idx) => (
            <div key={idx} className={styles.bonusCard}>
              <div className={styles.bonusImgWrapper}>
                <Image src={`/imagenes/${bonus.img}`} alt={bonus.tag} width={200} height={200} className={styles.imgResponsive} />
              </div>
              <div className={styles.bonusContent}>
                <h4>{bonus.tag}</h4>
                <p>{bonus.title}</p>
                {bonus.oldPrice && <p className={styles.oldPrice}>VALOR: ${bonus.oldPrice}</p>}
                <div className={styles.gratisBadge}>GRATIS HOY</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Creator Section */}
      <section className={styles.creator}>
        <div className={styles.creatorContainer}>
          <div className={styles.creatorImgWrapper}>
            <Image src="/imagenes/16.webp" alt="Nutricionista Isabella Mendoza" width={300} height={300} className={styles.imgResponsive} />
          </div>
          <div className={styles.creatorText}>
            <h5>SOBRE LA CREADORA</h5>
            <h2>NUTRICIONISTA <span className={styles.greenText}>ISABELLA<br />MENDOZA</span></h2>
            <p>Soy Isabella Mendoza, nutricionista especializada en alimentación práctica y saludable.</p>
            <p>He creado este recetario para ayudarte a comer mejor sin complicarte, con opciones reales, rápidas y deliciosas para tu día a día.</p>
            <p>Mi misión es liberarte de las dietas extremas, mostrarte la vía saludable para saciarte y, sobre todo, hacerte feliz comiendo rico cada mañana.</p>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className={styles.offerSection} id="seccion-oferta">
        <div className={styles.offerContainer}>
          <h2 className={styles.offerTitle}>
            TODO LO QUE NECESITAS PARA<br />
            <span className={styles.greenText}>TRANSFORMAR TU ALIMENTACIÓN,</span> EN UN<br />
            SOLO LUGAR...
          </h2>
          <p className={styles.offerSubtitle}>RESUMAMOS TODO LO QUE RECIBIRÁS</p>
          
          <div className={styles.offerImgWrapper}>
            <Image src="/imagenes/18.webp" alt="E-book Pack Completo" width={500} height={400} className={styles.imgResponsive} />
          </div>

          <div className={styles.offerList}>
            <div className={styles.offerRow}><span>• Recetario de +300 Desayunos de la nutricionista</span> <span>24.99</span></div>
            <div className={styles.offerRow}><span>• Bonus 1: 200 postres sin azúcar</span> <span>9.99</span></div>
            <div className={styles.offerRow}><span>• Bonus 2: 20 recetas de pan sin gluten</span> <span>7.99</span></div>
            <div className={styles.offerRow}><span>• Bonus 3: 60 Zumos Detox purificantes</span> <span>9.99</span></div>
            <div className={styles.offerRow}><span>• Bonus 4: Plan nutricional de 30 días</span> <span>7.99</span></div>
            <div className={styles.offerRow}><span>• Bonus 5: Guía nutricional en video</span> <span>4.99</span></div>
            <div className={styles.offerTotalNormal}>PRECIO TOTAL NORMAL: <span>$65.94</span></div>
          </div>

          <div className={styles.offerDiscountBox}>
            SOLO POR HOY: MÁS DEL 80% DE DESCUENTO EN EL PACK COMPLETO
          </div>

          <div className={styles.offerPriceBox}>
            <div className={styles.offerSpecialText}>
              <strong>OFERTA ESPECIAL</strong><br />
              <span>POR TIEMPO LIMITADO</span>
            </div>
            <div className={styles.offerPrice}>9,99</div>
          </div>

          <a href="https://pay.hotmart.com/U105652145O?checkoutMode=10" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            QUIERO MI RECETARIO AHORA
          </a>
          <p className={styles.secureText}>PAGO ÚNICO Y ACCESO INMEDIATO. SIN SUSCRIPCIONES</p>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className={styles.guaranteeSection}>
        <div className={styles.guaranteeContainer}>
          <div className={styles.guaranteeImgWrapper}>
            <Image src="/imagenes/17.webp" alt="Garantía" width={150} height={150} className={styles.imgResponsive} />
          </div>
          <div className={styles.guaranteeText}>
            <h4>PRUÉBALO SIN RIESGO DURANTE 7 DÍAS</h4>
            <p>Sabemos que tomar una decisión puede generar dudas... y es completamente normal.</p>
            <p>Si no te convence, te devolvemos el 100% de tu dinero, sin complicaciones.</p>
            <p>👉 El riesgo es nuestro, no tuyo...</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>LO QUE DICEN ELLAS:</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialQuote}>&quot;Nunca pensé que podría desayunar dulce y seguir bajando de peso. ¡Las recetas son increíbles!&quot;</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.avatarWrapper}><Image src="/imagenes/19.jfif" alt="María García" width={50} height={50} className={styles.avatarImg} /></div>
              <div>
                <strong>María García</strong>
                <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialQuote}>&quot;Todo está en un solo lugar y me siento con una energía que no tenía antes. 100% recomendado.&quot;</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.avatarWrapper}><Image src="/imagenes/20.jfif" alt="Lucía Méndez" width={50} height={50} className={styles.avatarImg} /></div>
              <div>
                <strong>Lucía Méndez</strong>
                <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialQuote}>&quot;Es que más me gusta es la variedad. Ya no me aburro de comer siempre lo mismo.&quot;</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.avatarWrapper}><Image src="/imagenes/21.jfif" alt="Elena Sanz" width={50} height={50} className={styles.avatarImg} /></div>
              <div>
                <strong>Elena Sanz</strong>
                <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>DUDAS FRECUENTES:</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.faqItem}>
              <button className={styles.faqQuestion} onClick={() => toggleFaq(idx)}>
                {faq.q}
                <span className={styles.faqIcon}>{openFaq === idx ? '▲' : '▼'}</span>
              </button>
              {openFaq === idx && (
                <div className={styles.faqAnswer}>
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className={styles.footerCTA}>
        <button 
          onClick={() => document.getElementById('seccion-oferta')?.scrollIntoView({ behavior: 'smooth' })}
          className={styles.ctaButton}
        >
          QUIERO MI RECETARIO AHORA
        </button>
      </section>

      <footer className={styles.footer}>
        <p>Copyright © 2024 Nutricionista Isabella Mendoza - Todos los Derechos Reservados</p>
      </footer>

      <ExitIntentPopup />
    </div>
  );
}
