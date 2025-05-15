import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ChoiceCategories.css";


const ChoiceCategories = ({onCategoryChange}) => {
  const categories = [
    "Céréales",
    "Légumes",
    "Fruits",
    "Légumineuses",
    "Tubercule",
    "Autres",
  ];
  const [activeCategory, setActiveCategory] = useState(null); // Adjust initial state if needed
  const handleLinkClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
    onCategoryChange(category); // Pass the selected category to the parent
  };


  return (
    <div className="choice__categorie">
      {categories.map((category, index) => (
        <Link
          key={index}
          className={`choice ${category === activeCategory ? "actives" : ""}`}
          onClick={() => handleLinkClick(category)}
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default ChoiceCategories;