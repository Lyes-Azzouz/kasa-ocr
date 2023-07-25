import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/collapse.scss";

const Collapse = ({ title, content, customClass, isOpenAbout }) => {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className={`description ${customClass} ${isOpenAbout ? "open" : ""}`}>
      <div className="title" onClick={toggleContent}>
        <h2>{title}</h2>
        <span className={`chevron ${isContentVisible ? "up" : ""}`}>
          <FontAwesomeIcon icon={faChevronUp} />
        </span>
      </div>
      <div className={`toggle ${isContentVisible ? "open" : ""}`}>
        {isContentVisible && <p className="content">{content}</p>}
      </div>
    </div>
  );
};

export default Collapse;
