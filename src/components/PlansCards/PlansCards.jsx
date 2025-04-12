import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { plansData } from "../../data/plansData";
import "swiper/css";
import "swiper/css/pagination";
import "./PlansCards.css";
import card_arrow_down from "../../assets/card_arrow_down.svg";
import card_arrow_up from "../../assets/card_arrow_up.svg";

const PlansCards = () => {
  const paginationRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const verticalSwipers = useRef({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSwiperInit = (index, swiper) => {
    verticalSwipers.current[index] = swiper;
  };

  const goToNextSlide = (index) => {
    if (verticalSwipers.current[index]) {
      verticalSwipers.current[index].slideNext();
    }
  };

  const goToPrevSlide = (index) => {
    if (verticalSwipers.current[index]) {
      verticalSwipers.current[index].slidePrev();
    }
  };

  return (
    <section className="plans-cards-block" id="plans">
      <div className="plans-cards-block__main">
        <h2 className="title plans-cards__title">
          Не бывает универсальных программ — только индивидуальный подход
          &#55357;&#56613;
        </h2>
        <h3 className="title__text-special">Выбери свое направление</h3>
        <div className="slider-container">
          <div ref={paginationRef} className="text-pagination-container"></div>
          {isMounted && (
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              className="plans-cards__swiper"
              modules={[Pagination]}
              loop={true}
              pagination={{
                el: paginationRef.current,
                clickable: true,
                renderBullet: (index, className) => {
                  return `
                    <div class="${className} text-bullet">
                      ${plansData[index].title}
                    </div>
                  `;
                },
              }}
              spaceBetween={20}
              slidesPerView={1}
            >
              {plansData.map((slide, index) => (
                <SwiperSlide>
                  <div className="vertical-swiper-wrapper">
                    <Swiper
                      onSwiper={(swiper) => handleSwiperInit(index, swiper)}
                      className="swiper-second"
                      direction="vertical"
                      spaceBetween={50}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                    >
                      <SwiperSlide>
                        <div className="slide-content">
                          <div
                            style={{
                              backgroundImage: `url(${slide.image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                            }}
                            className="slide-text"
                          >
                            <h4 className="card-title">{slide.sub_title1}</h4>
                            <ul className="card-list list-one">
                              <li className="card-list__item">
                                Формат:{" "}
                                <span className="card-list__item__span">
                                  {slide.format}
                                </span>
                              </li>
                              <li className="card-list__item">
                                Частота:{" "}
                                <span className="card-list__item__span">
                                  {slide.frequency}
                                </span>
                              </li>
                              <li className="card-list__item">
                                Особенности:{" "}
                                <span className="card-list__item__span">
                                  {slide.feature}
                                </span>
                              </li>
                            </ul>
                            <div className="card__bottom">
                              <a className="card__proposal" href="#form">
                                Записаться сейчас
                              </a>
                              <div>
                                <button
                                  className="swiper-button-vertical"
                                  onClick={() => goToNextSlide(index)}
                                >
                                  <p className="card-list__item">
                                    Мне подойдет?
                                  </p>
                                  <img src={card_arrow_down} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slide-content">
                          <div
                            style={{
                              backgroundImage: `url(${slide.image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                            }}
                            className="slide-text"
                          >
                            <div className="card__bottom">
                              <h4 className="card-title">
                                &#9989; Кому подойдет:
                              </h4>
                              <button
                                className="swiper-button-vertical button-vertical__two"
                                onClick={() => goToPrevSlide(index)}
                              >
                                <p className="card-list__item">О программе</p>
                                <img src={card_arrow_up} />
                              </button>
                            </div>
                            <ul className="card-list list-two">
                              <li className="card-list__item">
                                <span>{slide.fit_1_title}</span> –{" "}
                                <span className="card-list__item__span">
                                  {slide.fit_1_description}
                                </span>
                              </li>
                              <li className="card-list__item">
                                <span>{slide.fit_2_title}</span> –{" "}
                                <span className="card-list__item__span">
                                  {slide.fit_2_description}
                                </span>
                              </li>
                              <li className="card-list__item">
                                <span>{slide.fit_3_title}</span> –{" "}
                                <span className="card-list__item__span">
                                  {slide.fit_3_description}
                                </span>
                              </li>
                              <li className="card-list__item">
                                <span>{slide.fit_4_title}</span> –{" "}
                                <span className="card-list__item__span">
                                  {slide.fit_4_description}
                                </span>
                              </li>
                            </ul>
                            <a
                              className="card-question"
                              href="https://t.me/andreybazarin"
                              target="_blank"
                            >
                              <button className="card-question-button">
                                Задать вопрос
                              </button>
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlansCards;