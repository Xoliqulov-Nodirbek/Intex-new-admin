/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import useToken from "../../Hook/useToken";
import Visible from "../../Assets/Images/LoginImg/Visible.png";
import IsVisible from "../../Assets/Images/LoginImg/IsVisible.png";
import { Link } from "react-router-dom";
import "./login.css";

const env = process.env.REACT_APP_ALL_API;

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [icon, setIcon] = useState(false);
  const [__, setToken] = useToken();

  const handleClick = (e) => {
    e.preventDefault();

    const postRequest = async () => {
      axios
        .post(`${env}admins/login`, {
          // headers: {
          //   Authorization: `Bearer ${JSON.parse(
          //     window.localStorage.getItem("token")
          //   )}`,
          // },
          username: name,
          password: password,
        })
        .then((res) => {
          if (res?.data?.token) {
            setToken(res?.data?.token);
          }
        });
    };
    postRequest();
    setName("");
    setPassword("");
  };

  return (
    <section>
      <div className="login_bg fixed inset-0 flex justify-center items-center">
        <div>
          <div className="flex flex-col w-[495px] text-center bg-white p-11 rounded-xl">
            <h1 className="font-bold text-3xl text-[#109EF4]">INTEX-MARKET</h1>
            <p className="font-bold text-2xl text-[#464A4D] mt-3 mb-5">
              Авторизоваться
            </p>
            <form className="flex flex-col text-center" onSubmit={handleClick}>
              <label className="flex flex-col text-start font-medium text-base">
                Имя
                <input
                  className="text-base font-normal rounded-lg border outline-none px-3 py-2 mt-2 mb-3"
                  type="text"
                  value={name}
                  placeholder="Введите ваше имя"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="relative flex flex-col text-start font-medium text-base">
                Пароль
                <input
                  className="text-base font-normal rounded-lg border outline-none pl-3 pr-9 py-2 mt-2 mb-5"
                  type={icon ? "text" : "password"}
                  value={password}
                  placeholder="Введите ваше парол"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="cursor-pointer absolute right-0 top-[42px] mr-2"
                  onClick={() => {
                    setIcon(!icon);
                  }}
                >
                  {icon ? (
                    <img className="w-6" src={Visible} alt="show_image" />
                  ) : (
                    <img className="w-6" src={IsVisible} alt="show_image" />
                  )}
                </div>
              </label>
              <div className="flex justify-between mt-">
                <label className="flex items-center font-medium text-sm text-[#374151]">
                  <input className="w-4 h-4 mr-2" type="checkbox" />
                  Запомнить меня
                </label>
                <Link
                  className="font-medium text-sm text-[#4F46E5] bg-white pl-1"
                  to="/"
                >
                  Забыли пароль?
                </Link>
              </div>
              <button
                className="border w-fit mt-6 mx-auto px-10 py-1 rounded-md bg-sky-700 text-white"
                type="submit"
              >
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
