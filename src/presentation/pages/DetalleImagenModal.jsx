import React from 'react';
import '../styles/page/modal-imagen.css';

export const DetalleImagenModal = ({ imagen, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__cerrar" onClick={onClose}>×</button>
        <img src={imagen.src} alt={imagen.titulo} className="modal__img" />
        <h2>{imagen.titulo}</h2>
        <p><strong>Ubicación:</strong> {imagen.ubicacion}</p>
        <p><strong>Fecha:</strong> {imagen.fecha}</p>
        <p><strong>Técnica:</strong> {imagen.tecnica}</p>
      </div>
    </div>
  );
};
