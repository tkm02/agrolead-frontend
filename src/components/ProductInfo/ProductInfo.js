import React, { useState } from "react";
import "./ProductInfo.css";
import { NavLink } from "react-router-dom";

const ProductInfo = ({ oneProduct }) => {
  const [quantity, setQuantity] = useState(1); // État pour gérer la quantité
  const [cart, setCart] = useState([]); // État pour gérer les produits dans le panier

  const handleAddToCart = () => {
    const productToAdd = {
      ...oneProduct,
      quantity,
    };
    setCart((prevCart) => [...prevCart, productToAdd]); // Ajoute le produit au panier
    alert(`${oneProduct.name} a été ajouté au panier avec une quantité de ${quantity}.`);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="droite">
      <div className="ligne1">
        <h2>{oneProduct.name}</h2>
        <div className="stock">{oneProduct.stock}</div>
      </div>
      <div className="étoile">
        {Array.from({ length: oneProduct.rating }).map((_, index) => (
          <span key={index} className="star">
            ★
          </span>
        ))}
        {oneProduct.avis} avis
      </div>
      <div className="prix">
        <p>XOF {oneProduct.prixUnitaire}/kg</p>
      </div>
      <div className="bar1"> </div>
      <div className="ligne2">
        <h3>Partager avec:</h3>
        <div className="social-container">
          <i className="fa-brands fa-facebook-f"></i>
        </div>
        <div className="social-container">
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
        <div className="social-container">
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <p className="txt1">{oneProduct.description}</p>
      <div className="bar2"> </div>
      <div className="ligne3">
        <div className="ajouter">
          <i className="fa-solid fa-circle-plus" onClick={increaseQuantity}></i>
          <p>{quantity}</p>
          <i className="fa-solid fa-circle-minus" onClick={decreaseQuantity}></i>
        </div>
        <button className="panier" onClick={handleAddToCart}>
          <p>Ajouter dans le panier</p>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
        <div className="social-container">
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
      <div className="bar3"> </div>
      <div className="ligne4">
        <h4>Catégories:</h4>
        <p>{oneProduct.typeProduit}</p>
      </div>
    </div>
  );
};

export default ProductInfo;