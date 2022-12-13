import React from "react";
import { Routes , Route } from 'react-router-dom';
import NavbarCustom from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import Skills from "./components/Skills/Skills";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/Section" element={<Section />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="#" element={<NavbarCustom/>} />
      </Routes> 
    </div>
  );
};

export default MainRouter;
