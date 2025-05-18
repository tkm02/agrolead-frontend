// src/hooks/useCart.js
import { useState, useEffect } from 'react';

// Image d'exemple (à remplacer par vos imports réels)
import chouImg from '../../media/chou.png';

const useCart = () => {
  // Récupération du panier depuis le localStorage (s'il existe)
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [
      // Données d'exemple pour le développement
      {
        id: 1,
        name: "Chou vert",
        price: 1500,
        quantity: 2,
        image: chouImg
      },
      {
        id: 2,
        name: "Carottes bio",
        price: 1200,
        quantity: 3,
        image: chouImg
      }
    ];
  });

  // Sauvegarder le panier dans localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Calculer le total du panier
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Ajouter un produit au panier
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Si le produit existe déjà, augmenter la quantité
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Sinon ajouter le nouveau produit
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Mettre à jour la quantité d'un produit
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      // Si la quantité est 0 ou moins, supprimer l'article
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Supprimer un produit du panier
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Vider le panier
  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subTotal
  };
};

export default useCart;