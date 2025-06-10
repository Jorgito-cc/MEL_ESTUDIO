import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { IMAGENES } from '../../data/imagenesData';
import { GaleriaPortafolio } from './GaleriaPortafolio';
import { DetalleImagenModal } from './DetalleImagenModal';

export const PortafolioPAge = () => {
  const { search } = useLocation();
  const categoria = new URLSearchParams(search).get('categoria');
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const handleOpenModal = (imagen) => setImagenSeleccionada(imagen);
  const handleCloseModal = () => setImagenSeleccionada(null);

  const imagenesCategoria = IMAGENES[categoria] || [];

  return (
    <section className="portafolio">
      <h1 className="portafolio__titulo">{categoria?.toUpperCase()}</h1>
      <GaleriaPortafolio imagenes={imagenesCategoria} onImagenClick={handleOpenModal} />
      {imagenSeleccionada && (
        <DetalleImagenModal imagen={imagenSeleccionada} onClose={handleCloseModal} />
      )}
    </section>
  );
};
