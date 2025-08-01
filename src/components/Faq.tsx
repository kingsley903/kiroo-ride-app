import React, { useState } from "react";

const faqs = [
  {
    question: "What is Kiroo and how does it work?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam felis id mauris.",
  },
  {
    question: "Can I use Kiroo without Internet or a smartphone?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam felis id mauris.",
  },
  {
    question: "How does Kiroo ensure rider and driver safety?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam felis id mauris.",
  },
  {
    question: "What are ride modes and how do I choose one?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam felis id mauris.",
  },
  {
    question: "What makes Kiroo different from other ride apps?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam felis id mauris.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section section-padding">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">FAQs</h2>
          <p className="faq-subtitle">
            Your businesses move fast. So should your deliveries.
            <br />
            From market stalls to Instagram stores — Kiroo handles the drop.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div
              className={`faq-item${openIndex === idx ? " open" : ""}`}
              key={idx}
            >
              <button
                className="faq-question"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="faq-number">{idx + 1}</span>

                <span className="faq-question-text">{faq.question}</span>
                <div>
                  <span className="faq-toggle-icon">
                    {openIndex === idx ? (
                      <svg width="18" height="18" viewBox="0 0 18 18">
                        <line
                          x1="4"
                          y1="9"
                          x2="14"
                          y2="9"
                          stroke="#222"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 18 18">
                        <line
                          x1="4"
                          y1="9"
                          x2="14"
                          y2="9"
                          stroke="#222"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <line
                          x1="9"
                          y1="4"
                          x2="9"
                          y2="14"
                          stroke="#222"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                </div>
              </button>
              <div
                className="faq-answer"
                id={`faq-answer-${idx}`}
                style={{
                  maxHeight: openIndex === idx ? "200px" : "0",
                  transition: "max-height 0.4s cubic-bezier(.4,0,.2,1)",
                  overflow: "hidden",
                }}
                aria-hidden={openIndex !== idx}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
