import React, { useState } from "react";
import Plas from "../../../../Assets/Images/HomeContentImg/plas-icon.svg";

export default function AtributPage({
  atributInfo,
  setAtributInfo,
  productBasic,
  imaPage,
  atributPage,
}) {
  const [openInformation, setOpenInformation] = useState(true);
  const [usDrop, setUsDrop] = useState(false);
  const [uzDrop, setUzDrop] = useState(false);

  const resultSubmit = (e) => {
    e.preventDefault();
    setAtributInfo([
      ...atributInfo,
      {
        artibutValues: {
          ru: {
            summ: e.target[0].value,
            saleSum: e.target[1].value,
            typeProducts: e.target[2].value,
            widthPro: e.target[3].value,
            lengProd: e.target[4].value,
            heightPro: e.target[5].value,
            color: e.target[6].value,
            weight: e.target[7].value,
            heightTo: e.target[8].value,
            status: e.target[9].value,
          },
          us: {
            summ: e.target[10].value,
            saleSum: e.target[11].value,
            typeProducts: e.target[12].value,
            widthPro: e.target[13].value,
            lengProd: e.target[14].value,
            heightPro: e.target[15].value,
            color: e.target[16].value,
            weight: e.target[17].value,
            heightTo: e.target[18].value,
            status: e.target[19].value,
          },
          uz: {
            summ: e.target[20].value,
            saleSum: e.target[21].value,
            typeProducts: e.target[22].value,
            widthPro: e.target[23].value,
            lengProd: e.target[24].value,
            heightPro: e.target[25].value,
            color: e.target[26].value,
            weight: e.target[27].value,
            heightTo: e.target[28].value,
            status: e.target[29].value,
          },
        },
      },
    ]);
    atributPage(false);
    imaPage(false);
    productBasic(true);
  };

  return (
    <form onSubmit={resultSubmit} className="relative">
      <span className="flex items-center absolute -top-6 cursor-pointer right-0 font-medium text-sm text-supportColor">
        <img
          className="mr-2"
          src={Plas}
          alt="IMg plas"
          width="12"
          height="12"
        />
        Добавить атрибуть
      </span>
      <div className="border-b-2">
        <div
          onClick={() => setOpenInformation(!openInformation)}
          className="flex items-center justify-between py-6 cursor-pointer"
        >
          <h2 className="font-bold text-lg text-russuanColor">Русский</h2>
          <svg
            className={`${
              openInformation ? "rotate-180 duration-300" : "duration-300"
            }`}
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 7.29053L7 1.29053L1 7.29053"
              stroke="#2B3D91"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          className={`${
            openInformation
              ? "h-auto opacity-1 duration-300 z-50 overflow-auto"
              : "duration-300 overflow-hidden z-10 opacity-0 h-0"
          }`}
        >
          <div className="flex items-center mb-6 justify-between">
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Цена
              <input
                className="py-4 number-inp pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Цена со скидкой
              <input
                className="py-4 number-inp pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Тип продукта
              <select
                defaultValue={"DEFAULT"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-black border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option
                  disabled
                  className="text-addProductLinks"
                  value="DEFAULT"
                >
                  Введите Форму продукта
                </option>
                <option className="text-black" value="melkiy">
                  Melkiy
                </option>
              </select>
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex flex-col w-[32%] w-addProW font-medium text-base leading-4">
              Длина
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Ширина
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Высота
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
          </div>
          <div className="flex  items-center mb-6 justify-between">
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Цвет
              <select
                defaultValue={"DEFAULT"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-black border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option
                  disabled
                  className="text-addProductLinks"
                  value="DEFAULT"
                >
                  Синий
                </option>
                <option className="text-black" value="DEFAULT">
                  green
                </option>
              </select>
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Вес
              <input
                className="py-4 number-input-l pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Высота
              <input
                className="py-4 number-input-k pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Статус
              <select
                defaultValue={"DEFAULT"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-black border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option
                  disabled
                  className="text-addProductLinks"
                  value="DEFAULT"
                >
                  Выберите статус продукта
                </option>
                <option className="text-black" value="DEFAULT">
                  Рекомендуем
                </option>
                <option className="text-black" value="DEFAULT">
                  Рекомендуем
                </option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div className="border-b-2">
        <div
          onClick={() => setUsDrop(!usDrop)}
          className="flex items-center justify-between py-6 cursor-pointer"
        >
          <h2 className="font-bold text-lg text-russuanColor">Англиский</h2>
          <svg
            className={`${usDrop ? "rotate-180 duration-300" : "duration-300"}`}
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 7.29053L7 1.29053L1 7.29053"
              stroke="#2B3D91"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          className={`${
            usDrop
              ? "h-auto opacity-1 duration-300 z-50 overflow-auto"
              : "duration-300 overflow-hidden z-10 opacity-0 h-0"
          }`}
        >
          <div className="flex items-center mb-6 justify-between">
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Цена
              <input
                className="py-4 number-inp pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Цена со скидкой
              <input
                className="py-4 number-inp pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Тип продукта
              <select
                defaultValue={"DEFAULT"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-black border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option
                  disabled
                  className="text-addProductLinks"
                  value="DEFAULT"
                >
                  Введите Форму продукта
                </option>
                <option className="text-black" value="type product">
                  type product
                </option>
              </select>
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Длина
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Ширина
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Высота
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Цвет
              <select
                defaultValue={"DEFAULT"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-black border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option
                  disabled
                  className="text-addProductLinks"
                  value="DEFAULT"
                >
                  Синий
                </option>
                <option className="text-black" value="green">
                  GREEN
                </option>
              </select>
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Вес
              <input
                className="py-4 number-input-l pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Высота
              <input
                className="py-4 number-input-k pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Статус
              <select
                defaultValue={"DEFAULT"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-black border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option
                  disabled
                  className="text-addProductLinks"
                  value="DEFAULT"
                >
                  Выберите статус продукта
                </option>
                <option className="text-black" value="рекомендуем">
                  Рекомендуем
                </option>
                <option className="text-black" value="рекомендуем">
                  Рекомендуем
                </option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div className="border-b-2">
        <div
          onClick={() => setUzDrop(!uzDrop)}
          className="flex items-center justify-between py-6 cursor-pointer"
        >
          <h2 className="font-bold text-lg text-russuanColor">Узбекский</h2>
          <svg
            className={`${uzDrop ? "rotate-180 duration-300" : "duration-300"}`}
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 7.29053L7 1.29053L1 7.29053"
              stroke="#2B3D91"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          className={`${
            uzDrop
              ? "h-auto opacity-1 duration-300 z-50 overflow-auto"
              : "duration-300 overflow-hidden z-10 opacity-0 h-0"
          }`}
        >
          <div className="flex items-center mb-6 justify-between">
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Цена
              <input
                className="py-4 number-inp pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Цена со скидкой
              <input
                className="py-4 number-inp pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Тип продукта
              <select
                defaultValue={"DEFAULT"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-black border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option
                  disabled
                  className="text-addProductLinks"
                  value="DEFAULT"
                >
                  Введите Форму продукта
                </option>
                <option className="text-black" value="DEFAULT">
                  Метпллическим каркасом
                </option>
                <option className="text-black" value="DEFAULT">
                  Метпллическим каркасом
                </option>
              </select>
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Длина
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Ширина
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Высота
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Цвет
              <select
                defaultValue={"DEFAULT"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-black border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option
                  disabled
                  className="text-addProductLinks"
                  value="chence"
                >
                  Синий
                </option>
                <option className="text-black" value="chence">
                  Синий
                </option>
                <option className="text-black" value="chence">
                  Синий
                </option>
              </select>
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Вес
              <input
                className="py-4 number-input-l pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Высота
              <input
                className="py-4 number-input-k pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex w-[32%] flex-col w-addProW font-medium text-base leading-4">
              Статус
              <select
                defaultValue={"DEFAULT"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-black border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option
                  disabled
                  className="text-addProductLinks"
                  value="DEFAULT"
                >
                  Выберите статус продукта
                </option>
                <option className="text-BLACK" value="Рекомендуем">
                  Рекомендуем
                </option>
                <option className="text-BLACK" value="Рекомендуем">
                  Рекомендуем
                </option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div className="flex mt-6 pb-8 items-center justify-center space-x-5">
        <button
          className="py-3 bg-resetBtn rounded-2xl w-submitBtnsWidth text-russuanColor font-bold text-lg"
          type="reset"
        >
          Отменить
        </button>
        <button
          className="py-3 text-white rounded-2xl w-submitBtnsWidth bg-submitBtnBg font-bold text-lg"
          type="submit"
        >
          Cледующий
        </button>
      </div>
      <div className="">
        <div className=""></div>
      </div>
    </form>
  );
}
