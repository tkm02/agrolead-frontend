import React, { useState } from 'react';
import './Register.css'; // Importation du fichier CSS
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'particulier', // Valeur par défaut
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }
    console.log('Form data submitted:', formData);
    // Envoyez les données au backend ou gérez l'inscription ici
  };

  return (
    <div className="ecom-register">
      <div className="container-register-ecom">
        <div className="container-image-ecom">
          {/* Ajoutez une image ou un contenu visuel ici */}
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Créer un compte</h1>
          <div className="form-group">
            <label htmlFor="firstName">Nom</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Entrez votre nom"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Prénom</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Entrez votre prénom"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Entrez votre email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmez votre mot de passe"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Type d'utilisateur</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="particulier"
                  checked={formData.userType === 'particulier'}
                  onChange={handleChange}
                />
                Particulier
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="entreprise"
                  checked={formData.userType === 'entreprise'}
                  onChange={handleChange}
                />
                Entreprise
              </label>
            </div>
          </div>
          <button type="submit">S'inscrire</button>
          <p className="login-prompt">
            Vous avez déjà un compte ? <Link to="/login">Connectez-vous ici</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;