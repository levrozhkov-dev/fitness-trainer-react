import NumberCounter from "number-counter";
import { Fade } from "react-awesome-reveal";
import "./WelcomeBlock.css";

const WelcomeBlock = () => {
  return (
    <section className="welcome-block" id="welcome-block">
      <div className="welcome-block__trainer above-overlay">
        <div class="overlay"></div>
        <div className="welcome-block__description">
          <h1 className="welcome-block__title">
            <Fade cascade triggerOnce={true}>
              <span className="welcome-block__title-part">Твой тренер,</span>
              <span className="welcome-block__title-part">Твоя программа,</span>
              <span className="welcome-block__title-part">
                Твой <span className="part-special">результат</span>
              </span>
            </Fade>
          </h1>
          <Fade delay={1500} triggerOnce={true}>
            <div className="welcome-block__text">
              <span className="welcome-block__text-part">— Андрей Базарин</span>
              <span>твой фитнес-тренер</span>
            </div>
          </Fade>
          <div className="figures">
            <div>
              <span className="figures-number">
                <NumberCounter end={6} start={4} delay="5" postFix="+" />
              </span>
              <span>лет работы</span>
            </div>
            <div>
              <span className="figures-number">
                <NumberCounter end={90} start={40} delay="5" postFix="+" />
              </span>
              <span>клиентов</span>
            </div>
          </div>
          <div className="welcome-block__button-section">
            <a href="#form">
              <button className="welcome-block__button start-button">
                Записаться
              </button>
            </a>
            <a href="#plans">
              <button className="welcome-block__button about-button">
                Узнать больше
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBlock
