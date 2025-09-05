import { useContext, useEffect, useState } from "react";
import Correct from "./assets/correct.svg";
import ArrowLeft from "./assets/arrowLeft.svg";
import ArrowRight from "./assets/arrowRigth.svg";
import CallStep from "./assets/callStep.svg";
import discountPrice from "./assets/discount.png";
import "./styles/step.css";
import { Mycontext } from "./App";

function Step({ information }) {
  const { setData, whichStep, data, setWhichStep } = useContext(Mycontext);
  const [positionDot, setPositionDot] = useState("0");

  useEffect(() => {
    switch (whichStep) {
      case 2:
        setPositionDot("calc(36/16*1vw)");
        break;
      case 3:
        setPositionDot("calc(72/16*1vw)");
        break;
      case 4:
        setPositionDot("calc(143/16*1vw)");
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
      console.log(information.chosen);
      return updated;
    });
  }

  return (
    <div className="step">
      <div className="roller">
        <div
          style={{
            width: `${whichStep === 1 ? "25%" : ""} ${
              whichStep === 2 ? "50%" : ""
            } ${whichStep === 3 ? "75%" : ""} ${whichStep === 4 ? "100%" : ""}`,
          }}
        ></div>
        <div
          className="discountStep"
          style={{ display: whichStep === 1 ? "flex" : "none" }}
        >
          <img src={discountPrice} alt="discountIcon" />
          <p>
            <span>32 клиента</span> заказали услугу по акции <span>25%</span>.
            Период скидки ограничен. Осталось всего 6 мест, успевайте заказать.
            <span>Оставьте заявку</span> на получение скидки прямо сейчас.
          </p>
        </div>
      </div>
      <div>
        <h1>{information.title}</h1>
        <div className="chooseStep">
          {information.boxes.map((item, index) => {
            return (
              <button
                className={`${information.chosen === index ? "chosenBtn" : ""}`}
                key={index}
                onClick={() => {
                  Define(index);
                }}
              >
                <div className="correct">
                  <img
                    src={Correct}
                    alt="coorectCion"
                    style={{
                      display: information.chosen === index ? "block" : "none",
                    }}
                  />
                </div>
                <p>{item}</p>
              </button>
            );
          })}
        </div>

        <div className="navigationSteps">
          <button
            onClick={() => {
              if (information.step !== 1) {
                setWhichStep((c) => c - 1);
              }
            }}
          >
            <img src={ArrowLeft} alt="arrowLeftIcon" />
          </button>
          <div className="dots">
            {data.map((item) => {
              return <button key={item.title}></button>;
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
              if (information.step !== 4) {
                setWhichStep((c) => c + 1);
              }
            }}
          >
            <img src={ArrowRight} alt="arrowRightIcon" />
          </button>
        </div>

        <button className="callStep">
          <p>Заказать обратный звонок</p>
          <img src={CallStep} alt="callStepIcon" />
        </button>
      </div>
    </div>
  );
}

export default Step;
