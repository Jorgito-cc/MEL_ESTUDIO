import { FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import '../../styles/footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a href="https://www.instagram.com/01_03_mely?igsh=MW96Mmo3aWd5dzY5Yw==" target="_blank" rel="noopener noreferrer" className="footer__icon">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@magic._.shop07?is_from_webapp=1&sender_device=pc" className="footer__icon">
          <FaTiktok />
        </a>
        <a href="https://wa.me/75098807" className="footer__icon">
          <FaWhatsapp />
        </a>
        <a href="https://maps.google.com" className="footer__icon">
          <FaMapMarkerAlt />
        </a>
      </div>
      <p className="footer__text"> mel_Studio.com</p>
    </footer>
  );
};
