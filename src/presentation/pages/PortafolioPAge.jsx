import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { IMAGENES } from '../../data/imagenesData';
import { GaleriaPortafolio } from './GaleriaPortafolio';
import { DetalleImagenModal } from './DetalleImagenModal';
import '../styles/page/portafolio.css'

export const PortafolioPAge = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(search);
  const categoria = query.get('categoria');

  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  useEffect(() => {
    if (!categoria) {
      navigate('/portafolio?categoria=turismo');
    }
  }, [categoria, navigate]);

  const handleOpenModal = (imagen) => setImagenSeleccionada(imagen);
  const handleCloseModal = () => setImagenSeleccionada(null);

  const imagenesCategoria = IMAGENES[categoria] || [];

  return (
    <section className="portafolio">
      <h1 className="portafolio__titulo">Portafolio</h1>

      <div className="portafolio__tabs">
        <button
          className={categoria === 'turismo' ? 'active' : ''}
          onClick={() => navigate('/portafolio?categoria=turismo')}
        >
          Turismo
        </button>
        <button
          className={categoria === 'eventos' ? 'active' : ''}
          onClick={() => navigate('/portafolio?categoria=eventos')}
        >
          Eventos
        </button>
        <button
          className={categoria === 'productos' ? 'active' : ''}
          onClick={() => navigate('/portafolio?categoria=productos')}
        >
          Producto
        </button>
      </div>

      <GaleriaPortafolio imagenes={imagenesCategoria} onImagenClick={handleOpenModal} />

      {imagenSeleccionada && (
        <DetalleImagenModal imagen={imagenSeleccionada} onClose={handleCloseModal} />
      )}
    </section>
  );
};
