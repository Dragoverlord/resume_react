import React from "react";

const Footer = () => {

  return (
    <div>
      <main>
        <footer>
          <div className="footer" id="Соц.сети">
            <div className="icons">
              <a href="https://www.instagram.com/dragoverlord/" target="_blank">
                <div className="layer">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fab fa-instagram"></span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/channel/UCEpNAthh72tnpPVoSnRUr7A"
                target="_blank"
              >
                <div className="layer">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fab fa-youtube"></span>
                </div>
              </a>
            </div>
            <div className="networks" id="networks-1">
              <h5>networks</h5>
              <h6>0 (702) 238-138</h6>
              <h6>Telegram</h6>
              <h6>WhatsApp</h6>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Footer;
