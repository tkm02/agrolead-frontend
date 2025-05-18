import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  // 1. Hooks appelés en premier (règle des hooks)
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isInFavorites } = useFavorites();

  // 2. Si produit absent, afficher un loader ou message
  if (!product) {
    return (
      <div className="product-card product-card--loading">
        <div className="product-card__skeleton"></div>
      </div>
    );
  }

  // 3. Extraire les propriétés avec valeurs par défaut
  const {
    id = "",
    name = "Produit non disponible",
    image = "/default-product.jpg",
    price = 0,
    oldPrice = 0,
    rating = 0,
  } = product;

  // 4. Vérifier si le produit est dans les favoris
  const isFavorite = isInFavorites(id);

  // 5. Fonction pour ajouter au panier
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({
      id,
      name,
      price,
      image,
      quantity: 1,
    });
  };

  // 6. Fonction pour gérer les favoris
  const handleToggleFavorite = (e) => {
    e.preventDefault();
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites({
        id,
        name,
        price,
        image,
        oldPrice,
        rating
      });
    }
  };

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img
          src={image}
          alt={name}
          className="product-card__image"
          onError={(e) => {
            e.target.src = "/default-product.jpg";
          }}
        />
        <div className="product-card__actions">
          <Link
            className="product-card__action-btn"
            to={`/detailProduits/${id}`}
            aria-label="Voir les détails"
          >
            <i className="fa-regular fa-eye"></i>
          </Link>
          <button
            className="product-card__action-btn"
            aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
            type="button"
            onClick={handleToggleFavorite}
          >
            <i className={`${isFavorite ? "fa-solid" : "fa-regular"} fa-heart`}></i>
          </button>
        </div>
      </div>

      <div className="product-card__details">
        <h3 className="product-card__name">{name}</h3>

        <div className="product-card__rating" aria-label={`Note: ${rating} sur 5`}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`product-card__star ${
                star <= Math.round(rating) ? "active" : ""
              }`}
            >
              ★
            </span>
          ))}
        </div>

        <div className="product-card__price-container">
          <span className="product-card__price">
            {price.toLocaleString("fr-FR")} XOF/Kg
          </span>
          {oldPrice > 0 && (
            <span className="product-card__old-price">
              {oldPrice.toLocaleString("fr-FR")} XOF/Kg
            </span>
          )}
        </div>

        <button
          className="product-card__cart-btn"
          onClick={handleAddToCart}
          disabled={!id}
          type="button"
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span>Ajouter au panier</span>
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    rating: PropTypes.number,
  }),
};

ProductCard.defaultProps = {
  product: null,
};

export default ProductCard;