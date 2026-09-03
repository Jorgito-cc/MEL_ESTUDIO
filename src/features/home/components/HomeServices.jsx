import React from 'react';
import { SERVICES_PACKAGES } from '../../services/data/servicesData';
import { ServiceCard } from '../../services/components/ServiceCard';
import '../../services/styles/services.css';

export const HomeServices = () => {
  return (
    <section className="services-section">
      <h2 className="services-section__title">Servicios y Paquetes</h2>
      <p className="services-section__subtitle">
        Elige el paquete que mejor se adapte a tu visión y necesidades.
      </p>
      <div className="services-grid">
        {SERVICES_PACKAGES.map((pkg) => (
          <ServiceCard key={pkg.id} paquete={pkg} />
        ))}
      </div>
    </section>
  );
};
