import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import bgImage from "../../media/pexels-sergei-a-2589457.jpg"
import SliderProductPage from "../../components/SliderProductPage/SliderProductPage";
import ChoiceCategories from "../../components/ChoiceCategories/ChoiceCategories";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";
import img1 from "../../media/pomme.png";
import img2 from "../../media/orange.png";
import img3 from "../../media/aubergine.png";
import img4 from "../../media/maïs.png";
import img5 from "../../media/pomme-de-terre.png";
import img6 from "../../media/salad.png";
import { image } from "framer-motion/client";
const ProductPage = () => {
    const productsData = [
      {
        id: 1,
        name: "Aubergine",
        price: 2500,
        oldPrice: 3000,
        type: "Légumes",
        image: img3,
        rating: 4,
        isValid: true,
      },
      {
        id: 2,
        name: "Tomate",
        price: 2000,
        oldPrice: 2500,
        type: "Légumes",
        image: img1,
        rating: 3,
        isValid: true,
      },
      {
        id: 3,
        name: "Carotte",
        price: 1800,
        oldPrice: 2000,
        image: img2,
        type: "Légumes",
        rating: 5,
        isValid: true,
      },
      {
        id: 4,
        name: "Carotte",
        price: 1800,
        oldPrice: 2000,
        type: "Légumes",
        image: img4,
        rating: 5,
        isValid: true,
      },
      {
        id: 5,
        name: "orange",
        price: 1800,
        oldPrice: 2000,
        image: img5,
        type: "Fruits",
        rating: 5,
        isValid: true,
      },
    ];
    const validProducts = productsData.filter((product) => product.isValid);
  
    const [filteredProducts, setFilteredProducts] = useState(validProducts);
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleCategoryChange = (category) => {
      var filtre = validProducts.filter(product => product.type === category);
      setFilteredProducts(filtre);    
    };
  
    useEffect(() => {
      const filteredProduct = validProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filteredProduct);
      console.log(filteredProducts);
      
      return () => {
          setFilteredProducts([]);
        };
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]); // Dépendances correctes
    
    return (
      <div>
        <Nav/>
        <SliderProductPage
          welcomeText={{
            title: "Bienvenue à vous, ",
            title2: "sur",
            title3: "la page des produits.",
            title4:
              "Saisissez un mot-clé pour rechercher des produits dans notre boutique en ligne.",
          }}
          onSearchChange={handleSearchChange}
          backgroundImage={bgImage}
          imageUrl="https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          cropTitle="riz"
          buttonProps={{
            buttonText: "Home",
            buttonLink: "/ecom/home",
          }}
        />
        <h2>
          Nos produits par
          <span> categorie</span>
        </h2>
        <ChoiceCategories onCategoryChange={handleCategoryChange}/>
        <div className="product-list" style={{ width: "90%", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  };
  
  export default ProductPage;
  