import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__column footer__column--large">
            <div className="footer__logo"></div>
            <p className="footer__description">
              Meilleur entreprise de ecommercialisation de produits vivriers avec
              ces agriculteurs et ses vendeurs qui ont impacté le domaine par leur
              savoir-faire.
            </p>
            <div className="footer__contact">
              <i className="fas fa-phone-alt"></i>
              <span>(225) 07 05 228 0114 & (33) 01 01 233 412</span>
            </div>
            <div className="footer__social">
              <a href="#" className="footer__social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="footer__social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="footer__social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="footer__social-link"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="footer__newsletter">
              <h4 className="footer__newsletter-title">Inscrivez-vous à notre newsletter</h4>
              <form className="footer__newsletter-form">
                <input type="email" placeholder="Votre email" className="footer__newsletter-input" />
                <button type="submit" className="footer__newsletter-button">S'inscrire</button>
              </form>
            </div>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Mon Compte</h3>
            <ul className="footer__links">
              <li className="footer__link-item">
                <NavLink to="/compte" className="footer__link">Mon compte</NavLink>
              </li>
              <li className="footer__link-item">
                <NavLink to="/historique" className="footer__link">Historique des achats</NavLink>
              </li>
              <li className="footer__link-item">
                <NavLink to="/panier" className="footer__link">Mon Panier</NavLink>
              </li>
              <li className="footer__link-item">
                <NavLink to="/wishlist" className="footer__link">Liste de souhaits</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Assistance</h3>
            <ul className="footer__links">
              <li className="footer__link-item">
                <NavLink to="/contact" className="footer__link">Contact</NavLink>
              </li>
              <li className="footer__link-item">
                <NavLink to="/faq" className="footer__link">FAQ</NavLink>
              </li>
              <li className="footer__link-item">
                <NavLink to="/terms" className="footer__link">Termes et conditions</NavLink>
              </li>
              <li className="footer__link-item">
                <NavLink to="/privacy" className="footer__link">Politique de confidentialité</NavLink>
              </li>
              <li className="footer__link-item">
                <NavLink to="/returns" className="footer__link">Retours et remboursements</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">À Propos</h3>
            <ul className="footer__links">
              <li className="footer__link-item">
                <NavLink to="/team" className="footer__link">Notre Team</NavLink>
              </li>
              <li className="footer__link-item">
                <NavLink to="/boutiques" className="footer__link">Boutiques</NavLink>
              </li>
              <li className="footer__link-item">
                <NavLink to="/produits" className="footer__link">Produits</NavLink>
              </li>
              <li className="footer__link-item">
                <NavLink to="/suivi" className="footer__link">Suivi de commande</NavLink>
              </li>
              <li className="footer__link-item">
                <NavLink to="/partenaires" className="footer__link">Nos Partenaires</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Categories</h3>
            <ul className="footer__links">
              <li className="footer__link-item">
                <NavLink to="/fruits" className="footer__link">Fruits</NavLink>
              </li>
              <li className="footer__link-item">
                <NavLink to="/legumes" className="footer__link">Légumes</NavLink>
              </li>
              <li className="footer__link-item">
                <NavLink to="/cereales" className="footer__link">Céréales & Féculents</NavLink>
              </li>
              <li className="footer__link-item">
                <NavLink to="/tubercules" className="footer__link">Tubercules</NavLink>
              </li>
              <li className="footer__link-item">
                <NavLink to="/produits-bio" className="footer__link">Produits Bio</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p className="footer__copyright">
            AgroLeadTech eCommerce &copy; 2024 All Rights Reserved
          </p>
          <div className="footer__payment-methods">
            <div className="footer__payment-method footer__payment-method--om"></div>
            <div className="footer__payment-method footer__payment-method--mtn"></div>
            <div className="footer__payment-method footer__payment-method--moov"></div>
            <div className="footer__payment-method footer__payment-method--wave"></div>
            <div className="footer__payment-method footer__payment-method--visa"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;