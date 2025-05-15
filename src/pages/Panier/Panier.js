import React, { useEffect, useState } from "react";
import "./Panier.css";
import img from "../../media/chou.png";
import Nav from "../../components/Nav/Nav";
import ResumeCard from "../../components/ResumeCard/ResumeCard";
import Footer from "../../components/Footer/Footer";

const Panier = () => {
  const initialProductData = [
    {
      id: 1,
      name: "Poivron vert biologique",
      price: 1400,
      quantity: 5,
      imageSrc: img,
    },
    {
      id: 2,
      name: "Chou frais local",
      price: 1400,
      quantity: 5,
      imageSrc: img,
    },
  ];

  const [products, setProducts] = useState(initialProductData);
  const [subTotal, setSubTotal] = useState(0);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });
    setSubTotal(total);
  }, [products]);

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 1) return;
    
    const newProducts = [...products];
    newProducts[index].quantity = newQuantity;
    setProducts(newProducts);
  };

  const handleRemoveItem = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  const handleUpdateCart = () => {
    setIsUpdating(true);
    // Simulation d'une mise à jour
    setTimeout(() => {
      setIsUpdating(false);
    }, 1000);
  };

  return (
    <>
      <Nav />
      <div className="page-header">
        <h2>Mon Panier</h2>
      </div>
      <div className="section-panier">
        {products.length > 0 ? (
          <>
            <div className="table-container">
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>PRODUITS</th>
                    <th>PRIX</th>
                    <th>QUANTITÉ</th>
                    <th>TOTAL</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product.id}>
                      <td>
                        <div className="product-info">
                          <img src={product.imageSrc} alt={product.name} />
                          <span>{product.name}</span>
                        </div>
                      </td>
                      <td>XOF {product.price.toLocaleString()}/kg</td>
                      <td className="quantity-btn">
                        <button
                          className="btn-add"
                          aria-label="Diminuer la quantité"
                          onClick={() =>
                            handleQuantityChange(index, product.quantity - 1)
                          }
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          className="btn-add"
                          aria-label="Augmenter la quantité"
                          onClick={() =>
                            handleQuantityChange(index, product.quantity + 1)
                          }
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </td>
                      <td>XOF {(product.price * product.quantity).toLocaleString()}</td>
                      <td>
                        <button
                          onClick={() => handleRemoveItem(index)}
                          className="btn-remove"
                          aria-label="Supprimer l'article"
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="div-update-btn">
                <button 
                  className={`update-button ${isUpdating ? 'updating' : ''}`}
                  onClick={handleUpdateCart}
                  disabled={isUpdating}
                >
                  {isUpdating ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Mise à jour...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-sync-alt"></i> Mise à jour du panier
                    </>
                  )}
                </button>
              </div>
            </div>
            <ResumeCard subTotal={subTotal} />
          </>
        ) : (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <p className="empty-cart-text">Votre panier est vide</p>
            <a href="/produits" className="continue-shopping">
              <i className="fas fa-arrow-left"></i> Continuer mes achats
            </a>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Panier;