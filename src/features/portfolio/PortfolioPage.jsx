import React from 'react';
import { usePortfolio } from './hooks/usePortfolio';
import { CategoryTabs } from './components/CategoryTabs';
import { ImageGrid } from './components/ImageGrid';
import { ImageDetailModal } from './components/ImageDetailModal';
import './styles/portfolio.css';

export const PortfolioPage = () => {
  const {
    currentCategory,
    setCategory,
    images,
    selectedImage,
    openModal,
    closeModal,
  } = usePortfolio();

  return (
    <section className="portfolio-page">
      <div className="portfolio-page__header">
        <h1 className="portfolio-page__title">Portafolio</h1>
        <p className="portfolio-page__desc">
          Explora una selección de mis mejores capturas en distintas disciplinas.
        </p>
      </div>

      <CategoryTabs
        currentCategory={currentCategory}
        onSelectCategory={setCategory}
      />

      <ImageGrid
        images={images}
        onImageClick={openModal}
      />

      <ImageDetailModal
        image={selectedImage}
        onClose={closeModal}
      />
    </section>
  );
};
