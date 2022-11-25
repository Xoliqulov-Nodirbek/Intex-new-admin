import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import TableData from "../TableData/TableData";
import axios from "axios";
// Images
import ThreeDotsSvg from "../../Assets/Images/ProductsImgs/threedots.svg";
import Close from "../../Assets/Images/SettingsImg/close.svg";
import Flag from "../../Assets/Images/SettingsImg/flag.svg";
import MFilter from "../../BaseComponents/MFilter/MFilter";
import Edit from "../../Assets/Images/ProductsImgs/edit.svg";
import Dublicate from "../../Assets/Images/ProductsImgs/duplicate.svg";
import Trash from "../../Assets/Images/ProductsImgs/trash_1.svg";

const env = process.env.REACT_APP_ALL_API;

export default function TableCat({ children, styles, data, isChecked }) {
  const [checker, setChecker] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [date, setDate] = useState("");

  const token = JSON.parse(window.localStorage.getItem("token"));

  const categoryResult = data?.ru;

  const handleCheck = (e) => {
    if (e.target.checked) {
      setChecker(true);
      e.target.checked = true;
    } else {
      setChecker(false);
      e.target.checked = false;
    }
  };

  const handlDelteUnik = (id) => {
    axios
      .delete(`${env}categories/deleteCategory/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <tr className={`flex items-center border-b ${styles}`}>
        {children ? (
          children
        ) : (
          <>
            <TableData styles="w-11 pr-3 justify-center">
              <input
                className="inputs w-4 h-4"
                type="checkbox"
                checked={
                  checker === true && isChecked === false
                    ? true
                    : checker === false && isChecked === false
                    ? false
                    : checker === false && isChecked === true
                    ? true
                    : checker === true && isChecked === true
                    ? true
                    : true
                }
                onChange={(e) => handleCheck(e)}
              />
            </TableData>
            <TableData styles="w-[80px]">{data.id}</TableData>
            <TableData styles="w-[227px] truncate" image={false}>
              {data.category_ru}
            </TableData>
            <TableData styles="w-[250px]">{data.category_ru.length}</TableData>
            <TableData styles="min-w-[474px]">
              {categoryResult.map((item, index) => (
                <MFilter key={index} className="mx-1">
                  {item}
                </MFilter>
              ))}
            </TableData>
            <TableData styles="w-[95px] relative pl-0">
              <button
                className="mx-auto px-8 py-2"
                onClick={() => {
                  setIsClicked(!isClicked);
                }}
              >
                <img src={ThreeDotsSvg} alt="three dots icon" />
              </button>
              {isClicked ? (
                <ul className="flex flex-col cursor-pointer gap-y-2.5 absolute p-3 bg-white rounded-sm shadow-editProduct">
                  <li onClick={() => handlDelteUnik(data.id)} className="flex">
                    <img
                      className="mr-2"
                      src={Trash}
                      alt="just a icon to edit"
                    />
                    <span>Удалить</span>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </TableData>
          </>
        )}
      </tr>
      {/* --- Modal --- */}
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="w-730">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl text-addProductColor font-bold">
              Изменить информацию
            </h2>
            <button onClick={() => setShowModal(false)} className="rounded-md">
              <img src={Close} width={25} height={25} alt={"close_image"} />
            </button>
          </div>
          <div className="mt-6">
            <form>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <label className="flex flex-col text-base text-addProductColor font-medium">
                  Имя
                  <input
                    className="font-normal border border-[#E3E5E5] rounded-lg outline-none mt-2 h-11 px-3"
                    type="text"
                    // value={address.address_ru}
                    // onChange={(e) =>
                    //   setAddress({
                    //     ...address,
                    //     address_ru: e.target.value,
                    //   })
                    // }
                  />
                </label>
                <label className="relative text-base font-medium text-addProductColor">
                  Номер телефона
                  <div className="bg-white w-submitBtnsWidth flex items-center h-11 rounded-lg border border-solid  border-borderColor text-addProductColor p-4 mt-2">
                    <img
                      src={Flag}
                      className="w-6 h-4"
                      width={22}
                      height={15}
                      alt="site_logo"
                    />
                    <input
                      type="text"
                      placeholder="(90) 123 45 67"
                      className="font-normal outline-none w-full ml-1 h-full p-2"
                      // value={address.phone}
                      // onChange={(e) =>
                      //   setAddress({
                      //     ...address,
                      //     phone: e.target.value,
                      //   })
                      // }
                    />
                  </div>
                </label>
              </div>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <label className="flex flex-col text-base text-addProductColor font-medium">
                  Время заявки
                  <input
                    className="font-normal border border-[#E3E5E5] rounded-lg outline-none mt-2 h-11 px-3"
                    name="address"
                    type="date"
                    // value={address.work_ru}
                    onChange={(e) => setDate(e.target.value.trim())}
                  />
                </label>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-[#F2F2F2] w-80 py-3 rounded-xl text-russuanColor font-medium text-lg"
                >
                  Отменить
                </button>
                <button
                  type="submit"
                  className="bg-russuanColor w-80 py-3 rounded-xl text-[#fff] font-medium text-lg"
                >
                  {/* {subLoading ? loaderButton : "Сохранить"} */}Сохранить
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
