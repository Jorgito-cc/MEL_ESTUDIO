import React from 'react';
import '../styles/reviews.css';

export const ReviewCard = ({ review }) => {
  const { nombre, descripcion, imagen } = review;

  return (
    <div className="review-card">
      <div className="review-card__img-box">
        <img src={imagen} alt={nombre} className="review-card__img" />
      </div>
      <h3 className="review-card__author">{nombre}</h3>
      <p className="review-card__text">{descripcion}</p>
    </div>
  );
};
