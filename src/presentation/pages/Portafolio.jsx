import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/page/portafolio.css';

const IMAGENES = {
  turismo: [
    { id: 1, src: '/src/assets/imagen1.jpg', titulo: 'Paisaje costero' },
    { id: 2, src: '/src/assets/imagen2.jpg', titulo: 'Montañas nevadas' }
  ],
  eventos: [
    { id: 3, src: '/src/assets/imagen2.jpg', titulo: 'Boda campestre' },
    { id: 4, src: '/src/assets/imagen2.jpg', titulo: 'Graduación' }
  ],
  producto: [
    { id: 5, src: '/src/assets/imagen2.jpg', titulo: 'Perfume' },
    { id: 6, src: '/src/assets/imagen2.jpg', titulo: 'Bolso' }
  ]
};

export const Portafolio = () => {
  const { search } = useLocation();
  const categoria = new URLSearchParams(search).get('categoria');

  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    if (categoria && IMAGENES[categoria]) {
      setImagenes(IMAGENES[categoria]);
    } else {
      setImagenes([]);
    }
  }, [categoria]);

  return (
    <section className="portafolio">
      <h2 className="portafolio__titulo">Portafolio - {categoria?.toUpperCase()}</h2>
      <div className="portafolio__grid">
        {imagenes.map((img) => (
          <div key={img.id} className="portafolio__item">
            <img src={img.src} alt={img.titulo} className="portafolio__img" />
            <p className="portafolio__caption">{img.titulo}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
