import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Description from "../components/Description";
import Equipements from "../components/Equipements";
import "../styles/components/cards_content.scss";

const LogementDetails = () => {
  const { id } = useParams();
  const [logementDetails, setLogementDetails] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isEquipementsVisible, setIsEquipementsVisible] = useState(false);

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
    return;
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
    setIsEquipementsVisible(false);
  };

  const toggleEquipements = () => {
    setIsEquipementsVisible((prevVisible) => !prevVisible);
    setIsDescriptionVisible(false);
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
            <span onClick={handlePrevImage}>&lt;</span>
            <span onClick={handleNextImage}>&gt;</span>
          </div>
        )}
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
          <div className="collapse-container">
            <Description
              isDescriptionVisible={isDescriptionVisible}
              toggleDescription={toggleDescription}
              description={logementDetails.description}
            />

            <Equipements
              isEquipementsVisible={isEquipementsVisible}
              toggleEquipements={toggleEquipements}
              equipements={logementDetails.equipments}
            />
          </div>
        </div>
        <div className="host">
          <span>{logementDetails.host.name}</span>
          <img
            src={logementDetails.host.picture}
            alt={logementDetails.host.name}
          />
        </div>
      </div>
    </div>
  );
};

export default LogementDetails;
