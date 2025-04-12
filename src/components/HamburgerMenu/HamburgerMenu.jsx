import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faStar, faCircleQuestion, faDumbbell, faCalendarCheck, faTags } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faVk, faWhatsapp  } from "@fortawesome/free-brands-svg-icons";
import "./HamburgerMenu.css";
import arrow from "../../assets/arrow-drop-down.svg";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".menu-container") &&
        !e.target.closest(".hamburger")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Меню"
        aria-expanded={isOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <div className={`menu-container ${isOpen ? "open" : "closed"}`}>
        <nav className="mobile-menu">
          <ul className="header__menu-list header__menu-list__mobile">
            <li className="header__menu-item header__menu-item__mobile">
              <span className="header__menu-link">
                <span className="dropdown__button color__hover">
                  <img className="dropdown-arrow dropdown-arrow__mobile" src={arrow} alt=""/>
                  Главная
                </span>
                <ul className="dropdown__list dropdown__list__mobile">
                  <li className="dropdown__menu-item">
                    <a onClick={() => setIsOpen(!isOpen)} className="dropdown__menu-link color__hover" href="#about">
                      <FontAwesomeIcon className="dropdown__icon" icon={faUserTie} style={{height:'25px'}} />
                      <span>Обо мне</span>
                    </a>
                  </li>
                  <li className="dropdown__menu-item">
                    <a onClick={() => setIsOpen(!isOpen)} className="dropdown__menu-link color__hover" href="#review">
                      <FontAwesomeIcon className="dropdown__icon" icon={faStar} style={{height:'25px'}} />
                      <span>Отзывы</span>
                    </a>
                  </li>
                  <li className="dropdown__menu-item">
                    <a onClick={() => setIsOpen(!isOpen)} className="dropdown__menu-link color__hover" href="#faq">
                      <FontAwesomeIcon className="dropdown__icon" icon={faCircleQuestion} style={{height:'25px'}} />
                      <span>Вопросы</span>
                    </a>
                  </li>
                </ul>
              </span>
            </li>
            <li className="header__menu-item header__menu-item__mobile">
              <span className="header__menu-link">
                <span className="dropdown__button color__hover">
                  <img className="dropdown-arrow dropdown-arrow__mobile" src={arrow} alt=""/>
                  Программы
                </span>
                <ul className="dropdown__list dropdown__list__mobile">
                  <li className="dropdown__menu-item">
                    <a onClick={() => setIsOpen(!isOpen)} className="dropdown__menu-link color__hover" href="#plans">
                      <FontAwesomeIcon className="dropdown__icon" icon={faDumbbell} style={{height:'25px'}} />
                      <span>Тренировки</span>
                    </a>
                  </li>
                  <li className="dropdown__menu-item">
                    <a onClick={() => setIsOpen(!isOpen)} className="dropdown__menu-link color__hover" href="#format">
                      <FontAwesomeIcon className="dropdown__icon" icon={faCalendarCheck} style={{height:'25px'}} />
                      <span>Формат занятий</span>
                    </a>
                  </li>
                  <li className="dropdown__menu-item">
                    <a onClick={() => setIsOpen(!isOpen)} className="dropdown__menu-link color__hover" href="#pricing">
                      <FontAwesomeIcon className="dropdown__icon" icon={faTags } style={{height:'25px'}}/>
                      <span>Тарифы</span>
                    </a>
                  </li>
                </ul>
              </span>
            </li>
            <li className="header__menu-item header__menu-item__mobile">
              <span className="header__menu-link">
                <span className="dropdown__button color__hover">
                  <img className="dropdown-arrow dropdown-arrow__mobile" src={arrow} alt=""/>
                  Связь
                </span>
                <ul className="dropdown__list dropdown__list__mobile">
                  <li className="dropdown__menu-item">
                    <a onClick={() => setIsOpen(!isOpen)} className="dropdown__menu-link color__hover" href="https://t.me/andreybazarin" rel="noopener noreferrer" target="_blank">
                      <FontAwesomeIcon className="dropdown__icon" icon={faTelegram} style={{height:'25px'}} />
                      <span>Телеграмм</span>
                    </a>
                  </li>
                  <li className="dropdown__menu-item">
                    <a onClick={() => setIsOpen(!isOpen)} className="dropdown__menu-link color__hover" href="https://vk.com/andreybazarin" rel="noopener noreferrer" target="_blank">
                      <FontAwesomeIcon className="dropdown__icon" icon={faVk} style={{height:'25px'}} />
                      <span>Вконтакте</span>
                    </a>
                  </li>
                  <li className="dropdown__menu-item">
                    <a onClick={() => setIsOpen(!isOpen)} className="dropdown__menu-link color__hover" href="https://wa.me/79350512387" rel="noopener noreferrer" target="_blank">
                      <FontAwesomeIcon className="dropdown__icon" icon={faWhatsapp} style={{height:'25px'}} />
                      <span>What's app</span>
                    </a>
                  </li>
                </ul>
              </span>
            </li>
            <li className="header__menu-item header__menu-item__mobile">
              <a onClick={() => setIsOpen(!isOpen)} className="header__menu-link header__menu-item_proposal proposal__mobile" href="#form">Оформить заявку</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
