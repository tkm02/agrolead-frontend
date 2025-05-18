import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import Panier from '../pages/Panier/Panier';
import Favoris from '../pages/Favoris/Favoris';
import DetailProduits from '../pages/DetailProduits/DetailProduits';
import ProductPage from '../pages/ProductPage/ProductPage';
import DetailCommande from '../pages/DetailCommande/DetailCommande';
import Facturations from '../pages/Facturations/Facturations';
import Dashboard from '../pages/Dashboard/Dashboard';
import Cooperative from '../pages/Cooperative/Cooperative';
import CooperativeDetail from '../pages/CooperativeDetail/CooperativeDetail';
import Commandes from '../pages/Commandes/Commandes'; // Nouvelle importation
import Factures from '../pages/Factures/Factures'; // Nouvelle importation

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/detailproduits/:id" element={<DetailProduits />} />
        
        {/* Routes pour les coopératives */}
        <Route path="/cooperative" element={<Cooperative />} />
        <Route path="/cooperative/:id" element={<CooperativeDetail />} />
        
        {/* Compatibilité ascendante - redirections */}
        <Route 
          path="/cooperativeDetail" 
          element={<Navigate to="/cooperative" replace />} 
        />
        <Route 
          path="/cooperativeDetail/:id" 
          element={<Navigate to="/cooperative/:id" replace />} 
        />

        {/* Routes protégées */}
        <Route path="/panier" element={<Panier />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/commandes" element={<Commandes />} /> {/* Nouvelle route */}
        <Route path="/factures" element={<Factures />} /> {/* Nouvelle route */}
        <Route path="/detailcommande/:id" element={<DetailCommande />} />
        <Route path="/facturation" element={<Facturations />} />
        
        {/* Tableau de bord */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Gestion des routes non trouvées */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;