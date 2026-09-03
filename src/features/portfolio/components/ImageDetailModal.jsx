import React from 'react';
import { Modal } from '../../../common/components/Modal/Modal';
import '../styles/portfolio.css';

export const ImageDetailModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <Modal isOpen={!!image} onClose={onClose}>
      <div className="portfolio-modal-detail">
        <img
          src={image.src}
          alt={image.titulo}
          className="portfolio-modal-detail__img"
        />
        <h2 className="portfolio-modal-detail__title">{image.titulo}</h2>
        <div className="portfolio-modal-detail__meta">
          <p>
            <strong>📍 Ubicación:</strong> {image.ubicacion}
          </p>
          <p>
            <strong>📅 Fecha:</strong> {image.fecha}
          </p>
          <p>
            <strong>📷 Técnica:</strong> {image.tecnica}
          </p>
        </div>
      </div>
    </Modal>
  );
};
