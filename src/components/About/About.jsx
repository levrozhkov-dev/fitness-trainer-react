import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tabs } from "../../data/portfolioData.js";
import "./About.css";
import about_img_1 from "../../assets/about_img_1.png";
import about_img_2 from "../../assets/about_img_2.png";
import about_img_3 from "../../assets/about_img_3.png";
import about_img_4 from "../../assets/about_img_4.png";
import info_img from "../../assets/info-img.svg";
import board_img from "../../assets/board-img.svg";
import body_img from "../../assets/body-img.svg";
import about_arrow_down from "../../assets/about_arrow_down.svg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="about-block" id="about">
      <div className="about-block__main">
        <div className="about-block__main__first">
          <h2 className="about-block__title title">
            <span className="about-block__title__text-default">
              Меня зовут Андрей, и я верю, что спорт
            </span>
            <span className="about-block__title__text-special title__text-special">
              меняет жизни
            </span>
          </h2>
          <div className="about-block__content">
            <div className="img-section">
              <figure className="figure__about-1">
                <img
                  className="figure__about__img"
                  src={about_img_1}
                  alt="фото тренера 1"
                />
              </figure>
              <figure className="figure__about-2">
                <img
                  className="figure__about__img"
                  src={about_img_2}
                  alt="фото тренера 2"
                />
              </figure>
              <figure className="figure__about-3">
                <img
                  className="figure__about__img"
                  src={about_img_3}
                  alt="фото тренера 3"
                />
              </figure>
              <figure className="figure__about-4">
                <img
                  className="figure__about__img"
                  src={about_img_4}
                  alt="фото тренера 4"
                />
              </figure>
            </div>
            <div className="text-section">
              <Fade cascade triggerOnce={true}>
                <motion.article
                  className="text-section__part"
                  style={{
                    cursor: "default",
                    position: "relative",
                    paddingBottom: "15px",
                  }}
                  initial="rest"
                  whileHover="hover"
                >
                  <img
                    draggable="false"
                    className="text-section__part__img"
                    src={info_img}
                    alt=""
                  />
                  <p>
                    Мне 29 лет, я сертифицированный тренер с 6-летним опытом,
                    живу в Нижнем Новгороде.
                  </p>
                  <motion.div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "#fff",
                      borderRadius: "3px",
                    }}
                    variants={{
                      rest: {
                        width: 0,
                        opacity: 0.7,
                      },
                      hover: {
                        width: "100%",
                        opacity: 1,
                      },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  />
                </motion.article>
                <motion.article
                  className="text-section__part"
                  style={{
                    cursor: "default",
                    position: "relative",
                    paddingBottom: "15px",
                  }}
                  initial="rest"
                  whileHover="hover"
                >
                  <img
                    draggable="false"
                    className="text-section__part__img"
                    src={board_img}
                    alt=""
                  />
                  <p>
                    Специализируюсь на функциональном тренинге и коррекции веса.
                    За эти годы я помог более 90 клиентам стать сильнее,
                    подвижнее и увереннее в себе.
                  </p>
                  <motion.div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "#fff",
                      borderRadius: "3px",
                    }}
                    variants={{
                      rest: {
                        width: 0,
                        opacity: 0.7,
                      },
                      hover: {
                        width: "100%",
                        opacity: 1,
                      },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  />
                </motion.article>
                <motion.article
                  className="text-section__part"
                  style={{
                    cursor: "default",
                    position: "relative",
                    paddingBottom: "15px",
                  }}
                  initial="rest"
                  whileHover="hover"
                >
                  <img
                    draggable="false"
                    className="text-section__part__img"
                    src={body_img}
                    alt=""
                  />
                  <p>
                    Мои тренировки – это не просто «качалка», а продуманные
                    программы под твои цели. Я против изнурительных нагрузок без
                    результата: мы работаем над техникой, выносливостью и
                    прогрессом.
                  </p>
                  <motion.div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "#fff",
                      borderRadius: "3px",
                    }}
                    variants={{
                      rest: {
                        width: 0,
                        opacity: 0.7,
                      },
                      hover: {
                        width: "100%",
                        opacity: 1,
                      },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  />
                </motion.article>
                <button
                  className="text-section__part-button"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <div className="button-line"></div>
                  {isVisible ? (
                    <div className="button-text">
                      Скрыть портфолио
                      <img
                        draggable="false"
                        className="about-arrow arrow-up"
                        src={about_arrow_down}
                        alt=""
                      />
                    </div>
                  ) : (
                    <div className="button-text">
                      Раскрыть портфолио
                      <img
                        draggable="false"
                        className="about-arrow arrow-down"
                        src={about_arrow_down}
                        alt=""
                      />
                    </div>
                  )}
                </button>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6 }}
            style={{ overflow: "hidden" }}
          >
            <section className="about-block__achievements">
              <div className="about-block__achievements__main">
                <div className="tabs-container">
                  <div className="tabs-buttons">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        className={`tab-button ${
                          activeTab === tab.id ? "active" : ""
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <FontAwesomeIcon
                          icon={tab.icon}
                          style={{ height: "25px" }}
                        />
                        {tab.title}
                        <div className="underline"></div>
                      </button>
                    ))}
                  </div>

                  <div className="tab-content">
                    <div className="tab-content__left">
                      <p className="tab-content__title">
                        {activeTabData.subtitle}
                      </p>
                      <ul className="content-list">
                        {activeTabData.items.map((item, index) => (
                          <li key={index} className="list-item">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <a href="https://vk.com/andreybazarin" rel="noopener noreferrer" target="_blank">
                        Мои социальные сети
                      </a>
                    </div>
                    <div className="tab-content__right">
                      <img
                        className="tab-img"
                        src={activeTabData.image}
                        alt="фото тренировки"
                      />
                      <img
                        draggable="false"
                        className="tab-svg"
                        src={activeTabData.svg}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
