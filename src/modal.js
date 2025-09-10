import { useContext, useState } from "react";
import "./styles/modal.css";
import { Mycontext } from "./App";

function Modal() {
  const [userPhone, setUserPhone] = useState();
  const { setModalOpen, isModalOpen } = useContext(Mycontext);

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
    <div
      className="modal"
      onClick={() => {
        setModalOpen(0);
        document.body.style.overflow = "auto";
      }}
    >
      {isModalOpen === 1 ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <p className="discountModal">
            <span>25% скидка на услугу.</span>
            <span>До конца акции осталось 5 часов 10 минут.</span>
          </p>
          <div className="phoneField">
            <input
              value={userPhone}
              type="text"
              onChange={(e) => {
                UserPhone(e.target.value);
              }}
              placeholder="Введите телефон"
            />
            <button className="phoneFieldBtn">Перезвоните мне!</button>
          </div>
        </div>
      ) : (
        ""
      )}

      {isModalOpen === 2 ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalMinute"
        >
          <p>
            Перезвоним вам в течение <span>3 минут</span>
          </p>
          <div className="phoneField">
            <input
              value={userPhone}
              type="text"
              onChange={(e) => {
                UserPhone(e.target.value);
              }}
              placeholder="Введите телефон"
            />
            <button className="phoneFieldBtn">Перезвоните мне!</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Modal;
