import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<Home />} />
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