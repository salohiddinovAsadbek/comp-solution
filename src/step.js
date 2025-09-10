import { useContext, useEffect, useState } from "react";
import Correct from "./assets/correct.svg";
import ArrowLeft from "./assets/arrowLeft.svg";
import ArrowRight from "./assets/arrowRigth.svg";
import CallStep from "./assets/callStep.svg";
import discountPrice from "./assets/discount.png";
import "./styles/step.css";
import { Mycontext } from "./App";

function Step({ information }) {
  const { setData, whichStep, data, setWhichStep, setModalOpen } =
    useContext(Mycontext);
  const [positionDot, setPositionDot] = useState("0");
  const [userPhone, setUserPhone] = useState("");

  useEffect(() => {
    const vw = window.innerWidth / 100;

    switch (whichStep) {
      case 2:
        setPositionDot(
          `${vw > 4.14 ? `calc(36/16*1vw)` : `calc(36/4.14*1vw)`}`
        );
        break;
      case 3:
        setPositionDot(
          `${vw > 4.14 ? `calc(72/16*1vw)` : `calc(72/4.14*1vw)`}`
        );

        break;
      case 4:
        setPositionDot(
          `${vw > 4.14 ? `calc(143/16*1vw)` : `calc(143/4.14*1vw)`}`
        );
        break;
      case 5:
        setPositionDot(
          `${vw > 4.14 ? `calc(143/16*1vw)` : `calc(143/4.14*1vw)`}`
        );
        break;
      default:
        setPositionDot("0");
        break;
    }
  }, [whichStep]);

  function Define(number) {
    setData((c) => {
      const updated = c.map((item) =>
        item.step === whichStep ? { ...item, chosen: number } : item
      );
      return updated;
    });
  }

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
    <div className="step">
      <div className="roller">
        <div
          style={{
            width: `${whichStep === 1 ? "25%" : ""} ${
              whichStep === 2 ? "40%" : ""
            } ${whichStep === 3 ? "65%" : ""} ${whichStep === 4 ? "85%" : ""} ${
              whichStep === 5 ? "100%" : ""
            } `,
          }}
        ></div>
        <div
          className="discountStep"
          style={{ display: whichStep === 1 ? "flex" : "none" }}
        >
          <img src={discountPrice} alt="discountIcon" loading="lazy" />
          <p>
            <span>32 клиента</span> заказали услугу по акции <span>25%</span>.
            Период скидки ограничен. Осталось всего 6 мест, успевайте заказать.
            <span>Оставьте заявку</span> на получение скидки прямо сейчас.
          </p>
        </div>
      </div>
      <div>
        <h1>{information.title}</h1>
        {whichStep !== 5 ? (
          <div className="chooseStep">
            {information.boxes?.map((item, index) => {
              return (
                <button
                  className={`${
                    information.chosen === index ? "chosenBtn" : ""
                  }`}
                  key={item + index}
                  onClick={() => {
                    Define(index);
                  }}
                >
                  <div className="correct">
                    <img
                      src={Correct}
                      alt="coorectCion"
                      style={{
                        display:
                          information.chosen === index ? "block" : "none",
                      }}
                      loading="lazy"
                    />
                  </div>
                  <p>{item}</p>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="step5">
            <h2>
              Стоимость решения вашей проблемы составит от <span>150 ₽</span>
            </h2>
            <p>
              Точная стоимость работ зависит от технических характеристик модели
              вашей техники и вида поломки, которую определит мастер
            </p>
            <p>
              При оформлении заявки вы также получаете &nbsp;
              <span>15% скидку!</span>
            </p>
            <form id="formStep5">
              <h2>Оставьте свой номер телефона</h2>

              <div>
                <input
                  type="text"
                  placeholder="+7 (___) ___ - __ - __"
                  value={userPhone}
                  onChange={(e) => {
                    UserPhone(e.target.value);
                  }}
                  name="phoneNUmberStep5"
                />
                <button>ОТПРАВИТЬ</button>
              </div>
              <p>Наш специалист свяжется с вами уже через 2 минуты</p>
            </form>
          </div>
        )}
        <div className="navigationSteps">
          <button
            onClick={() => {
              if (information.step !== 1) {
                setWhichStep((c) => c - 1);
              }
            }}
          >
            <img src={ArrowLeft} alt="arrowLeftIcon" loading="lazy" />
          </button>
          <div className="dots">
            {data.map((item, index) => {
              return (
                <button
                  key={`${item?.step ?? "step"}-${
                    item?.title ?? "title"
                  }-${index}`}
                  name={`${item?.step} + 0`}
                ></button>
              );
            })}
            <div
              className="currentDot"
              style={{
                left: positionDot,
              }}
            ></div>
          </div>
          <button
            onClick={() => {
              if (information.step !== 5) {
                setWhichStep((c) => c + 1);
              }
            }}
          >
            <img src={ArrowRight} alt="arrowRightIcon" loading="lazy" />
          </button>
        </div>

        <button
          className="callStep"
          onClick={() => {
            setModalOpen(2);
            document.body.style.overflow = "hidden";
          }}
        >
          <p>Заказать обратный звонок</p>
          <img src={CallStep} alt="callStepIcon" loading="lazy" />
        </button>
      </div>
    </div>
  );
}

export default Step;
