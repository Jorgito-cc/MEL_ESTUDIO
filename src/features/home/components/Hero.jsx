import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes/routePaths';
import heroImg from '../../../assets/imagen2.jpg';
import '../styles/home.css';

export const Hero = () => {
  const navigate = useNavigate();

  const handleGoToPortfolio = () => {
    navigate(`${ROUTES.PORTFOLIO}?categoria=turismo`);
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero__content">
        <h1 className="hero__title">
          Captura tu historia con <br /> estilo y profesionalismo
        </h1>
        <button
          className="hero__button"
          onClick={handleGoToPortfolio}
        >
          VER PORTAFOLIO
        </button>
      </div>
    </section>
  );
};
