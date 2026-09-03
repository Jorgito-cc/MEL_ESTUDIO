import React from 'react';
import melisaImg from '../../assets/melisa.jpeg';
import './styles/about.css';

export const AboutPage = () => {
  return (
    <section className="about-page">
      <h1 className="about-page__title">Sobre mí</h1>

      <div className="about-page__container">
        <div className="about-page__image-box">
          <img
            src={melisaImg}
            alt="Melissa Uria"
            className="about-page__image"
          />
        </div>

        <div className="about-page__card">
          <p className="about-page__description">
            MEL STUDIO permite brindar información clara sobre los servicios ofrecidos,<br />
            facilitar el contacto con potenciales clientes y posicionarse en el mercado como una marca confiable y profesional.<br />
            Esta herramienta digital no solo optimiza la comunicación,<br />
            sino que también impulsa el crecimiento del emprendimiento fotográfico al ampliar su alcance más allá de las redes sociales.
          </p>

          <p className="about-page__firma">
            ©2025 - Melissauria1@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};
