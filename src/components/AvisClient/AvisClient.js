import React from 'react';
import coop2 from "../../media/coop.png";
import CardCooperative from '../CardCooperative/CardCooperative';

const AvisClient = () => {
    const cooperatives = [
        {
          image: coop2,
          name: "Cooperative 1",
          location: "Position géographique 1",
          rating: 4,
        },
      ];
    return (
        <div>
            <div>
            AVIS CLIENT

            </div>
            
            <div>
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
        </div>
    );
}

export default AvisClient;
