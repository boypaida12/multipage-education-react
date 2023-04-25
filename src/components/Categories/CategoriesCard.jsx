import React from "react";

function CategoriesCard({imgSrc, title, description, width, height, altText}) {
  return (
    <div>
      <div className="card">
        <img src={imgSrc} alt={altText} width={width} height={height} />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CategoriesCard;
