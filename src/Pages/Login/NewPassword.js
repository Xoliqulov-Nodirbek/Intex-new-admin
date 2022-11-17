/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import Visible from "../../Assets/Images/LoginImg/Visible.png";
import IsVisible from "../../Assets/Images/LoginImg/IsVisible.png";
import Loader from "../../Assets/Images/LoginImg/loader.svg";
import SubmitBtn from "../../BaseComponents/SubmitFormBtn/Button";
import { useNavigate } from "react-router-dom";
import "./login.css";

const env = process.env.REACT_APP_ALL_API;

function NewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState(false);
  const [icon1, setIcon1] = useState(false);
  const [verificationPassword, setVerificationPassword] = useState(
    JSON.parse(window.localStorage.getItem("password"))
  );
  const navigate = useNavigate();

  const postRequest = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (newPassword === newPassword1) {
      axios
        .post(`${env}admins/reset_password`, {
          password: newPassword,
          token: verificationPassword,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            navigate("/");
            setLoading(false);
            setNewPassword("");
            setNewPassword1("");
          }
        });
    } else {
      console.log("warning");
    }
  };

  return (
    <section>
      <div className="login_bg fixed inset-0 flex justify-center items-center">
        <div className="max-w-login_content w-full">
          <div className="flex flex-col text-center bg-white p-11 rounded-xl relative">
            <h1 className="font-bold text-3xl text-supportColor">
              INTEX-MARKET
            </h1>
            <p className="font-bold text-2xl text-navBarColor mt-8 mb-6">
              Введите новый пароль
            </p>
            <form className="flex flex-col text-center" onSubmit={postRequest}>
              <label className="relative flex flex-col text-start font-medium text-base text-addProductColor">
                Новый пароль
                <input
                  className="text-base font-normal rounded-lg border outline-none pl-3 pr-9 py-2 mt-2 mb-5"
                  type={icon ? "text" : "password"}
                  value={newPassword}
                  placeholder="Введите новый пароль..."
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                {newPassword ? (
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
              <label className="relative flex flex-col text-start font-medium text-base text-addProductColor">
                Потвердить новый пароль
                <input
                  className="text-base font-normal rounded-lg border outline-none pl-3 pr-9 py-2 mt-2 mb-5"
                  type={icon1 ? "text" : "password"}
                  value={newPassword1}
                  placeholder="Потвердите новый пароль..."
                  onChange={(e) => setNewPassword1(e.target.value)}
                  required
                />
                {newPassword1 ? (
                  <div
                    className="cursor-pointer absolute right-0 top-[42px] mr-2"
                    onClick={() => {
                      setIcon1(!icon1);
                    }}
                  >
                    {icon1 ? (
                      <img className="w-6" src={IsVisible} alt="show_image" />
                    ) : (
                      <img className="w-6" src={Visible} alt="show_image" />
                    )}
                  </div>
                ) : (
                  ""
                )}
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

export default NewPassword;
