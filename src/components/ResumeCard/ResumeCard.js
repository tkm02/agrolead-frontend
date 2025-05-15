import React, { useEffect, useState } from 'react';
import "./ResumeCard.css";

const ResumeCard = ({ subTotal }) => {
  const [priceLivraison, setPriceLivraison] = useState(0);
  const [total, setTotal] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [isApplying, setIsApplying] = useState(false);
 
  useEffect(() => {
    // Calcul du prix de livraison basé sur le sous-total
    let shipping = 0;
    if (subTotal > 0 && subTotal < 10000) {
      shipping = 1000;
    }
    setPriceLivraison(shipping);
  }, [subTotal]);

  useEffect(() => {
    setTotal(subTotal + priceLivraison - discount);
  }, [subTotal, priceLivraison, discount]);

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    if (!promoCode.trim()) return;

    setIsApplying(true);
    setPromoError('');
    setPromoSuccess('');

    // Simulation de vérification d'un code promo
    setTimeout(() => {
      if (promoCode.toUpperCase() === 'AGRO25') {
        const newDiscount = Math.round(subTotal * 0.25);
        setDiscount(newDiscount);
        setPromoSuccess('Code promo appliqué avec succès!');
      } else {
        setPromoError('Code promo invalide');
      }
      setIsApplying(false);
    }, 800);
  };

  return (
    <div className="resume-card">
      <h2>Récapitulatif</h2>
      
      <div className="promo-section">
        <form onSubmit={handlePromoSubmit}>
          <div className="promo-input-group">
            <input
              type="text"
              placeholder="Code promo"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="promo-input"
              disabled={isApplying}
            />
            <button 
              type="submit" 
              className="promo-button"
              disabled={isApplying}
            >
              {isApplying ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                'Appliquer'
              )}
            </button>
          </div>
          {promoError && (
            <div className="promo-error">
              <i className="fas fa-exclamation-circle"></i> {promoError}
            </div>
          )}
          {promoSuccess && (
            <div className="promo-success">
              <i className="fas fa-check-circle"></i> {promoSuccess}
            </div>
          )}
        </form>
      </div>
      
      <div className="summary-item">
        <span>Sous-total</span>
        <span>XOF {subTotal.toLocaleString()}</span>
      </div>
      
      {discount > 0 && (
        <div className="summary-item discount-item">
          <span>Remise</span>
          <span>- XOF {discount.toLocaleString()}</span>
        </div>
      )}
      
      <div className="summary-item">
        <span>Frais de livraison</span>
        {priceLivraison > 0 ? (
          <span>XOF {priceLivraison.toLocaleString()}</span>
        ) : (
          <span className="free-shipping">Gratuit</span>
        )}
      </div>
      
      <div className="summary-item total">
        <span>Total</span>
        <span>XOF {total.toLocaleString()}</span>
      </div>
      
     
      
      <button className="payment-button">
        <i className="fas fa-lock"></i> Passer au paiement
      </button>
      
      <p className="secured-payment">
        <i className="fas fa-shield-alt"></i> Paiement 100% sécurisé
      </p>
    </div>
  );
};

export default ResumeCard;