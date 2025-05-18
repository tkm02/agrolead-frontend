import React from "react";
import "../Home/Home.css";
import "./Cooperative.css";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import CardsCooperative from "../../components/CardsCooperative/CardsCooperative";
import Footer from "../../components/Footer/Footer";
import coop1 from "../../media/cacao.jpg";

const Cooperative = () => {
  // Données des coopératives ivoiriennes
  const featuredCooperatives = [
    {
      id: 1,
      name: "Coopérative Café-Cacao de Yamoussoukro",
      location: "Yamoussoukro",
      description: "Producteurs de cacao et café de qualité premium.",
      members: 320,
      image: coop1 // Remplacez par votre image
    },
    {
      id: 2,
      name: "Coopérative Agricole du Bandama",
      location: "Bouaké",
      description: "Spécialisée dans la production d'anacarde et de coton.",
      members: 180,
      image: coop1
    }
  ];

  const allCooperatives = [
    {
      id: 3,
      name: "Union des Producteurs de Banane",
      location: "Abidjan",
      description: "Exportation de bananes plantains vers la sous-région.",
      members: 210
    },
    {
      id: 4,
      name: "Coopérative des Femmes Productrices d'Attiéké",
      location: "Grand-Bassam",
      description: "Transformation artisanale de manioc en attiéké.",
      members: 150
    },
    {
      id: 5,
      name: "Coopérative Agricole du District",
      location: "Abidjan",
      description: "Culture de tomates et d'oignons.",
      members: 90
    }
  ];

  const benefits = [
    "Accès à des marchés plus larges",
    "Formation technique agricole",
    "Achat groupé d'intrants à prix réduits",
    "Accès à du matériel agricole moderne",
    "Meilleur pouvoir de négociation"
  ];

  return (
    <div className="home-container">
      <Nav />
      
      <div className="cooperative-section">
        <h2>
          Nos <span>Coopératives</span> Partenaires en Côte d'Ivoire
        </h2>
        
        <div className="coop-intro">
          <p>
            Découvrez le réseau des coopératives agricoles ivoiriennes qui œuvrent 
            pour le développement de l'agriculture locale et l'amélioration des 
            conditions de vie des producteurs.
          </p>
        </div>
        
        <div className="coop-highlights">
          <h3>Coopératives en vedette</h3>
          <div className="coop-card-container">
            {featuredCooperatives.map((coop) => (
              <div key={coop.id} className="coop-highlight-card">
                <img src={coop.image} alt={coop.name} />
                <h4>{coop.name}</h4>
                <p className="location">{coop.location}</p>
                <p>{coop.description}</p>
                <p className="members">{coop.members} membres</p>
                <button className="contact-btn">Contacter</button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="coop-benefits">
          <h3>Avantages de rejoindre une coopérative</h3>
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        
        <div className="coop-list">
          <h3>Toutes nos coopératives partenaires</h3>
          <table className="coop-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Localisation</th>
                <th>Spécialité</th>
                <th>Membres</th>
              </tr>
            </thead>
            <tbody>
              {allCooperatives.map((coop) => (
                <tr key={coop.id}>
                  <td>{coop.name}</td>
                  <td>{coop.location}</td>
                  <td>{coop.description}</td>
                  <td>{coop.members}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="coop-map-section">
          <h3>Carte des coopératives</h3>
          <div className="map-placeholder">
            {/* Ici vous intégrerez une carte interactive avec les localisations */}
            <p>Carte interactive des coopératives en Côte d'Ivoire</p>
          </div>
        </div>
        
        <div className="coop-cta">
          <h3>Vous représentez une coopérative ?</h3>
          <p>Rejoignez notre réseau pour bénéficier de plus de visibilité</p>
          <button className="join-btn">Devenir partenaire</button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cooperative;