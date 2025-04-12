import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faVk, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-block">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">Контакты</h3>
          <ul className="footer-contacts">
            <li>
              <FontAwesomeIcon icon={faPhone} className="footer-icon" />
              <a href="tel:+79350512387">+7 (935) 051-23-87</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
              <a href="mailto:andrbazarin@yandex.ru">andrbazarin@yandex.ru</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} className="footer-icon" />
              <span>Пн-Сб: 8:00 - 20:00</span>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Соцсети</h3>
          <div className="social-links">
            <a href="https://t.me/andreybazarinr" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faTelegram} className="social-icon" />
            </a>
            <a href="https://vk.com/andreybazarin" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faVk} className="social-icon" />
            </a>
            <a href="https://wa.me/79350512387" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Андрей Базарин | Ваш персональный фитнес-тренер</p>
      </div>
    </footer>
  );
};

export default Footer;