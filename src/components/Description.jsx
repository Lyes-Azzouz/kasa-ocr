import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/description.scss";
import { useState } from "react";

const Description = ({ description }) => {
  const [isDescriptionVisible, setDescpritionVisible] = useState(false);

  const toggleDescription = () => {
    setDescpritionVisible(!isDescriptionVisible);
  };

  return (
    <div className="description">
      <div className="title" onClick={toggleDescription}>
        <h2>Description</h2>
        <span className={`chevron ${isDescriptionVisible ? "up" : ""}`}>
          <FontAwesomeIcon
            icon={isDescriptionVisible ? faChevronDown : faChevronUp}
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
