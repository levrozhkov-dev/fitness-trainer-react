import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope, faDumbbell, faTimes, faFire, } from "@fortawesome/free-solid-svg-icons";
import "./FitnessForm.css";

const FitnessForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "muscle",
    format: "gym",
  });
  const [errors, setErrors] = useState({
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "phone") {
      validatePhone(value);
    }
  };

  const validatePhone = (phone) => {
    const regex = /^(\+7|8)[\d]{10}$/;
    if (!regex.test(phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Введите корректный номер телефона",
      }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) return;

    console.log("Форма отправлена:", formData);
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      goal: "muscle",
      format: "gym",
    });
  };

  return (
    <div className="fitness-form-block" id="form">
      <div className="fitness-form-block__main">
        <div className="form-header">
          <FontAwesomeIcon icon={faDumbbell} className="header-icon" />
          <h2>Персональная тренировка</h2>
          <p>
            Оставьте заявку и я свяжусь с вами для составления индивидуальной
            программы
          </p>
        </div>
        <form onSubmit={handleSubmit} className="fitness-form">
          <div className="form-group">
            <label htmlFor="name">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              Имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Ваше имя"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              <FontAwesomeIcon icon={faPhone} className="input-icon" />
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={errors.phone ? "error" : ""}
              placeholder="+7 (999) 123-45-67"
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="goal">Цель тренировок</label>
            <select
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              required
            >
              <option value="muscle">Набор массы</option>
              <option value="cardio">Кардио тренировки</option>
              <option value="weight-loss">Похудение</option>
              <option value="fitness">Фитнес (реабилитация)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="format">Формат занятий</label>
            <select
              id="format"
              name="format"
              value={formData.format}
              onChange={handleChange}
              required
            >
              <option value="gym">В зале</option>
              <option value="online">Онлайн-сопровождение</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">
            Записаться
          </button>
        </form>
      </div>
      {isSubmitted && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal} className="close-modal">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="modal-icon success">
              <FontAwesomeIcon icon={faFire} />
            </div>
            <h4>Заявка отправлена!</h4>
            <p>Я свяжусь с вами в течение 24 часов для уточнения деталей</p>
            <button onClick={closeModal} className="modal-close-btn">
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FitnessForm;