import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { pricingGymData, pricingOnlineData } from "../../data/pricingData.js";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing-block" id="pricing">
      <div className="pricing-block__main">
        <h2>Стартуйте к своей цели – гибкие тарифы</h2>
        <div className="pricing-cards pricing-gym">
          <h3>Тарифы на тренировки в зале</h3>
          <div className="plans" id="plans">
            {pricingGymData.map((plan, i) => (
              <div className="plan plan-gym" key={i}>
                <FontAwesomeIcon
                  icon={plan.icon}
                  className="plan-icon pulse-animation"
                />
                <span className="plan-name">{plan.name}</span>
                <span className="plan-price">{plan.price} &#8381;</span>
                <div className="features">
                  {plan.features.map((feature, i) => (
                    <div className="feature" key={i}>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <span key={i}>{feature}</span>
                    </div>
                  ))}
                </div>
                <a href="#form">
                  <button className="pricing-button">Записаться</button>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="pricing-cards pricing-online">
          <h3>Тарифы на онлайн-сопровождение</h3>
          <div className="plans" id="plans">
            {pricingOnlineData.map((plan, i) => (
              <div className="plan plan-online" key={i}>
                <FontAwesomeIcon
                  icon={plan.icon}
                  className="plan-icon pulse-animation"
                />
                <span className="plan-name">{plan.name}</span>
                <span className="plan-price">{plan.price}</span>
                <div className="features">
                  {plan.features.map((feature, i) => (
                    <div className="feature" key={i}>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <span key={i}>{feature}</span>
                    </div>
                  ))}
                </div>
                <a href="#form">
                  <button className="pricing-button">Записаться</button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
