import CardsCooperative from "../../components/CardsCooperative/CardsCooperative";
import Nav from "../../components/Nav/Nav";
import Slider from "../../components/Slider/Slider";
import './Home.css'; // Importation du fichier CSS
import bgImage from "../../media/lush-green-farmland-being-surveyed-by-drone-precision-agriculture.jpg";
import CategorieProduits from "../../components/CategorieProduits/CategorieProduits";
import Services from "../../components/Services/Services";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import img1 from "../../media/pomme.png";
import img2 from "../../media/orange.png";
import img3 from "../../media/aubergine.png";
import img4 from "../../media/maïs.png";
import img5 from "../../media/pomme-de-terre.png";
import img6 from "../../media/salad.png";
import Footer from "../../components/Footer/Footer";
const Home = () => {
const produits = [
    {
      id: 1,
      name: "Pommes vertes",
      image: img1,
      price: 1499,
      oldPrice: 0,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Malte indienne fraîche",
      image: img2,
      price: 2000,
      oldPrice: 0,
      rating: 4.2,
    },
    {
      id: 3,
      name: "Aubergine",
      image: img3,
      price: 1200,
      oldPrice: 0,
      rating: 4.0,
    },
    {
      id: 4,
      name: "Maïs",
      image: img4,
      price: 19.99,
      oldPrice: 0,
      rating: 4.5,
    },

    {
      id: 5,
      name: "Patates Douces",
      image: img5,
      price: 19.99,
      oldPrice: 0,
      rating: 4.5,
    },
    {
      id: 6,
      name: "Laitue verte",
      image: img6,
      price: 24.99,
      oldPrice: 0,
      rating: 4.2,
    },

    // Ajoutez autant d'objets que nécessaire pour représenter vos produits populaires.
  ];
  return (
    <div className="home">
        <Nav />
        <Slider
        welcomeText={{
          title: "Bienvenue à vous, ",
          title2: "chez",
          title3: "Agri-Tech.",
          title4: "Agri-Tech, l'agriculture à l'ère du numérique : ", 
        }}
        backgroundImage={bgImage}
        imageUrl="https://img.freepik.com/free-photo/african-woman-harvesting-vegetables_23-2151441227.jpg?t=st=1745615587~exp=1745619187~hmac=706f7a87a1c12c0c1a9a8a1b199684430836df3c382f077a3c42de12ba50af89&w=1380"
        cropTitle="Tomates"
        buttonProps={{
          buttonText: "Découvrir",
          buttonLink: "/ecom/products",
        }}
      />
      <h2>
        Les coopératives partenaire à{" "}
        <span>
          <span className="Tech">Agri</span>Tech
        </span>
      </h2>
      <CardsCooperative />
      <h2>
        Nos produits par
        <span> categorie</span>
      </h2>
      <CategorieProduits/>
      <Services />
      <h2>
        Quelques
        <span> Produits</span>
      </h2>
      <div className="card-container">
        {produits.map((item) => (
          <ProductCard
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>

      <div className="voir-tout-produits">
        <Link to="/ecom/products">Voir plus de produits</Link>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
      <Footer />
    </div>
  );
}

export default Home;