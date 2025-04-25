import React, { useState } from 'react';
import './Login.css'; // Importation du fichier CSS
// import img1 from "../../media/countryside-women-out-field-posing.jpg";
import { login } from '../../services/authService';
import { Link } from "react-router-dom";
// const url =
//   "https://lottie.host/embed/a5217286-1524-4e24-891e-bebc0849ce5c/wFTRdttrwf.json";
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lottie, setLottie] = useState('https://lottie.host/embed/a5217286-1524-4e24-891e-bebc0849ce5c/wFTRdttrwf.json');
  
    const handleSubmit = async (e) => {  
      e.preventDefault();
      try {
        const data = await login(email, password);
        console.log('Login successful:', data);
        // Redirigez l'utilisateur ou gérez le succès
      } catch (error) {
        console.error('Login failed:', error);
      }
    };

  return (
    <div className="ecom">
      <div className="container-login-ecom">
        <div className="container-image-ecom">
          {/* <img src={img1} alt="Agriculture" />*/}
          
          <iframe src={lottie} title="ras" />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Connexion</h1>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Entrez votre email" onChange={(e) => setEmail(e.target.value)} value={email} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Entrez votre mot de passe" required />
          </div>
          <button type="submit">Se connecter</button>
          <p className="signup-prompt">
            Pas encore de compte ? <Link to="/signup">Inscrivez-vous ici</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;