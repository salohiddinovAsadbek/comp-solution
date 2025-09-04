import MainLogo from "./assets/main logo.svg";
import { NavLink } from "react-router-dom";
import "./styles/header.css";
import "./styles/whattodo.css";
import "./styles/footer.css";
import BackLeft from "./assets/headerBack Left.png";
import BackRight from "./assets/HeaderBack right.png";
import BackRightMedia from "./assets/headerbackrightMedia.png";
import Call from "./assets/call.svg";
import Discount from "./assets/discount.svg";
import Recall from "./assets/recall.svg";
import Rocket from "./assets/rocket.svg";
import Guarantee from "./assets/guarantee.svg";
import HotPrice from "./assets/hot-sale.svg";
import Computer from "./assets/computer.svg";
import WhatToDoBack from "./assets/whattodorigth.png";
import Circle from "./assets/circleWhattodo.png";
import CircleBigger from "./assets/circlebiggerwhattodo.png";
import FooterLogo from "./assets/footerLogo.png";
import Step from "./step";

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
      <main>
        <Step />
        <div className="whatToDo">
          <div>
            <h1>Что еще мы сделаем для вас?</h1>
          </div>
          <div className="whatToDoRight">
            <div>
              <img src={Rocket} alt="rocket" />
              <p>Оперативно приедем за 1 час по Москве и области</p>
            </div>
            <div>
              <img src={Computer} alt="computer" />
              <p>Решим проблему в тот же день</p>
            </div>
            <div>
              <img src={Guarantee} alt="guarantee" />
              <p>Оформим фирменную гарантию на 1 год</p>
            </div>
            <div>
              <img src={HotPrice} alt="hot-price" />
              <p>После ремонта навсегда закрепим 10% скидку!</p>
            </div>
            <img
              src={WhatToDoBack}
              alt="backgroundimage"
              className="whatToDoBack
              "
            />
            <img src={Circle} alt="circle" className="circle1" />
            <img src={CircleBigger} alt="circlebigger" className="circle2" />
          </div>
        </div>
      </main>
      <footer>
        <img src={FooterLogo} alt="footerLogo" />
        <div>
          <h1>Оставьте свой номер телефона</h1>
          <form action="">
            <input type="text" placeholder="Телефон :" />
            <button>Отправить</button>
          </form>
          <p>Наш специалист свяжется с вами уже через 2 минуты</p>
        </div>
      </footer>
    </div>
  );
}

export default Main;
