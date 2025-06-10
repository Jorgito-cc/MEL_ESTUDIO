import { PaqueteCard } from '../../components/shared/PaqueteCard';
import '../../styles/page/servicios.css';

export const Servicios = () => {
  return (
    <section className="servicios">
      <h1 className="servicios__titulo">Servicios</h1>

      <div className="servicios__contenedor">
        <PaqueteCard
          titulo="Básico"
          nivel="Basico"
          beneficios={[
            '1 locación exterior',
            '10 fotografías editadas',
            'Entrega digital',
            'Duración: 30 minutos',
          ]}
        />
        <PaqueteCard
          titulo="Estándar"
          nivel="Estandar"
          beneficios={[
            '2 locaciones',
            '20 fotografías + 1 reel',
            '1 outfit adicional',
            'Duración: 1 hora',
          ]}
        />
        <PaqueteCard
          titulo="Premium"
          nivel="Premium"
          beneficios={[
            'Locación a elección',
            '40 fotografías + video corto',
            'Asesoría de estilo',
            'Álbum físico incluido',
            'Duración: 2 horas',
          ]}
        />
      </div>
    </section>
  );
};
