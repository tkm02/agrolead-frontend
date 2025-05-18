import React, { createContext, useContext, useState, useEffect } from "react";

// Création du contexte
const FavoritesContext = createContext();

// Hook personnalisé pour faciliter l'utilisation du contexte
export const useFavorites = () => {
  return useContext(FavoritesContext);
};

// Provider du contexte
export const FavoritesProvider = ({ children }) => {
  // État pour stocker les produits favoris
  const [favorites, setFavorites] = useState([]);

  // Charger les favoris depuis le localStorage au montage du composant
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Sauvegarder les favoris dans le localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Fonction pour ajouter un produit aux favoris
  const addToFavorites = (product) => {
    // Vérifier si le produit est déjà dans les favoris
    const isAlreadyFavorite = favorites.some((item) => item.id === product.id);
    
    if (!isAlreadyFavorite) {
      setFavorites([...favorites, product]);
    }
  };

  // Fonction pour supprimer un produit des favoris
  const removeFromFavorites = (productId) => {
    setFavorites(favorites.filter((item) => item.id !== productId));
  };

  // Fonction pour vérifier si un produit est dans les favoris
  const isInFavorites = (productId) => {
    return favorites.some((item) => item.id === productId);
  };

  // Fonction pour obtenir le nombre de produits dans les favoris
  const getFavoritesCount = () => {
    return favorites.length;
  };

  // Valeur du contexte à exposer
  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isInFavorites,
    getFavoritesCount,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;