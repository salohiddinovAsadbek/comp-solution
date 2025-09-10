import { useState } from "react";
import "./styles/modal.css";

function Modal() {
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
    <div className="modal">
      <div>
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
          />
          <button className="phoneFieldBtn">Перезвоните мне!</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
