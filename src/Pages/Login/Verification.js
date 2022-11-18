/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Arrow from "../../Assets/Images/LoginImg/arrow.svg";
import Loader from "../../Assets/Images/LoginImg/loader.svg";
import SubmitBtn from "../../BaseComponents/SubmitFormBtn/Button";
import { toast, Toaster } from "react-hot-toast";
import "./login.css";

const env = process.env.REACT_APP_ALL_API;

function Verification() {
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [password3, setPassword3] = useState("");
  const [password4, setPassword4] = useState("");
  const [password5, setPassword5] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(
    JSON.parse(window.localStorage.getItem("email"))
  );
  const navigate = useNavigate();

  const newPassword = Number(
    password + password1 + password2 + password3 + password4 + password5
  );

  const postRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${env}admins/forgot-password/confirm`, {
        email: email,
        confirmation_code: newPassword,
      })
      .then((res) => {
        if (res?.status === 200) {
          window.localStorage.setItem("password", JSON.stringify(newPassword));
          navigate("/newPassword");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err?.response?.status === 400) {
          toast.error("Your password is incorrect!");
        } else if (err?.message === "Network Error") {
          toast.error(err?.message);
        }
      })
      .finally(() => {
        setLoading(false);
        setPassword("");
        setPassword1("");
        setPassword2("");
        setPassword3("");
        setPassword4("");
        setPassword5("");
      });
  };

  return (
    <section>
      <div className="login_bg fixed inset-0 flex justify-center items-center">
        <div className="max-w-login_content w-full">
          <div className="flex flex-col text-center bg-white p-11 rounded-xl relative">
            <Toaster position="top-center" reverseOrder={false} />
            <Link
              to="/forget"
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
              Введите SMS-код
            </p>
            <p className="text-sm text-navBarColor mt-2 mb-5 w-10/12 mx-auto">
              Введите SMS-код, полученный на ваш номер телефона +998901234567
            </p>
            <form className="flex flex-col text-center" onSubmit={postRequest}>
              <div className="flex justify-between">
                <input
                  className="text-lg font-medium rounded-lg border outline-none w-10 h-12 px-3 py-2 mt-2 mb-3"
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  maxLength={1}
                  required
                />
                <input
                  className="text-lg font-medium rounded-lg border outline-none w-10 h-12 px-3 py-2 mt-2 mb-3"
                  type="text"
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                  maxLength={1}
                  required
                />
                <input
                  className="text-lg font-medium rounded-lg border outline-none w-10 h-12 px-3 py-2 mt-2 mb-3"
                  type="text"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  maxLength={1}
                  required
                />
                <input
                  className="text-lg font-medium rounded-lg border outline-none w-10 h-12 px-3 py-2 mt-2 mb-3"
                  type="text"
                  value={password3}
                  onChange={(e) => setPassword3(e.target.value)}
                  maxLength={1}
                  required
                />
                <input
                  className="text-lg font-medium rounded-lg border outline-none w-10 h-12 px-3 py-2 mt-2 mb-3"
                  type="text"
                  value={password4}
                  onChange={(e) => setPassword4(e.target.value)}
                  maxLength={1}
                  required
                />
                <input
                  className="text-lg font-medium rounded-lg border outline-none w-10 h-12 px-3 py-2 mt-2 mb-3"
                  type="text"
                  value={password5}
                  onChange={(e) => setPassword5(e.target.value)}
                  maxLength={1}
                  required
                />
              </div>
              <Link
                to={"/verification"}
                className="text-end text-sm text-supportColor font-medium mt-3"
              >
                SMS ni qayta jo’natish
              </Link>
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
                    "Потвердить"
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

export default Verification;
