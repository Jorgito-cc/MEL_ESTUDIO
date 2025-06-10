
import React, { useState } from 'react';
import '../styles/components/navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; 

export const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  return (
<>

    <header className="navbar">
      <div className="navbar__logo">MEL STUDIO</div>

      <nav className={`navbar__menu ${menuAbierto ? 'navbar__menu--open' : ''}`}>
        <ul className="navbar__list">
          <li className="navbar__item"><a href="#precios" className="navbar__link">Portafolio</a></li>
           <li className="navbar__item"><a href="#portafolio" className="navbar__link">Servicios</a></li> 
          <li className="navbar__item"><a href="#opiniones" className="navbar__link">Opiniones</a></li>
          <li className="navbar__item"><a href="#sobre-mi" className="navbar__link">Sobre mí</a></li>
          <li className="navbar__item"><a href="#contacto" className="navbar__link">Contacto</a></li>
        <li className="navbar__item"><a href="#contacto" className="navbar__link">Iniciar Seccion</a></li>
        </ul>
      </nav>

      <button className="navbar__toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {menuAbierto ? <FaTimes /> : <FaBars />}
      </button>
    </header>
</>
  );
}
