import Main from "./Main";
import Modal from "./modal";
import "./styles/styles.css";
import { createContext, useState } from "react";

export const Mycontext = createContext();

function App() {
  const alldata = [
    {
      title: "Выберите свое устройство",
      step: 1,
      boxes: ["ПК", "Ноутбук", "Моноблок"],
      chosen: false,
    },
    {
      title: "В чем заключается проблема?",
      step: 2,
      boxes: [
        "Тормозит",
        "Не видит устройства",
        "Не загружается",
        "Нужна установка ПО",
        "Нужна установка ОС",
        "Перегревается",
        "Вирусы",
        "Нужна чистка",
        "Не ловит сеть",
        "Нет изображения",
        "Нужен апгрейд",
        "Другая проблема",
      ],
      chosen: false,
    },
    {
      title: "Какой возраст вашего ноутбука?",
      step: 3,
      boxes: ["Меньше года", "1-2 года", "от 3 до 9 лет ", "Старьше 10 лета"],
    },
    {
      title: "Когда вам удобнее принять мастера?",
      step: 4,
      boxes: ["с 10 до 12", "с 12 до 16", "с 16 до 17", "с 17 до 21"],
    },
    {
      title: "Спасибо за ваши ответы!",
      step: 5,
      boxes: [],
    },
    {},
  ];

  const [whichStep, setWhichStep] = useState(1);
  const [data, setData] = useState(alldata);
  const [isModalOpen, setModalOpen] = useState(0);

  return (
    <Mycontext.Provider
      value={{
        alldata,
        whichStep,
        setWhichStep,
        setData,
        data,
        isModalOpen,
        setModalOpen,
      }}
    >
      <Main />
      {isModalOpen !== 0 ? <Modal /> : ""}
    </Mycontext.Provider>
  );
}

export default App;
