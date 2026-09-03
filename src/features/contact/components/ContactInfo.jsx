import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import melisaImg from '../../../assets/melisa.jpeg';
import '../styles/contact.css';

export const ContactInfo = () => {
  return (
    <div className="contacto__info">
      <div className="contacto__img-wrapper">
        <img
          src={melisaImg}
          alt="Melissa Uria - Mel Studio"
          className="contacto__img"
        />
      </div>

      <div className="contacto__datos">
        <div className="contacto__dato-item">
          <FaPhoneAlt className="contacto__icon" />
          <a href="tel:+59175098807" className="contacto__link">
            +591 75098807
          </a>
        </div>

        <div className="contacto__dato-item">
          <FaEnvelope className="contacto__icon" />
          <a href="mailto:Melissauria1@gmail.com" className="contacto__link">
            Melissauria1@gmail.com
          </a>
        </div>

        <div className="contacto__dato-item">
          <FaMapMarkerAlt className="contacto__icon" />
          <span>Avenida 3 Pasos al Frente, Santa Cruz de la Sierra.</span>
        </div>
      </div>
    </div>
  );
};
