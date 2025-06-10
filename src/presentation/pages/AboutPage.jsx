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
            Soy <strong>Melissa Uria</strong>, estudiante de Diseño Gráfico <span>👌</span>. 
          </p>
          <p>
            Apasionada por capturar momentos auténticos con una mirada creativa, cercana y profesional.
            A través de mi lente, busco que cada imagen cuente una historia que inspire y conecte con quienes la observan.
          </p>
          <p className="about__firma">©2025 -  Melissauria1@gmail.com</p>
        </div>
      </div>
    </section>
  );
};
