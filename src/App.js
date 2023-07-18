import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import LogementDetails from "./pages/CardsContent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Error" element={<Error />}></Route>
        <Route path="/logement/:id" element={<LogementDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
