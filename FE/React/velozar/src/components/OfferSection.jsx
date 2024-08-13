import bike from "../assets/bike.png";

function OfferSection() {
  return (
    <div className="offer-section" id="offer-section">
      <div className="offer-wrapper">
        <div className="offer-discription">
          <h2>Что мы предлагаем</h2>
          <p>
            В нашей мастерской можно выполнить комплексное техническое
            обслуживание велосипеда, ремонт и настройку всех его узлов,
            шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает
            избежать многих проблем и дорогого ремонта. Все работы выполняем
            качественно и с душой.
          </p>
        </div>
        <img src={bike} alt="the bike" />
      </div>
    </div>
  );
}

export default OfferSection;
