// import axios from "axios";
import CloseSvg from "../../Assets/Images/NavbarImgs/close.svg";
import uzbFlag from "../../Assets/Images/HeaderImgs/uzb-flag.svg";
import addressLogo from "../../Assets/Images/NavbarImgs/addresLogo.svg";
import { useState } from "react";
import axios from "axios";

const env = process.env.REACT_APP_ALL_API;

function OrderPage({ isVisible, onClose, datas }) {
  const [editData, setEditData] = useState({});

  const token = JSON.parse(window.localStorage.getItem("token"));

  const submitData = (e) => {
    e.preventDefault();

    axios
      .patch(
        `${env}orders/update`,
        {
          id: editData.id,
          order: {
            name: editData.name,
            phone: editData.phone,
            address: editData.address,
            location: null,
            order_number: editData.order_number,
            status_id: null,
          },
          bascet: [
            {
              count: editData.count,
              product_id: 0,
              order_id: 0,
            },
          ],
          bascet_id: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  console.log(editData);
  if (!isVisible) return null;

  const handleClick = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  // const date = new Date(datas.created_at);

  return (
    <div
      onClick={handleClick}
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50"
    >
      <div className=" bg-white rounded-xl w-orderModal z-50 mt-10">
        <form onSubmit={submitData} className="flex flex-col overflow-y-scroll h-[100vh]">
          <div className="flex flex-row pt-7 pb-6 px-6 items-center justify-between">
            <h1 className="font-bold text-2xl	text-addProductColor">Изменить</h1>
            <img onClick={onClose} src={CloseSvg} alt="x" />
          </div>

          <div className=" flex flex-wrap  px-6 justify-between">
            <label className="relative">
              <p className="text-base font-medium mb-3">Номер заказа</p>
              <input
                type="number"
                className="bg-white w-submitBtnsWidth outline-0 h-12 rounded-lg border border-solid  border-borderColor text-addProductColor p-4"
                minLength="3"
                maxLength="25"
                value={datas.order_number}
                onChange={(e) =>
                  setEditData({
                    ...datas,
                    order_number: e.target.value.trim(),
                  })
                }
              />
            </label>
            <label className="relative">
              <p className="text-base font-medium  mb-3">Имя</p>
              <input
                type="text"
                className="bg-white w-submitBtnsWidth outline-0 h-12  rounded-lg border border-solid  border-borderColor text-addProductColor  p-4"
                minLength="3"
                maxLength="25"
                value={datas.name}
                onChange={(e) =>
                  setEditData({
                    ...datas,
                    name: e.target.value.trim(),
                  })
                }
              />
            </label>
            <label className="relative">
              <p className="text-base font-medium  mb-3 mt-8">Номер телефона</p>
              <div className="bg-white w-submitBtnsWidth flex items-center h-12  rounded-lg border border-solid  border-borderColor text-addProductColor  p-4">
                <img
                  src={uzbFlag}
                  className="w-6 h-4"
                  width={22}
                  height={15}
                  alt="site_logo"
                />
                <span className="text-base inline text-black ml-1">+998</span>
                <input
                  type="number"
                  className=" outline-none w-full ml-1 h-full p-2"
                  value={datas.phone}
                  onChange={(e) =>
                    setEditData({
                      ...datas,
                      phone: e.target.value.trim(),
                    })
                  }
                />
              </div>
            </label>
            <label className="relative">
              <p className="text-base font-medium  mb-3 mt-8">Адрес</p>
              <div className="bg-white w-submitBtnsWidth flex items-center justify-between h-12  rounded-lg border border-solid  border-borderColor text-addProductColor  p-4">
                <input
                  type="text"
                  className="outline-0"
                  minLength="3"
                  maxLength="25"
                  value={datas.address}
                  onChange={(e) =>
                    setEditData({
                      ...datas,
                      address: e.target.value.trim(),
                    })
                  }
                />
                <img
                  src={addressLogo}
                  className="w-4 h-5"
                  width={16}
                  height={18}
                  alt="site_logo"
                />
              </div>
            </label>
            <label className="relative">
              <p className="text-base font-medium  mb-3 mt-8">
                Кол-во продуктов
              </p>
              <input
                type="text"
                className="bg-white w-submitBtnsWidth outline-0 h-12  rounded-lg border border-solid  border-borderColor text-addProductColor  p-4"
                minLength="1"
                maxLength="10"
                value={datas.count}
                onChange={(e) =>
                  setEditData({
                    ...datas,
                    count: e.target.value.trim(),
                  })
                }
              />
            </label>
            <label className="relative">
              <p className="text-base font-medium  mb-3 mt-8">Обшая цена</p>
              <div className="bg-white w-submitBtnsWidth flex items-center justify-between h-12  rounded-lg border border-solid  border-borderColor text-addProductColor  p-4">
                <input
                  type="text"
                  className="outline-0"
                  minLength="3"
                  maxLength="25"
                  value={datas.summa}
                  onChange={(e) =>
                    setEditData({
                      ...datas,
                      summa: e.target.value.trim(),
                    })
                  }
                />
                <p className="text-base font-normal">Сум</p>
              </div>
            </label>
            <label className="relative">
              <p className="text-base font-medium text-addProductColor mb-3 mt-8">
                Цена со скидкой
              </p>
              <div className="bg-white w-submitBtnsWidth flex items-center justify-between h-12 rounded-lg border border-solid  border-borderColor text-addProductColor  p-4">
                <input
                  type="text"
                  className="outline-0"
                  minLength="3"
                  value={datas.discount_summa}
                  onChange={(e) =>
                    setEditData({
                      ...datas,
                      discount_summa: e.target.value.trim(),
                    })
                  }
                />
                <p className="text-base font-normal">Сум</p>
              </div>
            </label>
            <label className="relative">
              <p className="text-base font-medium  mb-3 mt-8">Статус</p>
              <select
                defaultValue={"check"}
                id="status"
                className="bg-white w-submitBtnsWidth outline-0 items-center  h-12  rounded-lg border border-solid  border-borderColor text-addProductColor px-4"
              >
                <option
                  className="text-addProductLinks items-center top-0"
                  value="chance"
                >
                  В ожидании
                </option>
              </select>
            </label>
            <label className="relative">
              <p className="text-base font-medium  mb-3 mt-8">Время заказа</p>
              <input
                type="text"
                className="bg-white w-submitBtnsWidth  h-12 outline-0 rounded-lg border border-solid  border-borderColor text-addProductColor  p-4"
                minLength="3"
                maxLength="25"
                value={datas.created_at}
                onChange={(e) =>
                  setEditData({
                    ...datas,
                    created_at: e.target.value.trim(),
                  })
                }
              />
            </label>
          </div>

          <div className="flex flex-row px-6 pt-8 pb-7 justify-between">
            <button
              onClick={onClose}
              className="py-3 px-[120px] text-[#2B3D91] font-medium border border-solid bg-languageBg rounded-lg "
            >
              Отменить
            </button>
            <button
              type="submit"
              className="py-3 px-[120px] text-white font-medium border border-solid bg-loginBtn rounded-lg "
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderPage;
