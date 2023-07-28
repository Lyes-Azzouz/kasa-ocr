import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collapse from "./Collapse";
import "../styles/components/cards_content.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Error from "../pages/Error";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const LogementDetails = () => {
  const { id } = useParams();
  const [logementDetails, setLogementDetails] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchLogementDetails = async () => {
      try {
        const response = await fetch("/data/logements.json");
        const data = await response.json();

        const logement = data.find((logement) => logement.id === id);
        setLogementDetails(logement);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails du logement",
          error
        );
      }
    };

    fetchLogementDetails();
  }, [id]);

  if (!logementDetails) {
    return <Error />;
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((index) =>
      index === 0 ? logementDetails.pictures.length - 1 : index - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((index) =>
      index === logementDetails.pictures.length - 1 ? 0 : index + 1
    );
  };

  // Fonction pour gérer le rating sur les étoiles
  const starsForRating = (rating) => {
    const total = 5;
    const starsFull = parseInt(rating);
    const starsEmpty = total - starsFull;
    const stars = [];

    for (let i = 0; i < starsFull; i++) {
      stars.push(
        <FontAwesomeIcon icon={faStar} key={i} className="stars-full" />
      );
    }

    for (let i = 0; i < starsEmpty; i++) {
      stars.push(
        <FontAwesomeIcon
          icon={faStar}
          key={i + starsFull + 1}
          className="stars-empty"
        />
      );
    }

    return stars;
  };

  return (
    <div className="cards-container">
      <div className="image">
        <img
          src={logementDetails.pictures[currentImageIndex]}
          alt={logementDetails.title}
        />
        {logementDetails.pictures.length > 1 && (
          <div className="fleches">
            <span onClick={handlePrevImage}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            <span onClick={handleNextImage}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
        )}
        <div className="image-counter">
          {currentImageIndex + 1} / {logementDetails.pictures.length}
        </div>
      </div>

      <div className="cards-block">
        <div className="cards-header">
          <div className="head">
            <h2>{logementDetails.title}</h2>
            <span>{logementDetails.location}</span>
            <ul className="tags">
              {logementDetails.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
            <div className="host">
              <div className="profil">
                <span>{logementDetails.host.name}</span>
                <img
                  src={logementDetails.host.picture}
                  alt={logementDetails.host.name}
                />
              </div>

              <div className="stars">
                {starsForRating(parseInt(logementDetails.rating))}
              </div>
            </div>
          </div>
          <div className="collapse-container">
            <Collapse
              title="Description"
              content={logementDetails.description}
            />

            <Collapse
              title="Equipements"
              content={logementDetails.equipments.join(", ")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogementDetails;
