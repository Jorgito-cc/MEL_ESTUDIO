// PaqueteCard.jsx
import { useNavigate } from 'react-router-dom';
import '../../styles/shared/paquete-card.css';

export const PaqueteCard = ({ titulo, beneficios, nivel, precio }) => {
  const navigate = useNavigate();

  const handleReserva = () => {
    navigate(`/servicio?paquete=${nivel.toLowerCase()}`);
  };

  return (
    <div className="paquete">
      <h3 className="paquete__titulo">{titulo}</h3>
      <ul className="paquete__lista">
        {beneficios.map((item, index) => (
          <li key={index} className="paquete__item">{item}</li>
        ))}
      </ul>

      <p className="paquete__precio">{precio}</p> {/* nuevo bloque */}

      <button className="paquete__btn" onClick={handleReserva}>Reservar</button>
    </div>
  );
};
