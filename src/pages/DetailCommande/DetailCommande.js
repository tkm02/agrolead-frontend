import React from 'react';
import "./DetailCommande.css";
import Nav from '../../components/Nav/Nav';
import DetailTableau from '../../components/DetailTableau/DetailTableau';
import SuivieCommande from '../../components/SuivieCommande/SuivieCommande';
import ProduitCommande from '../../components/ProduitCommande/ProduitCommande';
import Footer from '../../components/Footer/Footer';


const DetailCommande = () => {
    return (
        <>
      <Nav />
      <h2>Détails de la commande</h2>
      <div className="container-details-commande">
        <DetailTableau />
        <SuivieCommande />
        <ProduitCommande />
      </div>
      <div className="container-btn-retour">
        <button className="btn-retour">Retour à l'accueil'</button>
      </div>
      <Footer />                                            
    </>
    );
}

export default DetailCommande;
