import React from 'react';
import FaqCard from './FaqCard';
import '../home.js';

function FaqComponent() {
  return (
    <div>
      <section className="faq-section" data-aos="zoom-in-down" data-aos-easing="linear"
    data-aos-duration="1000">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
        <FaqCard/>
        <FaqCard/>
        <FaqCard/>
        <FaqCard/>
        <FaqCard/>
        <FaqCard/>
        <FaqCard/>
        <FaqCard/>
        </div>
        </section>
    </div>
  )
}

export default FaqComponent