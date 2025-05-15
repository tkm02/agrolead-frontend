import React from 'react';
import "./ProduitCommande.css";

const ProduitCommande = () => {
    const productInfo = {
        productImage: "https://via.placeholder.com/90",
        productName: "Nom du Produit",
        price: "1000 XOF",
        quantity: 2,
        subtotal: "2000 XOF",
      };
      return (
        <table className="custom-table">
          <thead>
            <tr>
              <th>Produit</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th>Sous-total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product-cell-commande">
                <div className="product-info-commande">
                  <img src={productInfo.productImage} alt="Product" />
                  <span>{productInfo.productName}</span>
                </div>
              </td>
              <td>{productInfo.price}</td>
              <td>{productInfo.quantity}</td>
              <td>{productInfo.subtotal}</td>
            </tr>
          </tbody>
        </table>
      );
}

export default ProduitCommande;
