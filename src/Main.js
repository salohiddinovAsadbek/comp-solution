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
import { useContext, useState } from "react";
import { Mycontext } from "./App";

function Main() {
  const { whichStep, data, setModalOpen, isModalOpen } = useContext(Mycontext);
  const [userPhone, setUserPhone] = useState();

  function UserPhone(number) {
    let numbers = "";
    let value = number.split("");

    for (let i = 0; i < number.length; i++) {
      if (Number(value[i]) >= 0 && Number(value[i]) <= 9) {
        numbers += value[i];
      }
    }

    setUserPhone(numbers);
  }

  return (
    <div>
      <header className="header">
        <div>
          <NavLink className="mainLogo">
            <img src={MainLogo} alt="mainLogo" loading="lazy" />
          </NavLink>
          <h1>Как мы можем помочь вашей технике?</h1>
          <p>
            Ответьте на уточняющие вопросы для оформления заявки и получите 15%
            скидку
          </p>
          <div className="headerNavigation">
            <div>
              <img src={Call} alt="callIcon" loading="lazy" />
              <p>Звонок</p>
            </div>
            <div
              onClick={() => {
                setModalOpen(1);
                document.body.style.overflow = "hidden";
              }}
            >
              <img src={Discount} alt="discountIcon" loading="lazy" />
              <p>Получить скидку</p>
            </div>
            <div
              onClick={() => {
                setModalOpen(2);
                document.body.style.overflow = "hidden";
              }}
            >
              <img src={Recall} alt="recallIcon" loading="lazy" />
              <p>Обратный звонок</p>
            </div>
          </div>
          <button
            className="startHeaderBtn"
            onClick={() => {
              setModalOpen(1);
              console.log("ishladi");
              document.body.style.overflow = "hidden";
            }}
          >
            Начать
          </button>
          <p className="discountDescription">
            Оставить заявку на <NavLink> &nbsp; скидку 25%</NavLink>
          </p>
          <img src={BackLeft} alt="headerBackgroundLeft" loading="lazy" />
        </div>
        <img src={BackRight} alt="headerBackRight" loading="lazy" />
        <img
          src={BackRightMedia}
          alt="headerBackRight"
          id="headerBackMedia"
          loading="lazy"
        />
      </header>
      <main>
        <Step information={data[whichStep - 1]} />
        <div className="whatToDo">
          <div>
            <h1>Что еще мы сделаем для вас?</h1>
          </div>
          <div className="whatToDoRight">
            <div>
              <img src={Rocket} alt="rocket" loading="lazy" />
              <p>Оперативно приедем за 1 час по Москве и области</p>
            </div>
            <div>
              <img src={Computer} alt="computer" loading="lazy" />
              <p>Решим проблему в тот же день</p>
            </div>
            <div>
              <img src={Guarantee} alt="guarantee" loading="lazy" />
              <p>Оформим фирменную гарантию на 1 год</p>
            </div>
            <div>
              <img src={HotPrice} alt="hot-price" loading="lazy" />
              <p>После ремонта навсегда закрепим 10% скидку!</p>
            </div>
            <img
              src={WhatToDoBack}
              alt="backgroundimage"
              className="whatToDoBack
              "
              loading="lazy"
            />
            <img src={Circle} alt="circle" className="circle1" loading="lazy" />
            <img
              src={CircleBigger}
              alt="circlebigger"
              className="circle2"
              loading="lazy"
            />
          </div>
        </div>
      </main>
      <footer>
        <img src={FooterLogo} alt="footerLogo" loading="lazy" />
        <div>
          <h1>Оставьте свой номер телефона</h1>
          <form action="">
            <input
              type="text"
              placeholder="Телефон :"
              name="phoneNumber"
              onChange={(e) => {
                UserPhone(e.target.value);
              }}
              value={userPhone}
            />
            <button>Отправить</button>
          </form>
          <p>Наш специалист свяжется с вами уже через 2 минуты</p>
        </div>
      </footer>
    </div>
  );
}

export default Main;
