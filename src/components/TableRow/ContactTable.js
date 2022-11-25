import axios from "axios";
import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import TableData from "../TableData/TableData";
// Images
import ThreeDotsSvg from "../../Assets/Images/ProductsImgs/threedots.svg";
import Edit from "../../Assets/Images/ProductsImgs/edit.svg";
import Dublicate from "../../Assets/Images/ProductsImgs/duplicate.svg";
import Trash from "../../Assets/Images/ProductsImgs/trash_1.svg";

const env = process.env.REACT_APP_ALL_API;

export default function ContactTable({
  children,
  styles,
  data,
  isChecked,
  refresh,
}) {
  const [checker, setChecker] = useState(false);
  const [showModal, setshowModal] = useState(false);

  const token = JSON.parse(window.localStorage.getItem("token"));

  const handleCheck = (e) => {
    if (e.target.checked) {
      setChecker(true);
      e.target.checked = true;
    } else {
      setChecker(false);
      e.target.checked = false;
    }
  };

  const DeleteItems = (id) => {
    axios
      .delete(`${env}consultations/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <tr className={`flex items-center border-b ${styles}`}>
        {children ? (
          children
        ) : (
          <>
            <TableData styles="w-11 pr-3 justify-center">
              <input
                className="inputs w-4 h-4"
                type="checkbox"
                checked={
                  checker === true && isChecked === false
                    ? true
                    : checker === false && isChecked === false
                    ? false
                    : checker === false && isChecked === true
                    ? true
                    : checker === true && isChecked === true
                    ? true
                    : true
                }
                onChange={(e) => handleCheck(e)}
              />
            </TableData>
            <TableData styles="w-[80px]">{data.id}</TableData>
            <TableData styles="w-[393px] truncate" image={false}>
              {data.name}
            </TableData>
            <TableData styles="w-[250px]">{data.phone}</TableData>
            <TableData styles="w-[258px]">
              {data.created_at.slice(0, 10)}
            </TableData>
            <TableData styles="w-[95px] relative pl-0">
              <button
                className="mx-auto px-8 py-2"
                onClick={() => setshowModal(true)}
              >
                <img src={ThreeDotsSvg} alt="three dots icon" />
              </button>
            </TableData>
          </>
        )}
      </tr>
      {/* --- Modal --- */}
      <Modal
        isVisible={showModal}
        onClose={() => setshowModal(false)}
        className="!p-0"
        glava="!bg-white !bg-opacity-0 !flex !justify-end"
      >
        <ul className="bg-white w-[160px] border rounded-lg shadow-lg space-y-2 p-3">
          <button
            onClick={() => setshowModal(false)}
            type="button"
            className="flex"
          >
            <img className="mr-2" src={Edit} alt="just a icon to edit" />
            <span>Изменить</span>
          </button>
          <button
            onClick={() => setshowModal(false)}
            type="button"
            className="flex"
          >
            <img
              className="mr-2"
              src={Dublicate}
              alt="just a icon to dublicate"
            />
            <span>Дублировать</span>
          </button>
          <button
            onClick={() => DeleteItems(data.id)}
            type="button"
            className="flex"
          >
            <img className="mr-2" src={Trash} alt="just a icon to edit" />
            <span>Удалить</span>
          </button>
        </ul>
      </Modal>
    </>
  );
}
