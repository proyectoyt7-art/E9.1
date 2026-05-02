"use client";

import { useState, useEffect } from 'react';
import styles from './ExitIntentPopup.module.css';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);

  const showPopup = () => {
    if (!sessionStorage.getItem('exitPopupShown')) {
      setIsVisible(true);
      sessionStorage.setItem('exitPopupShown', 'true');
    }
  };

  const closePopup = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    // Desktop: Mouse exit intent
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup();
      }
    };

    // Mobile: Back button intent
    // We push a state so that when the user hits back, we can catch it
    window.history.pushState({ popup: true }, '');
    
    const handlePopState = () => {
      // If the user hits back, this will trigger
      showPopup();
      // Re-push state so they have to hit back again to actually leave
      // but only if they haven't seen the popup yet or if it's currently showing
      // Actually, if we want to allow them to leave after closing, we should be careful.
    };

    document.addEventListener('mouseleave', handleMouseOut);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('mouseleave', handleMouseOut);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={closePopup}>✕</button>
        
        <h2 className={styles.title}>¡ESPERA! QUEREMOS AYUDARTE</h2>
        <h3 className={styles.subtitle}>Antes de que te vayas, queremos darte una oportunidad especial…</h3>
        
        <p className={styles.text}>
          Sabemos que dar el paso puede ser difícil, pero de verdad queremos ayudarte a mejorar tu alimentación de forma simple.
        </p>

        <div className={styles.priceBox}>
          <p style={{ margin: 0, fontWeight: 700, color: '#666' }}>Por eso, te damos acceso al recetario completo por un precio exclusivo:</p>
          <div className={styles.price}>$6.99</div>
        </div>

        <div className={styles.benefitsList}>
          <div className={styles.benefitItem}><span>✔</span> Acceso al recetario completo</div>
          <div className={styles.benefitItem}><span>✔</span> Incluye TODOS los bonos</div>
          <div className={styles.benefitItem}><span>✔</span> Garantía de 7 días sin riesgo</div>
        </div>

        <p className={styles.urgencyText}>
          Esta oferta solo aparece una vez y es por tiempo limitado.
        </p>

        <a 
          href="https://pay.hotmart.com/U105652145O?off=ie7gia4w&checkoutMode=10" 
          className={styles.mainCta}
        >
          QUIERO MI OFERTA POR $6.99
        </a>

        <button className={styles.secondaryCta} onClick={closePopup}>
          No, prefiero perder esta oportunidad
        </button>
      </div>
    </div>
  );
}
