import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ image, name, price, oldPrice, rating, classStyle, id }) => {
  return (
    <div className={`product-card ${classStyle}`}>
      <div className="product-card__image-container">
        <img src={image} alt={name} className="product-card__image" />
        <div className="product-card__actions">
          <Link className="product-card__action-btn" to={`/ecom/detailProduits/description/${id}`}>
            <i className="fa-regular fa-eye"></i>
          </Link>
          <button className="product-card__action-btn">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>

      <div className="product-card__details">
        <h3 className="product-card__name">{name}</h3>
        
        <div className="product-card__rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className={`product-card__star ${index < rating ? 'active' : ''}`}>
              ★
            </span>
          ))}
        </div>
        
        <div className="product-card__price-container">
          <span className="product-card__price">XOF {price}/Kg</span>
          {oldPrice > 0 && <span className="product-card__old-price">XOF {oldPrice}/Kg</span>}
        </div>
        
        <button className="product-card__cart-btn">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>Ajouter au panier</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;