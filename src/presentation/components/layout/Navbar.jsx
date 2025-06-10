import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- importante
import '../../styles/components/navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  return (
    <header className="navbar">
      <div className="navbar__logo">
         <Link to="/" className="navbar__home-link">MEL STUDIO</Link>
      </div>

      <nav className={`navbar__menu ${menuAbierto ? 'navbar__menu--open' : ''}`}>
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/portafolio" className="navbar__link">Portafolio</Link>
          </li>
          <li className="navbar__item">
            <Link to="/servicio" className="navbar__link">Servicios</Link>
          </li>
          <li className="navbar__item">
            <Link to="/opiniones" className="navbar__link">Opiniones</Link>
          </li>
          <li className="navbar__item">
            <Link to="/sobre-mi" className="navbar__link">Sobre mí</Link>
          </li>
          <li className="navbar__item">
            <Link to="/contactanos" className="navbar__link">Contacto</Link>
          </li>
        </ul>
      </nav>

      <button className="navbar__toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {menuAbierto ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};
