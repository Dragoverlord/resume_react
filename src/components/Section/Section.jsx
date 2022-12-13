import React from "react";


const Section = () => {
  return (
    <div>
      <section>
        <div className="container1" id="Информация">
          <div className="box" id="box-1">
            <span></span>
            <div className="content">
              <h2>Основаная Информация</h2>
              <p>Имя-Нурсултан</p>
              <p>Фамилия-Джетыбаев</p>
              <p>JavaScript Junior</p>
              <p>Возраст-18 лет</p>
              <p>пол-мужской</p>
              <a
                href="https://www.tiktok.com/@dragoverlord?_t=8X4TxLpW1D7&_r=1"
                target="_blank"
              >
                TikTok
              </a>
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content">
              <h2>Хобби</h2>
              <p>Игры и аниме</p>
              <p>Верстка сайтов для себя</p>
              <p>Dota</p>
              <p>Csgo</p>
              <a
                href="https://m.facebook.com/profile.php?id=100049031799661&_rdr"
                target="_blank"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content">
              <h2>Portfolio</h2>
              <a href="https://github.com/Dragoverlord/resume" target="_blank">
                Моя первая работа
              </a>
              <a
                href="https://dragoverlord.github.io/Task-work/"
                target="_blank"
              >
                Моя вторая работа
              </a>
              <a href="#">Моя третия работа</a>
              <a href="https://github.com/Dragoverlord" target="_blank">
                Git Hub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
