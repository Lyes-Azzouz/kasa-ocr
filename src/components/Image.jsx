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

  return (
    <div className="image-container">
      <div className="image-wrapper">
        {texte && <p className="image-text">Chez vous, partout et ailleurs</p>}
        <div className="image-sombre"></div>
        <img src={getSourceImg()} alt="Image_header" />
      </div>
    </div>
  );
};

export default Image;
