import React from "react";
import "./FormFacturation.css";

const FormFacturation = () => {
  return (
    <div className="facturation-container">
      <div className="facturation-row">
        <input type="text" placeholder="Adresse" className="full-width" />
      </div>
      <div className="facturation-row">
        <input type="text" placeholder="Lieu de livraison" className="full-width" />
      </div>
      <div className="facturation-row">
        <input
          type="email"
          placeholder="E-mail"
          className="half-width other-width"
        />
        <input
          type="tel"
          placeholder="Numéro"
          className="half-width other-width"
        />
      </div>
      <hr className="hr-divider " />
      <label for="note">Notes</label>
      <textarea
        placeholder="Note concernant votre commande, par ex. speciales pour la livraison"
        id="note"
        className="textarea-note"
        rows="4"
      ></textarea>
    </div>
  );
};

export default FormFacturation;
