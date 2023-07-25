import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Image from "../components/Image";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

import "../styles/pages/about.scss";

const About = () => {
  const collapses = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "La satisfaction de nos utilisateurs est au cœur de nos préoccupations. Notre équipe de concierges est disponible 24/7 pour répondre à vos questions ou vous aider en cas de besoin.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  const [openCollapseIndex, setOpenCollapseIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenCollapseIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <Navigation />
      <Image />
      <div className="collapses-container">
        {collapses.map((collapse, index) => (
          <Collapse
            key={index}
            title={collapse.title}
            content={collapse.content}
            customClass="about-collapse"
            isOpen={openCollapseIndex === index}
            toggleCollapse={() => toggleCollapse(index)}
          />
        ))}
      </div>
      <div className="separation"></div>
      <Footer />
    </div>
  );
};

export default About;
