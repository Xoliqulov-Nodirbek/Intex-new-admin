import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import TableData from "../TableData/TableData";
// Images
import ThreeDotsSvg from "../../Assets/Images/ProductsImgs/threedots.svg";
import Close from "../../Assets/Images/SettingsImg/close.svg";
import Flag from "../../Assets/Images/SettingsImg/flag.svg";
import ProductModal from "../ProductModal/ProductModal";

export default function ContactTable({ children, styles, data, isChecked }) {
  const [checker, setChecker] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [date, setDate] = useState("");

  const handleCheck = (e) => {
    if (e.target.checked) {
      setChecker(true);
      e.target.checked = true;
    } else {
      setChecker(false);
      e.target.checked = false;
    }
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
            <TableData styles="w-[393px] truncate" image={false}>
              {data.name}
            </TableData>
            <TableData styles="w-[250px]">{data.phone}</TableData>
            <TableData styles="w-[258px]">
              {data.created_at.slice(0, 10)}
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
              {isClicked ? <ProductModal /> : ""}
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
