import React, { useState } from 'react';
import { createContactWhatsappLink } from '../../../utils/whatsapp';
import '../styles/contact.css';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    tema: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappUrl = createContactWhatsappLink({
      nombre: formData.nombre,
      correo: formData.correo,
      tema: formData.tema ? formData.tema.toUpperCase() : 'CONSULTA GENERAL',
      mensaje: formData.mensaje,
    });

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contacto__formulario">
      <h1 className="contacto__titulo">Contáctame</h1>
      <p className="contacto__subtitulo">
        Planeemos juntos tu sesión fotográfica perfecta.
        <br />
        Completa este formulario y me pondré en contacto contigo lo antes posible.
      </p>

      <form className="contacto__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="contacto__input"
        />

        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formData.correo}
          onChange={handleChange}
          required
          className="contacto__input"
        />

        <select
          name="tema"
          value={formData.tema}
          onChange={handleChange}
          className="contacto__select"
        >
          <option value="">Tema</option>
          <option value="sesion">Sesión fotográfica</option>
          <option value="evento">Cobertura de evento</option>
          <option value="producto">Fotografía de producto</option>
          <option value="otro">Otro</option>
        </select>

        <textarea
          name="mensaje"
          rows="4"
          placeholder="Mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
          className="contacto__textarea"
        />

        <button type="submit" className="contacto__btn">
          ENVIAR MENSAJE
        </button>
      </form>
    </div>
  );
};
