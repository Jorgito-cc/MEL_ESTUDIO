import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { ROUTES } from '../../routes/routePaths';
import './layout.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const navLinks = [
    { label: 'Portafolio', path: ROUTES.PORTFOLIO },
    { label: 'Servicios', path: ROUTES.SERVICES },
    { label: 'Opiniones', path: ROUTES.REVIEWS },
    { label: 'Sobre mí', path: ROUTES.ABOUT },
    { label: 'Contacto', path: ROUTES.CONTACT },
  ];

  return (
    <>
      <header className={`app-navbar ${isScrolled ? 'app-navbar--scrolled' : ''}`}>
        <div className="app-navbar__container">
          <Link to={ROUTES.HOME} className="app-navbar__logo" onClick={closeMenu}>
            MEL STUDIO
          </Link>

          {/* Menú de Navegación (Desktop y Drawer Móvil) */}
          <nav className={`app-navbar__menu ${menuOpen ? 'app-navbar__menu--open' : ''}`}>
            {/* Header exclusivo para móvil dentro del Drawer */}
            <div className="app-navbar__drawer-header">
              <span className="app-navbar__drawer-brand">MEL STUDIO</span>
              <button
                className="app-navbar__drawer-close"
                onClick={closeMenu}
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>

            <ul className="app-navbar__list">
              {navLinks.map((link) => (
                <li key={link.path} className="app-navbar__item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `app-navbar__link ${isActive ? 'active' : ''}`
                    }
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Footer exclusivo para móvil dentro del Drawer */}
            <div className="app-navbar__drawer-footer">
              <div className="app-navbar__drawer-socials">
                <a
                  href="https://www.instagram.com/mel_studio7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="app-navbar__drawer-social-icon"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tiktok.com/@mel_studio7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="app-navbar__drawer-social-icon"
                >
                  <FaTiktok />
                </a>
                <a
                  href="https://wa.me/59160533355"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="app-navbar__drawer-social-icon"
                >
                  <FaWhatsapp />
                </a>
              </div>
              <span className="app-navbar__drawer-copy">© 2025 MEL STUDIO</span>
            </div>
          </nav>

          {/* Botón Hamburguesa */}
          <button
            className={`app-navbar__toggle ${menuOpen ? 'app-navbar__toggle--active' : ''}`}
            onClick={toggleMenu}
            aria-label="Alternar menú de navegación"
            aria-expanded={menuOpen}
          >
            <span className="app-navbar__hamburger"></span>
            <span className="app-navbar__hamburger"></span>
            <span className="app-navbar__hamburger"></span>
          </button>
        </div>
      </header>

      {/* Overlay oscuro difuminado detrás del drawer móvil */}
      <div
        className={`app-navbar__overlay ${menuOpen ? 'app-navbar__overlay--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
};
