import React from "react";

const BurgerMenu = () => {
  return (
    <div>
      {/*  burger menu start */}
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="menu-items">
              <ul>
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#Информация">Информация</a>
                </li>
                <li>
                  <a href="#Соц.сети">Соц.сети</a>
                </li>
                <li>
                  <a href="#networks-1">Контакты</a>
                </li>
                <li>
                  <a href="#skills">Скиллы</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/*  burger menu end  */}
    </div>
  );
};

export default BurgerMenu;
