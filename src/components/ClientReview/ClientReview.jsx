import { useState } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { motion } from "framer-motion";
import { reviewData } from "../../data/reviewData.js";
import "./ClientReview.css";
import review_arrow from "../../assets/review_arrow.svg";
import review_before from "../../assets/review_before.svg";
import review_next from "../../assets/review_next.svg";
import review_pointer from "../../assets/review_pointer.svg";

const ClientReview = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const rLength = reviewData.length;
  return (
    <section className="review-block" id="review">
      <div className="review-block__main">
        <div className="review-block__main__left">
          <motion.img
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1 }}
            className="review-arrow"
            src={review_arrow}
            alt=""
          />
          <h2 className="review-block__title title">
            От мечты — к реальным изменениям:{" "}
            <span className="title__text-special">Истории моих клиентов</span>
          </h2>
          <motion.article
            className="review__article"
            key={selected}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transition}
          >
            <div className="review__article__full">
              <p className="review__article__title upper-title">
                {reviewData[selected].title}
              </p>
              <blockquote className="review__blockquote">
                <span className="review__blockquote__text">
                  {reviewData[selected].review}
                </span>
                <span className="review__article__title">
                  — {reviewData[selected].name}, {reviewData[selected].age}
                </span>
              </blockquote>
            </div>
          </motion.article>
          <div className="review__button__all">
            <button className="review__button">
              <img
                draggable="false"
                onClick={() => {
                  selected === 0
                    ? setSelected(rLength - 1)
                    : setSelected((prev) => prev - 1);
                }}
                src={review_before}
                alt="стрелка назад"
              />
            </button>
            <button className="review__button">
              <img
                draggable="false"
                onClick={() => {
                  selected === rLength - 1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1);
                }}
                src={review_next}
                alt="стрелка вперед"
              />
            </button>
          </div>
        </div>
        <div className="review-block__main__right">
          <motion.div className="review-right__background1"></motion.div>
          <motion.div
            className="review-right__background2"
            key={selected}
            initial={{ y: 15, x: -15 }}
            animate={{ y: 0, x: 0 }}
            transition={transition}
          ></motion.div>
          <ReactCompareSlider
            className="review-right__img"
            itemOne={
              <ReactCompareSliderImage
                style={{ width: "200px", height: "300px" }}
                src={reviewData[selected].image_before}
                alt="фото до"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                style={{ width: "200px", height: "300px" }}
                src={reviewData[selected].image_after}
                alt="фото после"
              />
            }
            position={50}
            onlyHandleDraggable={true}
          />
          <img className="review_pointer" src={review_pointer} alt=""/>
          <p className="before-after__text">
            <span>До</span>
            <span>После</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;