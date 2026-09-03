import React from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import './layout.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="app-footer__container">
        <div className="app-footer__icons">
          <a
            href="https://www.instagram.com/01_03_mely?igsh=MW96Mmo3aWd5dzY5Yw=="
            target="_blank"
            rel="noopener noreferrer"
            className="app-footer__icon"
            aria-label="Instagram de Mel Studio"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@magic._.shop07?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="app-footer__icon"
            aria-label="TikTok de Mel Studio"
          >
            <FaTiktok />
          </a>
          <a
            href="https://wa.me/59175098807"
            target="_blank"
            rel="noopener noreferrer"
            className="app-footer__icon"
            aria-label="WhatsApp de Mel Studio"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://maps.google.com/?q=Santa+Cruz+de+la+Sierra+Bolivia"
            target="_blank"
            rel="noopener noreferrer"
            className="app-footer__icon"
            aria-label="Ubicación de Mel Studio"
          >
            <FaMapMarkerAlt />
          </a>
        </div>
        <p className="app-footer__text">
          © {currentYear} <strong>MEL STUDIO</strong>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
