import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CooperativeDetail.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import defaultCoopImage from "../../media/coop.png"; // Import optimisé

const CooperativeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Données temporaires - devrait être remplacé par un appel API
  const cooperatives = [
    {
      id: 1,
      name: "Coopérative Agricole du Nord",
      image: defaultCoopImage, // Utilisation de l'import
      location: "Région Nord",
      rating: 4.5,
      description: "Spécialisée dans les cultures céréalières depuis 1985...",
      products: ["Blé", "Maïs", "Orge"],
      contact: "contact@coop-nord.agro",
      members: 45,
      foundationYear: 1985,
      certifications: ["Bio", "Commerce Equitable"]
    },
    // Ajouter d'autres coopératives...
  ];

  const cooperative = cooperatives.find(coop => coop.id === parseInt(id));

  if (!cooperative) {
    return (
      <div className="not-found">
        <Nav />
        <div className="error-container">
          <h2>Coopérative non trouvée</h2>
          <button onClick={() => navigate("/cooperatives")} className="back-button">
            Retour aux coopératives
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="cooperative-detail">
      <Nav />
      
      <div className="coop-detail-container">
        <div className="coop-header">
          <img 
            src={cooperative.image || defaultCoopImage} 
            alt={cooperative.name} 
            onError={(e) => {
              e.target.src = defaultCoopImage; // Fallback si image non chargée
            }}
          />
          <div className="header-text">
            <h1>{cooperative.name}</h1>
            <p className="location">
              <i className="fas fa-map-marker-alt"></i> {cooperative.location}
            </p>
            <div className="rating">
              <span className="stars">{"★".repeat(Math.floor(cooperative.rating))}</span>
              <span>({cooperative.rating}/5)</span>
            </div>
          </div>
        </div>

        <div className="coop-content">
          <section className="about-section">
            <h2>À propos</h2>
            <p>{cooperative.description}</p>
          </section>

          <section className="products-section">
            <h2>Produits proposés</h2>
            <ul className="products-list">
              {cooperative.products.map((product, index) => (
                <li key={index}>
                  <i className="fas fa-seedling"></i> {product}
                </li>
              ))}
            </ul>
          </section>

          <section className="info-section">
            <h2>Informations pratiques</h2>
            <div className="info-grid">
              <div>
                <h3>Contact</h3>
                <p>{cooperative.contact}</p>
              </div>
              <div>
                <h3>Membres</h3>
                <p>{cooperative.members} agriculteurs</p>
              </div>
              <div>
                <h3>Fondation</h3>
                <p>{cooperative.foundationYear}</p>
              </div>
              {cooperative.certifications && (
                <div>
                  <h3>Certifications</h3>
                  <ul>
                    {cooperative.certifications.map((cert, idx) => (
                      <li key={idx}>{cert}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CooperativeDetail;