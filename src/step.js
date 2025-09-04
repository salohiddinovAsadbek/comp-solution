import Correct from "./assets/correct.svg";
import "./styles/step.css";

function Step() {
  return (
    <div className="step">
      <div className="roller">
        <div></div>
      </div>
      <div>
        <h1>Выберите свое устройство</h1>
        <div className="chooseStep">
          <button>
            <div>
              <img src={Correct} alt="coorectCion" />
            </div>
            <p>ПК</p>
          </button>
          <button>
            <div>
              <img src={Correct} alt="coorectCion" />
            </div>
            <p>Ноутбук</p>
          </button>
          <button>
            <div>
              <img src={Correct} alt="coorectCion" />
            </div>
            <p>Моноблок</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step;
