import React from 'react';
import "./SuivieCommande.css";

const SuivieCommande = ({ currentStep }) => {
    const steps = ["Order Received", "Processing", "En route", "Livré"];
  currentStep = 2;
  return (
    <div className="order-tracker">
      {steps.map((step, index) => (
        <div key={index} className={`step ${index <= currentStep ? 'completed' : ''}`}>
          <div className="circle">{index + 1}</div>
          <div className={`step-label ${index <= currentStep ? 'completed' : ''}`}>{step}</div>
          {index < steps.length - 1 && <div className={`progress-bar ${index < currentStep ? 'completed' : ''}`}></div>}
        </div>
      ))}
    </div>
  );
}

export default SuivieCommande;
