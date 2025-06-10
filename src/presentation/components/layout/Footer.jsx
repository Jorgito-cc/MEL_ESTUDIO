import { FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import '../../styles/footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__icon">
          <FaInstagram />
        </a>
        <a href="#" className="footer__icon">
          <FaTiktok />
        </a>
        <a href="https://wa.me/70000000" className="footer__icon">
          <FaWhatsapp />
        </a>
        <a href="https://maps.google.com" className="footer__icon">
          <FaMapMarkerAlt />
        </a>
      </div>
      <p className="footer__text">70025342 · studioesnappe.com</p>
    </footer>
  );
};
