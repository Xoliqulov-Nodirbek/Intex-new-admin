import { useState } from "react";
import {
  BImg,
  UImg,
  IImg,
  FullEaquals,
  LeftEaquals,
  RightEquals,
  Fix,
} from "./InfoImgs";
function Infotmation({ submitProduct, imagesPage, atributPage }) {
  const [openInformation, setOpenInformation] = useState(true);
  const [infoEng, setInfoEng] = useState(false);
  const [infoUz, setInfoUz] = useState(false);
  const [bold, setBold] = useState(false);
  const [under, setUnder] = useState(false);
  const [ital, setItal] = useState(false);
  const [fully, setFully] = useState(false);
  const [leftSide, setLeftSide] = useState(false);
  const [rightSide, setRightSide] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [sel, setSel] = useState(false);
  const [country, setCountry] = useState(false);
  const [cate, setCate] = useState(false);
  const handlSubmit = (evt) => {
    evt.preventDefault();
    imagesPage(true);
    submitProduct(false);
    atributPage(false);
  };
  const handleSeleted = () => {
    setSel(true);
  };

  return (
    <form onSubmit={handlSubmit} className="">
      <div className={`border-b-2 ${openInformation ? "pb-6" : ""}`}>
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
          <div className="flex justify-between">
            <div className="w-[67%]">
              <div className="flex items-center space-x-5">
                <div className="flex flex-col w-[100%]">
                  <label className="mb-3">Название продукта</label>
                  <input
                    className="p-4 rounded-lg border border-solid border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
                    type="text"
                    // onChange={(e)=>setPool({...pool, poolColor: e.target.value})}
                    placeholder="Каркасный басейн Intex прямоуголь.."
                    autoComplete="off"
                  />
                </div>
                <div className="flex flex-col w-[100%]">
                  <label className="mb-3">Призводства</label>
                  <select
                    onChange={handleSeleted}
                    className={`p-selectInp rounded-lg appearance-none border border-solid ${
                      sel ? "" : "text-addProductLinks"
                    } border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4`}
                  >
                    <option
                      selected
                      disabled
                      className="text-addProductLinks"
                      value="chance"
                    >
                      Выберите призводству продукта
                    </option>
                    <option className="text-black" value="chance">
                      Intex
                    </option>
                    <option className="text-black" value="chance">
                      Intex
                    </option>
                    <option className="text-black" value="chance">
                      Intex
                    </option>
                  </select>
                </div>
              </div>
              <div className="mt-6 w-[100%]">
                <h3 className="font-medium text-base leading-4 mb-3">
                  Описание продукта
                </h3>
                <div className="border-2 w-[100%] p-2.5 rounded-xl inline-block">
                  <div className="flex items-center space-x-2.5">
                    <BImg
                      activeText={
                        bold
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      boldClass={() => setBold(!bold)}
                    />
                    <UImg
                      activeText={
                        under
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      underClass={() => setUnder(!under)}
                    />
                    <IImg
                      activeText={
                        ital
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      italicClass={() => setItal(!ital)}
                    />
                    <FullEaquals
                      activeText={
                        fully
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      fullClass={() => {
                        setFully(!fully);
                        setLeftSide(false);
                        setRightSide(false);
                      }}
                    />
                    <LeftEaquals
                      activeText={
                        leftSide
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      leftClass={() => {
                        setLeftSide(!leftSide);
                        setFully(false);
                        setRightSide(false);
                      }}
                    />
                    <RightEquals
                      activeText={
                        rightSide
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      rightClass={() => {
                        setRightSide(!rightSide);
                        setFully(false);
                        setLeftSide(false);
                      }}
                    />
                    <Fix
                      activeText={
                        fixed
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      fixClass={() => setFixed(!fixed)}
                    />
                  </div>
                  <textarea
                    className={`mt-4 w-[100%] ${fully ? "text-center" : ""} ${
                      leftSide ? "text-left" : ""
                    } ${rightSide ? "text-right" : ""} placeholder:text-sm ${
                      ital ? "italic" : ""
                    } placeholder:font-normal ${
                      under ? "underline" : ""
                    } outline-none ${bold ? "font-bold" : ""} `}
                    placeholder="Введите Описание продукта"
                    cols={87}
                    rows={5}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between w-[32%]">
              <div>
                <label>Страна призводства</label>
                <select
                onChange={() => setCountry(true)}
                  defaultValue={"check"}
                  id="proSelect"
                  className={`p-selectInp mt-3 w-[100%] rounded-lg appearance-none border border-solid ${
                    country ? "" : "text-addProductLinks"
                  } border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4`}
                >
                  <option className="text-addProductLinks" value="chence">
                    Выберите страна призводства
                  </option>
                  <option className=" text-black" value="chence">
                    Узбекистан
                  </option>
                  <option className="text-black" value="chence">
                    Узбекистан
                  </option>
                </select>
              </div>
              <div>
                <label>Категория</label>
                <select
                onChange={() => setCate(true)}
                  defaultValue={"check"}
                  id="proSelect"
                  className={`p-selectInp mt-3 w-[100%] rounded-lg appearance-none border border-solid ${cate ? "" : "text-addProductLinks"} border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4`}>
                  <option disabled className="text-addProductLinks" value="chance">
                    Выберите категория продукта
                  </option>
                  <option className="text-black" value="chance">
                  Каркасные бассейны
                  </option>
                  <option className="text-black" value="chance">
                  Каркасные бассейны
                  </option>
                </select>
              </div>
              <div>
                <label>Страна призводства</label>
                <input
                  className="p-4 w-[100%] mt-3 rounded-lg border border-solid border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
                  type="text"
                  placeholder="Введите количество продукта"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`border-b-2 ${infoEng ? "pb-6" : ""}`}>
        <div
          onClick={() => setInfoEng(!infoEng)}
          className="flex items-center justify-between py-6 cursor-pointer"
        >
          <h2 className="font-bold text-lg text-russuanColor">English</h2>
          <svg
            className={`${
              infoEng ? "rotate-180 duration-300" : "duration-300"
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
            infoEng
              ? "h-auto opacity-1 duration-300 z-50 overflow-auto"
              : "duration-300 overflow-hidden z-10 opacity-0 h-0"
          }`}
        >
          <div className="flex justify-between">
            <div className="w-[67%]">
              <div className="flex items-center space-x-5">
                <div className="flex flex-col w-[100%]">
                  <label className="mb-3">The product's name</label>
                  <input
                    className="p-4 rounded-lg border border-solid border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
                    type="text"
                    placeholder="Frame pool Intex rectangular.."
                    autoComplete="off"
                  />
                </div>
                <div className="flex flex-col w-[100%]">
                  <label className="mb-3">production</label>
                  <select
                  onChange={(evt) => (evt.target.value == "default" ? evt.target.classList.add("salom") : "")}
                    id="proSelect"
                    className={`p-selectInp rounded-lg appearance-none border border-solid  border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4`}>
                    <option className="text-addProductLinks" value="default">
                      Choose a product
                    </option>
                    <option className="text-black" value="chance">
                      Intex
                    </option>
                    <option className="text-black" value="chance">
                      Intex
                    </option>
                  </select>
                </div>
              </div>
              <div className="mt-6 w-[100%]">
                <h3 className="font-medium text-base leading-4 mb-3">
                  Product description
                </h3>
                <div className="border-2 w-[100%] p-2.5 rounded-xl inline-block">
                  <div className="flex items-center space-x-2.5">
                    <BImg
                      activeText={
                        bold
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      boldClass={() => setBold(!bold)}
                    />
                    <UImg
                      activeText={
                        under
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      underClass={() => setUnder(!under)}
                    />
                    <IImg
                      activeText={
                        ital
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      italicClass={() => setItal(!ital)}
                    />
                    <FullEaquals
                      activeText={
                        fully
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      fullClass={() => {
                        setFully(!fully);
                        setLeftSide(false);
                        setRightSide(false);
                      }}
                    />
                    <LeftEaquals
                      activeText={
                        leftSide
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      leftClass={() => {
                        setLeftSide(!leftSide);
                        setFully(false);
                        setRightSide(false);
                      }}
                    />
                    <RightEquals
                      activeText={
                        rightSide
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      rightClass={() => {
                        setRightSide(!rightSide);
                        setFully(false);
                        setLeftSide(false);
                      }}
                    />
                    <Fix
                      activeText={
                        fixed
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      fixClass={() => setFixed(!fixed)}
                    />
                  </div>
                  <textarea
                    className={`mt-4 w-[100%] ${fully ? "text-center" : ""} ${
                      leftSide ? "text-left" : ""
                    } ${rightSide ? "text-right" : ""} placeholder:text-sm ${
                      ital ? "italic" : ""
                    } placeholder:font-normal ${
                      under ? "underline" : ""
                    } outline-none ${bold ? "font-bold" : ""} `}
                    placeholder="Enter Product Description"
                    cols={87}
                    rows={5}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between w-[32%]">
              <div>
                <label>Country of origin</label>
                <select
                  defaultValue={"check"}
                  id="proSelect"
                  className="p-selectInp mt-3 w-[100%] rounded-lg appearance-none border border-solid text-addProductLinks border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
                >
                  <option className="text-addProductLinks" value="chence">
                    Select country of origin
                  </option>
                </select>
              </div>
              <div>
                <label>Category</label>
                <select
                  defaultValue={"check"}
                  id="proSelect"
                  className="p-selectInp mt-3 w-[100%] rounded-lg appearance-none border border-solid text-addProductLinks border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
                >
                  <option className="text-addProductLinks" value="chance">
                    Select product category
                  </option>
                </select>
              </div>
              <div>
                <label>Country of origin</label>
                <input
                  className="p-4 w-[100%] mt-3 rounded-lg border border-solid border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
                  type="text"
                  placeholder="Enter quantity of product"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`border-b-2 ${infoUz ? "pb-6" : ""}`}>
        <div
          onClick={() => setInfoUz(!infoUz)}
          className="flex items-center justify-between py-6 cursor-pointer"
        >
          <h2 className="font-bold text-lg text-russuanColor">O’zbekcha</h2>
          <svg
            className={`${infoUz ? "rotate-180 duration-300" : "duration-300"}`}
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
            infoUz
              ? "h-auto opacity-1 duration-300 z-50 overflow-auto"
              : "duration-300 overflow-hidden z-10 opacity-0 h-0"
          }`}
        >
          <div className="flex justify-between">
            <div className="w-[67%]">
              <div className="flex items-center space-x-5">
                <div className="flex flex-col w-[100%]">
                  <label className="mb-3">Mahsulot nomi</label>
                  <input
                    className="p-4 rounded-lg border border-solid border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
                    type="text"
                    placeholder="Ramka hovuzi Intex to'rtburchak.."
                    autoComplete="off"
                  />
                </div>
                <div className="flex flex-col w-[100%]">
                  <label className="mb-3">ishlab chiqarish</label>
                  <select
                    id="proSelect"
                    className="p-selectInp rounded-lg appearance-none border border-solid text-addProductLinks border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
                  >
                    <option className="text-addProductLinks" value="chance">
                      Mahsulotni tanlang
                    </option>
                  </select>
                </div>
              </div>
              <div className="mt-6 w-[100%]">
                <h3 className="font-medium text-base leading-4 mb-3">
                  Mahsulot tavsifi
                </h3>
                <div className="border-2 w-[100%] p-2.5 rounded-xl inline-block">
                  <div className="flex items-center space-x-2.5">
                    <BImg
                      activeText={
                        bold
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      boldClass={() => setBold(!bold)}
                    />
                    <UImg
                      activeText={
                        under
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      underClass={() => setUnder(!under)}
                    />
                    <IImg
                      activeText={
                        ital
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      italicClass={() => setItal(!ital)}
                    />
                    <FullEaquals
                      activeText={
                        fully
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      fullClass={() => {
                        setFully(!fully);
                        setLeftSide(false);
                        setRightSide(false);
                      }}
                    />
                    <LeftEaquals
                      activeText={
                        leftSide
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      leftClass={() => {
                        setLeftSide(!leftSide);
                        setFully(false);
                        setRightSide(false);
                      }}
                    />
                    <RightEquals
                      activeText={
                        rightSide
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      rightClass={() => {
                        setRightSide(!rightSide);
                        setFully(false);
                        setLeftSide(false);
                      }}
                    />
                    <Fix
                      activeText={
                        fixed
                          ? "scale-150 duration-300 border-b-2 border-blue-500 rounded-sm"
                          : "duration-300"
                      }
                      fixClass={() => setFixed(!fixed)}
                    />
                  </div>
                  <textarea
                    className={`mt-4 w-[100%] ${fully ? "text-center" : ""} ${
                      leftSide ? "text-left" : ""
                    } ${rightSide ? "text-right" : ""} placeholder:text-sm ${
                      ital ? "italic" : ""
                    } placeholder:font-normal placeholder:no-underline ${
                      under ? "underline" : ""
                    } outline-none ${bold ? "font-bold" : ""} `}
                    placeholder="Mahsulot tavsifini kiriting"
                    cols={87}
                    rows={5}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between w-[32%]">
              <div>
                <label>Ishlab chiqaruvchi mamlakat</label>
                <select
                  defaultValue={"check"}
                  id="proSelect"
                  className="p-selectInp mt-3 w-[100%] rounded-lg appearance-none border border-solid text-addProductLinks border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
                >
                  <option className="text-addProductLinks" value="chence">
                    Kelib chiqqan mamlakatni tanlang
                  </option>
                </select>
              </div>
              <div>
                <label>Turkum</label>
                <select
                  defaultValue={"check"}
                  id="proSelect"
                  className="p-selectInp mt-3 w-[100%] rounded-lg appearance-none border border-solid text-addProductLinks border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
                >
                  <option className="text-addProductLinks" value="chance">
                    Mahsulot toifasini tanlang
                  </option>
                </select>
              </div>
              <div>
                <label>Ishlab chiqaruvchi mamlakat</label>
                <input
                  className="p-4 w-[100%] mt-3 rounded-lg border border-solid border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4"
                  type="text"
                  placeholder="Mahsulot miqdorini kiriting"
                  autoComplete="off"
                />
              </div>
            </div>
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

export default Infotmation;
