import React from "react";

function Card({ image, make }) {
  return (
    <div className="card">
      <img src={image} alt="car" />
      <p>{make}</p>
    </div>
  );
}

export default Card;
