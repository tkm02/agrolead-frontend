import React from "react";
import "./CategorieProduits.css";

const CategorieProduits = () => {
  const categoriesListe = [
    {
      nom: "Fruits",
      image:
        "https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      nom: "Légumes",
      image:
        "https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      nom: "Céréales",
      image:
        "https://images.pexels.com/photos/1509607/pexels-photo-1509607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      nom: "Légumineuses",
      image:
        "https://media.istockphoto.com/id/637856490/photo/various-legumes.jpg?s=2048x2048&w=is&k=20&c=DCYM-aIZ536zbhyySgKvYswNeYJP10PR3uVPdUJTdvc=",
    },
  ];
  return (
    <div className="categorie-produits-agrolead">
      {categoriesListe.map((item) => (
        <div className="categorie-cards">
          <div className="nom-categorie-produits">{item.nom}</div>
          <img
            src={item.image}
            alt="img-categorie"
          />
        </div>
      ))}
    </div>
  );
};

export default CategorieProduits;
