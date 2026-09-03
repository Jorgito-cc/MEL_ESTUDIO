import React from 'react';
import { SERVICES_PACKAGES } from './data/servicesData';
import { ServiceCard } from './components/ServiceCard';
import { BookingForm } from './components/BookingForm';
import './styles/services.css';

export const ServicesPage = () => {
  return (
    <section className="services-page-wrapper">
      <div className="services-section">
        <h1 className="services-section__title">Servicios</h1>
        <p className="services-section__subtitle">
          Sesiones personalizadas con un acabado estético impecable para personas, eventos y marcas.
        </p>
        <div className="services-grid">
          {SERVICES_PACKAGES.map((pkg) => (
            <ServiceCard key={pkg.id} paquete={pkg} />
          ))}
        </div>
      </div>

      <BookingForm />
    </section>
  );
};
