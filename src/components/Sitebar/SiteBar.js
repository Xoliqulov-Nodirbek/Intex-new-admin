import { useState } from "react";
import Logo from "../../Assets/Images/NavbarImgs/Site-logo.svg";
import { NavLink, Link } from "react-router-dom";
import DropIcon from "../../Assets/Images/HomeContentImg/Drop.svg";
import {
  ProductIcon,
  CallIcon,
  OrderICon,
  ExitICon,
  SettingsIcon,
} from "../../Assets/Images/NavbarImgs/NavBarIcons";

export default function SiteBar() {
  const [innnerActice, setInnnerActice] = useState(false);
  const [categoryActive, setCategoryActive] = useState(false);
  const [atributActive, setAtributActive] = useState(false);
  const [navBarDrop, setNavBarDrop] = useState(false);
  function handActive() {
    setInnnerActice(true);
    setCategoryActive(false);
    setAtributActive(false);
  }
  function handCategory() {
    setCategoryActive(true);
    setInnnerActice(false);
    setAtributActive(false);
  }
  function handAtribut() {
    setAtributActive(true);
    setCategoryActive(false);
    setInnnerActice(false);
  }

  function delteInnerlink() {
    setAtributActive(false);
    setCategoryActive(false);
    setInnnerActice(false);
    setNavBarDrop(false);
  }
  function openDropDown() {
    setNavBarDrop(!navBarDrop);
  }

  return (
    <div className="bg-white w-sitebarWidth h-screen relative">
      <div className="pb-9  px-5">
        <div className="py-8 border-b-2">
          <Link to={"/"}>
            <img src={Logo} alt="Site Logo" width={180} height={17} />
          </Link>
        </div>
      </div>
      <div className="">
        <NavLink
          onClick={() => {
            delteInnerlink();
            openDropDown();
            setInnnerActice(true);
          }}
          className={`py-4 opacity-80 flex relative items-center px-6 text-sm leading-lead font-medium text-navBarColor`}
          to={"/"}
        >
          <ProductIcon />
          <span className="ml-navBarIcon">Продукты</span>
          <img
            className={`absolute right-6 duration-200 -rotate-90 ${
              navBarDrop ? "rotate-0" : ""
            }`}
            src={DropIcon}
            alt="Drop IMg"
            width={10}
            height={9}
          />
        </NavLink>
        <ul
          className={` duration-500 ${
            navBarDrop
              ? "h-auto overflow-auto opacity-100"
              : "h-0 overflow-hidden opacity-0"
          }`}
        >
          <li>
            <Link
              onClick={handActive}
              className={`${
                innnerActice ? "anterActive" : ""
              } py-2.5 opacity-80 pl-14 block font-normal text-navBarColor text-sm`}
              to={"/"}
            >
              Список продуктов
            </Link>
          </li>
          <li>
            <Link
              onClick={handCategory}
              className={`${
                categoryActive ? "anterActive" : ""
              } py-2.5 opacity-80 pl-14 block font-normal text-navBarColor text-sm`}
              to={"/category"}
            >
              Категории
            </Link>
          </li>
          <li>
            <Link
              onClick={handAtribut}
              className={`${
                atributActive ? "anterActive" : ""
              } py-2.5 opacity-80 pl-14 block font-normal text-navBarColor text-sm  `}
              to={"/atribut"}
            >
              Атрибуты
            </Link>
          </li>
        </ul>
        <NavLink
          onClick={delteInnerlink}
          className="py-4 opacity-80 flex items-center px-6 text-sm leading-lead font-medium text-navBarColor"
          to={"/order"}
        >
          <OrderICon />
          <span className="ml-navBarIcon">Заказы</span>
        </NavLink>
        <NavLink
          onClick={delteInnerlink}
          className="py-4 opacity-80 flex items-center px-6 text-sm leading-lead font-medium text-navBarColor"
          to={"/callBack"}
        >
          <CallIcon />
          <span className="ml-navBarIcon">Обратный связ</span>
        </NavLink>
        <NavLink
          onClick={delteInnerlink}
          className="py-4 opacity-80 flex items-center px-6 text-sm leading-lead font-medium text-navBarColor"
          to={"/settings"}
        >
          <SettingsIcon />
          <span className="ml-navBarIcon">Настройки сайта</span>
        </NavLink>
        <NavLink
          onClick={delteInnerlink}
          className={` py-4 opacity-80 flex items-center px-6 text-sm leading-lead font-medium text-navBarColor`}
          to={"/exit"}
        >
          <ExitICon />
          <span className="ml-navBarIcon">Выйти</span>
        </NavLink>
      </div>
      <div className="text-sm leading-lead pl-5 pb-5 text-navBarColor w-supportWidth absolute bottom-0">
        <p>
          Developed by{" "}
          <span className="text-supportColor">Support IT Solution </span>
        </p>
      </div>
    </div>
  );
}
