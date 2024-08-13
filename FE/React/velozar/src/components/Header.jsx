import logo from "../assets/Logo.png";
import Dino from "../assets/dino.png";

function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <img className="logo" src={logo} alt="VELOZAR LOGO" />
        <ul className="nav">
          <a href="#about-us">О нас</a>
          <a href="#service-section">Услуги</a>
          <a href="#rental-section">Аренда</a>
        </ul>
        <button className="header_button">Связаться</button>
      </div>

      <div className="about_us" id="about-us">
        <div className="wrapper">
          <div className="discription">
            <h2>Веломастерская “Велозар”</h2>
            <p>
              Мы, мастера веломастерской «Велозар», как раз те самые счастливые
              люди, которые смогли превратить свое увлечение и хобби в
              профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный
              друг приносил Вам только радость и удовольствие от езды.
            </p>
          </div>
          <img src={Dino} alt="dino on the bike" />
        </div>
      </div>

    </div>
  );
}
export default Header;
