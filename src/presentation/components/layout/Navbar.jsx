import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/navbar.css";

export const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuAbierto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuAbierto]);

  const closeMenu = () => setMenuAbierto(false);

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link to="/" className="navbar__home-link" onClick={closeMenu}>
            MEL STUDIO
          </Link>
        </div>

        <nav
          className={`navbar__menu ${menuAbierto ? "navbar__menu--open" : ""}`}
        >
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link
                to="/portafolio"
                className="navbar__link"
                onClick={closeMenu}
              >
                <span>Portafolio</span>
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/servicio" className="navbar__link" onClick={closeMenu}>
                <span>Servicios</span>
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/opiniones"
                className="navbar__link"
                onClick={closeMenu}
              >
                <span>Opiniones</span>
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/sobre-mi" className="navbar__link" onClick={closeMenu}>
                <span>Sobre mí</span>
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/contactanos"
                className="navbar__link"
                onClick={closeMenu}
              >
                <span>Contacto</span>
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className={`navbar__toggle ${menuAbierto ? "navbar__toggle--active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuAbierto}
        >
          <span className="navbar__hamburger"></span>
          <span className="navbar__hamburger"></span>
          <span className="navbar__hamburger"></span>
        </button>
      </div>
    </header>
  );
};
