import React from "react";
import '../../styles/components/hero.css'
import imagen from '../../../assets/imagen2.jpg';
import imagen2 from '../../../assets/imagent2.jpg';
import { useNavigate } from 'react-router-dom';
export const Hero = () => {
  const navigate = useNavigate(); // ✅ Hook para navegar

  const irAPortafolio = () => {
    navigate('/portafolio?categoria=turismo'); // Por ejemplo, ya con categoría por defecto
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${imagen})` }}
    >
      <div className="hero__content">
        <h1 className="hero__title">
          Captura tu historia con <br /> estilo y profesionalismo
        </h1>
        <button className="hero__button" onClick={irAPortafolio}>
          Ver portafolio
        </button>
      </div>

      <div
        className="hero__bg--mobile"
        style={{ backgroundImage: `url(${imagen2})` }}
      ></div>
    </section>
  );
};
