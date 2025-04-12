import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faStar, faCircleQuestion, faDumbbell, faCalendarCheck, faTags } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faVk, faWhatsapp  } from "@fortawesome/free-brands-svg-icons";
import "./Header.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import arrow from "../../assets/arrow-drop-down.svg";

const Header = () => {
  const isShortDesktop = useMediaQuery({ minWidth: 769, maxWidth: 960 });
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if(window.pageYOffset > 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  return (
    <header className={`header ${isScrolled && "header-scrolled"}`}>
      <div className="header__color"></div>
      <section
        className={`header__container ${
          isScrolled && "header__container-scrolled"
        }`}
      >
        <a className="header-logo" href="/">
          <img
            className="header__logo-image"
            src={isShortDesktop ? logo2 : logo1}
            alt="логотип"
          />
        </a>
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <span className="header__menu-link">
                <span className="dropdown__button color__hover">
                  Главная
                  <img className="dropdown-arrow" src={arrow} alt=""/>
                </span>
                <ul className="dropdown__list">
                  <li className="dropdown__menu-item">
                    <a
                      className="dropdown__menu-link color__hover"
                      href="#about"
                    >
                      <FontAwesomeIcon
                        className="dropdown__icon"
                        icon={faUserTie}
                        style={{ height: "25px" }}
                      />
                      <span>Обо мне</span>
                    </a>
                  </li>
                  <li className="dropdown__menu-item">
                    <a
                      className="dropdown__menu-link color__hover"
                      href="#review"
                    >
                      <FontAwesomeIcon
                        className="dropdown__icon"
                        icon={faStar}
                        style={{ height: "25px" }}
                      />
                      <span>Отзывы</span>
                    </a>
                  </li>
                  <li className="dropdown__menu-item">
                    <a className="dropdown__menu-link color__hover" href="#faq">
                      <FontAwesomeIcon
                        className="dropdown__icon"
                        icon={faCircleQuestion}
                        style={{ height: "25px" }}
                      />
                      <span>Вопросы</span>
                    </a>
                  </li>
                </ul>
              </span>
            </li>
            <li className="header__menu-item">
              <span className="header__menu-link">
                <span className="dropdown__button color__hover">
                  Программы
                  <img className="dropdown-arrow" src={arrow} alt=""/>
                </span>
                <ul className="dropdown__list">
                  <li className="dropdown__menu-item">
                    <a
                      className="dropdown__menu-link color__hover"
                      href="#plans"
                    >
                      <FontAwesomeIcon
                        className="dropdown__icon"
                        icon={faDumbbell}
                        style={{ height: "25px" }}
                      />
                      <span>Тренировки</span>
                    </a>
                  </li>
                  <li className="dropdown__menu-item">
                    <a
                      className="dropdown__menu-link color__hover"
                      href="#format"
                    >
                      <FontAwesomeIcon
                        className="dropdown__icon"
                        icon={faCalendarCheck}
                        style={{ height: "25px" }}
                      />
                      <span>Формат занятий</span>
                    </a>
                  </li>
                  <li className="dropdown__menu-item">
                    <a
                      className="dropdown__menu-link color__hover"
                      href="#pricing"
                    >
                      <FontAwesomeIcon
                        className="dropdown__icon"
                        icon={faTags}
                        style={{ height: "25px" }}
                      />
                      <span>Тарифы</span>
                    </a>
                  </li>
                </ul>
              </span>
            </li>
            <li className="header__menu-item">
              <span className="header__menu-link">
                <span className="dropdown__button color__hover">
                  Связь
                  <img className="dropdown-arrow" src={arrow} alt=""/>
                </span>
                <ul className="dropdown__list">
                  <li className="dropdown__menu-item">
                    <a
                      className="dropdown__menu-link color__hover"
                      href="https://t.me/andreybazarin"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        className="dropdown__icon"
                        icon={faTelegram}
                        style={{ height: "25px" }}
                      />
                      <span>Телеграмм</span>
                    </a>
                  </li>
                  <li className="dropdown__menu-item">
                    <a
                      className="dropdown__menu-link color__hover"
                      href="https://vk.com/andreybazarin"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        className="dropdown__icon"
                        icon={faVk}
                        style={{ height: "25px" }}
                      />
                      <span>Вконтакте</span>
                    </a>
                  </li>
                  <li className="dropdown__menu-item">
                    <a
                      className="dropdown__menu-link color__hover"
                      href="https://wa.me/79350512387"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        className="dropdown__icon"
                        icon={faWhatsapp}
                        style={{ height: "25px" }}
                      />
                      <span>What's app</span>
                    </a>
                  </li>
                </ul>
              </span>
            </li>
            <li className="header__menu-item">
              <a
                className="header__menu-link header__menu-item_proposal"
                href="#form"
              >
                Оформить заявку
              </a>
            </li>
          </ul>
        </nav>
        <HamburgerMenu />
      </section>
    </header>
  );
};

export default Header
