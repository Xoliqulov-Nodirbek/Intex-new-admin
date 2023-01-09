import React from "react";
import { Link } from "react-router-dom";
import HomeImg from "../../Assets/Images/HeaderImgs/HomeImg.svg";

function UserPage() {
  return (
    <>
      <div className="bg-white flex items-center w-full pt-1.5 pb-1.5 px-8">
        <Link className="flex items-center" to={"/"}>
          <img src={HomeImg} alt="Home Img" width="16" height="16" />
        </Link>
        <span className="ml-2.5 text-navSubColor ">/</span>
        <Link
          to="/userpage
        "
        >
          <h2 className="font-normal text-navSubColor text-xs ml-2.5">Пользователи</h2>
        </Link>
      </div>
    </>
  );
}

export default UserPage;
