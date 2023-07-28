import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/equipements.scss";

const Equipements = ({ equipements }) => {
  const [isEquipementsVisible, setEquipementsVisible] = useState(false);

  const toggleEquipements = () => {
    setEquipementsVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="equipement">
      <div className="title" onClick={toggleEquipements}>
        <h2>Equipement</h2>
        <span className={`chevron ${isEquipementsVisible ? "up" : ""}`}>
          <FontAwesomeIcon icon={faChevronUp} />
        </span>
      </div>
      <ul className={`toggle ${isEquipementsVisible ? "open" : ""}`}>
        {equipements.map((equipement, index) => (
          <li className="texte" key={index}>
            {equipement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Equipements;
