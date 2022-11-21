/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Arrow from "../../Assets/Images/LoginImg/arrow.svg";
import Loader from "../../Assets/Images/LoginImg/loader.svg";
import SubmitBtn from "../../BaseComponents/SubmitFormBtn/Button";
import { toast, Toaster } from "react-hot-toast";
import ReactCodeInput from "react-code-input";
import "./login.css";

const env = process.env.REACT_APP_ALL_API;

function Verification() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinuts] = useState(0);

  const [backMinutes, setbackMinutes] = useState();
  const [bacSeconds, setbacSeconds] = useState();

  const [email, setEmail] = useState(
    JSON.parse(window.localStorage.getItem("email"))
  );
  const navigate = useNavigate();

  const postRequest = async (e) => {
    e.preventDefault();

    setLoading(true);
    axios
      .post(`${env}admins/forgot-password/confirm`, {
        email: email,
        confirmation_code: Number(password),
      })
      .then((res) => {
        if (res?.status === 200) {
          window.localStorage.setItem("password", password);
          navigate("/newPassword");
        }
      })
      .catch((err) => {
        if (err?.response?.status === 400) {
          toast.error("Your password is incorrect!");
        } else if (err?.response?.status === 409) {
          toast.error("Your password is incorrect!");
        } else if (err?.message === "Network Error") {
          toast.error(err?.message);
        }
      })
      .finally(() => {
        setLoading(false);
        setPassword("");
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`${env}admins/forgot-password`, {
        email: email,
      })
      .then((res) => {
        if (res?.status === 200) {
          toast.success("Confirmation code send your email!");
        }
      })
      .catch((err) => {
        if (err?.message === "Network Error") {
          toast.error(err?.message);
        }
      });
  };

  var timer;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinuts(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

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
            <h1>
              {minutes < 10 ? "0" + minutes : minutes} :{" "}
              {seconds < 10 ? "0" + seconds : seconds}
            </h1>
            <form className="flex flex-col text-center" onSubmit={postRequest}>
              <div className="flex justify-center">
                <ReactCodeInput
                  onChange={(e) => setPassword(e)}
                  value={password}
                  className={"space-x-6"}
                  inputStyle={{
                    font: "bold",
                    fontSize: "20px",
                    textAlign: "center",
                    width: "40px",
                    height: "50px",
                    outline: "none",
                    border: "2px solid #E3E5E5",
                    borderRadius: "8px",
                  }}
                  type="text"
                  fields={6}
                  autoComplete="off"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="text-end text-sm text-supportColor font-medium mt-6"
              >
                SMS ni qayta jo’natish
              </button>
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
