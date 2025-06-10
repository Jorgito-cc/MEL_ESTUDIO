import React from 'react';
import '../styles/page/contacto.css';
import melisaImg from '../../assets/melisa.jpeg';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const ContactoPage = () => {
  return (
    <section className="contacto">
      <div className="contacto__container">
        <div className="contacto__info">
          <img src={melisaImg} alt="Melissa Uria" className="contacto__img" />
          <div className="contacto__datos">
            <p>
              <FaPhoneAlt />{' '}
              <a href="tel:+59175098807">+591 75098807</a>
            </p>
            <p>
              <FaEnvelope />{' '}
              <a href="mailto:Melissauria1@gmail.com">Melissauria1@gmail.com</a>
            </p>
            <p>
              <FaMapMarkerAlt /> Avenida 3 Pasos al Frente, Santa Cruz de la Sierra.
            </p>
          </div>
        </div>

        <div className="contacto__formulario">
          <h1 className="contacto__titulo">Contáctame</h1>
          <p className="contacto__subtitulo">
            Planeemos juntos tu sesión fotográfica perfecta.<br />
            Completa este formulario y me pondré en contacto contigo lo antes posible.
          </p>
          <form>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Correo electrónico" required />
            <select>
              <option value="">Tema</option>
              <option value="sesion">Sesión fotográfica</option>
              <option value="evento">Cobertura de evento</option>
              <option value="otro">Otro</option>
            </select>
            <textarea rows="4" placeholder="Mensaje" required></textarea>
            <button type="submit">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};
