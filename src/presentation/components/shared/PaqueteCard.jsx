import { useNavigate } from 'react-router-dom';
import '../../styles/shared/paquete-card.css';

export const PaqueteCard = ({ titulo, beneficios, nivel }) => {
  const navigate = useNavigate();

  const handleReserva = () => {
    navigate(`/reservar?paquete=${nivel.toLowerCase()}`);
  };

  return (
    <div className="paquete">
      <h3 className="paquete__titulo">{titulo}</h3>
      <ul className="paquete__lista">
        {beneficios.map((item, index) => (
          <li key={index} className="paquete__item">{item}</li>
        ))}
      </ul>
      <button className="paquete__btn" onClick={handleReserva}>Reservar</button>
    </div>
  );
};
