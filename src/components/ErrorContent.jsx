import React from "react";
import "../styles/components/error_content.scss";
import { Link } from "react-router-dom";
const ErrorContent = () => {
  return (
    <div className="texte">
      <h1>404</h1>
      <div className="subtitle">
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/Home" className="home-link">
          <span>Retournez à la page d'accueil</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorContent;
