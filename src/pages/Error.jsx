import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ErrorContent from "../components/ErrorContent";

const Error = ({ showNavAndFooter }) => {
  return (
    <div>
      {showNavAndFooter && <Navigation />}
      <div className="page-content">
        <ErrorContent />
      </div>

      {showNavAndFooter && <Footer />}
    </div>
  );
};

export default Error;
