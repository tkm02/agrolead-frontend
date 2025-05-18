import React from "react";
import "../Dashboard/Dashboard.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const Factures = () => {
  const factures = [
    { id: "FAC-2024-001", date: "25/04/2024", montant: "XOF 35,000", status: "Payée" },
    { id: "FAC-2024-002", date: "24/04/2024", montant: "XOF 25,000", status: "Impayée" },
    { id: "FAC-2024-003", date: "23/04/2024", montant: "XOF 15,000", status: "Payée" },
    { id: "FAC-2024-004", date: "20/04/2024", montant: "XOF 40,000", status: "Payée" },
    { id: "FAC-2024-005", date: "18/04/2024", montant: "XOF 30,000", status: "Payée" },
  ];

  return (
    <div className="dashboard-container">
      <Nav />
      <div className="dashboard-header">
        <h1 className="dashboard-title">Toutes vos factures</h1>
      </div>

      <div className="dashboard-card">
        <div className="card-header">
          <i className="fas fa-file-invoice"></i>
          <h2>Historique des factures</h2>
        </div>
        <div className="card-content">
          <div className="invoice-summary">
            <div className="invoice-item">
              <div className="invoice-label">Total des factures</div>
              <div className="invoice-value">XOF 145,000</div>
            </div>
            <div className="invoice-item">
              <div className="invoice-label">Factures payées</div>
              <div className="invoice-value">XOF 120,000</div>
            </div>
            <div className="invoice-item">
              <div className="invoice-label">Factures impayées</div>
              <div className="invoice-value highlight">XOF 25,000</div>
            </div>
          </div>
          <div className="invoice-list">
            {factures.map((fac) => (
              <div key={fac.id} className="invoice-list-item">
                <div className="invoice-list-info">
                  <span className="invoice-id">#{fac.id}</span>
                  <span className="invoice-date">{fac.date}</span>
                  <span className="invoice-amount">{fac.montant}</span>
                </div>
                <span className={`invoice-status ${fac.status.toLowerCase()}`}>
                  {fac.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        <button className="dashboard-button">
          <span>Retour au tableau de bord</span>
          <i className="fas fa-arrow-left"></i>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Factures;