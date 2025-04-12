import { useState } from "react";
import { Collapse } from "react-collapse";
import { FAQData } from "../../data/FAQData.js";
import "./FAQ.css";

const FAQ = () => {
  return (
    <section className="faq-block" id="faq">
      <div className="faq-block__main">
        <h2 className="faq-title">Частые вопросы и ответы</h2>
        <div className="space-y-2">
          {FAQData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "active" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="faq-question">
        <span>{question}</span>
        <div className="faq-toggle" />
      </button>

      <Collapse isOpened={isOpen}>
        <div className="faq-answer">{answer}</div>
      </Collapse>
    </div>
  );
};

export default FAQ;