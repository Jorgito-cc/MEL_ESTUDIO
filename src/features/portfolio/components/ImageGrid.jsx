import React from 'react';
import '../styles/portfolio.css';

export const ImageGrid = ({ images, onImageClick }) => {
  if (!images || images.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-texto-muted)' }}>
        <p>No se encontraron fotografías en esta categoría.</p>
      </div>
    );
  }

  return (
    <div className="portfolio-grid">
      {images.map((img) => (
        <div
          key={img.id}
          className="portfolio-card"
          onClick={() => onImageClick(img)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onImageClick(img)}
        >
          <div className="portfolio-card__img-wrapper">
            <img
              src={img.src}
              alt={img.titulo}
              className="portfolio-card__img"
              loading="lazy"
            />
          </div>
          <div className="portfolio-card__info">
            <h3 className="portfolio-card__title">{img.titulo}</h3>
            <span className="portfolio-card__location">{img.ubicacion}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
