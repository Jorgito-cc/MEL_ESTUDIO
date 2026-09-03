import React, { useState } from 'react';
import { INITIAL_REVIEWS } from './data/reviewsData';
import { ReviewCard } from './components/ReviewCard';
import { ReviewModal } from './components/ReviewModal';
import './styles/reviews.css';

export const ReviewsPage = () => {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddReview = (newReviewData) => {
    const newEntry = {
      id: Date.now(),
      nombre: newReviewData.nombre,
      descripcion: newReviewData.mensaje,
      imagen: INITIAL_REVIEWS[0].imagen, // avatar por defecto estanda 

    };
    setReviews([newEntry, ...reviews]);
  };

  return (
    <section className="reviews-page">
      <div className="reviews-page__header">
        <h1 className="reviews-page__title">Opiniones</h1>
        <p className="reviews-page__subtitle">
          Conoce las experiencias de quienes confiaron en mi trabajo
        </p>
        <button
          className="reviews-page__btn-open"
          onClick={() => setIsModalOpen(true)}
        >
          ENVIAR OPINIÓN
        </button>
      </div>

      <div className="reviews-grid">
        {reviews.map((rev) => (
          <ReviewCard key={rev.id} review={rev} />
        ))}
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddReview={handleAddReview}
      />
    </section>
  );
};
