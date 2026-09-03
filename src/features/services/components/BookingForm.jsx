import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SERVICES_PACKAGES } from '../data/servicesData';
import { createBookingWhatsappLink } from '../../../utils/whatsapp';
import '../styles/services.css';

export const BookingForm = () => {
  const [searchParams] = useSearchParams();
  const initialPaquete = searchParams.get('paquete') || 'basico';

  const [formData, setFormData] = useState({
    fecha: '',
    hora: '',
    tipo: 'turismo',
    paquete: initialPaquete,
    nombre: '',
    correo: '',
    notas: '',
  });

  useEffect(() => {
    const pkgFromQuery = searchParams.get('paquete');
    if (pkgFromQuery) {
      setFormData((prev) => ({ ...prev, paquete: pkgFromQuery }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappUrl = createBookingWhatsappLink({
      nombre: formData.nombre,
      fecha: formData.fecha,
      hora: formData.hora,
      tipo: formData.tipo.toUpperCase(),
      paquete: formData.paquete.toUpperCase(),
      notas: formData.notas,
    });

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="booking-page" id="reserva-form-section">
      <div className="booking-page__header">
        <h2 className="booking-page__title">Reserva una sesión</h2>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-form__group">
          <label className="booking-form__label" htmlFor="fecha">
            Fecha
          </label>
          <input
            id="fecha"
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
            className="booking-form__input"
          />
        </div>

        <div className="booking-form__group">
          <label className="booking-form__label" htmlFor="hora">
            Hora
          </label>
          <input
            id="hora"
            type="time"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
            className="booking-form__input"
          />
        </div>

        <div className="booking-form__group">
          <label className="booking-form__label" htmlFor="tipo">
            Tipo de sesión
          </label>
          <select
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            className="booking-form__select"
          >
            <option value="turismo">Turismo</option>
            <option value="eventos">Eventos</option>
            <option value="productos">Producto</option>
          </select>
        </div>

        <div className="booking-form__group">
          <label className="booking-form__label" htmlFor="paquete">
            Paquete
          </label>
          <select
            id="paquete"
            name="paquete"
            value={formData.paquete}
            onChange={handleChange}
            className="booking-form__select"
          >
            {SERVICES_PACKAGES.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.titulo} ({pkg.precio})
              </option>
            ))}
          </select>
        </div>

        <div className="booking-form__group">
          <label className="booking-form__label" htmlFor="nombre">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            required
            className="booking-form__input"
          />
        </div>

        <div className="booking-form__group">
          <label className="booking-form__label" htmlFor="correo">
            Correo electrónico
          </label>
          <input
            id="correo"
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
            required
            className="booking-form__input"
          />
        </div>

        <div className="booking-form__group">
          <label className="booking-form__label" htmlFor="notas">
            Notas adicionales
          </label>
          <textarea
            id="notas"
            name="notas"
            value={formData.notas}
            onChange={handleChange}
            rows="3"
            placeholder="¿Tienes alguna petición especial?"
            className="booking-form__textarea"
          />
        </div>

        <div className="booking-form__actions">
          <button type="submit" className="booking-form__submit">
            ENVIAR RESERVA
          </button>
        </div>
      </form>
    </div>
  );
};
