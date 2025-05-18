import React from "react";
import "./CardsCooperative.css";
import coop1 from "../../media/coop.png";
import coop2 from "../../media/NoPath - Copie (2).png";
import coop3 from "../../media/NoPath - Copie.png";
import coop4 from "../../media/cacao.jpg";
import { Link } from "react-router-dom";

const CardsCooperative = () => {
  const cooperatives = [
    {
      id: 1,
      image: coop1,
      name: "Coop. Céréalière Nord",
      location: "Nord",
      products: ["Blé", "Maïs", "Orge"],
      specialty: "Céréales bio",
      memberCount: 42,
      since: 2015
    },
    {
      id: 2,
      image: coop2,
      name: "Verger Bio Sud",
      location: "Sud",
      products: ["Pommes", "Poires"],
      specialty: "Fruits bio",
      memberCount: 28,
      since: 2018
    },
    {
      id: 3,
      image: coop3,
      name: "Maraîchers Est",
      location: "Est",
      products: ["Tomates", "Salades"],
      specialty: "Légumes",
      memberCount: 35,
      since: 2012
    },
    {
      id: 4,
      image: coop4,
      name: "Producteurs de Cacao",
      location: "Ouest",
      products: ["Cacao", "Café"],
      specialty: "Cacao premium",
      memberCount: 56,
      since: 2010
    }
  ];

  return (
    <div className="coop-container">
      <h2 className="section-title">Nos Coopératives</h2>
      <p className="section-subtitle">Producteurs locaux de qualité</p>
      
      <div className="coop-grid">
        {cooperatives.map((coop) => (
          <div key={coop.id} className="coop-card">
            <Link to={`/cooperative/${coop.id}`} className="coop-link">
              <div className="coop-image-container">
                <img src={coop.image} alt={coop.name} className="coop-image" />
                <div className="coop-badge">{coop.specialty}</div>
              </div>
              
              <div className="coop-info">
                <h3>{coop.name}</h3>
                <p className="coop-location">
                  <i className="fas fa-map-marker-alt"></i> {coop.location}
                </p>
                
                <div className="coop-products">
                  <h4>Produits :</h4>
                  <div className="product-tags">
                    {coop.products.slice(0, 3).map((product, index) => (
                      <span key={index} className="product-tag">{product}</span>
                    ))}
                  </div>
                </div>
                
                <div className="coop-meta">
                  <span><i className="fas fa-users"></i> {coop.memberCount}m</span>
                  <span><i className="fas fa-calendar-alt"></i> {coop.since}</span>
                </div>
              </div>
            </Link>
            
            <Link to={`/cooperative/${coop.id}`} className="coop-action-btn">
              <i className="fas fa-shopping-basket" style={{marginRight: '8px'}}></i>
              Voir produits
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsCooperative;