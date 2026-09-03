import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes/routePaths';
import '../styles/services.css';

export const ServiceCard = ({ paquete }) => {
  const navigate = useNavigate();
  const { id, titulo, precio, beneficios, destacado } = paquete;

  const handleBook = () => {
    navigate(`${ROUTES.SERVICES}?paquete=${id}`);
    const formElement = document.getElementById('reserva-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`service-card ${destacado ? 'service-card--featured' : ''}`}>
      {destacado && <span className="service-card__badge">Más Popular</span>}
      <h3 className="service-card__title">{titulo}</h3>
      <div className="service-card__price">{precio}</div>
      <ul className="service-card__list">
        {beneficios.map((item, idx) => (
          <li key={idx} className="service-card__item">
            {item}
          </li>
        ))}
      </ul>
      <button className="service-card__btn" onClick={handleBook}>
        RESERVAR {titulo.toUpperCase()}
      </button>
    </div>
  );
};
