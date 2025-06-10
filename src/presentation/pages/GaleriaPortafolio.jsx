import React from 'react';
import '../styles/page/galeria-portafolio.css';

export const GaleriaPortafolio = ({ imagenes, onImagenClick }) => {
  return (
    <div className="galeria">
      {imagenes.map((img) => (
        <div className="galeria__item" key={img.id} onClick={() => onImagenClick(img)}>
          <img src={img.src} alt={img.titulo} className="galeria__img" />
          <h3 className="galeria__titulo">{img.titulo}</h3>
        </div>
      ))}
    </div>
  );
};
