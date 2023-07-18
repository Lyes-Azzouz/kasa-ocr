import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/pages/cards_content.scss";
import Description from "./Description";

const LogementDetails = () => {
  const { id } = useParams();
  const [logementDetails, setLogementDetails] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

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
    return <div>Chargement en cours...</div>;
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

  const toggleDescription = () => {
    setIsDescriptionVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="cards-container">
      <div className="image">
        <img
          src={logementDetails.pictures[currentImageIndex]}
          alt={logementDetails.title}
        />
        <div className="fleches">
          {" "}
          <span onClick={handlePrevImage}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          <span onClick={handleNextImage}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
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
          </div>

          <Description
            isDescriptionVisible={isDescriptionVisible}
            toggleDescription={toggleDescription}
            description={logementDetails.description}
          />
        </div>
        <div className="host">
          <span>{logementDetails.host.name}</span>
          <div className="picture-rating">
            <img
              src={logementDetails.host.picture}
              alt={logementDetails.host.name}
            />
            <div>{logementDetails.host.rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogementDetails;
