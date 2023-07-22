import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/description.scss";
import { useState } from "react";

const Description = ({ description }) => {
  const [isDescriptionVisible, setDescpritionVisible] = useState(false);

  const toggleEquipements = () => {
    setDescpritionVisible(!isDescriptionVisible);
  };

  return (
    <div className="description">
      <div className="title" onClick={toggleEquipements}>
        <h2>Description</h2>
        <span className={`chevron ${isDescriptionVisible ? "up" : ""}`}>
          <FontAwesomeIcon
            icon={isDescriptionVisible ? faChevronUp : faChevronDown}
          />
        </span>
      </div>
      <div className={`toggle ${isDescriptionVisible ? "open" : ""}`}>
        <p className="texte">{description}</p>
      </div>
    </div>
  );
};

export default Description;
