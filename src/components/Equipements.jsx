import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/equipements.scss"; // Assurez-vous d'avoir le bon chemin vers le fichier CSS des équipements.
import { useState } from "react";

const Equipements = ({ equipements }) => {
  const [isEquipementsVisible, setEquipementsVisible] = useState(false);

  const toggleEquipements = () => {
    setEquipementsVisible(!isEquipementsVisible);
  };

  return (
    <div className="equipement">
      <div className="title" onClick={toggleEquipements}>
        <h2>Equipement</h2>
        <span className={`chevron ${isEquipementsVisible ? "up" : ""}`}>
          <FontAwesomeIcon
            icon={isEquipementsVisible ? faChevronUp : faChevronDown}
          />
        </span>
      </div>
      <div className={`toggle ${isEquipementsVisible ? "open" : ""}`}>
        <p className="texte">{equipements}</p>
      </div>
    </div>
  );
};

export default Equipements;
