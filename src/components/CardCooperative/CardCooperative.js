import React from "react";
import { Link } from "react-router-dom";

const CardCooperative = ({ image, name, location, rating }) => {
  return (
    <div className="card-cooperative-info">
      <img src={image} alt={`Image de ${name}`} />
      <h3>{name}</h3>
      <div>
        <h4>{location}</h4>
        <div>
          {Array.from({ length: rating }, (_, index) => (
            <i key={index} className="fa-solid fa-star"></i>
          ))}
        </div>
      </div>
      <div>
        <Link to="#">Voir+</Link>
      </div>
    </div>
  );
};

export default CardCooperative;