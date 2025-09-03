import MainLogo from "./assets/main logo.svg";
import { NavLink } from "react-router-dom";
import "./styles/header.css";
import BackLeft from "./assets/headerBack Left.png";
import BackRight from "./assets/HeaderBack right.png";
import BackRightMedia from "./assets/headerbackrightMedia.png";
import Call from "./assets/call.svg";
import Discount from "./assets/discount.svg";
import Recall from "./assets/recall.svg";

function Main() {
  return (
    <div>
      <header className="header">
        <div>
          <NavLink className="mainLogo">
            <img src={MainLogo} alt="mainLogo" />
          </NavLink>
          <h1>Как мы можем помочь вашей технике?</h1>
          <p>
            Ответьте на уточняющие вопросы для оформления заявки и получите 15%
            скидку
          </p>
          <div className="headerNavigation">
            <div>
              <img src={Call} alt="callIcon" />
              <p>Звонок</p>
            </div>
            <div>
              <img src={Discount} alt="discountIcon" />
              <p>Получить скидку</p>
            </div>
            <div>
              <img src={Recall} alt="recallIcon" />
              <p>Обратный звонок</p>
            </div>
          </div>
          <button className="startHeaderBtn">Начать</button>
          <p className="discountDescription">
            Оставить заявку на <NavLink> &nbsp; скидку 25%</NavLink>
          </p>
          <img src={BackLeft} alt="headerBackgroundLeft" />
        </div>
        <img src={BackRight} alt="headerBackRight" />
        <img src={BackRightMedia} alt="headerBackRight" id="headerBackMedia" />
      </header>
    </div>
  );
}

export default Main;
