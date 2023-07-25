import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Logements from "./pages/Logements";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/error" element={<Error showNavAndFooter={false} />} />
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/logement/:id" element={<Logements />} />
        <Route path="/*" element={<Error showNavAndFooter={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
