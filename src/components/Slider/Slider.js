import React from "react";
import "./Slider.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import BarRecherche from "../BarRecherche/BarRecherche";
const Slider = ({
  welcomeText,
  backgroundImage,
  imageUrl, 
  cropTitle,
  buttonProps,
}) => {
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
 
  return (
    <section className="top__home" style={{ backgroundImage: backgroundImage }}>
      <div className="left">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="welcome__texte"
        >
          <motion.h1 variants={variants} initial="initial" animate="animate">
            {welcomeText.title} <br />
            {welcomeText.title2}{" "}
            <span className="custom">{welcomeText.title3}</span>
          </motion.h1>

          <motion.p
            variants={variants}
            initial="initial"
            animate="animate"
            className="para_welcome_text"
          >
            {welcomeText.title4}
          </motion.p>
    

          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            className="text__1"
          >
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                strings: ["Simplifiez.", "Innovez.", "Réussissez."],
              }}
            />
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              className="btn_box"
            >
              <Link to={buttonProps.buttonLink} className="btn">
                {buttonProps.buttonText}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="right">
        <div className="cadre__photo">
          <motion.img
            variants={variants}
            initial="initial"
            animate="animate"
            src={imageUrl}
            alt="image page d'accueil"
          />
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            className="title"
          >
            <h3 style={{ width: "100%" }}>{cropTitle}</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
