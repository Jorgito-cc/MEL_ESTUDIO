import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que restaura el scroll al inicio de la página cada vez que cambia la ruta.
 */
export const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname, search]);

  return null;
};
