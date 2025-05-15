import React from "react";
import CardCooperative from "../CardCooperative/CardCooperative";
// import CardsCooperative from "../CardsCooperatives/CardsCooperative";
// import CoopProduits from "../CoopProduits/CoopProduits";
import coop2 from "../../media/coop.png";

const Description = () => {
    const cooperatives = [
        {
          image: coop2,
          name: "Cooperative 1",
          location: "Position géographique 1",
          rating: 4,
        },
      ];
  return (
    <div style={{width:"100%",margin:"10px 0",textAlign:"center",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <p style={{width:"50%",textAlign:"start"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus
        vitae quisquam amet nobis fugit commodi repellat, sunt, velit porro
        consequuntur aspernatur impedit dolore distinctio ducimus itaque
        quibusdam labore eaque placeat rem quia harum optio voluptatibus.
        Laboriosam id reprehenderit eos, praesentium quidem omnis amet,
        assumenda voluptatibus facere fuga beatae officiis ullam ducimus
        accusantium rerum sequi tenetur iste distinctio saepe ab quasi? Tempora
        quasi esse qui consequuntur deleniti quos libero obcaecati iste corrupti
        rerum, magnam, iure mollitia? Magnam dolore eaque numquam cupiditate vel
        corporis ad dolorem eius eveniet consequuntur doloribus accusamus in,
        commodi ipsa fuga beatae harum quasi doloremque perspiciatis debitis.
      </p>
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

export default Description;
