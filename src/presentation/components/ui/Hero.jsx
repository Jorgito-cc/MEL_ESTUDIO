import React from "react";
import '../../styles/components/hero.css'
import imagen from '../../../assets/imagen2.jpg';
import imagen2 from '../../../assets/imagent2.jpg';

export const Hero = () => {
  return (
    <>
  <section
      className="hero"
      style={{ backgroundImage: `url(${imagen})` }}
    >
      <div className="hero__content">
        <h1 className="hero__title">
          Captura tu historia con <br /> estilo y profesionalismo
        </h1>
        <a href="#portafolio" className="hero__button">
          Ver portafolio
        </a>
      </div>

      {/* capa responsive (background swap solo en CSS) */}
      <div
        className="hero__bg--mobile"
        style={{ backgroundImage: `url(${imagen2})` }}
      ></div>
    </section>
    </>
  );
};
