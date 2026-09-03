import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes/routePaths';
import turismoImg from '../../../assets/imagent2.jpg';
import eventosImg from '../../../assets/evento.jpg';
import productoImg from '../../../assets/producto.jpg';
import '../styles/home.css';

const CATEGORIES = [
  { id: 'turismo', title: 'Turismo', img: turismoImg },
  { id: 'eventos', title: 'Eventos', img: eventosImg },
  { id: 'productos', title: 'Productos', img: productoImg },
];

export const CategoryCards = () => {
  const navigate = useNavigate();

  const handleSelectCategory = (categoryId) => {
    navigate(`${ROUTES.PORTFOLIO}?categoria=${categoryId}`);
  };

  return (
    <section className="home-categories">
      <h2 className="home-categories__title">Portafolio</h2>
      <div className="home-categories__grid">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="home-categories__card"
            onClick={() => handleSelectCategory(cat.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleSelectCategory(cat.id)}
          >
            <img src={cat.img} alt={`Categoría ${cat.title}`} className="home-categories__img" />
            <div className="home-categories__overlay">
              <h3 className="home-categories__card-title">{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
