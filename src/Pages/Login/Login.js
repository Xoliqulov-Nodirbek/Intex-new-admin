/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import useToken from "../../Hook/useToken";
import Visible from "../../Assets/Images/LoginImg/Visible.png";
import IsVisible from "../../Assets/Images/LoginImg/IsVisible.png";
import Loader from "../../Assets/Images/LoginImg/loader.svg";
import { Link } from "react-router-dom";
import SubmitBtn from "../../BaseComponents/SubmitFormBtn/Button";
import "./login.css";

const env = process.env.REACT_APP_ALL_API;

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [icon, setIcon] = useState(false);
  const [loading, setLoading] = useState(false);
  const [__, setToken] = useToken();

  const postRequest = async (e) => {
    e.preventDefault();

    setLoading(true);
    axios
      .post(`${env}admins/login`, {
        username: name,
        password: password,
      })
      .then((res) => {
        if (res?.data?.token) {
          setToken(res?.data?.token);
          setLoading(false);
          setName("");
          setPassword("");
        }
      });
  };

  return (
    <section>
      <div className="login_bg fixed inset-0 flex justify-center items-center">
        <div className="max-w-login_content w-full">
          <div className="flex flex-col text-center bg-white p-11 rounded-xl">
            <h1 className="font-bold text-3xl text-supportColor">
              INTEX-MARKET
            </h1>
            <p className="font-bold text-2xl text-navBarColor mt-4 mb-5">
              Авторизоваться
            </p>
            <form className="flex flex-col text-center" onSubmit={postRequest}>
              <label className="flex flex-col text-start font-medium text-base">
                Имя
                <input
                  className="text-base font-normal rounded-lg border outline-none px-3 py-2 mt-2 mb-3"
                  type="text"
                  value={name}
                  placeholder="Введите ваше имя..."
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label className="relative flex flex-col text-start font-medium text-base">
                Пароль
                <input
                  className="text-base font-normal rounded-lg border outline-none pl-3 pr-9 py-2 mt-2 mb-5"
                  type={icon ? "text" : "password"}
                  value={password}
                  placeholder="Введите ваше парол..."
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {password ? (
                  <div
                    className="cursor-pointer absolute right-0 top-[42px] mr-2"
                    onClick={() => {
                      setIcon(!icon);
                    }}
                  >
                    {icon ? (
                      <img className="w-6" src={IsVisible} alt="show_image" />
                    ) : (
                      <img className="w-6" src={Visible} alt="show_image" />
                    )}
                  </div>
                ) : (
                  ""
                )}
              </label>
              <div className="flex justify-between mt-">
                <label className="flex items-center font-medium text-sm text-navBarColor cursor-pointer">
                  <input
                    className="w-4 h-4 mr-2 cursor-pointer"
                    type="checkbox"
                  />
                  Запомнить меня
                </label>
                <Link
                  to="/forget"
                  className="font-medium text-sm text-forgotPasswordColor bg-white pl-1"
                >
                  Забыли пароль?
                </Link>
              </div>
              <div className="mt-5">
                <SubmitBtn>
                  {loading ? (
                    <img
                      className="mx-auto"
                      src={Loader}
                      alt="loader"
                      width={28}
                      height={28}
                    />
                  ) : (
                    "Войти"
                  )}
                </SubmitBtn>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
