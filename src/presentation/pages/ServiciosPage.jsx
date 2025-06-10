import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/page/reservar.css';

export const ServiciosPage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const paquete = params.get('paquete') || 'basico';

  return (
    <section className="reservar">
      <h1 className="reservar__titulo">Reserva una sesión</h1>
      <form className="reservar__form">
        <div className="reservar__grupo">
          <label>📅 Fecha</label>
          <input type="date" required />
        </div>

        <div className="reservar__grupo">
          <label>⏰ Hora</label>
          <input type="time" required />
        </div>

        <div className="reservar__grupo">
          <label>🖼️ Tipo de sesión</label>
          <select required>
            <option value="turismo">Turismo</option>
            <option value="eventos">Eventos</option>
            <option value="productos">Producto</option>
          </select>
        </div>

        <div className="reservar__grupo">
          <label>💼 Paquete</label>
          <select defaultValue={paquete}>
            <option value="basico">Básico</option>
            <option value="estandar">Estándar</option>
            <option value="premium">Premium</option>
          </select>
        </div>

        <div className="reservar__grupo">
          <label>👤 Nombre</label>
          <input type="text" placeholder="Tu nombre completo" required />
        </div>

        <div className="reservar__grupo">
          <label>📧 Correo electrónico</label>
          <input type="email" placeholder="correo@ejemplo.com" required />
        </div>

        <div className="reservar__grupo">
          <label>📝 Notas adicionales</label>
          <textarea rows="3" placeholder="¿Tienes alguna petición especial?" />
        </div>

        <button type="submit" className="reservar__btn">Enviar reserva</button>
      </form>
    </section>
  );
};
