import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
// Images
import HomeImg from "../../Assets/Images/HeaderImgs/HomeImg.svg";
import EditImg from "../../Assets/Images/SettingsImg/edit.svg";
import Close from "../../Assets/Images/SettingsImg/close.svg";

const env = process.env.REACT_APP_ALL_API;

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [data, setData] = useState({});
  const [address, setAddress] = useState({});

  useEffect(() => {
    axios
      .get(`${env}sites`)
      .then((res) => {
        setData(res.data[0]);
        setAddress(res.data[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  const putData = (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem("token");

    axios.put(`${env}sites`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      id: 0,
      email: address.email,
      address_ru: address.address_ru,
      address_uz: address.address_en,
      address_en: address.address_en,
      phone: address.phone,
      work_uz: address.work_en,
      work_ru: address.work_ru,
      work_en: address.work_en,
    });
  };

  return (
    <div className="overflow-y-scroll">
      <div className="bg-white flex items-center w-full pt-1.5 pb-1.5 px-8">
        <Link className="flex items-center" to={"/"}>
          <img src={HomeImg} alt="Home Img" width="16" height="16" />
        </Link>
        <span className="ml-2.5 text-navSubColor ">/</span>
        <Link
          to="/settings
        "
        >
          <h2 className="font-normal text-navSubColor text-xs ml-2.5">
            Настройки сайта
          </h2>
        </Link>
      </div>
      <div className="px-7 pt-6">
        <h1 className="font-bold text-navBarColor text-2xl">Настройки сайта</h1>
        <div className="w-full mt-4 bg-white rounded-xl px-6 py-7">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg text-navBarColor font-bold">
                Контактная информация
              </h2>
              <button
                onClick={() => setShowModal(true)}
                className="p-1"
                type="button"
              >
                <img src={EditImg} alt="edit" />
              </button>
            </div>
            <div className="flex space-x-16 mt-6">
              <div>
                <div>
                  <h3 className="font-bold text-base text-supportColor mb-2">
                    Адрес
                  </h3>
                  <p className="text-sm text-navBarColor">{data.address_ru}</p>
                </div>
                <div className="mt-6">
                  <h3 className="font-bold text-base text-supportColor mb-2">
                    Номер телефона
                  </h3>
                  <p className="text-sm text-navBarColor">{data.phone}</p>
                </div>
              </div>
              <div className="">
                <div className="">
                  <h3 className="font-bold text-base text-supportColor mb-2">
                    E-mail
                  </h3>
                  <p className="text-sm text-navBarColor">{data.email}</p>
                </div>
                <div className="mt-6">
                  <h3 className="font-bold text-base text-supportColor mb-2">
                    График работы
                  </h3>
                  <p className="text-sm text-navBarColor">{data.work_ru}</p>
                </div>
              </div>
            </div>
          </div>
          <span className="flex w-full h-[2px] bg-lineColor mt-11 mb-6"></span>
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg text-navBarColor font-bold">
                Cоциальные сети
              </h2>
              <button
                onClick={() => setShowModal1(true)}
                className="p-1"
                type="button"
              >
                <img src={EditImg} alt="edit" />
              </button>
            </div>
            <div className="flex space-x-72 mt-6">
              <div>
                <div>
                  <h3 className="font-bold text-base text-supportColor mb-2">
                    Instagram
                  </h3>
                  <p className="text-sm text-navBarColor">intex-market</p>
                </div>
                <div className="mt-6">
                  <h3 className="font-bold text-base text-supportColor mb-2">
                    Twitter
                  </h3>
                  <p className="text-sm text-navBarColor">intex-market</p>
                </div>
              </div>
              <div>
                <div>
                  <h3 className="font-bold text-base text-supportColor mb-2">
                    Facebook
                  </h3>
                  <p className="text-sm text-navBarColor">intex-market</p>
                </div>
                <div className="mt-6">
                  <h3 className="font-bold text-base text-supportColor mb-2">
                    Linkedin
                  </h3>
                  <p className="text-sm text-navBarColor">intex-market</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            {/* <form onSubmit={putData}>
              <label className="flex flex-col text-base text-addProductColor font-medium">
                Адрес
                <input
                  className="font-normal border border-[#E3E5E5] rounded-lg outline-none mt-2 h-11 px-3"
                  name="address"
                  type="text"
                  value={address.address_ru}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      address_ru: e.target.value,
                    })
                  }
                />
              </label>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <label className="flex flex-col text-base text-addProductColor font-medium">
                  Номер телефона
                  <input
                    className="font-normal border border-[#E3E5E5] rounded-lg outline-none mt-2 h-11 px-3"
                    name="address"
                    type="text"
                    value={address.phone}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        phone: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="flex flex-col text-base text-addProductColor font-medium">
                  E-mail
                  <input
                    className="font-normal border border-[#E3E5E5] rounded-lg outline-none mt-2 h-11 px-3"
                    name="address"
                    type="text"
                    value={address.email}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        email: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <label className="flex flex-col text-base text-addProductColor font-medium">
                  График работы
                  <input
                    className="font-normal border border-[#E3E5E5] rounded-lg outline-none mt-2 h-11 px-3"
                    name="address"
                    type="text"
                    value={address.work_ru}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        work_ru: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-[#F2F2F2] px-28 py-3 rounded-xl text-russuanColor font-medium text-lg"
                >
                  Отменить
                </button>
                <button
                  type="submit"
                  className="bg-russuanColor px-28 py-3 rounded-xl text-[#fff] font-medium text-lg"
                >
                  Сохранить
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </Modal>
      <Modal isVisible={showModal1} onClose={() => setShowModal1(false)}>
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
            <form onSubmit={putData}>
              <label className="flex flex-col text-base text-addProductColor font-medium">
                Instagram
                <input
                  className="font-normal border border-[#E3E5E5] rounded-lg outline-none mt-2 h-11 px-3"
                  name="address"
                  type="text"
                />
                <button className="w-fit text-start text-base text-red-deleteColor mt-2">
                  - Удалить социальную сеть
                </button>
              </label>
              <label className="flex flex-col text-base text-addProductColor font-medium mt-6">
                Facebook
                <input
                  className="font-normal border border-[#E3E5E5] rounded-lg outline-none mt-2 h-11 px-3"
                  name="address"
                  type="text"
                />
                <button className="w-fit text-start text-base text-red-deleteColor mt-2">
                  - Удалить социальную сеть
                </button>
              </label>
              <label className="flex flex-col text-base text-addProductColor font-medium mt-6">
                Twitter
                <input
                  className="font-normal border border-[#E3E5E5] rounded-lg outline-none mt-2 h-11 px-3"
                  name="address"
                  type="text"
                />
                <button className="w-fit text-start text-base text-red-deleteColor mt-2">
                  - Удалить социальную сеть
                </button>
              </label>
              <label className="flex flex-col text-base text-addProductColor font-medium mt-6">
                Linkedin
                <input
                  className="font-normal border border-[#E3E5E5] rounded-lg outline-none mt-2 h-11 px-3"
                  name="address"
                  type="text"
                />
                <button className="w-fit text-start text-base text-red-deleteColor mt-2">
                  - Удалить социальную сеть
                </button>
              </label>
              <div></div>
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-[#F2F2F2] px-28 py-3 rounded-xl text-russuanColor font-medium text-lg"
                >
                  Отменить
                </button>
                <button
                  type="submit"
                  className="bg-russuanColor px-28 py-3 rounded-xl text-[#fff] font-medium text-lg"
                >
                  Сохранить
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
