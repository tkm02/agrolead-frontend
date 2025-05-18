import React from "react";
import "./Nav.css"; // Importation du fichier CSS
import { Link, NavLink } from "react-router-dom";
import logoAgroLeadTech from "../../media/ALT_BG_BLANC.png"; // Importation de l'image du logo
import { useCart } from "../../context/CartContext"; // Importez le hook useCart
import { useFavorites } from "../../context/FavoritesContext"; // Importez le hook useFavorites

const Nav = () => {
  // Utilisez les hooks pour obtenir le nombre d'articles dans le panier et les favoris
  const { getCartCount } = useCart();
  const { getFavoritesCount } = useFavorites();
  
  const cartCount = getCartCount();
  const favoritesCount = getFavoritesCount();

  return (
    <header className="nav-header">
      <div className="nav-logo">
        <img src={logoAgroLeadTech} alt="AgroLeadTech Logo" />
      </div>
      <nav className="nav-links">
        <NavLink to="/cooperative" className="nav-item">
          Cooperative
        </NavLink>
        <NavLink to="/products" className="nav-item">
          Produits
        </NavLink>
        <NavLink to="/panier" className="nav-item">
          Panier
        </NavLink>
        <NavLink to="/favoris" className="nav-item">
          Favoris
        </NavLink>
        <NavLink to="/detailcommande/111" className="nav-item">
          Commande
        </NavLink>
      </nav>
      <div className="nav-actions">
        <Link to="/favoris" className="nav-icon">
          {favoritesCount > 0 && <div className="nav-cart-count">{favoritesCount}</div>}
          <i className="fa-solid fa-heart"></i>
        </Link>
        <Link to="/panier" className="nav-icon">
          {cartCount > 0 && <div className="nav-cart-count">{cartCount}</div>}
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <Link to="/dashboard" className="nav-icon">
          <i className="fa-solid fa-user"></i>
        </Link>
      </div>
    </header>
  );
};

export default Nav;