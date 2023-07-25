import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/description.scss";

// Composant avec un parametre "collapses" qui fournit une liste de collapses à afficher lorsqu'il est utilisé
// Lors de l'import de ce composant , il est défini au nombre de collapses crées
const CollapseAbout = ({ collapses }) => {
  // Initialisation du tableau des collapses à false pour le masquage des textes des collapses
  const [collapseStates, setCollapseStates] = useState(
    new Array(collapses.length).fill(false)
  );

  // Gère l'index des collapses pour afficher le contenu de chaque collapse , permet de mettre à jour la collapse pour la masquer/afficher
  const toggleCollapse = (index) => {
    setCollapseStates((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="collapse-container">
      {collapses.map((collapse, index) => (
        <div className="collapse" key={index}>
          <div className="title" onClick={() => toggleCollapse(index)}>
            <h2>{collapse.title}</h2>
            <span className={`chevron ${collapseStates[index] ? "up" : ""}`}>
              <FontAwesomeIcon
                icon={collapseStates[index] ? faChevronUp : faChevronDown}
              />
            </span>
          </div>
          <div className={`toggle ${collapseStates[index] ? "open" : ""}`}>
            <p className="texte">{collapse.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollapseAbout;
