import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components/cards.scss";

const LogementCards = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch("/data/logements.json");
        const data = await response.json();
        setLogements(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données des logements",
          error
        );
      }
    };

    fetchLogements();
  }, []);

  return (
    <div className="card-container">
      {logements.map((logement) => (
        <Link key={logement.id} to={`/logement/${logement.id}`}>
          <div className="card">
            <img src={logement.cover} alt={logement.title} />
            <h2>{logement.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LogementCards;
