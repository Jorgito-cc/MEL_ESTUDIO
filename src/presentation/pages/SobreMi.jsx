import React from 'react';
import '../styles/page/sobremi.css';
import imagen2 from '../../assets/imagen2.jpg';

export const SobreMi = () => {
  return (
   <section className="sobre-mi">
      <h1 className="sobre-mi__titulo">Sobre mí</h1>
      <div className="sobre-mi__contenido">
        <div className="sobre-mi__frase">
          <p>
            “A través de mi lente no solo capturo imágenes, sino historias que el alma quiere recordar.<br />
            Cada sesión es un encuentro entre la luz, la emoción y la memoria.”
          </p>
          <span className="sobre-mi__autor">— Melanie R.</span>
        </div>
        <div className="sobre-mi__imagen">
          <img src={imagen2} alt="Fotógrafa mirando al horizonte" />
        </div>
      </div>
    </section>
  );
};
