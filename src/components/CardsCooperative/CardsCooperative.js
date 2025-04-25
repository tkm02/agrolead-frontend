import React from "react";
import "./CardsCooperative.css";
// import coop1 from "../../medias/NoPath - Copie (5).png";
import coop2 from "../../media/coop.png";
import coop3 from "../../media/NoPath - Copie (2).png";
import coop4 from "../../media/NoPath - Copie.png";
import { Link } from "react-router-dom";
import CardCooperative from "../CardCooperative/CardCooperative";
const CardsCooperative = () => {
    const cooperatives = [
      {
        image: coop2,
        name: "Cooperative 1",
        location: "Position géographique 1",
        rating: 4,
      },
      {
        image: coop3,
        name: "Cooperative 2",
        location: "Position géographique 2",
        rating: 4,
      },
      {
        image: coop4,
        name: "Cooperative 3",
        location: "Position géographique 3",
        rating: 4,
      },
    ];
  
    return (
      <div className="container-cards-cooperatives">
        {cooperatives.map((coop, index) => (
          <CardCooperative
            key={index}
            image={coop.image}
            name={coop.name}
            location={coop.location}
            rating={coop.rating}
          />
        ))}
      </div>
    );
  };
  
  export default CardsCooperative;