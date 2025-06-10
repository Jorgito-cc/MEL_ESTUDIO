import { useNavigate } from 'react-router-dom';
import '../../styles/components/category-cards.css';
import turismoImg from '../../../assets/imagent2.jpg';
import eventosImg from '../../../assets/evento.jpg';
import productoImg from '../../../assets/producto.jpg';

export const CategoryCards = () => {
  const navigate = useNavigate();

  const handleClick = (categoria) => {
    navigate(`/portafolio?categoria=${categoria}`);
  };

  return (
    <>
    <section className="categorias">
      <div className="categorias__card" onClick={() => handleClick('turismo')}>
        <img src={turismoImg} alt="Turismo" className="categorias__img" />
        <h3 className="categorias__titulo">Turismo</h3>
      </div>
      <div className="categorias__card" onClick={() => handleClick('eventos')}>
        <img src={eventosImg} alt="Eventos" className="categorias__img" />
        <h3 className="categorias__titulo">Eventos</h3>
      </div>
      <div className="categorias__card" onClick={() => handleClick('producto')}>
        <img src={productoImg} alt="Producto" className="categorias__img" />
        <h3 className="categorias__titulo">Producto</h3>
      </div>
    </section>
    </>
  );
};
