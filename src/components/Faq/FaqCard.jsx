import React from "react";

function FaqCard({ index, onQuestionClick, isExpanded, question, answer }) {
  return (
    <div>
      <div className="faq-question" onClick={() => onQuestionClick(index)}>
        <span className={`plus-sign ${isExpanded ? "none" : "show"}`}>
          &#43;
        </span>
        <span className={`minus-sign ${isExpanded ? "active" : ""}`}>
          &#8722;
        </span>
        <p>{question}</p>
      </div>
      <div className={`faq-answer ${isExpanded ? "expanded" : ""}`}>
        {answer}
      </div>
    </div>
  );
}

export default FaqCard;
