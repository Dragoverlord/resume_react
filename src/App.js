import React from "react";
import Footer from "./components/Footer/Footer";
import NavbarCustom from "./components/Navbar/Navbar";
import Paralach from "./components/Paralach/Paralach";
import Section from "./components/Section/Section";
import Skills from "./components/Skills/Skills";
import "./App.css";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";

const App = () => {
  
  function idiots() {
    let unoob = "Global Elite = Noobs"
    try {
      console.log(unoob);
    } catch (error) {
      console.log(error);
    }
  }

  idiots()

  return (
    <div>
      <BrowserRouter>
        <Paralach />        
        <NavbarCustom />
        <MainRouter />
        <BurgerMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
