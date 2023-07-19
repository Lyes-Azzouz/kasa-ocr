import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/equipements.scss"; // Assurez-vous d'avoir le bon chemin vers le fichier CSS des équipements.

const Equipements = ({
  isEquipementsVisible,
  toggleEquipements,
  equipements,
}) => {
  return (
    <div className={`equipements ${isEquipementsVisible ? "up" : ""}`}>
      {" "}
      <div className="title">
        <h2>Equipements</h2>
        <span onClick={toggleEquipements}>
          <FontAwesomeIcon
            className={`chevron down ${isEquipementsVisible ? "up" : ""}`}
            icon={isEquipementsVisible ? faChevronUp : faChevronDown}
          />
        </span>{" "}
      </div>
      <div className="toggle">
        {isEquipementsVisible && (
          <ul>
            {equipements.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Equipements;
