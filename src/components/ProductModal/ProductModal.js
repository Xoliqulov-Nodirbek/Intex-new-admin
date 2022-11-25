import React, { useState } from "react";
import OrderPage from "../../Pages/Order/OrderPage";

// Images
import Edit from "../../Assets/Images/ProductsImgs/edit.svg";
import Dublicate from "../../Assets/Images/ProductsImgs/duplicate.svg";
import Trash from "../../Assets/Images/ProductsImgs/trash_1.svg";

export default function ProductModal({ dataInfo, delEdit, handlDelteUnik }) {
  const [showModal, setShowMoadal] = useState(false);
  return (
    <>
      <ul className="flex flex-col gap-y-2.5 absolute bg-white p-3 w-[160px] top-9 -right-8 z-50 border rounded-lg shadow-lg">
        <button type="button relative" className="flex">
          <img className="mr-2" src={Edit} alt="just a icon to edit" />
          <span>Изменить</span>
        </li>
        <li className="flex">
          <img
            className="mr-2"
            src={Dublicate}
            alt="just a icon to dublicate"
          />
          <span>Дублировать</span>
        </button>
        <button type="button" className="flex">
        </li>
        <li onClick={handlDelteUnik} className="flex">
          <img className="mr-2" src={Trash} alt="just a icon to edit" />
          <span>Удалить</span>
        </li>
      </ul>
      <OrderPage
        isVisible={showModal}
        onClose={() => {
          setShowMoadal(false);
        }}
        datas={dataInfo}
      />
    </>
  );
}
