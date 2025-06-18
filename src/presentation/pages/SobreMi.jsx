import React from 'react';
import '../styles/page/sobremi.css';
import imagen2 from '../../assets/melisa.jpeg';

export const SobreMi = () => {
  return (
   <section className="sobre-mi">
      <h1 className="sobre-mi__titulo">Sobre mí</h1>
      <div className="sobre-mi__contenido">
        <div className="sobre-mi__frase">
<p>Soy Melissa Uria, estudiante de Diseño Gráfico ✌️. A través de este sitio, busco fortalecer mi presencia profesional en el entorno digital, presentando servicios fotográficos con una mirada creativa, cercana y profesional.</p>

<p>Mi objetivo es brindar información clara sobre los servicios que ofrezco, facilitar el contacto con clientes y posicionarme como una marca confiable. Me apasiona capturar momentos auténticos que cuenten una historia y conecten con quienes los observan.</p>

<p>Esta plataforma no solo optimiza la comunicación, sino que también impulsa el crecimiento de mi emprendimiento fotográfico, permitiendo ampliar mi alcance más allá de las redes sociales.</p>

          <span className="sobre-mi__autor"></span>
        </div>
        <div className="sobre-mi__imagen">
          <img src={imagen2} alt="Fotógrafa mirando al horizonte" />
        </div>
      </div>
    </section>
  );
};
