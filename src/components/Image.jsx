import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/components/image.scss";

const Image = () => {
  const location = useLocation();

  const getSourceImg = () => {
    if (location.pathname === "/Home") {
      return "/images/image_home.png";
    } else if (location.pathname === "/About") {
      return "/images/image_about.png";
    }
  };

  const texte = location.pathname === "/Home";
  // imgHeight correspond a la hauteur de l'image dans le header
  // L'image est plus grande pour la page About en format mobile que pour la page Home
  const imgHeight = location.pathname === "/About";

  return (
    <div className={`image-container ${imgHeight && "about-mobile"}`}>
      <div className="image-wrapper">
        {texte && <p className="image-text">Chez vous, partout et ailleurs</p>}
        <div className="image-sombre"></div>
        <img src={getSourceImg()} alt="Image_header" />
      </div>
    </div>
  );
};

export default Image;
