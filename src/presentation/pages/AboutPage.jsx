import React from 'react';
import '../styles/page/about.css';
import melisaImg from '../../assets/melisa.jpeg';

export const About = () => {
  return (
    <section className="about">
      <h1 className="about__title">Sobre mí</h1>

      <div className="about__container">
        <img src={melisaImg} alt="Melissa Uria" className="about__image" />

        <div className="about__text">
               <p>
  MEL STUDIO permite brindar información clara sobre los servicios ofrecidos,<br/>
  facilitar el contacto con potenciales clientes y posicionarse en el mercado como una marca confiable y profesional.<br/>
  Esta herramienta digital no solo optimiza la comunicación,<br/>
  sino que también impulsa el crecimiento del emprendimiento fotográfico al ampliar su alcance más allá de las redes sociales.
</p>
          <p className="about__firma">©2025 -  Melissauria1@gmail.com</p>
        </div>
      </div>
    </section>
  );
};
