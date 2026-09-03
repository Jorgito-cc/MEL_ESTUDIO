import React from 'react';
import melisaImg from '../../../assets/melisa.jpeg';
import '../styles/home.css';

export const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="home-about__container">
        <h2 className="home-about__title">Sobre mí</h2>
        <div className="home-about__content">
          <div className="home-about__card">
            <p>
              Soy Melissa Uria, estudiante de Diseño Gráfico ✌️. A través de este sitio, busco fortalecer mi presencia profesional en el entorno digital, presentando servicios fotográficos con una mirada creativa, cercana y profesional.
            </p>
            <p>
              Mi objetivo es brindar información clara sobre los servicios que ofrezco, facilitar el contacto con clientes y posicionarme como una marca confiable. Me apasiona capturar momentos auténticos que cuenten una historia y conecten con quienes los observan.
            </p>
            <p>
              Esta plataforma no solo optimiza la comunicación, sino que también impulsa el crecimiento de mi emprendimiento fotográfico, permitiendo ampliar mi alcance más allá de las redes sociales.
            </p>
          </div>

          <div className="home-about__image-wrapper">
            <img
              src={melisaImg}
              alt="Melissa Uria - Fotógrafa"
              className="home-about__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
