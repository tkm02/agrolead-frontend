import React, { useEffect, useState } from "react";
import "./DetailProduits.css";
import AfficheImages from "../../components/AfficheImages/AfficheImages";
import img from "../../media/aubergine.png";
import image2 from "../../media/maïs.png";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import Nav from "../../components/Nav/Nav";
import { Link, Route, Routes } from "react-router-dom";
import Description from "../../components/Description/Description";
import PlusInfo from "../../components/PlusInfo/PlusInfo";
import AvisClient from "../../components/AvisClient/AvisClient";
import { useParams } from "react-router-dom";
import axios from "axios"
import { a } from "framer-motion/client";

const DetailProduits = () => {
  // const { id } = useParams();
  const { id } = useParams();
  // console.log(id);
  console.log(id);
  const [oneProduct, setOneProduct] = useState([])
  const [image, setImage] = useState("")
  const [activeTab, setActiveTab] = useState("description"); 

  const renderActiveTab = () => {
    switch (activeTab) {
      case "description":
        return <Description />;
      case "plus-info":
        return <PlusInfo />;
      case "avis-client":
        return <AvisClient />;
      default:
        return <Description />;
    }
  };


  useEffect(() => {
    const fakeProduct = {
        id: id,
        name: "Produit Fictif",
        description: "Ceci est une description fictive du produit.",
        prixUnitaire: 1500,
        rating: 4,
        typeProduit: "Fruits",
        avis: 10,
        stock: "En stock",
        image: [img,image2], // Image fictive
      };
      setImage(fakeProduct.image);
      setOneProduct(fakeProduct);
  }, [id]);

  return (
    <>
      <Nav />
      <div
        className="container-one-product"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <AfficheImages imageList={image} />
          <ProductInfo oneProduct={oneProduct}/>
        </div>


        <div className="tab-navigation">
          <button
            className={`tab-link ${activeTab === "description" ? "active" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`tab-link ${activeTab === "plus-info" ? "active" : ""}`}
            onClick={() => setActiveTab("plus-info")}
          >
            Plus info
          </button>
          <button
            className={`tab-link ${activeTab === "avis-client" ? "active" : ""}`}
            onClick={() => setActiveTab("avis-client")}
          >
            Avis client
          </button>
        </div>
        <div className="tab-content">{renderActiveTab()}</div>

      </div>
    </>
  );
};

export default DetailProduits;
