import React from "react";
import "./Facturations.css";
import Nav from "../../components/Nav/Nav";
import FormFacturation from "../../components/FormFacturation/FormFacturation";
import ResumeFacturation from "../../components/ResumeFacturation/ResumeFacturation";
import Footer from "../../components/Footer/Footer";


const Facturations = () => {
  return (
    <>
      <Nav />
      <h2>Information de facturation</h2>
      <div className="container-facturation">
        <FormFacturation />
        <ResumeFacturation />
      </div>
      <Footer />
    </>
  );
};

export default Facturations;
