import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PORTFOLIO_DATA } from '../data/portfolioData';

/**
 * Custom Hook para gestionar el estado, filtros de URL y modal del Portafolio.
 */
export const usePortfolio = (defaultCategory = 'turismo') => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const currentCategory = searchParams.get('categoria') || defaultCategory;

  // Sincronizar URL si no hay categoría especificada
  useEffect(() => {
    if (!searchParams.get('categoria')) {
      setSearchParams({ categoria: defaultCategory }, { replace: true });
    }
  }, [searchParams, setSearchParams, defaultCategory]);

  const setCategory = (newCategory) => {
    setSearchParams({ categoria: newCategory });
  };

  const images = PORTFOLIO_DATA[currentCategory] || [];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return {
    currentCategory,
    setCategory,
    images,
    selectedImage,
    openModal,
    closeModal,
  };
};
