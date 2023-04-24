import React from 'react'

function Card({imgSrc, title}) {
  return (
    <div>
        <div className="course-card" data-aos="flip-left" data-aos-easing="linear"
           data-aos-duration="1000">
                <img src={imgSrc} alt="icon-svg" width="180"height="180"/>
                <h4>{title}</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, quam. Voluptatibus, voluptates dolorem ipsa nobis.
                </p>
                <button className="button">Learn More</button>
            </div>
    </div>
  )
}

export default Card