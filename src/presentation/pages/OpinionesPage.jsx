import React, { useState } from 'react';
import '../styles/page/opiniones.css';
import { FaUserCircle } from 'react-icons/fa';
import persona1 from '../../assets/persona1.jpg';
import persona2 from '../../assets/persona2.jpg';
import persona3 from '../../assets/persona3.jpg';
import persona4 from '../../assets/persona4.jpg';
import persona5 from '../../assets/persona5.jpg';
import persona6 from '../../assets/persona6.jpg';
import persona7 from '../../assets/persona7.jpg';

const opinionesMock = [
  { nombre: 'Marcos Soto', descripcion: 'Una experiencia maravillosa.', imagen: persona1 },
  { nombre: 'José Ramírez', descripcion: 'Quedamos encantados con el resultado.', imagen: persona2 },
  { nombre: 'Lucía Fernández', descripcion: 'Muy amable y creativa.', imagen: persona3 },
  { nombre: 'Diego Morales', descripcion: 'Gran atención al detalle.', imagen: persona4 },
  { nombre: 'Marío López', descripcion: 'Superó mis expectativas.', imagen: persona5 },
  { nombre: 'Fernando Paredes', descripcion: 'Excelente resultado.', imagen: persona6 },
  { nombre: 'Robert Navarro', descripcion: '¡Todo salió hermoso!', imagen: persona7 },
];

export const OpinionesPage = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  return (
    <section className="opiniones">
      <div className="opiniones__header">
        <h1>Opiniones</h1>
        <p>Conoce las experiencias de quienes confiaron en mi trabajo</p>
        <button onClick={abrirModal}>Enviar opinión</button>
      </div>

      <div className="opiniones__cards">
        {opinionesMock.map((op, i) => (
          <div className="opinion-card" key={i}>
            <img src={op.imagen} alt={op.nombre} />
            <h3>{op.nombre}</h3>
            <p>{op.descripcion}</p>
          </div>
        ))}
      </div>

      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal__close" onClick={cerrarModal}>×</button>
            <h2>Enviar opinión</h2>
            <p>Cuéntame tu experiencia.</p>
            <form>
              <input type="text" placeholder="Nombre" required />
              <input type="email" placeholder="Correo electrónico" required />
              <textarea placeholder="Mensaje" rows={4} required></textarea>
              <button type="submit" className="modal__submit">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
