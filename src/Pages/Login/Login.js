/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import useToken from "../../Hook/useToken";
import Visible from "./Visible.png";
import IsVisible from "./IsVisible.png";

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
      <div className="fixed inset-0 flex justify-center items-center">
        <div>
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-3xl mb-5">Login</h1>
            <form className="flex flex-col text-center" onSubmit={handleClick}>
              <input
                className="border outline-none px-3 py-1 mb-3"
                type="text"
                value={name}
                placeholder="username"
                onChange={(e) => setName(e.target.value)}
              />
              <div className="relative flex">
                <input
                  className="border outline-none pl-3 pr-9 py-1 mb-5"
                  type={icon ? "text" : "password"}
                  value={password}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="cursor-pointer absolute right-0 top-2 mr-2"
                  onClick={() => {
                    setIcon(!icon);
                  }}
                >
                  {icon ? (
                    <img className="w-5" src={Visible} alt="show_image" />
                  ) : (
                    <img className="w-5" src={IsVisible} alt="show_image" />
                  )}
                </div>
              </div>
              <button
                className="border w-fit mx-auto px-10 py-1 rounded-md bg-sky-700 text-white mb-10"
                type="submit"
              >
                Login
              </button>
            </form>
            <p className="font-semibold text-xl">Or login using</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
