import React, { useEffect, useState } from "react";
import "./ResumeFacturation.css";
import { Link } from "react-router-dom";

const ResumeFacturation = (panier) => {
  const priceLivraison = 0;
  const [total, setTotal] = useState(0);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] =
//     useState("paiementLivraison");
    const {subTotal} = panier
  useEffect(() => {
    setTotal(priceLivraison + subTotal);
  }, [subTotal]);

//   const handlePaymentMethodChange = (method) => {
//     setSelectedPaymentMethod(method);
//   };
  return (
    <div className="facturation-card">
      <h2>Total Facturation</h2>
      {/* Ajout des informations du produit */}
      <div className="product-info-facturation">
        <img src="/Icones/piment_rouge.png" alt="Nom du produit" />
        <div className="product-details-facturation">
          <p className="product-name-facturation">Piments rouges</p>
          <p>x1</p>
          <p>XOF {subTotal}</p>
        </div>
      </div>
      <div className="product-info-facturation">
        <img src="/Icones/piment_vert.png" alt="Nom du produit" />
        <div className="product-details-facturation">
          <p className="product-name-facturation">Piments verts</p>
          <p>x1</p>
          <p>XOF {subTotal}</p>
        </div>
      </div>

      <div className="summary-item">
        <span>Sous-total :</span>
        <span>XOF {subTotal}</span>
      </div>
      <div className="summary-item">
        <span>Frais de livraison :</span>
        <span>XOF {priceLivraison}</span>
      </div>
      <div className="summary-item total">
        <span>Total :</span>
        <span>XOF {total}</span>
      </div>
      {/* Ajout des options de paiement */}
      <div className="payment-options">
        <label>
          <input type="radio" name="paymentMethod" value="cash" />
          Paiement à la livraison
        </label>
        <label>
          <input type="radio" name="paymentMethod" value="Orange" />
          Orange Money
        </label>
        <label>
          <input type="radio" name="paymentMethod" value="Mtn" />
          Mtn Money
        </label>
        <label>
          <input type="radio" name="paymentMethod" value="Moov" />
          Moov Money
        </label>
        <label>
          <input type="radio" name="paymentMethod" value="Wave" />
          Wave 
        </label>
      </div>
      <button className="payment-button">Valider</button>
    </div>
  );
};

export default ResumeFacturation;
