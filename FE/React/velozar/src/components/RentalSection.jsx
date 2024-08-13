import bikes from "../assets/bikes.png";

function RentalSection() {
  return (
    <div className="rental-section" id="rental-section">
      <div className="rental-wrapper">
      <img src={bikes} alt="the bike" />
        <div className="rental-discription">
          <h2>Прокат велосипедов</h2>
          <p>
            У нас вы можете взять на прокат хорошо обслуженные и настроенные
            велосипеды. Как раз мы находимся в прекрасном парке!
          </p>
        </div>
      </div>
    </div>
  );
}

export default RentalSection;
