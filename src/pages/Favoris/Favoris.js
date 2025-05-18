import React from "react";
import "./Favoris.css";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import { useFavorites } from "../../context/FavoritesContext";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Favoris = () => {
  // Utiliser le contexte des favoris
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  // Fonction pour gérer la suppression
  const handleRemoveItem = (productId) => {
    removeFromFavorites(productId);
  };

  // Fonction pour ajouter au panier
  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <>
      <Nav />
      <h2>Mes Favoris</h2>
      <div className="section-panier">
        <div className="table-container">
          {favorites.length > 0 ? (
            <table className="styled-table">
              <thead>
                <tr>
                  <th>PRODUITS</th>
                  <th>PRIX</th>
                  <th>STATUS</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {favorites.map((product) => (
                  <tr key={product.id}>
                    <td className="product-cell">
                      <div className="product-info">
                        <img src={product.image} alt={product.name} />
                        <span>{product.name}</span>
                      </div>
                    </td>
                    <td>XOF {product.price.toLocaleString("fr-FR")}/kg</td>
                    <td>
                      <h5 className="stock">En stock</h5>
                    </td>
                    <td>
                      <button 
                        className="update-button"
                        onClick={() => handleAddToCart(product)}
                      >
                        Ajouter au panier
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleRemoveItem(product.id)}
                        className="btn-remove"
                      >
                        <i className="fa fa-xmark"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div style={{ padding: "30px", textAlign: "center" }}>
              <h3>Vous n'avez pas encore de favoris</h3>
              <p>Parcourez nos produits et ajoutez-les à vos favoris</p>
              <div style={{ marginTop: "20px" }}>
                <Link to="/products" className="update-button">
                  Découvrir nos produits
                </Link>
              </div>
            </div>
          )}
          <div className="div-update-btn">
            Partager avec :{" "}
            <div className="socials">
              <div className="social">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="social">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="social">
                <i className="fa-brands fa-pinterest"></i>
              </div>
              <div className="social">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favoris;