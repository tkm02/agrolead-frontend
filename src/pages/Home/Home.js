import React from "react";
import "./Home.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Slider from "../../components/Slider/Slider";
import CardsCooperative from "../../components/CardsCooperative/CardsCooperative";
import CategorieProduits from "../../components/CategorieProduits/CategorieProduits";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";

// Importation des images de produits
import bgImage from "../../media/lush-green-farmland-being-surveyed-by-drone-precision-agriculture.jpg";
import img1 from "../../media/pomme.png";
import img2 from "../../media/orange.png";
import img3 from "../../media/aubergine.png";
import img4 from "../../media/maïs.png";
import img5 from "../../media/pomme-de-terre.png";
import img6 from "../../media/salad.png";
import img7 from "../../media/tomates.png";

const Home = () => {
  // Définition des props pour le Slider
  const welcomeText = {
    title: "Bienvenue sur",
    title2: "Notre plateforme",
    title3: "AgriTech",
    title4: "Découvrez les produits agricoles de qualité près de chez vous"
  };
  
  const buttonProps = {
    buttonText: "Découvrir",
    buttonLink: "/products"
  };
  
  // L'URL de l'image d'arrière-plan formatée pour CSS
  const backgroundImageStyle = `url(${bgImage})`;
  
  // Données pour les produits
  const produits = [
    {
      id: 1,
      name: "Pommes vertes",
      image: img1,
      price: 1499,
      oldPrice: 0,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Malte indienne fraîche",
      image: img2,
      price: 2000,
      oldPrice: 0,
      rating: 4.2,
    },
    {
      id: 3,
      name: "Aubergine",
      image: img3,
      price: 1200,
      oldPrice: 0,
      rating: 4.0,
    },
    {
      id: 4,
      name: "Maïs",
      image: img4,
      price: 19.99,
      oldPrice: 0,
      rating: 4.5,
    },
    {
      id: 5,
      name: "Patates Douces",
      image: img5,
      price: 19.99,
      oldPrice: 0,
      rating: 4.5,
    },
    {
      id: 6,
      name: "Laitue verte",
      image: img6,
      price: 24.99,
      oldPrice: 0,
      rating: 4.2,
    },
  ];

  return (
    <div className="home-container">
      <Nav />
      <Slider 
        welcomeText={welcomeText}
        backgroundImage={backgroundImageStyle}
        imageUrl={img7}
        cropTitle="Agriculture de qualité"
        buttonProps={buttonProps}
      />
      
      <div className="cooperative-section">
        <h2>
          Les coopératives partenaire à{" "}
          <span>AgriTech</span>
        </h2>
        <CardsCooperative />
      </div>
      
      <div className="categories-section">
        <h2>
          Nos produits par <span>categorie</span>
        </h2>
        <CategorieProduits />
      </div>
      
      <div className="home">
        <h2>
          Quelques <span className="Tech">Produits</span>
        </h2>
        <div className="card-container">
          {produits.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </div>
        <div className="voir-tout-produits">
          <Link to="/products">
            Voir tous les produits
          </Link>
        </div>
      </div>
      
      <Services />
      <Footer />
    </div>
  );
};

export default Home;