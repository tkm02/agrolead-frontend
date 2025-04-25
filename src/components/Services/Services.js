import React from "react";
import "./Services.css";
import icon1 from "../../media/Icone-livraison.png"
import icon2 from "../../media/icone-serviceclient.png"
import icon3 from "../../media/icone-paiement securise.png"
import icon4 from "../../media/icone_remboursement garantie.png"

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <div className="service-icon"><img src={icon1} alt="" /></div>
        <div className="service-text">
        <h4>Livraison Express</h4>
        <p>Recevez vos produits rapidement, où que vous soyez.</p>
        </div>
      </div>
      <div className="service">
        <div className="service-icon"><img src={icon2}  alt="" /></div>
        <div className="service-text">
          <h4>Service Client 24/7</h4>
          <p>Accés en temps réel au service client</p>
        </div>
      </div>
      <div className="service">
        <div className="service-icon"><img src={icon3}  alt="" /></div>
        <div className="service-text">
          <h4>100% Paiement Securisé</h4>
          <p>Nous nous assurons que votre argent est Securisé</p>
        </div>
      </div>
      <div className="service">
        <div className="service-icon"><img src={icon4}  alt="" /></div>
        <div className="service-text">
          <h4>Garantie de remboursement</h4>
          <p>Garantie de remboursement de 30 jours</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
