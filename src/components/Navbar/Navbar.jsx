import React from "react";
import { Link } from "react-router-dom";

const NavbarCustom = () => {
  return (
    <div>
      <header>
        <nav className="container5" id="Home">
          <div className="container2">
            <div className="card">
              <div className="icon">
                <img src="https://i.pinimg.com/236x/96/79/13/967913c082334b1fbf674d0c5de5f743.jpg" />
              </div>
              <div className="icon back">
                <i id="i" className="fab fa-tiktok" aria-hidden="true"></i>
                <i id="i" className="fab fa-youtube" aria-hidden="true"></i>
                <i id="i" className="fab fa-instagram" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="links">
              <Link to="/Section">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Информация
              </Link>
              <Link to="/Skills">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Скиллы
              </Link>
              <Link to="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                опыт
              </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavbarCustom;
