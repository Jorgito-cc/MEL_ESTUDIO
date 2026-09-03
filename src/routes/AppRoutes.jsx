import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../common/layout/MainLayout';
import { ROUTES } from './routePaths';

// Páginas / Features
import { HomePage } from '../features/home/HomePage';
import { PortfolioPage } from '../features/portfolio/PortfolioPage';
import { ServicesPage } from '../features/services/ServicesPage';
import { ReviewsPage } from '../features/reviews/ReviewsPage';
import { AboutPage } from '../features/about/AboutPage';
import { ContactPage } from '../features/contact/ContactPage';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.PORTFOLIO} element={<PortfolioPage />} />
          <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
          <Route path={ROUTES.REVIEWS} element={<ReviewsPage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          
          {/* Redirecciones de compatibilidad para rutas previas */}
          <Route path="/servicio" element={<Navigate to={ROUTES.SERVICES} replace />} />
          <Route path="/contactanos" element={<Navigate to={ROUTES.CONTACT} replace />} />
          
          {/* Fallback para 404 */}
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Route>
      </Routes>
    </Router>
  );
};
