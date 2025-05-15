import React from "react";
import "./Dashboard.css";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

// Enregistrement des composants nécessaires pour Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Dashboard = () => {
  // Données pour le graphique des commandes
  const commandesData = {
    labels: ["Livrées", "En cours", "Annulées"],
    datasets: [
      {
        label: "Commandes",
        data: [10, 5, 2], // Exemple de données
        backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
        borderWidth: 1,
      },
    ],
  };

  // Données pour le graphique des produits favoris
  const favorisData = {
    labels: ["Produit 1", "Produit 2", "Produit 3", "Produit 4", "Produit 5"],
    datasets: [
      {
        label: "Favoris",
        data: [15, 10, 8, 6, 4], // Exemple de données
        backgroundColor: ["#146907", "#81ed0d", "#28a745", "#63a832", "#408010"],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  // Options pour les graphiques
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            family: "'Outfit', sans-serif",
            size: 12
          }
        }
      }
    }
  };

  return (
    <div className="dashboard-container">
        <Nav />
      <div className="dashboard-header">
        <h1 className="dashboard-title">Bienvenue sur votre tableau de bord</h1>
        <div className="dashboard-stats">
          <div className="stat-card">
            <i className="fas fa-shopping-bag"></i>
            <div className="stat-content">
              <h3>17</h3>
              <p>Commandes</p>
            </div>
          </div>
          <div className="stat-card">
            <i className="fas fa-heart"></i>
            <div className="stat-content">
              <h3>30</h3>
              <p>Favoris</p>
            </div>
          </div>
          <div className="stat-card">
            <i className="fas fa-file-invoice"></i>
            <div className="stat-content">
              <h3>8</h3>
              <p>Factures</p>
            </div>
          </div>
          <div className="stat-card">
            <i className="fas fa-shopping-cart"></i>
            <div className="stat-content">
              <h3>3</h3>
              <p>Panier</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        {/* Section Commandes récentes avec graphique */}
        <div className="dashboard-card">
          <div className="card-header">
            <i className="fas fa-shopping-bag"></i>
            <h2>Commandes récentes</h2>
          </div>
          <div className="card-content">
            <div className="chart-container">
              <Pie data={commandesData} options={pieOptions} />
            </div>
            <div className="command-list">
              <div className="command-item">
                <div className="command-info">
                  <span className="command-id">#CMD-2024-001</span>
                  <span className="command-date">25/04/2024</span>
                </div>
                <span className="status delivered">Livrée</span>
              </div>
              <div className="command-item">
                <div className="command-info">
                  <span className="command-id">#CMD-2024-002</span>
                  <span className="command-date">24/04/2024</span>
                </div>
                <span className="status in-progress">En cours</span>
              </div>
              <div className="command-item">
                <div className="command-info">
                  <span className="command-id">#CMD-2024-003</span>
                  <span className="command-date">23/04/2024</span>
                </div>
                <span className="status cancelled">Annulée</span>
              </div>
            </div>
          </div>
          <button className="dashboard-button">
            <span>Voir toutes les commandes</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* Section Résumé des factures */}
        <div className="dashboard-card">
          <div className="card-header">
            <i className="fas fa-file-invoice"></i>
            <h2>Résumé des factures</h2>
          </div>
          <div className="card-content">
            <div className="invoice-summary">
              <div className="invoice-item">
                <div className="invoice-label">Total des factures</div>
                <div className="invoice-value">XOF 150,000</div>
              </div>
              <div className="invoice-item">
                <div className="invoice-label">Factures payées</div>
                <div className="invoice-value">XOF 100,000</div>
              </div>
              <div className="invoice-item">
                <div className="invoice-label">Factures impayées</div>
                <div className="invoice-value highlight">XOF 50,000</div>
              </div>
            </div>
            <div className="invoice-list">
              <div className="invoice-list-item">
                <div className="invoice-list-info">
                  <span className="invoice-id">#FAC-2024-001</span>
                  <span className="invoice-amount">XOF 25,000</span>
                </div>
                <span className="invoice-status paid">Payée</span>
              </div>
              <div className="invoice-list-item">
                <div className="invoice-list-info">
                  <span className="invoice-id">#FAC-2024-002</span>
                  <span className="invoice-amount">XOF 30,000</span>
                </div>
                <span className="invoice-status unpaid">Impayée</span>
              </div>
              <div className="invoice-list-item">
                <div className="invoice-list-info">
                  <span className="invoice-id">#FAC-2024-003</span>
                  <span className="invoice-amount">XOF 20,000</span>
                </div>
                <span className="invoice-status paid">Payée</span>
              </div>
            </div>
          </div>
          <button className="dashboard-button">
            <span>Voir les factures</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* Section Produits favoris avec graphique */}
        <div className="dashboard-card">
          <div className="card-header">
            <i className="fas fa-heart"></i>
            <h2>Produits favoris</h2>
          </div>
          <div className="card-content">
            <div className="chart-container">
              <Pie data={favorisData} options={pieOptions} />
            </div>
            <div className="favorite-list">
              <div className="favorite-item">
                <img src="/api/placeholder/40/40" alt="Produit 1" className="favorite-img" />
                <div className="favorite-info">
                  <span className="favorite-name">Produit 1</span>
                  <span className="favorite-price">XOF 5,000</span>
                </div>
                <button className="favorite-cart-btn">
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
              <div className="favorite-item">
                <img src="/api/placeholder/40/40" alt="Produit 2" className="favorite-img" />
                <div className="favorite-info">
                  <span className="favorite-name">Produit 2</span>
                  <span className="favorite-price">XOF 3,500</span>
                </div>
                <button className="favorite-cart-btn">
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
              <div className="favorite-item">
                <img src="/api/placeholder/40/40" alt="Produit 3" className="favorite-img" />
                <div className="favorite-info">
                  <span className="favorite-name">Produit 3</span>
                  <span className="favorite-price">XOF 4,200</span>
                </div>
                <button className="favorite-cart-btn">
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          </div>
          <button className="dashboard-button">
            <span>Voir tous les favoris</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* Section Gestion de compte */}
        <div className="dashboard-card">
          <div className="card-header">
            <i className="fas fa-user-cog"></i>
            <h2>Gestion de compte</h2>
          </div>
          <div className="card-content">
            <div className="account-info">
              <div className="user-avatar">
                <img src="/api/placeholder/80/80" alt="Avatar utilisateur" />
                <button className="edit-avatar-btn">
                  <i className="fas fa-camera"></i>
                </button>
              </div>
              <div className="user-details">
                <h3>John Doe</h3>
                <p>john.doe@email.com</p>
                <p>+225 07 00 000 000</p>
              </div>
            </div>
            <div className="account-actions">
              <button className="account-action-btn">
                <i className="fas fa-user-edit"></i>
                <span>Modifier mes informations</span>
              </button>
              <button className="account-action-btn">
                <i className="fas fa-lock"></i>
                <span>Changer mon mot de passe</span>
              </button>
              <button className="account-action-btn">
                <i className="fas fa-address-book"></i>
                <span>Gérer mes adresses</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default Dashboard;