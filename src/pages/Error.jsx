import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ErrorContent from "../components/ErrorContent";
const Error = () => {
  return (
    <div className="page-content">
      <Navigation />
      <ErrorContent />
      <Footer />
    </div>
  );
};

export default Error;
