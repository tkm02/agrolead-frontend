import React from "react";
import "../Dashboard/Dashboard.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const Commandes = () => {
  const commandes = [
    { id: "CMD-2024-001", date: "25/04/2024", montant: "XOF 35,000", status: "Livrée" },
    { id: "CMD-2024-002", date: "24/04/2024", montant: "XOF 25,000", status: "En cours" },
    { id: "CMD-2024-003", date: "23/04/2024", montant: "XOF 15,000", status: "Annulée" },
    { id: "CMD-2024-004", date: "20/04/2024", montant: "XOF 40,000", status: "Livrée" },
    { id: "CMD-2024-005", date: "18/04/2024", montant: "XOF 30,000", status: "Livrée" },
    { id: "CMD-2024-006", date: "15/04/2024", montant: "XOF 20,000", status: "Livrée" },
    { id: "CMD-2024-007", date: "10/04/2024", montant: "XOF 45,000", status: "Livrée" },
  ];

  return (
    <div className="dashboard-container">
      <Nav />
      <div className="dashboard-header">
        <h1 className="dashboard-title">Toutes vos commandes</h1>
      </div>

      <div className="dashboard-card">
        <div className="card-header">
          <i className="fas fa-shopping-bag"></i>
          <h2>Historique des commandes</h2>
        </div>
        <div className="card-content">
          <div className="command-list">
            {commandes.map((cmd) => (
              <div key={cmd.id} className="command-item">
                <div className="command-info">
                  <span className="command-id">#{cmd.id}</span>
                  <span className="command-date">{cmd.date}</span>
                  <span className="command-amount">{cmd.montant}</span>
                </div>
                <span className={`status ${cmd.status.toLowerCase().replace(' ', '-')}`}>
                  {cmd.status}
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

export default Commandes;