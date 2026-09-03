import React, { useState } from 'react';
import { Modal } from '../../../common/components/Modal/Modal';
import '../styles/reviews.css';

export const ReviewModal = ({ isOpen, onClose, onAddReview }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddReview) {
      onAddReview(formData);
    }
    setFormData({ nombre: '', correo: '', mensaje: '' });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="review-modal-form">
        <h2 className="review-modal-form__title">Enviar opinión</h2>
        <p className="review-modal-form__desc">Cuéntame tu experiencia.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensaje"
            rows="4"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
          <button type="submit" className="review-modal-form__submit">
            ENVIAR
          </button>
        </form>
      </div>
    </Modal>
  );
};
