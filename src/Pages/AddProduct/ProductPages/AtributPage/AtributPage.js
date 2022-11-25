import React, { useEffect, useRef, useState } from "react";
import Plas from "../../../../Assets/Images/HomeContentImg/plas-icon.svg";
import { Modal } from "../../../../components/Modal/Modal";
import DelteModal from "../../../../Assets/Images/HomeContentImg/deleteModal.svg";
import DropDown from "../../../../BaseComponents/DropDown/DropDown";
import DropImg from "../../../../Assets/Images/HomeContentImg/Drop.svg";
import axios from "axios";
const env = process.env.REACT_APP_ALL_API;
export default function AtributPage({
  atributInfo,
  setAtributInfo,
  productBasic,
  imaPage,
  atributPage,
  resultSubmit,
}) {
  const [showModal, setShowModal] = useState(false);
  const [openAtributes, setOpenAtributes] = useState(true);
  const [enOpenAtributes, setEnOpenAtributes] = useState(false);
  const [uzOpenAtributes, setUzOpenAtributes] = useState(false);
  // get states

  const [ruTypeProduct, setRuTypeProduct] = useState([]);
  const [status, setStatus] = useState([]);
  const [addAtribut, setAddAtribut] = useState([]);

  // get states
  const token = JSON.parse(window.localStorage.getItem("token"));
  const atributClicked = () => {
    setOpenAtributes(!openAtributes);
    setEnOpenAtributes(false);
    setUzOpenAtributes(false);
  };
  const usAtributClicked = () => {
    setEnOpenAtributes(!enOpenAtributes);
    setOpenAtributes(false);
    setUzOpenAtributes(false);
  };
  const uzAtributClicked = () => {
    setUzOpenAtributes(!uzOpenAtributes);
    setOpenAtributes(false);
    setEnOpenAtributes(false);
  };

  const onSubmit = (evt) => {
    console.log(evt);
    evt.preventDefault();
    resultSubmit(true);
    atributPage(true);
    imaPage(false);
    productBasic(false);
    setAtributInfo([
      ...atributInfo,
      {
        atributInfos: {
          ru: {
            ruAtrPrice: evt.target[0].value,
            ruAtrPriceSale: evt.target[1].value,
            ruAtrType: evt.target[2].value,
            ruStatus: evt.target[3].value,
          },
          us: {
            usAtrPrice: evt.target[4].value,
            usAtrPriceSale: evt.target[5].value,
            usAtrType: evt.target[6].value,
            usColor: evt.target[7].value,
            usStatus: evt.target[8].value,
          },
          uz: {
            uzAtrPrice: evt.target[9].value,
            uzAtrPriceSale: evt.target[10].value,
            uzAtrType: evt.target[11].value,
          },
        },
      },
    ]);
  };
  //type product get start
  useEffect(() => {
    axios
      .get(`${env}categories/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setRuTypeProduct(data.data));
  }, [token]);
  //type product get end

  //status get start
  useEffect(() => {
    axios
      .get(`${env}status-products/getAll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setStatus(data.data));
  }, [token]);
  //status get end

  //addAtribut get start
  useEffect(() => {
    axios
      .get(`${env}attributes/attributes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setAddAtribut(data.data));
  }, [token]);

  //matrial get end
  const [addedMaterial, setAddedMaterial] = useState([]);
  useEffect(() => {
    axios
      .get(`${env}categories/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setAddedMaterial(data.data));
  }, [token]);
  // create Atribbut submit form start
  const addAtributSelect = useRef();
  const [sizeInp, setSizeInp] = useState([]);
  const [selectAtribut, setSelectAtribut] = useState([]);
  const [catchValue, setCatchValue] = useState("");
  function handleCatch(evt) {
    setCatchValue(evt.target.value);
  }
  const createArtibut = (evt) => {
    evt.preventDefault();
    setShowModal(false);
    if (addAtributSelect.current.value === "Размер") {
      setSizeInp([
        ...sizeInp,
        {
          ru: {
            labelName: "Размер",
            inpType: "number",
            placeholder: "0",
          },
        },
      ]);
    } //id berib qoyish esingdan chiqmasin Nurillo
    else if (addAtributSelect.current.value === "Цвет") {
      setSizeInp([
        ...sizeInp,
        {
          ru: {
            labelName: "Цвет",
            inpType: "text",
            placeholder: "Выберите цвет",
          },
        },
      ]);
    } else if (addAtributSelect.current.value === "Материал") {
      setSelectAtribut([
        ...selectAtribut,
        {
          ru: {
            labelName: "Материал",
          },
        },
      ]);
    }
  };
  // create Atribbut submit form end
  return (
    <div className="relative">
      <span
        onClick={() => setShowModal(true)}
        className="flex items-center absolute -top-6 cursor-pointer right-0 font-medium text-sm text-supportColor"
      >
        <img
          className="mr-2"
          src={Plas}
          alt="IMg plas"
          width="12"
          height="12"
        />
        Добавить атрибуть
      </span>
      <div>
        <form onSubmit={onSubmit}>
          <DropDown
            downClick={atributClicked}
            dropName={"Русский"}
            wDrop={12}
            hdrop={9}
            imgURL={DropImg}
            imgAlt={"Drop img"}
            rotateDelete={
              openAtributes
                ? "-rotate-180 duration-300"
                : "-rotate-0 duration-300"
            }
          >
            <div
              className={`${
                openAtributes
                  ? "h-auto overflow-auto pb-2"
                  : "h-0 overflow-hidden"
              } duration-300`}
            >
              <div className="flex items-center justify-between flex-wrap">
                <label className="flex flex-col w-[32%]">
                  Цена
                  <input
                    className="outline-none inline-block mt-3 pl-4 rounded-lg border h-12  "
                    placeholder="0"
                    type="number"
                  />
                </label>
                <label className="flex flex-col  w-[32%]">
                  Цена со скидкой
                  <input
                    className="outline-none inline-block mt-3 pl-4 rounded-lg border h-12 "
                    placeholder="0"
                    type="text"
                  />
                </label>
                <label className="flex flex-col w-[32%]">
                  Тип продукта
                  <select
                    defaultValue={"default"}
                    className="outline-none mt-3 pl-4 rounded-lg border h-12 "
                  >
                    <option
                      value="default"
                      className="text-slate-500"
                      disable="true"
                    >
                      Введите Форму продукта
                    </option>
                    {ruTypeProduct.length &&
                      ruTypeProduct.map((item) => (
                        <option key={item.id}>{item.category_ru}</option>
                      ))}
                  </select>
                </label>
                <label className="flex flex-col w-[32%] mt-6">
                  Статус
                  <select
                    defaultValue={"default"}
                    className="outline-none mt-3 pl-4 rounded-lg border h-12 "
                  >
                    <option disable="true" value="default">
                      Выберите статус продукта
                    </option>
                    {status.length &&
                      status.map((item) => (
                        <option key={item.id}>{item.status_ru}</option>
                      ))}
                  </select>
                </label>
                {sizeInp.length > 0 &&
                  sizeInp.map((item) => (
                    <label className="flex flex-col w-[32%] mt-6">
                      {item.ru.labelName}
                      <input
                        className="outline-none mt-3 pl-4 rounded-lg border h-12"
                        type={item.ru.inpType}
                        placeholder={item.ru.placeholder}
                      />
                    </label>
                  ))}
                {selectAtribut.length > 0 &&
                  selectAtribut.map((item) => (
                    <label className="w-[32%] h-12">
                      {item.ru.labelName}
                      <select
                        onChange={handleCatch}
                        className="outline-none mt-1.5 pl-4 w-full rounded-lg border h-12"
                      >
                        {addedMaterial.length > 0 &&
                          addedMaterial.map((item) => (
                            <option key={item.id}>{item.category_ru}</option>
                          ))}
                      </select>
                    </label>
                  ))}
              </div>
            </div>
          </DropDown>
          <DropDown
            downClick={usAtributClicked}
            dropName={"Англиский"}
            wDrop={12}
            hdrop={9}
            imgURL={DropImg}
            imgAlt={"Drop img"}
            rotateDelete={
              enOpenAtributes
                ? "-rotate-180 duration-300"
                : "-rotate-0 duration-300"
            }
          >
            <div
              className={`${
                enOpenAtributes ? "h-auto overflow-auto" : "h-0 overflow-hidden"
              } duration-300`}
            >
              <div className="flex items-center justify-between flex-wrap">
                <label className="flex flex-col w-[32%]">
                  Цена
                  <input
                    className="outline-none inline-block mt-3 pl-4 rounded-lg border h-12  "
                    placeholder="0"
                    type="text"
                  />
                </label>
                <label className="flex flex-col  w-[32%]">
                  Цена со скидкой
                  <input
                    className="outline-none inline-block mt-3 pl-4 rounded-lg border h-12 "
                    placeholder="0"
                    type="text"
                  />
                </label>
                <label className="flex flex-col w-[32%]">
                  Тип продукта
                  <select
                    defaultValue={"default"}
                    className="outline-none mt-3 pl-4 rounded-lg border h-12 "
                  >
                    <option disable="true" value="default">
                      Введите Форму продуктаs
                    </option>
                    {ruTypeProduct.length &&
                      ruTypeProduct.map((item) => (
                        <option key={item.id}>{item.category_en}</option>
                      ))}
                  </select>
                </label>
                <label className="flex flex-col w-[32%] mt-6">
                  Статус
                  <select
                    defaultValue={"default"}
                    className="outline-none mt-3 pl-4 rounded-lg border h-12 "
                  >
                    <option disable="true" value="default">
                      Выберите статус продукта
                    </option>
                    {status.length &&
                      status.map((item) => (
                        <option key={item.id}>{item.status_en}</option>
                      ))}
                  </select>
                </label>
                {sizeInp.length > 0 &&
                  sizeInp.map((item) => (
                    <label className="flex flex-col w-[32%] mt-6">
                      {item.ru.labelName}
                      <input
                        className="outline-none mt-3 pl-4 rounded-lg border h-12"
                        type={item.ru.inpType}
                        placeholder={item.ru.placeholder}
                      />
                    </label>
                  ))}
                {selectAtribut.length > 0 &&
                  selectAtribut.map((item) => (
                    <label className="w-[32%] h-12">
                      {item.ru.labelName}
                      <select className="outline-none mt-1.5 pl-4 w-full rounded-lg border h-12">
                        {addedMaterial.length > 0 &&
                          addedMaterial.map((item) => (
                            <option key={item.id}>{item.category_en}</option>
                          ))}
                      </select>
                    </label>
                  ))}
              </div>
            </div>
          </DropDown>
          <DropDown
            downClick={uzAtributClicked}
            dropName={"Узбекский"}
            wDrop={12}
            hdrop={9}
            imgURL={DropImg}
            imgAlt={"Drop img"}
            rotateDelete={
              uzOpenAtributes
                ? "-rotate-180 duration-300"
                : "-rotate-0 duration-300"
            }
          >
            <div
              className={`${
                uzOpenAtributes ? "h-auto overflow-auto" : "h-0 overflow-hidden"
              } duration-300`}
            >
              <div className="flex items-center justify-between flex-wrap">
                <label className="flex flex-col w-[32%]">
                  Цена
                  <input
                    className="outline-none inline-block mt-3 pl-4 rounded-lg border h-12  "
                    placeholder="0"
                    type="text"
                  />
                </label>
                <label className="flex flex-col  w-[32%]">
                  Цена со скидкой
                  <input
                    className="outline-none inline-block mt-3 pl-4 rounded-lg border h-12 "
                    placeholder="0"
                    type="text"
                  />
                </label>
                <label className="flex flex-col w-[32%]">
                  Тип продукта
                  <select
                    defaultValue={"default"}
                    className="outline-none mt-3 pl-4 rounded-lg border h-12 "
                  >
                    <option value="default">Введите Форму продуктаs</option>
                    {ruTypeProduct.length &&
                      ruTypeProduct.map((item) => (
                        <option key={item.id}>{item.category_uz}</option>
                      ))}
                  </select>
                </label>
                <label className="flex flex-col w-[32%] mt-6">
                  Статус
                  <select
                    defaultValue={"default"}
                    className="outline-none mt-3 pl-4 rounded-lg border h-12 "
                  >
                    <option value="default">Выберите статус продукта</option>
                    {status.length &&
                      status.map((item) => (
                        <option key={item.id}>{item.status_uz}</option>
                      ))}
                  </select>
                </label>
                {sizeInp.length > 0 &&
                  sizeInp.map((item) => (
                    <label className="flex flex-col w-[32%] mt-6">
                      {item.ru.labelName}
                      <input
                        className="outline-none mt-3 pl-4 rounded-lg border h-12"
                        type={item.ru.inpType}
                        placeholder={item.ru.placeholder}
                      />
                    </label>
                  ))}
                {selectAtribut.length > 0 &&
                  selectAtribut.map((item) => (
                    <label className="w-[32%] h-12">
                      {item.ru.labelName}
                      <select className="outline-none mt-1.5 pl-4 w-full rounded-lg border h-12">
                        {addedMaterial.length > 0 &&
                          addedMaterial.map((item) => (
                            <option key={item.id}>{item.category_uz}</option>
                          ))}
                      </select>
                    </label>
                  ))}
              </div>
            </div>
          </DropDown>

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
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="w-modalWidth ">
          <div className="flex items-center justify-between mb-6">
            <h2>Добавить атрибуть</h2>
            <img
              className="cursor-pointer"
              onClick={() => setShowModal(false)}
              src={DelteModal}
              alt="Delete Modal"
              width={32}
              height={32}
            />
          </div>
          <form onSubmit={createArtibut}>
            <label className="flex flex-col w-[48%]">
              Тип атрибуты
              <select
                onChange={(evt) => console.log(evt.target)}
                ref={addAtributSelect}
                className="p-4 border-2 rounded-lg mt-3"
              >
                {addAtribut.length &&
                  addAtribut.map((item) => (
                    <option
                      value={item.attribute_ru}
                      id={item.id}
                      key={item.id}
                    >
                      {item.attribute_ru}
                    </option>
                  ))}
              </select>
            </label>

            <div className="flex mt-6 items-center justify-center space-x-5">
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
        </div>
      </Modal>
    </div>
  );
}
