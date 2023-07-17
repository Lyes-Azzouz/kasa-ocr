import React from "react";
import "../styles/components/navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="elements">
        <img src="/images/logo.png" alt="logo_kasa" />
        <ul>
          <li>
            <Link to="/Home">Accueil</Link>
          </li>
          <li>
            <Link to="/About">A Propos</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
