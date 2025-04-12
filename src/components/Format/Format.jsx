import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Parallax, Pagination, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Format.css";
import format_icon_1 from  "../../assets/format_icon_1.svg";
import format_icon_2 from  "../../assets/format_icon_2.svg";

const Format = () => {
  const isShortDesktop = useMediaQuery({ maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 449 });

  return (
    <section className="format-block" id="format">
      <div className="format-block__main">
        <h2>Удобный формат: в зале или дистанционно</h2>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="format-swiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax={
              isShortDesktop ? (isMobile ? "-80%" : "-60%") : "-42%"
            }
          ></div>
          <SwiperSlide>
            <article className="format-text format-text__one">
              <div className="format-text__title" data-swiper-parallax="-300">
                <img src={format_icon_1} alt="спортивная обувь" />
                <div className="format-text__title__string">
                  <h3 className="format-text__title__string__one">
                    Персональные тренировки в зале
                  </h3>
                  <p className="format-text__title__string__two">
                    Регулярные встречи и личное общение в Нижнем Новгороде
                  </p>
                </div>
              </div>
              <ul className="format-list" data-swiper-parallax="-200">
                <li className="format-list__item">
                  <span className="format-list__item__span">
                    Полный контроль
                  </span>{" "}
                  — каждое движение, каждое упражнение и даже ваш вздох будут
                  максимально эффективны.
                </li>
                <li className="format-list__item">
                  <span className="format-list__item__span">
                    Энергия живого общения
                  </span>{" "}
                  — иногда одно слово тренера дает больше, чем 10 страниц
                  инструкций.
                </li>
                <li className="format-list__item">
                  <span className="format-list__item__span">
                    Мгновенная обратная связь
                  </span>{" "}
                  — исправление ошибок в режиме реального времени.
                </li>
              </ul>
              <p className="format-text__subtitle" data-swiper-parallax="-100">
                Максимально персонализированный подход для тех, кто хочет быстро
                и безопасно достичь результатов под руководством эксперта.
              </p>
            </article>
          </SwiperSlide>
          <SwiperSlide className="form-swiper-slide-two">
            <article className="format-text">
              <p className="format-text__subtitle" data-swiper-parallax="-300">
                Индивидуальная программа, проверка техники по видео, гибкий
                график и регулярная корректировка плана. Идеально для тех, кто
                ценит время без потери качества.
              </p>
              <ul className="format-list" data-swiper-parallax="-200">
                <li className="format-list__item">
                  <span className="format-list__item__span">Чат 24/7</span> — вы
                  можете задавать вопросы, уточнять детали или просить срочную
                  корректировку (например, если травмировали плечо).
                </li>
                <li className="format-list__item">
                  <span className="format-list__item__span">
                    Еженедельные отчеты
                  </span>{" "}
                  — тренер анализирует ваши результаты и при необходимости
                  меняет нагрузку.
                </li>
                <li className="format-list__item">
                  <span className="format-list__item__span">
                    Дополнительные материалы
                  </span>{" "}
                  — готовая база упражнений, чек-листы питания, советы по
                  восстановлению.
                </li>
              </ul>
              <div
                className="format-text__title title-slide-two"
                data-swiper-parallax="-100"
              >
                <div className="format-text__title__string">
                  <h3 className="format-text__title__string__one">
                    Онлайн-коучинг: свобода и прогресс
                  </h3>
                  <p className="format-text__title__string__two">
                    Тренируйся в любом месте с поддержкой тренера
                  </p>
                </div>
                <img src={format_icon_2} alt="смартфон" />
              </div>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Format;