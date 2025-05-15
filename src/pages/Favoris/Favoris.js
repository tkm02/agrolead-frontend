import React, { useState } from "react";
import "./Favoris.css";
import Footer from "../../components/Footer/Footer";
import img from '../../media/chou.png'
import Nav from "../../components/Nav/Nav";
const Favoris = () => {
  const initialFavorites = [
    {
      produit: "Produit 1",
      prix: 1500,
      statusStock: "En stock",
      status: "stock",
      image: img,
    },
    {
      produit: "Produit 2",
      prix: 2000,
      statusStock: "En stock",
      status: "stock",
      image: img,
    },
    {
      produit: "Produit 3",
      prix: 2000,
      statusStock: "Rupture de stock",
      status: "nostock",
      image: img,
    },
  ];

  const [favorites, setFavorites] = useState(initialFavorites);


  const handleRemoveItem = (index) => {
    const newProducts = [...initialFavorites];
    newProducts.splice(index, 1);
    setFavorites(newProducts);
  };

  return (
    <>
    <Nav />
      <div className="section-panier">
        <div className="table-container">
        <table className="styled-table">
  <thead>
    <tr>
      <th>PRODUITS</th>
      <th>PRIX</th>
      <th>STATUS EN STOCK</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {favorites.map((product, index) => (
      <tr key={index}>
        <td className="product-cell">
          <div className="product-info">
            <img src={product.image} alt={product.produit} />
            <span>{product.produit}</span>
          </div>
        </td>
        <td>XOF {product.prix}/kg</td>
        <td>
          <h5 className={product.status}>{product.statusStock}</h5>
        </td>
        <td>
          <button className="update-button">Ajouter au panier</button>
        </td>
        <td>
          <button
            onClick={() => handleRemoveItem(index)}
            className="btn-remove"
          >
            <i className="fa fa-xmark"></i>
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
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
