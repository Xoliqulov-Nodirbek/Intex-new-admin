/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Arrow from "../../Assets/Images/LoginImg/arrow.svg";
import Loader from "../../Assets/Images/LoginImg/loader.svg";
import SubmitBtn from "../../BaseComponents/SubmitFormBtn/Button";
import "./login.css";

const env = process.env.REACT_APP_ALL_API;

function Forget() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postRequest = async (e) => {
    e.preventDefault();

    setLoading(true);
    axios
      .post(`${env}admins/forgot-password`, {
        email: email,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          window.localStorage.setItem("email", JSON.stringify(email));
          navigate("/verification");
          setLoading(false);
          setEmail("");
        }
      });
  };

  return (
    <section>
      <div className="login_bg fixed inset-0 flex justify-center items-center">
        <div className="max-w-login_content w-full">
          <div className="flex flex-col text-center bg-white p-11 rounded-xl relative">
            <Link
              to="/"
              className="bg-blue-form_btn flex items-center justify-center w-8 h-8 rounded-lg absolute left-6 top-6"
            >
              <img
                src={Arrow}
                alt="arrow"
                width={24}
                height={24}
                property={"true"}
              />
            </Link>
            <h1 className="font-bold text-3xl text-supportColor">
              INTEX-MARKET
            </h1>
            <p className="font-bold text-2xl text-navBarColor mt-3">
              Сброс пароля
            </p>
            <p className="text-sm text-navBarColor mt-2 mb-5 w-10/12 mx-auto">
              Для сброса пароля на ваш номер телефона придет SMS-сообщение,
              через которое вы сможете обновить пароль.
            </p>
            <form className="flex flex-col text-center" onSubmit={postRequest}>
              <label className="flex flex-col text-start font-medium text-base">
                Номер телефона
                <input
                  className="text-base font-normal rounded-lg border outline-none px-3 py-2 mt-2 mb-3"
                  type="email"
                  value={email}
                  placeholder="Введите ваше электронной почты..."
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
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
                    "Отправить СМС"
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

export default Forget;
