import React, { useEffect, useState } from "react";
import "./AfficheImages.css";

const AfficheImages = ({ imageList = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Vérifiez si imageList est un tableau valide
    if (Array.isArray(imageList) && imageList.length > 0) {
      setImages(imageList);
      setSelectedImage(imageList[0]); // Définit la première image comme sélectionnée
    } else {
      setImages([]); // Définit un tableau vide si imageList est invalide
      setSelectedImage(null); // Pas d'image sélectionnée
    }
  }, [imageList]);

  const handleImageClick = (newImage) => {
    setSelectedImage(newImage);
  };

  return (
    <div className="gauche">
      <div className="détail">
        {images.map((img, index) => (
          <div
            key={index}
            className="img"
            onClick={() => handleImageClick(img)}
          >
            <img src={img} alt={`img-${index}`} />
          </div>
        ))}
      </div>
      <div className="image-selectionner">
        {selectedImage ? (
          <img id="img-select" src={selectedImage} alt="Selected" />
        ) : (
          <p>Aucune image sélectionnée</p>
        )}
      </div>
    </div>
  );
};

export default AfficheImages;