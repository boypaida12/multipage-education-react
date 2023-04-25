import React, { useState } from "react";
import FaqCard from "./FaqCard";

function FaqComponent() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleQuestionClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div>
      <section
        className="faq-section"
        data-aos="zoom-in-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <FaqCard
            index={0}
            isExpanded={expandedIndex === 0}
            onQuestionClick={handleQuestionClick}
            question="Lorem ipsum dolor sit amet?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil ducimus autem eaque sapiente aspernatur dolorem fugit id aut iusto."
          />
          <FaqCard
            index={1}
            isExpanded={expandedIndex === 1}
            onQuestionClick={handleQuestionClick}
            question="Lorem ipsum dolor sit amet?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil ducimus autem eaque sapiente aspernatur dolorem fugit id aut iusto."
          />
          <FaqCard
            index={2}
            isExpanded={expandedIndex === 2}
            onQuestionClick={handleQuestionClick}
            question="Lorem ipsum dolor sit amet?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil ducimus autem eaque sapiente aspernatur dolorem fugit id aut iusto."
          />
          <FaqCard
            index={3}
            isExpanded={expandedIndex === 3}
            onQuestionClick={handleQuestionClick}
            question="Lorem ipsum dolor sit amet?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil ducimus autem eaque sapiente aspernatur dolorem fugit id aut iusto."
          />
          <FaqCard
            index={4}
            isExpanded={expandedIndex === 4}
            onQuestionClick={handleQuestionClick}
            question="Lorem ipsum dolor sit amet?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil ducimus autem eaque sapiente aspernatur dolorem fugit id aut iusto."
          />
          <FaqCard
            index={5}
            isExpanded={expandedIndex === 5}
            onQuestionClick={handleQuestionClick}
            question="Lorem ipsum dolor sit amet?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil ducimus autem eaque sapiente aspernatur dolorem fugit id aut iusto."
          />
          <FaqCard
            index={6}
            isExpanded={expandedIndex === 6}
            onQuestionClick={handleQuestionClick}
            question="Lorem ipsum dolor sit amet?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil ducimus autem eaque sapiente aspernatur dolorem fugit id aut iusto."
          />
          <FaqCard
            index={7}
            isExpanded={expandedIndex === 7}
            onQuestionClick={handleQuestionClick}
            question="Lorem ipsum dolor sit amet?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil ducimus autem eaque sapiente aspernatur dolorem fugit id aut iusto."
          />
        </div>
      </section>
    </div>
  );
}

export default FaqComponent;
