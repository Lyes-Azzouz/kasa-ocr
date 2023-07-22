import React from "react";

const CollapseAbout = () => {
  return (
    <div className="collapse">
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

export default CollapseAbout;
