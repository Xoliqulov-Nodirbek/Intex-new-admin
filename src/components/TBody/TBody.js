import React from "react";
import { useState } from "react";
import Dots from "../../Assets/Images/TableImgs/dots.svg";
import Edit from "../../Assets/Images/TableImgs/edit.svg";
import Delete from "../../Assets/Images/TableImgs/trash.svg";

export default function TBody({ vitalData }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    if (e.target.id === "oram") setShowModal(false);
  };
  return (
    <tbody className="bg-white">
      <tr className="h-2.5 bg-[#E5E5E5]"></tr>
      {vitalData.length > 0 &&
        vitalData.map((el, i) => {
          return (
            <tr className="flex items-center border-t" key={i}>
              <td className="w-11 flex justify-center">
                <input className="w-4 h-4 cursor-pointer" type="checkbox" name={`input${i}`} />
              </td>
              {el.map((a, i) => {
                return (
                  <td className={`py-3 pl-3 ${a.style}`} key={i}>
                    {a.image ? (
                      <img
                        className="w-6 h-6 rounded-full mr-[6px]"
                        src="https://via.placeholder.com/24x24"
                        alt="admins_image"
                      />
                    ) : null}
                    <span className={`truncate text-base text-[#24283A] ${a.textClass}`}>
                      {a.title}
                    </span>
                  </td>
                );
              })}
              <td
                onClick={() => setShowModal(true)}
                className="relative flex justify-center w-[95px] py-[17px] cursor-pointer"
              >
                <img src={Dots} alt="three dots" />
                {showModal ? (
                  <div
                    id="oram"
                    onClick={handleClick}
                    className="absolute grid grid-cols-1 text-start border bg-white p-3 space-y-3 rounded-[5px] shadow-[0px_12px_23px_rgba(150, 150, 150, 0.1)]"
                  >
                    <button className="flex items-center">
                      <img src={Edit} alt="" />
                      Изменить
                    </button>
                    <button className="flex items-center">
                      <img src={Delete} alt="" />
                      Удалить
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </td>
            </tr>
          );
        })}
    </tbody>
  );
}
