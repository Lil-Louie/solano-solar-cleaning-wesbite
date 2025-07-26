import './FAQsection.css';
import { useState, useRef, useEffect } from 'react';

const faqData = [
  {
    question: "How often should solar panels be cleaned",
    answer:
      "It is recommended to clean solar panels at least twice a year, but this can vary based on your location and the amount of dust or debris they typically collect.",
  },
  {
    question: "Can dirty solar panels really affect their energy output?",
    answer:
      "Yes, dirt and debris on solar panels can reduce their efficiency significantly. Regular cleaning ensures that they operate at optimal performance, which translates into better energy generation.",
  },
  {
    question: "Are your cleaning methods safe for my solar panels?",
    answer:
      "Absolutely, we use gentle yet effective cleaning techniques and a specialized brush designed for use on solar panels. Our process will protect your solar panels while thoroughly removing dirt and grime.",
  },
  {
    question: "How long does a typical solar panel cleaning take?",
    answer:
      "The duration depends on the number of panels and their accessibility. Typically, the cleaning process can take anywhere from 45 minutes to two hours.",
  },
  {
    question: "Do I need to be at home when you provide the cleaning service?",
    answer:
      "While it's not necessary for you to be home, we require access to your property. Arrangements can be made to ensure the service is performed smoothly, whether or not you are present.",
  },
];

export default function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="faq-section">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-grid">
        {faqData.map((item, index) => {
          const isLast = index === faqData.length - 1;
          const isTotalOdd = faqData.length % 2 === 1;

          const row = Math.floor(index / 2) + 1;
          const isFullSpan = isLast && isTotalOdd;
          const columnClass = isFullSpan
            ? "full-span"
            : index % 2 === 0
            ? "left-column"
            : "right-column";

          const isOpen = openIndexes.includes(index);

          return (
<div
  key={index}
  onClick={() => toggle(index)}
  className={`faq-item faq-${index + 1} ${columnClass} ${isOpen ? 'open' : ''}`}
  style={{
    height: isOpen ? "auto" : "3.5rem",
    overflow: "hidden",
    transition: "height 0.3s ease",
  }}
>

              <div className="faq-question">
                <strong>{item.question}</strong>
                <span>{isOpen ? "▲" : "▼"}</span>
              </div>
              <div
                className="faq-answer"
                style={{
                  display: isOpen ? "block" : "none",
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
