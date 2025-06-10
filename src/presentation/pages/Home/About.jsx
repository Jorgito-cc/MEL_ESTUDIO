// src/presentation/components/About.jsx
import imagen2 from '../../../assets/imagen2.jpg';
import '../../styles/components/about.css';

export const About = () => {
  return (
    <section className="about">
      <div className="about__text">
        <p className="about__quote">
          “A través de mi lente no solo capturo imágenes, sino historias que el alma quiere recordar. <br />
          Cada sesión es un encuentro entre la luz, la emoción y la memoria.”
        </p>
        <p className="about__author">— Melanie R.</p>
      </div>
      <div className="about__image">
        <img src={imagen2} alt="Fotógrafa de espaldas mirando el horizonte" />
      </div>
    </section>
  );
};
