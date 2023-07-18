import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const LogementDetails = () => {
  const { id } = useParams();
  const [logementDetails, setLogementDetails] = useState(null);

  useEffect(() => {
    const fetchLogementDetails = async () => {
      try {
        const response = await fetch("/data/logements.json");
        const data = await response.json();

        const logement = data.find((logement) => logement.id === id);
        setLogementDetails(logement);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails du logement",
          error
        );
      }
    };

    fetchLogementDetails();
  }, [id]);

  if (!logementDetails) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div>
      <Navigation />
      <div className="cards-container">
        <div className="cards-header">
          <div className="head">
            <img src={logementDetails.cover} alt={logementDetails.title} />
            <h2>{logementDetails.title}</h2>
            <span>{logementDetails.location}</span>
            <div className="tags">{logementDetails.tags}</div>
          </div>

          <div className="description">
            <div className="colapse"></div>
            <p className="texte">{logementDetails.description}</p>
          </div>
        </div>
        {/* <div className="host">
          <span>{logementDetails.host.name}</span>
          <img
            src={logementDetails.host.picture}
            alt={logementDetails.host.name}
          />
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default LogementDetails;
