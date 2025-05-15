import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path='/panier' element={<Panier />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/detailproduits/:id" element={<DetailProduits />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path='/detailcommande/:id' element={<DetailCommande />} />
        <Route path='/facturation' element={<Facturations />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* Ajoutez d'autres routes ici */}
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        {/* <Route path="/orders" element={<Orders />} /> */}
        {/* <Route path="/order/:id" element={<OrderDetails />} /> */}

        {/* <{Route path="/signup" element={<Register />} />} */}
        {/* Ajoutez d'autres routes ici */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;