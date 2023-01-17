import React from "react";
import Edit from "../../Assets/Images/TableImgs/edit.svg";
import Delete from "../../Assets/Images/TableImgs/trash.svg";
import Dots from "../../Assets/Images/TableImgs/dots.svg";
import { Link } from "react-router-dom";
import axios from "axios";

export default function EditModal({ modalId }) {
  const [isModalOpened, setisModalOpened] = React.useState(false);
  const handleModal = () => {
    setisModalOpened(true);
  };

  window.addEventListener("click", (e) => {
    const { name } = e.target;
    if (name !== `modalDots${modalId}`) {
      setisModalOpened(false);
    }
  });

  const handleDelete = () => {
    axios.delete("URL", {
      headers: {
        Authorization: ``,
      },
      data: {
        source: "source",
      },
    });
  };
  return (
    <td className="flex ml-10  flex-grow w-[95px] py-[17px] cursor-pointer relative">
      <img
        src={Dots}
        alt="three dots"
        onClick={handleModal}
        name={`modalDots${modalId}`}
      />
      <div
        id="oram"
        className={`${
          isModalOpened ? "grid" : "hidden"
        } absolute left-[10%] top-0 bottom-0 grid-cols-1 text-start border bg-white p-1 space-y-1 rounded-[5px] shadow-[0px_12px_23px_rgba(150, 150, 150, 0.1)]`}
      >
        <Link className="flex items-center text-xs" to="/bnnma">
          <img src={Edit} alt="" width={16} height={17} />
          Изменить
        </Link>
        <button className="flex items-center text-xs" onClick={handleDelete}>
          <img src={Delete} alt="" width={16} height={17} />
          Удалить
        </button>
      </div>
    </td>
  );
}
