import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "./Message.css";
import message_icon from "../../assets/message_icon.svg";
import bazarin_profile_picture from "../../assets/bazarin_profile_picture.png";

const Message = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  return (
    <section className="notification-block">
      <div className="notification-block__main">
        <div className="notification-block__main__up">
          <div className="notification-block__left">
            <img
              className="bazarin-profile-picture"
              src={bazarin_profile_picture}
              alt="фотография профиля тренера"
            />
            <p>Андрей Базарин</p>
          </div>
          <div className="notification-block__right">
            <motion.div
              className="message-block"
              whileInView={() => setStartAnimation(true)}
              viewport={{ once: true, margin: "-15% 0px" }}
            >
              {startAnimation && (
                <TypeAnimation
                  className="message"
                  sequence={[
                    "Все еще мечтаешь о результате? Действуй! Я покажу как.",
                  ]}
                  speed={20}
                  wrapper="span"
                  cursor={false}
                />
              )}
            </motion.div>
          </div>
        </div>
        <div className="notification-proposal" href="">
          <div className="notification-proposal__button">
            Хочу сделать первый шаг
          </div>
          <a href="#form">
            <img src={message_icon} draggable="false" alt="отправка сообщения" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Message;