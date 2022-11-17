import React, { useState } from "react";
import Plas from "../../../../Assets/Images/HomeContentImg/plas-icon.svg";
export default function AtributPage() {
  const [openInformation, setOpenInformation] = useState(true);
  const [usDrop, setUsDrop] = useState(false);
  const [uzDrop, setUzDrop] = useState(false);
  return (
    <form className="relative">
      <span className="flex items-center absolute -top-6 cursor-pointer right-0 font-medium text-sm text-supportColor">
        <img className="mr-2" src={Plas} alt="IMg plas" width="12" height="12" />
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
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Цена
              <input
                className="py-4 number-inp pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Цена со скидкой
              <input
                className="py-4 number-inp pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Тип продукта
              <select
                defaultValue={"check"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-addProductLinks border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option className="text-addProductLinks" value="chence">
                  Введите Форму продукта
                </option>
              </select>
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Длина
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Ширина
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Высота
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Цвет
              <select
                defaultValue={"check"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-addProductLinks border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option className="text-addProductLinks" value="chence">
                  Синий
                </option>
              </select>
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Вес
              <input
                className="py-4 number-input-l pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Высота
              <input
                className="py-4 number-input-k pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Статус
              <select
                defaultValue={"check"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-addProductLinks border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option className="text-addProductLinks" value="chence">
                  Выберите статус продукта
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
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Цена
              <input
                className="py-4 number-inp pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Цена со скидкой
              <input
                className="py-4 number-inp pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Тип продукта
              <select
                defaultValue={"check"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-addProductLinks border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option className="text-addProductLinks" value="chence">
                  Введите Форму продукта
                </option>
              </select>
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Длина
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Ширина
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Высота
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Цвет
              <select
                defaultValue={"check"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-addProductLinks border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option className="text-addProductLinks" value="chence">
                  Синий
                </option>
              </select>
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Вес
              <input
                className="py-4 number-input-l pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Высота
              <input
                className="py-4 number-input-k pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Статус
              <select
                defaultValue={"check"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-addProductLinks border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option className="text-addProductLinks" value="chence">
                  Выберите статус продукта
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
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Цена
              <input
                className="py-4 number-inp pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Цена со скидкой
              <input
                className="py-4 number-inp pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Тип продукта
              <select
                defaultValue={"check"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-addProductLinks border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option className="text-addProductLinks" value="chence">
                  Введите Форму продукта
                </option>
              </select>
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Длина
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Ширина
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Высота
              <input
                className="py-4 number-input pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Цвет
              <select
                defaultValue={"check"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-addProductLinks border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option className="text-addProductLinks" value="chence">
                  Синий
                </option>
              </select>
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Вес
              <input
                className="py-4 number-input-l pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Высота
              <input
                className="py-4 number-input-k pr-4 relative mt-3 pl-4 border-2 outline-none rounded-xl"
                type="text"
                placeholder="0"
              />
            </label>
          </div>
          <div className="flex items-center mb-6 justify-between">
            <label className="flex flex-col w-addProW font-medium text-base leading-4">
              Статус
              <select
                defaultValue={"check"}
                id="proSelect"
                className="p-selectInp mt-3 w-[100%] rounded-xl appearance-none border-2 border-solid text-addProductLinks border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
              >
                <option className="text-addProductLinks" value="chence">
                  Выберите статус продукта
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
    </form>
  );


}
