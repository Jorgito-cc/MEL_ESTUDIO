import { useNavigate } from 'react-router-dom';
import '../../styles/components/category-cards.css';
import turismoImg from '../../../assets/imagent2.jpg';
import eventosImg from '../../../assets/evento.jpg';
import productoImg from '../../../assets/producto.jpg';

export const CategoryCards = () => {
  const navigate = useNavigate();

  const handleClick = (categoria) => {
      console.log('Navegando a categoría:', categoria);
    navigate(`/portafolio?categoria=${categoria}`);
  };

  return (
    <>
     
    <section className="categorias">
  <h1 className="categorias__titulo">Servicios</h1>

  <div className="categorias__grid">
    <div className="categorias__card" onClick={() => handleClick('turismo')}>
      <img src={turismoImg} alt="Turismo" className="categorias__img" />
      <h3 className="categorias__subtitulo">Turismo</h3>
    </div>
    <div className="categorias__card" onClick={() => handleClick('eventos')}>
      <img src={eventosImg} alt="Eventos" className="categorias__img" />
      <h3 className="categorias__subtitulo">Eventos</h3>
    </div>
    <div className="categorias__card" onClick={() => handleClick('productos')}>
      <img src={productoImg} alt="productos" className="categorias__img" />
      <h3 className="categorias__subtitulo">Productos</h3>
    </div>
  </div>
</section>

    </>
  );
};
