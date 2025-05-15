import React from "react";
import CardCooperative from "../CardCooperative/CardCooperative";
import coop2 from "../../media/coop.png";

const PlusInfo = () => {
    const cooperatives = [
        {
          image: coop2,
          name: "Cooperative 1",
          location: "Position géographique 1",
          rating: 4,
        },
      ];
  return (
    <div
      style={{
        width: "100%",
        margin: "10px 0",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
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

export default PlusInfo;
