import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/description.scss";

const Description = ({
  isDescriptionVisible,
  toggleDescription,
  description,
}) => {
  return (
    <div className={`description ${isDescriptionVisible ? "up" : ""}`}>
      {" "}
      <div className="title">
        <h2>Description</h2>
        <span onClick={toggleDescription}>
          <FontAwesomeIcon
            className={`chevron down ${isDescriptionVisible ? "up" : ""}`}
            icon={isDescriptionVisible ? faChevronUp : faChevronDown}
          />
        </span>{" "}
      </div>
      <div className="toggle">
        {isDescriptionVisible && <p className="texte">{description}</p>}
      </div>
    </div>
  );
};

export default Description;
